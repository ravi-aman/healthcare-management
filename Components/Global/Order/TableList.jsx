import React from "react";

const TableList = ({
  item,
  index,
  name,
  setOpenComponent,
  setMedicineDetails,
  setInvoic,
  currency,
}) => {
  return (
    <tr key={index} className="btn-reveal-trigger">
      <td className="py-2">
        <div className="form-check custom-checkbox checkbox-success">
          <input type="checkbox" className="form-check-input" id="checkbox" />
          <label className="form-check-label" htmlFor="checkbox" />
        </div>
      </td>
      <td className="patient-info ps-0">
        <span>
          <img src={item?.medicine.image} alt="" />
        </span>
        <span className="text-nowrap ms-2">{item?.medicine.name}</span>
      </td>
      <td className="py-2">
        <strong className="text-primary">{item?.medicine.manufacturer}</strong>
        <br />
        <a href={`mailto:${item?.email}`}>{item?.email}</a>
      </td>
      <td className="py-2">{item?.medicine.brand}</td>
      <td className="py-2">
        {item?.medicine.price} {currency}
      </td>

      <td className="py-2 ">{item?.quantity}</td>
      <td className="py-2 ">
        {item?.payAmount} {currency}
      </td>
      <td>
        <a
          onClick={() => (
            setMedicineDetails(item?.medicine), setOpenComponent("Medicine")
          )}
          className="btn btn-primary light btn-rounded mb-2 me-2"
        >
          Medicine
        </a>
      </td>
      <td>
        <a
          onClick={() => (setInvoic(item), setOpenComponent("Invoice"))}
          className="btn btn-primary light btn-rounded mb-2 me-2"
        >
          Order
        </a>
      </td>
    </tr>
  );
};

export default TableList;
