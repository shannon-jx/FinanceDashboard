import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
    interface PaletteColor {
        [key: number]: string;  // expand to include 100,200,300,400,etc.
    }

    interface PaletteColor {
        tertiary: PaletteColor; // expand to tertiary which does not exist
    }
}