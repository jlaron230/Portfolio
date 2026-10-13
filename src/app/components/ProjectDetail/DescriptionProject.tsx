"use client"
import {useEffect, useState} from "react";
import {Text} from "lucide-react";
import {text} from "node:stream/consumers";

interface descriptionProject {
title?: string;
description?: string;
year?: string;
category?: string[];
client?: string;
link?: string;
team?: string[];
}

const DescriptionProject = ({team, title, description, year, category, client, link}: descriptionProject) => {
    const tab = [
        "catégorie", "année", "client", "équipe"
    ]
    let textCapital: string[] = []
    textCapital = tab.map(txt => txt.toUpperCase())

    return (
        <div className="flex justify-center items-start project-intro max-md:flex-col project-spacing-bottom">
            <div className="project-data">
                <table className="max-md:w-full">
                    <tbody>
                    {category && (
                    <tr>
                        <td>
                            <h6 className={`txt_colorSecondary`}>{textCapital[0]}</h6>
                        </td>
                        <td>
                            <ul>
                        {category.map((category, index) => (
                                    <li className="max-md:text-base md:text-lg" key={index}>
                                        {category}
                                    </li>
                                    ))}
                            </ul>
                        </td>
                    </tr>
                    )}
                    {year && (
                    <tr>
                        <td>
                            <h6 className="txt_colorSecondary">{textCapital[1]}</h6>
                        </td>
                        <td>
                            <p className="max-md:text-base md:text-lg">{year}</p>
                        </td>
                    </tr>
                    )}
                    {client && (
                        <tr>
                            <td>
                                <h6 className="txt_colorSecondary">{textCapital[2]}</h6>
                            </td>
                            <td>
                                <p className="max-md:text-base md:text-lg">{client}</p>
                            </td>
                        </tr>
                    )}
                    {team && (
                        <tr>
                            <td>
                                <h6 className="txt_colorSecondary">{textCapital[3]}</h6>
                            </td>
                            <td>
                                <p className="max-md:text-base min-lg:text-lg">{team}</p>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            <div className="project-description">
                    <p className="max-md:text-base md:text-lg">{description}</p>
                <div className="mt-6">
                    {link && (
                            <a className="max-md:text-base md:text-lg highlight" href={link} target="_blank">↗ voir le site web</a>
                    )}
                </div>
            </div>
        </div>
    )
}
export default DescriptionProject