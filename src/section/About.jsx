import React from 'react'
import Globe from 'react-globe.gl'
import { color } from 'three/webgpu'

const About = () => {
  return (
    <section className='c-space my-20' id='about'>
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full'>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src='/assets/girl.png' alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain opacity-75'/>
                    <div>
                        <p className='grid-headtext'>Hi,I'm Jeniya</p>
                        <p className='grid-subtext'> I'm a frontend developer who loves building visually appealing and user-friendly websites.</p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 xl:row-span-3'>
                <div className="grid-container">
                    <img src='/assets/grid3.png' alt='grid-3' className='w-full sm:h-[276px] h-fit object-contain'/>
                    <div>
                        <p className='grid-headtext'>Tech stack</p>
                        <p className='grid-subtext'>I specialize in Javascript with the focus on React ecosystems</p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 xl:row-span-3'>
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[276px] h-fit flex justify-center items-center">
                        <Globe 
                            height={326}
                            width={326}
                            backgroundColor='rgba(0,0,0,0)'
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{
                                lat: 13, lng:80,
                                text: "I'm here",
                                color: 'white',
                                size: 20
                            }]}
                        />
                    </div>
                    <div>
                    <p className='grid-headtext'>I'm very flexible with timezones</p>
                    <p className='grid-subtext'>I'm based in chennai, Tamilnadu and open to remote work worldwide.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About