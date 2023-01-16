//mantineComponents
import { Center, Divider, TextInput, Button, Title, Flex, Text, PasswordInput } from '@mantine/core';
//utils
import { AnchorElement } from '../../utils';
//components
import { GroupButton } from "./Button"
//Icons
import { IconLock, IconMail, IconArrowLeft ,IconNoCopyright } from "@tabler/icons";

export function Demo() {
    return (
        <><Flex h={"100%"} direction={"column"} justify="space-between" >
            <Center my={"auto"} >
                <div style={{ width: "50%" }}>
                    <Title ta="left" >Welcome Back!</Title>
                    <Text ta="left" mb={"md"} c="dimmed">
                        Start managing your finance faster and better
                    </Text>
                    <div >
                        <TextInput
                            style={{ backgroundColor: "#f2f2f2", borderRadius: "10px", marginTop: "10px" }}
                            variant="unstyled"
                            icon={<IconMail size={16} />}
                            placeholder="you@example.com" />
                        <PasswordInput
                            style={{ backgroundColor: "#f2f2f2", borderRadius: "10px", marginTop: "10px" }}
                            radius="md"
                            variant="unstyled"
                            icon={<IconLock size={16} />}
                            placeholder="At least 8 characters" />
                    </div>
                    <AnchorElement description={"Forgot Password?"} fw={"bold"} />
                    <Divider my="xs" label="Or" labelPosition="center" />
                    <Button
                        style={{width: "100%"}}
                        variant="gradient"
                        gradient={{ from: 'teal', to: 'blue', deg: 60 }}
                    >
                        Login
                    </Button>
                    <GroupButton />
                    <Text mb={"md"} c="dimmed">
                        Don't you have an account? <AnchorElement description={"Sign Up"} fw={"bold"} />
                    </Text>
                </div>
            </Center>
            <Text c="dimmed" fz="xs" ta="center">
                <IconNoCopyright size={10} /> 2023 ALL RIGHTS RESERVED
            </Text>
        </Flex>
        </>
    )
}