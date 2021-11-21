import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>PC Components | Gaming Gear | CORSAIR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Nav needs to be sticky*/}
      <nav class="bg-black">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-4">
              <div class="hidden md:flex items-center space-x-1">
                <a href="#" class="py-5 px-3 text-white hover:text-gray-900">Panel 1</a>
                <a href="#" class="py-5 px-3 text-white hover:text-gray-900">Panel 2</a>
                <a href="#" class="py-5 px-3 text-white hover:text-gray-900">Panel 3</a>
                <a href="#" class="py-5 px-3 text-white hover:text-gray-900">Panel 4</a>
                <a href="#" class="py-5 px-3 text-white hover:text-gray-900">Panel 5</a>
              </div>
              {/*Mobile Nav?*/}
            </div>
          </div>
        </div>
      </nav>

      {/*looping background*/}
      <header class="relative flex items-center justify-center h-screen overflow-hidden">
        <div class="relative z-30 p-5">
          <h2 class="text-yellow-300">MAKE THE JUMP TO HYPERSPEED</h2>
          <h1 class="text-2xl text-white">CORSAIR MEMORY</h1>
          <p class="text-white">CORSAIR has always led the way in high-performance DRAM. Now we've made the leap to the next level of performance with DDR5.</p>
        </div>
        <video autoPlay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
          <source src="/hero-bg.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </header>

      {/*Section 1 backgound image, carousel buttons (left & right) and progress idicator (1-6)*/}
      <section class="w-full h-screen bg-iCue bg-cover bg-center">
      </section>

      {/*Section 2 background image, animated image sequence controlled by scroll, scrolling back up reverses sequence*/}
      <section class="w-full h-screen bg-hex bg-cover bg-center">
      </section>

      {/*Section 3 5 videos that change with the swatches*/}
      <section class="w-full h-screen bg-black bg-cover bg-center">
      </section>

      {/*Section 4 video once, fade out and animate 4 keyboards sliding in from bottom*/}
      <section class="w-full h-screen bg-flavor bg-cover bg-center">
      </section>

      {/*Section 5 black background, data loaded from JSON URL, drop down needs 550, 650 and 750 watt options (specs change/load)*/}
      <section class="w-full h-screen bg-black bg-cover bg-center">
      </section>
          

    </div>
  )
}
