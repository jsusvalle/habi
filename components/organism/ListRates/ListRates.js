import { useMemo } from "react";

import { useDispatch } from "react-redux";
import { generateLabel } from "redux/actions/main";

import { Box } from "components/atoms";
import { CardList } from "components/molecules";

import { orderByPrice } from "utils/helpers";

const ListRates = ({ data }) => {
  const dispatch = useDispatch();

  const filterData = useMemo(() => {
    let dataToFilter = orderByPrice([...data]);

    return dataToFilter;
  }, [data]);

  const handleClickGenerateLabel = (id) => {
    dispatch(generateLabel(id));
  };

  return (
    <Box
      display="flex"
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        flexDirection: "column",
        gap: "1.5rem",
        margin: "0 50px",
      }}
    >
      {filterData.length > 0 &&
        filterData.map((item, key) => (
          <CardList
            key={item.id}
            onClick={() => handleClickGenerateLabel(Number(item.id))}
            title={item.attributes.service_level_name}
            price={`${item.attributes.total_pricing} ${item.attributes.currency_local}`}
            days={item.attributes.days}
            textButton="Generar guía"
            isBestOption={key === 0}
          />
        ))}
    </Box>
  );
};

export default ListRates;
