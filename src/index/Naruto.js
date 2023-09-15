import React, { useRef } from 'react'
import video from './video/naruto.mp4';

export const Naruto = () => {

  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play()
  };
  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
   <div>
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Naruto
          <br className="hidden lg:inline-block" />Full Name Naruto Uzumaki 
        </h1>
        <p className="mb-8 leading-relaxed">Naruto Uzumaki (Hepburn: Uzumaki Naruto) is the titular protagonist of the manga Naruto, created by Masashi Kishimoto. As the series progresses, he is a young ninja from the fictional village of Konohagakure (Hidden Leaf Village).</p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handlePlay} type="button">Play</button>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" onClick={handlePause} type="button">Pause</button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" >
      
      <video ref={videoRef} style={{borderRadius: '20px'}}>
        <source src={video} />
      </video>

      </div>
    </div>
  </section>
  <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
      <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://raw.githubusercontent.com/HeroX21/mflix/98883a0e0225459ead7c9d1a221af06f2094a380/WallpaperDog-976690.jpg" />
      <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Watch all shows of <b>Nruto</b></h1>
        <p className="mb-8 leading-relaxed"><b>Naruto total episode 500 &amp; Naruto Shippuden total episode 500 all episode in english dub</b></p>
      </div>
    </div>
  </section>
  <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Naruto
        </h1>
        <p className="mb-8 leading-relaxed">Naruto (Japanese:NARUTO) is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.</p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href="https://kissanime.com.ru/Anime/Naruto-Dub.31049/">Watch Now</a></button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="https://images-na.ssl-images-amazon.com/images/I/81vtHhR9QkL._RI_.jpg" />
      </div>
    </div>
  </section>
  <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
        <img className="object-cover object-center rounded" alt="hero" src="https://www.mangaseries.fr/wp-content/uploads/2022/05/naruto-shippuden.webp" />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Naruto Shippuden 
        </h1>
        <p className="mb-8 leading-relaxed">Naruto: Shippuden is an anime series mainly adapted from Part II of Masashi Kishimoto's original manga series, with exactly 500 episodes. It is set two and a half years after the original series in the Naruto universe, following the ninja teenager Naruto Uzumaki and his allies.</p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href="https://kissanime.com.ru/Anime/Naruto-Shippuuden-Dub.47401/">Watch Now</a></button>
        </div>
      </div>
    </div>
  </section>
</div>

 
 
 

  )





}

