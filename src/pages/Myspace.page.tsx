import { Grid } from "@mantine/core"
import { MyspaceMain } from "../components/MyspaceMain"
export function MyspacePage() {

    return (
        <Grid w={970}>
            <Grid.Col span={6}>
                <MyspaceMain />
            </Grid.Col>
            <Grid.Col span={6}>
                Test
            </Grid.Col>s
        </Grid>
    )
}