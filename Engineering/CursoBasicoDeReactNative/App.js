import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from './navigation/NavigationStack';
import NavigationTab from "./navigation/NavigationTab";
import { NavigationDrawer } from "./navigation/NavigationDrawer";

export default function App() {
  return (
    <NavigationContainer>
      {/* <NavigationStack /> */}
      <NavigationTab />
      {/* <NavigationDrawer /> */}
    </NavigationContainer>
  );
}
