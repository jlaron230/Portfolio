import Image from "next/image";

interface colorBackground {
    backgroundColor?: string;
    logo?: string;
}

const LogoHeader= ({backgroundColor, logo}:colorBackground) => {
    return (
        <div className="header-project">
            <div className={`rounded-b-3xl hero-image-wrapper ${backgroundColor}`}>
                <Image fill src={`${logo}`} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw" alt="Image" className=" !relative object-contain p-6  w-full h-full" />
            </div>
        </div>
    )
}
export default LogoHeader;