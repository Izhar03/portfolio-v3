import styles from './MainContent.module.scss';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../../components/ui/HoverCard"
import { useNavigate } from "react-router-dom";

const MainContent = () => {
    const navigate = useNavigate();
    return (
        <main className={`${styles.mainContent} container mx-auto px-4 py-8 space-y-8`}>
            <div className="text-5xl font-bold">
                Hello. I am Izhar Ahmad, a SWE jumping between del/hyd with a knack for fashion deconstruction,
                product obsession, and interests lingering around art, literature, and history.
                <br />
            </div>
            <div className="text-5xl font-bold">
                Computer Science student with a minor in AI and an unbounded love for operating systems.
                Currently working @Inncircles in their AI team, building for the construction space in India.
                <br />
            </div>
            <div className="text-5xl font-bold">
                A typical day after 11 to 7 includes reading a random book down at my PG, venting about life to people I love being around,
                while learning some product sense on the weekend with some random gigs in Hyderabad.
                <br />
            </div>
            <div className="text-5xl font-bold">
                More active on Instagram :)
                <br />
            </div>
            <div className="my-10 flex justify-between items-center flex-row gap-4">
                <div>
                    <HoverCard>
                        <HoverCardTrigger>
                            <img
                                src="https://img.icons8.com/?size=100&id=1683&format=png&color=000000"
                                alt="Gallery Icon"
                                onClick={() => navigate("/gallery")}
                            />
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <p>glimpse into my gallery</p>
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <div>
                    <HoverCard>
                        <HoverCardTrigger>
                            <img
                                src="https://img.icons8.com/?size=100&id=6592&format=png&color=000000"
                                alt="writings Icon"
                                onClick={() => window.open("https://medium.com/@izharhamdan", "_blank")}
                            />
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <p>writing collection</p>
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <div>
                    <HoverCard>
                        <HoverCardTrigger>
                            <img
                                src="https://img.icons8.com/?size=100&id=524&format=png&color=000000"
                                alt="product Icon"
                                onClick={() => navigate("/product")}
                            />
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <p>product teardowns paradise</p>
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <div>
                    <HoverCard>
                        <HoverCardTrigger>
                            <img
                                src="https://img.icons8.com/?size=100&id=1762&format=png&color=000000"
                                alt="art Icon"
                                onClick={() => navigate("/art")}
                            />
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <p>Things I love over the internet</p>
                        </HoverCardContent>
                    </HoverCard>
                </div>
            </div>
        </main>
    );
};

export default MainContent;