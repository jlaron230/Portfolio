import ContentProject from "@/app/components/ProjectDetail/ContentProject";

const page = async ({params,}: {
    params: Promise<{id: number}>
}) => {
    const {id} = await params;

    return (
        <div>
            <ContentProject id={id} />
        </div>
    )
}

export default page