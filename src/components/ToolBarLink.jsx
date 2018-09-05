import React from "react";
import { NavLink } from "react-router-dom";

export default function ToolBarLink({ children, ...rest }) {
  return (
    <NavLink activeClassName="mdc-tab--active" {...rest}>
      {children}
    </NavLink>
  );
}
