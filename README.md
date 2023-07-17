# Tab Component

This is a simple React project that implements a tabbed interface to display information. It consists of multiple components that work together to create the user interface.

## Project Structure

- `App.js`: The main component that serves as the entry point of the application.
- `TabContainer.js`: A component that holds the tab buttons and the content of the active tab.
- `Tab.js`: A component that represents a single tab button.
- `TabContent.js`: A component that displays the content of the active tab.

## Dependencies

This project uses React and requires the `useState` hook from the React library.

## Getting Started

1. Clone the repository or download the project files.
2. Make sure you have Node.js and npm (Node Package Manager) installed on your machine.
3. Install the project dependencies by running the following command in the project directory:

```
npm install
```

4. Start the development server with the following command:

```
npm start
```

5. Open your web browser and visit `http://localhost:3000` to see the application running.

## Usage

The application displays three tabs, each representing a question. By default, the first tab is active, and its answer is shown. Clicking on a different tab will display its corresponding question and answer. You can also click the "Show/Hide details" button to toggle the visibility of the answer.

## Customization

If you want to customize the content of the tabs, you can modify the `content` array in the `App.js` file. Each object in the `content` array represents a tab and contains a `question` and an `answer`.

Feel free to modify the styling of the components by editing the CSS or adding your own styles.

## License

This project is licensed under the [MIT License](LICENSE).
