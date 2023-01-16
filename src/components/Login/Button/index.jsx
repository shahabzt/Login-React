import { Group, Button  } from "@mantine/core"

import { IconBrandFacebook , IconBrandGoogle } from "@tabler/icons"

export function GroupButton(){
    return (
        <Group style={{ margin: "10px" }}>
        <Button color={"cyan"}
            style={{ borderColor: "lightgray" }}
            px={35}
            leftIcon={<IconBrandFacebook size={18} />}
            variant="outline"
        >Facebook</Button>
        <Button
            color={"cyan"}
            style={{ borderColor: "lightgray" }}
            px={35}
            leftIcon={<IconBrandGoogle size={18} />}
            variant="outline"
        >
            Google</Button>
    </Group>
    )
}