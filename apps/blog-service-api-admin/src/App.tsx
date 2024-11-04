import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ArticleList } from "./article/ArticleList";
import { ArticleCreate } from "./article/ArticleCreate";
import { ArticleEdit } from "./article/ArticleEdit";
import { ArticleShow } from "./article/ArticleShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"BlogServiceAPI"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Article"
          list={ArticleList}
          edit={ArticleEdit}
          create={ArticleCreate}
          show={ArticleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
