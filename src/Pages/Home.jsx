function Home() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&auto=format&fit=crop')",
      }}
    >
      <div className="bg-black/50 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 text-white">
          <h1 className="text-6xl font-bold">
            Discover Your Style
          </h1>

          <p className="mt-6 text-xl">
            Premium Fashion Collection for Men & Women.
          </p>

          <button className="mt-8 bg-pink-600 px-8 py-3 rounded-lg hover:bg-pink-700">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;