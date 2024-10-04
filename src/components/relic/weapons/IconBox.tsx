"use client";
import { Box } from "@mui/material";
import { useAtom } from "jotai";
import { weaponState } from "../RelicTracker";

const basicSX = {
  height: "auto",
  maxWidth: "50px",
  width: "auto",
  verticalAlign: "middle",
  marginRight: "5px",
};

type IconBoxProps = {
  step: number;
  job: number;
  relicImage: string;
  altText: string;
};

function IconBox(iconBoxProps: IconBoxProps) {
  const [isGreyscale, setIsGreyscale] = useAtom(weaponState);

  return (
    <Box
      component="img"
      sx={{
        ...basicSX,
        filter: !isGreyscale[iconBoxProps.step][iconBoxProps.job]
          ? "saturate(0%)"
          : "saturate(100%)",
      }}
      onClick={() => {
        const updatedArray = [...isGreyscale];
        updatedArray[iconBoxProps.step][iconBoxProps.job] =
          !isGreyscale[iconBoxProps.step][iconBoxProps.job];
        setIsGreyscale(updatedArray);
      }}
      alt={iconBoxProps.altText}
      src={iconBoxProps.relicImage}
    />
  );
}

export default IconBox;
