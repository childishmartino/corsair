import Link from 'next/link';
import { useRouter } from 'next/router';

const nav = () => {
    const router = useRouter();

    return (
    <>
    {/*Nav needs to be sticky*/}
    <nav className="bg-black fixed left-0 right-0 z-50 ">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-center items-stretch">
                <div className="flex space-x-4">
                    <div className="hidden md:flex items-stretch space-x-1">
                        <Link href="#section1"><a className="py-5 px-3 text-white font-hn"{...router.pathname == "#section1" ? "underline" : ""}>Panel 1</a></Link>
                        <Link href="#section2"><a className="py-5 px-3 text-white font-hn">Panel 2</a></Link>
                        <Link href="#section3"><a className="py-5 px-3 text-white font-hn">Panel 3</a></Link>
                        <Link href="#section4"><a className="py-5 px-3 text-white font-hn">Panel 4</a></Link>
                        <Link href="#section5"><a className="py-5 px-3 text-white font-hn">Panel 5</a></Link>
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