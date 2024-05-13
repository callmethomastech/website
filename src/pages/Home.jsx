import React from 'react'
import events from '../data/events'
import projects from '../data/projects'

function Index() {

  return (
    <div>
        <div className="flex flex-col w-5/6 min-h-screen h-fill items-center mx-auto md:flex-row border-b-4 border-davys-grey">
            <img className="w-[350px] h-fit" src="../../fadedelement.svg" />
            <div className="pl-5">
                <h1 className="text-4xl md:text-4xl mb-1 md:mb-3 font-bold">$Thomas Henderson<span className="animate-blinking">_</span></h1>

                <p className="pb-4 md:pt-0 font-semibold">YouTube Certified Problem Solver</p>
                
                <p>I am a hobbyist programmer honing my skills to solve long and complex problems. I also like spending my time building computers and working on cars as they are fun yet challenging tasks that help develop the way I think. I got into programming through some old Mojang dev talk videos about Minecraft when I was younger. Then as I got older I got into cars which led me to work on them.  As a result, I decided that I wanted to get a job in maintenance because it combines a little of everything that I already like to do.</p>
                <div className="flex flex-row gap-4 pt-4">
                    <a href="https://www.youtube.com/c/FADEDElement" target="_blank"><svg className="fill-alice-blue hover:fill-blue-green" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
                    <a href="https://github.com/FADEDElement" target="_blank"><svg className="fill-alice-blue hover:fill-blue-green" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                    <a href="https://discord.com/invite/XdxwyrE" target="_blank"><svg className="fill-alice-blue hover:fill-blue-green" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"/></svg></a>
                </div>
            </div>
        </div>
        <div className="w-full flex justify-center">
            <div className="w-5/6 border-b-4 border-davys-grey"> 
                <div className="py-5 text-lg md:text-xl font-medium flex flex-row">
                    <p className="grow"><span className="text-blue-green">$</span>Portfolio</p>
                    <a href="https://github.com/FADEDElement?tab=repositories" target="_blank" className="hover:text-blue-green"><span className="text-blue-green">//</span>View Archive</a> 
                </div>
                <div className="flex pb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                        {projects.map(project => (
                            <div className="hover:scale-105 hover:shadow-lg hover:shadow-[#0abdd1] hover:border-2 hover:border-jet-grey">
                            <a href={project.link} target="_blank">
                                <img src={project.imgUrl} alt="portfolio item" className="object-cover w-full " />
                                
                                <div className="py-2">
                                    <p className="font-bold text-base">{project.title}</p>
                                    
                                    <p className="flex flex-wrap gap-2 flex-row items-center justify-start">
                                        {project.stack.map(item => (
                                            <span className="flex flex-row text-dim-grey text-sm">
                                                {item}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full flex justify-center pt-5">
                <div className="w-5/6"> 
                    <a className="text-lg md:text-xl font-medium"><span className="text-blue-green">$</span>Timeline</a>
                    <div className="flex flex-col md:flex-row justify-center py-5">
                        <div className="w-full">
                            {events.map(item => (
                                <ol className="flex flex-col md:flex-row relative border-l-2 border-blue-green">
                                    <li className="mb-6 ml-4">
                                        <div className="absolute w-3 h-3 bg-blue-green rounded-full mt-1.5 -left-1.5" />
                                        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                                            <span className="inline-block px-2 py-1 font-semibold bg-blue-green text-jet-grey rounded-md">
                                                {item.year}
                                            </span>
                                            <h3 className="text-lg font-semibold">
                                                {item.title}
                                            </h3>
                                            <div className="my-1 text-sm font-normal leading-none text-dim-grey">
                                                {item.duration}
                                            </div>
                                        </p>
                                        <p className="my-2 text-base font-normal text-dim-grey p-1 rounded-md">
                                            {item.description}
                                        </p>
                                    </li>
                                </ol>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
