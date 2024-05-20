# About Us Page - Contact Section

## Live Running Example:
- [https://guizzettic.github.io/about_us_page/](https://guizzettic.github.io/about_us_page/)

## Objective
In this challenge, the goal is to build a responsive contact section that allows users to submit their name, email, and message. This section incorporates detailed interactive states and validation features to enhance user experience.

## Implementation Requirements

### Design Fidelity
- Follow the design as closely as possible.
- Ensure all elements in the design are present, using the specified text color, font size, font weight, spacing, dimensions, etc.

### Interactivity
- **Email Link**: Lead to `mailto:hello@abstractly.com`.
- **Button States**: Implement and style buttons to reflect different states - normal, hover, focus, and disabled.
- **Input Field States**: Implement and style input fields to reflect different states - normal, focused, filled, disabled, error, error filled, error focused.
- **Real-time Character Counter**: Develop a textarea input field with a real-time character counter and provide a warning cue when the character limit is exceeded.

### Client-side Validation
- **Format Check**: Validate that the email entered matches the standard email format (e.g., name@domain.com). Provide immediate browser feedback if the format is incorrect.
- **Required Field**: Ensure the email field is not left blank upon submission attempt. Provide immediate browser feedback if the field is empty.
- **Error Messages**:
  - Format Check: "Please enter a valid email address."
  - Required: "Email address is required."

### API Submission
- **Success Feedback**: After API submission, parse the successful response and confirm submission to the user with "Submission successful! We will get back to you in 3-5 days via email."
- **API Error Response**: Handle any API error responses (e.g., 400 Bad Request, 500 Internal Server Error) by displaying an appropriate message such as "Failed to submit. Please ensure your details are correct or try again later." or displaying the error message from the server.

### Responsive Behavior
- **Text Size**: Should be responsive; font size is larger for wider devices, smaller for narrow devices.
- **Responsive Layout**: The layout should reorganize responsively. The content should stack vertically on smaller screens and align horizontally as the screen width increases.
- **Placeholders**: You may leave the redirection links empty for any unspecified buttons or links.
- **Cross-browser Compatibility**: Ensure the solution works for major browsers including Chrome, Firefox, and Safari.

### Accessibility Considerations (Stretch Goal)
- Follow best practices for web accessibility to ensure that all form elements are labeled correctly and are navigable using keyboard controls.
- Provide appropriate ARIA labels for screen readers.

## Technologies Used
- **TypeScript**: For type-safe JavaScript development.
- **React**: For building the user interface.
- **Tailwind CSS**: For utility-first CSS styling.
- **Vite**: For fast and optimized project setup and development.

## Setup Instructions
1. Clone the repository:
    ```bash
    git clone https://github.com/guizzettic/about_us_page.git
    cd about_us_page
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

4. Build the project for production:
    ```bash
    npm run build
    ```

5. Preview the production build:
    ```bash
    npm run serve
    ```

## Contribution Guidelines
Feel free to fork this repository and make your contributions. Ensure to follow the code style and write meaningful commit messages.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
