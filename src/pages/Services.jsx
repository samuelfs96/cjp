import { Card } from 'flowbite-react'
import React from 'react'

const Services = () => {
  return (
    <>
      <div className='h-[80vh] flex items-center justify-center'>
          <div className='bg-bg3 bg-cover h-full w-full' style={{filter: 'brightness(0.6)'}}></div>
          <div className='absolute text-center gap-4 flex flex-col items-center'>
              <h1 className=' text-white p-8 text-3xl text-center font-thin'>PRODUCTOS Y <span className='font-bold'>SERVICIOS</span></h1>
          </div>
      </div>
      <div className="container pt-24 pb-24">
        <div className='container grid grid-cols-3 max-xl:grid-cols-1 text-center text-white font-thin text-xl gap-8'>
          <Card style={{backgroundColor: '#6B43BC', borderRadius: '100px'}} className="p-6">
            <div className="gap-8 mt-4 flex flex-col items-center">
              <div className='w-52 h-52 border-4 border-white bg-security bg-center bg-cover bg-no-repeat rounded-full'></div>
              <p>
                Instalación, configuración y venta de equipo de cableado  estructurado, 
                videovigilancia, control de acceso, detección de incendio, paneles solares, 
                VPN's, ruteadores, soluciones inalámbricas (enlaces inalámbricos metropolitanos y/o dispositivos móviles, etc).
              </p>
            </div>
          </Card>
          <Card style={{backgroundColor: '#6B43BC', borderRadius: '100px'}} className="p-6">
          <div className="gap-8 flex flex-col items-center">
            <div className='w-52 h-52 border-4 border-white bg-support bg-center bg-cover bg-no-repeat rounded-full'></div>
            <p>Asesoría y soporte técnico.</p>
          </div>
          </Card>
          <Card style={{backgroundColor: '#6B43BC', borderRadius: '100px'}} className="p-6">
          <div className="gap-8 flex flex-col items-center">
            <div className='w-52 h-52 border-4 border-white bg-router bg-center bg-cover bg-no-repeat rounded-full'></div>
            <p>Servicio de Voip</p>
          </div>
          </Card>
          <Card style={{backgroundColor: '#6B43BC', borderRadius: '100px'}} className="p-6">
          <div className="gap-8 flex flex-col items-center">
            <div className='w-52 h-52 border-4 border-white bg-shop bg-center bg-cover bg-no-repeat rounded-full'></div>
            <p>Asesoría e implementación de tienda en línea.</p>
          </div>
          </Card>
          <Card style={{backgroundColor: '#6B43BC', borderRadius: '100px'}} className="p-6">
          <div className="gap-8 flex flex-col items-center">
            <div className='w-52 h-52 border-4 border-white bg-courses bg-center bg-cover bg-no-repeat rounded-full'></div>
            <p>Impartición de cursos especializados y certificaciones.</p>
          </div>
          </Card>
          <Card style={{backgroundColor: '#6B43BC', borderRadius: '100px'}} className="p-6">
          <div className="gap-8 flex flex-col items-center">
            <div className='w-52 h-52 border-4 border-white bg-ing bg-center bg-cover bg-no-repeat rounded-full'></div>
            <p>Desarrollo e ingeniería de proyectos y soluciones llave en mano.</p>
          </div>
          </Card>
          <Card style={{backgroundColor: '#6B43BC', borderRadius: '100px'}} className="p-6">
          <div className="gap-8 flex flex-col items-center">
            <div className='w-52 h-52 border-4 border-white bg-phone bg-center bg-cover bg-no-repeat rounded-full'></div>
            <p>Servicio de telefonía empresarial IP.</p>
          </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Services