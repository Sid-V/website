from flask import Flask
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from flask import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/spotifyRecommendations/', methods=['POST'])
def returnRecommendations():

    client_id = "5a53b08bc80c4eee9c9e951aa6053549"
    client_secret = "fe9f75fa5ad74bb28b764155b16f7cbd"
    client_credentials_manager = SpotifyClientCredentials(client_id, client_secret)
    sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

    music_features = pd.read_csv("music_features.csv")
    ids = pd.read_csv("song_ids.csv", header=None)[0].values

    music_features2 = music_features[:1].copy(deep=True)

    #####################################################
    music_features2.loc[0, "danceability"] = request.form['danceability']
    music_features2.loc[0, "energy"] = request.form['energy']
    music_features2.loc[0, "speechiness"] = request.form['speechiness']
    music_features2.loc[0, "acousticness"] = request.form['acousticness']
    music_features2.loc[0, "instrumentalness"] = request.form['instrumentalness']
    music_features2.loc[0, "tempo"] = request.form['tempo']
    ######################################################

    cosine_sim = cosine_similarity(music_features, music_features2)
    cosine_sim = cosine_sim.flatten()

    max9index = np.argsort(cosine_sim)[-9:][::-1]

    rec_ids = []
    for idx in max9index:
        rec_ids.append(sp.track(ids[idx]))

    recString = ''
    string = ''
    for rec in rec_ids:
        string = rec['external_urls']['spotify']
        string = string[:25] + 'embed/' + string[25:]
        recString += string
        if rec is not rec_ids[-1]:
            recString += ','

    print("Python execution complete. Sending top 9 recommendations...")
    return recString

if __name__ == '__main__':
    app.run()