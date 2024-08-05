import {configureStore} from "@reduxjs/toolkit";
import { apiSlice } from "./Api";
import { blogsApiSlice } from "./features/blogs/blogsApiSlice";
import blogsStateReducer from "./features/blogs/blogsStateSlice";


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [blogsApiSlice.reducerPath]: blogsApiSlice.reducer,
        blogs: blogsStateReducer,

    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        apiSlice.middleware,
        blogsApiSlice.middleware,
    )
});