# FPL-Stats

###First Draft 
###Proposal for GA WDI-Diamonds Final project. 

My idea is for a website that tracks player statistics for those playing the official Barclay's Premiere League fantasy game (https://fantasy.premierleague.com/a/home). 

Statistics will be obtained from here: https://fantasy.premierleague.com/drf/bootstrap-static and are updated approximately 1 hour after the last game of each game day. 

I am picturing a layout similar to this site http://www.fplstatistics.co.uk/, which tracks the liklihood that a player will increase in value. The columns on my site would list each of the potential scoring categories, the player's tally in that category, and their total points. I would also include their current price and calculations such as value, e.g. points per £, and the "pace" needed to hit the current expected final value. 

I would probably do the initial calculations in Excel to make sure I get the correct values. Each column would be sortable.

I would also like to include columns for expected/projected score and perhaps a custom column where registered users could enter their own projections. 

In addition, clicking on each player's name would render a line graph showing their points each week and cumulative score. I'd like to calculate a line for the expected total if a player's pace (that is, current slope of the line) continues and a line for an expected final value. The difference between the two *could* show, all things being equal,  how the player's performance might change over the rest of the season. 

14 out of 38 games have been played in the 2016-17 season, which will end around mid-May. 

##Stack: 

HTML/CSS 

JavaScript 

Chartjs 

PostgreSQL 

Node/Express


##Questions:

PSQL makes sense to me since stats would be in a table format but datum are not really relational, would a Mongo document for each player be a better way to organize this? Is it blasphemy to use Mongo for the data and psql to hold info for registered users? Seems like this would get complicated when associating a user with certain players - e.g. saving some customized stats or creatign a watch list. I'm open to recommentations or suggestions. 

I'd like to use React but not sure where it would be added in here. I suppose one table column could be the "custom" total value, which would automatically recalculate other columns such as pace. 

