const header = () => {
    return (
        <>
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
        </>
    )
};

export default header;