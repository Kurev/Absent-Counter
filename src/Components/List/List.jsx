import React, { useEffect, useState } from "react";
import { RiAddLargeLine } from "react-icons/ri";
import { TiMinus } from "react-icons/ti";
import { TiDelete } from "react-icons/ti";
import Input from "../Input/Input";

const List = ({ isLightMode }) => {
  const storedItems = JSON.parse(localStorage.getItem("handleData")) || [];
  const [list, setList] = useState(storedItems);

  useEffect(() => {
    localStorage.setItem("handleData", JSON.stringify(list));
  }, [list]);

  const incrementAbsent = (index) => {
    const updatedIncrementList = [...list];
    updatedIncrementList[index].initialAbsent += 1;
    if (
      updatedIncrementList[index].initialAbsent >=
      updatedIncrementList[index].maxAbsent
    ) {
      updatedIncrementList[index].initialAbsent =
        updatedIncrementList[index].maxAbsent;
    }
    setList(updatedIncrementList);
  };

  const decrementAbsent = (index) => {
    const updatedDecrementList = [...list];
    updatedDecrementList[index].initialAbsent -= 1;
    if (updatedDecrementList[index].initialAbsent < 0) {
      updatedDecrementList[index].initialAbsent = 0;
    }
    setList(updatedDecrementList);
  };

  const addItem = (items) => {
    setList([...list, items]);
  };

  const handleDelete = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const getItemColor = (initialAbsent, maxAbsent) => {
    const percentage = (initialAbsent / maxAbsent) * 100;
    if (maxAbsent - initialAbsent == 1 || percentage == 100)
      return isLightMode ? "bg-red-400" : "bg-red-500";
    // if (percentage >= 90) return isLightMode ? "bg-red-400" : "bg-red-500";
    if (percentage >= 75)
      return isLightMode ? "bg-orange-300" : "bg-orange-400";
    if (percentage >= 50)
      return isLightMode ? "bg-yellow-300" : "bg-yellow-400";
    if (percentage >= 1) return isLightMode ? "bg-green-300" : "bg-green-500";
    return isLightMode ? "bg-green-300" : "bg-green-500";
  };

  const checkForData = () => {
    if (list.length === 0) {
      return (
        <h1
          className={`text-lg font-light select-none ${
            isLightMode ? "text-gray-600" : "text-white"
          }`}
        >
          No data
        </h1>
      );
    } else {
      return list.map((items, index) => (
        <div
          key={index}
          className={`relative group flex h-11 mb-4 items-center justify-between px-[10%] transition-all duration-500 ease-in rounded-xl ${getItemColor(
            items.initialAbsent,
            items.maxAbsent
          )}`}
        >
          {/* Delete Button */}
          <button
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-1 rounded-xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 transition-all duration-300 ${
              isLightMode ? "bg-red-400 text-black" : "bg-red-500 text-white"
            }`}
            onClick={() => handleDelete(index)}
          >
            <h1 className="text-[25px] cursor-pointer">
              <TiDelete />
            </h1>
          </button>

          {/* Minus Button */}
          <p
            className={`${
              isLightMode ? "text-blue-600" : "text-[#632aff]"
            } cursor-pointer`}
          >
            <TiMinus onClick={() => decrementAbsent(index)} />
          </p>

          {/* Subject and Absence Info */}
          <h1
            className={`text-1xl select-none ${
              isLightMode ? "text-black" : "text-[#ffffff]"
            }`}
          >
            {items.subject} - Absent: {items.initialAbsent}/{items.maxAbsent}
          </h1>

          {/* Add Button */}
          <p
            className={`${
              isLightMode ? "text-blue-600" : "text-[#6026ff]"
            } cursor-pointer`}
          >
            <RiAddLargeLine onClick={() => incrementAbsent(index)} />
          </p>
        </div>
      ));
    }
  };

  return (
    <div className="relative w-full mt-10">
      <div className="mb-14 mt-14">
        <Input isLightMode={isLightMode} onAddItem={addItem} items={list} />
      </div>
      <div className="mb-6">
        <h1
        className={`font-sans select-none text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl ${
          isLightMode ? "text-black" : "text-[#bdbcbe]"
        }`}
      >
        List of Absences
    </h1>
      </div>
      <div className="w-full">
        <div>{checkForData()}</div>
      </div>
    </div>
  );
};

export default List;