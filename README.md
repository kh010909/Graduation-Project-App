### Installation Instructions

1. Install the following packages:
   - `npm install react-native-gifted-charts`
   - `npm install react-native-linear-gradient`
   - `npm install react-native-svg`
   - `npm install @react-navigation/native`
   - `npm i @react-navigation/stack`
   - `npm install react-native-screens`
   - `npm install react-native-safe-area-context`
   - `npm install @react-navigation/bottom-tabs`
   - `npm install react-native-vector-icons`
   - `npm install --save-dev @types/react-native-vector-icons`
   - `npm i react-native-toast-message`
   - `npm i react-native-vision-camera`
   - `npm i react-native-paper`
   - `npm i react-native-image-picker`
   - `npm i react-native-element-dropdown`
   
2. Add the following code snippet at the bottom of the file `android/app/build.gradle`:
   ```gradle
   apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
   
3. Import Project to index.js to with following code:
   ```javascript
   import Project from './Graduation-Project-App';
