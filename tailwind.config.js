export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Để căn giữa nội dung
        padding: '5rem', // Độ rộng của container
        width: '80%'
      },
    },
  },
  plugins: [],
}