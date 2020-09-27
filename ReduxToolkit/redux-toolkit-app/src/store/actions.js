import { createAction } from '@reduxjs/toolkit';

// createAction is used to create an action creator function so the name is misleading
// The name should have been createActionCreator
export const  increment = createAction('INCREMENT');

export const decrement = createAction('DECREMENT');