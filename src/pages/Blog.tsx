const Blog = () => {
  return (
    <div className="flex flex-col min-h-[60vh]">
      <section className="py-24 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-montserrat font-extrabold mb-6">
              Blog{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Solvia
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Em breve, conteúdos sobre IA, automação e como devolver o tempo para o que importa
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
