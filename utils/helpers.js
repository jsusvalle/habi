export const isEmptyObject = (object) => Object.keys(object).length === 0;

export const filterFunc = (array, key, type) =>
  array.filter((p) => p[key] === type);

export const orderByPrice = (array) => {
  return (array || []).sort((a, b) => {
    if (a.attributes.days === b.attributes.days) {
      return (
        Number(a.attributes.total_pricing) - Number(b.attributes.total_pricing)
      );
    }

    return a.attributes.days > b.attributes.days ? 1 : -1;
  });
};
