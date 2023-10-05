import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
        >
            <GridItem area={"nav"} bgColor={"coral"}>
                Nav
            </GridItem>
            <Show above={"lg"}>
                <GridItem area={"aside"} bgColor={"aqua"}>
                    Aside
                </GridItem>
            </Show>
            <GridItem area={"main"} bgColor={"dodgerblue"}>
                Main
            </GridItem>
        </Grid>
    );
}

export default App;
