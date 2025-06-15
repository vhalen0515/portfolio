import React from "react";

export default function TabComponent({ tabs }) {
    const [activeTab, setActiveTab] = React.useState(tabs[0].id);

    return (
        <div className="mx-auto w-full max-w-[280px] sm:flex sm:max-w-[530px] md:max-w-[620px] sm:gap-12 lg:max-w-[630px] lg:gap-14">
            {/* Tab Buttons */}
            <div className="flex justify-center sm:flex-col sm:justify-start sm:self-start">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`border-main-txt-clr font-reddit cursor-pointer border-b-1 px-6 py-3 text-base sm:border-r-1 sm:border-b-0 sm:text-base md:px-8 md:py-3 md:text-xl ${
                            activeTab === tab.id
                                ? "text-accent-clr border-t-accent-clr sm:border-l-accent-clr bg-tab-accent-clr border-t-2 sm:border-t-0 sm:border-l-2"
                                : "text-main-txt-clr hover:bg-tab-accent-clr hover:text-accent-clr border-t-2 border-t-transparent sm:border-t-0 sm:border-l-2 sm:border-l-transparent"
                        }`}
                        aria-label="Tab Button"
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
