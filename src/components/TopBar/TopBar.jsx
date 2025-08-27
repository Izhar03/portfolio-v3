import styles from "./TopBar.module.scss";

const TopBar = ({ title = "Portfolio", className = "" }) => {
    return (
        <header
            className={`${styles.topbar} flex justify-center items-center p-6 ${className}`}
        >
            <h1 className={`text-xl font-semibold flex items-center gap-2 ${styles.title}`}>
                {title}
            </h1>
        </header>
    );
};

export default TopBar;
