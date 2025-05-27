export default function RightSidebar() {
    return (
        <div className="after:bg-main-txt-clr fixed right-4 lg:right-10 bottom-0 hidden items-center [writing-mode:vertical-rl] after:block after:h-23 after:w-0.25 after:content-[''] md:flex z-10">
            <a
                href="mailto:tavilla04@gmail.com?subject=Web%20Development%20Project&body=I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!"
                className="text-main-txt-clr hover:text-accent-clr font-reddit mx-6 py-2 text-xs tracking-[1.5px] transition-transform duration-300 hover:translate-y-[-3px]"
            >
                tavilla04@gmail.com
            </a>
        </div>
    );
}
