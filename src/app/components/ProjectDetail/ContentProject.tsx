"use client"
import Image from "next/image"
import LogoHeader from "@/app/components/ProjectDetail/LogoHeader";
import TitleProject from "@/app/components/ProjectDetail/TitleProject";
import DescriptionProject from "@/app/components/ProjectDetail/DescriptionProject";
import DataDetail from "../../data/ProjectDetail.json"
import ImageScreen from "@/app/components/ProjectDetail/ImageScreen";
import NextProject from "@/app/components/ProjectDetail/NextProject";
import LocomotiveScroll from 'locomotive-scroll';
import {useEffect} from "react";

interface ProjectData {
    detailProject: projectDetail;
    id: number;
}
interface ProjectId {
    id: number;
}
interface projectDetail {
    title?: string;
    description?: string;
    link?: string;
    category?: string[];
    year?: string;
    client?: string;
    team?: string[];
    image?: idDetailImageArray[];
    nextProject?: nextProjectDetail;
    backgroundColor?: string;
    logo?: string;
}

interface idDetailImageArray {
    images?: string[];
    desc?: string;
}

interface nextProjectDetail {
    link?: string;
    title?: string;
    category?: string;
}

const ContentProject= ({id}: ProjectId) => {
    const data: ProjectData[] = DataDetail
    const project = data.find(project => project.id == id);
    if (!project) {
        return <p>Projet introuvable</p>;
    }

    useEffect(() => {
        setTimeout(() => {
            const scroll = new LocomotiveScroll();
        }, 200)

    }, []);
    return (
       <div data-scroll data-scroll-speed="0.5" style={{overflowY: 'scroll'}} className="animate-ultra-soft-breath lg:max-w-7xl ml-auto mr-auto">
           <LogoHeader logo={project.detailProject.logo} backgroundColor={project.detailProject.backgroundColor} />
            <TitleProject title={project.detailProject.title} />
           <DescriptionProject team={project.detailProject.team} client={project.detailProject.client} year={project.detailProject.year} category={project.detailProject.category} description={project.detailProject.description} link={project.detailProject.link} />
           <ImageScreen image={project.detailProject.image} />
           <NextProject link={project.detailProject.nextProject?.link} category={project.detailProject.nextProject?.category} title={project.detailProject.nextProject?.title}/>
       </div>
    )
}

export default ContentProject