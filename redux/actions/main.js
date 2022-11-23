import * as t from "../types";
import { toast } from "react-toastify";

// Services
import { createAShipment } from "services/shipment";
import { createLabel, listLabels } from "services/label";

// Utils
import { createTemplateData } from "utils/dataCreateShipment";
import { openUrl } from "utils/browser";
import { filterFunc } from "utils/helpers";

export const createShipment = (dataForm, onSuccess) => (dispatch) => {
  dispatch({
    type: t.LOADING,
    payload: true,
  });

  createAShipment(createTemplateData(dataForm))
    .then(({ data }) => {
      const filterRates = filterFunc(data.included, "type", "rates");

      if (filterRates.length > 0) {
        dispatch({
          type: t.SET_LIST_RATES_SHIPMENT,
          payload: filterRates,
        });
        onSuccess();
        return;
      }

      dispatch({
        type: t.ERROR,
        payload: "No hay tarifas disponibles",
      });
    })
    .catch((err) => {
      toast.error(err.response.data.message);
      dispatch({
        type: t.SET_LIST_RATES_SHIPMENT,
        payload: [],
      });
    })
    .finally(() => {
      dispatch({
        type: t.LOADING,
        payload: false,
      });
    });
};

export const generateLabel = (rateId) => (dispatch) => {
  const fetchCreateLabel = new Promise(async (resolve, reject) => {
    createLabel(rateId)
      .then(({ data: { data } }) => {
        const url = data.attributes?.label_url;
        if (url) {
          resolve();
          openUrl(url);
          dispatch({
            type: t.SET_LIST_RATES_SHIPMENT,
            payload: [],
          });
          return;
        }

        reject(data.attributes.error_message[0].message);
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });

  toast.promise(fetchCreateLabel, {
    pending: {
      render() {
        return "Generando guía...";
      },
    },
    success: {
      render() {
        return `Guía creada`;
      },
    },
    error: {
      render({ data }) {
        return data;
      },
    },
  });
};

export const listLabelsCreate =
  ({ itemsPerPage, currentPage }, setStatePagesPagination) =>
  (dispatch) => {
    listLabels(currentPage, itemsPerPage)
      .then(({ data: { data, links } }) => {
        setStatePagesPagination({
          prev: links.prev ? false : true,
          next: links.next ? false : true,
        });
        dispatch({
          type: t.SET_LIST_LABELS_CREATE,
          payload: data,
        });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
