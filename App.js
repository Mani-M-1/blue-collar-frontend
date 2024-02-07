import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// Screens
import Register from './screens/Register';
import Signin from './screens/Signin';
import Welcome from './screens/Welcome';
import JobProvider from './Routes/JobProvider/JobProvider';
import ProviderDetails from './Routes/JobProvider/ProviderDetails';
import JobSeeker from './Routes/JobSeeker/JobSeeker';
import Messages from './components/Messages';
import ProfilePage from './components/ProfilePage';
import AccountPage from './src/AccountPage';
import NotificationPage from './src/NotificationPage';
import HelpPage from './src/HelpPage';
import LogoutPage from './src/LogoutPage';
import EditableText from './Routes/JobProvider/EditableText';
import SekerDetails from './Routes/JobSeeker/SekerDetails';
import ViewAll from './Routes/JobProvider/ViewAll';
import AppliedList from './Routes/JobSeeker/AppliedList';
import ApplyHere from './Routes/JobSeeker/ApplyHere';
import ViewButton from './Routes/JobProvider/ViewButton';


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Signin' component={Signin} />
        <Stack.Screen name='JobProvider' component={JobProvider} />
        <Stack.Screen name='ProviderDetails' component={ProviderDetails} /> 
        <Stack.Screen name='JobSeeker' component={JobSeeker} />
        <Stack.Screen name='Messages' component={Messages} />
        <Stack.Screen name='ProfilePage' component={ProfilePage} />
        <Stack.Screen name='AccountPage' component={AccountPage} />
        <Stack.Screen name='NotificationPage' component={NotificationPage} />
        <Stack.Screen name='HelpPage' component={HelpPage} />
        <Stack.Screen name='LogoutPage' component={LogoutPage} />
        <Stack.Screen name='EditableText' component={EditableText} />
        <Stack.Screen name='SekerDetails' component={SekerDetails} />
        <Stack.Screen name='ViewAll' component={ViewAll} />
        <Stack.Screen name='AppliedList' component={AppliedList} />
        <Stack.Screen name='ApplyHere' component={ApplyHere} />
        <Stack.Screen name='ViewButton' component={ViewButton} />




      </Stack.Navigator>
    </NavigationContainer>


  );
}

export default App;
