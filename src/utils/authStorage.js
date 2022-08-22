import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(
      `${this.namespace}:authorization`
    )

    return accessToken ? JSON.parse(accessToken) : [];
      // Get the access token for the storage
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(
      `${this.namespace}:authorization`,
      JSON.stringify(accessToken)
    )
    // Add the access token to the storage
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:authorization`)
    // Remove the access token from the storage
  }
}

export default AuthStorage;