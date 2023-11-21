import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    children: string;
    limit?: number;
}

const ExpandableText = ({ children, limit = 300 }: Props) => {
    const [expanded, setExpanded] = useState(false);

    if (!children) return null;

    if (children.length <= limit) return <Text>{children}</Text>;

    const summary = expanded ? children : children.substring(0, limit) + "...";

    return (
        <div>
            <Text>
                {summary}
                <Button
                    onClick={() => setExpanded(!expanded)}
                    size="xs"
                    marginLeft={1}
                    fontWeight="bold"
                    colorScheme="yellow"
                >
                    {expanded ? "Show less" : "Read more"}
                </Button>
            </Text>
        </div>
    );
};

export default ExpandableText;
