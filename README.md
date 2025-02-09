## Blockchain based voting application 

This is a voting application that uses blockchain technology to ensure that the votes are secure and transparent.'

### How I did Installation and set up
- brew install node
- brew install ruby
- brew install watchman
- brew install cocoapods

then , ro run in macos using xcode this step is compulsory : 
```
cd ios
pod install
```
- run the app using `npx react-native run-ios`

### setup project
- 


# Problems faced during development 
### What is get application get crashed and reopen window again and again 
- this is because the project is not set up properly
- clear earlier pods and cache
- npx react-native start --reset-cache
- cd ios
- rm -rf Pods
- rm -rf Podfile.lock
- Pod install
- come back ( cd .. )
- now , run the application again : `npx react-native run-ios`

