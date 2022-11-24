import React from 'react'
import {
    IResourceComponentsProps,
    GetListResponse,
    useMany,
} from "@pankod/refine-core";
import { Dropdown, Typography, FilterDropdown, Select, Menu } from '@pankod/refine-antd'
import type { SelectProps } from 'antd';
import { useEffect } from 'react';

const { Title, Text } = Typography;

const cabinData = [
    {
        "id": 1,
        "floor": 4,
        "name": "React",
        "photo": "https://i.picsum.photos/id/688/200/200.jpg?hmac=SPM6DXITCd9R3P5BMqgFMw6QdW-SJ2mPKUvq2g9eF-g",
        "coordinates": [
            {
                "seatid": 1,
                "name": "",
                "cords": [],
                "empid": "",
                "occupied": false
            },
            {
                "seatid": 2,
                "name": "",
                "cords": [],
                "empid": "",
                "occupied": false
            },
            {
                "seatid": 3,
                "name": "",
                "cords": [],
                "empid": "",
                "occupied": false
            }
        ]
    },
    {
        "id": 2,
        "floor": 5,
        "name": "Node",
        "photo": "https://i.picsum.photos/id/688/200/200.jpg?hmac=SPM6DXITCd9R3P5BMqgFMw6QdW-SJ2mPKUvq2g9eF-g",
        "coordinates": [
            {
                "seatid": 1,
                "name": "",
                "cords": [],
                "empid": "",
                "occupied": false
            },
            {
                "seatid": 2,
                "name": "",
                "cords": [],
                "empid": "",
                "occupied": false
            },
            {
                "seatid": 3,
                "name": "",
                "cords": [],
                "empid": "",
                "occupied": false
            }
        ]
    },
    {
        "id": 3,
        "floor": 5,
        "name": "Mobile",
        "photo": "https://i.picsum.photos/id/688/200/200.jpg?hmac=SPM6DXITCd9R3P5BMqgFMw6QdW-SJ2mPKUvq2g9eF-g",
        "coordinates": [
            {
                "seatid": 1,
                "name": "",
                "cords": [],
                "empid": "",
                "occupied": false
            },
            {
                "seatid": 2,
                "name": "",
                "cords": [],
                "empid": "",
                "occupied": false
            },
            {
                "seatid": 3,
                "name": "",
                "cords": [],
                "empid": "",
                "occupied": false
            }
        ]
    },
    {
        "id": 4,
        "floor": 4,
        "name": "HR",
        "photo": "https://i.picsum.photos/id/688/200/200.jpg?hmac=SPM6DXITCd9R3P5BMqgFMw6QdW-SJ2mPKUvq2g9eF-g",
        "coordinates": [
            {
                "seatid": 1,
                "name": "",
                "cords": [],
                "empid": "",
                "occupied": false
            },
            {
                "seatid": 2,
                "name": "",
                "cords": [],
                "empid": "",
                "occupied": false
            },
            {
                "seatid": 3,
                "name": "",
                "cords": [],
                "empid": "",
                "occupied": false
            }
        ]
    }
]

// let localCabins = cabinData;

// const cabinOptions = [{}];


const floorOptions: SelectProps['options'] = [
    {
        value: "0",
        label: 'All',
    },
    {
        value: "4",
        label: '4',
    },
    {
        value: "5",
        label: '5',
    },
    {
        value: "6",
        label: '6',
    }
];
// SelectProps['options']

let cabinOptions: any[] = [
    {
        value: 'react',
        label: 'React cabin',
    },
    {
        value: 'mobile',
        label: 'Mobile Team Cabin',
    },
    {
        value: 'node',
        label: 'Backend/Nodejs Cabin',
    },
    {
        value: 'java',
        label: 'Java Cabin',
    },
    {
        value: 'sales',
        label: 'Sales Cabin',
    },
];

export const OccupySeat = () => {

    useEffect(() => {
        console.log("in useEffect");
        
    }, [cabinOptions])

    const handleChange = (value: string) => {
        console.log(`Selected: ${value}`);
        cabinOptions = []
        cabinData.forEach((c) => {
            if (c.floor === parseInt(value))
                cabinOptions.push({ "value": c.name, "lable": c.name })
        })
        // cabinData.filter(c => {
        //     if (c.floor === parseInt(value)) {
        //         return {
        //             "label": c.name,
        //             "value": c.name,
        //         }
        //     }
        // })

        console.log(cabinOptions);

    };

    return (
        <div>
            <Title>Occupy seat</Title>
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
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={cabinOptions}
            />
        </div>
    )
}

interface Icabins {

}