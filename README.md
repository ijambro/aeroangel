# ReactNative workshop - Code for Good @ HackDuke

Workshop and App created by:

🧑 Jake Palmer | 🛫 flyExclusive | 💻 Engineering | 📲 Mobile Apps Lead

Please follow me on GitHub and star this repository if you like this workshop 👍

## About

🛫 **[flyExclusive](https://www.flyexclusive.com)** is a North Carolina-based airline for private and charter jets.

👼 **[AeroAngel](https://www.aeroangel.org)** is a non-profit that coordinates life-saving flights for children needing distant medical treatment.

📲 I'm creating a **React Native App** to help **AeroAngel** coordinate flight requests with **flyExclusive** and other charter jet providers.

## 1. Snack Time: React Native Hands-On

#### Prereqs

- Web browser

#### Instructions

1. Open https://snack.expo.dev in a web browser
1. Preview it on Web, on the right side of the screen
1. Make a change to the message between the `<Text>` tags, and verify that the preview changes
1. Add a new `<Text>` tag below the other `<Text>`, and write some new text inside it. Does it appear?
1. Set the new `<Text>` element's style to `styles.paragraph` (same as the other). Does the styling change?
1. Create another style in the StyleSheet, copied from `styles.paragraph`, but changing the `textAlign` to `right`, and setting a `color` and `backgroundColor` value to any supported CSS color (examples include `green`, `navy`, `royalblue`, `black`, etc)
1. Change your `<Text>` element to use the style you just created. Does the styling change?
1. (Optional Challenge) Change the text that says "Local files and assets can be imported...". Hint: You can Command-Click on an element in the JSX to open its component.
1. (Optional) Preview on a shared virtual iOS or Android device (there is a waiting time)
1. (Optional) Preview on your actual device using Expo Go app. This requires installing the Expo Go app from the App Store/Play Store.

## 2. Create Your First React Native Project

#### Prereqs

- [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) (suggested)
- Node.js (installed from nvm above, otherwise, [install just one version](https://nodejs.org/en/download))
- VS Code (suggested)

#### Instructions

1.  In a command line terminal, go to a folder you use for dev
1.  To create a new project from the list of available templates:
1.  `npx create-expo-app <project name> --template`
1.  Select "Navigation (Typescript)" and press enter
1.  Wait for the creation and the npm install of all dependencies to complete
1.  `cd <project name>`
1.  `ls`

## 3. (Optional) Push this Project to a New Github Repository

#### Prereqs

- Login to github.com

#### Instructions

1. In GitHub, create an **empty** repo (important: no readme, no license file)
1. On the next screen, find the instructions under "…or push an existing repository from the command line"
1. Run those commands which are shown in the instructions:

```
git remote add origin git@github.com:ijambro/aeroangel.git
git branch -M main
git push -u origin main
```

1. In GitHub, refresh the page to see if your project has been pushed to your new repo.

## 4. Open the Project in VS Code

#### Instructions

1. Open VS Code
1. Open Folder in VS Code and select your new project folder
1. Read the overview at https://docs.expo.dev/develop/project-structure/ and compare to the files and folders in your new project
1. Double-click the file package.json. Study the list of scripts. We'll run one of those soon.

## 5. Run the Project in the Terminal

#### Instructions

1.  In the command line terminal, which is already in the new project folder, run `npm start`

> Note: this is the same as running `npm run start`, or running `expo start` if you have already installed Expo globally (using `npm install -g expo`)

1. If the above command fails, run `npm install` and then `npm start` again

## 6. Launch Your App in the Web Browser

#### Instructions

1. In the command line terminal where Expo is running, type `w`
1. Verify this has opened your web browser to http://localhost:8081, which should display your app!

## 7. (Optional) Launch Your App in a USB-tethered Phone or Simulator

#### Instructions

1. In the command line terminal where Expo is running, type `i` for iOS or `a` for Android
1. Select Yes to install or update the Expo Go app on the phone or simulator
1. Verify this has opened your app on a USB-connected phone or running simulator!
1. For more info, see: https://docs.expo.dev/get-started/expo-go/

## 8. (Optional) Launch Your App on Your Own Real Phone (non-tethered)

#### Prereq

- Install Expo Go onto your phone from the App Store/Play Store
- Your phone is connected to the same Wifi subnet as your laptop

#### Instructions

1. In the command line terminal where Expo is running, scroll upward to reveal the QR code
1. On your iPhone, open the camera and scan the QR code
1. On your Android phone, open Expo Go and scan the QR code
1. Verify this opens your app on your phone!
1. For more info, see: https://docs.expo.dev/get-started/expo-go/

## 9. Explore and Modify the App Code

#### Instructions

1. Open `app/(tabs)/index.tsx`
1. Change some text
1. Save the file - it should update your preview automatically. Which tab is updated?
1. Open `app/(tabs)/two.tsx`
1. Change some text
1. Save the file - it should update your preview automatically. Which tab is updated?
1. Open `app/(tabs)/\_layout.tsx`
1. Change the `title` property of each `Tabs.Screen` element, save and preview your changes.
1. Change the `TabBarIcon name` (to see all available icon names, use the FontAwesome explorer: https://icons.expo.fyi/Index). Save and preview your changes.

## 10. Add a button with an onPress handler

#### Instructions

1. Open `app/(tabs)/index.tsx`
1. Write a new function `handlePress` _inside_ of the function TabOneScreen
1. In your new function, `console.log('button pressed!')`
1. Declare a `<Button>` element with the `onPress` property pointing to your function. Example: `<Button title="Press Me" onPress={handlePress} />`
1. Does VS Code give you an error? See if it will suggest the _Quick Fix_ of importing `Button` from `react-native` to fix the error.
1. Save and preview, then press the new button you added!
1. Verify in the command line terminal that your console.log message was logged 👀

## 11. Win the Hackathon!

#### Prereqs

- Your knowledge from this workshop
- A positive attitude
- Some pizza

#### Instructions

1. Continue to build your React Native App!
1. Remember that you can update text, styles, colors, tab names and icons!
1. There's a lot more to a good mobile app, but this is a great start! 🚀
