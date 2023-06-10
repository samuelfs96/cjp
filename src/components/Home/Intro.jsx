const Intro = () => {
  return (
    <div className='h-[80vh] flex items-center justify-center'>
        <div className='bg-bg1 bg-cover h-full w-full' style={{filter: 'brightness(0.6)'}}></div>
        <div className='absolute text-center gap-4 flex flex-col items-center'>
            <h1 className=' text-white p-8 text-3xl text-center font-thin'>Estamos dedicados a la satisfacción de nuestros clientes y garantizamos nuestros productos.</h1>
            <a href="https://tienda.cjp.mx" target="_blank" rel="noreferrer" className='text-white px-8 py-3 bg-clp-purple rounded-full pulse'>Ir a Tienda</a>
        </div>
    </div>
  )
}

export default Intro