import { 
  WrenchScrewdriverIcon, 
  BriefcaseIcon, 
  StarIcon, 
  ArrowTrendingUpIcon, 
  ShieldCheckIcon, 
  ShieldExclamationIcon, 
  PresentationChartBarIcon,
  UserPlusIcon
} from '@heroicons/react/24/solid'

import Logo from '../img/logo.png'

const About = () => {
  return (
    <>
      <div className='h-[80vh] flex items-center justify-center'>
          <div className='bg-bg2 bg-cover h-full w-full' style={{filter: 'brightness(0.6)'}}></div>
          <div className='absolute text-center gap-4 flex flex-col items-center'>
              <h1 className=' text-white p-8 text-3xl text-center font-thin'>¿QUIENES <span className='font-bold'>SÓMOS?</span></h1>
          </div>
      </div>
      <div className="container pt-24 pb-24 bg-slate-50">
        <p className='text-center text-clp-gray'>
          En CJP Telecom ofrecemos soluciones inteligentes de conectividad, <br />
          enlace y movilidad que tú y tu empresa necesitan para su desarrollo tecnológico, <br /> 
          a través de nuestro personal certificado a nivel internacional; <br />
          respaldado por su alto conocimiento y más de 20 años de experiencia. 
        </p>
      </div>
      <div className="container pt-24 pb-24">
        <div className="flex justify-center text-center max-lg:flex-col">
          <div className='container flex flex-col justify-center items-center max-lg:mb-16'>
            <h2 className='text-2xl font-bold mb-8'>MISION</h2>
            <p className='text-clp-gray mb-16'>Proveer productos de calidad y soluciones confiables para las telecomunicaciones, que satisfagan las necesidades y los requerimientos del cliente. </p>
            <div className='w-64 h-64 bg-mision bg-center bg-cover bg-no-repeat rounded-full'></div>
          </div>
          <div className='container flex flex-col justify-center items-center max-lg:mb-16'>
            <h2 className='text-2xl font-bold text-clp-purple mb-8'>VISION</h2>
            <p className='text-clp-gray mb-16'>Consolidarnos en el mercado nacional como una empresa líder en el área de las telecomunicaciones que provee productos y servicios con los mas altos estándares de calidad y servicio. </p>
            <div className='w-64 h-64 bg-vision bg-center bg-cover bg-no-repeat rounded-full'></div>
          </div>
        </div>
      </div>
      <div className="container pt-24 pb-24 bg-slate-50">
        <h1 className='text-3xl font-bold text-clp-gray mb-8 text-center'>VALORES</h1>
        <div className='text-center mt-16 mb-12 grid grid-cols-4 max-lg:grid-cols-1 gap-10 container'>
          <div className='flex flex-col items-center justify-center gap-4'>
            <BriefcaseIcon className='h-[64px] text-clp-gray' />
            <h2 className='font-bold text-2xl text-clp-gray'>Trabajo</h2>
          </div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <StarIcon className='h-[64px] text-clp-gray' />
            <h2 className='font-bold text-2xl text-clp-gray'>Excelencia</h2>
          </div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <WrenchScrewdriverIcon className='h-[64px] text-clp-gray' />
            <h2 className='font-bold text-2xl text-clp-gray'>Innovación</h2>
          </div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <ArrowTrendingUpIcon className='h-[64px] text-clp-gray' />
            <h2 className='font-bold text-2xl text-clp-gray'>Crecimiento</h2>
          </div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <ShieldCheckIcon className='h-[64px] text-clp-gray' />
            <h2 className='font-bold text-2xl text-clp-gray'>Lealtad</h2>
          </div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <ShieldExclamationIcon className='h-[64px] text-clp-gray' />
            <h2 className='font-bold text-2xl text-clp-gray'>Honestidad</h2>
          </div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <PresentationChartBarIcon className='h-[64px] text-clp-gray' />
            <h2 className='font-bold text-2xl text-clp-gray'>Servicio</h2>
          </div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <UserPlusIcon className='h-[64px] text-clp-gray' />
            <h2 className='font-bold text-2xl text-clp-gray'>Responsabilidad Social</h2>
          </div>
        </div>
      </div>
      <div className="container pt-24 pb-24">
        <h1 className='text-3xl font-bold text-clp-purple mb-8 text-center'>OBJETIVO</h1>
        <div className='flex justify-center text-center max-lg:flex-col pt-8'>
          <div className='container flex max-xl:flex-col justify-center items-center gap-16'>
            <p className='text-clp-gray'>Proveer productos y servicios de calidad para las telecomunicaciones <br />
              y tecnología de la información que satisfagan los requerimientos del cliente <br />
              y que lo mantengan con la mejor tecnología del mercado. </p>
            <div className='w-64 h-64 bg-objetivo bg-center bg-cover bg-no-repeat rounded-full'></div>
          </div>
        </div>
      </div>
      <div className="container pt-24 pb-24 bg-slate-50 flex flex-col justify-center items-center gap-8">
        <img src={Logo} alt="logo" className='w-80' />
        <h1 className='text-2xl font-bold text-clp-gray text-center'>PERFIL DE LA COMPAÑÍA</h1>
        <div className='flex justify-center text-center max-lg:flex-col pt-8'>
          <div className='container text-center'>
            <p className='text-clp-gray'>
              La empresa fue fundada por Cesar Bagatella en 1999, quien comenzó prestando 
              servicios profesionales como administrador de redes, implementación de soluciones e 
              impartición de cursos a diferentes empresas, como son: el H Ayuntamiento de Tlaquepaque, 
              el Colegio Altamira, SIMENS, Proesa Tecnogas, PEMEX, entre otras. Con el paso de los años 
              hemos logrado un crecimiento y evolución en todos los aspectos consolidándonos como “CJP Telecom”, 
              ubicada en Av. De las Americas 1254 Piso 10, Oficina 1, col Country Club, C.P. 44610, en la Ciudad de 
              Guadalajara, Jalisco. <br /><br />
              A partir de sus inicios hemos visto a México pasar por períodos de expansión, 
              transición y consolidación, que a su vez nos han traído retos y oportunidades. Sin embargo, a pesar 
              del clima económico, hemos luchado y emprendido nuevos proyectos, con el fin de hacerle frente a 
              estos restos. En Julio del 2007 decidimos incrementar nuestro portafolio de productos y servicios, 
              incluyendo además del soporte técnico y la asesoría para que el desarrollo e implementación de sus 
              proyectos sean a la medida de sus necesidades, la distribución a nivel nacional de equipo para las 
              telecomunicaciones como son routers, switches, acces point, controles biométricos de acceso y 
              asistencia, telefonía IP, circuito cerrado. Esto nos llevó a incrementar notablemente la 
              cartera de clientes al habernos expandido a nivel nacional. <br /><br />
              En el año 2012 logramos ser un 
              centro autorizado y acreditado por la academia de Ubiquiti Networks para el entrenamiento 
              de las certificaciones UBRSS, UBWA y UEWA, para lo cual contamos con 3 instructores capacitados 
              y autorizados para impartir las 3 certificaciones disponibles. 
              Desde hace 5 años también hemos brindado varias opciones para mejorar los procesos y 
              la imagen corporativa y de nuestros clientes y colaboradores mediante el Servicio telefónico en la nube. <br /><br />
              Nuestro más reciente proyecto es el desarrollo de una plataforma para poner en marcha una tienda en línea, 
              en la cual tareas como el alta de productos, la actualización de precios y existencias, se realizan de 
              forma automatizada, tomando como referencia la información del almacén.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About