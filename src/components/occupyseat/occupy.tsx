import React from "react";
import { IResourceComponentsProps, GetListResponse } from "@pankod/refine-core";
import { Typography, Select } from "@pankod/refine-antd";
import type { SelectProps } from "antd";
import { useState, useEffect } from "react";
import Image from "next/image";
import placeholder from "../../../assets/placeholder.jpg";
import ImageMapper from "react-image-mapper";

const { Title, Text } = Typography;

const floorWithCabinMap = [
  {
    floor: "4",
    cabins: [
      {
        label: "IT",
        value: "it",
      },
    ],
  },
  {
    floor: "5",
    cabins: [
      {
        label: "React",
        value: "react",
      },
      {
        label: "Mobile",
        value: "mobile",
      },
      {
        label: "Node",
        value: "node",
      },
    ],
  },
  {
    floor: "6",
    cabins: [
      {
        label: "Java",
        value: "java",
      },
      {
        label: "Sales",
        value: "sales",
      },
    ],
  },
];

const floorOptions: SelectProps["options"] = [
  {
    value: "0",
    label: "All",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
  {
    value: "6",
    label: "6",
  },
];

export const OccupySeat: React.FC<
  IResourceComponentsProps<GetListResponse<Icabins>>
> = ({ initialData }) => {
  const cabinData = initialData?.data;
  const setInitialData = (): Cabintype[] => {
    const dummy: Cabintype[] = [];
    initialData?.data?.forEach((cabin) => {
      dummy.push({
        label: cabin.name,
        value: cabin.depid,
      });
    });

    return dummy;
  };

  let cabinOptions: Cabintype[] = setInitialData();

  const [cabins, setCabinOption] = useState(cabinOptions);
  const [userSelect, setUserSelect] = useState({ floor: "", cabin: "" });
  const [msg, setMsg] = useState("somthing");

  const [currentCabin, setCurrentCabin] = useState<Icabins>();
  const handleChange = (value: string) => {
    console.log(`Selected: ${value}`);
    setUserSelect((existingValues) => ({
      // Retain the existing values
      ...existingValues,
      // update the current field
      floor: value,
    }));
    let localCabinArray: Cabintype[] = [];
    if (parseInt(value) === 0) {
      setCabinOption(cabinOptions);
    } else {
      //   initialData?.data.forEach((c) => {
      //     if (c.floor === parseInt(value)) {
      //       localCabinArray.push({ value: c.depid, label: c.name });
      //     }
      //   });
      floorWithCabinMap.forEach((c) => {
        if (c.floor === value) {
          localCabinArray.push(...c.cabins);
        }
      });
      setCabinOption(localCabinArray);
    }
    console.log(localCabinArray);
  };

  const clicked = (value:any) =>{
    console.log(value.userName,"selected crew")
    setMsg(value.userName);
  }

  const handleCabinChange = (value: string) => {
    console.log(`Selected Cabin: ${value}`);
    setUserSelect((existingValues) => ({
      // Retain the existing values
      ...existingValues,
      // update the current field
      cabin: value,
    }));
    const selectedCabin = cabinData?.find((c) => c.depid === value);
    setCurrentCabin(selectedCabin);
    console.log(selectedCabin);
    setMsg("somthing");
  };

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
        <Select
          defaultValue="All"
          onChange={handleChange}
          style={{ width: 200 }}
          options={floorOptions}
        />

        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Search to Select"
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
      <div
        style={{
          margin: "24px 0",
        }}
      >
        {console.log(currentCabin)}
        {currentCabin && (
          <ImageMapper   
            src={currentCabin?.photo ? currentCabin?.photo : placeholder}
            width={500}
            map={currentCabin}
            onClick={area => clicked(area)}
          />
        )}
      </div>
      {msg}
    </div>
  );
};

interface Icabins {
  id: string;
  floor: number;
  name: string;
  depid: string;
  photo: string;
  areas: [
    {
      name: number;
      shape: string;
      coords: [];
      preFillColor: string;
      fillColor: string;
      userName:string;
      emp_id:number;
    }
  ];
}

type Cabintype = {
  label: string;
  value: string;
};
