# Peworld
![Logo](src/assets/icons/logo-png.png)

## Table of Content

- [About The Project](#about-the-project)
- [Usage](#usage)
- [Installation](#installation)
- [Penggunaan](#penggunaan)
- [Dokumentasi](#dokumentasi)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)
- [Kontak](#kontak)

## About The Project
Peworld is a job search website designed to help recruiters find the best candidates and for job seekers to find their dream job. Peworld allows recruiters to view detailed information about candidates' skills, portfolios, and experiences. It offers a "hire" feature, enabling recruiters to send direct messages to candidates if they are interested in their profiles. For job seekers, updating skills, portfolios, and experiences is crucial. Therefore, Peworld makes it easy for job seekers to update their profiles to attract more recruiters.

## Usage
This website is built using [Vite + React](https://vitejs.dev/). The web design and responsiveness are achieved with [Tailwind](https://tailwindcss.com/). For API management, the website utilizes the [Axios Library](https://axios-http.com/) to ensure neatness and efficiency. The site employs [react-redux](https://react-redux.js.org/) for state management, making the state flow cleaner, more efficient, and easier to control. For routing, the website uses the [react-router-dom](https://reactrouter.com/en/main) library to simplify the routing process.

## Installation

Langkah-langkah untuk menginstal dan mengatur proyek ini di mesin lokalmu.

1. Clone repository:
    ```bash
    git clone https://github.com/nizuma666/Peworld.git
    ```
2. Instal dependensi:
    ```bash
    npm install
    ```
    atau
    ```bash
    yarn install
    ```

## Penggunaan

Instruksi untuk menjalankan proyek ini. Jelaskan juga parameter atau opsi yang bisa digunakan jika ada.

1. Jalankan proyek:
    ```bash
    npm run dev
    ```
    atau
    ```bash
    yarn dev
    ```
2. Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

## Dokumentasi
### 1. Landing Page
Halaman ini yang pertama kali akan dikunjungi ketika mengakses Peworld.
![landing-page-desktop](/public/doc-peworld/landing-page-before-login.png)
### 2. Landing Page After Login
Navbar akan berubah ketika sudah login.
![landing-page-desktop](public/doc-peworld/landing-page-after-login.png)
### 3. Login
Login akan otomatis mendeteksi role sesuai dengan email dan password yang terdaftar
![landing-page-desktop](public/doc-peworld/login.png)
### 3. Register
Ada 2 opsi untuk mendaftar yaitu sebagai *recruiter* atau *worker*
![landing-page-desktop](public/doc-peworld/register-worker.png)
### 4. Find Worker
Halaman ini digunakan untuk melihat informasi pekerja
![landing-page-desktop](public/doc-peworld/find-worker-after-login.png)
### 5. Profile Worker From a Recruiter Perspective
Halaman profil dari pekerja yang bisa dilihat oleh rekruter
![landing-page-desktop](public/doc-peworld/worker-profile-in-recuiter-accesss.png)
### 6. Hire
Halaman untuk rekruter melakukan hiring pada pekerja 
![landing-page-desktop](public/doc-peworld/send-hire.png)
### 7. Profile Recruiter
Halaman profil dari rekruter
![landing-page-desktop](public/doc-peworld/profile-recruiter.png)
### 8. Profile Worker
Halaman profil dari pekerja
![landing-page-desktop](public/doc-peworld/profile-recruiter.png)

