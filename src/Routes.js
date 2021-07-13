import DetailTable from "./Components/DetailTable"
import CreateUser from "./Pages/CreateUser"
import EditUser from "./Pages/EditUser"
import ShowUser from "./Pages/ShowUser"


const routes = [
    {
        path: '/home',
        exact: true,
        component: DetailTable
    },
    {
        path: '/createUser',
        exact: true,
        component: CreateUser
    },
    {
        path: '/editUser',
        exact: true,
        component: EditUser
    },
    {
        path: '/ShowUser',
        exact: true,
        component: ShowUser
    },
]

export default routes;