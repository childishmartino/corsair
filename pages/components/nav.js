const nav = () => {
    return (
    <>
    {/*Nav needs to be sticky*/}
    <nav class="bg-black fixed left-0 right-0 z-50">
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
    </>
    )
};

export default nav;