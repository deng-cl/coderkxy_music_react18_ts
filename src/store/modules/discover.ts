import { fetchMusicBannerInfo, fetchRecommendSongs } from "@/service/modules/discover";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDiscoverPageDataAction = createAsyncThunk("fetch_discover_data_action", (state, { dispatch }) => {
    fetchMusicBannerInfo().then((res: any) => {
        dispatch(changeBannerAction(res.banners))
    })
    fetchRecommendSongs().then((res: any) => {
        dispatch(changeRecommendSongsAction(res.result))
    })
})

export interface ISongs {
    id: number;
    type: number;
    name: string;
    picUrl: string;
    playCount: number;
    trackCount: number;
    // ....
}

interface IState {
    banner: any[],
    recommendSongs: ISongs[]
}

const initialState: IState = {
    banner: [],
    recommendSongs: []
}

const discoverSlice = createSlice({
    name: "discover",
    initialState,
    reducers: {
        changeBannerAction(state, { payload }) {
            state.banner = payload
        },
        changeRecommendSongsAction(state, { payload }) {
            state.recommendSongs = payload
        }
    }
})

export const { changeBannerAction, changeRecommendSongsAction } = discoverSlice.actions

export default discoverSlice.reducer
