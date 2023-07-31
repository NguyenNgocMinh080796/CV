import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutComponent from './AboutComponent'
import ProjectComponent from './ProjectComponent'
import ContactComponent from './ContactComponent'
import ErrorComponent from './ErrorComponent'
import CVComponent from './CVComponent'

export default function ContentComponent() {
    return (
        <Routes>
            <Route path='/' element={<AboutComponent />} />
            <Route path='/project' element={<ProjectComponent />} />
            <Route path='/contact' element={<ContactComponent />} />
            <Route path='/cv' element={<CVComponent />} />
            <Route path='*' element={<ErrorComponent />} />
        </Routes>
    )
}
