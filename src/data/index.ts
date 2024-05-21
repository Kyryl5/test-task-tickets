export const tabs = [
  {
    "label":"найдешевший",
    "name":"cheapest",
    "id": 1,
  },
  {
    "label":"найшвидший",
    "name":"fastest",
    "id": 2,
  },
  {
    "label":"оптимальний",
    "name":"optimal",
    "id": 3,
  },
];

export const tickets = [
  {
    "id": 1,
    "thatWay" : {
      "from": "LHR",
      "to": "DXB",
      "departureTime": "10:45",
      "arrivalTime": "08:00",
      "travelTime": "34г 15хв",
    },  
    "return": {
      "from": "DXB",
      "to": "LHR",
      "departureTime": "11:20",
      "arrivalTime": "00:50",
      "travelTime": "16г 30хв",
    },
    "price": 13300,
    "stops": 1,
    "connections": ["HKG"],
    "connectionsDescribe": "1 пересадка"
  },
  {
    "id": 2,
    "thatWay" : {
      "from": "LHR",
      "to": "DXB",
      "departureTime": "10:45",
      "arrivalTime": "08:00",
      "travelTime": "17г 15хв",
    },
    "return": {
      "from": "DXB",
      "to": "LHR",
      "departureTime": "11:20",
      "arrivalTime": "00:50",
      "travelTime": "40г 30хв",
    },
    "price": 15100,
    "stops": 2,
    "connections": ["HKG", "JNB"],
    "connectionsDescribe": "2 пересадки"
  },
  {
    "id": 3,
    "thatWay" : {
        "from": "LHR",
        "to": "DXB",
        "departureTime": "10:45",
        "arrivalTime": "08:00",
        "travelTime": "20г 15хв",
    },
    "return": {
      "from": "DXB",
      "to": "LHR",
      "departureTime": "11:20",
      "arrivalTime": "00:50",
      "travelTime": "13г 30хв",
    },
    "price": 15400,
    "stops": 1,
    "connections": ["HKG"],
    "connectionsDescribe": "1 пересадка"
  },
  {
    "id": 4,
    "thatWay" : {
      "from": "LHR",
      "to": "DXB",
      "departureTime": "10:45",
      "arrivalTime": "08:00",
      "travelTime": "21г 15хв",
    },
    "return": {
      "from": "DXB",
      "to": "LHR",
      "departureTime": "11:20",
      "arrivalTime": "00:50",
      "travelTime": "12г 30хв",
    },
    "price": 20400,
    "stops": 3,
    "connections": ["HKG", "JNB", "JNB"],
    "connectionsDescribe": "3 пересадки"
  },
  {
    "id": 5,
    "thatWay" : {
      "from": "LHR",
      "to": "DXB",
      "departureTime": "10:45",
      "arrivalTime": "08:00",
      "travelTime": "11г 20хв",
    },
    "return": {
      "from": "DXB",
      "to": "LHR",
      "departureTime": "11:20",
      "arrivalTime": "00:50",
      "travelTime": "8г 35хв",
    },
    "price": 28200,
    "stops": 0,
    "connections": [],
    "connectionsDescribe": "без пересадок"
  },
  {
    "id": 6,
    "thatWay" : {
      "from": "LHR",
      "to": "DXB",
      "departureTime": "10:45",
      "arrivalTime": "08:00",
      "travelTime": "33г 20хв",
    },  
    "return": {
      "from": "DXB",
      "to": "LHR",
      "departureTime": "11:20",
      "arrivalTime": "00:50",
      "travelTime": "16г 30хв",
    },
    "price": 13600,
    "stops": 1,
    "connections": ["HKG"],
    "connectionsDescribe": "1 пересадка"
  },
  {
    "id": 7,
    "thatWay" : {
      "from": "LHR",
      "to": "DXB",
      "departureTime": "10:45",
      "arrivalTime": "08:00",
      "travelTime": "16г 25хв",
    },
    "return": {
      "from": "DXB",
      "to": "LHR",
      "departureTime": "11:20",
      "arrivalTime": "00:50",
      "travelTime": "39г 35хв",
    },
    "price": 12700,
    "stops": 2,
    "connections": ["HKG", "JNB"],
    "connectionsDescribe": "2 пересадки"
  },
  {
    "id": 8,
    "thatWay" : {
        "from": "LHR",
        "to": "DXB",
        "departureTime": "10:45",
        "arrivalTime": "08:00",
        "travelTime": "21г 20хв",
    },
    "return": {
      "from": "DXB",
      "to": "LHR",
      "departureTime": "11:20",
      "arrivalTime": "00:50",
      "travelTime": "12г 35хв",
    },
    "price": 12800,
    "stops": 1,
    "connections": ["HKG"],
    "connectionsDescribe": "1 пересадка"
  },
  {
    "id": 9,
    "thatWay" : {
      "from": "LHR",
      "to": "DXB",
      "departureTime": "10:45",
      "arrivalTime": "08:00",
      "travelTime": "20г 15хв",
    },
    "return": {
      "from": "DXB",
      "to": "LHR",
      "departureTime": "11:20",
      "arrivalTime": "00:50",
      "travelTime": "14г 30хв",
    },
    "price": 21900,
    "stops": 2,
    "connections": ["HKG", "JNB"],
    "connectionsDescribe": "2 пересадки"
  },
  {
    "id": 10,
    "thatWay" : {
      "from": "LHR",
      "to": "DXB",
      "departureTime": "10:45",
      "arrivalTime": "08:00",
      "travelTime": "11г 15хв",
    },
    "return": {
      "from": "DXB",
      "to": "LHR",
      "departureTime": "11:20",
      "arrivalTime": "00:50",
      "travelTime": "9г 30хв",
    },
    "price": 35300,
    "stops": 0,
    "connections": [],
    "connectionsDescribe": "без пересадок"
  },
  {
    "id": 11,
    "thatWay" : {
      "from": "LHR",
      "to": "DXB",
      "departureTime": "10:45",
      "arrivalTime": "08:00",
      "travelTime": "31г 15хв",
    },  
    "return": {
      "from": "DXB",
      "to": "LHR",
      "departureTime": "11:20",
      "arrivalTime": "00:50",
      "travelTime": "17г 30хв",
    },
    "price": 14300,
    "stops": 1,
    "connections": ["HKG"],
    "connectionsDescribe": "1 пересадка"
  },
  {
    "id": 12,
    "thatWay" : {
      "from": "LHR",
      "to": "DXB",
      "departureTime": "10:45",
      "arrivalTime": "08:00",
      "travelTime": "17г 15хв",
    },
    "return": {
      "from": "DXB",
      "to": "LHR",
      "departureTime": "11:20",
      "arrivalTime": "00:50",
      "travelTime": "35г 30хв",
    },
    "price": 15100,
    "stops": 1,
    "connections": ["HKG"],
    "connectionsDescribe": "1 пересадка"
  },
  {
    "id": 13,
    "thatWay" : {
        "from": "LHR",
        "to": "DXB",
        "departureTime": "10:45",
        "arrivalTime": "08:00",
        "travelTime": "25г 15хв",
    },
    "return": {
      "from": "DXB",
      "to": "LHR",
      "departureTime": "11:20",
      "arrivalTime": "00:50",
      "travelTime": "13г 30хв",
    },
    "price": 11400,
    "stops": 1,
    "connections": ["HKG"],
    "connectionsDescribe": "1 пересадка"
  },
  {
    "id": 14,
    "thatWay" : {
      "from": "LHR",
      "to": "DXB",
      "departureTime": "10:45",
      "arrivalTime": "08:00",
      "travelTime": "21г 15хв",
    },
    "return": {
      "from": "DXB",
      "to": "LHR",
      "departureTime": "11:20",
      "arrivalTime": "00:50",
      "travelTime": "13г 30хв",
    },
    "price": 21500,
    "stops": 3,
    "connections": ["HKG", "JNB", "JNB"],
    "connectionsDescribe": "3 пересадки"
  },
  {
    "id": 15,
    "thatWay" : {
      "from": "LHR",
      "to": "DXB",
      "departureTime": "10:45",
      "arrivalTime": "08:00",
      "travelTime": "11г 15хв",
    },
    "return": {
      "from": "DXB",
      "to": "LHR",
      "departureTime": "11:20",
      "arrivalTime": "00:50",
      "travelTime": "19г 30хв",
    },
    "price": 21300,
    "stops": 0,
    "connections": [],
    "connectionsDescribe": "без пересадок"
  },
]