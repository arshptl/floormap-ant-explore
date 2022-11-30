import React, { useEffect } from "react";
import { IResourceComponentsProps, GetListResponse } from "@pankod/refine-core";
import { Typography, Select } from "@pankod/refine-antd";
import { useState } from "react";
import placeholder from "../../../assets/placeholder.jpg";
import ImageMapper from "react-img-mapper";
import { Icabins, Cabintype, OccupiedSeatType } from "src/utils/interfaces";
import { floorWithCabinMap, floorOptions } from "../../utils/static";
import DisplayUser from "./displayUser";
import { Col, Divider, Row, Drawer } from "antd";
const { Title } = Typography;
import refine from "../../../assets/refine.svg";
import Image from "next/image";

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
  const [seat, setSeat] = useState<OccupiedSeatType>({
    name: "",
    shape: "",
    coords: [],
    preFillColor: "",
    fillColor: "",
    userName: "",
    emp_id: "",
    occupied: false,
  });

  const [occupiedColor,setOccupiedColor] = useState<boolean|undefined>(undefined);


  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [currentCabin, setCurrentCabin] = useState<Icabins>();
  const handleChange = (value: string) => {
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
  };

  const handleSeatClick = (value: OccupiedSeatType) => {
    showDrawer();
    setSeat(value);
    
  };

  const handleCabinChange = (value: string) => {
    setUserSelect((existingValues) => ({
      // Retain the existing values
      ...existingValues,
      // update the current field
      cabin: value,
    }));
    const selectedCabin = cabinData?.find((c) => c.depid === value);
    setCurrentCabin(selectedCabin);
    // setSeat("somthing");
  };


  const enterArea=(value: OccupiedSeatType)=>{
      console.log(value.occupied,"value occupied color")
      setOccupiedColor(value.occupied);
  }

  const color = occupiedColor ? "#626262" : "#EF5366"


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
        <br/>
        <h3>Select Department</h3>
        
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

      <Drawer
        title="Seat Description"
        placement="right"
        onClose={onClose}
        visible={open}
      >
        <DisplayUser {...seat} />
      </Drawer>
      {!currentCabin && (
        <div style={{ width: "1200px", margin: "24px 0" }}>
          <Image src={placeholder} />
        </div>
      )}
      {currentCabin && (
        <div style={{ marginLeft: "25px"}}>
          <ImageMapper
            width={1200}
            onClick={(area) => handleSeatClick(area)}
            onMouseEnter={(area) => enterArea(area)}
            fillColor={color}
            src={currentCabin?.photo}
            strokeColor="#EF5366"
            map={currentCabin}
            lineWidth={4}
          />
        </div>
      )}
    </div>
  );
}


