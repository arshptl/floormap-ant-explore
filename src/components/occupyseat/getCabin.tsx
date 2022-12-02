import React, { useState } from "react";
import { useList, useOne, useUpdate } from "@pankod/refine-core";
import { OccupiedSeatType } from "src/utils/interfaces";
import ImageMapper from "react-img-mapper";
import { Drawer } from "antd";
import DisplayUser from "./displayUser";
import styles from "../../styles/occupyseat.module.css";

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
  const [hoveredArea, setHoverArea] = useState(null);
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

  const enterArea = (area: any) => {
    setHoverArea(area);
  };

  const leaveArea = () => {
    setHoverArea(null);
  };

  const getTipPosition = (area: any) => {
    console.log("gettopposition", area);
    return { top: `${area.center[0]}px`, left: `${area.center[0]}px` };
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
          // Closing the drawer after successful mutation
          onClose();
        },
      }
    );
  };

  return (
    <div>
      {/* <div style={{ width: "1500px", backgroundColor: "red", height: "780px" }}>
        Hello
      </div> */}
      {imgMapperCoords.areas && (
        <div style={{margin: "1em 0"}}>
        <ImageMapper
          onLoad={(imgMapperCoords) => {
            imgMapperCoords;
          }}
          // width={1500}
          // height={750}
          onClick={(area) => handleSeatClick(area)}
          // onMouseEnter={(area) => enterArea(area)}
          fillColor={"#AE5661"}
          src={cabinData?.data?.data?.photo}
          strokeColor="#EF5366"
          map={imgMapperCoords}
          onMouseEnter={(area) => enterArea(area)}
          onMouseLeave={(area) => leaveArea(area)}
          lineWidth={4}
        />
        </div>
      )}
      {hoveredArea && (
        <span
          className={styles.tooltip}
          style={{ ...getTipPosition(hoveredArea) }}
        >
          {hoveredArea && (
            <div>
              <div>
                Seat Number: <b>{hoveredArea.name}</b>
              </div>
              {hoveredArea.occupied ? (
                <div>
                  Occupied by: <b>{hoveredArea.userName}</b>
                </div>
              ) : (
                <div>Not Occupied</div>
              )}
            </div>
          )}
        </span>
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
