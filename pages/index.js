import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>PC Components | Gaming Gear | CORSAIR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
            </div>
          </div>
        </div>
      </nav>

      <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
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
          

    </div>
  )
}
