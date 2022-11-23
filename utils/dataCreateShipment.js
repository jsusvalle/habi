const templateShipment = {
  address_from: {
    province: "Ciudad de México",
    city: "Azcapotzalco",
    name: "Jose Fernando",
    zip: "02900",
    country: "MX",
    address1: "Av. Principal #234",
    company: "skydropx",
    address2: "Centro",
    phone: "5555555555",
    email: "skydropx@email.com",
  },
  parcels: [
    {
      weight: 3,
      distance_unit: "CM",
      mass_unit: "KG",
      height: 10,
      width: 10,
      length: 10,
    },
  ],
  address_to: {
    province: "Jalisco",
    city: "Guadalajara",
    name: "Jorge Fernández",
    zip: "44100",
    country: "MX",
    address1: " Av. Lázaro Cárdenas #234",
    company: "-",
    address2: "Americana",
    phone: "5555555555",
    email: "ejemplo@skydropx.com",
    reference: "Frente a tienda de abarro",
    contents: "Content",
  },
  consignment_note_class_code: "53131600",
};

export const createTemplateData = (dataForm) => {
  const { address_from_zip, address_to_zip, weight, height, width, length } =
    dataForm;

  return {
    address_from: {
      ...templateShipment.address_from,
      zip: address_from_zip,
    },
    address_to: {
      ...templateShipment.address_to,
      zip: address_to_zip,
    },
    parcels: [
      {
        ...templateShipment.parcels[0],
        weight: Number(weight),
        height: Number(height),
        width: Number(width),
        length: Number(length),
      },
    ],
    consignment_note_class_code: templateShipment.consignment_note_class_code,
  };
};
