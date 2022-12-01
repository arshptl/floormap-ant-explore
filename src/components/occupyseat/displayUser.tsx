import React from "react";
import { OccupiedSeatType } from "../../utils/interfaces";
import { Button, Card } from "@pankod/refine-antd";

interface propsTypes {
  seat: OccupiedSeatType;
  mutateSeat: any;
}

const DisplayUser = (props: propsTypes): JSX.Element => {
  console.log(props.seat.occupied);
  return (
    <div>
      
      {!props.seat.occupied ? (
        <>
        <h2>Occupy your Seat</h2>
         <Button
          title="Occupy Seat"
          type="primary"
          onClick={() =>
            props.mutateSeat({
              occupied: true,
              name: "TESTINGG",
              userName: "Testing mutation",
              emp_id: "123456",
              preFillColor: "#EF5366",
            })
          }
        >
          Occupy Seat
        </Button>
        </>
       
      ) : (
        <>
        <Card
        style={{
          width: "100%",
          backgroundColor: "var(--primary-light)",
          color: "var(--primary)",
          margin: "0.5rem 0",
        }}
      >
        Seat Number: {props.seat.name}
      </Card>
      <Card
        style={{
          width: "100%",
          backgroundColor: "var(--primary-light)",
          color: "var(--primary)",
          margin: "0.5rem 0",
        }}
      >
        Seat Owner: {props.seat.userName}
      </Card>
      <Card
        style={{
          width: "100%",
          backgroundColor: "var(--primary-light)",
          color: "var(--primary)",
          margin: "0.5rem 0",
        }}
      >
        Onwer Employee Code: {props.seat.emp_id}
      </Card>
        <h3>Seat already Occupied</h3>
        <Button 
          title="Cancel Seat"
          type="primary"
          onClick={()=>
            props.mutateSeat({
              occupied: false,
              name: "",
              userName: "",
              emp_id: "",
              preFillColor: "",
            })
          }
        >
          Cancel Seat
        </Button>
        </>
        
      )}
      {/* <Card >
            </Card> */}
    </div>
  );
};

export default DisplayUser;
