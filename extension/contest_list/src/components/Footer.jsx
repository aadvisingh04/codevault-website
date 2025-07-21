// import { dynamicLogo } from "../assets/D_white.svg";

// import GitHubButton from "react-github-btn";
import { FaLinkedin, FaDiscord, FaInstagram, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const copyrightDate = new Date().getFullYear();

export default function Footer() {
    return (
        <>
            <footer className="w-80 bg-cardsColor p-4 rounded-b-xl mx-auto">
                <div className="footer">
                    <nav className="flex mx-auto">
                        <div className="flex gap-8 lg:gap-3 items-center p-2">
                            <a
                                href="https://CodeVault.com"
                                className="link hover:no-underline link-hover hover:text-custom-blue hover:scale-110 transition-all text-lg m-auto"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGlobe
                                    size={18}
                                    className="fill-white hover:fill-custom-blue"
                                />
                                <span className="sr-only">website link</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/CodeVault"
                                className="link hover:no-underline link-hover hover:text-custom-blue hover:scale-110 transition-all text-lg m-auto"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin
                                    size={20}
                                    className="fill-white hover:fill-custom-blue"
                                />
                                <span className="sr-only">linkedin link</span>
                            </a>
                            <a
                                href="https://twitter.com/intent/follow?screen_name=CodeVault&tw_p=followbutton"
                                className="link hover:no-underline link-hover hover:text-custom-blue hover:scale-110 transition-all text-lg m-auto"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaXTwitter
                                    size={20}
                                    className="fill-white hover:fill-custom-blue"
                                />
                                <span className="sr-only">twitter link</span>
                            </a>
                            <a
                                href="https://discord.com/invite/bsbBytBqBc"
                                className="link hover:no-underline link-hover hover:text-custom-blue hover:scale-110 transition-all text-lg m-auto"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaDiscord
                                    size={20}
                                    className="fill-white hover:fill-custom-blue"
                                />
                                <span className="sr-only">discord link</span>
                            </a>
                            <a
                                href="https://instagram.com/CodeVault"
                                className="link hover:no-underline link-hover text-white hover:text-custom-blue hover:scale-110 transition-all text-lg m-auto"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram
                                    size={20}
                                    className="stroke-white group-hover:stroke-custom-blue"
                                />
                                <span className="sr-only">instagram link</span>
                            </a>
                        </div>
                    </nav>
                </div>
                <p className="text-center w-full text-xs">
                    &copy; {copyrightDate} <a href="https://CodeVault.com"> CodeVault</a>.{" "}
                    <a
                        href="https://github.com/CodeVault/CodeVault/blob/main/LICENSE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        MIT Licensed
                    </a>
                    . Contribute on{" "}
                    <a
                        href="https://github.com/CodeVault/CodeVault"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        GitHub
                    </a>
                    .
                </p>
            </footer >
        </>
    );
}
