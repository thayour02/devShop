import { service } from '../data/data'
import { Link } from 'react-router-dom'

export default function Service() {

  return (
    <div className="max-w-screen-2xl mx-auto bg-blue-200  min-h-[1200px]">
      <div className='pt-20'>
        <h1 className="text-red-200 text-center font-semibold uppercase tracking-wide text-2xl mb-2">Our Process</h1>
        <h2 className="text-4xl md:text-2xl text-center leading-[30px]">We carry out the following process to meet your standard and want..</h2>
      </div>
      <div className=" flex mt-10 items-center justify-center">
        <div className='grid sm:grid-cols-3 grid-cols-1 gap-8 items-center '>
          {
            service.map((item, i) => (
              <div key={i} className="card bg-base-100 w-80 shadow-xl text-center  hover:scale-105 transition-all duration-200">
                <figure>
                  <img
                    src={item.image}
                    alt="Shoes"
                    className='h-[35vh] w-full' />
                </figure>
                <div className="card-body items-center">
                  <h2 className="card-title ">{item.title}</h2>
                  <p>{item.des}</p>
                  <div className="card-actions justify-end">
                  <Link to="/contact" className="btn items-center">Contact us</Link>

                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>



    </div>
  )
}