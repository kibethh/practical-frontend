import React, { useEffect } from 'react';
import { useStateContext } from '@durlabh/dframework-ui';
import user from "../components/user";
import { Routes, Route } from 'react-router';

const RouteComponent = () => {
    const { dispatchData } = useStateContext();
    useEffect(() => {
        dispatchData({ type: "UPDATE_DATE_TIME", payload: "DD-MM-YYYY hh:mm:ss A" })
        dispatchData({ type: "SET_GRID_SETTINGS", payload: { permissions: { edit: true, add: true, export: true, delete: true, Url: `${process.env.REACT_APP_BASE_URL}/api/` } } })
    }, [])
    return (
        <Routes>
            <Route path='/User' element={user.Grid} />
            <Route path='/User/:id' element={user.Form} />
            <Route />
        </Routes>
    )
}

export default RouteComponent;
