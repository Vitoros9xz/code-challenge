import { Box, MenuItem } from "@mui/material";
import { CSSProperties, memo, useState } from "react";

interface Props {
  option: string;
}

const imgStyle: CSSProperties = { width: 24, height: 24, marginRight: 1, borderRadius: 9999, backgroundColor: '#ddd' }

function CurrencyItem({ option }: Props) {
  const [imgError, setImgError] = useState<boolean>(false);


  return (
    <MenuItem value={option}>
      <Box sx={{ display: "flex", alignItems: "center",  img: imgStyle }}>
        {!imgError && (
          <img
            src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${option}.svg`}
            alt={`${option} icon`}
            onError={() => setImgError(true)}
          />
        )}
        {imgError && <Box sx={imgStyle}></Box>}
        {option}
      </Box>
    </MenuItem>
  );
}

export default memo(CurrencyItem);
