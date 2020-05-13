import React from 'react';
import logo from '../../static/images/logo.svg';
import configs from '../../configs/index';
import Root from '../common/Root';
import { updateUser } from '../../redux/actions/appActions';
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
    const user = useSelector(state => state.appReducer.user);
    const dispatch = useDispatch();

    const dataDefaults = {
        name: 'Tommy Ai',
        email: 'buithienai@gmail.com'
    }

    const handleUpdateUser = (data) => {
        dispatch(updateUser(data));
    }

    return (
        <Root>
            <>
                <div>{user ? user.name : dataDefaults.name}</div>
                <div>{user ? user.email : dataDefaults.email}</div>
                {
                    user && Object.keys(user).length === 0 ?
                        <button onClick={() => handleUpdateUser(dataDefaults)} style={{ marginTop: "20px" }}>Fetch data</button>
                        : <button onClick={() => handleUpdateUser({})} style={{ marginTop: "20px" }}>Reset data</button>
                }
            </>
        </Root>
    );
}

export default Index;