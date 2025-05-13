import * as React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListSubheader,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

//내부 import
import MenuList from "../../assets/MenuList";
import type { TMenuItem } from "../../assets/MenuList";

const DraweList: React.FC = () => {
  const [openMap, setOpenMap] = React.useState<Record<string, boolean>>({});

  const handleToggle = (key: string) => {
    setOpenMap((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderMenuItems = (items: TMenuItem[], depth = 0): React.ReactNode => {
    return items.map((item) => {
      const hasChildren = item.children;
      const isOpen = openMap[item.router] ?? false;

      return (
        <React.Fragment key={item.router}>
          <ListItemButton
            onClick={() => hasChildren && handleToggle(item.router)}
            sx={{ pl: 2 + depth * 2 }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
            {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>

          {hasChildren && (
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.children && renderMenuItems(item.children, depth + 1)}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          메뉴 리스트
        </ListSubheader>
      }
    >
      {renderMenuItems(MenuList)}
    </List>
  );
};

export default DraweList;
