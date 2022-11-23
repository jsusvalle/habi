import { useSelector } from "react-redux";

import QuoteShipping from "components/templates/QuoteShipping/QuoteShipping";

export default function Home() {
  const loading = useSelector(({ main }) => main.loading);
  const error = useSelector(({ main }) => main.error);
  const listRates = useSelector(({ main }) => main.listRates);

  return (
    <QuoteShipping loading={loading} error={error} listRates={listRates} />
  );
}
