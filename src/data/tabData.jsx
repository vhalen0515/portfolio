import BulletPoint from '../assets/icons/square.svg?react';

export const TABS = [
    {
        id: "languages",
        label: "Languages",
        content: (
            <div>
                <h2 className="text-header-txt-clr text-xl font-semibold md:text-2xl lg:text-3xl">
                    Programming Languages
                </h2>
                <p className="text-main-txt-clr mt-2 text-base md:text-lg lg:text-xl">
                    The languages that I primarily speak:
                </p>
                <ul className="text-main-txt-clr mt-5 grid grid-cols-1 gap-2 text-lg lg:mt-7 lg:gap-3 lg:text-xl">
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint
                                className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors"
                                width="12"
                                height="18"
                            />
                            <span className="cursor-default">HTML</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint
                                className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors"
                                width="12"
                                height="18"
                            />
                            <span className="cursor-default">CSS</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint
                                className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors"
                                width="12"
                                height="18"
                            />
                            <span className="cursor-default">JavaScript</span>
                        </div>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        id: "tools",
        label: "Tools",
        content: (
            <div>
                <h2 className="text-header-txt-clr text-xl font-semibold md:text-2xl lg:text-3xl">
                    Developer Tools
                </h2>
                <p className="text-main-txt-clr mt-2 text-base md:text-lg lg:text-xl">
                    Some tools that I often use in my projects:
                </p>
                <ul className="text-main-txt-clr mt-5 grid max-w-80 grid-cols-[auto_auto] gap-2 text-left text-lg lg:mt-7 lg:max-w-90 lg:gap-3 lg:text-xl">
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint
                                className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors"
                                width="12"
                                height="18"
                            />
                            <span className="cursor-default">React</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint
                                className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors"
                                width="12"
                                height="18"
                            />
                            <span className="cursor-default">Tailwind CSS</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint
                                className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors"
                                width="12"
                                height="18"
                            />
                            <span className="cursor-default">Figma</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint
                                className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors"
                                width="12"
                                height="18"
                            />
                            <span className="cursor-default">Git</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint
                                className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors"
                                width="12"
                                height="18"
                            />
                            <span className="cursor-default">GitHub</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint
                                className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors"
                                width="12"
                                height="18"
                            />
                            <span className="cursor-default">VSCode</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint
                                className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors"
                                width="12"
                                height="18"
                            />
                            <span className="cursor-default">Vite</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint
                                className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors"
                                width="12"
                                height="18"
                            />
                            <span className="cursor-default">
                                Pixelmator Pro
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        id: "skills",
        label: "Skills",
        content: (
            <div>
                <h2 className="text-header-txt-clr text-xl font-semibold md:text-2xl lg:text-3xl">
                    Front-End Skills
                </h2>
                <p className="text-main-txt-clr mt-2 text-base md:text-lg lg:text-xl">
                    Other skills and techniques that I work with:
                </p>
                <ul className="text-main-txt-clr mt-5 grid grid-cols-1 gap-2 text-lg lg:mt-7 lg:gap-3 lg:text-xl">
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint
                                className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors"
                                width="12"
                                height="18"
                            />
                            <span className="cursor-default">Flexbox</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint
                                className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors"
                                width="12"
                                height="18"
                            />
                            <span className="cursor-default">Grid</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint
                                className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors"
                                width="12"
                                height="18"
                            />
                            <span className="cursor-default">RESTful APIs</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint
                                className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors"
                                width="12"
                                height="18"
                            />
                            <span className="cursor-default">
                                Mobile-First Design
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        ),
    },
];
