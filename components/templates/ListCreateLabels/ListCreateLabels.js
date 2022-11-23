import React from "react";

// UI
import { Loader, Box } from "components/atoms";
import { DisplayMessage, Pagination } from "components/molecules";
import ListLabels from "components/organism/ListLabels/ListLabels";

const ListCreateLabels = ({
  dataList,
  statePag,
  currentPage,
  handleChangePage,
}) => {
  return (
    <>
      <Box
        width="full"
        color="grayLight"
        style={{
          minHeight: "400px",
        }}
      >
        <DisplayMessage
          isActive={dataList.length === 0}
          spacing={32}
          messageDefault="No hay envíos creados"
        />

        <ListLabels data={dataList} />

        <Box
          display="flex"
          width="full"
          style={{
            padding: "0 50px 50px 50px",
          }}
        >
          <Pagination
            page={currentPage}
            onClick={handleChangePage}
            disableBack={statePag.prev}
            disableNext={statePag.next}
            color="grayDark"
          />
        </Box>
      </Box>
    </>
  );
};

export default ListCreateLabels;
