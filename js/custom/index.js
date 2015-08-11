jQuery(document).ready(function () {
    // Global vars
    var baseMapPath = "http://code.highcharts.com/mapdata/",
    showDataLabels = true,
    mapCount = 0,
    searchText,
    mapOptions = '',
    mapKey = 'countries/pe/pe-all',
    svgPath = baseMapPath + mapKey + '.svg',
    geojsonPath = baseMapPath + mapKey + '.geo.json',
    javascriptPath = baseMapPath + 'countries/pe/pe-all.js';

    
    $('#someregions').hide();

    var jsmap = [
    {
        "key": "pe",
        "region": "Nacional",
        "value": 12.1,
        "taeh": "14.1%",
        "taem": "10.1%",
        "ppnv": "12.1%",
        "ppta": "29.9%",
        "dpea": "1.68",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Sexo",
                        "cat": [
                            {
                                "name": "Hombre",
                                "b": "0.366",
                                "sig": "0.000",
                                "expb": "1.443"
                            }
                        ]
                    },
                    {
                        "name": "Edad",
                        "cat": [
                            {
                                "name": "Edad <= 35 años",
                                "b": "0.376",
                                "sig": "0.000",
                                "expb": "1.456"
                            }
                        ]
                    },
                    {
                        "name": "Ámbito de Residencia",
                        "cat": [
                            {
                                "name": "Ámbito Rural",
                                "b": "0.567",
                                "sig": "0.000",
                                "expb": "1.763"
                            }
                        ]
                    },
                    {
                        "name": "Pobreza",
                        "cat": [
                            {
                                "name": "Pobres",
                                "b": "0.371",
                                "sig": "0.000",
                                "expb": "1.449"
                            }
                        ]
                    },
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.252",
                                "sig": "0.000",
                                "expb": "3.496"
                            }
                        ]
                    },
                    {
                        "name": "Trabajó durante la semana pasada",
                        "cat": [
                            {
                                "name": "No trabaja",
                                "b": "0.785",
                                "sig": "0.000",
                                "expb": "2.193"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Cultura política",
                "vars": [
                    {
                        "name": "Tipo de Gobierno",
                        "cat": [
                            {
                                "name": "Autoritario /da lo mismo / no sabe",
                                "b": "0.224",
                                "sig": "0.000",
                                "expb": "1.251"
                            }
                        ]
                    },
                    {
                        "name": "Frecuencia que se informa sobre la actualidad Política",
                        "cat": [
                            {
                                "name": "Nunca / casi nunca / solo cuando le interesa",
                                "b": "0.485",
                                "sig": "0.000",
                                "expb": "1.623"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "0.841",
                                "sig": "0.000",
                                "expb": "2.318"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-am",
        "region": "Amazonas",
        "value": 16.9,
        "taeh": "19.3%",
        "taem": "14.5%",
        "ppnv": "1.7%",
        "ppta": "56.8%",
        "dpea": "0.97",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.042",
                                "sig": "0.000",
                                "expb": "2.834"
                            }
                        ]
                    },
                    {
                        "name": "Edad",
                        "cat": [
                            {
                                "name": "Edad <=  35 años",
                                "b": "0.910",
                                "sig": "0.000",
                                "expb": "2.485"
                            }
                        ]
                    },
                    {
                        "name": "Pobreza",
                        "cat": [
                            {
                                "name": "Pobres",
                                "b": "0.802",
                                "sig": "0.001",
                                "expb": "2.231"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Cultura política",
                "vars": [
                    {
                        "name": "Tipo de Gobierno",
                        "cat": [
                            {
                                "name": "Autoritario /da lo mismo / no sabe",
                                "b": "0.710",
                                "sig": "0.003",
                                "expb": "2.034"
                            }
                        ]
                    },
                    {
                        "name": "Interés por la Política",
                        "cat": [
                            {
                                "name": "Le es indiferente / no le importa",
                                "b": "0.533",
                                "sig": "0.024",
                                "expb": "1.703"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-an",
        "region": "Ancash",
        "value": 13.5,
        "taeh": "16.5%",
        "taem": "10.4%",
        "ppnv": "4.1%",
        "ppta": "29.6%",
        "dpea": "2.22",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.655",
                                "sig": "0.000",
                                "expb": "5.234"
                            }
                        ]
                    },
                    {
                        "name": "Trabajó durante la semana pasada",
                        "cat": [
                            {
                                "name": "No trabaja",
                                "b": "0.979",
                                "sig": "0.000",
                                "expb": "2.663"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "1.262",
                                "sig": "0.000",
                                "expb": "3.531"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Cultura política",
                "vars": [
                    {
                        "name": "Tipo de Gobierno",
                        "cat": [
                            {
                                "name": "Autoritario /da lo mismo / no sabe",
                                "b": "0.758",
                                "sig": "0.000",
                                "expb": "2.134"
                            }
                        ]
                    },
                    {
                        "name": "Frecuencia que se informa sobre la actualidad Política",
                        "cat": [
                            {
                                "name": "Nunca / casi nunca / solo cuando le interesa",
                                "b": "0.611",
                                "sig": "0.001",
                                "expb": "1.843"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-ap",
        "region": "Apurímac",
        "value": 14.2,
        "taeh": "16.5%",
        "taem": "12.1%",
        "ppnv": "1.4%",
        "ppta": "59.1%",
        "dpea": "1.52",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.808",
                                "sig": "0.000",
                                "expb": "6.096"
                            }
                        ]
                    },
                    {
                        "name": "Trabajó durante la semana pasada",
                        "cat": [
                            {
                                "name": "No trabaja",
                                "b": "0.767",
                                "sig": "0.004",
                                "expb": "2.153"
                            }
                        ]
                    },
                    {
                        "name": "Edad",
                        "cat": [
                            {
                                "name": "Edad <=  35 años",
                                "b": "0.710",
                                "sig": "0.008",
                                "expb": "2.034"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "0.991",
                                "sig": "0.004",
                                "expb": "2.693"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-ar",
        "region": "Arequipa",
        "value": 9.5,
        "taeh": "11.2%",
        "taem": "7.9%",
        "ppnv": "3.6%",
        "ppta": "14.0%",
        "dpea": "1.25",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.376",
                                "sig": "0.000",
                                "expb": "3.958"
                            }
                        ]
                    },
                    {
                        "name": "Trabajó durante la semana pasada",
                        "cat": [
                            {
                                "name": "No trabaja",
                                "b": "1.157",
                                "sig": "0.000",
                                "expb": "3.181"
                            }
                        ]
                    },
                    {
                        "name": "Pobreza",
                        "cat": [
                            {
                                "name": "Pobres",
                                "b": "0.661",
                                "sig": "0.005",
                                "expb": "1.937"
                            }
                        ]
                    },
                    {
                        "name": "Ámbito de Residencia",
                        "cat": [
                            {
                                "name": "Ámbito Rural",
                                "b": "0.602",
                                "sig": "0.005",
                                "expb": "1.825"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Cultura política",
                "vars": [
                    {
                        "name": "Interés por la Política",
                        "cat": [
                            {
                                "name": "Le es indiferente / no le importa",
                                "b": "0.568",
                                "sig": "0.000",
                                "expb": "1.765"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "0.549",
                                "sig": "0.002",
                                "expb": "1.732"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-ay",
        "region": "Ayacucho",
        "value": 13.9,
        "taeh": "16.3%",
        "taem": "11.8%",
        "ppnv": "2.0%",
        "ppta": "34.8%",
        "dpea": "1.08",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.582",
                                "sig": "0.000",
                                "expb": "4.865"
                            }
                        ]
                    },
                    {
                        "name": "Ámbito de Residencia",
                        "cat": [
                            {
                                "name": "Ámbito Rural",
                                "b": "0.789",
                                "sig": "0.003",
                                "expb": "2.200"
                            }
                        ]
                    },
                    {
                        "name": "Trabajó durante la semana pasada",
                        "cat": [
                            {
                                "name": "No trabaja",
                                "b": "0.525",
                                "sig": "0.043",
                                "expb": "1.691"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "1.243",
                                "sig": "0.000",
                                "expb": "3.466"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-cj",
        "region": "Cajamarca",
        "value": 12.3,
        "taeh": "14.2%",
        "taem": "10.5%",
        "ppnv": "4.8%",
        "ppta": "60.7%",
        "dpea": "3.15",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.403",
                                "sig": "0.000",
                                "expb": "4.069"
                            }
                        ]
                    },
                    {
                        "name": "Trabajó durante la semana pasada",
                        "cat": [
                            {
                                "name": "No trabaja",
                                "b": "0.971",
                                "sig": "0.000",
                                "expb": "2.641"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Tuvo algún accidente, en las últimas semanas",
                        "cat": [
                            {
                                "name": "Accidente",
                                "b": "1.350",
                                "sig": "0.027",
                                "expb": "3.856"
                            }
                        ]
                    },
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "0.831",
                                "sig": "0.000",
                                "expb": "2.295"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-3341",
        "region": "Callao",
        "value": 11.1,
        "taeh": "12.7%",
        "taem": "9.5%",
        "ppnv": "3.2%",
        "ppta": "20.6%",
        "dpea": "190.00",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.192",
                                "sig": "0.000",
                                "expb": "3.294"
                            }
                        ]
                    },
                    {
                        "name": "Trabajó durante la semana pasada",
                        "cat": [
                            {
                                "name": "No trabaja",
                                "b": "0.656",
                                "sig": "0.000",
                                "expb": "1.928"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Tuvo algún accidente, en las últimas semanas",
                        "cat": [
                            {
                                "name": "Accidente",
                                "b": "1.925",
                                "sig": "0.000",
                                "expb": "6.853"
                            }
                        ]
                    },
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "1.467",
                                "sig": "0.000",
                                "expb": "4.335"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Cultura política",
                "vars": [
                    {
                        "name": "Confianza en Partidos Políticos",
                        "cat": [
                            {
                                "name": "Poca / nada / no sabe",
                                "b": "0.798",
                                "sig": "0.073",
                                "expb": "2.220"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-cs",
        "region": "Cusco",
        "value": 13.0,
        "taeh": "15.6%",
        "taem": "10.0%",
        "ppnv": "4.5%",
        "ppta": "34.7%",
        "dpea": "1.33",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.241",
                                "sig": "0.000",
                                "expb": "3.460"
                            }
                        ]
                    },
                    {
                        "name": "Ámbito de Residencia",
                        "cat": [
                            {
                                "name": "Ámbito Rural",
                                "b": "1.137",
                                "sig": "0.000",
                                "expb": "3.118"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Cultura política",
                "vars": [
                    {
                        "name": "Frecuencia que se informa sobre la actualidad Política",
                        "cat": [
                            {
                                "name": "Nunca / casi nunca / solo cuando le interesa",
                                "b": "0.714",
                                "sig": "0.000",
                                "expb": "2.042"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "0.674",
                                "sig": "0.000",
                                "expb": "1.963"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-hv",
        "region": "Huancavelica",
        "value": 14.0,
        "taeh": "14.0%",
        "taem": "14.1%",
        "ppnv": "1.5%",
        "ppta": "39.2%",
        "dpea": "1.33",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "2.114",
                                "sig": "0.000",
                                "expb": "8.283"
                            }
                        ]
                    },
                    {
                        "name": "Trabajó durante la semana pasada",
                        "cat": [
                            {
                                "name": "No trabaja",
                                "b": "0.917",
                                "sig": "0.008",
                                "expb": "2.501"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Cultura política",
                "vars": [
                    {
                        "name": "Frecuencia que se informa sobre la actualidad Política",
                        "cat": [
                            {
                                "name": "Nunca / casi nunca / solo cuando le interesa",
                                "b": "0.966",
                                "sig": "0.009",
                                "expb": "2.627"
                            }
                        ]
                    },
                    {
                        "name": "Tipo de Gobierno",
                        "cat": [
                            {
                                "name": "Autoritario /da lo mismo / no sabe",
                                "b": "0.791",
                                "sig": "0.008",
                                "expb": "2.205"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-hc",
        "region": "Huánuco",
        "value": 18.4,
        "taeh": "19.4%",
        "taem": "17.1%",
        "ppnv": "3.6%",
        "ppta": "61.0%",
        "dpea": "1.84",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "0.917",
                                "sig": "0.000",
                                "expb": "2.503"
                            }
                        ]
                    },
                    {
                        "name": "Ámbito de Residencia",
                        "cat": [
                            {
                                "name": "Ámbito Rural",
                                "b": "0.548",
                                "sig": "0.005",
                                "expb": "1.730"
                            }
                        ]
                    },
                    {
                        "name": "Pobreza",
                        "cat": [
                            {
                                "name": "Pobres",
                                "b": "0.537",
                                "sig": "0.004",
                                "expb": "1.710"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "0.917",
                                "sig": "0.000",
                                "expb": "2.502"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Cultura política",
                "vars": [
                    {
                        "name": "Tipo de Gobierno",
                        "cat": [
                            {
                                "name": "Autoritario /da lo mismo / no sabe",
                                "b": "0.679",
                                "sig": "0.000",
                                "expb": "1.972"
                            }
                        ]
                    },
                    {
                        "name": "Frecuencia que se informa sobre la actualidad Política",
                        "cat": [
                            {
                                "name": "Nunca / casi nunca / solo cuando le interesa",
                                "b": "0.624",
                                "sig": "0.006",
                                "expb": "1.867"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-ic",
        "region": "Ica",
        "value": 7.4,
        "taeh": "10.0%",
        "taem": "5.0%",
        "ppnv": "1.6%",
        "ppta": "9.0%",
        "dpea": "1.73",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.397",
                                "sig": "0.000",
                                "expb": "4.041"
                            }
                        ]
                    },
                    {
                        "name": "Trabajó durante la semana pasada",
                        "cat": [
                            {
                                "name": "No trabaja",
                                "b": "0.777",
                                "sig": "0.000",
                                "expb": "2.174"
                            }
                        ]
                    },
                    {
                        "name": "Sexo",
                        "cat": [
                            {
                                "name": "Hombre",
                                "b": "0.635",
                                "sig": "0.003",
                                "expb": "1.886"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "1.115",
                                "sig": "0.001",
                                "expb": "3.050"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-ju",
        "region": "Junin",
        "value": 14.9,
        "taeh": "16.7%",
        "taem": "13.2%",
        "ppnv": "5.2%",
        "ppta": "22.8%",
        "dpea": "2.56",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.379",
                                "sig": "0.000",
                                "expb": "3.969"
                            }
                        ]
                    },
                    {
                        "name": "Trabajó durante la semana pasada",
                        "cat": [
                            {
                                "name": "No trabaja",
                                "b": "1.112",
                                "sig": "0.000",
                                "expb": "3.041"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "1.003",
                                "sig": "0.000",
                                "expb": "2.727"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Cultura política",
                "vars": [
                    {
                        "name": "Frecuencia que se informa sobre la actualidad Política",
                        "cat": [
                            {
                                "name": "Nunca / casi nunca / solo cuando le interesa",
                                "b": "0.554",
                                "sig": "0.000",
                                "expb": "1.740"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-ll",
        "region": "La Libertad",
        "value": 11.2,
        "taeh": "12.9%",
        "taem": "9.6%",
        "ppnv": "5.5%",
        "ppta": "39.0%",
        "dpea": "5.02",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "0.945",
                                "sig": "0.000",
                                "expb": "2.574"
                            }
                        ]
                    },
                    {
                        "name": "Trabajó durante la semana pasada",
                        "cat": [
                            {
                                "name": "No trabaja",
                                "b": "0.718",
                                "sig": "0.000",
                                "expb": "2.050"
                            }
                        ]
                    },
                    {
                        "name": "Ámbito de Residencia",
                        "cat": [
                            {
                                "name": "Ámbito Rural",
                                "b": "0.596",
                                "sig": "0.000",
                                "expb": "1.815"
                            }
                        ]
                    },
                    {
                        "name": "Pobreza",
                        "cat": [
                            {
                                "name": "Pobres",
                                "b": "0.453",
                                "sig": "0.002",
                                "expb": "1.574"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-lb",
        "region": "Lambayeque",
        "value": 12.3,
        "taeh": "15.5%",
        "taem": "9.2%",
        "ppnv": "4.2%",
        "ppta": "28.6%",
        "dpea": "5.85",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "0.995",
                                "sig": "0.000",
                                "expb": "2.705"
                            }
                        ]
                    },
                    {
                        "name": "Ámbito de Residencia",
                        "cat": [
                            {
                                "name": "Ámbito Rural",
                                "b": "0.950",
                                "sig": "0.000",
                                "expb": "2.586"
                            }
                        ]
                    },
                    {
                        "name": "Trabajó durante la semana pasada",
                        "cat": [
                            {
                                "name": "No trabaja",
                                "b": "0.699",
                                "sig": "0.000",
                                "expb": "2.011"
                            }
                        ]
                    },
                    {
                        "name": "Edad",
                        "cat": [
                            {
                                "name": "Edad <=  35 años",
                                "b": "0.691",
                                "sig": "0.000",
                                "expb": "1.997"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Cultura política",
                "vars": [
                    {
                        "name": "Frecuencia que se informa sobre la actualidad Política",
                        "cat": [
                            {
                                "name": "Nunca / casi nunca / solo cuando le interesa",
                                "b": "0.915",
                                "sig": "0.000",
                                "expb": "2.496"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-145",
        "region": "",
        "value": 11.2,
        "taeh": "12.6%",
        "taem": "9.8%",
        "ppnv": "31.8%",
        "ppta": "17.8%",
        "dpea": "190.00",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.431",
                                "sig": "0.000",
                                "expb": "4.183"
                            }
                        ]
                    },
                    {
                        "name": "Trabajó durante la semana pasada",
                        "cat": [
                            {
                                "name": "No trabaja",
                                "b": "1.122",
                                "sig": "0.000",
                                "expb": "3.070"
                            }
                        ]
                    },
                    {
                        "name": "Pobreza",
                        "cat": [
                            {
                                "name": "Pobres",
                                "b": "0.564",
                                "sig": "0.000",
                                "expb": "1.757"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "1.162",
                                "sig": "0.000",
                                "expb": "3.196"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-lr",
        "region": "Lima",
        "value": 11.2,
        "taeh": "12.6%",
        "taem": "9.8%",
        "ppnv": "31.8%",
        "ppta": "17.8%",
        "dpea": "190.00",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.431",
                                "sig": "0.000",
                                "expb": "4.183"
                            }
                        ]
                    },
                    {
                        "name": "Trabajó durante la semana pasada",
                        "cat": [
                            {
                                "name": "No trabaja",
                                "b": "1.122",
                                "sig": "0.000",
                                "expb": "3.070"
                            }
                        ]
                    },
                    {
                        "name": "Pobreza",
                        "cat": [
                            {
                                "name": "Pobres",
                                "b": "0.564",
                                "sig": "0.000",
                                "expb": "1.757"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "1.162",
                                "sig": "0.000",
                                "expb": "3.196"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-lo",
        "region": "Loreto",
        "value": 18.4,
        "taeh": "22.9%",
        "taem": "13.4%",
        "ppnv": "4.4%",
        "ppta": "44.1%",
        "dpea": "0.25",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "0.809",
                                "sig": "0.000",
                                "expb": "2.245"
                            }
                        ]
                    },
                    {
                        "name": "Sexo",
                        "cat": [
                            {
                                "name": "Hombre",
                                "b": "0.696",
                                "sig": "0.000",
                                "expb": "2.006"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "0.870",
                                "sig": "0.000",
                                "expb": "2.387"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Cultura política",
                "vars": [
                    {
                        "name": "Frecuencia que se informa sobre la actualidad Política",
                        "cat": [
                            {
                                "name": "Nunca / casi nunca / solo cuando le interesa",
                                "b": "0.523",
                                "sig": "0.004",
                                "expb": "1.687"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-md",
        "region": "Madre de Dios",
        "value": 18.4,
        "taeh": "20.4%",
        "taem": "16.0%",
        "ppnv": "0.6%",
        "ppta": "2.6%",
        "dpea": "0.13",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.457",
                                "sig": "0.000",
                                "expb": "4.295"
                            }
                        ]
                    },
                    {
                        "name": "Trabajó durante la semana pasada",
                        "cat": [
                            {
                                "name": "No trabaja",
                                "b": "0.748",
                                "sig": "0.135",
                                "expb": "2.113"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Cultura política",
                "vars": [
                    {
                        "name": "Confianza en Partidos Políticos",
                        "cat": [
                            {
                                "name": "Poca / nada / no sabe",
                                "b": "0.590",
                                "sig": "0.463",
                                "expb": "1.805"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-mq",
        "region": "Moquegua",
        "value": 8.4,
        "taeh": "10.5%",
        "taem": "6.0%",
        "ppnv": "0.5%",
        "ppta": "14.7%",
        "dpea": "0.65",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.494",
                                "sig": "0.000",
                                "expb": "4.456"
                            }
                        ]
                    },
                    {
                        "name": "Pobreza",
                        "cat": [
                            {
                                "name": "Pobres",
                                "b": "1.309",
                                "sig": "0.032",
                                "expb": "3.704"
                            }
                        ]
                    },
                    {
                        "name": "Edad",
                        "cat": [
                            {
                                "name": "Edad <=  35 años",
                                "b": "0.820",
                                "sig": "0.044",
                                "expb": "2.272"
                            }
                        ]
                    },
                    {
                        "name": "Trabajó durante la semana pasada",
                        "cat": [
                            {
                                "name": "No trabaja",
                                "b": "0.753",
                                "sig": "0.072",
                                "expb": "2.123"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-pa",
        "region": "Pasco",
        "value": 16.7,
        "taeh": "19.9%",
        "taem": "12.8%",
        "ppnv": "1.2%",
        "ppta": "36.1%",
        "dpea": "0.98",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.484",
                                "sig": "0.000",
                                "expb": "4.409"
                            }
                        ]
                    },
                    {
                        "name": "Trabajó durante la semana pasada",
                        "cat": [
                            {
                                "name": "No trabaja",
                                "b": "1.328",
                                "sig": "0.072",
                                "expb": "3.772"
                            }
                        ]
                    },
                    {
                        "name": "Edad",
                        "cat": [
                            {
                                "name": "Edad <=  35 años",
                                "b": "0.692",
                                "sig": "0.036",
                                "expb": "1.997"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "0.929",
                                "sig": "0.005",
                                "expb": "2.532"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-pi",
        "region": "Piura",
        "value": 10.6,
        "taeh": "12.5%",
        "taem": "8.6%",
        "ppnv": "4.9%",
        "ppta": "42.2%",
        "dpea": "3.02",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.472",
                                "sig": "0.000",
                                "expb": "4.357"
                            }
                        ]
                    },
                    {
                        "name": "Ámbito de Residencia",
                        "cat": [
                            {
                                "name": "Ámbito Rural",
                                "b": "0.668",
                                "sig": "0.000",
                                "expb": "1.951"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Cultura política",
                "vars": [
                    {
                        "name": "Frecuencia que se informa sobre la actualidad Política",
                        "cat": [
                            {
                                "name": "Nunca / casi nunca / solo cuando le interesa",
                                "b": "0.963",
                                "sig": "0.000",
                                "expb": "2.620"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-cl",
        "region": "Puno",
        "value": 9.1,
        "taeh": "11.5%",
        "taem": "6.8%",
        "ppnv": "3.0%",
        "ppta": "47.3%",
        "dpea": "0.90",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.373",
                                "sig": "0.000",
                                "expb": "3.946"
                            }
                        ]
                    },
                    {
                        "name": "Ámbito de Residencia",
                        "cat": [
                            {
                                "name": "Ámbito Rural",
                                "b": "0.814",
                                "sig": "0.000",
                                "expb": "2.257"
                            }
                        ]
                    },
                    {
                        "name": "Edad",
                        "cat": [
                            {
                                "name": "Edad <=  35 años",
                                "b": "0.757",
                                "sig": "0.000",
                                "expb": "2.131"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "1.157",
                                "sig": "0.000",
                                "expb": "3.179"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Cultura política",
                "vars": [
                    {
                        "name": "Frecuencia que se informa sobre la actualidad Política",
                        "cat": [
                            {
                                "name": "Nunca / casi nunca / solo cuando le interesa",
                                "b": "0.990",
                                "sig": "0.000",
                                "expb": "2.691"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-sm",
        "region": "San Martin",
        "value": 14.7,
        "taeh": "15.6%",
        "taem": "13.6%",
        "ppnv": "2.9%",
        "ppta": "27.9%",
        "dpea": "1.23",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.263",
                                "sig": "0.000",
                                "expb": "3.535"
                            }
                        ]
                    },
                    {
                        "name": "Edad",
                        "cat": [
                            {
                                "name": "Edad <=  35 años",
                                "b": "0.872",
                                "sig": "0.000",
                                "expb": "2.391"
                            }
                        ]
                    },
                    {
                        "name": "Ámbito de Residencia",
                        "cat": [
                            {
                                "name": "Ámbito Rural",
                                "b": "0.731",
                                "sig": "0.000",
                                "expb": "2.077"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "0.878",
                                "sig": "0.000",
                                "expb": "2.406"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Cultura política",
                "vars": [
                    {
                        "name": "Frecuencia que se informa sobre la actualidad Política",
                        "cat": [
                            {
                                "name": "Nunca / casi nunca / solo cuando le interesa",
                                "b": "0.732",
                                "sig": "0.001",
                                "expb": "2.079"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-ta",
        "region": "Tacna",
        "value": 9.8,
        "taeh": "11.1%",
        "taem": "8.3%",
        "ppnv": "1.0%",
        "ppta": "7.7%",
        "dpea": "1.15",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.558",
                                "sig": "0.000",
                                "expb": "4.750"
                            }
                        ]
                    },
                    {
                        "name": "Edad",
                        "cat": [
                            {
                                "name": "Edad <=  35 años",
                                "b": "1.530",
                                "sig": "0.000",
                                "expb": "4.616"
                            }
                        ]
                    },
                    {
                        "name": "Trabajó durante la semana pasada",
                        "cat": [
                            {
                                "name": "No trabaja",
                                "b": "0.954",
                                "sig": "0.003",
                                "expb": "2.595"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Cultura política",
                "vars": [
                    {
                        "name": "Confianza en Partidos Políticos",
                        "cat": [
                            {
                                "name": "Poca / nada / no sabe",
                                "b": "1.866",
                                "sig": "0.114",
                                "expb": "6.465"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "1.774",
                                "sig": "0.000",
                                "expb": "5.896"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-tu",
        "region": "Tumbes",
        "value": 11.2,
        "taeh": "14.4%",
        "taem": "7.8%",
        "ppnv": "0.7%",
        "ppta": "11.1%",
        "dpea": "3.25",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "1.031",
                                "sig": "0.004",
                                "expb": "2.803"
                            }
                        ]
                    },
                    {
                        "name": "Edad",
                        "cat": [
                            {
                                "name": "Edad <=  35 años",
                                "b": "0.774",
                                "sig": "0.030",
                                "expb": "2.168"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Cultura política",
                "vars": [
                    {
                        "name": "Frecuencia que se informa sobre la actualidad Política",
                        "cat": [
                            {
                                "name": "Nunca / casi nunca / solo cuando le interesa",
                                "b": "0.762",
                                "sig": "0.049",
                                "expb": "2.143"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Tuvo algún accidente, en las últimas semanas",
                        "cat": [
                            {
                                "name": "Accidente",
                                "b": "1.054",
                                "sig": "0.418",
                                "expb": "2.868"
                            }
                        ]
                    },
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "0.669",
                                "sig": "0.102",
                                "expb": "1.953"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "key": "pe-uc",
        "region": "Ucayali",
        "value": 18.2,
        "taeh": "21.6%",
        "taem": "14.4%",
        "ppnv": "2.1%",
        "ppta": "22.9%",
        "dpea": "0.46",
        "factores": [
            {
                "name": "Sociodemográfico",
                "vars": [
                    {
                        "name": "Ámbito de Residencia",
                        "cat": [
                            {
                                "name": "Ámbito Rural",
                                "b": "1.013",
                                "sig": "0.000",
                                "expb": "2.754"
                            }
                        ]
                    },
                    {
                        "name": "Estado Civil",
                        "cat": [
                            {
                                "name": "No unión",
                                "b": "0.898",
                                "sig": "0.00",
                                "expb": "2.456"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Cultura política",
                "vars": [
                    {
                        "name": "Confianza en Partidos Políticos",
                        "cat": [
                            {
                                "name": "Poca / nada / no sabe",
                                "b": "0.967",
                                "sig": "0.060",
                                "expb": "2.631"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Coyuntural",
                "vars": [
                    {
                        "name": "Dificultades económicas",
                        "cat": [
                            {
                                "name": "Muy mal, Mal / no saben",
                                "b": "0.640",
                                "sig": "0.003",
                                "expb": "1.897"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];


    //Init
    var map = getUrlParameter('map');
    if (map !== undefined){
        if (map == '1'){
            LoadMapa();
        } else if (map == '2'){
            LoadMapaCustom();
        }
    } else {
        LoadMapa();    
    }
    



    // Custom Functions
    function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }

    function LoadMapa() {
        if (Highcharts.maps[mapKey]) {
            mapReady();
        } else {
            $.getScript(javascriptPath, mapReady);
        }
    }

    function mapReady() {
        var mapGeoJSON = Highcharts.maps[mapKey],
        data = [];

         $.each(jsmap, function (i, item) {
            if (jsmap[i].key == 'pe') {
                showinfo(jsmap[i], jsmap[i].region);
                LoadFact(jsmap[i], jsmap[i].region);
            } else {
                data.push(jsmap[i]);
            }
        });

        $("#container").highcharts('Map', {
            title: {
                text: null
            },
            mapNavigation: {
                 enabled: true
            },
            colorAxis: {
                dataClasses: [{
                        color: 'yellow',
                        from: 7.4,
                        to: 11.4,
                        name: "7,4% - 11,4%"
                    }, {
                        color: 'green',
                        from: 11.5,
                        to: 15.5,
                        name: "11,5% - 15,5%"
                    }, {
                        color:'red',
                        from: 15.6,
                        to: 19.6,
                        name: "15,6% - 19,6%"
                    }]
            },
            legend: {
                enabled: true
            },
            series: [{
                data: data,
                mapData: mapGeoJSON,
                joinBy: ['hc-key', 'key'],
                name: 'TAE (%)',
                allowPointSelect: true,
                cursor: 'pointer',
                states: {
                    hover: {
                        color: Highcharts.getOptions().colors[1]
                    },
                    select: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                tooltip: {
                    pointFormat: '{point.region}: {point.value}%'
                },
                dataLabels: {
                    enabled: showDataLabels,
                    formatter: function () {
                        return mapKey === 'custom/world' || mapKey === 'countries/us/us-all' ?
                        (this.point.properties && this.point.properties['hc-a2']) :
                        this.point.region;
                    }
                },
                point: {
                    events: {
                        // On click, look for a detailed map
                        select: function (point) {
                            /*$('#splash').fadeIn('slow', function () {
                                var $this = $(this);
                                setTimeout(function () { $this.fadeOut(); }, 1000);
                            });*/
                            var chart = $('#container').highcharts(),
                                selectedPoints = chart.getSelectedPoints();
                                if (selectedPoints.length <= 1) {
                                    showinfo(point.currentTarget.options, point.currentTarget.region);
                                    LoadFact(point.currentTarget.options, point.currentTarget.region);
                                } 
                        },
                        mouseOver: function (point) {
                            /*showinfo(point.currentTarget.options, point.currentTarget.region);*/
                        }
                    }
                }
            }
            ]
        });
    }

    function LoadMapaCustom() {

         if (Highcharts.maps[mapKey]) {
            mapReadyCustom();
        } else {
            $.getScript(javascriptPath, mapReadyCustom);
        }
    }

    function mapReadyCustom() {    

        var mapGeoJSON = Highcharts.maps[mapKey],
        data = [];

        $.each(jsmap, function (i, item) {
            if (jsmap[i].key == 'pe') {
                showinfo(jsmap[i], jsmap[i].region);
                LoadFact(jsmap[i], jsmap[i].region);
            } else {
                data.push(jsmap[i]);
            }
        });

        $("#container").highcharts('Map', {
            title: {
                text: null
            },
            mapNavigation: {
                enabled: true
            },
            colorAxis: {
                dataClasses: [{
                        color: '#8ACED1',
                        from: 7.4,
                        to: 9.8,
                        name: "7,4% - 9,8%"
                    }, {
                        color: '#5AC8A0',
                        from: 10.6,
                        to: 12.3,
                        name: "10,6% - 12,3%"
                    }, {
                        color:'#F78101',
                        from: 13.0,
                        to: 14.7,
                        name: "13,0% - 14,7%"
                    }, {
                        color:'red',
                        from: 14.9,
                        to: 18.4,
                        name: "14,9% - 18,4%"
                    }]
            },
            legend: {
                enabled: true
            },
            series: [{
                data: data,
                mapData: mapGeoJSON,
                joinBy: ['hc-key', 'key'],
                name: 'TAE (%)',
                allowPointSelect: true,
                cursor: 'pointer',
                states: {
                    hover: {
                        color: Highcharts.getOptions().colors[1]
                    },
                    select: {
                        color: Highcharts.getOptions().colors[1]
                    },
                    normal: {
                        animation: false
                    }
                },
                tooltip: {
                    pointFormat: '{point.region}: {point.value}%'
                },
                dataLabels: {
                    enabled: showDataLabels,
                    formatter: function () {
                        return mapKey === 'custom/world' || mapKey === 'countries/us/us-all' ?
                        (this.point.properties && this.point.properties['hc-a2']) :
                        this.point.region;
                    }
                },
                point: {
                    events: {
                        // On click, look for a detailed map
                        click: function (point) {
                            /*$('#splash').fadeIn('slow', function () {
                                var $this = $(this);
                                setTimeout(function () { $this.fadeOut(); }, 1000);
                            });*/
                            var chart = $('#container').highcharts(),
                                selectedPoints = chart.getSelectedPoints();
                                if (selectedPoints.length  <= 1) {
                                    showinfo(point.currentTarget.options, point.currentTarget.region);
                                    LoadFact(point.currentTarget.options, point.currentTarget.region);
                                } else {
                                    showTableselectedPoints();        
                                }
                            
                            
                        },
                        mouseOver: function (point) {
                            /*showinfo(point.currentTarget.options, point.currentTarget.region);*/
                        }
                    }
                }
            }
            ]
        });

    }

    function showinfo(data, region) {
        $('#hinfogral').html("Informaci&oacute;n General");
        $('#hRegion').show();
        $('#hRegion').html("<b>"+region+"<b>");
        $('#pTAE').html(data.value+"%");
        $('#pTAEh').html(data.taeh);
        $('#pTAEm').html(data.taem);
        $('#pPPNV').html(data.ppnv);
        $('#pPPTA').html(data.ppta);
        $('#pDPEA').html(data.dpea);

    }
    function LoadFact(data, region) {
        $('#hinfofact').html("Factores");
        $('#hdreg').val(data.key);
        var html = "<tr>";
            $.each(data.factores, function (i, item) {
                html += "<td rowspan="+item.vars.length+">"+item.name+"</td>";                
                $.each(item.vars, function (i, item) {
                    if (i == 0){
                        html += "<td>"+item.name+"</td>";
                        $.each(item.cat, function (i, item) {
                            html += "<td>"+item.name+"</td>";
                            html += "<td>"+item.b+"</td>";
                            html += "<td>"+item.sig+"</td>";
                            html += "<td>"+item.expb+"</td>";
                        });
                        html += "</tr>"
                    }else{
                        html += "<tr>";
                        html += "<td>"+item.name+"</td>";
                        $.each(item.cat, function (i, item) {
                            html += "<td>"+item.name+"</td>";
                            html += "<td>"+item.b+"</td>";
                            html += "<td>"+item.sig+"</td>";
                            html += "<td>"+item.expb+"</td>";
                        });
                        html += "</tr>"
                    }
                });
                html += "</tr>";
            });
        html += "</tr>";
        $('#factbody').html(html);
    }
    

    $('#dvreloadmap').click(function (e) {
        /*$('#splash').fadeIn('slow', function () {
            var $this = $(this);
            setTimeout(function () { $this.fadeOut(); }, 1000);
        });

        if (Highcharts.maps[mapKey]) {
            mapReady();
        } else {
            $.getScript(javascriptPath, mapReady);
        }*/
        window.location.href="index.html?map=1";
    });

    function showTableselectedPoints(){
        $('#splash').fadeIn('slow', function () {
            var $this = $(this);
            setTimeout(function () { $this.fadeOut(); }, 1000);
        });
        var chart = $('#container').highcharts(),
            selectedPoints = chart.getSelectedPoints();
            console.log(selectedPoints);
        var html = "";
            $.each(selectedPoints, function (i, item) {
                html += "<tr>";
                html += "<td>"+item.region+"</td>";                
                html += "<td>"+item.value+"%</td>"; 
                html += "<td>"+item.taeh+"</td>";                
                html += "<td>"+item.taem+"</td>";                
                html += "<td>"+item.ppnv+"</td>";                
                html += "<td>"+item.ppta+"</td>";                
                html += "<td>"+item.dpea+"</td>";                
                html += "</tr>";
            });
        $('#fact').html(html);
        $('#oneregion').hide();
        $('#hRegion').hide();
        $('#someregions').show();
    }

    $('#getselectedpoints').click(function () {
        showTableselectedPoints();
    });
    $('#dvloadcustomap').click(function (e) {
        /*$('#splash').fadeIn('slow', function () {
            var $this = $(this);
            setTimeout(function () { $this.fadeOut(); }, 1000);
        });

        if (Highcharts.maps[mapKey]) {
            mapReadyCustom();
        } else {
            $.getScript(javascriptPath, mapReadyCustom);
        }*/
        window.location.href="index.html?map=2";
    });

    $(".syncronize .themes-choice > a, .unsyncronize .themes-navbar > a").on("click", function (o) {
        o.preventDefault();
        var u = $(this).attr("data-theme");
        $.each($(".widget"), function () {
            var e = $(this),
                t = e.find(".widget-header"),
                n = e.find(".widget-action");
            e.is('[class*="border-"]') && e.attr("class", "widget border-" + u), e.is('[class*="bg-"]') && e.attr("class", "widget bg-" + u), t.is('[class*="bg-"]') && t.attr("class", "widget-header bg-" + u), n.is('[class*="color-"]') && n.attr("class", "widget-action color-" + u)
        });
    });
});
