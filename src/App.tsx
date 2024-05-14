import React from 'react'
import { RecoilRoot } from 'recoil' 
import TaskSummary from './features/tasks/components/TaskSummary'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SideMenuLayout from './layouts/SideMenuLayouts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SideMenuLayout />,
    children: [
      {
        path: '/',
        element: <TaskSummary />
      },
      {
        path: 'task-list',
        element: (
          <div >
            <h1>Task List</h1>
          </div>
        ),
      },
      {
        path: '/progress-management',
        element: (
          <div >
            <h1>Task Progress</h1>
          </div>
        ),
      },
    ]
  }
])

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App