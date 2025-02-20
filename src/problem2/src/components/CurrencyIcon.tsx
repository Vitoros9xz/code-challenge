import { Box } from "@mui/material";
import { CSSProperties, memo, useState } from "react";

interface Props {
  option: string;
}

const imgStyle: CSSProperties = {
  width: 24,
  height: 24,
  borderRadius: 9999,
  backgroundColor: "#ddd",
};

function CurrencyIcon({ option }: Props) {
  const [imgError, setImgError] = useState<boolean>(false);

  return (
    <>
      {!imgError && (
        <img
          src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${option}.svg`}
          alt={`${option} icon`}
          onError={() => setImgError(true)}
        />
      )}
      {imgError && <Box sx={imgStyle}></Box>}
    </>
  );
}

export default memo(CurrencyIcon);
