const header = () => {
    return (
        <>
        {/*looping background*/}
        <header className="relative flex items-center text-center justify-center h-screen overflow-hidden">
            <div className="relative z-30 p-5">
                <h2 className="text-yellow-300 font-bebas text-xl tracking-widest">MAKE THE JUMP TO HYPERSPEED</h2>
                <h1 className="text-2xl text-white font-bebas text-6xl tracking-wider">CORSAIR MEMORY</h1>
                <p className="text-white font-hn">CORSAIR has always led the way in high-performance DRAM.<br></br> Now we've made the leap to the next level of performance with DDR5.</p>
            </div>
            <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
                <source src="/hero-bg.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </header>
        </>
    )
};

export default header;