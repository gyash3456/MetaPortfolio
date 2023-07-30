import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.

    return (
        <VStack spacing={0} borderRadius="lg" overflow={"hidden"}>
            <Image src={imageSrc} />
            <Box w="100%" bg="white" h={120} p={"10px"}>
                <Heading color={"black"} size={"xs"} mt={"10px"}>
                    {title}
                </Heading>
                <Text fontSize={"sm"} mt={"10px"} color={"black"}>
                    {description}{" "}
                </Text>
                <HStack>
                    <Text as={"b"} fontSize={"xs"} color={"black"}>
                        See More
                    </Text>
                    <FontAwesomeIcon icon={faArrowRight} size="1x" />
                </HStack>
            </Box>
        </VStack>
    );
};

export default Card;
