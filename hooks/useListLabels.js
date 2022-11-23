import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listLabelsCreate } from "redux/actions/main";

const useListLabels = (itemsPerPage = 10, currentPage) => {
  const dispatch = useDispatch();
  const dataList = useSelector(({ main }) => main.listLabels);

  const [statePagesPagination, setStatePagesPagination] = useState({
    prev: false,
    next: false,
  });

  useEffect(() => {
    const fetch = () => {
      dispatch(
        listLabelsCreate({ itemsPerPage, currentPage }, setStatePagesPagination)
      );
    };
    fetch();
  }, [currentPage, itemsPerPage]);

  return {
    dataList,
    statePag: statePagesPagination,
  };
};

export default useListLabels;
