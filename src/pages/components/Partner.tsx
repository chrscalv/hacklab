import { type NextPage } from "next";
import {Grid,Image} from '@mantine/core'

function Partner(){
    return(
        <>
            <Grid justify="space-around">
                <Grid.Col md={3} lg={2}>
                    <Image src="/logos.webp" />
                </Grid.Col>
                <Grid.Col md={3} lg={2}>
                    <Image src="/logos.webp" />
                </Grid.Col>
                <Grid.Col md={3} lg={2}>
                    <Image src="/logos.webp" />
                </Grid.Col>
                <Grid.Col md={3} lg={2}>
                    <Image src="/logos.webp" />
                </Grid.Col>
            </Grid>
        </>
    )
}

export default Partner;