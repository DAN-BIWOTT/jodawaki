import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Dashboard from "../containers/Dashboard";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import { darkTheme, lightTheme } from "../styles/theme";


const Admin = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMongodbJodawakiJodawakiUsers {
        edges {
          node {
            firstName
          }
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
};

export default Admin;
