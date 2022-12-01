import React from "react";
import { IResourceComponentsProps, GetListResponse } from "@pankod/refine-core";
import { Typography, Select } from "@pankod/refine-antd";
import { useState } from "react";
import placeholder from "../../../assets/placeholder.jpg";
import { Icabins, Cabintype } from "src/utils/interfaces";
import { allCabins, floorWithCabinMap, floorOptions } from "../../utils/static";
const { Title } = Typography;
import Image from "next/image";
import GetCabin from "./getCabin";

export const OccupySeat: React.FC<
  IResourceComponentsProps<GetListResponse<Icabins>>
> = ({ initialData }) => {
  const [cabins, setCabinOption] = useState(allCabins);
  const [userSelect, setUserSelect] = useState({ floor: "", cabin: "" });

  const handleChange = (value: string) => {
    let localCabinArray: Cabintype[] = [];
    if (parseInt(value) === 0) {
      setCabinOption(allCabins);
      localCabinArray.push(...allCabins);
    } else {
      floorWithCabinMap.forEach((c) => {
        if (c.floor === value) {
          localCabinArray.push(...c.cabins);
        }
      });
      setCabinOption(localCabinArray);
    }
    setUserSelect({ floor: value, cabin: "" });
  };

  const handleCabinChange = (value: string) => {
    setUserSelect((existingValues) => ({
      // Retain the existing values
      ...existingValues,
      // update the current field
      cabin: value,
    }));
  };
  console.log("userSelect", userSelect);

  return (
    <div>
      <Title>Occupy seat</Title>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1em",
        }}
      >
        <h3>Select Floor</h3>
        <Select
          defaultValue="All"
          onChange={handleChange}
          style={{ width: 200 }}
          options={floorOptions}
        />
        <br />
        <h3>Select Department</h3>

        <Select
          showSearch
          style={{ width: 200 }}
          value={
            userSelect.cabin !== "" ? userSelect.cabin : "Search to select"
          }
          // placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={cabins}
          onChange={handleCabinChange}
        />
      </div>
      {userSelect.cabin !== "" && <GetCabin {...userSelect} />}
      {userSelect.cabin === "" && (
        <div style={{ margin: "24px 0", width: "1500px" }}>
          <Image src={placeholder} />
        </div>
      )}
    </div>
  );
};
