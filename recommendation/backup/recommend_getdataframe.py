#!/usr/bin/env python
# coding: utf-8

import json
import spotipy
import pandas as pd
from spotipy.oauth2 import SpotifyClientCredentials
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

client_id = "5a53b08bc80c4eee9c9e951aa6053549"
client_secret = "fe9f75fa5ad74bb28b764155b16f7cbd"
playlist_id = "37i9dQZF1EM5Yxpzq4dCTr"

def returnRecommendations():

    client_credentials_manager = SpotifyClientCredentials(client_id, client_secret)
    sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

    results = sp.playlist(playlist_id)

    # create a list of song ids
    ids=[]

    for item in results['tracks']['items']:
            track = item['track']['id']
            ids.append(track)
            
    # check the songs audio feature
    features = sp.audio_features(ids)
    # change dictionary to dataframe
    features_df=pd.DataFrame.from_dict(features)

    # convert milliseconds to mins
    # duration_ms: The duration of the track in milliseconds.
    # 1 minute = 60 seconds = 60 × 1000 milliseconds = 60,000 ms
    features_df['duration_ms']=features_df['duration_ms']/60000

    # extract only the numeric features
    music_features = features_df[['danceability', 'energy', 'speechiness', 'acousticness', 'instrumentalness', 'liveness', 'tempo']]

    min_max_scaler = MinMaxScaler()

    music_features[music_features.columns] = min_max_scaler.fit_transform(music_features[music_features.columns])


    #########################################################

    music_features2 = music_features[:1].copy(deep=True)

    music_features2.iloc[0, 1] = 0.3
    music_features2.iloc[0, 2] = 0.7
    music_features2.iloc[0, 3] = 0.91
    music_features2.iloc[0, 4] = 0.78

    #######################################################################

    cosine_sim = cosine_similarity(music_features, music_features2)
    cosine_sim = cosine_sim.flatten()

    min3index = np.argsort(cosine_sim)[:3]

    rec_ids = []
    for idx in min3index:
        rec_ids.append(sp.track(ids[idx]))


    embed = []
    string = ''
    for items in rec_ids:
        string = items['external_urls']['spotify']
        string = string[:25] + 'embed/' + string[25:]
        embed.append(string)

    return embed

if __name__ == "__main__":
    print("executing...")
    returnRecommendations()
    print("executing complete...")
    