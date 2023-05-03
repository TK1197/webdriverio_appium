# Calculator Mobile App

This project is about automate Android calculator app using webdriverIO(appium) with javascript and page object model framework. 

# Getting Started

In order to clone and run this project please install the necessary tools into your machine. Refer to below prerequisites

# Prerequisites

Ensure the below tools are installed in your machine
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Appium](https://appium.io/docs/en/2.0/quickstart/install/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [node](https://nodejs.dev/en/learn/how-to-install-nodejs/)
- [java](https://macosx-faq.com/install-java-via-terminal/)
- [Android Studio](https://developer.android.com/studio)

# Install Appium 
#### 1. Open terminal if you are using mac or open command line for windows and run this command to install appium. In my case, I'm using appium v1.22.0
```
npm install -g appium@1.22.0
```

# Setup Android path
- Once you have installed Android Studio and complete setup a virtual device now it's time to setup android path.
  - Note: If you haven't setup a virtual device yet please follow this [steps](https://developer.android.com/studio/run/managing-avds) to setup.

#### 1. Open terminal if you are using mac or open command line for windows  

#### 2. Run this command 
```
nano ~/.bash_profile 
```

#### 3. Add following PATH variables to .bash_profile 
```
export JAVA_HOME=(/usr/libexec/javaome)
export PATH={JAVA_HOME}/bin:PATH
export ANDROID_HOME = /Users/{your_path}/Library/Android/sdk
export ANDROID_SDK=$ANDROID_HOME 
PATH=$PATH:$ANDROID_HOME/build-tools 
PATH=$PATH:$ANDROID_HOME/platform-tools 
PATH=$PATH:$ANDROID_HOME/tools 
export PATH
```
#### 4. Close and reopen terminal/command line and run this command to ensure ANDROID_HOME are set
```
echo $ANDROID_HOME
```

# Setup repository

#### 1. Clone this repository into you local env
#### 2. Launch this project using Visual Studio Code
#### 3. Launch terminal and run this command
```
npm install
```
- This will install all the neccessary dependencies based on package.json file.

# Running the specs individually
#### **1. Before running ensure that capabilities under `wdio.conf.js` are filled in and matched according to your machine setup of virtual device under Android studio. In my case, it's as below**  

```
  "platformName": "Android",
  "appium:platformVersion": "12",
  "appium:deviceName": "Android 12 (Pixel 3a XL)",
  "appium:automationName": "UIAutomator2",
  "appium:app": path.join(process.cwd(), "./apps/calculator.apk")
```
  - NOTE: Ensure that calculator.apk are in the folder mentioned in above appium path. If not you may download the app from [here](https://m.apkpure.com/calculator/com.google.android.calculator) and place it under apps folder.

#### **2. Go to the Project root directory and run command**      
```
npx wdio wdio.conf.js --spec ./test/specs/<specs name>.js
```

# Test scenarios

- `basic_arithmetic`

- `decimal_and_complex_arithmetic`

- `verify_erase_function`

- `verify_keypad_numerics_and_symbols`

- `view_memory`

# Execution of specs

#### May find the videos of specs executing sucessfully here
- [basic_arithmetic](https://drive.google.com/file/d/1CmrFPASH6BUrHoFo9olLaF9_Xqa3KClY/view?usp=sharing), [decimal_and_complex_arithmetic](https://drive.google.com/file/d/1EyyV3NcVPRPg43s6yRafMd8EyvIVA4ed/view?usp=sharing), [verify_erase_function](https://drive.google.com/file/d/1Uw3shhWZnzFCKSdM7JXBpO5IGuOGd4mi/view?usp=sharing), [verify_keypad_numerics_and_symbols](https://drive.google.com/file/d/1505ScB8ayVBeKPXYeLQYiWuDoxwpOblg/view?usp=sharing), [view_memory](https://drive.google.com/file/d/1U5xnURc7XCz0_bwvdXKNTqtyCVf1T9Mq/view?usp=sharing)


# Authors

  - **Thiban Kumar** -
    [GitHub](https://github.com/TK1197)
