const section1 = () => {
    return (
        <>
        {/*Section 1 backgound image, carousel buttons (left & right) and progress idicator (1-6)*/}
        <section className="w-full h-screen bg-iCue bg-cover bg-center p-5" id="section1">
            <div className="grid grid-cols-5 gap-3">
                <div className="text-white text-center col-span-2 p-20">
                    <h1 className="font-bebas">Unite Your Setup</h1>
                        <p className="font-hn">Take command of your system, inside and out. Fine-tune the settings for all of your iCUE-compatible devices, from fan speeds to keyboard macros, on a single intuitive interface.</p>
                </div>
                <div className="col-span-3 text-white">
                </div>
            </div>
        </section>
        </>
    )
}

export default section1;