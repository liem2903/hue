import { View } from "react-native";
import { PlantType, Stages } from "../../types/index";


export default function Cactus_Bloom(stages: Stages) {  
    return (
        <View>
            {stages === "Seedling" && <View style={{ width: 20, height: 20, backgroundColor: 'green', borderRadius: 10 }} />}
            {stages === "Growing" && <View style={{ width: 40, height: 40, backgroundColor: 'green', borderRadius: 20 }} />}
            {stages === "Blooming" && <View style={{ width: 60, height: 60, backgroundColor: 'green', borderRadius: 30 }} />}
            {stages === "Grown" && <View style={{ width: 80, height: 80, backgroundColor: 'green', borderRadius: 40 }} />}
        </View>
    )
}