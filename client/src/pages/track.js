import React from 'react';
import {  gql, useQuery }   from '@apollo/client';
import  { Layout, QueryResult } from '../components';
import TrackDetail from "../components/track-detail";


const GET_TRACK = gql`
    query GEtTrack($trackId: ID!) {
    track(id: $trackId) {
        id
        title
        thumbnail
        length
        modulesCount
        description
        numberOfViews
        author {
            id
            name
            photo
        }
    }
}
`;

const Track = ({ trackId }) => {
    const { loading, error, data } = useQuery(GET_TRACK, {
        variables: { trackId }
    })
    return  <Layout>
        <QueryResult error={error}  loading={loading}   data={data}>
            <TrackDetail    track={data?.track}/>
        </QueryResult>
    </Layout>;
}

export  default Track;