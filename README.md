# Repro: iOS 26 + A18 Pro Production Crash

Minimal reproduction for [expo/expo#44680](https://github.com/expo/expo/issues/44680).

**Production builds crash immediately on launch on A18 Pro devices (iPhone 16) running iOS 26.x. Dev builds work fine.**

## Environment

- Expo SDK: 56.0.0-canary-20260409
- React Native: 0.85.0
- Hermes: V1 (prebuilt, default)
- react-native-reanimated: 4.3.0
- react-native-gesture-handler: 3.0.0-nightly-20260409

## Steps to reproduce

1. Clone this repo
2. `npm install`
3. `eas init` (link to your Expo account)
4. Update `app.json` with your `bundleIdentifier` and `eas.json` with your Apple credentials
5. `eas build --platform ios --profile production`
6. Install via TestFlight on **iPhone 16 Pro or Pro Max** (A18 Pro chip) running iOS 26.x
7. App crashes immediately on launch

## Expected behavior

App should show "If you see this, the app works."

## Actual behavior

App crashes within ~1 second of launch with `SIGABRT` on `com.meta.react.turbomodulemanager.queue`.

## Notes

- Dev client builds (`eas build --profile development`) work perfectly on the same device
- The same production build works on A15 devices (iPhone 13) per expo/expo#44356
- Tested on iOS 26.3.1 stable, 26.4 beta, and 26.5 beta — all crash on A18 Pro
- 20+ builds tested across SDK 54/55/56, Hermes V0/V1/V2, React Compiler on/off — all crash in production on A18 Pro
