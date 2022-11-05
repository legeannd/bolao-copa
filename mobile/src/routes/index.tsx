import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from '../routes/app.routes'
import { SignIn } from '../screens/SignIn'

export function Routes() {
  return (
    <NavigationContainer>
      <SignIn />
    </NavigationContainer>
  )
}