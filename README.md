 React Native Product Showcase App

This is a simple React Native app built using **Expo CLI**.  
It displays a product list, shows product details, and includes a **camera feature** to capture and preview photos.

---

##  How to Run the App

> ✅ No need to install anything extra if the folder is already set up.

### 📲 Step-by-Step Guide:

#### 1. Open the project folder in your terminal.

#### 2. Start the Expo development server:

\`\`\`bash
npx expo start
\`\`\`

> This will open a browser tab and show a **QR code**.

#### 3. On your Android or iOS device:

- **Download the Expo Go app**:

  - 📲 Android – Play Store  
  - 📲 iOS – App Store

#### 4. Open the **Expo Go** app on your phone.

#### 5. **Scan the QR code** shown in the browser using the Expo Go app.

> The app will launch on your phone 📱🎉

**⚠️ Make sure your phone and computer are connected to the same Wi-Fi network.**

---

## 📸 Features

- ✅ Product List (fetched from an online API)  
- ✅ Product Detail View with image and description  
- ✅ Camera Screen:  
  - Take a photo using the device camera  
  - Preview the captured photo  
  - Option to Retake or Confirm the photo  

---

## 🧠 Architecture (MVVM)

This app follows the **MVVM (Model-View-ViewModel)** design pattern:

- **Model:**  
  \`models/Product.js\` – defines the Product structure

- **ViewModel:**  
  \`viewmodels/ProductViewModel.js\` – handles API calls and state management

- **Views:**  
  All UI screens located in \`views/\` folder:  
  - Product List  
  - Product Detail  
  - Camera Screen  

---

## 🧪 API Used

All product data is fetched from:  
\`https://fakestoreapi.com/products\`

---
" > README.md
