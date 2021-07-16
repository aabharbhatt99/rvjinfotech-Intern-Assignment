import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import routes from "../Routes"

const Home = () => {

    const paths = (
        <Switch>
            {routes.map(({ path, exact, component: View, ...rest }) => {
                const pathName = path;
                return (
                    <Route
                        key={path}
                        path={pathName}
                        exact={exact}
                        render={(props) => (
                            <React.Fragment>
                                <View {...props} {...rest} />
                            </React.Fragment>
                        )}
                    />
                );
            })}2
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
        </Switch>
    ); 

    return(
        <BrowserRouter>
            <Route render={()=>paths} />
        </BrowserRouter>
    )
}

export default Home;