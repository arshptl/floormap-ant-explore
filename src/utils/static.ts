import type { SelectProps } from "antd";

export const floorWithCabinMap = [
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

export const floorOptions: SelectProps["options"] = [
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