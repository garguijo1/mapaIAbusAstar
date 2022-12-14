let puntos = [
  {
    id: 0,
    tipo: "p",
    name: "Puerta 1",
    lat: -12.061022,
    lng: -77.08569,
    nodos: [1],
  },
  {
    id: 1,
    tipo: "t",
    name: "",
    lat: -12.060943,
    lng: -77.085638,
    nodos: [0, 2],
  },
  {
    id: 2,
    tipo: "t",
    name: "",
    lat: -12.061084,
    lng: -77.085343,
    nodos: [1, 3],
  },
  {
    id: 3,
    tipo: "t",
    name: "",
    lat: -12.060978,
    lng: -77.08469,
    nodos: [2, 4, 5],
  },
  {
    id: 4,
    tipo: "f",
    name: "Facultad de Ingeniería Geológica",
    lat: -12.06078,
    lng: -77.08474,
    nodos: [3],
  },
  {
    id: 5,
    tipo: "t",
    name: "",
    lat: -12.060911,
    lng: -77.084273,
    nodos: [3, 6, 7],
  },
  {
    id: 6,
    tipo: "t",
    name: "",
    lat: -12.060278,
    lng: -77.084388,
    nodos: [5, 8, 9],
  },
  {
    id: 7,
    tipo: "t",
    name: "",
    lat: -12.060715748003986, 
    lng: -77.08295052589969,
    nodos: [5, 11, 38],
  },
  {
    id: 8,
    tipo: "f",
    name: "Facultad de Ingenieria Metalúrgica",
    lat: -12.060217,
    lng: -77.084172,
    nodos: [6, 10],
  },
  {
    id: 9,
    tipo: "t",
    name: "",
    lat: -12.06016,
    lng: -77.084415,
    nodos: [6, 10, 13],
  },
  {
    id: 10,
    tipo: "t",
    name: "",
    lat: -12.060104,
    lng: -77.084195,
    nodos: [9, 8, 19],
  },
  {
    id: 11,
    tipo: "f",
    name: "Facultad de Química e Ingenieria Química",
    lat: -12.060248,
    lng: -77.082938,
    nodos: [7, 12, 27, 38, 46],
  },
  {
    id: 12,
    tipo: "t",
    name: "",
    lat: -12.059821,
    lng: -77.083034,
    nodos: [11, 21, 24, 25, 26, 46],
  },
  {
    id: 13,
    tipo: "t",
    name: "",
    lat: -12.059113,
    lng: -77.08465,
    nodos: [9, 14,132],
  },
  {
    id: 14,
    tipo: "t",
    name: "",
    lat: -12.058917,
    lng: -77.084548,
    nodos: [13, 15, 132],
  },
  {
    id: 15,
    tipo: "t",
    name: "",
    lat: -12.058895,
    lng: -77.084095,
    nodos: [14, 16],
  },
  {
    id: 16,
    tipo: "t",
    name: "",
    lat: -12.059252,
    lng: -77.08382,
    nodos: [15, 17],
  },
  {
    id: 17,
    tipo: "t",
    name: "",
    lat: -12.05927,
    lng: -77.083649,
    nodos: [16, 18, 144], 
  },
  {
    id: 18,
    tipo: "t",
    name: "",
    lat: -12.059646,
    lng: -77.083328,
    nodos: [17, 19, 20],
  },
  {
    id: 19,
    tipo: "t",
    name: "",
    lat: -12.059924,
    lng: -77.083456,
    nodos: [10, 18, 21],
  },
  {
    id: 20,
    tipo: "t",
    name: "",
    lat: -12.059578,
    lng: -77.08326,
    nodos: [18, 22, 31],
  },
  {
    id: 21,
    tipo: "t",
    name: "",
    lat: -12.059855,
    lng: -77.083211,
    nodos: [12, 19, 22],
  },
  {
    id: 22,
    tipo: "t",
    name: "",
    lat: -12.059642,
    lng: -77.083171,
    nodos: [20, 21, 23, 24],
  },
  {
    id: 23,
    tipo: "t",
    name: "",
    lat: -12.059562,
    lng: -77.083104,
    nodos: [22, 29],
  },
  {
    id: 24,
    tipo: "t",
    name: "",
    lat: -12.059664,
    lng: -77.083053,
    nodos: [12, 22, 25, 26],
  },
  {
    id: 25,
    tipo: "t",
    name: "",
    lat: -12.05963,
    lng: -77.082828,
    nodos: [12, 24, 26, 28],
  },
  {
    id: 26,
    tipo: "t",
    name: "",
    lat: -12.059764,
    lng: -77.082781,
    nodos: [12,24,25, 27],
  },
  {
    id: 27,
    tipo: "t",
    name: "",
    lat: -12.059743,
    lng: -77.082674,
    nodos: [26, 36, 46],
  },
  {
    id: 28,
    tipo: "t",
    name: "",
    lat: -12.059553,
    lng: -77.082751,
    nodos: [25, 27, 30, 34],
  },
  {
    id: 29,
    tipo: "t",
    name: "",
    lat: -12.05951,
    lng: -77.083003,
    nodos: [23, 30],
  },
  {
    id: 30,
    tipo: "t",
    name: "",
    lat: -12.059507,
    lng: -77.082859,
    nodos: [29, 28],
  },
  {
    id: 31,
    tipo: "t",
    name: "",
    lat: -12.059502,
    lng: -77.083179,
    nodos: [20, 32],
  },
  {
    id: 32,
    tipo: "t",
    name: "",
    lat: -12.059441,
    lng: -77.083022,
    nodos: [31, 33],
  },
  {
    id: 33,
    tipo: "t",
    name: "",
    lat: -12.059419,
    lng: -77.082889,
    nodos: [32, 34],
  },
  {
    id: 34,
    tipo: "t",
    name: "",
    lat: -12.059437,
    lng: -77.082694,
    nodos: [33, 28, 152,150],
  },
  {
    id: 35,
    tipo: "t",
    name: "",
    lat: -12.059534,
    lng: -77.082513,
    nodos: [152, 37],
  },
  {
    id: 36,
    tipo: "t",
    name: "",
    lat: -12.059725,
    lng: -77.082605,
    nodos: [27, 37], 
  },
  {
    id: 37,
    tipo: "t",
    name: "",
    lat: -12.059676,
    lng: -77.082405,
    nodos: [35, 36, 41],
  },
  {
    id: 38,
    tipo: "t",
    name: "",
    lat: -12.060635746373368, 
    lng: -77.08243017736815,
    nodos: [7, 46, 39],
  },
  {
    id: 39,
    tipo: "t",
    name: "",
    lat: -12.060608204823026, 
    lng: -77.08224376383797,
    nodos: [38, 40, 50],
  },
  {
    id: 40,
    tipo: "f",
    name: "Facultad de Ciencias Matemáticas",
    lat: -12.060491,
    lng: -77.082248,
    nodos: [39],
  },
  {
    id: 41,
    tipo: "t",
    name: "",
    lat: -12.059651,
    lng: -77.082318,
    nodos: [37, 48,154],
  },
  {
    id: 42,
    tipo: "f",
    name: "Facultad de Ciencias Biológicas",
    lat: -12.059516,
    lng: -77.081812,
    nodos: [48, 43],
  },
  {
    id: 43,
    tipo: "t",
    name: "",
    lat: -12.059477,
    lng: -77.081656,
    nodos: [42, 44, 63, 69],
  },
  {
    id: 44,
    tipo: "f",
    name: "Facultad de Ciencias Físicas",
    lat: -12.05961,
    lng: -77.081624,
    nodos: [43, 45],
  },
  {
    id: 45,
    tipo: "t",
    name: "",
    lat: -12.059675,
    lng: -77.081606,
    nodos: [44, 51, 62],
  },
  {
    id: 46,
    tipo: "t",
    name: "",
    lat: -12.060106,
    lng: -77.082574,
    nodos: [27, 38, 47],
  },
  {
    id: 47,
    tipo: "t",
    name: "",
    lat: -12.059936,
    lng: -77.081837,
    nodos: [46, 48, 49],
  },
  {
    id: 48,
    tipo: "t",
    name: "",
    lat: -12.059553,
    lng: -77.081944,
    nodos: [41, 42, 47],
  },
  {
    id: 49,
    tipo: "t",
    name: "",
    lat: -12.060411,
    lng: -77.081725,
    nodos: [50, 51],
  },
  {
    id: 50,
    tipo: "t",
    name: "",
    lat: -12.060513776626513, 
    lng: -77.08168988766465,
    nodos: [39, 49, 52],
  },
  {
    id: 51,
    tipo: "t",
    name: "",
    lat: -12.060339,
    lng: -77.081437,
    nodos: [49, 52, 53],
  },
  {
    id: 52,
    tipo: "t",
    name: "",
    lat: -12.0604240249278, 
    lng: -77.0813777804638,
    nodos: [50, 51, 54],
  },
  {
    id: 53,
    tipo: "f",
    name: "Facultad de Ingeniería Industrial",
    lat: -12.06021,
    lng: -77.08094,
    nodos: [51, 54],
  },
  {
    id: 54,
    tipo: "t",
    name: "",
    lat: -12.060232556261154, 
    lng: -77.08048550836033,
    nodos: [53, 55, 57],
  },
  {
    id: 55,
    tipo: "t",
    name: "",
    lat: -12.059394,
    lng: -77.080687,
    nodos: [54, 56, 57, 62],
  },
  {
    id: 56,
    tipo: "t",
    name: "",
    lat: -12.059192,
    lng: -77.079744,
    nodos: [55, 60, 59],
  },
  {
    id: 57,
    tipo: "t",
    name: "",
    lat: -12.059933,
    lng: -77.079683,
    nodos: [54, 59],
  },
  {
    id: 58,
    tipo: "p",
    name: "Puerta 2",
    lat: -12.059505,
    lng: -77.079249,
    nodos: [59],
  },
  {
    id: 59,
    tipo: "t",
    name: "",
    lat: -12.059534,
    lng: -77.079658,
    nodos: [58, 57, 56],
  },
  {
    id: 60,
    tipo: "t",
    name: "",
    lat: -12.059023,
    lng: -77.079789,
    nodos: [61, 56, 71],
  },
  {
    id: 61,
    tipo: "t",
    name: "",
    lat: -12.059295,
    lng: -77.080902,
    nodos: [60, 62, 64],
  },
  {
    id: 62,
    tipo: "t",
    name: "",
    lat: -12.059477,
    lng: -77.080862,
    nodos: [45, 55, 61],
  },
  {
    id: 63,
    tipo: "t",
    name: "",
    lat: -12.059433,
    lng: -77.081464,
    nodos: [43, 66, 61],
  },
  {
    id: 64,
    tipo: "t",
    name: "",
    lat: -12.059117,
    lng: -77.080962,
    nodos: [65, 61, 67], 
  },
  {
    id: 65,
    tipo: "t",
    name: "",
    lat: -12.059253,
    lng: -77.081195,
    nodos: [64, 66],
  },
  {
    id: 66,
    tipo: "t",
    name: "",
    lat: -12.059276,
    lng: -77.081493,
    nodos: [63, 65, 68],
  },
  {
    id: 67,
    tipo: "t",
    name: "",
    lat: -12.058908,
    lng: -77.081027,
    nodos: [64, 68, 72, 86, 146],
  },
  {
    id: 68,
    tipo: "t",
    name: "",
    lat: -12.059031,
    lng: -77.081565,
    nodos: [66, 67, 69, 183],
  },
  {
    id: 69,
    tipo: "t",
    name: "",
    lat: -12.059069,
    lng: -77.081755,
    nodos: [43, 68, 70, 183],
  },
  {
    id: 70,
    tipo: "t",
    name: "",
    lat: -12.059121,
    lng: -77.082002,
    nodos: [69, 151, 145,154],
  },
  {
    id: 71,
    tipo: "t",
    name: "",
    lat: -12.058653,
    lng: -77.079895,
    nodos: [146, 60, 73], 
  },
  {
    id: 72,
    tipo: "f",
    name: "Facultad de Derecho y Ciencia Politica",
    lat: -12.058660369341844,
    lng: -77.08066807859691,
    nodos: [146,86,67],
  },
  {
    id: 73,
    tipo: "t",
    name: "",
    lat: -12.058268819789669,
    lng: -77.07998426813788,
    nodos: [71,74],
  },
  {
    id: 74,
    tipo: "t",
    name: "",
    lat: -12.058105162659254,
    lng: -77.08002147970817,
    nodos: [73,75],
  },
  {
    id: 75,
    tipo: "t",
    name: "",
    lat: -12.05754527335435,
    lng: -77.08017576133756,
    nodos: [90,76,74],
  },
  {
    id: 76,
    tipo: "f",
    name: "Facultad de Ciencias Contables",
    lat: -12.057663309896478,
    lng: -77.08048287429068,
    nodos: [75,88],
  },
  {
    id: 77,
    tipo: "t",
    name: "",
    lat: -12.057871184338808, 
    lng: -77.08123752354312,
    nodos: [157,84,78,81,88],
  },
  {
    id: 78,
    tipo: "t",
    name: "",
    lat: -12.057572315439723,
    lng: -77.08098618963311,
    nodos: [77,88,79,81],
  },
  {
    id: 79,
    tipo: "t",
    name: "",
    lat: -12.057296254469724,
    lng: -77.08071028042157,
    nodos: [80,78,88,89],
  },
  {
    id: 80,
    tipo: "t",
    name: "",
    lat: -12.057344604151915,
    lng: -77.0810037329999,
    nodos: [79,81],
  },
  {
    id: 81,
    tipo: "t",
    name: "",
    lat: -12.057428459581432, 
    lng: -77.08133831940948,
    nodos: [77,80,82,78,160],
  },
  {
    id: 82,
    tipo: "t",
    name: "",
    lat: -12.0575161674682,
    lng: -77.08171025198695,
    nodos: [81,87,83,95],
  },
  {
    id: 83,
    tipo: "t",
    name: "",
    lat: -12.057942127270602, 
    lng: -77.08159430703608,
    nodos: [157,82,159],
  },
  {
    id: 84,
    tipo: "t",
    name: "",
    lat: -12.058011332857527,
    lng: -77.08124107785528,
    nodos: [77,85,155],
  },
  {
    id: 85,
    tipo: "t",
    name: "",
    lat: -12.058385114416957, 
    lng: -77.08114720053938,
    nodos: [84,86],
  },
  {
    id: 86,
    tipo: "t",
    name: "",
    lat: -12.058752979786933,
    lng: -77.08106912187458,
    nodos: [67,72,145,85],
  },
  {
    id: 87,
    tipo: "t",
    name: "",
    lat: -12.057552042586524,
    lng: -77.08204739042162,
    nodos: [145,82,147],
  },
  {
    id: 88,
    tipo: "t",
    name: "",
    lat: -12.057687693189568, 
    lng: -77.08058106586711,
    nodos: [79,77,76,78],
  },
  {
    id: 89,
    tipo: "t",
    name: "",
    lat: -12.057222124800152,
    lng: -77.08034842736626,
    nodos: [79,90,76,91],
  },
  {
    id: 90,
    tipo: "t",
    name: "",
    lat: -12.057193312171895,
    lng: -77.08025927625998,
    nodos: [89,75,91,141],
  },
  {
    id: 91,
    tipo: "t",
    name: "",
    lat: -12.056579383204841,
    lng: -77.08045462689738,
    nodos: [90,92,89],
  },
  {
    id: 92,
    tipo: "t",
    name: "",
    lat: -12.056443978596798, 
    lng: -77.0807192414873,
    nodos: [91,93,94],
  },
  {
    id: 93,
    tipo: "t",
    name: "",
    lat: -12.056554146490102, 
    lng: -77.08108938631945,
    nodos: [92,94],
  },
  {
    id: 94,
    tipo: "t",
    name: "",
    lat: -12.056168449738665,
    lng: -77.08118830239263,
    nodos: [93,100,92],
  },
  {
    id: 95,
    tipo: "t",
    name: "",
    lat: -12.056798092085655,
    lng: -77.0819537839647,
    nodos: [93,96,147,82],
  },
  {
    id: 96,
    tipo: "t",
    name: "",
    lat: -12.056301025130942,
    lng: -77.0821281275458,
    nodos: [95,97],
  },
  {
    id: 97,
    tipo: "t",
    name: "",
    lat: -12.056076754512471,
    lng: -77.08232929321571,
    nodos: [96,98],
  },
  {
    id: 98,
    tipo: "t",
    name: "",
    lat: -12.055835106689145,
    lng: -77.08261063488365,
    nodos: [97,99],
  },
  {
    id: 99,
    tipo: "t",
    name: "",
    lat: -12.055403578024762,
    lng: -77.0823588328908,
    nodos: [98,100,101],
  },
  {
    id: 100,
    tipo: "t",
    name: "",
    lat: -12.055591624119796, 
    lng: -77.08211668847066,
    nodos: [94,99,161],
  },
  {
    id: 101,
    tipo: "t",
    name: "",
    lat: -12.05530057460704,
    lng: -77.0825183577314,
    nodos: [99,102],
  },
  {
    id: 102,
    tipo: "t",
    name: "",
    lat: -12.055482876992292,
    lng: -77.08279194305584,
    nodos: [101,103],
  },
  {
    id: 103,
    tipo: "t",
    name: "",
    lat: -12.055461892550847,
    lng: -77.08324791856741,
    nodos: [102,104],
  },
  {
    id: 104,
    tipo: "t",
    name: "",
    lat: -12.054787913183313,
    lng: -77.08361541201535,
    nodos: [103,105],
  },
  {
    id: 105,
    tipo: "t",
    name: "",
    lat: -12.054277590248946, 
    lng: -77.08439339110117,
    nodos: [104,106,184],
  },
  {
    id: 106,
    tipo: "t",
    name: "",
    lat: -12.054054601510853,
    lng: -77.08471907206795,
    nodos: [105,107,148,108], 
  },
  {
    id: 107,
    tipo: "t",
    name: "",
    lat: -12.054180508787383,
    lng: -77.08481965491261,
    nodos: [106,163,108,184],
  },
  {
    id: 108,
    tipo: "t",
    name: "",
    lat: -12.053872298148853,
    lng: -77.0849698586124,
    nodos: [106,107,109],
  },
  {
    id: 109,
    tipo: "t",
    name: "",
    lat: -12.053777867581108,
    lng: -77.08513347337093,
    nodos: [108,149,156,126],
  },
  {
    id: 110,
    tipo: "t",
    name: "",
    lat: -12.053695958001079,
    lng: -77.08586644460432,
    nodos: [156,111,174], 
  },
  {
    id: 111,
    tipo: "t",
    name: "",
    lat: -12.053570050487943,
    lng: -77.08617623976711,
    nodos: [110,112],
  },
  {
    id: 112,
    tipo: "t",
    name: "",
    lat: -12.05344518587487, 
    lng: -77.08649390468359,
    nodos: [111,179,180,173,181], 
  },
  {
    id: 113,
    tipo: "t",
    name: "",
    lat: -12.053340764168606,
    lng: -77.087775917711,
    nodos: [179,115,171],
  },
  {
    id: 114,
    tipo: "f",
    name: "Facultad de Ingeniería de Sistemas e Informática",
    lat: -12.053576760575055, 
    lng: -77.08571361571587,
    nodos: [156],
  },
  {
    id: 115,
    tipo: "t",
    name: "",
    lat: -12.053783030021725,
    lng: -77.08782487045552,
    nodos: [113,116],
  },
  {
    id: 116,
    tipo: "t",
    name: "",
    lat: -12.057492653843669,
    lng: -77.08824277476857,
    nodos: [115,117],
  },
  {
    id: 117,
    tipo: "t",
    name: "",
    lat: -12.057600364834814, 
    lng: -77.08706248855103,
    nodos: [116,118,167],
  },
  {
    id: 118,
    tipo: "t",
    name: "",
    lat: -12.057733079122208,
    lng: -77.08633266331833,
    nodos: [117,119],
  },
  {
    id: 119,
    tipo: "t",
    name: "",
    lat: -12.058060361035105,
    lng: -77.08573896059377,
    nodos: [118,120,131],
  },
  {
    id: 120,
    tipo: "t",
    name: "",
    lat: -12.057778775689266,
    lng: -77.08574321887302,
    nodos: [119,121],
  },
  {
    id: 121,
    tipo: "t",
    name: "",
    lat: -12.05741190217583,
    lng: -77.08561510447252,
    nodos: [120,135,122],
  },
  {
    id: 122,
    tipo: "t",
    name: "",
    lat: -12.056402031353485,
    lng: -77.08511621362342,
    nodos: [121,137,123],
  },
  {
    id: 123,
    tipo: "t",
    name: "",
    lat: -12.055655381085545, 
    lng: -77.0848567275576,
    nodos: [122,139],
  },
  {
    id: 124,
    tipo: "t",
    name: "",
    lat: -12.055131771561712, 
    lng: -77.08470227022067,
    nodos: [139,125],
  },
  {
    id: 125,
    tipo: "t",
    name: "",
    lat: -12.054787017721221, 
    lng: -77.08522498532342,
    nodos: [124,126,140,163],
  },
  {
    id: 126,
    tipo: "t",
    name: "",
    lat: -12.055010678275895,  
    lng: -77.08533087760313,
    nodos: [140,125,127,109],
  },
  {
    id: 127,
    tipo: "t",
    name: "",
    lat: -12.054921494235991,
    lng:  -77.0859571734115,
    nodos: [126,128,164,166],
  },
  {
    id: 128,
    tipo: "t",
    name: "",
    lat: -12.054807214588157,
    lng: -77.08664239053562,
    nodos: [180,127,134],
  },
  {
    id: 129,
    tipo: "f",
    name: "Facultad de Ingeniería de Electrónica y Eléctrica",
    lat: -12.055244960648935,
    lng: -77.08683339656083,
    nodos: [134],
  },
  {
    id: 130,
    tipo: "t",
    name: "",
    lat: -12.055875585670432,
    lng: -77.08682581012884, 
    nodos: [134,185,187,169],
  },
  {
    id: 131,
    tipo: "t",
    name: "",
    lat: -12.058521510437952,
    lng: -77.08497389358591,
    nodos: [119,132],
  },
  {
    id: 132,
    tipo: "t",
    name: "",
    lat: -12.058796014626848,
    lng: -77.08476716330597,
    nodos: [131,14,13], 
  },
  {
    id: 133,
    tipo: "t",
    name: "",
    lat: -12.055948845431582,
    lng: -77.08602974104377,
    nodos: [185,164,138,137,182],
  },
  {
    id: 134,
    tipo: "t",
    name: "",
    lat: -12.055260293791537,
    lng: -77.0867539374527,
    nodos: [128,130,129],
  },
  {
    id: 135,
    tipo: "t",
    name: "",
    lat: -12.057179870860594,
    lng: -77.0857904125315,
    nodos: [121,136],
  },
  {
    id: 136,
    tipo: "t",
    name: "",
    lat: -12.056852429973356,
    lng: -77.08568351725782,
    nodos: [137,135,138,182],
  },
  {
    id: 137,
    tipo: "t",
    name: "",
    lat: -12.056296973171298, 
    lng: -77.08527953620941,
    nodos: [133,136,122,123,138],
  },
  {
    id: 138,
    tipo: "t",
    name: "",
    lat: -12.05635675834302,
    lng: -77.08586346902047,
    nodos: [133,136,182,137],
  },
  {
    id: 139,
    tipo: "t",
    name: "",
    lat: -12.05536429224719,
    lng: -77.08479862629784,
    nodos: [124,123,140],
  },
  {
    id: 140,
    tipo: "t",
    name: "",
    lat: -12.055075751562761,
    lng: -77.08518936477995,
    nodos: [139,126,125],
  },
  {
    id: 141,
    tipo: "p",
    name: "Puerta 3",
    lat: -12.057147004285852,
    lng: -77.08006679349334,
    nodos: [90],
  },
  {
    id: 142,
    tipo: "p",
    name: "Puerta 7",
    lat: -12.053816476142014,
    lng: -77.08455090706626,
    nodos: [148],
  },
  {
    id: 143,
    tipo: "p",
    name: "Puerta 8",
    lat: -12.051933870460731,
    lng: -77.08762218215176,
    nodos: [171], 
  },
  {
    id: 144,
    tipo: "t",
    name: "",
    lat: -12.059078698510422, 
    lng: -77.08292070463425,
    nodos: [17,150],
  },
  {
    id: 145,
    tipo: "t",
    name: "",
    lat: -12.058272146450484, 
    lng: -77.08231453710296, 
    nodos: [70,87],
  },
  {
    id: 146,
    tipo: "t",
    name: "",
    lat: -12.058777278452167, 
    lng: -77.08063915394165,
    nodos: [67,86,72,71],
  },
  {
    id: 147,
    tipo: "t",
    name: "",
    lat: -12.056824916539195,  
    lng: -77.08211227675913,
    nodos: [95,87],
  },
  {
    id: 148,
    tipo: "t",
    name: "",
    lat: -12.053881121386102,  
    lng: -77.08463866215341, 
    nodos: [142,106,149],
  },
  {
    id: 149,
    tipo: "t",
    name: "",
    lat: -12.053773124064643,  
    lng: -77.08483467921724, 
    nodos: [109,148],
  },
  {
    id: 150,
    tipo: "t",
    name: "",
    lat: -12.059100508115765,  
    lng: -77.08260837724384,  
    nodos: [144,151,34],
  },
  {
    id: 151,
    tipo: "t",
    name: "",
    lat: -12.059127402061419,  
    lng:  -77.08241018168872,
    nodos: [150,154,70],
  },
  {
    id: 152,
    tipo: "t",
    name: "",
    lat: -12.059463845892997,  
    lng: -77.08260932988581, 
    nodos: [34,35,153],
  },
  {
    id: 153,
    tipo: "t",
    name: "",
    lat: -12.05933494056428, 
    lng: -77.08256001807165,
    nodos: [152,154],
  },
  {
    id: 154,
    tipo: "t",
    name: "",
    lat: -12.059281773428964,  
    lng: -77.0823946632277,
    nodos: [41,151,153,70],
  },
  {
    id: 155,
    tipo: "f",
    name: "Facultad de Ciencias Económicas",
    lat: -12.057995594672734,   
    lng: -77.081192798087,
    nodos: [84],
  },
  {
    id: 156,
    tipo: "t",
    name: "",
    lat: -12.053687585413899,   
    lng: -77.0857015457744, 
    nodos: [110,109,114],
  },
  {
    id: 157,
    tipo: "t",
    name: "",
    lat: -12.057904093367327,   
    lng: -77.08134415433103, 
    nodos: [158,83,77],
  },
  {
    id: 158,
    tipo: "f",
    name: "Facultad de Ciencias Administrativas",
    lat: -12.057815066091772,   
    lng: -77.08137295119627, 
    nodos: [157],
  },
  {
    id: 159,
    tipo: "f",
    name: "Facultad de Ciencias Sociales",
    lat: -12.058118602520286,   
    lng: -77.08159740388129,  
    nodos: [83],
  },
  {
    id: 160,
    tipo: "f",
    name: "Facultad de Letras y Ciencias Humanas",
    lat: -12.057360916396194,    
    lng: -77.08136245928978, 
    nodos: [81],
  },
  {
    id: 161,
    tipo: "f",
    name: "Clínica Universitaria",
    lat: -12.055665069620368,     
    lng: -77.08216362712682, 
    nodos: [100],
  },
  {
    id: 162,
    tipo: "f",
    name: "Facultad de Educación",
    lat: -12.054727445834,     
    lng: -77.08467234083513, 
    nodos: [163,184],
  },
  {
    id: 163,
    tipo: "t",
    name: "",
    lat: -12.054497169229844,   
    lng: -77.08504393622047, 
    nodos: [125,107,162],
  },
  {
    id: 164,
    tipo: "t",
    name: "",
    lat: -12.055510801492382,   
    lng: -77.08600621462676, 
    nodos: [127,133,165],
  },
  {
    id: 165,
    tipo: "f",
    name: "EAP Ingeniería Geográfica",
    lat: -12.055509489964999,   
    lng: -77.08617653489338, 
    nodos: [164],
  },
  {
    id: 166,
    tipo: "f",
    name: "Facultad de Odontología",
    lat: -12.054633092166952,     
    lng: -77.0857763584801,
    nodos: [127],
  },
  {
    id: 167,
    tipo: "t",
    name: "",
    lat: -12.056486761325212, 
    lng: -77.08693011592105,    
    nodos: [187,168,117],
  },
  {
    id: 168,
    tipo: "f",
    name: "EP Ingeniería Mecánica de Fluidos",
    lat: -12.056537786760934,     
    lng: -77.08709060745694,
    nodos: [167], 
  },
  {
    id: 169,
    tipo: "f",
    name: "Escuela de Ingeniería Civil",
    lat: -12.055843993268285, 
    lng: -77.0869564653745,
    nodos: [130],
  },
  {
    id: 170,
    tipo: "f",
    name: "Escuela Profesional de Ingeniería de Minas",
    lat: -12.052229249896307,  
    lng: -77.0873543490622,
    nodos: [171],
  },
  {
    id: 171,
    tipo: "t",
    name: "",
    lat: -12.052200923571144,   
    lng: -77.0876202554163,  
    nodos: [170,143,113],
  },
  {
    id: 172,
    tipo: "f",
    name: "Centro Preuniversitario",
    lat: -12.052179958983091,  
    lng: -77.08532993968419, 
    nodos: [176],
  },
  {
    id: 173,
    tipo: "t",
    name: "",
    lat: -12.052754133416737,    
    lng: -77.08654355726509,
    nodos: [112,174],
  },
  {
    id: 174,
    tipo: "t",
    name: "",
    lat: -12.05261041844276,    
    lng: -77.08603937251726, 
    nodos: [110,173,175,177],
  },
  {
    id: 175,
    tipo: "t",
    name: "",
    lat: -12.052542686258986,  
    lng: -77.08553645833375,  
    nodos: [174,176],
  },
  {
    id: 176,
    tipo: "t",
    name: "",
    lat: -12.052500025848396,  
    lng: -77.08528610606749,   
    nodos: [175,172],
  },
  {
    id: 177,
    tipo: "f",
    name: "Centro Postgrado",
    lat: -12.052466578557928,  
    lng: -77.08607026364174,
    nodos: [174],
  },
  {
    id: 178,
    tipo: "f",
    name: "Facultad de Psicología",
    lat: -12.053567814602058, 
    lng: -77.08679431209761, 
    nodos: [181],
  },
  {
    id: 179,
    tipo: "t",
    name: "",
    lat: -12.053467482006239,   
    lng: -77.08671250471822,  
    nodos: [112,181,113],
  },
  {
    id: 180,
    tipo: "t",
    name: "",
    lat: -12.053892419780647,   
    lng: -77.08652877339941,   
    nodos: [181,112,128],
  },
  {
    id: 181,
    tipo: "t",
    name: "",
    lat: -12.053595356874881, 
    lng:  -77.08667897710967,   
    nodos: [179,112,180,178],
  },
  {
    id: 182,
    tipo: "f",
    name: "Rectorado",
    lat: -12.056489240086483,  
    lng: -77.08636097155323,
    nodos: [133,136,138],
  },
  {
    id: 183,
    tipo: "f",
    name: "Telemática",
    lat: -12.058987433119174,  
    lng: -77.08165497889694, 
    nodos: [68,69],
  },
  {
    id: 184,
    tipo: "t",
    name: "",
    lat: -12.054366774505306,   
    lng: -77.08444569417347,
    nodos: [105,107,162],
  },
  {
    id: 185,
    tipo: "t",
    name: "",
    lat: -12.055931517502994,   
    lng: -77.08626027851133,  
    nodos: [133,130,186], //AAA
  },
  {
    id: 186,
    tipo: "t",
    name: "",
    lat: -12.05631675700933,  
    lng: -77.08648355764494,  
    nodos: [185,187],
  },
  {
    id: 187,
    tipo: "t",
    name: "",
    lat: -12.056255929755636,   
    lng: -77.08688546008541, 
    nodos: [167,130,186],
  },
];
