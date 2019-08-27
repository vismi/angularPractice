

var express = require('express')
var router = express.Router()


router.delete('/badotcomadapter-paa/rs/v1/test', function(req, res) {

res.json({message:'deleted'})
});

router.post('/badotcomadapter-paa/rs/v1/test;ondwanted=:ondwanted;applicableoffers=:applicableOffers', function(req, res) {
if(req.params.ondwanted==1){
  res.json([
    {
        "localFlightSegments": [
            {
                "departureAirport": {
                    "code": "LHR",
                    "name": "HEATHROW",
                    "terminal": "5",
                    "date": "2019-08-19",
                    "time": "07:20:00.000"
                },
                "arrivalAirport": {
                    "code": "CDG",
                    "name": "CHARLES DE GAULLE",
                    "terminal": "2A",
                    "date": "2019-08-19",
                    "time": "09:35:00.000"
                },
                "departureDateTime": "2019-08-19T07:20:43.133",
                "arrivalDateTime": "2019-08-19T09:35:43.133",
                "operatingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "0304"
                },
                "duration": "PT1H15M"
            }
        ],
        "availableCabinsForOption": [
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 212.74,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 138.44,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    1,
                    2,
                    3,
                    5,
                    8,
                    9,
                    78,
                    80,
                    82,
                    83,
                    84,
                    85,
                    86,
                    88,
                    91,
                    92,
                    93,
                    94,
                    98,
                    99,
                    100,
                    101,
                    102,
                    103,
                    106,
                    108,
                    109,
                    110,
                    111,
                    112,
                    115,
                    117,
                    118,
                    119,
                    120,
                    121,
                    124,
                    126,
                    127,
                    128,
                    129,
                    130,
                    134,
                    135,
                    136,
                    137,
                    138,
                    139,
                    141,
                    143
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=2;applicableoffers=1,2,3,5,8,9,78,80,82,83,84,85,86,88,91,92,93,94,98,99,100,101,102,103,106,108,109,110,111,112,115,117,118,119,120,121,124,126,127,128,129,130,134,135,136,137,138,139,141,143",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": "M"
            },
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 304.74,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 230.44,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    4,
                    6,
                    7,
                    77,
                    79,
                    81,
                    87,
                    89,
                    90,
                    95,
                    96,
                    97,
                    104,
                    105,
                    107,
                    113,
                    114,
                    116,
                    122,
                    123,
                    125,
                    131,
                    132,
                    133,
                    140,
                    142
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=2;applicableoffers=4,6,7,77,79,81,87,89,90,95,96,97,104,105,107,113,114,116,122,123,125,131,132,133,140,142",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": "C"
            }
        ],
        "taxInclusive": true
    },
    {
        "localFlightSegments": [
            {
                "departureAirport": {
                    "code": "LHR",
                    "name": "HEATHROW",
                    "terminal": "5",
                    "date": "2019-08-19",
                    "time": "08:55:00.000"
                },
                "arrivalAirport": {
                    "code": "CDG",
                    "name": "CHARLES DE GAULLE",
                    "terminal": "2A",
                    "date": "2019-08-19",
                    "time": "11:15:00.000"
                },
                "departureDateTime": "2019-08-19T08:55:43.133",
                "arrivalDateTime": "2019-08-19T11:15:43.133",
                "operatingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "0306"
                },
                "duration": "PT1H20M"
            }
        ],
        "availableCabinsForOption": [
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 304.74,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 230.44,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    10,
                    11,
                    12,
                    145,
                    146,
                    149,
                    155,
                    158,
                    160,
                    162,
                    163,
                    164,
                    172,
                    173,
                    176,
                    180,
                    181,
                    182,
                    189,
                    190,
                    191,
                    198,
                    199,
                    201,
                    207,
                    209
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=2;applicableoffers=10,11,12,145,146,149,155,158,160,162,163,164,172,173,176,180,181,182,189,190,191,198,199,201,207,209",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": "C"
            },
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 201.74,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 127.44,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    144,
                    147,
                    148,
                    150,
                    151,
                    152,
                    153,
                    154,
                    156,
                    157,
                    159,
                    161,
                    165,
                    166,
                    167,
                    168,
                    169,
                    170,
                    171,
                    174,
                    175,
                    177,
                    178,
                    179,
                    183,
                    184,
                    185,
                    186,
                    187,
                    188,
                    192,
                    193,
                    194,
                    195,
                    196,
                    197,
                    200,
                    202,
                    203,
                    204,
                    205,
                    206,
                    208,
                    210
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=2;applicableoffers=13,14,15,16,17,18,144,147,148,150,151,152,153,154,156,157,159,161,165,166,167,168,169,170,171,174,175,177,178,179,183,184,185,186,187,188,192,193,194,195,196,197,200,202,203,204,205,206,208,210",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": "M"
            }
        ],
        "taxInclusive": true
    },
    {
        "localFlightSegments": [
            {
                "departureAirport": {
                    "code": "LHR",
                    "name": "HEATHROW",
                    "terminal": "5",
                    "date": "2019-08-19",
                    "time": "11:00:00.000"
                },
                "arrivalAirport": {
                    "code": "CDG",
                    "name": "CHARLES DE GAULLE",
                    "terminal": "2A",
                    "date": "2019-08-19",
                    "time": "13:20:00.000"
                },
                "departureDateTime": "2019-08-19T11:00:43.133",
                "arrivalDateTime": "2019-08-19T13:20:43.133",
                "operatingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "0308"
                },
                "duration": "PT1H20M"
            }
        ],
        "availableCabinsForOption": [
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 195.74,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 121.44,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    19,
                    21,
                    22,
                    23,
                    25,
                    27,
                    212,
                    214,
                    215,
                    216,
                    217,
                    218,
                    269,
                    271,
                    272,
                    274,
                    276,
                    277,
                    280,
                    281,
                    282,
                    283,
                    285,
                    286,
                    289,
                    290,
                    291,
                    293,
                    294,
                    295,
                    296,
                    298,
                    300,
                    301,
                    302,
                    303,
                    306,
                    308,
                    310,
                    311,
                    312,
                    313,
                    316,
                    318,
                    319,
                    320,
                    321,
                    322,
                    324,
                    326
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=2;applicableoffers=19,21,22,23,25,27,212,214,215,216,217,218,269,271,272,274,276,277,280,281,282,283,285,286,289,290,291,293,294,295,296,298,300,301,302,303,306,308,310,311,312,313,316,318,319,320,321,322,324,326",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": "M"
            },
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 282.74,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 208.44,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    20,
                    24,
                    26,
                    211,
                    213,
                    219,
                    270,
                    273,
                    275,
                    278,
                    279,
                    284,
                    287,
                    288,
                    292,
                    297,
                    299,
                    304,
                    305,
                    307,
                    309,
                    314,
                    315,
                    317,
                    323,
                    325
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=2;applicableoffers=20,24,26,211,213,219,270,273,275,278,279,284,287,288,292,297,299,304,305,307,309,314,315,317,323,325",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": "C"
            }
        ],
        "taxInclusive": true
    },
    {
        "localFlightSegments": [
            {
                "departureAirport": {
                    "code": "LHR",
                    "name": "HEATHROW",
                    "terminal": "5",
                    "date": "2019-08-19",
                    "time": "13:25:00.000"
                },
                "arrivalAirport": {
                    "code": "CDG",
                    "name": "CHARLES DE GAULLE",
                    "terminal": "2A",
                    "date": "2019-08-19",
                    "time": "15:40:00.000"
                },
                "departureDateTime": "2019-08-19T13:25:43.133",
                "arrivalDateTime": "2019-08-19T15:40:43.133",
                "operatingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "0314"
                },
                "duration": "PT1H15M"
            }
        ],
        "availableCabinsForOption": [
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 259.74,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 185.44,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    28,
                    29,
                    35,
                    220,
                    226,
                    227,
                    327,
                    328,
                    331,
                    376,
                    377,
                    379,
                    385,
                    386,
                    388,
                    396,
                    399,
                    401,
                    403,
                    405,
                    411,
                    412,
                    418,
                    419,
                    421,
                    424
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=2;applicableoffers=28,29,35,220,226,227,327,328,331,376,377,379,385,386,388,396,399,401,403,405,411,412,418,419,421,424",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": "C"
            },
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 172.74,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 98.44,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    30,
                    31,
                    32,
                    33,
                    34,
                    36,
                    221,
                    222,
                    223,
                    224,
                    225,
                    228,
                    329,
                    330,
                    332,
                    333,
                    334,
                    335,
                    378,
                    380,
                    381,
                    382,
                    383,
                    384,
                    387,
                    389,
                    390,
                    391,
                    392,
                    393,
                    394,
                    395,
                    397,
                    398,
                    400,
                    402,
                    404,
                    406,
                    407,
                    408,
                    409,
                    410,
                    413,
                    414,
                    415,
                    416,
                    417,
                    420,
                    422,
                    423
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=2;applicableoffers=30,31,32,33,34,36,221,222,223,224,225,228,329,330,332,333,334,335,378,380,381,382,383,384,387,389,390,391,392,393,394,395,397,398,400,402,404,406,407,408,409,410,413,414,415,416,417,420,422,423",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": "M"
            }
        ],
        "taxInclusive": true
    },
    {
        "localFlightSegments": [
            {
                "departureAirport": {
                    "code": "LHR",
                    "name": "HEATHROW",
                    "terminal": "5",
                    "date": "2019-08-19",
                    "time": "14:55:00.000"
                },
                "arrivalAirport": {
                    "code": "CDG",
                    "name": "CHARLES DE GAULLE",
                    "terminal": "2A",
                    "date": "2019-08-19",
                    "time": "17:15:00.000"
                },
                "departureDateTime": "2019-08-19T14:55:43.133",
                "arrivalDateTime": "2019-08-19T17:15:43.133",
                "operatingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "0316"
                },
                "duration": "PT1H20M"
            }
        ],
        "availableCabinsForOption": [
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 259.74,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 185.44,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    37,
                    38,
                    45,
                    229,
                    231,
                    237,
                    337,
                    340,
                    343,
                    426,
                    427,
                    429,
                    465,
                    471,
                    473,
                    474,
                    476,
                    482,
                    483,
                    488,
                    491,
                    492,
                    499,
                    500,
                    502,
                    503
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=2;applicableoffers=37,38,45,229,231,237,337,340,343,426,427,429,465,471,473,474,476,482,483,488,491,492,499,500,502,503",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": "C"
            },
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 178.74,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 104.44,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    39,
                    40,
                    41,
                    42,
                    43,
                    44,
                    230,
                    232,
                    233,
                    234,
                    235,
                    236,
                    336,
                    338,
                    339,
                    341,
                    342,
                    344,
                    425,
                    428,
                    430,
                    431,
                    432,
                    433,
                    466,
                    467,
                    468,
                    469,
                    470,
                    472,
                    475,
                    477,
                    478,
                    479,
                    480,
                    481,
                    484,
                    485,
                    486,
                    487,
                    489,
                    490,
                    493,
                    494,
                    495,
                    496,
                    497,
                    498,
                    501,
                    504
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=2;applicableoffers=39,40,41,42,43,44,230,232,233,234,235,236,336,338,339,341,342,344,425,428,430,431,432,433,466,467,468,469,470,472,475,477,478,479,480,481,484,485,486,487,489,490,493,494,495,496,497,498,501,504",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": "M"
            }
        ],
        "taxInclusive": true
    },
    {
        "localFlightSegments": [
            {
                "departureAirport": {
                    "code": "LHR",
                    "name": "HEATHROW",
                    "terminal": "5",
                    "date": "2019-08-19",
                    "time": "17:40:00.000"
                },
                "arrivalAirport": {
                    "code": "CDG",
                    "name": "CHARLES DE GAULLE",
                    "terminal": "2A",
                    "date": "2019-08-19",
                    "time": "19:55:00.000"
                },
                "departureDateTime": "2019-08-19T17:40:43.133",
                "arrivalDateTime": "2019-08-19T19:55:43.134",
                "operatingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "0322"
                },
                "duration": "PT1H15M"
            }
        ],
        "availableCabinsForOption": [
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 259.74,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 185.44,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    46,
                    52,
                    53,
                    238,
                    240,
                    245,
                    346,
                    351,
                    353,
                    434,
                    436,
                    441,
                    505,
                    506,
                    508,
                    536,
                    540,
                    544,
                    545,
                    547,
                    553,
                    554,
                    555,
                    561,
                    563,
                    566
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=2;applicableoffers=46,52,53,238,240,245,346,351,353,434,436,441,505,506,508,536,540,544,545,547,553,554,555,561,563,566",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": "C"
            },
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 166.74,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 92.44,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    47,
                    48,
                    49,
                    50,
                    51,
                    54,
                    239,
                    241,
                    242,
                    243,
                    244,
                    246,
                    345,
                    347,
                    348,
                    349,
                    350,
                    352,
                    435,
                    437,
                    438,
                    439,
                    440,
                    442,
                    507,
                    509,
                    510,
                    511,
                    512,
                    513,
                    537,
                    538,
                    539,
                    541,
                    542,
                    543,
                    546,
                    548,
                    549,
                    550,
                    551,
                    552,
                    556,
                    557,
                    558,
                    559,
                    560,
                    562,
                    564,
                    565
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=2;applicableoffers=47,48,49,50,51,54,239,241,242,243,244,246,345,347,348,349,350,352,435,437,438,439,440,442,507,509,510,511,512,513,537,538,539,541,542,543,546,548,549,550,551,552,556,557,558,559,560,562,564,565",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": "M"
            }
        ],
        "taxInclusive": true
    },
    {
        "localFlightSegments": [
            {
                "departureAirport": {
                    "code": "LHR",
                    "name": "HEATHROW",
                    "terminal": "5",
                    "date": "2019-08-19",
                    "time": "20:50:00.000"
                },
                "arrivalAirport": {
                    "code": "CDG",
                    "name": "CHARLES DE GAULLE",
                    "terminal": "2A",
                    "date": "2019-08-19",
                    "time": "23:05:00.000"
                },
                "departureDateTime": "2019-08-19T20:50:43.134",
                "arrivalDateTime": "2019-08-19T23:05:43.134",
                "operatingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "0326"
                },
                "duration": "PT1H15M"
            }
        ],
        "availableCabinsForOption": [
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 213.74,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 139.44,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    55,
                    58,
                    63,
                    247,
                    249,
                    250,
                    354,
                    359,
                    361,
                    443,
                    448,
                    450,
                    515,
                    517,
                    520,
                    567,
                    572,
                    574,
                    589,
                    594,
                    595,
                    598,
                    599,
                    606,
                    608,
                    610
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=2;applicableoffers=55,58,63,247,249,250,354,359,361,443,448,450,515,517,520,567,572,574,589,594,595,598,599,606,608,610",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": "C"
            },
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 132.74,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 58.44,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    56,
                    57,
                    59,
                    60,
                    61,
                    62,
                    248,
                    251,
                    252,
                    253,
                    254,
                    255,
                    355,
                    356,
                    357,
                    358,
                    360,
                    362,
                    444,
                    445,
                    446,
                    447,
                    449,
                    451,
                    514,
                    516,
                    518,
                    519,
                    521,
                    522,
                    568,
                    569,
                    570,
                    571,
                    573,
                    575,
                    590,
                    591,
                    592,
                    593,
                    596,
                    597,
                    600,
                    601,
                    602,
                    603,
                    604,
                    605,
                    607,
                    609
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=2;applicableoffers=56,57,59,60,61,62,248,251,252,253,254,255,355,356,357,358,360,362,444,445,446,447,449,451,514,516,518,519,521,522,568,569,570,571,573,575,590,591,592,593,596,597,600,601,602,603,604,605,607,609",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": "M"
            }
        ],
        "taxInclusive": true
    },
    {
        "localFlightSegments": [
            {
                "departureAirport": {
                    "code": "LHR",
                    "name": "HEATHROW",
                    "terminal": "5",
                    "date": "2019-08-19",
                    "time": "18:35:00.000"
                },
                "arrivalAirport": {
                    "code": "CDG",
                    "name": "CHARLES DE GAULLE",
                    "terminal": "2A",
                    "date": "2019-08-19",
                    "time": "20:55:00.000"
                },
                "departureDateTime": "2019-08-19T18:35:43.134",
                "arrivalDateTime": "2019-08-19T20:55:43.134",
                "operatingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "0328"
                },
                "duration": "PT1H20M"
            }
        ],
        "availableCabinsForOption": [
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 235.74,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 161.44,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    64,
                    69,
                    72,
                    256,
                    261,
                    263,
                    369,
                    370,
                    371,
                    456,
                    457,
                    459,
                    523,
                    524,
                    529,
                    576,
                    582,
                    584,
                    611,
                    615,
                    618,
                    624,
                    626,
                    632,
                    634,
                    636
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=2;applicableoffers=64,69,72,256,261,263,369,370,371,456,457,459,523,524,529,576,582,584,611,615,618,624,626,632,634,636",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": "C"
            },
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 143.74,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 69.44,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    65,
                    66,
                    67,
                    68,
                    70,
                    71,
                    257,
                    258,
                    259,
                    260,
                    262,
                    264,
                    363,
                    364,
                    365,
                    366,
                    367,
                    368,
                    452,
                    453,
                    454,
                    455,
                    458,
                    460,
                    525,
                    526,
                    527,
                    528,
                    530,
                    531,
                    577,
                    578,
                    579,
                    580,
                    581,
                    583,
                    612,
                    613,
                    614,
                    616,
                    617,
                    619,
                    625,
                    627,
                    628,
                    629,
                    630,
                    631,
                    633,
                    635
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=2;applicableoffers=65,66,67,68,70,71,257,258,259,260,262,264,363,364,365,366,367,368,452,453,454,455,458,460,525,526,527,528,530,531,577,578,579,580,581,583,612,613,614,616,617,619,625,627,628,629,630,631,633,635",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": "M"
            }
        ],
        "taxInclusive": true
    },
    {
        "localFlightSegments": [
            {
                "departureAirport": {
                    "code": "LGW",
                    "name": "GATWICK",
                    "terminal": "S",
                    "date": "2019-08-19",
                    "time": "21:15:00.000"
                },
                "arrivalAirport": {
                    "code": "CDG",
                    "name": "CHARLES DE GAULLE",
                    "terminal": "3",
                    "date": "2019-08-19",
                    "time": "23:30:00.000"
                },
                "departureDateTime": "2019-08-19T21:15:43.134",
                "arrivalDateTime": "2019-08-19T23:30:43.134",
                "operatingCarrier": {
                    "carrierCode": "VY",
                    "carrierName": "Vueling"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "8086"
                },
                "duration": "PT1H15M"
            }
        ],
        "availableCabinsForOption": [
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 185.02,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 92.72,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    73,
                    74,
                    265,
                    266,
                    372,
                    373,
                    461,
                    462,
                    532,
                    533,
                    585,
                    586,
                    620,
                    621,
                    637,
                    638,
                    641,
                    643
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=2;applicableoffers=73,74,265,266,372,373,461,462,532,533,585,586,620,621,637,638,641,643",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": "M"
            }
        ],
        "taxInclusive": true
    },
    {
        "localFlightSegments": [
            {
                "departureAirport": {
                    "code": "LGW",
                    "name": "GATWICK",
                    "terminal": "S",
                    "date": "2019-08-19",
                    "time": "12:50:00.000"
                },
                "arrivalAirport": {
                    "code": "CDG",
                    "name": "CHARLES DE GAULLE",
                    "terminal": "3",
                    "date": "2019-08-19",
                    "time": "15:05:00.000"
                },
                "departureDateTime": "2019-08-19T12:50:43.134",
                "arrivalDateTime": "2019-08-19T15:05:43.134",
                "operatingCarrier": {
                    "carrierCode": "VY",
                    "carrierName": "Vueling"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "8090"
                },
                "duration": "PT1H15M"
            }
        ],
        "availableCabinsForOption": [
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 202.02,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 109.72,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    75,
                    76,
                    267,
                    268,
                    374,
                    375,
                    463,
                    464,
                    534,
                    535,
                    587,
                    588,
                    622,
                    623,
                    639,
                    640,
                    642,
                    644
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=2;applicableoffers=75,76,267,268,374,375,463,464,534,535,587,588,622,623,639,640,642,644",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": "M"
            }
        ],
        "taxInclusive": true
    }
]);
}else if(req.params.ondwanted==2){
  res.json([
    {
        "localFlightSegments": [
            {
                "departureAirport": {
                    "code": "JFK",
                    "name": "JOHN F KENNEDY",
                    "terminal": "8",
                    "date": "2019-08-20",
                    "time": "22:45:00.000"
                },
                "arrivalAirport": {
                    "code": "LHR",
                    "name": "HEATHROW",
                    "terminal": "3",
                    "date": "2019-08-21",
                    "time": "10:50:00.000"
                },
                "departureDateTime": "2019-08-20T22:45:59.194",
                "arrivalDateTime": "2019-08-21T10:50:59.194",
                "operatingCarrier": {
                    "carrierCode": "AA",
                    "carrierName": "American Airlines"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "1515"
                },
                "duration": "PT7H5M"
            },
            {
                "departureAirport": {
                    "code": "LHR",
                    "name": "HEATHROW",
                    "terminal": "5",
                    "date": "2019-08-21",
                    "time": "16:10:00.000"
                },
                "arrivalAirport": {
                    "code": "BKK",
                    "name": "BANGKOK",
                    "terminal": "",
                    "date": "2019-08-22",
                    "time": "09:45:00.000"
                },
                "departureDateTime": "2019-08-21T16:10:59.194",
                "arrivalDateTime": "2019-08-22T09:45:59.194",
                "operatingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "0009"
                },
                "duration": "PT11H35M"
            }
        ],
        "availableCabinsForOption": [
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 5354.73,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 0,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    1,
                    2,
                    25
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=3;applicableoffers=1,2,25",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": ""
            }
        ],
        "taxInclusive": true
    },
    {
        "localFlightSegments": [
            {
                "departureAirport": {
                    "code": "JFK",
                    "name": "JOHN F KENNEDY",
                    "terminal": "7",
                    "date": "2019-08-20",
                    "time": "21:30:00.000"
                },
                "arrivalAirport": {
                    "code": "LHR",
                    "name": "HEATHROW",
                    "terminal": "5",
                    "date": "2019-08-21",
                    "time": "09:35:00.000"
                },
                "departureDateTime": "2019-08-20T21:30:59.195",
                "arrivalDateTime": "2019-08-21T09:35:59.195",
                "operatingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "0114"
                },
                "duration": "PT7H5M"
            },
            {
                "departureAirport": {
                    "code": "LHR",
                    "name": "HEATHROW",
                    "terminal": "5",
                    "date": "2019-08-21",
                    "time": "16:10:00.000"
                },
                "arrivalAirport": {
                    "code": "BKK",
                    "name": "BANGKOK",
                    "terminal": "",
                    "date": "2019-08-22",
                    "time": "09:45:00.000"
                },
                "departureDateTime": "2019-08-21T16:10:59.195",
                "arrivalDateTime": "2019-08-22T09:45:59.195",
                "operatingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "0009"
                },
                "duration": "PT11H35M"
            }
        ],
        "availableCabinsForOption": [
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 5354.73,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 0,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    13,
                    14,
                    31
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=3;applicableoffers=13,14,31",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": ""
            }
        ],
        "taxInclusive": true
    },
    {
        "localFlightSegments": [
            {
                "departureAirport": {
                    "code": "JFK",
                    "name": "JOHN F KENNEDY",
                    "terminal": "7",
                    "date": "2019-08-20",
                    "time": "22:00:00.000"
                },
                "arrivalAirport": {
                    "code": "LGW",
                    "name": "GATWICK",
                    "terminal": "S",
                    "date": "2019-08-21",
                    "time": "10:00:00.000"
                },
                "departureDateTime": "2019-08-20T22:00:59.195",
                "arrivalDateTime": "2019-08-21T10:00:59.195",
                "operatingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "2272"
                },
                "duration": "PT7H"
            },
            {
                "departureAirport": {
                    "code": "LHR",
                    "name": "HEATHROW",
                    "terminal": "5",
                    "date": "2019-08-21",
                    "time": "16:10:00.000"
                },
                "arrivalAirport": {
                    "code": "BKK",
                    "name": "BANGKOK",
                    "terminal": "",
                    "date": "2019-08-22",
                    "time": "09:45:00.000"
                },
                "departureDateTime": "2019-08-21T16:10:59.195",
                "arrivalDateTime": "2019-08-22T09:45:59.195",
                "operatingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "0009"
                },
                "duration": "PT11H35M"
            }
        ],
        "availableCabinsForOption": [
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 5359.14,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 0,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    37,
                    38,
                    49
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=3;applicableoffers=37,38,49",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": ""
            }
        ],
        "taxInclusive": true
    },
    {
        "localFlightSegments": [
            {
                "departureAirport": {
                    "code": "JFK",
                    "name": "JOHN F KENNEDY",
                    "terminal": "7",
                    "date": "2019-08-20",
                    "time": "23:00:00.000"
                },
                "arrivalAirport": {
                    "code": "LHR",
                    "name": "HEATHROW",
                    "terminal": "5",
                    "date": "2019-08-21",
                    "time": "11:05:00.000"
                },
                "departureDateTime": "2019-08-20T23:00:59.195",
                "arrivalDateTime": "2019-08-21T11:05:59.195",
                "operatingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "0182"
                },
                "duration": "PT7H5M"
            },
            {
                "departureAirport": {
                    "code": "LHR",
                    "name": "HEATHROW",
                    "terminal": "5",
                    "date": "2019-08-21",
                    "time": "16:10:00.000"
                },
                "arrivalAirport": {
                    "code": "BKK",
                    "name": "BANGKOK",
                    "terminal": "",
                    "date": "2019-08-22",
                    "time": "09:45:00.000"
                },
                "departureDateTime": "2019-08-21T16:10:59.195",
                "arrivalDateTime": "2019-08-22T09:45:59.195",
                "operatingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "0009"
                },
                "duration": "PT11H35M"
            }
        ],
        "availableCabinsForOption": [
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 5506.23,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 0,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    55,
                    56,
                    91
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=3;applicableoffers=55,56,91",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": ""
            }
        ],
        "taxInclusive": true
    },
    {
        "localFlightSegments": [
            {
                "departureAirport": {
                    "code": "EWR",
                    "name": "NEWARK",
                    "terminal": "B",
                    "date": "2019-08-20",
                    "time": "21:35:00.000"
                },
                "arrivalAirport": {
                    "code": "LHR",
                    "name": "HEATHROW",
                    "terminal": "5",
                    "date": "2019-08-21",
                    "time": "09:35:00.000"
                },
                "departureDateTime": "2019-08-20T21:35:59.195",
                "arrivalDateTime": "2019-08-21T09:35:59.195",
                "operatingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "0188"
                },
                "duration": "PT7H"
            },
            {
                "departureAirport": {
                    "code": "LHR",
                    "name": "HEATHROW",
                    "terminal": "5",
                    "date": "2019-08-21",
                    "time": "16:10:00.000"
                },
                "arrivalAirport": {
                    "code": "BKK",
                    "name": "BANGKOK",
                    "terminal": "",
                    "date": "2019-08-22",
                    "time": "09:45:00.000"
                },
                "departureDateTime": "2019-08-21T16:10:59.195",
                "arrivalDateTime": "2019-08-22T09:45:59.195",
                "operatingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "0009"
                },
                "duration": "PT11H35M"
            }
        ],
        "availableCabinsForOption": [
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 5506.23,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 0,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    67,
                    68,
                    97
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=3;applicableoffers=67,68,97",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": ""
            }
        ],
        "taxInclusive": true
    },
    {
        "localFlightSegments": [
            {
                "departureAirport": {
                    "code": "JFK",
                    "name": "JOHN F KENNEDY",
                    "terminal": "7",
                    "date": "2019-08-20",
                    "time": "21:00:00.000"
                },
                "arrivalAirport": {
                    "code": "LHR",
                    "name": "HEATHROW",
                    "terminal": "5",
                    "date": "2019-08-21",
                    "time": "09:05:00.000"
                },
                "departureDateTime": "2019-08-20T21:00:59.195",
                "arrivalDateTime": "2019-08-21T09:05:59.195",
                "operatingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "0172"
                },
                "duration": "PT7H5M"
            },
            {
                "departureAirport": {
                    "code": "LHR",
                    "name": "HEATHROW",
                    "terminal": "5",
                    "date": "2019-08-21",
                    "time": "16:10:00.000"
                },
                "arrivalAirport": {
                    "code": "BKK",
                    "name": "BANGKOK",
                    "terminal": "",
                    "date": "2019-08-22",
                    "time": "09:45:00.000"
                },
                "departureDateTime": "2019-08-21T16:10:59.195",
                "arrivalDateTime": "2019-08-22T09:45:59.195",
                "operatingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways"
                },
                "marketingCarrier": {
                    "carrierCode": "BA",
                    "carrierName": "British Airways",
                    "flightNumber": "0009"
                },
                "duration": "PT11H35M"
            }
        ],
        "availableCabinsForOption": [
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 5506.23,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 0,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    79,
                    80,
                    103
                ],
                "nextFlightSegment": {
                    "link": {
                        "href": "http://caws08-pint01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=3;applicableoffers=79,80,103",
                        "rel": "nextSegment"
                    }
                },
                "cabinOptionKey": ""
            }
        ],
        "taxInclusive": true
    }
]);
}else if(req.params.ondwanted==3){
  res.json([
    {
        "localFlightSegments": [
            {
                "departureAirport": {
                    "code": "BKK",
                    "name": "BANGKOK",
                    "terminal": "",
                    "date": "2019-08-25",
                    "time": "09:25:00.000"
                },
                "arrivalAirport": {
                    "code": "SIN",
                    "name": "CHANGI",
                    "terminal": "1",
                    "date": "2019-08-25",
                    "time": "12:50:00.000"
                },
                "departureDateTime": "2019-08-25T09:25:11.672",
                "arrivalDateTime": "2019-08-25T12:50:11.672",
                "operatingCarrier": {
                    "carrierCode": "3K",
                    "carrierName": "Jetstar Asia"
                },
                "marketingCarrier": {
                    "carrierCode": "3K",
                    "carrierName": "Jetstar Asia",
                    "flightNumber": "0512"
                },
                "duration": "PT2H25M"
            }
        ],
        "availableCabinsForOption": [
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 5506.23,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 0,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    55
                ],
                "nextFlightSegment": {},
                "cabinOptionKey": "M"
            }
        ],
        "taxInclusive": true
    },
    {
        "localFlightSegments": [
            {
                "departureAirport": {
                    "code": "BKK",
                    "name": "BANGKOK",
                    "terminal": "",
                    "date": "2019-08-25",
                    "time": "21:20:00.000"
                },
                "arrivalAirport": {
                    "code": "SIN",
                    "name": "CHANGI",
                    "terminal": "1",
                    "date": "2019-08-26",
                    "time": "00:45:00.000"
                },
                "departureDateTime": "2019-08-25T21:20:11.672",
                "arrivalDateTime": "2019-08-26T00:45:11.672",
                "operatingCarrier": {
                    "carrierCode": "3K",
                    "carrierName": "Jetstar Asia"
                },
                "marketingCarrier": {
                    "carrierCode": "3K",
                    "carrierName": "Jetstar Asia",
                    "flightNumber": "0514"
                },
                "duration": "PT2H25M"
            }
        ],
        "availableCabinsForOption": [
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 5506.23,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 0,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    56
                ],
                "nextFlightSegment": {},
                "cabinOptionKey": "M"
            }
        ],
        "taxInclusive": true
    },
    {
        "localFlightSegments": [
            {
                "departureAirport": {
                    "code": "BKK",
                    "name": "BANGKOK",
                    "terminal": "",
                    "date": "2019-08-25",
                    "time": "12:50:00.000"
                },
                "arrivalAirport": {
                    "code": "SIN",
                    "name": "CHANGI",
                    "terminal": "1",
                    "date": "2019-08-25",
                    "time": "16:15:00.000"
                },
                "departureDateTime": "2019-08-25T12:50:11.672",
                "arrivalDateTime": "2019-08-25T16:15:11.672",
                "operatingCarrier": {
                    "carrierCode": "3K",
                    "carrierName": "Jetstar Asia"
                },
                "marketingCarrier": {
                    "carrierCode": "3K",
                    "carrierName": "Jetstar Asia",
                    "flightNumber": "0516"
                },
                "duration": "PT2H25M"
            }
        ],
        "availableCabinsForOption": [
            {
                "lowestJourneyPriceInCabin": {
                    "amount": 5506.23,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "lowestSegmentPriceInCabin": {
                    "amount": 0,
                    "currency": {
                        "displayFractionalPlaces": 0,
                        "code": "GBP",
                        "decimalPlaces": 0,
                        "currencyCode": "GBP",
                        "currencyDecimalPlaces": 0
                    }
                },
                "offerIdsForCabinOffer": [
                    91
                ],
                "nextFlightSegment": {},
                "cabinOptionKey": "M"
            }
        ],
        "taxInclusive": true
    }
]);
}else{
  res.json({message:'no offers for this route', queryParamsReceived:req.params, bodyParamsReceived: req.body});
}

});

