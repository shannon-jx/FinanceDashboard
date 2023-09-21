import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box , Typography, useTheme} from "@mui/material";
import FlexBetween from '@/components/FlexBetween';
import PixIcon from "@mui/icons-material/Pix";

type Props = {}

const Navbar = (props: Props) => {
    const { palette } = useTheme();
    const [selected, setSelected] = useState("dashboard");
    return (
        <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
            {/* LEFT */}
            <FlexBetween gap="0.75rem">
                <PixIcon sx={{ fontSize:"28px" }}/>
                <Typography variant="h4" fontSize="16px">
                    Finance
                </Typography>
            </FlexBetween>

            {/* RIGHT */}
            <FlexBetween gap="2rem">
                <Box>
                    <Link
                        to="/"
                        onClick={() => setSelected("dashboard")}
                        style={{
                            color: selected === "dashboard" ? "inherit" : palette.grey[700],
                            textDecoration: "inherit"
                        }}
                    >
                        DASHBOARD
                    </Link>
                </Box>
                <Box>
                    <Link
                        to="/predictions"
                        onClick={() => setSelected("predictions")}
                        style={{
                            color: selected === "predictions" ? "inherit" : palette.grey[700],
                            textDecoration: "inherit"
                        }}
                    >
                        PREDICTIONS
                    </Link>
                </Box>
            </FlexBetween>
        </FlexBetween>
    );
}

export default Navbar