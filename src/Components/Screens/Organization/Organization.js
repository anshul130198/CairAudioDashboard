import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { getAllData } from '../../../store/organizationSlice';

const Organization = () => {

  const dispatch = useDispatch();
  const { organizations, setting, loading, error } = useSelector((state) => state?.organization);
  useEffect(() => {
    if (organizations.length === 0 && setting.length === 0) {
      dispatch(getAllData())
    }
  }, [dispatch, organizations, setting]);

  return (
    <Outlet />
    // <>
    //   <div>
    //     {loading === 'pending' && <div>Loading...</div>}
    //     {error && <div>Error: {error}</div>}
    //     {organizationSettingData && <div>Data 1: {organizationSettingData}</div>}
    //   </div>
    // </>
  )
}

export default Organization