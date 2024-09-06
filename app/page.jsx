/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect,useState } from 'react'
import { screens } from './screens'


function Home() {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if(prev === 5){
          return 0
        }
        return prev + 1
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full flex flex-col md:flex-row-reverse md:items-center md:justify-center h-screen bg-black relative overflow-hidden ">
      {/* bg gradient */}
      <div className="top-[-190px] left-[-400px] w-[1103px] h-[1017px] hidden md:flex absolute bg-[radial-gradient(35.19%_35.19%_at_50%_50%,rgba(59,149,255,0.17)_0%,rgba(28,106,197,0)_100%)] overflow-clip "></div>

        {/* top slider for small screens */}
        <div className='min-h-[60px] md:hidden flex items-center justify-center p-2'>
          <div className='w-full max-w-[400px] bg-slider-bg h-[3px] rounded-full'> 
            <div className={`${index==5?"bg-slider-green":"bg-slider-blue"} h-full relative transition-all ease-out rounded-full`} style={{width:screens[index].slider}}>
              <div className={`${index==5?"bg-slider-green":"bg-slider-blue"} w-[14px] h-[14px] rounded-full absolute top-1/2 right-0 -translate-y-1/2`}></div>
            </div>
          </div>
        </div>
        {/* right slider for larger screens */}
        <div className='h-full w-full max-w-[300px] max-md:hidden flex items-center justify-center p-2'>
          <div className='h-full max-h-[400px] bg-slider-bg w-[3px] rounded-full'> 
            <div className={`${index==5?"bg-slider-green":"bg-slider-blue"} h-full relative transition-all ease-out rounded-full`} style={{height:screens[index].slider}}>
              <div className={`${index==5?"bg-slider-green":"bg-slider-blue"} w-[14px] h-[14px] rounded-full absolute left-1/2 bottom-0 -translate-x-1/2`}></div>
            </div>
          </div>
        </div>
        {/* page content */}
        <div className='flex flex-col md:flex-row w-full md:w-[calc(100%-300px)]  h-[calc(100%-60px)] md:h-full gap-y-5 md:gap-x-10 items-center justify-center md:items-center'>
            {/* text content */}
            <div className='flex felx-col w-full max-w-[380px] md:max-w-[422px]'>
              <div className='flex items-start justify-center flex-col gap-y-[16px] md:gap-y-[48px] p-4 py-2  w-full'>
                <h1 className='text-header md:text-header-lg md:leading-[64px] text-header-gray font-medium max-w-[283px]'>{screens[index].title}</h1>
                <span className={'h-[2px] bg-line-blue w-[85px] rounded-full'}></span>
                <div className='w-full text-description md:text-description-lg md:leading-[28px]'>
                  {screens[index].description}
                </div>
              </div>
            </div>
            {/* image and arrow*/}
            <div className=' h-[calc(100%-206px)] w-fit md:h-full relative md:max-h-screen md:w-fit min-w-[300px] max-w-[340px] flex-shrink'>
                <img fill src={screens[index].image} alt="onboarding image" className={`h-full max-md:mx-auto md:w-full md:h-auto flex-shrink md:flex-shrink-0 md:absolute transition-all duration-300 ease-out ${screens[index].img_layout}`} />
                {screens[index]?.arrow && <img fill src='/arrow.png' alt="indication arrow" className={`max-md:hidden w-full h-auto absolute transition-all duration-300 ${screens[index].arrow}`} style={screens[index]?.arrow_additional||{}} />}
            </div>
        </div>
    </section>
  )
}

export default Home

