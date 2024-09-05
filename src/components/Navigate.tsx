import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NAVIGATION = [
  {
    title: "Item 1",
    path: "/",
  },
  {
    title: "Item 2",
    children: [
      {
        title: "Sub Item 1",
        path: "/item-1/page-1",
      },
      {
        title: "Sub Item 2",
        path: "/item-1/page-2",
      },
    ],
  },
  {
    title: "Item 3",
    path: "/protected",
  },
];

function Navigate() {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {NAVIGATION.map((item) => (
        <NavItem key={item.title} nav={item} />
      ))}
    </List>
  );
}

export default Navigate;

const NavItem = ({ nav }) => {
  const [open, setOpen] = useState(true);
  let navigate = useNavigate();

  const handleClick = () => {
    if (nav.children) {
      return setOpen(!open);
    } else {
      navigate(nav.path);
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const expandIcon = nav.children ? (
    open ? (
      <ExpandLess />
    ) : (
      <ExpandMore />
    )
  ) : null;

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={nav.title} />
        {expandIcon}
      </ListItemButton>
      {nav.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {nav.children.map((child) => (
              <ListItemButton
                key={child.title}
                sx={{ pl: 4 }}
                onClick={() => handleNavigate(child?.path)}
              >
                <ListItemText primary={child.title} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};
