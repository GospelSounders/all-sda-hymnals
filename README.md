## Study Hymnal
Study hymnal 



Study hymnal is an application powered by cordova that uses the [most comprehensive database of hymns and tunes used by advent believers from 1843 to-date](https://github.com/GospelSounders/hymnals-data).

Its name -`Study Hymnal`- implies that it is designed to be more that just a tool for displaying songs. But just as the Bible is to be studied with the help of marginal references and a concordance, this application is designed to help the seeker after truth to be, like Wycliffe, 'a keen detector of error'. By seeing the changes in the words of the songs (mostly changes toward ecumenism), changes in keys (changes in music), changes in tunes (changes in music), removal of stanzas and addition of other stanzas, we hope this will be a good starting point to help the user of this application to 'seek the old paths' as we continue to add other features. 

`Remove not the ancient landmark, which thy fathers have set`


## Components
Study Hymnal works together with these other components:

  - [Update Hymnals](https://github.com/GospelSounders/updatehymnals)
  - [Hymnals Data](https://github.com/GospelSounders/hymnals-data)
  - [All Hymnals](https://docs.google.com/spreadsheets/d/16-cSCawG9fX__QXLWnPyC9-tBUDW2lW7lLhm5UfpEtI/edit?usp=sharing)

Update hymnals is the service that ensures changes made to the [All Hymnals Sheets](https://docs.google.com/spreadsheets/d/16-cSCawG9fX__QXLWnPyC9-tBUDW2lW7lLhm5UfpEtI/edit?usp=sharing) having the hymnals data is updated to the [Hymnals Data repo](https://github.com/GospelSounders/hymnals-data) where it is picked by the [Study Hymnal](https://github.com/GospelSounders/all-sda-hymnals).


## Usage


``` bash
# install dependencies
git clone https://github.com/GospelSounders/all-sda-hymnals.git
cd www/hymnals-data
git clone https://github.com/GospelSounders/hymnals-data.git .
cd ../..
cd all-sda-hymnals
npm install

npm run build

cordova run android
```

## Todo

