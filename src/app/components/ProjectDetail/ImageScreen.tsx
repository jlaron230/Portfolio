import Image from "next/image";

interface ImageDetail {
    images?: string[];
    desc?: string;
    backgroundColor1?: string
}

interface imageItem {
    image?: ImageDetail[];
}

const ImageScreen = ({image}:imageItem) => {
    return (
        <div>
            {image?.map((section, sectionIndex) => (
                <div className="project-content" key={sectionIndex}>
                    <div className="p-4">
                    {section.desc && (
                        <h6 className="txt_colorSecondary text-center">{section.desc}</h6>
                    )}
                    </div>
                    {image && image.length > 0 && (
                        <div
                            className="">
                            {section.images?.map((img, index) => (
                                <div key={index}
                                     className={`project-content-wrapper ${section.backgroundColor || section.backgroundColor}`}>
                                    <Image fill src={img}
                                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                                           alt="Image" className="!relative object-contain p-6  w-full h-full"/>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
export default ImageScreen