import { Button } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CVComponent() {
    return (
        <div
            className='bg'
            style={{
                textAlign: 'center',
                paddingTop: 300,
                paddingLeft: 50,
                height: '100%'
            }}
        >
            <Button type='primary' ghost>
                <NavLink to='https://www.topcv.vn/xem-cv/BFAJA1FRWgMHUAFXBlECVQEGAVJXUVpRUQBQVg119e'>CV của tôi</NavLink>
            </Button>
        </div >
    )
}
