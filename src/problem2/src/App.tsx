// CurrencyConverter.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import AmountField from "./components/AmountField";
import ConvertButton from "./components/ConvertButton";
import { FormProvider } from "react-hook-form";
import useApp from "./hooks/useApp";

const App: React.FC = () => {
  const { currencyOptions, methods, loading, error, convert, loadingConvert } = useApp();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <FormProvider {...methods}>
        <Box
          sx={{
            maxWidth: 400,
            margin: "auto",
            padding: 2,
            border: "1px solid #ccc",
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Currency Converter
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Check live rates, set rate alerts, receive notifications and more.
          </Typography>

          {!loading && !error && (
            <Box sx={{ mt: 2 }}>
              <AmountField
                amountName="amount"
                amountLabel="Amount"
                currencyName="fromCurrency"
                options={["USD"]}
                inputProps={{
                  readOnly: loadingConvert,
                }}
              />
              <ConvertButton convert={convert} loadingConvert={loadingConvert} />
              <AmountField
                amountName="convertedAmount"
                amountLabel="Converted Amount"
                currencyName="toCurrency"
                options={currencyOptions}
                inputProps={{
                  readOnly: true,
                }}
              />

              <Typography variant="body2" sx={{ mt: 2 }}>
                Indicative Exchange Rate
              </Typography>
              <Typography variant="body1">
                1 USD = {methods.watch("convertedAmount")}{" "}
                {methods.watch("toCurrency")}
              </Typography>
            </Box>
          )}
        </Box>
      </FormProvider>
    </Box>
  );
};

export default App;
