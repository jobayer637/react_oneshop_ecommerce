import React, { useContext } from 'react'
import { rootContext } from '../../api/context/ContextProvider'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { oAuth } = useContext(rootContext)
    const [auth, setAuth] = oAuth
    return (
        <Route {...rest} render={(props) => {
            return auth.isAuth ? <Component {...props} /> : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
        }} />
    )
}

export default ProtectedRoute
