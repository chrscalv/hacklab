import styles from "./index.module.css";
import { 
    Container,
    Grid,
    Text,
    Group,
    Space,
    Button,
    Flex,
    Image
} from '@mantine/core';
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Header: NextPage = () => {
  return (
    <>
        <Grid justify="space-between">
            <Grid.Col span={9}>
                <Text fz={22} fw="700">Logo</Text>
            </Grid.Col>
            <Grid.Col span={1}>
                <Flex gap="md">
                    <Button variant="outline">Sign Up</Button>
                    <Button>Sign In</Button>
                </Flex>
            </Grid.Col>
        </Grid>
    </>
  );
};

export default Header;
