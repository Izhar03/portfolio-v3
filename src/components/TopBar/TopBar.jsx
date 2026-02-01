import styles from "./TopBar.module.scss";

const TopBar = ({ title = "Portfolio", className = "" }) => {
    return (
        <header
            className={`${styles.topbar} flex justify-center items-center p-4 sm:p-6 ${className}`}
        >
            <h1 className={`text-sm sm:text-base md:text-xl font-semibold flex flex-wrap items-center justify-center gap-2 break-words text-center ${styles.title}`}>
                {title}
            </h1>
        </header>
    );
};

export default TopBar;
