import React from "react";
import s from "./RequestsTable.module.scss"

const RequestsTable = (props) => {
//rowsElements for requests table
    let rowsElements = props.requests.map(row => {
            return <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.coordsFromLat}</td>
                <td>{row.coordsFromLng}</td>
                <td>{row.coordsToLat}</td>
                <td>{row.coordsToLng}</td>
            </tr>
        }
    )
    return (
        <>
            <div className={s.contentWrapper}>
                <div className={s.tableWrapper}>
                    <table>
                        <thead>
                            <tr>
                                <th>Номер заявки</th>
                                <th>Координаты ОТ lat</th>
                                <th>Координаты ОТ lng</th>
                                <th>Координаты ДО lat</th>
                                <th>Координаты ДО lng</th>
                            </tr>
                        </thead>
                        <tbody>
                        {rowsElements}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default RequestsTable