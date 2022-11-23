import { useState } from "react";

function usePagination(itemsPerPage = 20) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (p) => {
    setCurrentPage(p);
  };

  return { itemsPerPage, currentPage, handleChangePage };
}

export default usePagination;
