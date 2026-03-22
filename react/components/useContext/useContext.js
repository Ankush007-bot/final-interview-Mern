// useContext kya hota hai? (Simple Explanation)

// React me jab data parent → child → grandchild tak bhejna hota hai,
// to hume har component me props pass karne padte hain.

// Isko bolte hai props drilling → bohot irritating hota hai.

// useContext is problem ka solution hai.
// Ye ek global store jaisa kaam karta hai jaha data rakh do,
// aur koi bhi component bina props ke directly access kar sakta hai.

// 🔥 Real-Life Example (Super Easy)

// Soch:

// Teri app me dark/light theme change karna hai.

// Theme state agar top-level App.js me rakhi ho

// Lekin use chota component “Button” me chahiye.

// Normal tarike se:

// App → Page → Section → Card → Button


// Har component ko props pass karna padega → props drilling.

// But useContext se tum directly “Button” me theme use kar sakte ho.
// Beech ke components ko kuch nahi karna.

// 🧠 How useContext actually works?

// useContext ke 3 parts hote hain:

// 1. Create a context
// const ThemeContext = createContext();

// 2. Provider → jo data share karega
// <ThemeContext.Provider value={{ theme: "dark" }}>
//   <App />
// </ThemeContext.Provider>

// 3. Consumer → jaha data use karna hai
// const { theme } = useContext(ThemeContext);

// 🔵 useContext ka kaam kya hai?

// ✔ Global data provide karna
// ✔ Props drilling hata dena
// ✔ Readable & simple code
// ✔ App-wide data share karna

// 🟢 useContext kab use karein? (Interview point)

// Theme switching (dark/light)

// Auth user info (loggedIn user)

// Language / Locale

// Cart data (small apps me)

// App-wide settings (layout, filters, etc.)

// ⭐ Interview-ready 1-line answer

// useContext React ka hook hai jo global data share karne ke liye use hota hai, taaki hum props drilling avoid kar
//  sakein. It allows any component to directly access shared state using a Provider.