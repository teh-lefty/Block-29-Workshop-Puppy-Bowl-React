import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-pt-web";

export const puppyBowlApi = createApi({
  reducerPath: "puppyBowlApi",

  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
    fetchPlayers: builder.query({
      query: () => `/players`,
    }),
    fetchPlayer: builder.query({
      query: (Id) => `/players/${Id}`,
    }),
    addPlayer: builder.mutation({
      query: (newPlayer) => ({
        url: `/players/`,
        method: "POST",
        body: newPlayer,
      }),
    }),
      deletePlayer: builder.mutation({
        query: (id) => ({
          url: `/players/${id}`,
          method: "DELETE",
        }),
      }),
      invalidatesTags: ["Player"],
  }),
});

export const {
  useFetchPlayersQuery,
  useFetchPlayerQuery,
  useAddPlayerMutation,
  useDeletePlayerMutation,
} = puppyBowlApi;


// reference 27C