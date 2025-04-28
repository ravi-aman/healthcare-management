import React from "react";

//INTERNAL IMPORT
import GiftData from "../../Data/Gift.json";
import ListGift from "../Gift/ListGift";

const Gift = () => {
  return (
    <div className="dropdown-menu dropdown-menu-end p-0">
      <div
        id="DZ_W_Gifts"
        className="widget-timeline p-3 dz-scroll style-1 height300"
      >
        <ul className="timeline">
          {GiftData.map((item, index) => (
            <ListGift
              index={index}
              title={item?.title}
              message={item?.message}
              price={item?.price}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gift;
