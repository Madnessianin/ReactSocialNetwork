import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import GeneralSettings from "./EditForms/GeneralSettings/GeneralSettings";
import ContactsSettings from "./EditForms/ContactsSettings/ContactsSettings";
import AddSideBar from "./AddSideBar/AddSideBar";
import { Layout } from "antd";

const { Content } = Layout;

const Edit = (props) => {
  return (
    <Layout>
      <Content>
        <Switch>
          <Route
            exact
            path="/app/edit"
            render={() => <Redirect to={"/app/edit/general"} />}
          />
          <Route
            path="/app/edit/general"
            render={() => <GeneralSettings title="Основная информация: " />}
          />
          <Route
            path="/app/edit/contacts"
            render={() => <ContactsSettings title="Контакты: " />}
          />
        </Switch>
      </Content>
      <AddSideBar />
    </Layout>
  );
};

export default Edit;
