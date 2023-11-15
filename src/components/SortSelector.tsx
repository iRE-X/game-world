import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date Added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release Date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average Rating" },
    ];

    const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
    const setSortOrder = useGameQueryStore(s => s.setSortOrder);

    const selectedOrder = sortOrders.find(order => order.value === sortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Sort by : {selectedOrder?.label || "Relevance"}
            </MenuButton>
            <MenuList>
                {sortOrders.map(orders => (
                    <MenuItem
                        onClick={() => setSortOrder(orders.value)}
                        key={orders.value}
                    >
                        {orders.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
