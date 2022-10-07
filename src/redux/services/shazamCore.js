
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl:'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers)=>{
                headers.set('X-RapidAPI-Key', '72e44c1764mshb87e3935d86889ap13158bjsn0c5c5dabe730')
                return headers;
            }
        }),
        endpoints: (builder)=>({
            getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
            getTopCharts: builder.query({query: ()=> '/charts/world'}),
            getSongRelated: builder.query({query: ({songid})=>`/tracks/related?track_id=${songid}`}),
        })

    })

    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,

    }= shazamCoreApi;