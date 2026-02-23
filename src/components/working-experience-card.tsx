'use client';
import { Icon } from "@iconify/react";
import Image from "next/image";

export interface WorkCardProps {
    company: string;
    position: string;
    start: string;
    end: string;
    description: string;
    imageUrl: string;
    projects: {
        projectName: string;
        description: string;
        imageUrl: string;
        technologies: {
            technologyName: string;
            iconClass: string;
        }[];
    }[];
}

export default function WorkingCard(props: WorkCardProps) {
    return (
        <section className="p-2 pb-6">
            <div className="p-2 mb-2 bg-slate-500 border-l-[10px] border-[#19527C] flex items-baseline justify-between">
                <div className="flex items-center space-x-2">
                    <h2 className="text-2xl">{props.company}</h2>
                    <h3 className="p-[3px] rounded bg-white text-black">{props.position}</h3>
                </div>
                <p className="text-sm italic shrink">{props.start} to {props.end}</p>
            </div>
            <div className="space-y-2">
                <div className="flex items-center space-x-4">
                    {
                        props.imageUrl &&
                        <Image
                            className="w-[100px]"
                            src={props.imageUrl}
                            alt={`${props.company} logo`}
                        />
                    }
                    <div>
                        <p>{props.description}</p>
                        {
                            props.projects && <div>
                                <p>
                                    The projects I have worked on include:
                                    {
                                        <ul className="text-sm ml-4">
                                            {props.projects.map((project, index) => (
                                                <li key={index}>{project.projectName}</li>
                                            ))}
                                        </ul>
                                    }
                                </p>
                            </div>
                        }
                    </div>

                </div>

                {props.projects &&
                    props.projects.map((project, index) => (
                        <div key={index}>
                            <h4 className="text-xl">{project.projectName}</h4>
                            <div className="flex items-center space-x-4">
                                {
                                    project.imageUrl &&
                                    <Image
                                        className="w-[100px]"
                                        src={project.imageUrl}
                                        alt={`${project.projectName} logo`}
                                    />
                                }

                                <div className="space-y-2">
                                    <p>{project.description}</p>
                                    <div>
                                        <h4>Related Technologies</h4>
                                        <div className="flex text-xl space-x-2">
                                            {project.technologies?.map((tech, techIndex) => {
                                                return (
                                                    <span
                                                        key={techIndex}
                                                        title={tech.technologyName}
                                                    >
                                                        <Icon icon={tech.iconClass} />
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    )
}