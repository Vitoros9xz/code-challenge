// AmountField.tsx
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {
  Box,
  TextField,
  InputAdornment,
  styled,
  InputBaseProps,
} from '@mui/material';
import CurrencySelector from './CurrencySelector';
import { handleNumericChange } from '../utils/handleNumericChange';

interface AmountFieldProps {
  amountName: string;
  amountLabel: string;
  currencyName: string;
  options: string[];
  inputProps?: InputBaseProps
}

const NumberInput = styled(TextField)({
  '& input[type=number]': {
    '-moz-appearance': 'textfield',
  },
  '& input[type=number]::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },
  '& input[type=number]::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },
});


const AmountField: React.FC<AmountFieldProps> = ({
  amountName,
  amountLabel,
  currencyName,
  options,
  inputProps
}) => {
  const { control } = useFormContext();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
      <Controller
        name={amountName}
        control={control}
        render={({ field }) => (
          <NumberInput
            {...field}
            fullWidth
            label={amountLabel}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleNumericChange(event, field.onChange);
            }}
            sx={{ flex: 2 }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencySelector name={currencyName} options={options} />
                  </InputAdornment>
                ),
                ...inputProps
              }
            }}
          />
        )}
      />
    </Box>
  );
};

export default AmountField;