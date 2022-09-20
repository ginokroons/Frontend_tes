import { Stack, Button, ButtonGroup } from "@mui/material";

const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} orientation='vertical'>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>

            <Stack direction='row'>
                <ButtonGroup variant="contained" color="secondary" orientation='vertical'>
                    <Button>Wow</Button>
                    <Button>Hello</Button>
                    <Button>Go</Button>
                </ButtonGroup>
            </Stack>
        </Stack>
    )
}

export default MuiButton;