import { Box, useTheme, useMediaQuery } from '@mui/material';
import Row1 from './Row1';
import Row3 from './Row3';
import Row2 from './Row2';

const gridTemplateLargeScreens = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d g h"
    "i g h"
    "i g j"
    "i g j"
`;

const gridTemplateSmallScreens = `
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "g"
    "h"
    "h"
    "i"
    "i"
    "i"
    "j"
    "j"
`;

const Dashboard = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)")
    const { palette } = useTheme();
    return (
        <Box width="100%" height="100%" display="grid" gap="1.5rem"
        sx={
            isAboveMediumScreens
                ? {
                    gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
                    gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
                    gridTemplateAreas: gridTemplateLargeScreens,
                } : {
                    gridAutoColumns: "1fr",
                    gridAutoRows: "80px",
                    gridTemplateAreas: gridTemplateSmallScreens,
                }
        }
        >
            <Row1 />
            <Row2 />
            <Row3 />
        </Box>
    )
}

export default Dashboard;