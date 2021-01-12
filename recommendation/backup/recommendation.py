import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

client_id = "5a53b08bc80c4eee9c9e951aa6053549"
client_secret = "fe9f75fa5ad74bb28b764155b16f7cbd"
client_credentials_manager = SpotifyClientCredentials(client_id, client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

music_features = pd.read_csv("music_features.csv")
ids = pd.read_csv("song_ids.csv", header=None)[0].values

music_features2 = music_features[:1].copy(deep=True)

#####################################################
music_features2.iloc[0, 0] = 0.1
music_features2.iloc[0, 1] = 0.3
music_features2.iloc[0, 2] = 0.1
music_features2.iloc[0, 3] = 0.1
music_features2.iloc[0, 4] = 0.9
######################################################

cosine_sim = cosine_similarity(music_features, music_features2)
cosine_sim = cosine_sim.flatten()

max3index = np.argsort(cosine_sim)[-3:][::-1]

rec_ids = []
for idx in max3index:
    rec_ids.append(sp.track(ids[idx]))

embed = []
string = ''
for items in rec_ids:
    string = items['external_urls']['spotify']
    string = string[:25] + 'embed/' + string[25:]
    embed.append(string)

print("Python execution complete. Sending top 3 recommendations...")
print(embed)