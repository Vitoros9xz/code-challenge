import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { formatNumber } from "../utils/formatNumber";

interface CurrencyData {
  currency: string;
  date: string;
  price: number;
}

interface Response {
  data: CurrencyData[];
}

function useApp() {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingConvert, setLoadingConvert] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [priceData, setPriceData] = useState<CurrencyData[]>(
    null as unknown as CurrencyData[]
  );

  useEffect(() => {
    (async () => {
      try {
        const res = (await axios.get(
          "https://interview.switcheo.com/prices.json"
        )) as Response;
        setPriceData(res.data);
      } catch (error) {
        setError(true);
        console.log("error:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const methods = useForm({
    defaultValues: {
      fromCurrency: "USD",
      amount: "0",
      toCurrency: "",
      convertedAmount: "0",
    },
  });

  const { setValue, watch } = methods;

  const { amount, toCurrency } = watch();

  const price = useMemo(
    () => priceData?.find((item) => item.currency === toCurrency)?.price,
    [priceData, toCurrency]
  );

  const convert = useCallback(() => {
    if (!amount) return;
    setLoadingConvert(true);

    setTimeout(() => {
      setLoadingConvert(false);

      const amountNumber = amount.replace(/,/g, "");
      const floatAmount = parseFloat(amountNumber);
  
      const convertedAmount = floatAmount * (price as number);
      setValue(
        "convertedAmount",
        floatAmount ? formatNumber(convertedAmount.toFixed(3)) : "0"
      );
  
    }, 1000);
  }, [amount, toCurrency]);

  // Mảng các lựa chọn tiền tệ
  const currencyOptions: string[] = useMemo(
    () =>
      priceData ? [...new Set(priceData.map((item) => item.currency))] : [],
    [priceData]
  );

  useEffect(() => {
    setValue("toCurrency", currencyOptions[0]);
  }, [currencyOptions]);

  return { methods, currencyOptions, loading, error, convert, loadingConvert };
}

export default useApp;
