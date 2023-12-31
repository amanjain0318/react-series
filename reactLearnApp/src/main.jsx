import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToDoApp } from './ToDoComponent/ToDoApp.jsx'
import { StrictMode } from 'react'
import { Suspense } from 'react'
import Loading from './ToDoComponent/Loading.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    //<App />
    <StrictMode>
        <Suspense fallback = {<Loading />}>
        <ToDoApp />
        </Suspense>
    </StrictMode>
)
