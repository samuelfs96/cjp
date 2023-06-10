import Img1 from '../img/icons/phone.png'
import Img2 from '../img/icons/email.png'
import Img3 from '../img/icons/location.png'

const Contact = () => {
  return (
    <div>
      <div className="text-sgl-gray">
        <div className='bg-slate-50 pt-24 pb-24'>
          <div className="container">
            <h1 className="text-center text-4xl text-clp-purple font-bold mb-16">Contáctanos</h1>
            <div className="flex justify-center items-start gap-8 max-sm:flex-col max-sm:items-center">
              <div className="w-[23.33%] max-sm:w-auto text-center flex flex-col justify-start items-center gap-4 pb-4">
                <img src={Img1} alt="icon1" className='w-[64px]'/>
                <h2 className="text-2xl text-sgl-black font-bold">Teléfono</h2>
                <p className="text-sgl-gray font-lato">+52 (33) 8000 0800</p>
              </div>
              <div className="w-[23.33%] max-sm:w-auto text-center flex flex-col justify-start items-center gap-4 pb-4">
                <img src={Img2} alt="icon2" className='w-[64px]'/>
                <h2 className="text-2xl text-sgl-black font-bold">Email</h2>
                <p className="text-sgl-gray font-lato">hola@cjp.mx</p>
              </div>
              <div className="w-[23.33%] max-sm:w-auto text-center flex flex-col justify-start items-center gap-4 pb-4">
                <img src={Img3} alt="icon3" className='w-[64px]'/>
                <h2 className="text-2xl text-sgl-black font-bold">Ubicación</h2>
                <p className="text-sgl-gray font-lato">Av. de las Américas 1254, Piso 10, Oficina 1, Col. Country Club, 44610 Guadalajara, Jalisco, Mexico.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-24 mb-24">
          <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.309835872662!2d-103.37347799999999!3d20.6976393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae2250214b91%3A0xd7deffecec4956ee!2sCJP%20Telecom!5e0!3m2!1ses!2sve!4v1670357786009!5m2!1ses!2sve" style={{border: 0, width: '100%', height: '600px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact