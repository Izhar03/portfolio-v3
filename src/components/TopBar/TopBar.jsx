import { SunIcon } from "@radix-ui/react-icons";
import styles from "./TopBar.module.scss";

const TopBar = ({ title = "Portfolio", showIcon = true, className = "" }) => {
    return (
        <header className={`${styles.topbar} flex justify-center items-center p-6 ${className}`}>
            <h1 className={`text-xl font-semibold flex items-center gap-2 ${styles.title}`}>
                {title}
                {showIcon && <SunIcon className={`w-6 h-6 ${styles.icon}`} />}
            </h1>
        </header>
    );
};

export default TopBar;
