import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function TapMenu(props) {
  const tapMenu = [
    {
      id: v4(),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr4-0GqixCFrqtZ8bEgiwkRdGYXcyNlD0TpX3PMwzJx4b9r8SS&usqp=CAU",
      name: "MIRROR POND PALE ALE",
      brand: "DESCHUTES",
      price: "$ 12",
      abv: "12% ABV",
      pints: 124
    },
    {
      id: v4(),
      img: "https://pbs.twimg.com/profile_images/1118565165480337408/hTb40HYf.png",
      name: "CZECH-STYLE PILSNER",
      brand: "BUOY",
      price: "$ 11",
      abv: "9.8% ABV",
      pints: 124
    },
    {
      id: v4(),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAk98i_WUT93Ab5sOy0uCIjIkA4rQUYVRM_P_nyifr3P34a5la&usqp=CAU",
      name: "Barrel Aged IPA",
      brand: "GIGANTIC",
      price: "$ 13",
      abv: "11.4% ABV",
      pints: 124
    },
    {
      id: v4(),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9z4LT7645EIuXtmxydA-Axpv0eh9m8CLr0HVOAi6_AuRh1zdq&usqp=CAU",
      name: "Mosaic Hopped CREAM ALE",
      brand: "BRIDGEPORT",
      price: "$ 10.5",
      abv: "10% ABV",
      pints: 124
    }
  ];


  return (
    <>
      <div className="tapMenu">
        <div className="row">
          {tapMenu.map((tap) =>
            <Tap
              key={tap.id}
              id={tap.id}
              img={tap.img}
              name={tap.name}
              brand={tap.brand}
              price={tap.price}
              abv={tap.abv}
              pints={tap.pints}
            />
          )}
        </div>  
      </div>
    </>
  )
}

TapMenu.prototypes = {
  tapMenu: PropTypes.array

}

export default TapMenu;