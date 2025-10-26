import Navigation from "../../components/navigation/navigation.components";

import Dashboard from "../dashboard/dashboard.components.jsx";
import { DisplayContainer } from "./display.styles.jsx";
import { useSelector } from "react-redux";
import { selectCurrentNavigationItem } from "../../store/navigationItem/navigationItem.selector.js";
import Calendar from "../calendar/calendar.components.jsx";
import Trades from "../trades/trades.components.jsx";
import Reports from "../reports/reports.components.jsx";
import Imports from "../imports/imports.components.jsx";
import Authentication from "../authentication/authentication.components.jsx";
import Playbook from "../playbook/playbook.components.jsx";
import Settings from "../settings/settings.components.jsx";

const navigationItems = [
  { id: 1, label: "Dashboard", component: <Dashboard /> },
  { id: 2, label: "Calendar", component: <Calendar /> },
  { id: 3, label: "Trades", component: <Trades /> },
  { id: 4, label: "Reports", component: <Reports /> },
  { id: 5, label: "Playbook", component: <Playbook /> },
  { id: 6, label: "Import", component: <Imports /> },
  { id: 7, label: "Settings", component: <Settings /> },
  { id: 8, label: "Sign Out", component: <Authentication /> },
];

const Display = () => {
  const currentNavigationItem = useSelector(selectCurrentNavigationItem);
  const renderComponent = () => {
    switch (currentNavigationItem) {
      case "Dashboard":
        return <Dashboard />;
      case "Calendar":
        return <Calendar />;
      case "Playbook":
        return <Playbook />;
      case "Trades":
        return <Trades />;
      case "Reports":
        return <Reports />;
      case "Import":
        return <Imports />;
      case "Settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <DisplayContainer>
      <Navigation navigationItems={navigationItems} />
      {renderComponent()}
    </DisplayContainer>
  );
};
export default Display;
