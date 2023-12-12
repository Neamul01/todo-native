import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TodoScreen from "./Screens/TodoScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import MonitorScreen from "./Screens/MonitorScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Todo" component={TodoScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Monitor" component={MonitorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
