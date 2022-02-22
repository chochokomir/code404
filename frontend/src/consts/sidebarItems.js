import { AssignmentRounded, ChatRounded, HomeRounded, PublicRounded } from "@mui/icons-material";
const sidebarItems = [
    {
        id: 0,
        icon: <HomeRounded/> ,
        text: 'Home',
        route: '/',
        exact: true
    },
    {
        id: 1,
        icon: <PublicRounded/> ,
        text: 'Global Chat',
        route: '/global'
    },
    {
        id: 2,
        icon: <ChatRounded/> ,
        text: 'Direct Messages',
        route: '/dm'
    },
    {
        id: 3,
        icon: <AssignmentRounded/> ,
        text: 'Problems',
        route: '/problems'
    }
]

export default sidebarItems