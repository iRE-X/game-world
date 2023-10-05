import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

import {
    FaWindows,
    FaAndroid,
    FaXbox,
    FaLinux,
    FaPlaystation,
    FaApple,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const icons: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        linux: FaLinux,
        mac: FaApple,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
    };

    return (
        <HStack marginY={2}>
            {platforms.map(platform => (
                <Icon
                    key={platform.id}
                    as={icons[platform.slug]}
                    color="gray.500"
                />
            ))}
        </HStack>
    );
};

export default PlatformIconList;
