# Solvia — deploy na Vercel

Este pacote foi preparado para o repositório estático atual da Solvia na Vercel.

## O ponto mais importante

Substitua o `vercel.json` antigo. Não mantenha este bloco antigo:

```json
{
  "version": 2,
  "builds": [
    { "src": "index.html", "use": "@vercel/static" }
  ]
}
```

Quando `builds` é usado, a Vercel inclui somente os outputs allowlisted. Como o novo site tem páginas, assets, `robots.txt`, `sitemap.xml`, imagens e outros arquivos, deixar apenas `index.html` impediria a arquitetura completa de ser publicada.

O novo `vercel.json` usa a configuração moderna da Vercel e deixa o CDN publicar os arquivos estáticos diretamente.

## Estrutura do repositório

Copie o conteúdo desta pasta para a RAIZ do repositório:

- `index.html`
- `vercel.json`
- `robots.txt`
- `sitemap.xml`
- `feed.xml`
- `llms.txt`
- `site.webmanifest`
- `404.html`
- `assets/`
- `agente-de-ia-whatsapp/`
- `automacao-whatsapp-clinicas/`
- `apps-sob-medida/`
- `integracoes-whatsapp-crm-agenda/`
- `cases/`
- `recursos/`
- `sobre/`
- `contato/`
- `privacidade/`
- `termos/`
- `.github/`
- `tools/`

A `.vercelignore` impede que `.github`, `tools` e este README sejam publicados como arquivos do site, mas eles continuam no GitHub para automação do IndexNow e documentação.

## Deploy

Como o projeto já está conectado GitHub -> Vercel, basta commit/push. Não é necessário Docker, Nginx, `npm install` nem build command.

No projeto da Vercel, mantenha o Framework Preset como **Other** / site estático e não defina Output Directory ou Build Command personalizados.

## O que o vercel.json faz

- padroniza URLs com `/` final para evitar duplicidade;
- redireciona `index.html` para a URL canônica;
- aplica cache de 1 ano para assets versionados;
- aplica headers de segurança sem bloquear o chat/n8n;
- deixa HTML, sitemap, robots e demais arquivos serem servidos nativamente pelo CDN da Vercel.

A Vercel já faz compressão/edge delivery; não é necessário `nginx.conf` para gzip/Brotli.

## Depois de publicar

Confira estas URLs em produção:

- `https://solviaoficial.com/`
- `https://solviaoficial.com/robots.txt`
- `https://solviaoficial.com/sitemap.xml`
- `https://solviaoficial.com/llms.txt`
- `https://solviaoficial.com/agente-de-ia-whatsapp/`
- `https://solviaoficial.com/automacao-whatsapp-clinicas/`
- `https://solviaoficial.com/recursos/agente-ia-whatsapp-guia/`

Depois cadastre `https://solviaoficial.com/sitemap.xml` no Google Search Console e Bing Webmaster Tools.

## Verificação Google/Bing

Não há códigos falsos no HTML. Quando Google Search Console e Bing Webmaster Tools fornecerem os códigos reais, adicione-os no `<head>` da home:

```html
<meta name="google-site-verification" content="CODIGO_REAL_GOOGLE">
<meta name="msvalidate.01" content="CODIGO_REAL_BING">
```

Se a verificação for feita por DNS, essas duas tags não são necessárias.

## IndexNow

O arquivo de chave IndexNow está na raiz e o workflow `.github/workflows/indexnow.yml` executa `tools/indexnow-submit.mjs` em pushes na `main`/`master`. O script só envia as URLs depois de detectar a chave pública no domínio, o que evita notificar o índice antes de o deploy estar disponível.
