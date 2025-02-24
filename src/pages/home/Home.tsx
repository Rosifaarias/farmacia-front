function Home() {
  return (
    <>
      <div className="bg-green-900 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Sejam Bem-Vides!!!</h2>
            <p className="text-xl">Os melhores preços da região!</p>

            <div className="flex justify-around gap-4">
              <div
                className="rounded text-white 
                                              border-white border-solid border-2 py-2 px-4"
              >
                Produtos
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
