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
        <main className={`${styles.mainContent} container mx-auto px-4 space-y-8`}>
            <div className="text-5xl font-bold break-words">
                Hello. I am Izhar Ahmad, a SWE jumping between del/hyd with a knack for fashion deconstruction,
                product obsession, and interests lingering around art, literature, and history.
                <br />
            </div>
            <div className="text-5xl font-bold break-words">
                Computer Science student with a minor in AI and an unbounded love for operating systems.
                Currently working @Inncircles in their AI team, building for the construction space in India.
                <br />
            </div>
            <div className="text-5xl font-bold break-words">
                A typical day after 11 to 7 includes reading a random book down at my PG, venting about life to people I love being around,
                while learning some product sense on the weekend with some random gigs in Hyderabad.
                <br />
            </div>
            <div className="text-5xl font-bold break-words">
                More active on Instagram :)
                <br />
            </div>
            <div className="my-10 flex justify-between items-center gap-2 sm:gap-4 md:gap-6 w-full max-w-full">
                <div className="flex-shrink-0">
                    <HoverCard>
                        <HoverCardTrigger>
                            <img
                                src="https://img.icons8.com/?size=100&id=1683&format=png&color=000000"
                                alt="Gallery Icon"
                                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer hover:scale-110 transition-transform"
                                onClick={() => navigate("/gallery")}
                            />
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <p>glimpse into my gallery</p>
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <div className="flex-shrink-0">
                    <HoverCard>
                        <HoverCardTrigger>
                            <img
                                src="https://img.icons8.com/?size=100&id=230&format=png&color=000000"
                                alt="Spotify Icon"
                                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer hover:scale-110 transition-transform"
                                onClick={() => window.open("https://open.spotify.com/user/31hgs7yt4ghbhlzowgpunvnqfq74?si=tWrrME6gQKSXAzH577b8hw", "_blank")}
                            />
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <p>some spotify playlists</p>
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <div className="flex-shrink-0">
                    <HoverCard>
                        <HoverCardTrigger>
                            <img
                                src="https://img.icons8.com/?size=100&id=6592&format=png&color=000000"
                                alt="writings Icon"
                                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer hover:scale-110 transition-transform"
                                onClick={() => window.open("https://medium.com/@izharhamdan", "_blank")}
                            />
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <p>writing collection</p>
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <div className="flex-shrink-0">
                    <HoverCard>
                        <HoverCardTrigger>
                            <img
                                src="https://img.icons8.com/?size=100&id=524&format=png&color=000000"
                                alt="product Icon"
                                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer hover:scale-110 transition-transform"
                                onClick={() => navigate("/product")}
                            />
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <p>product teardowns paradise</p>
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <div className="flex-shrink-0">
                    <HoverCard>
                        <HoverCardTrigger>
                            <img
                                src="https://img.icons8.com/?size=100&id=1762&format=png&color=000000"
                                alt="art Icon"
                                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer hover:scale-110 transition-transform"
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