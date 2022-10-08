import React from 'react';

import Layout from "../components/layout/Layout";
import List from "../components/list/List";
import Form from "../components/form/Form";
import Header from "../components/header/Header";

const TodoList = () => {
    return (
        <Layout>
            <Header />
            <Form />
            <List />
        </Layout>
    );
};

export default TodoList;