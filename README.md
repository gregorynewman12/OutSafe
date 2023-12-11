# OutSafe

Capstone project for Tyler, Niranjan, and Gregory's OutSafe Campus Alert Management System

Version 0 video [here](https://media.oregonstate.edu/media/t/1_f8hyyx6f).

# Setup Controller Software
## Installing Tools

1. Run any Unix system, either Windows Subsystem for Linux (Ubuntu), MacOS, or a Linux distribution.
1. Install homebrew.
1. Run `brew install node`.
1. Run `brew install watchman`.
1. Run `brew tap homebrew/cask-versions`.
1. Run `brew install --cask zulu11`.
1. Install [Android Studio](https://developer.android.com/studio/index.html). Check the following boxes:
    <ol type="a">
        <li>Android SDK</li>
        <li>Android SDK Platform</li>
        <li>Android Virtual Device</li>
    </ol>
1. Install the Android SDK.
    <ol type="a">
        <li>Open Android Studio, click on "More Actions", and select "SDK Manager"</li>
        <li>Select the "SDK Platforms" tab and check the "Show Package Details" box.</li>
        <li>Expand the Android 13 (Tiramisu) entry, and make sure the following are checked:</li>
        <ol type="i">
            <li>Android SDK Platform 33</li>
            <li>One of the following:</li>
            <ul>
                <li>Intel x86 Atom_64 System Image, or</li>
                <li>Google APIs Intel x86 Atom System Image, or</li>
                <li>Google APIs ARM 64 v8a System Image</li>
            </ul>
        </ol>
        <li>Select the "SDK Tools" tab, and check the "Show Package Details" box here as well.</li>
        <li>Expand the "Android SDK Build-Tools" entry, and make sure 33.0.0 is selected.</li>
        <li>Click "Apply" to download and install.</li>
    </ol>
1. Add the following lines to your `~/.zprofile` or `~/.zshrc` (`~/.bash_profile` or `~/.bashrc` for bash):
    ```
    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    ```
1. Either restart your shell or run `source ~/.[your_shell_file_from_previous_step]`.
1. Run `echo $ANDROID_HOME` and `echo $PATH` to verify these have been added.

## Running on a Physical Device
If you have a physical Android device, you can use it for development in place of an AVD by plugging it in to your computer using a USB cable and following the instructions [here](https://reactnative.dev/docs/running-on-device).

## Running on a Virtual Device
If you use Android Studio to open this project, you can see the list of available Android Virtual Devices (AVDs) by opening the "AVD Manager" from within Android Studio. Look for an icon that looks like this:

![image](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAZCAIAAABCYLJOAAACLUlEQVR4Ab2Vw6IfPxiG3zfJHPPP2rbdfW3rProsLqCr7rqsbVur2raPPb+Z5Du2+YyRJ87HtLQ0dAIKnYNBQ5BEI4hI271BEIjUNZAgqbUm2WovyRLpyVMnfd83xggq3ATDMHTOzZo1q3ev3iRbXV4RKZEuXLBQayPOAQSESjlnDx85nJ+fjwpa7zUlaHPj2CO/oLTUNnTR8Wb2kvGeZ9rVbwJxTuArm69haAMaqtJXgnZ5y1tVmxKsMoqgKS0p2z1+WdEgItWXjp4XJEiCHesVZ50LnbUOrcE0LQURk2BsYHU0ASmnuqUgrfaSEAcvWs9eMQbKGe0J0L17j8TERJICW+hnx0Ylk6o17SAVF6U1lL3/bld+UbrAzpgx9f///4sEeT/TH955srMwkk2wNeUlROCsiBNCicu7dH+zH5BUgChapThh0NrYqCRpbTsoxZiEKBu60EbSsr+m5Z7RaoiIJQkQkv3lz8De/8/0tJEWekmKdSXb9MUjRYK7L3bk+996/7PpT/Zr6yIko0xcSsK0r2n33/+4NLjnXNIA0nz7kizy/b379ly6ckGIb+kPUhP7zZu5zTN/B/ZzaL+lxPecN2O7YsKbL2edOLLF5f3/v/+zsrOSk1MAxEb1z8j5dezaVggTYiYDyCnIP359q4gENl4EDdJwfLPWAiCplAptABEHp2oMKSfljzTaa0W/GVPxXkQ8EwWw5gCs+VhCK7w1/25o0ZHOj8dd7C0GRnwgNA5r8rwAAAAASUVORK5CYII=)

If you have recently installed Android Studio, you will likely need to [create a new AVD](https://developer.android.com/studio/run/managing-avds.html). Select "Create Virtual Device...", then pick any Phone from the list and click "Next", then select the Tiramisu API Level 33 image.

Click "Next" then "Finish" to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it, then proceed to the next step.

## Running the React Native application
### Start Metro
Run `npm start` to start the bundling application. Completing the next step should run this automatically, but this is how to do it
if this server does not start automatically.

### Start the application
Run `npm run android`. This should launch the application in Android Studio's Emulator.
