import { InstagramLogoIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles["social-icons"]}>
                <a href="https://www.instagram.com/i_izhar03/" target="_blank" rel="noopener noreferrer">
                    <InstagramLogoIcon />
                </a>
                <a href="https://github.com/Izhar03" target="_blank" rel="noopener noreferrer">
                    <GitHubLogoIcon />
                </a>
                <a href="https://www.linkedin.com/in/i-izhar03//" target="_blank" rel="noopener noreferrer">
                    <LinkedInLogoIcon />
                </a>
            </div>
        </footer>
    )
}

    export default Footer;