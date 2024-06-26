import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const axios = require('axios');

const artifactSlice = createSlice({
    name: 'artifactList',
    initialState: {
        artifactList: [],
        artifactData: {},
        status: 'idle',
        error: null,
        filter: null,
    },
    reducers: {
        getArtifactList: (state, action) => {
            state.artifactList = action.payload;
            return state;
        },
        getArtifact: (state, action) => {
            state.artifactData = action.payload;
            return state;
        },
        setErrorMsg: (state, action) => {
            state.errorMsg = action.payload;
            return state;
        },
        extraReducers(builder) {
            builder
                .addCase(fetchArtifacts.pending, (state, action) => {
                    state.status = 'loading';
                })
                .addCase(fetchArtifacts.fulfilled, (state, action) => {
                    state.status = 'succeeded';
                    state.artifacts = action.payload;
                })
        }
    }
});

console.log({"artifactSlice.action": artifactSlice.actions, artifactSlice})

export default artifactSlice.reducer;

export const {
    getArtifactList,
    getArtifact,
    setErrorMsg,
} = artifactSlice.actions;

export const fetchArtifacts = createAsyncThunk('books/fetchArtifacts', async () => {
	try {
		const { data } = await axios.get('/api/artifacts');
		return data;
	} catch (e) {
		console.log(e);
	}
});

export const fetchArtifactData = createAsyncThunk('/books/fetchArtifactData', async (id) => {
    try {
        const { data } = await axios.get(`/api/artifact/${id}`);
        return data;
    } catch (e) {
        console.log(e);
    }
})