import React from "react";

const Card = ({
  item,
  index,
  setOpenComponent,
  setMedicineDetails,
  currency,
}) => {
  return (
    <div
      onClick={() => (setMedicineDetails(item), setOpenComponent("Medicine"))}
      key={index}
      className="col-xl-2 col-xxl-3 col-md-4 col-sm-6"
    >
      <div className="card">
        <div className="card-body product-grid-card">
          <div className="new-arrival-product">
            <div className="new-arrivals-img-contnent">
              <img className="img-fluid rounded" src={item.image} alt="" />
            </div>
            <div className="new-arrival-content text-center mt-3">
              <h4>{item.name}</h4>

              <del className="discount">{item.discount} %</del>
              <span className="price">
                {item.price} {currency}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
