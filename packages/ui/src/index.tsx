// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import * as React from "react";

// export * from "./Link";
import { ChakraProvider, Button } from "@chakra-ui/react";
import * as React from "react";
import { BrowserRouter, Outlet, Link, Routes, Route } from "react-router-dom";
// import {
//     AppShell as MantineAppShell,
//     Header,
//     Title,
//     MantineProvider,
//     Navbar,
//     UnstyledButton,
//     Group,
//     Button,
//     Text,
// } from "@mantine/core";
import { useStore } from "store";

export type RouteType = {
    element: React.FunctionComponent;
    path: string;
};


export const AppShell: React.FunctionComponent<{
    title: string;
    routes: RouteType[];
    colorScheme?: "light" | "dark";
}> = ({ title, routes, colorScheme }) => {
    const { movies, addMovie } = useStore();
    console.log('movies in ui', movies);
    return (
        // <MantineProvider
        //     withGlobalStyles
        //     withNormalizeCSS
        //     theme={{
        //         colorScheme
        //     }}
        // >
        //     <MantineAppShell
        //         padding="md"
        //     >
        //         <h1>This is app shell</h1>
        //         <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>{title}</Button>
        //     </MantineAppShell>
        // </MantineProvider>
        <BrowserRouter>
            <ChakraProvider>
                <ol>
                    <li>
                        <Link to={'/'}>Web
                        </Link>
                    </li>
                    <li>
                        <Link to={'/product'}>Docs/Product
                        </Link>
                    </li>
                </ol>
                <h1>{title} - length {movies.length}</h1>
                <Routes>
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.element />}
                        />
                    ))}
                </Routes>
                <Outlet />
            </ChakraProvider>
        </BrowserRouter>


    );
};
