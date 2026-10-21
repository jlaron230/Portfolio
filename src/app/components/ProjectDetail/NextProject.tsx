
interface nextProjectDetail {
    link?: string;
    title?: string;
    category?: string;
}
const NextProject = ({link, title, category}: nextProjectDetail) => {
    return (
        <div className="next-project">
            <hr className="border-t head-separator" />
            <a href={link}>
                <div className="next-project-wrapper next-project-selected max-sm:flex-col">
                    <div className="next-project-left flex gap-2 max-sm:w-full max-sm:justify-center">
                        <div className="next-project-selected-wrapper">
                            <h4 className="text-2xl" id="arrow">→</h4>
                        </div>
                        <h4>Projet suivant</h4>
                    </div>
                    <div className="next-project-right max-sm:w-full max-sm:flex max-sm:items-center max-sm:flex-col">
                        <h4>{title}</h4>
                        <p>{category}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}
export default NextProject;