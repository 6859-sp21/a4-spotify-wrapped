# Spotify wRapped

![alt text](https://github.com/6859-sp21/a4-spotify-wrapped/blob/main/Images/Wrapped.png)
[Inspiration from Spotify Wrapped](https://engineering.atspotify.com/2020/09/21/spotify-unwrapped-2019-how-we-built-an-in-app-experience-just-for-you/)

## Description

We created a fun and interactive way for you to guess whether a particular song was a hit or a flop. Are you up for the challenge?

Click [HERE](https://6859-sp21.github.io/a4-spotify-wrapped/) to play!

## Installation

Start by cloning the directory into your local machine and navigate to the folder on your terminal. Then run the following command:

```
username@machine a4-spotify-wrapped % python -m http.server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
...
```

Open http://0.0.0.0:8000/ in your browser to see the dashboard or alternatively, visit the deployed version at https://6859-sp21.github.io/a4-spotify-wrapped/

## Usage

When you view the dashboard, you'll see a random song and its corresponding artist appear on the top of the screen. You'll also see two graphs to help guide your decision on whether the song is a hit or a flop. Note songs are identified as hits or flops based on the [Spotify Hit Predictor Dataset (1960 - 2019)] (https://www.kaggle.com/theoverman/the-spotify-hit-predictor-dataset) obtained from Kaggle.

_Note: If you only see one dot in the scatter plot, *it’s not a mistake!* The artist only has one song in the dataset._

### Audio Features: Radial barplot of the randomized song's audio features

This plot shows various audio features of the randomized song. You'll see the following audio features ranging from 0.0 to 1.0, which are taken directly from [Spotify API](https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-audio-features):

1. **Acousticness**: A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.
2. **Danceability**: Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.
3. **Energy**: Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.
4. **Instrumentalness**: Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly “vocal”. The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.
5. **Liveness**: Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.
6. **Speechiness**: Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.
7. **Valence**: A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).

### Scatter plot of all artist's songs mapped to audio features

This plot shows the collection of songs created by the artist of the randomized song between 1960 and 2019. For example, if "You Give Good Love" by Whitney Houston were randomly generated, the scatter plot would visualize the set of Whitney Houston's songs in the given set of years with options to view different audio features. Using the drop down above the graph, you can toggle between the seven audio features listed above and see how the values for each song change change.

_Please note: If some years have no data, that means either the artist did not create songs in that period or we do not have hit/flop data on all their songs. Additionally, for some artists the values may remain the same and you may not see a difference._

Using data from these graphs, you can make an informed decision on whether a song is a hit or a flop. Here, a flop implies that a song is not popular in the mainstream. Press the 'Hit' and 'Flop' buttons to see if you're correct! If you want to have another go, click the 'Next Song' button. Good luck!

## Design Decisions

Our team was keen on leveraging a common theme throughout the dashboard. We wanted our graphs to center around the hit and flop game. Whenever the word 'game' is used, users typically feel connected to a playful experience. We wanted to brand our dashboard as a fun experience to learn music trends for various artists overtime. Instead of us showing certain trends, we wanted our users to have control over seeing how music changed overtime. The following sections describe more detail about our decisions:

### Visual Encodings

After some initial data exploration, we saw that several audio features had similar domain values. We looked online to find inspiration for visualizing fields with the similar domains and came across this [page on circular barplots](https://www.d3-graph-gallery.com/circular_barplot). We used one of their templates to create a circular barplot with our data. We added labels for the audio features and tooltips describing each feature as a user hovers over it. We also chose a vibrant color palette that matched Spotify's theme. We kept the aspect ratio fixed from 0.0 to 1.0 and chose features that matched this range. 

As for the scatter plot, we plotted years from 1960 - 2019 on the X-axis and kept a similar aspect ratio from 0.0 to 1.0 on the Y-axis. We chose to separate the years by decade to avoid cluttering the graph. The Y-axis values were kept to one decimal place for a similar reason. We also kept the colors to match the Spotify palette.

### Interaction

Our entire concept is based on interaction with the user. We have two main regions for users to interact with the data: hit/flop buttons and scatter plot drop down. The hit/flop concept came directly from Spotify's Web API where songs are labeled '1' ('Hit') or '0' ('Flop') depending on whether the song became popular in the mainstream. These hit and flop buttons allow the user to make their best guess with the data shown in the graphs. They get immediate feedback after making a decision and can choose to play again with another song using the 'Next Song' button. As for the scatter plot drop down, this allows the user to choose between different audio features and observe the generated artist's trends. If they consistently produced songs with high energy and danceability, for example, the user may guess that the randomized song is a hit. In addition to these interactions, the user can also hover over both graphs to see further information on the data points. For the *scatter plot tooltip*, when a user hovers over a data point, it will have a black outline. This is to help the user understand which data points have already been seen.

### Animation Techniques

Inspired by Hans Rosling, we animated the transitions in our scatter plot to show trends overtime. We wanted to direct the user's attention to the smooth motion at ~10 frames/second. We didn't want too many movements occurring at once, otherwise this may confuse the user. Thus, we decided to keep all points on the scatter plot the same circle shape, size and color. We made a decision choice to *higlight the song's datapoint in a yellow color* - this was to ensure users can easily identify the song's information among other songs of the artist. We also stuck with the 0.0 to 1.0 fixed scale because we know that re-scaling hampers with a user's perception. In addition to these techniques, when a user hits 'Next Song' the graphs update smoothly based on the new song's information. 

## Development Process

Our team faced many hurdles along the A4 journey. First off, none of us had prior experience in D3 and limited HTML experience. Thus, the learning curve was huge initially. We first browsed online for datasets, we choose to stick with [Kaggle's Spotify dataset](https://www.kaggle.com/yamaerenay/spotify-dataset-19212020-160k-tracks) as it had over 160,000 songs and a wide array of features. We all love Spotify and music in general, so we drew inspiration from Spotify's Wrapped which was started in 2015 as the 'Year in Music' where listeners were shown their top songs of the year and other trends. 

### Sketching Ideas

When we got started on the project, we took inspiration from A0 and sketched out some ideas on pen and paper:

![alt_text](https://github.com/6859-sp21/a4-spotify-wrapped/blob/main/Images/Brainstorm1.png)

Here, we wanted to build a dashboard with a selection pane on the right, KPI on the top and graphs in the middle.  

![alt_text](https://github.com/6859-sp21/a4-spotify-wrapped/blob/main/Images/Brainstorm2.png)

Here, we were thinking of having a dancing man and using the danceability metric to depict his energy. We wanted to have pop ups that described the audio features to avoid confusion. We also planned to play a particular song in the background as the user browses through the visuals.

### Struggle with Streamgraph

We had fun exploring the data together on Tableau and letting our imaginations take over. We choose to shoot high and attempted a streamgraph from the get-go. Our inspiration came from this [Streamgraph on D3](https://observablehq.com/@d3/streamgraph). We wanted to visualize different audio features for an artist like Elvis Presley overtime. All three of us worked on the same graph, constantly tried debugging and frequently asked the TAs for help. As it got closer to the demo day, we realized that our prototype was not working. We decided to create the video anyhow and explain our overall concept to our classmates. The feedback we received afterwards was incredible, filled with ideas that we haven't thought of before and encouragement!

### Post peer feedback

After going through the feedback in detail and deliberating on our next steps, we decided to drop the streamgraph as it wasn't contributing much to the theme and getting it to work would take an enormous effort. This was a tough decision to make because we spent a considerable amount of time on it (collectively 30+ hours). However, the experience taught us a few things: it's better for us to work on separate tasks in parallel to optimize our time, only construct graphs that contribute to the theme and continue leveraging working sessions on Zoom. 

### Back to the drawing board

We browsed Kaggle further to see if other Spotify datasets would pop up and came across this [hit flop predictor Spotify dataset](https://www.kaggle.com/theoverman/the-spotify-hit-predictor-dataset). We decided to create a game using this dataset where users guess whether a random song was a hit or a flop. We went back to the drawing board and brainstormed further ways to visualize data and came up with the circular barplot and scatter plot.

### Data Transformations

Using R Studio, we decided to combine the hit predictor and larger Spotify datasets:

[Spotify Dataset 1921-2020, 160k+ Tracks](https://www.kaggle.com/yamaerenay/spotify-dataset-19212020-160k-tracks) - 174,389 rows, 19 columns

[The Spotify Hit Predictor Dataset (1960-2019)](https://www.kaggle.com/theoverman/the-spotify-hit-predictor-dataset) - 41,106 rows, 19 columns

In order to merge properly, we had to clean up the datasets individually (e.g. formatting column values, removing duplicated information). After the initial cleaning, we combined the datasets to get a final dataset of 14,987 rows. We also double checked various field's histograms to ensure the data was diverse and representative. We spot checked for accuracy to ensure the datasets were joined correctly and that the data was spread sufficiently throughout each decade.

### Dividing Up Work

Taking learnings from the streamgraph journey, we decided to split up the development work:
* Christina: Scatter plot and resident tooltip expert
* Elizabeth: Circular barplot, hit/flop/next song functionality
* Sravani: UI design, write up, circular barplot

After several working sessions and iterations, we finally got the dashboard to be fully functional! Over the past few weeks, we collectively spent around 105 hours.

## Authors and acknowledgment

This interactive dashboard is created by LGO 22s Elizabeth Hau, Christina Michaels and Sravani Yajamanam Kidambi. We'd like to thank our instructor and TAs for helping us understand the mechanics of interactive visualization.

## References
- [Circular barplot](https://www.d3-graph-gallery.com/circular_barplot)
- [D3 scale chromatic](https://github.com/d3/d3-scale-chromatic)
- [Line plot with drop down](https://www.d3-graph-gallery.com/graph/line_select.html)
- [Spotify branding](https://developer.spotify.com/documentation/general/design-and-branding)
- [Scatter animation](https://www.d3-graph-gallery.com/graph/scatter_animation_start.html)
- [Scatter tooltip](https://www.d3-graph-gallery.com/graph/scatter_tooltip.html)
