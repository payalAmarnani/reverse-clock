# reverse-clock
A clock which goes back in time

## Running Locally via Docker ##


`docker run -p 8080:8080 reverse-clock`

#### Node Project ####
`npm start --  --DECREMENT_BY_SECS=2`


## Reversed Clock Function ##


**Input Parameter key**: `DECREMENT_BY_SECS`\
**Default Input Value** : 2

**Output**: Current Date/Time - Input value seconds


## Test ##

`npm test`

## Libraries Used ##
Chai\
Mocha\
Minimist
