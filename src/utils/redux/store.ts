import { configureStore } from "@reduxjs/toolkit";
import authTracker from "./slices/auth-tracker";
import profile from "./slices/profile";

export const store = configureStore({
    reducer: {
        authTracker,
        profile,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
