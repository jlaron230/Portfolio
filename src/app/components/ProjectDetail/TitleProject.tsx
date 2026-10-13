interface titleType {
    title?: string;
}
const TitleProject = ({title}: titleType) => {

    return (
        <div className="project-title project-spacing-top">
            <div className="mb-4 flex items-baseline">
                <h2 className="max-md:text-[8vw]">
                    {title}
                </h2>
            </div>
            <hr className="border-t head-separator" />
        </div>
    )
}
export default TitleProject