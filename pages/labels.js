// Template
import ListCreateLabels from "components/templates/ListCreateLabels/ListCreateLabels";

// Hooks
import useListLabels from "hooks/useListLabels";
import usePagination from "hooks/usePagination";

export default function Labels() {
  const { itemsPerPage, currentPage, ...propsUsePagination } =
    usePagination(10);
  const propsUseListLabels = useListLabels(itemsPerPage, currentPage);

  return (
    <ListCreateLabels
      currentPage={currentPage}
      {...propsUsePagination}
      {...propsUseListLabels}
    />
  );
}