router.get('/csdm-plm/rs/v1/productlocations;searchText=:searchText', function(req, res) {
if(req.params.searchText=='jfk'){
  res.json({"locations":[{"locationType":"AIRPORT","airportDetails":{"iataCode":"JFK","name":"John F Kennedy (NY)","bahID":"AIR_JFK_NY_US"},"cityDetails":{"code":"NYC","name":"New York","bahID":"CIT_US_NY_NewY"},"stateDetails":{"code":"NJ","name":"New Jersey"},"countryDetails":{"code":"US","name":"USA"},"availableProducts":{"flightOnly":true,"flightAndHotel":true,"flightAndCar":true,"hotelOnly":true,"carOnly":true}}]});
}
else if(req.params.searchText=='che'){
  res.json({"locations":[{"locationType":"AIRPORT","airportDetails":{"iataCode":"CEK","name":"Chelyabinsk"},"cityDetails":{"code":"CEK","name":"Chelyabinsk"},"countryDetails":{"code":"RU","name":"Russia"},"availableProducts":{"flightOnly":true,"flightAndHotel":false,"flightAndCar":false,"hotelOnly":false,"carOnly":false}},{"locationType":"AIRPORT","airportDetails":{"iataCode":"CTU","name":"Chengdu"},"cityDetails":{"code":"CTU","name":"Chengdu"},"countryDetails":{"code":"CN","name":"China"},"availableProducts":{"flightOnly":true,"flightAndHotel":false,"flightAndCar":false,"hotelOnly":false,"carOnly":false}},{"locationType":"AIRPORT","airportDetails":{"iataCode":"MAA","name":"Chennai","bahID":"AIR_MAA_IN"},"cityDetails":{"code":"MAA","name":"Chennai","bahID":"CITY_MAA_IN"},"countryDetails":{"code":"IN","name":"India"},"availableProducts":{"flightOnly":true,"flightAndHotel":true,"flightAndCar":true,"hotelOnly":true,"carOnly":true}},{"locationType":"AIRPORT","airportDetails":{"iataCode":"CTM","name":"Chetumal"},"cityDetails":{"code":"CTM","name":"Chetumal"},"countryDetails":{"code":"MX","name":"Mexico"},"availableProducts":{"flightOnly":true,"flightAndHotel":false,"flightAndCar":false,"hotelOnly":false,"carOnly":false}}]});
}
else if(req.params.searchText=='del'){
  res.json({"locations":[{"locationType":"AIRPORT","airportDetails":{"iataCode":"DEL","name":"Indira Gandhi Intl","bahID":"AIR_DEL_IN"},"cityDetails":{"code":"DEL","name":"New Delhi","bahID":"CITY_DEL_IN"},"countryDetails":{"code":"IN","name":"India"},"availableProducts":{"flightOnly":true,"flightAndHotel":true,"flightAndCar":true,"hotelOnly":true,"carOnly":true}},{"locationType":"AIRPORT","airportDetails":{"iataCode":"CME","name":"Cuidad Del Carmen"},"cityDetails":{"code":"CME","name":"CIUDAD DEL CARMEN"},"countryDetails":{"code":"MX","name":"Mexico"},"availableProducts":{"flightOnly":true,"flightAndHotel":false,"flightAndCar":false,"hotelOnly":false,"carOnly":false}},{"locationType":"AIRPORT","airportDetails":{"iataCode":"SJD","name":"San Jose Del Cabo"},"cityDetails":{"code":"SJD","name":"San Jose Del Cabo"},"countryDetails":{"code":"MX","name":"Mexico"},"availableProducts":{"flightOnly":true,"flightAndHotel":false,"flightAndCar":false,"hotelOnly":false,"carOnly":false}}]});
}



});

module.exports = router
