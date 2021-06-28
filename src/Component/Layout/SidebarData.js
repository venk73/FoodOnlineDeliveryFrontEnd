import React from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import PaymentIcon from '@material-ui/icons/Payment';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FastfoodIcon from '@material-ui/icons/Fastfood';

export const SidebarData = [
    {
        title: "Edit Profile",
        icon : <AccountCircleIcon />,
        link : "/editprofile"

    },
    {
        title: "Orders",
        icon : <FastfoodIcon />,
        link : "/orders"

    },
    {
        title: "Payments and refunds",
        icon : <PaymentIcon />,
        link : "/paymentsandrefunds"

    },
    {
        title: "Terms and Conditions",
        icon : <AssignmentIcon />,
        link : "/termsandconditions"

    },
    {
        title: "Help",
        icon : <HelpIcon />,
        link : "/help"

    },
    

]