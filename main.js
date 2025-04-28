/*
04/28/25
Modules & Package Management - 4 Practice: Using Modules

You will practice installing, managing, and utilizing external Node modules in a
project. This activity emphasizes understanding dependency management, the use
of npm, and the importance of package.json.

===== Preparation =====
Create a New Project Directory:
1. Use the terminal to create a directory named weather-app.
2. Navigate into the directory.
3. Initialize the project with npm init -y to create a package.json file.

===== Task =====
The goal is to build a simple CLI-based weather app that uses an external module to
fetch and display data (simulated, no actual API requests). The app will:
1. Parse command-line arguments for a city name.
2. Use a module to simulate fetching weather data.
3. Display a weather summary in the console.

===== Steps =====
1. Install External Modules:
○ Install the yargs module to handle command-line arguments.
○ Install the chalk@4.1.2 (this will require you to use the command (npm
install chalk@4.1.2) module to format and color console output.

2. Implement the App:
○ Create a file named app.js.
○ Use yargs to parse a --city argument provided by the user.
○ Simulate fetching weather data by returning a hardcoded response for
different cities.
○ Use chalk to style the output, emphasizing the city name and weather
details.

3. Understand Dependency Management:
○ Review the package.json file and identify where the installed
dependencies are listed.
○ Explain the role of the node_modules directory and why it should not
be included in version control.
○ Create a .gitignore file and add node_modules to it.

4. Test the App:
○ Run the app with a city name argument (e.g., node app.js
--city="New York").
○ Ensure it displays the correct simulated weather data.

5. Simulate Dependency Issues:
○ Delete the node_modules folder.
○ Use npm install to reinstall all dependencies from package.json.
○ Verify the app still works correctly.

Expected Deliverables
1. A functioning weather-app project with:
○ app.js implementing the functionality described.
○ Properly listed dependencies in package.json.
○ .gitignore file excluding node_modules. ===== why?
2. A short written response commented within the code, addressing:
○ The purpose of package.json in managing dependencies.
○ Why node_modules should not be included in version control.
○ How npm install reinstalls dependencies and its importance in
collaborative projects.
*/

