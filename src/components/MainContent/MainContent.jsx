import styles from './MainContent.module.scss';

const MainContent = () => {
    return (
        <main className={`${styles.mainContent} container mx-auto px-4 py-8 space-y-8`}>
            <div className="text-5xl font-bold">
                Hello. I am Izhar Ahmad, a SWE jumping between del/hyd with a knack for fashion deconstruction,
                product obsession, and interests lingering around art, literature, and history.
                <br/>
            </div>
            <div className="text-5xl font-bold">
                Computer Science student with a minor in AI and an unbounded love for operating systems.
                Currently working @Inncircles in their AI team, building for the construction space in India.
                <br/>
            </div> 
            <div className="text-5xl font-bold">
                A typical day after 11 to 7 includes reading random book down at my PG, venting about life to people I love being around,
                while learning some product sense on the weekend with some random gigs in Hyderabad.
                <br/>
            </div>
                <div className="text-5xl font-bold">
            I do write — in free time, do check for sure:
            <br/>
            </div>
            <div className="text-5xl font-bold">
            More active on Instagram :)
            <br/>
            </div>
        </main>
    );
};

export default MainContent;