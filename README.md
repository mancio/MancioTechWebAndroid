# ManciotechWeb for Android

## Android version of My React Web app using Cordova

### Intro
This app is my website app converted in android apk.

### How to start
* Follow [this tutorial](https://blog.devgenius.io/convert-your-react-application-to-an-andriod-ios-app-using-cordova-87646729c2b7])
* Install Android Studio and right version library (see later)
* Create and Run a Pixel 5 Android emulator or similar
* execute `cordova run android` to compile and run on the emulator

### Note
* Disable Lazy load to avoid chunk missing and black screen
* Route * to the main page to avoid page missing (Cordova has problem with Routes)
