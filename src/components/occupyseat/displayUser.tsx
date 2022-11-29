import React from 'react'
import { OccupiedSeatType } from '../../utils/interfaces';
import { Card, Title } from '@pankod/refine-antd'

const DisplayUser = (props: OccupiedSeatType): JSX.Element => {
    return (
        <div>
            {props.userName}
            {/* <Card >
            </Card> */}
        </div>
    )
}

export default DisplayUser