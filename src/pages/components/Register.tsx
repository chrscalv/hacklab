import {
    Flex, 
    Grid,
    Title,
    Image, 
    Group,
    Text
} from '@mantine/core'

function Register(){
    return(
        <>
            <Flex direction="column" align="center" mt={76}>
                <Title>Cara Registrasi</Title>
                <Grid justify="space-around">
                    <Grid.Col lg={3}>
                        <Flex align="center" direction="column">
                            <Image src="/logos.webp" />
                            <Title order={3} align="center">Lorem ipsum, or lipsum</Title>
                            <Text align='center'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to </Text>
                        </Flex>
                    </Grid.Col>
                    <Grid.Col lg={3}>
                        <Flex align="center" direction="column">
                            <Image src="/logos.webp" />
                            <Title order={3} align="center">Lorem ipsum, or lipsum</Title>
                            <Text align='center'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to </Text>
                        </Flex>
                    </Grid.Col>
                    <Grid.Col lg={3}>
                        <Flex align="center" direction="column">
                            <Image src="/logos.webp" />
                            <Title order={3} align="center">Lorem ipsum, or lipsum</Title>
                            <Text align='center'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to </Text>
                        </Flex>
                    </Grid.Col>
                    <Grid.Col lg={3}>
                        <Flex align="center" direction="column">
                            <Image src="/logos.webp" />
                            <Title order={3} align="center">Lorem ipsum, or lipsum</Title>
                            <Text align='center'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to </Text>
                        </Flex>
                    </Grid.Col>
                </Grid>
            </Flex>
        </>
    )
}

export default Register;