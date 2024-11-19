import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Tutorials = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='mt-12'>
      <div >
        <h1 className='text-center animate__animated animate__rubberBand  text-xl md:text-5xl font-bold'>Learn with Our <br /> Easy-to-Follow  Tutorials</h1>
        <p className='font-mono text-center opacity-70 pt-9'>Our tutorials are simple, clear, and designed to help you learn quickly.  With easy steps <br /> and practical examples, you'll master new skills in no time. <br /> Start your learning journey today!</p>
      </div>
      <div className='grid md:grid-cols-2 gap-4'>



        <div className='mt-12 border bg-slate-300  p-4 border-[#9660ea]  rounded-md'>
          <iframe className='w-full h-96' src="https://www.youtube.com/embed/Ni-YnsF72AY?si=KavsBHOPRNlcD1HK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <div className='mt-12 border bg-slate-300  p-4 border-[#9660ea]  rounded-md'>
          <iframe className='w-full h-96' src="https://www.youtube.com/embed/SSjmWPgpphI?si=JXpgIfYJuTW-bpTw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <div data-aos="fade-zoom-in " data-aos-offset="200" data-aos-duration="1000" className='mt-12 border bg-slate-300  p-4 border-[#9660ea]  rounded-md'>
          <iframe className='w-full h-96' src="https://www.youtube.com/embed/DAp_v7EH9AA?si=BuPTB32yDmoeOzoi" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <div data-aos="fade-zoom-in " data-aos-offset="200" data-aos-duration="1000" className='mt-12 border bg-slate-300  p-4 border-[#9660ea]  rounded-md'>
          <iframe className='w-full h-96' src="https://www.youtube.com/embed/bK4EBWp3suk?si=tmnlsyCAMOlUyd2S" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <div data-aos="fade-zoom-in " data-aos-offset="200" data-aos-duration="1000" className='mt-12 border bg-slate-300  p-4 border-[#9660ea]  rounded-md'>
          <iframe className='w-full h-96' src="https://www.youtube.com/embed/4ehG-7v21NQ?si=HiuKXzz-F2Oe3UAX" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <div data-aos="fade-zoom-in " data-aos-offset="200" data-aos-duration="1000" className='mt-12 border bg-slate-300  p-4 border-[#9660ea] rounded-md'>
          <iframe className='w-full h-96' src="https://www.youtube.com/embed/tP3HjcaqAlM?si=iyK1zzhxFdCw7MhH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>


      </div>
      <div className='flex justify-center pt-14'>
        <NavLink to='/learning' className='btn btn-neutral bg-[#9660ea] text-white'>Learn Vocabularies</NavLink>
      </div>
    </div>
  );
};

export default Tutorials;