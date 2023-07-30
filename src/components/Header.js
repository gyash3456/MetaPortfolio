import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faMedium, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
    {
        icon: faEnvelope,
        url: "mailto: hello@example.com",
    },
    {
        icon: faGithub,
        url: "https://github.com",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com",
    },
    {
        icon: faMedium,
        url: "https://medium.com",
    },
    {
        icon: faStackOverflow,
        url: "https://stackoverflow.com",
    },
];

const Header = () => {
    const headerRef = useRef(0);
    const [isDown, setIsDown] = useState(false);
    const handleClick = (anchor) => () => {
        // console.log(anchor);
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };
    const handleScroll = (e) => {
        // console.log("scrollY", window.scrollY, "ref", headerRef.current);

        if (Math.abs(window.scrollY - headerRef.current) > 5) {
            if (window.scrollY > headerRef.current) {
                setIsDown(true);
            } else {
                // console.log("u r in fasle");

                setIsDown(false);
            }
            // console.log(window.scrollY > headerRef.current);

            headerRef.current = window.scrollY;
        }
    };
    // useEffect(() => {
    //     // console.log(isDown);
    // });
    useEffect(() => {
        // headerRef.current = window.scrollY;
        document.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [headerRef.current]);

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={isDown ? -200 : 0}
            transitionProperty="transform"
            transitionDuration=".5s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
            transform={"auto"}
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack spacing={25} px={50} py={4} justifyContent="space-between" alignItems="center">
                    <nav>
                        <HStack spacing={8}>
                            {socials.map((element, index) => {
                                return (
                                    <a href={element.url} key={element.url}>
                                        <FontAwesomeIcon icon={element.icon} size="2x" />
                                    </a>
                                );
                            })}
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing={8}>
                            <Box onClick={handleClick("projects")}>
                                <a href="/#projects">Projects</a>
                            </Box>
                            <Box>
                                <a href="/#contact-me" onClick={handleClick("contactme")}>
                                    Contact Me
                                </a>
                            </Box>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    );
};
export default Header;
