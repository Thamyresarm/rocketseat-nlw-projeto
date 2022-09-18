import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screans/Home";
import { Game } from "../screans/Game";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
return (
    <Navigator screenOptions={{headerShown: false}}>
        <Screen
            name="home"
            component = {Home}
        />
        <Screen
            name="game"
            component = {Game}
        />
    </Navigator>
)
}