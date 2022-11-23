// UI
import { Box } from "components/atoms";
import { CardList } from "components/molecules";

// Utils
import { openUrl } from "utils/browser";

const ListLabels = ({ data }) => {
  const handleClickOpenUrl = (url) => {
    openUrl(url);
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
      {data.length > 0 &&
        data.map((item) => (
          <CardList
            key={item.id}
            onClick={() => handleClickOpenUrl(item.attributes.label_url)}
            title={item.attributes.tracking_number}
            textButton="Ver guía"
          />
        ))}
    </Box>
  );
};

export default ListLabels;
