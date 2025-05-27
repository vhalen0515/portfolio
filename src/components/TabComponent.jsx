import React from "react";
import BulletPoint from "../assets/icons/square.svg?react";

const tabs = [
    {
        id: "languages",
        label: "Languages",
        content: (
            <div>
                <h2 className="font-nunito text-header-txt-clr text-xl font-semibold md:text-2xl lg:text-3xl">
                    Programming Languages
                </h2>
                <p className="text-main-txt-clr mt-2 text-base md:text-lg lg:text-xl">
                    The languages that I primarily speak:
                </p>
                <ul className="text-main-txt-clr mt-5 grid grid-cols-1 gap-2 text-lg lg:mt-7 lg:gap-3 lg:text-xl">
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors" />
                            <span className="cursor-default">HTML</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors" />
                            <span className="cursor-default">CSS</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors" />
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
                <h2 className="font-nunito text-header-txt-clr text-xl font-semibold md:text-2xl lg:text-3xl">
                    Developer Tools
                </h2>
                <p className="text-main-txt-clr mt-2 text-base md:text-lg lg:text-xl">
                    Some tools that I often use in my projects:
                </p>
                <ul className="text-main-txt-clr mt-5 grid max-w-80 grid-cols-[auto_auto] gap-2 text-left text-lg lg:mt-7 lg:max-w-90 lg:gap-3 lg:text-xl">
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors" />
                            <span className="cursor-default">React</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors" />
                            <span className="cursor-default">Tailwind CSS</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors" />
                            <span className="cursor-default">Figma</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors" />
                            <span className="cursor-default">Git</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors" />
                            <span className="cursor-default">GitHub</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors" />
                            <span className="cursor-default">VSCode</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors" />
                            <span className="cursor-default">Vite</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors" />
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
                <h2 className="font-nunito text-header-txt-clr text-xl font-semibold md:text-2xl lg:text-3xl">
                    Front-End Skills
                </h2>
                <p className="text-main-txt-clr mt-2 text-base md:text-lg lg:text-xl">
                    Other skills and techniques that I work with:
                </p>
                <ul className="text-main-txt-clr mt-5 grid grid-cols-1 gap-2 text-lg lg:mt-7 lg:gap-3 lg:text-xl">
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors" />
                            <span className="cursor-default">Flexbox</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors" />
                            <span className="cursor-default">Grid</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors" />
                            <span className="cursor-default">RESTful APIs</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="group flex items-center gap-4">
                            <BulletPoint className="group-hover:fill-accent-clr stroke-accent-clr w-3 fill-transparent transition-colors" />
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

export default function TabComponent() {
    const [activeTab, setActiveTab] = React.useState(tabs[0].id);

    // return (
    //     // <div className="flex flex-col items-center sm:flex sm:flex-row sm:gap-12">
    //     <div className="flex flex-col items-center sm:flex sm:flex-row sm:gap-12">
    //         {/* Tab Buttons */}
    //         <div className="flex flex-wrap sm:flex-col sm:self-start">
    //             {tabs.map((tab) => (
    //                 <button
    //                     key={tab.id}
    //                     onClick={() => setActiveTab(tab.id)}
    //                     className={`border-main-txt-clr font-reddit cursor-pointer border-b-1 px-5 py-2.5 text-sm sm:border-r-1 sm:border-b-0 sm:text-base lg:px-8 lg:py-3 lg:text-xl ${
    //                         activeTab === tab.id
    //                             ? "text-accent-clr border-t-accent-clr sm:border-l-accent-clr bg-tab-accent-clr border-t-2 sm:border-t-0 sm:border-l-2"
    //                             : "text-main-txt-clr hover:bg-tab-accent-clr hover:text-accent-clr border-t-2 border-t-transparent sm:border-t-0 sm:border-l-2 sm:border-l-transparent"
    //                     }`}
    //                 >
    //                     {tab.label}
    //                 </button>
    //             ))}
    //         </div>
    //         {/* Skills Content */}
    //         {/* <div className="xs:max-w-85 mt-8 text-center sm:mt-0 sm:text-left md:w-95"> */}
    //         <div className="xs:max-w-85 mt-8 text-center sm:mt-0 sm:text-left md:w-95">
    //             {tabs.find((tab) => tab.id === activeTab)?.content}
    //         </div>
    //     </div>
    // );

    return (
        <div className="mx-auto w-full max-w-[280px] sm:flex sm:max-w-[580px] sm:gap-12 lg:max-w-[620px] lg:gap-14">
            {/* Tab Buttons */}
            <div className="flex justify-center sm:flex-col sm:justify-start sm:self-start">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`border-main-txt-clr font-reddit cursor-pointer border-b-1 px-5 py-2.5 text-sm sm:border-r-1 sm:border-b-0 sm:text-base md:px-8 md:py-3 md:text-xl ${
                            activeTab === tab.id
                                ? "text-accent-clr border-t-accent-clr sm:border-l-accent-clr bg-tab-accent-clr border-t-2 sm:border-t-0 sm:border-l-2"
                                : "text-main-txt-clr hover:bg-tab-accent-clr hover:text-accent-clr border-t-2 border-t-transparent sm:border-t-0 sm:border-l-2 sm:border-l-transparent"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content Section */}
            <div className="mt-8 flex-1 text-center sm:mt-0 sm:text-left">
                {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
        </div>
    );
}
