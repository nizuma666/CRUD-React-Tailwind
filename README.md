# Peworld

<p align="center">
  <img src="src/assets/icons/logo-svg.svg" width="400" alt="Logo" />
</p>

## Table of Content

- [About The Project](#about-the-project)
- [Usage](#usage)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Features](#Features)
- [Visit](#visit)
- [Back-End Peworld](#back-end-peworld)
- [Contributing](#contributing)
- [Licence](#licence)
- [Contact](#contact)
- [Related Project](#related-project)

## About The Project
Peworld is a job search website designed to help recruiters find the best candidates and for job seekers to find their dream job. Peworld allows recruiters to view detailed information about candidates' skills, portfolios, and experiences. It offers a "hire" feature, enabling recruiters to send direct messages to candidates if they are interested in their profiles. For job seekers, updating skills, portfolios, and experiences is crucial. Therefore, Peworld makes it easy for job seekers to update their profiles to attract more recruiters.

## Usage
This website is built using [Vite + React](https://vitejs.dev/). The web design and responsiveness are achieved with [Tailwind](https://tailwindcss.com/). For API management, the website utilizes the [Axios Library](https://axios-http.com/) to ensure neatness and efficiency. The site employs [react-redux](https://react-redux.js.org/) for state management, making the state flow cleaner, more efficient, and easier to control. For routing, the website uses the [react-router-dom](https://reactrouter.com/en/main) library to simplify the routing process.

## Installation

Steps to install and set up this project on your local machine.

1. Clone the repository:
    ```bash
    git clone https://github.com/nizuma666/Peworld.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

## Usage

- Run the following command to start the project:
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```
## Project Structure
```bash
└───src
    ├───assets
    │   ├───icons
    │   └───image
    ├───components
    │   ├───button
    │   ├───footer
    │   ├───input
    │   ├───loading
    │   ├───modal
    │   │   ├───alert-modal
    │   │   ├───confirm-modal
    │   │   ├───delete-modal
    │   │   └───success-modal
    │   └───navbar
    ├───config
    │   ├───api
    │   ├───logout
    │   ├───protected-route
    │   └───reducer
    └───pages
        ├───landing-page
        ├───login
        ├───main
        │   ├───chat
        │   ├───edit-profile-recruiter
        │   ├───edit-profile-worker
        │   ├───hire
        │   ├───home
        │   ├───profile
        │   ├───profile-recruiter
        │   └───profile-worker
        ├───register
        └───skills
```

## Documentation

| Page                                   | Description                                                                                                             | Image                                                              |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| Landing Page                           | This is the first page visited when accessing Peworld.                                                                  | ![landing-page-desktop](/public/doc-peworld/landing-page-before-login2.png)   |
| Landing Page After Login               | The navbar changes after logging in.                                                                                    | ![landing-page-desktop](public/doc-peworld/landing-page-after-login.png)     |
| Login                                  | Login will automatically detect the role according to the registered email and password.                                | ![landing-page-desktop](public/doc-peworld/login.png)                       |
| Register                               | There are 2 options to register: as a recruiter or a worker.                                                            | ![landing-page-desktop](public/doc-peworld/register-worker.png)             |
| Find Worker                            | This page is used to view worker information. There is a search and name filter feature that can be used to help find workers. | ![landing-page-desktop](public/doc-peworld/find-worker-after-login2.png)      |
| Profile Worker From a Recruiter Perspective | Worker profile page as seen by the recruiter. Recruiters can see all skills, portfolios, and experiences of the worker and hire by clicking the hire button. | ![landing-page-desktop](public/doc-peworld/worker-profile-in-recuiter-accesss.png) |
| Hire                                   | Page for recruiters to hire workers. This page contains a form to send a hiring message to the selected worker.          | ![landing-page-desktop](public/doc-peworld/send-hire.png)                    |
| Profile Recruiter                      | Recruiter profile page. This page contains company information from the recruiter and there is an option to edit the profile. | ![landing-page-desktop](public/doc-peworld/profile-recruiter2.png)            |
| Profile Worker                         | Worker profile page. This page contains information about the worker with options to edit experience, portfolio, and profile, as well as delete a portfolio or experience. | ![landing-page-desktop](public/doc-peworld/profile-worker.png)               |
| Chat                                   | Page to view hire messages. This page contains hire messages sent by recruiters to the targeted workers.                 | ![landing-page-desktop](public/doc-peworld/chat.png)                         |

## Features
- Using Vite+React for project structure
- API management with Axios
- State management using Redux
- Implementing Protected Routes for specific pages
- Create, edit, and delete profiles for Workers and Recruiters
- Hiring Workers
- Find Workers with search and filter feature
- Create, edit, and delete portfolios and experiences on the worker's side

## Visit
If you are interested in seeing the website directly, please visit [this link](https://crud-react-tailwind-roan.vercel.app/).

## Back-End Peworld
The back-end system for this project was created by [muhammad risano](https://github.com/muhammadrisano) using express-js. If you want to see more about this back-end project, please visit [back-end peworld](https://github.com/nizuma666/fwm17-be-peword)

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/Feature`)
3. Commit your Changes (`git commit -m 'Add some Feature'`)
4. Push to the Branch (`git push origin feature/Feature`)
5. Open a Pull Request

## License
Distributed undet MIT License. see [LICENSE](https://github.com/nizuma666/Peworld/blob/main/LICENSE.txt) for more information.

## Contact
I am very open to criticism and suggestions from all of you, please contact syaifullohismail123@gmail.com email to give feedback.

## Related Project
- :rocket: [HTML](https://www.duniailkom.com/tutorial-belajar-html-dan-index-artikel-html/)
- :rocket: [CSS](https://www.duniailkom.com/tutorial-belajar-css-dan-index-artikel-css/)
- :rocket: [Javascript](https://www.duniailkom.com/tutorial-belajar-javascript-dan-index-artikel-javascript/)
