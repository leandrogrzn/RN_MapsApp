import { Pressable, Text, View } from "react-native";
import { globalStyles } from "../../../config/theme/styles";
import { usePermissionStore } from "../../store/permissions/usePermissionsStore";

export const PermissionsScreen = () => {

  const { locationStatus, requestLocationPermission } = usePermissionStore();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ color: 'black'}}>Habilitar ubicacion</Text>

      <Pressable
        style={ globalStyles.btnPrimary }
        onPress={ requestLocationPermission }
      >
        <Text style={{ color: 'white' }}>Habilitar localizacion</Text>
      </Pressable>

      <Text style={{ color: 'black'}}>Estado actual:  { locationStatus }</Text>

    </View>
  )
}
