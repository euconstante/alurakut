# Alurakut - Bringing Back the Orkut Experience

Alurakut is a project developed during an [Alura](https://www.alura.com.br/) course, one of the leading tech schools in Brazil, with [Mario Souto](https://mariosouto.com/) as the instructor. It's designed to recreate the nostalgic look and feel of the old Orkut social platform while utilizing modern web technologies. Alurakut offers user authentication and a CRUD (Create, Read, Update, Delete) system that mimics Orkut's community creation feature, giving you a unique opportunity to relive the past with new technologies.

## Table of Contents

1. [Installation](#installation)
2. [Technologies](#technologies)
3. [Future Improvements](#future-improvements)

## Installation

To run the Alurakut project locally, follow these steps:

1. Clone the project from the GitHub repository:
   ```bash
   git clone https://github.com/euconstante/alurakut.git
   cd alurakut
   ```

2. Install project dependencies using npm or yarn:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the project root and add the required environment variables, such as API keys and secrets.

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your web browser and navigate to `http://localhost:3000` to access Alurakut.

## Technologies

Alurakut was built using the following technologies:

- [React.js](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Next.js](https://nextjs.org/): A React framework for server-side rendering (SSR).
- [Styled Components](https://styled-components.com/): A CSS-in-JS library for styling React components.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): The programming language used for the project.
- [GraphQL](https://graphql.org/): A query language for your API, used for efficient data fetching.
- [DatoCMS](https://www.datocms.com/): A headless content management system (CMS) for managing and delivering content.
- [Vercel](https://vercel.com/): A cloud platform for deploying serverless functions and static websites.

Please refer to the official documentation for each technology to learn more about them and their usage.

## Future Improvements

As with any project, there are areas for improvement in Alurakut:

1. **Language Consistency**: To maintain consistency and adhere to best practices, consider refactoring variable names and code comments to use English.

2. **Testing**: Implement test coverage for your project to ensure its reliability and reduce potential issues.

3. **Component Abstraction**: Improve code reusability by abstracting common components, reducing redundancy, and making the codebase more maintainable.

Feel free to contribute to the project or apply these improvements to enhance Alurakut further. Enjoy your nostalgic journey with Alurakut!
