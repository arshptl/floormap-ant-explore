import React, { useState } from "react";
import { useList, useOne, useUpdate } from "@pankod/refine-core";
import { Icabins, OccupiedSeatType } from "src/utils/interfaces";
import ImageMapper from "react-img-mapper";
import { Drawer } from "antd";
import DisplayUser from "./displayUser";
import placeholder from "../../../assets/placeholder.jpg";

// Interfaces
interface propsTypes {
  floor: string;
  cabin: string;
}

interface cabin {
  id: number;
  name: string;
  floor: string;
  depid: string;
  photo: string;
}

interface coordinates {
  occupied: boolean;
  name: string;
  shape: string;
  coords: number[];
  preFillColor: string;
  userName: string;
  emp_id: string;
}

const GetCabin = (props: propsTypes) => {
  console.log(`${props.cabin}cords`);

  const cabinData: any = useOne<cabin>({
    resource: `${props.cabin}`,
    id: 1,
  });
  //   console.log("cabinData", cabinData);
  const cabinCoordsData = useList<coordinates>({
    resource: `${props.cabin}cords`,
  });
  const { data } = cabinCoordsData;
  console.log(cabinData?.data?.data);

  const imgMapperCoords: any = {
    name: "my-map",
    areas: data?.data,
  };
  console.log("imgMapperCoords", imgMapperCoords);

  // States
  const [open, setOpen] = useState(false);
  const [seat, setSeat] = useState<OccupiedSeatType>({
    id: 0,
    name: "",
    shape: "",
    coords: [],
    preFillColor: "",
    fillColor: "",
    userName: "",
    emp_id: "",
    occupied: false,
  });
  const { mutate } = useUpdate();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  console.log("drawer open?", open);

  // functions related to ImageMapper
  const handleSeatClick = (value: OccupiedSeatType) => {
    console.log("InHandleSeatClick");
    showDrawer();
    setSeat(value);
  };

  const handleButtonClick = (obj: any) => {
    console.log("in handle buttonClick", obj, seat.id);

    mutate(
      {
        resource: `${props.cabin}cords`,
        id: seat.id,
        values: obj,
        mutationMode: "pessimistic",
      },
      {
        onSuccess: (data, variables, context) => {
          // Let's celebrate!
          onClose();
        },
      }
    );
  };

  return (
    <div style={{ marginLeft: "25px" }}>
      {imgMapperCoords.areas && (
        <ImageMapper
          onLoad={(imgMapperCoords) => {
            imgMapperCoords;
          }}
          width={1200}
          onClick={(area) => handleSeatClick(area)}
          // onMouseEnter={(area) => enterArea(area)}
          fillColor={"#d10a21"}
          src={cabinData?.data?.data?.photo}
          strokeColor="#EF5366"
          map={imgMapperCoords}
          lineWidth={4}
        />
      )}
      <Drawer
        title="Seat Description"
        placement="right"
        onClose={onClose}
        visible={open}
      >
        <DisplayUser seat={seat} mutateSeat={handleButtonClick} />
      </Drawer>
    </div>
  );
};

export default GetCabin;
