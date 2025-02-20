// CurrencySelector.tsx
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormControl, Select, MenuItem, styled, Box } from "@mui/material";
import { ArrowDropDown as ArrowDropDownIcon } from "@mui/icons-material";
import CurrencyIcon from "./CurrencyIcon";

interface CurrencySelectorProps {
  name: string;
  options: string[];
}

const StyledSelect = styled(Select)({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSelect-icon": {
    display: "none",
  },
  "& .MuiSelect-select": {
    paddingRight: "24px",
  },
});

const CustomArrowDropDownIcon = styled(ArrowDropDownIcon)({
  position: "absolute",
  right: 8,
  top: "50%",
  transform: "translateY(-50%)",
  pointerEvents: "none",
});

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  name,
  options,
}) => {
  const { control } = useFormContext();

  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        render={({ field: currencyField }) => (
          <>
            <StyledSelect
              {...currencyField}
              sx={{
                "& .MuiSelect-select": {
                  paddingY: 0,
                  paddingX: 1,
                },
              }}
              slotProps={{
                input: {
                  readOnly: options.length === 1,
                },
              }}
            >
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <CurrencyIcon option={option} />
                    {option}
                  </Box>
                </MenuItem>
              ))}
            </StyledSelect>
            <CustomArrowDropDownIcon />
          </>
        )}
      />
    </FormControl>
  );
};

export default CurrencySelector;
