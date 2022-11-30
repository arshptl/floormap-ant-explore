import React from "react";
import { OccupiedSeatType } from "../../utils/interfaces";
import { Button, Card } from "@pankod/refine-antd";

const DisplayUser = (props: OccupiedSeatType): JSX.Element => {
  console.log(props.occupied);
  return (
    <div>
      <Card
        style={{
          width: "100%",
          backgroundColor: "var(--primary-light)",
          color: "var(--primary)",
          margin: "0.5rem 0"
        }}
      >
        Seat Number: {props.name}
      </Card>
      <Card
        style={{
          width: "100%",
          backgroundColor: "var(--primary-light)",
          color: "var(--primary)",
          margin: "0.5rem 0"
        }}
      >
        Seat Owner: {props.userName}
      </Card>
      <Card
        style={{
          width: "100%",
          backgroundColor: "var(--primary-light)",
          color: "var(--primary)",
          margin: "0.5rem 0"
        }}
      >
        Onwer Employee Code: {props.emp_id}
      </Card>
      {!props.occupied ? <Button title="Occupy Seat" type="primary">Occupy Seat</Button>: <h3>Seat already Occupied</h3>}
      {/* <Card >
            </Card> */}
    </div>
  );
};

export default DisplayUser;
