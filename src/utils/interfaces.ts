// occupy seat interfaces
export interface Icabins {
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
            userName: string;
            emp_id: number;
        }
    ];
}

export interface Cabintype {
    label: string;
    value: string;
}

export interface OccupiedSeatType {
  name: string;
  shape: string;
  coords: Array<number>;
  preFillColor: string;
  fillColor: string;
  userName: string;
  emp_id: string;
  occupied: boolean;
}
