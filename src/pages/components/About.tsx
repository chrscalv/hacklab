import {Grid,Text, Title,Image} from '@mantine/core'

function About(){
    return(
        <>
            <Grid justify="space-between">
                <Grid.Col xs={12} lg={4}>
                    <Image
                    src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={350}
                    width={350}
                    ></Image>
                </Grid.Col>
                <Grid.Col lg={7}>
                    <Title>Apa Itu Hacklab?</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
                </Grid.Col>

            </Grid>
        </>
    );
}

export default About; 