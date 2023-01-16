//mantineComponents

import { Carousel } from "@mantine/carousel"

import { Text, Title, Image, } from "@mantine/core"

export function CarouselSlide(props) {
    return (

        <Carousel.Slide>

            <Image height={250} src={props.src}></Image>
            <Title>Welcome Back!</Title>
            <Text mb={"md"} c="dimmed">
                Start managing your finance faster and better
                <br />
                Start managing your finance faster and better
            </Text>

        </Carousel.Slide>
    )
}