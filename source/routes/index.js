import * as Home from './home';

export const routes = (app) => {
    app.get("/", Home.render);
}