import React from 'react'

const Publicar = () => {
  return (
    <div  >
        <body className="bg-gray-100 flex   publicar mt-10 " >
           
  <div className=" bg-dark mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
    <h1 className='text-center text-xl  mb-3'>
        Publica y vende
    </h1>
    <form>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
              Nombre del producto
            </label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Nombre" />
            <div>
              <span className="text-red-500 text-xs italic">
                Rellenar todos los campos!.
              </span>
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
              Precio
            </label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Precio del producto" />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="application-link">
              Categoria
            </label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="Puros, Cigarros, Tabacos" />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <p>Subir imagen:</p>
          <input accept="image/*" type="file" multiple className='rounded  my-3' />   
          </div>
         
        </div>
       
        <div className="-mx-3 md:flex mt-2">
       
          <div className="md:w-full px-3">
            <button className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
              Publicar
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</body>


    </div>
  )
}

export default Publicar