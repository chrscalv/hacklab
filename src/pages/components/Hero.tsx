import { type NextPage } from "next";
import {Grid,Text,Image,Button,Space} from '@mantine/core'
import Link from "next/link";

function Hero(){
    return(
        <>
            <Grid mt={30} justify="space-between">
            <Grid.Col xs={12} lg={7}>
                <Text fz={34} fw="700">Lorem Ipsum is simply dummy text of the printing </Text>
                <Text fz={22}>Lorem Ipsum is simply dummy text of the printing and typesetting industry </Text>
                <Button mt={50} size="lg">Cari Lowongan Sekarang</Button>
            </Grid.Col>
            <Space w={50}></Space>
            <Grid.Col xs={12} lg={4}>
                <Image
                src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={350}
                width="100%"
                ></Image>
            </Grid.Col>
        </Grid>
        </>
    );
}

export default Hero;