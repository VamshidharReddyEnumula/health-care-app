import React from "react";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BallotIcon from '@mui/icons-material/Ballot';
import PhonelinkEraseIcon from '@mui/icons-material/PhonelinkErase';
import RestoreIcon from '@mui/icons-material/Restore';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import CategoryIcon from '@mui/icons-material/Category';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

export const leftNavData = [
    {
        name: 'Doctors',
        path: '/doctors',
        icon: <LocalHospitalIcon />,
        subItems: []
    },
    {
        name: 'Employee | Staff',
        path: '/employee',
        icon: <AccountCircleIcon />,
        subItems: []
    },
    {
        name: 'Health Seaker',
        path: '/health-seaker',
        icon: <MonitorHeartIcon />,
        subItems: []
    },
    {
        name: 'User Approval Process',
        path: '/user-approval-process',
        icon: <VerifiedUserIcon />,
        subItems: []
    },
    {
        name: 'Role',
        path: '/role',
        icon: <AccessibilityIcon />,
        subItems: []
    },
    {
        name: 'Appointments',
        path: '/appointments',
        icon: <BookOnlineIcon />,
        subItems: [
            {
                name: 'Calendar',
                path: '/appointments/calendar',
                icon: <CalendarMonthIcon />,
                subItems: []
            },
            {
                name: 'Allocate Slot Form',
                path: '/appointments/allocate-slot-form',
                icon: <BallotIcon />,
                subItems: []
            },
            {
                name: 'Retract Slot / Cancel the Slot',
                path: '/appointments/retract-slot',
                icon: <PhonelinkEraseIcon />,
                subItems: []
            },
            {
                name: 'Reassign / Reschedule',
                path: '/appointments/reassign',
                icon: <RestoreIcon />,
                subItems: []
            },
        ]
    },
    {
        name: 'Inspiration Factors mgmt',
        path: '/inspiration-fact-mgmt',
        icon: <ManageAccountsIcon />,
        subItems: []
    },
    {
        name: 'Order mgmt',
        path: '/order-mgmt',
        icon: <ListAltIcon />,
        subItems: []
    },
    {
        name: 'Diet Menu mgmt',
        path: '/diet-menu-mgmt',
        icon: <MonitorWeightIcon />,
        subItems: []
    },
    {
        name: 'Ingredient mgmt',
        path: '/ingredient-mgmt',
        icon: <CategoryIcon />,
        subItems: []
    },
    {
        name: 'Activity mgmt',
        path: '/activity-mgmt',
        icon: <LocalActivityIcon />,
        subItems: []
    },
]

