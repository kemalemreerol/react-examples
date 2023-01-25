import React from "react";
import MenuList from "../components/MenuList";
import menuler from "../yemekdata";
import { useDispatch } from "react-redux";

function HomePage() {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="row">
        {menuler.map((menu) => (
          <div className="col-md-4">
            <MenuList menu={menu} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
