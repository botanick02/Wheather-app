import React from "react";
import { ReactComponent as Celsius } from "../img/svg/celsius.svg";
import { ReactComponent as CelsiusActive } from "../img/svg/celsius-active.svg";
import { ReactComponent as Fahrenheit } from "../img/svg/fahrenheit.svg";
import { ReactComponent as FahrenheitActive } from "../img/svg/fahrenheit-active.svg";
import { useAppDispatch, useAppSelector } from "../store/useAppDispatch";
import { setCurrentUnit } from "../store/MeasureUnits/MeasureUnits.slice";
const UnitSwitcher = () => {
  const currentUnit = useAppSelector((state) => state.MeasureUnits.currentUnit);
  const dispatch = useAppDispatch();

  const changeUnitHandler = (unit: "celsius" | "fahrenheit") => {
    dispatch(setCurrentUnit(unit));
  };

  return (
    <div className="unit-switcher">
      {currentUnit === "celsius" ? (
        <>
          <CelsiusActive /> |{" "}
          <Fahrenheit onClick={() => changeUnitHandler("fahrenheit")} />
        </>
      ) : (
        <>
          <Celsius onClick={() => changeUnitHandler("celsius")} /> |{" "}
          <FahrenheitActive />
        </>
      )}
    </div>
  );
};

export default UnitSwitcher;
