import { createStackNavigator } from "react-navigation-stack";

import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../shared/Header";

const screens = {
	Home: {
		screen: Home,
		navigationOptions: ({ navigation }) => {
			return {
				headerTitle: () => <Header navigation={navigation} title="GameZone" />,
			};
		},
	},
	ReviewDetails: {
		screen: ReviewDetails,
		navigationOptions: {
			title: "Review Details",
		},
	},
};
const HomeStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerTintColor: "#444",
		headerStyle: { backgroundColor: "#eee" },
	},
});

export default HomeStack;
