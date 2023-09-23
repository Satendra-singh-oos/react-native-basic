
import { Stack, useRouter } from "expo-router";

import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity

} from "react-native";

import {

    ScreenHeaderBtn,
} from "../../components";
import { COLORS, icons } from "../../constants";
import styles from "./profile.style";





const Userprofile = () => {

    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>

            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerBackVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.left}
                        dimension='60%'
                        handlePress={() => router.back()}
                    />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.share}
                        dimension="60%"
                    />
                ),
                headerTitle: "User-Profile"
            }} />
            <View style={styles.container}>
                <Text style={styles.userName}>Hello Satendra Singh</Text>
                <Text style={styles.profileMessage}>This is Satendra Singh Profile</Text>
            </View>

            <TouchableOpacity style={styles.homeBtn} onPress={() => router.back()}>
                <Text style={styles.homeBtnText}>Go To Home</Text>
            </TouchableOpacity>


        </SafeAreaView>

    )
}

export default Userprofile