import React from "react";
import {map} from "framer-motion/m";

interface videoProject {
    video?: string[];
}

const VideoProject = ({video}: videoProject) => {
    return (
        <div className="project-content ">
            {video && (
                <div className="p-4">
                    {video.map((video1, index) => (
                        <iframe
                            key={index}
                            src={video1}
                            title="SkillNest School - Vidéo de présentation"
                            className="w-full aspect-video rounded-xl shadow-lg"
                            loading="lazy"

                            allowFullScreen={true}
                            width="420" height="315"
                        >
                        </iframe>
                    ))}
                </div>
            )}
        </div>
    );
};

export default VideoProject;