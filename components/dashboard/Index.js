import React from 'react';
import { useSelector } from "react-redux";
import Root from '../common/Root';

const Index = () => {
    const user = useSelector(state => state.appReducer.user);

    return (
        <Root>
            <div>{user ? user.name : dataDefaults.name}</div>
            <div>{user ? user.email : dataDefaults.email}</div>
        </Root>
    );
}

export default Index;