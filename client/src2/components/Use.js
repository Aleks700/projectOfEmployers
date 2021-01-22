import React from 'react'

export default function Use(props) {
    return (
        <tr id={props.data.Id}>
            <td scope="row">{props.data.NAME}</td>
            <td>{props.data.POSITION}</td>
            <td>{props.data.СABINET}</td>
            <td>{props.data.FLOOR}</td>
            <td>{props.data.IP}</td>
            <td>{props.data.DEPARTMENT}</td>
            <td>{props.data.ENTER_POINT}</td>
            <td >{props.data.DESCTOP}</td>
            <td>{props.data.MONITOR}</td>
            <td>{props.data.PRINTER}</td>
        </tr>
    )
}
