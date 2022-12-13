  const coordinatesPolar = {
  Anzoategui:[-64.5, 9], //10.10 -64   [-64, 9]
  Apure: [-69, 7],
  Aragua: [-67.2, 10], // [-67.2, 10]
  Barinas: [-70, 8],
  Bolívar: [-63, 6],
  Carabobo: [-68, 10],
  Cojedes: [-68.5, 9.5],
  DistritoCapital: [-66.9, 10.5],
  Guarico: [-66.5, 8.5],
  "La Guaira": [-66.5, 10.6],
  Lara: [-70, 10],
  Miranda: [-66, 10.2],
  Monagas: [-63, 9.5],
  "Nueva Esparta": [-63.8, 11],
  Portuguesa: [-69.3, 9],
  Sucre: [-63.21, 10.5],
  Yaracuy: [-68.8, 10.2],
  Zulia: [-71.72, 10.32],
  Falcon: [-69.75, 11.24],
  Trujillo: [-70.43, 9.36],
  Tachira: [-72.21, 7.94],
  Apure: [-68.62, 7.12],
  Merida: [-71.17, 8.57]
};
const coordinatesUSA = {
  Dallas: [-100, 40],
  Texas: [-96.78, 32.77]
};
const coordinatesCol = {
  Bogota: [-74, 4.66],
};
const coordinatesEsp = {
  Madrid: [-3.70, 40.42],
"Santa Cruz de Tenerife": [-16.25, 28.46],//[-5.5, 42],
};
const countries = {
   col: {
    defaultState: "Bogota",
    officeMarkers: {
      Bogota: {
        coordinates: coordinatesCol.Bogota,
        offices: [
          {
            name: "Alimentos Polar Colombia - Oficina principal",
            country: "Colombia",
            state: "Bogota",
            address: "Carrera 9A #99-02 Edificio Citibank P.H. Oficina 501, Bogotá, Colombia.",
            phone: "+57 18000515551"
          }
        ]
      }
    },

    industrialMarkers: {
      Bogota:{
        coordinates: coordinatesCol.Bogota,
        offices: [
          {
            name:"Alimentos Polar - Planta",
            country: "Colombia",
            state: "Bogota",
            address: " Vía Bogotá - Facatativá, km 33, Facatativá, Cundinamarca, Colombia",
            phone: "+5716511777"
          },
        ]
      }

    }
  },

   usa: {
    defaultState: "Dallas",
    officeMarkers: {
      Dallas: { coordinates: coordinatesUSA.Dallas, offices: [] },
      Texas:{
        coordinates: coordinatesUSA.Texas,
        offices: [
          {
            name:"Alimentos Polar - Planta Greenville",
            country: "Usa",
            state: "Dallas",
            address: "6902 Texas Highway 66 Greennville, Tx 75402-5817",
            phone:"Human Resources (903) 554-1009 / Shipping and Receiving (903) 554.1011 / Sales (786) 264-0308"
          },
        ]
      }
      },
    industrialMarkers: {
      Dallas: { coordinates: coordinatesUSA.Dallas, offices: [] },

      Texas:{
        coordinates: coordinatesUSA.Texas,
        offices: [
          {
            name:"Alimentos Polar - Planta Greenville",
            country: "Usa",
            state: "Dallas",
            address: "6902 Texas Highway 66 Greennville, Tx 75402-5817",
            phone: "Human Resources (903) 554-1009 / Shipping and Receiving (903) 554.1011 / Sales (786) 264-0308"
          },
        ]
      }
      },
    },

   esp: {
      defaultState: "Madrid",
      officeMarkers: {
        Madrid:{
          coordinates: coordinatesEsp.Madrid,
          offices: [
            {
              name:"Alimentos Polar España SL-Planta y oficina comercial",
              country: "España",
              state: "Madrid",
              address: "Calle Fundición 61, 28522, Rivas Vaciamadrid, España",
              phone: "+34 914994438"
            },
          ]
        },
        },
      industrialMarkers: {
        Madrid:{
          coordinates: coordinatesEsp.Madrid,
          offices: [
            {
              name:"Alimentos Polar España SL-Planta y oficina comercial",
              country: "España",
              state: "Madrid",
              address: "Calle Fundición 61, 28522, Rivas Vaciamadrid, España",
              phone: "+34 914994438"
            },
          ]
        },
      "Santa Cruz de Tenerife":{
          coordinates: coordinatesEsp["Santa Cruz de Tenerife"],
          offices: [
            {
              name:"Alimentos Polar España-Planta ",
              country: "España",
              state: "Santa Cruz de Tenerife",
              address: "Calle Atamán, 25, Los Alisios, 38111, Santa Cruz de Tenerife",
              phone: "+34 627010767"
            },
          ]
        },
        }
     },

   ven: {
    defaultState: "DistritoCapital",
    officeMarkers: {
      DistritoCapital: {
        coordinates: coordinatesPolar.DistritoCapital,
        offices: [
          {
            name: "Cervecería Polar-Agencia La Yaguara",
            country: "Venezuela",
            state: "DistritoCapital",
            address:
              "Av. García González Da Silva, entre la intercomunal de Antímano y calle 3, La Yaguara, Caracas",
            phone: "0212-4726767 / 0212-4726708",
          },
          {
            name: "Cervecería Polar-Agencia Los Ruices",
            country: "Venezuela",
            state: "DistritoCapital",
            address:
              "Final Av. Diego Cisneros, dirección sur de la Av. Principal de Los Ruices, Los Ruices, Caracas.",
            phone: "0212-2027816",
          },
          {
            name: "Cervecería Polar-Agencia San Martín",
            country: "Venezuela",
            state: "DistritoCapital",
            address:
              "Zona Industrial de Artigas, Calle D, Urb. San Martín, Municipio Libertador.",
            phone: "0212-4513390",
          },
          {
            name: "Pepsi-Cola Venezuela-Agenca Oeste",
            country: "Venezuela",
            state: "DistritoCapital",
            address: "Av Intercomunal Animano, Sector Carapa, Puerta 1",
            phone: "0212-4436375",
          },
        ],
      },
      Anzoategui: {
        coordinates: coordinatesPolar.Anzoategui,
        offices: [
          {
            name: "Alimentos Polar Comercial-Sucursal Barcelona",
            country: "Venezuela",
            state: "Anzoategui",
            address:
              "Zona Industrial Los Montones, Av. Principal Fernández Padilla, Parcela Nro. 167.",
            phone: "0281-2761785 /  0281-5711212",
          },
          {
            name: "Cervecería Polar-Agencia Anaco",
            country: "Venezuela",
            state: "Anzoategui",
            address:
              "Av. Los Pilones, Km 101, Edificio Polar, al lado CC Anaco Center",
          },
          {
            name: "Cervecería Polar-Agencia El Tigre",
            country: "Venezuela",
            state: "Anzoategui",
            address:
              "Av. Intercomunal Tigre -Tigrito Galpón Cervecería Polar a Covencaucho ",
          },
          {
            name: "Cervecería Polar-Agencia Las Garzas",
            country: "Venezuela",
            state: "Anzoategui",
            address:
              "Av. Intercomunal, Sector Las Garzas, Cervecería Polar, Lechería",
            phone: "0281-2860911",
          },
          {
            name: "Cervecería Polar-Agencia Los Potocos",
            country: "Venezuela",
            state: "Anzoategui",
            address:
              "Av. Intercomunal, Sector Las Garzas, Cervecería Polar, Lechería",
          },
          {
            name: "Alimentos Polar Comercial-Oficina de Ventas Anaco",
            country: "Venezuela",
            state: "Anzoategui",
            address:
              "Sector Chaparral, calle Colombia con calle Comercio, diagonal a Rodirca, antiguo depósito Polar",
            phone: "0282-4252485",
          },
          {
            name: "Alimentos Polar Comercial-Oficina de Ventas Barcelona",
            country: "Venezuela",
            state: "Anzoategui",
            address:
              "Zona Industrial Los Montones, Calle 1, frente a Vivex,antigua oficina de Helados EFE",
          },
          {
            name: "Alimentos Polar Comercial-Oficina de Ventas El Tigre",
            country: "Venezuela",
            state: "Anzoategui",
            address:
              "Av. Intercomunal, Centro Comercial Los Pinos, planta1, pasillo F, local 21",
          },
          {
            name: "Alimentos Polar Comercial-Oficina de Ventas El Tigre",
            country: "Venezuela",
            state: "Anzoategui",
            address:
              "Av. Intercomunal Tigre -Tigrito Galpón Cervecería Polar a Covencaucho ",
          },
          {
            name: "Pepsi-Cola Venezuela-Agencia Barcelona",
            country: "Venezuela",
            state: "Anzoategui",
            address:
              " Zona Industrial Mesones -Av. Rómulo Betancourt-Galpones Pepsi",
            phone: "0281-2752850 / 0281-2751558 / 0281-2750354 / 0281-2753714",
          },
        ],
      },
      Aragua: {
        coordinates: coordinatesPolar.Aragua,
        offices: [
          {
            name: "Alimentos Polar Comercial- Centro de Distribución de Aragua ",
            country: "Venezuela",
            state: "Aragua",
            address:
              "Carretera Nacional Maracay – Mandaleno, Sector Los Naranjos, detrás del Hipermercado Super Lider, Palo Negro, Municipio Libertador",
          },
          {
            name: "Pepsi-Cola Venezuela-Oficina de Ventas Maracay",
            country: "Venezuela",
            state: "Aragua",
            address:
              "Calle Este II N° 89 Asentamiento Campesino La Morita I C.C. Hyper Lider La Morita, Maracay",
          },
          {
            name: "Sucursal de Productos EFE",
            country: "Venezuela",
            state: "Aragua",
            address:
              "Conglomerado Manuel Olivares Betancourt, zona industrial San Vicente II, Calle A, Parcela 16, San Vicente",
          },
          {
            name: "Cervecería Polar-Agencia La Victoria",
            country: "Venezuela",
            state: "Aragua",
            address:
              "Calle Gran Colombia Zona Industrial La Chapas, La Victoria",
          },
          {
            name: "Cervecería Polar-Agencia Turmero",
            country: "Venezuela",
            state: "Aragua",
            address:
              "Carretera Turmero la encrucijada al lado de Remavenca - Turmero",
          },
        ],
      },
      Barinas: {
        coordinates: coordinatesPolar.Barinas,
        offices: [
          {
            name: "Alimentos Polar Comercial-Oficina de Venta Barinas",
            country: "Venezuela",
            state: "Barinas",
            address:
              "Zona industrial Virginia carretera vieja San Silvestre Km 4, a 100 mts de Parmalat, Antiguo Silo Promavasa planta 1 .",
          },
          {
            name: "Cervecería Polar-Agencia Barinas",
            country: "Venezuela",
            state: "Barinas",
            address: "Av. Cuatricentenaria, a 1 Km. de la Redoma, Barinas.",
            phone: "0273-4560651 / 0273-5461307",
          },
          {
            name: "Pepsi-Cola Venezuela-Agencia Barinas",
            country: "Venezuela",
            state: "Barinas",
            address:
              "Av. Industrial Km 2 Galpón Pepsi diagonal a las Capillas Velatorias Santísima Trinidad",
          },
        ],
      },
      Bolívar: {
        coordinates: coordinatesPolar.Bolívar,
        offices: [
          {
            name: "Alimentos Polar Comercial-Sucursal Ciudad Bolívar",
            country: "Venezuela",
            state: "Bolívar",
            address:
              "Barrio La Toma, vía puente Angostura, sector Plaza Las Banderas al lado Servicauchos El Toro II",
          },
          {
            name: "Cervecería Polar Agencia San Félix",
            country: "Venezuela",
            state: "Bolívar",
            address:
              "Calle Monagas, sector Vista Alegre zona industrial Chirica, San Félix",
            phone: "0286-9340686",
          },
          {
            name: "Cervecería Polar -Agencia Upata",
            country: "Venezuela",
            state: "Bolívar",
            address: "Upata Carretera Naciona Upata - Guasipati,  Km 1",
          },
          {
            name: "Cervecería Polar-Agencia  Tumeremo",
            country: "Venezuela",
            state: "Bolívar",
            address:
              "Tumeremo: Carretera Nacional Troncal 10 Vía el Dorado Sector La Montañita",
          },
          {
            name: "Cervecería Polar-Agencia Ciudad Bolívar",
            country: "Venezuela",
            state: "Bolívar",
            address: "Av Upata km 01 con Callejón Savoy, Edificio Polar",
            phone: "0285-6321407",
          },
          {
            name: "Cervecería Polar-Agencia Puerto Ordaz",
            country: "Venezuela",
            state: "Bolívar",
            address:
              " Zona Industrial de Unare II, Calle Neverí. Edificio Polar. Frente al Aeropuerto. Pto Ordaz",
            phone: "0286-9513626 / 0286-9513044 ",
          },
          {
            name: "Alimentos Polar Comercial-Oficina de Ventas Puerto Ordaz",
            country: "Venezuela",
            state: "Bolívar",
            address:
              "Zona Industrial Unare II, Calle Neverí cruce con Prespuntal al lado de Cervecería Polar",
          },
          {
            name: "Pepsi-Cola Venezuela-Agenca Puerto Ordaz",
            country: "Venezuela",
            state: "Bolívar",
            address:
              "Zona Industrial Chirica, Av. Antonio Cisneros con calle Yara  parecela 6 y 7 Galpon Pepsi, San Félix",
            phone: "0286-9349195",
          },
        ],
      },
      Carabobo: {
        coordinates: coordinatesPolar.Carabobo,
        offices: [
          {
            name: "Cervecería Polar-Agencia Bejuma",
            country: "Venezuela",
            state: "Carabobo",
            address:
              "Carretera Vieja Via Montalban-Aguirre, Sector Portachuelo. Sector Bejuma",
          },
          {
            name: "Cervecería Polar-Agencia Guacara",
            country: "Venezuela",
            state: "Carabobo",
            address:
              "Carretera Nacional , Zona Industrial El Tigre al lado de la Tabacalera  Nacional, Guacara",
          },
          {
            name: "Cervecería Polar-Agencia La Isabelica",
            country: "Venezuela",
            state: "Carabobo",
            address: "Urb. La Quizanda Av Las Industrias N° 81-600, Valencia",
          },
          {
            name: "Cervecería Polar-Agencia La Quizanda",
            country: "Venezuela",
            state: "Carabobo",
            address: "Carretera Nacional s/n Diagonal a Agroisleña, Zaraza",
          },
          {
            name: "Cervecería Polar-Agencia Puerto Cabello",
            country: "Venezuela",
            state: "Carabobo",
            address: "Final Avenida La Paz, Sector La Belisa, Puerto Cabello",
          },
          {
            name: "Cervecería Polar-Agencia Zaraza",
            country: "Venezuela",
            state: "Carabobo",
            address:
              "Prolongación Av. Michelena C/C Av. Norte Sur Zona Industrial Norte Valencia",
          },
          {
            name: "Pepsi-Cola Venezuela-Agencia Valencia",
            country: "Venezuela",
            state: "Carabobo",
            address:
              "Av. Henry Ford, Zona Industrial II, diagonal a la alcaldía de Valencia",
            phone: "0414-1269389",
          },
          {
            name: "Pepsi-Cola Venezuela-Oficina de ADC",
            country: "Venezuela",
            state: "Carabobo",
            address:
              "Carretera Nacional Valencia Guigue CC Hyper Lider , Valencia",
          },
        ],
      },
      Cojedes: {
        coordinates: coordinatesPolar.Cojedes,
        offices: [
          {
            name: "Cervecería Polar -Agencia San Carlos",
            country: "Venezuela",
            state: "Cojedes",
            address:
              "Av. Estadium, con Av.José Laurencio Silva, San Carlos, Cojedes.",
            phone: "0258-4331966",
          },
          {
            name: "Cervecería Polar-Agencia Tinaquillo",
            country: "Venezuela",
            state: "Cojedes",
            address:
              "Zona Industrial, frente al Seguro Social, Tinaquillo, Cojedes.",
          },
        ],
      },
      Guarico: {
        coordinates: coordinatesPolar.Guarico,
        offices: [
          {
            name: "Cervecería Polar-Agencia Altagracia de Orituco",
            country: "Venezuela",
            state: "Guarico",
            address:
              "Carretera Nacional Zona Industrial Frente a la entrada de Caigua Altagracia de Orituco",
          },
          {
            name: "Cervecería Polar-Agencia Calabozo",
            country: "Venezuela",
            state: "Guarico",
            address:
              "Avenida Octavio Viana González Frente al Aeropuerto Calabozo",
          },
          {
            name: "Cervecería Polar-Agencia El Sombrero",
            country: "Venezuela",
            state: "Guarico",
            address: "Carretera Nacional Sector Las Mezas, El Sombrero",
          },
          {
            name: "Cervecería Polar-Agencia San Juan de Los Morros ",
            country: "Venezuela",
            state: "Guarico",
            address:
              "Av. Los Llanos 191-B, punto de referencia Sector El Jobo. San Juan de los Morros",
          },
          {
            name: "Cervecería Polar-Agencia Valle La Pascua",
            country: "Venezuela",
            state: "Guarico",
            address: "Av. Las Industrias Salida al Socorro, Valle de la Pascua",
          },
        ],
      },
      "La Guaira": {
        coordinates: coordinatesPolar["La Guaira"],
        offices: [
          {
            name: "Cervecería Polar-Agencia La Guaira",
            country: "Venezuela",
            state: "La Guaira",
            address:
              "Av. Principal de Playa Grande, al sur de la urbanización Puerto Viejo, Catia La Mar",
            phone: "0212-3514227",
          },
          {
            name: "Pepsi-Cola Venezuela-Agencia Catia La Mar",
            country: "Venezuela",
            state: "La Guaira",
            address:
              "Calle Este -Oestre, Galpón 002-18, Urb. La Fundación, Catia La Mar.",
          },
        ],
      },
      Lara: {
        coordinates: coordinatesPolar.Lara,
        offices: [
          {
            name: "Alimentos Polar Comercial-Oficina de Venta Barquisimeto",
            country: "Venezuela",
            state: "Lara",
            address: "Zona Industrial 1, carrera 4, esquina calle 17.",
            phone: "0251-2373147 / 0251-2374663",
          },
          {
            name: "Alimentos Polar Comercial-Oficina de Venta Carora",
            country: "Venezuela",
            state: "Lara",
            address:
              "Av. Rotaría entre calles 8 y 9 Zona industrial. Antigua sede de Pepsi-Cola",
          },
          {
            name: "Cervecería Polar-Agencia Barquisimeto",
            country: "Venezuela",
            state: "Lara",
            address:
              "Av.Libertador, c/c 28, Zona Industrial I, Este del Obelisco, Barquisimeto.",
            phone: "0251-2371510",
          },
          {
            name: "Cervecería Polar-Agencia Carora",
            country: "Venezuela",
            state: "Lara",
            address: "Carretera Lara Zulia, Km.3, Zona Industrial I.",
            phone: "0252-4212626",
          },
          {
            name: "Cervecería Polar-Agencia Quibor",
            country: "Venezuela",
            state: "Lara",
            address: "Av. Rotaria, cruce Distribuidor, hacia el Tocuyo.",
          },
          {
            name: "Cervecería Polar-Agencia Tocuyo",
            country: "Venezuela",
            state: "Lara",
            address:
              "Calle Oliveira entre carrera 10 y Circunvalación, Barrio Coromoto, diagonal a E/S Coromoto",
            phone: "0253-6633143",
          },
          {
            name: "Cervecería Polar Oficina Principal - Centro Llanos",
            country: "Venezuela",
            state: "Lara",
            address:
              "Av.Libertador, c/c 28, Zona Industrial I, Este del Obelisco, Barquisimeto.",
            phone: "0251-2371510",
          },
          {
            name: "Pepsi-Cola Venezuela-Agencia Barquisimeto",
            country: "Venezuela",
            state: "Lara",
            address:
              "Final de la Av. Libertador cruce calle 31 Zona Industrial I, Barquisimeto",
            phone: "0251-2376933",
          },
        ],
      },
      Miranda: {
        coordinates: coordinatesPolar.Miranda,
        offices: [
          {
            name: "Cervecería Polar - Oficina Principal",
            country: "Venezuela",
            state: "Miranda",
            address:
              "Final Av. Diego Cisneros, dirección sur de la Av. Principal de Los Ruices, Los Ruices, Caracas.",
            phone: "0212-2027802",
          },
          {
            name: "Cervecería Polar- Agencia Tacarigua",
            country: "Venezuela",
            state: "Miranda",
            address:
              "Carretera Nacional Tacarigua - Higuerote, km 05, urb. Campomar, Tacarigua de Brion",
            phone: "0234-3237285 / 0234-3236432 / 0234-3236998",
          },
          {
            name: "Cervecería Polar-Agencia Carrizal",
            country: "Venezuela",
            state: "Miranda",
            address:
              "Zona Industrial de Corralito, galpones 3 y 4, vía Carrizal.",
            phone: "0212-3831343",
          },
          {
            name: "Cervecería Polar-Agencia Catia",
            country: "Venezuela",
            state: "Miranda",
            address:
              "Calle Real Los Frailes de Catia, esquina el socorro, Catia, Caracas.",
            phone: "0212-8730710",
          },
          {
            name: "Cervecería Polar-Agencia Guarenas",
            country: "Venezuela",
            state: "Miranda",
            address:
              "Parcelamiento c-14, Urb. Los Naranjos, Zona Industrial, Guarenas",
            phone: "0212-3625266 / 0212-3625267",
          },
          {
            name: "Cervecería Polar-Agencia Ocumare del Tuy",
            country: "Venezuela",
            state: "Miranda",
            address:
              "Ciudad Industrial de Tuy, parcelas 43, 44, 45, 46 y 47. Pampero, sector Aponte. Ocumare del Tuy, Municipio Tomás Lander.",
          },
          {
            name: "Pepsi-Cola Venezuela-Agencia Guarenas",
            country: "Venezuela",
            state: "Miranda",
            address:
              "Zona Industrial del Este, 2da Avenida, Parcela 3, Manzana 3, Lote 3A, Guarenas",
            phone: "0212-3624239",
          },
          {
            name: "Pepsi-Cola Venezuela-Agencia Los Ruices",
            country: "Venezuela",
            state: "Miranda",
            address:
              "4ta transversal de los Cortijos de Lourdes. Calle Adrianna Johanna",
            phone: "0212-2028390",
          },
          {
            name: "Pepsi-Cola Venezuela-Agencia Los Teques",
            country: "Venezuela",
            state: "Miranda",
            address:
              "Zona Industrial Los Tres Puentes, Av. Perez Pizzanti, N° 27, 28, 29, 30, 31. Los Teques, municipio Guaicaipuro",
            phone: "0414-3183836",
          },
          {
            name: "Pepsi-Cola Venezuela-Agencia Ocumare",
            country: "Venezuela",
            state: "Miranda",
            address:
              "Zona industrial del Tuy, Sector Aponte, Parcelas 18,19 y 20. Ocumare del Tuy.",
            phone: "0239-3911344",
          },
          {
            name: "Centro Empresarial Polar",
            country: "Venezuela",
            state: "Miranda",
            address:
              "4ta. Transversal de Los Cortijos de Lourdes, 2da avenida. Edificio Centro Empresarial Polar. Caracas",
            phone: "0212-2023111",
            "Oficina Comercial o Fabrica": "Sede Principal",
          },
        ],
      },
      Monagas: {
        coordinates: coordinatesPolar.Monagas,
        offices: [
          {
            name: "Cervecería Polar-Agencia Maturín",
            country: "Venezuela",
            state: "Monagas",
            address: "Zona Industrial Maturín, ZIMCA",
          },
          {
            name: "Alimentos Polar Comercial-Oficina de Ventas Maturín",
            country: "Venezuela",
            state: "Monagas",
            address:
              "Zona Industrial Maturín, ZIMCA, sector San Jaime, calle 10 con 6A, diagonal a Cerveceria Polar Maturín",
            phone: "0291-3158416",
          },
          {
            name: "Pepsi-Cola Venezuela-Agencia Maturín",
            country: "Venezuela",
            state: "Monagas",
            address:
              "Av. Raúl Leoni, sector Juanico, Galpón Pepsi, al lado del Jardín Cervecero",
            phone: "0291-6416498",
          },
        ],
      },
      "Nueva Esparta": {
        coordinates: coordinatesPolar["Nueva Esparta"],
        offices: [
          {
            name: "Alimentos Polar Comercial-Sucursal Porlamar",
            country: "Venezuela",
            state: "Nueva Esparta",
            address:
              "Carretera Nacional vía San Juan Bautista Sector el Espinal",
            phone: "0295-2971430",
          },
          {
            name: "Cervecería Polar-Agencia Nueva Esparta",
            country: "Venezuela",
            state: "Nueva Esparta",
            address:
              "Carretera nacional via , San Juan Bautista, Sector la Encrucijada, El Espinal",
            phone: "0295-2971236 / 0295-2971047.",
          },
          {
            name: "Pepsi-Cola Venezuela-Agencia Porlamar",
            country: "Venezuela",
            state: "Nueva Esparta",
            address:
              "Av 31 de Julio, al lado de  Estación de servicio Mutti, sector Guatamare, Municipio García",
          },
        ],
      },
      Portuguesa: {
        coordinates: coordinatesPolar.Portuguesa,
        offices: [
          {
            name: "Alimentos Polar Comercial-Oficina de Venta Acarigua",
            country: "Venezuela",
            state: "Portuguesa",
            address:
              "Carretera vía Guanare, sector Río Acarigua. Antes Silos Provencesa.",
          },
          {
            name: "Alimentos Polar Comercial-Oficina de Venta Guanare",
            country: "Venezuela",
            state: "Portuguesa",
            address:
              "Av. Simón Bolívar al lado Centro Empresarial Don Nino, piso 3 oficina 29 y 30, frente antiguo depósito de Pepsi-Cola.",
            phone: "0257-2517371",
          },
          {
            name: "Cervecería Polar-Agencia Acarigua",
            country: "Venezuela",
            state: "Portuguesa",
            address: "Av. Eduardo Chollet, Zona Industrial Araure",
            phone: "0255-6651378",
          },
          {
            name: "Cervecería Polar-Agencia Guanare",
            country: "Venezuela",
            state: "Portuguesa",
            address: "Av. Simón Bolívar, entrada a Guanare, vía Acarigua.",
            phone: "0257-2510868 / 0257-2511432",
          },
          {
            name: "Cervecería Polar-Agencia Turén",
            country: "Venezuela",
            state: "Portuguesa",
            address: "Carretera Nacional, Final Av. Pérez Zambrano.",
            phone: "0256-3211057 / 0256-3211105",
          },
          {
            name: "Pepsi Cola Venezuela-Agencia Guanare",
            country: "Venezuela",
            state: "Portuguesa",
            address:
              "Av. Simón Bolívar Carretera Vieja Nacional troncal 5 Barrio Fe y Alegría al lado de la planta",
          },
          {
            name: "Pepsi-Cola Venezuela-Agencia Acarigua",
            country: "Venezuela",
            state: "Portuguesa",
            address:
              "Av. Páez cruce con Av. Circunvalación frente al C.C. Llano Mall, Acarigua",
            phone: "0255-6235155",
          },
        ],
      },
      Sucre: {
        coordinates: coordinatesPolar.Sucre,
        offices: [
          {
            name: "Cervecería Polar-Agencia Carúpano",
            country: "Venezuela",
            state: "Sucre",
            address: "Av. Universitaria sector los Molinos, Cervecería Polar",
            phone: "0294-3325260 / 0294-3318531",
          },
          {
            name: "Cervecería Polar-Agencia Cumaná",
            country: "Venezuela",
            state: "Sucre",
            address:
              "Av. Universidad, Zona Industrial San Luis, Edificio Polar",
            phone: "0293-4513143",
          },
          {
            name: "Alimentos Polar Comercial-Oficina de Ventas Cumaná",
            country: "Venezuela",
            state: "Sucre",
            address: "Av. Universidad #20, Planta Cumaná",
            phone: "02934515122-4512006",
          },
          {
            name: "Pepsi-Cola Venezuela-Agencia Cumaná",
            country: "Venezuela",
            state: "Sucre",
            address:
              "Av. Universidad, Zona Industrial San Luis, Edificio Polar",
          },
        ],
      },
      Yaracuy: {
        coordinates: coordinatesPolar.Yaracuy,
        offices: [
          {
            name: "Alimentos Polar Comercial-Centro de Distribución-Yaracuy",
            country: "Venezuela",
            state: "Yaracuy",
            address:
              "Sector las piedras, autopista Cimarron Andresote, sentido Barquisimeto – San Felipe a 100 mts de la E/S Las Piedras",
          },
          {
            name: "Alimentos Polar Comercial-Oficina de Venta San Felipe",
            country: "Venezuela",
            state: "Yaracuy",
            address:
              "Av. Intercomunal San Felipe El Fuerte,  sector Sabaneta canal de servicio entre calles 32 y quebrada Guayabal",
          },
          {
            name: "Cervecería Polar-Agencia San Felipe",
            country: "Venezuela",
            state: "Yaracuy",
            address:
              "Carret. Panamericana, vía Cocorote, Sector La Catalana, San Felipe.",
            phone: "0254-2311195",
          },
        ],
      },
      Falcon: {
        coordinates: coordinatesPolar.Falcon,
        offices: [
          {
            name: "Cervecería Polar - Agencia Coro",
            country: "Venezuela",
            state: "Falcon",
            address:
              "Prolongación Avenida Los Medanos Con Calle Iturbe, Coro",
          },
          {
            name: "Cervecería Polar - Agencia Punto Fijo",
            country: "Venezuela",
            state: "Falcon",
            address:
              "Avenida Tachira Con Calle Paseo Del Zulia, Punto Fijo"
          },
          {
            name: "Cervecería Polar - Agencia Pueblo Nuevo",
            country: "Venezuela",
            state: "Falcon",
            address:
              "Calle Principal, via Adicora, Pueblo Nuevo",
          },
        ],
      },
      Trujillo: {
        coordinates: coordinatesPolar.Trujillo,
        offices: [
          {
            name: "Cervecería Polar - Agencia Valera",
            country: "Venezuela",
            state: "Trujillo",
            address:
              "Av. José Luis de Faure, C. Zona Industrial, Valera",
          },
          {
            name: "Cervecería Polar - Agencia Panamericana",
            country: "Venezuela",
            state: "Trujillo",
            address:
              "Tronca 1, carretera Panamericana, vía La Ceiba, La Fria"
          },
          {
            name: "Alimentos Polar Comercial- Sucursal Valera",
            country: "Venezuela",
            state: "Trujillo",
            address:
              "Zona Industrial, Valera",
          },
        ],
      },
      Apure: {
        coordinates: coordinatesPolar.Apure,
        offices: [
          {
            name: "Cervecería Polar - Agencia La Pedrera",
            country: "Venezuela",
            state: "Apure",
            address:
              "Carretera Via Barinas Encrucijada, La Pedrera",
          },
          {
            name: "Cervecería Polar - Agencia Guasdualito",
            country: "Venezuela",
            state: "Apure",
            address:
              "Av. Táchira Nª11-9, Guasdualito"
          },
          {
            name: "Cervecería Polar - Agencia Socopo",
            country: "Venezuela",
            state: "Apure",
            address:
              "Barrio Alberto Carnevally, Carreras 14 y 15, Frente a la Carretera Nacional vía San Cristóbal, Socopó",
          },
          {
            name: "Alimentos Polar Comercial - Agencia San Fernando de Apure",
            country: "Venezuela",
            state: "Apure",
            address:
              "Avenida Ppal de Biruaca, Troncal 2, San Fernando de Apure",
          },
           {
            name: "Alimentos Polar Comercial-Oficina de Ventas San Fernando",
            country: "Venezuela",
            state: "Apure",
            address:
              "Av. Intercomunal Los Centauros, Edif. Alimentos Polar, al lado de rectificadora Caracas, Biruaca",
          },
          {
            name: "Cervecería Polar-Agencia Achaguas",
            country: "Venezuela",
            state: "Apure",
            address: "Avenida José Antonio Páez, Deposito Polar Achaguas",
          },
          {
            name: "Cervecería Polar-Agencia San Fernando",
            country: "Venezuela",
            state: "Apure",
            address: "Av. Caracas c/Av. María Nieves. San Fernando de Apure.",
          },
        ],
      },
      Merida: {
        coordinates: coordinatesPolar.Merida,
        offices: [
          {
            name: "Cervecería Polar - Agencia Mérida",
            country: "Venezuela",
            state: "Merida",
            address:
              "Av. Andrés Bello, entrada al Country, Mérida",
          },
          {
            name: "Cervecería Polar - Agencia Tovar",
            country: "Venezuela",
            state: "Merida",
            address:
              "Prolongacion Av. Perimetral, N° 1, Sector Cucuchica, Tovar"
          },
          {
            name: "Cervecería Polar - Agencia El Vigia",
            country: "Venezuela",
            state: "Merida",
            address:
              "Av. Don Pepe Rojas, El Vigía",
          },
          {
            name: "Alimentos Polar Comercial - Agencia El Vigia",
            country: "Venezuela",
            state: "Merida",
            address:
              "Av. Don Pepe Rojas, El Vigía",
          },
        ],
      },
       Tachira: {
        coordinates: coordinatesPolar.Tachira,
        offices: [
          {
            name: "Cervecería Polar - Agencia La Fria",
            country: "Venezuela",
            state: "Tachira",
            address:
              "Zona Industrial Entre Av 3 Y 5, La Fria",
          },
          {
            name: "Cervecería Polar - Agencia Ureña",
            country: "Venezuela",
            state: "Tachira",
            address:
              "Carretera Vía San Antonio, Ureña"
          },
          {
            name: "Cervecería Polar - Agencia Oficina Principal Andes",
            country: "Venezuela",
            state: "Tachira",
            address:
              "Final Av. Lucio Oquendo, San Cristóbal",
              phone: "0276-3471585/0276-3475498/0276-3468433/0276-3471910",
          },
          {
            name: "Cervecería Polar - Agencia San Cristobal",
            country: "Venezuela",
            state: "Tachira",
            address:
              "Final Av. Lucio Oquendo, San Cristóbal",
          },
          {
            name: "Cervecería Polar - Agencia Rubio",
            country: "Venezuela",
            state: "Tachira",
            address:
              "Av 2 Conglomerado Industrial Galpon No. 2 Urbanización La Azucena, Sector El Rodeo, Vía Las Dantas"
          },
          {
            name: "Alimentos Polar Comercial - Agencia San Cristóbal",
            country: "Venezuela",
            state: "Tachira",
            address:
              "Zona industrial La Lomas, San Cristóbal",
          },
          {
            name: "Alimentos Polar Comercial - Sucursal San Crisóbal",
            country: "Venezuela",
            state: "Tachira",
            address:
              "Av Parque Exposiciones, diagonal al terminal privado de Expresos Occidente, La Concordia, San Cristóbal"
          },
          {
            name: "Pepsi-Cola Venezuela - Oficina Principal San Cristóbal",
            country: "Venezuela",
            state: "Tachira",
            address:
              "Zona industrial Las Lomas, calle Carira, galpón nro P-46, San Cristóbal",
          },
        ],
      },
         Zulia: {
        coordinates: coordinatesPolar.Zulia,
        offices: [
          {
            name: "Cervecería Polar - Agencia Cabimas",
            country: "Venezuela",
            state: "Zulia",
            address:
              "Av. Intercomunal, sector Bello Monte con Carretera G, frente a la panaderia Interpan, Cabimas",
         },
          {
            name: "Cervecería Polar - Agencia Laguinillas",
            country: "Venezuela",
            state: "Zulia",
            address:
              "Carretera N, esquina Calle España, Lagunillas",
          },
          {
            name: "Cervecería Polar - Agencia Polar II",
            country: "Venezuela",
            state: "Zulia",
            address:
              "Calle 148 con 149, Zona Industrial II Etapa, Via Palito Blanco, Maracaibo",
          },
          {
            name: "Cervecería Polar - Agencia Perijá",
            country: "Venezuela",
            state: "Zulia",
            address:
              "Av. Principal Santa Teresa, Frente Al Hospital I, Perijá",
          },
          {
            name: "Cervecería Polar - Agencia San Jacinto",
            country: "Venezuela",
            state: "Zulia",
            address:
              "Av. 16 # 155-20, Vía al Moján, sector Canchancha",
          },
          {
            name: "Cervecería Polar - Agencia Nueva Lucha",
            country: "Venezuela",
            state: "Zulia",
            address:
              "Carretera Vía al Moján, Sector Nueva Lucha",
          },
          {
            name: "Cervecería Polar - Agencia Los Puertos",
            country: "Venezuela",
            state: "Zulia",
            address:
              "Av. Principal sector Curva del Pato, via El Tablazo, Los Puertos",
          },
          {
            name: "Cervecería Polar - Agencia Mene Grande",
            country: "Venezuela",
            state: "Zulia",
            address:
              "Zona Industrial II Etapa sector La Tigra, Mene Grande",
          },
          {
            name: "Cervecería Polar - Agencia Polar II",
            country: "Venezuela",
            state: "Zulia",
            address:
              "Av. Principal La Villa, sector Las Tablitas, Maracaibo",
          },
          {
            name: "Cervecería Polar - Agencia Paez",
            country: "Venezuela",
            state: "Zulia",
            address:
              "Carretera Troncal del Caribe, sector Los Filuos, a 100 Mts de estacion de servicio Los Filuos, Paraguaipoa",
          },
          {
            name: "Cervecería Polar - Agencia Caja Seca",
            country: "Venezuela",
            state: "Zulia",
            address:
              "Sector Caño de Agua, Carretera Panamericana, Caja Seca",
          },
          {
            name: "Cervecería Polar - Agencia Santa Barbara",
            country: "Venezuela",
            state: "Zulia",
            address:
              "Calle 5 Entre Avenidas 14 Y 16, Santa Bárbara del Zulia",
          },
          {
            name: "Pepsi-Cola Venezuela - Agencia Pepsi Maracaibo Sur",
            country: "Venezuela",
            state: "Zulia",
            address:
              "Zona Industrial Av. 60 145-200, al lado de Drolanca, Maracaibo",
          },
        ],
      },
    },
    industrialMarkers: {
      DistritoCapital: {
        coordinates: coordinatesPolar.DistritoCapital,
        offices: [
          {
            name: "Cervecería Polar - Planta Los Cortijos",
            country: "Venezuela",
            state: "Distrito Capital",
            address:
              "4ta. Transversal de Los Cortijos (calle ciega), 2da avenida, diagonal al Centro Empresarial Polar.",
          },
        ],
      },
      Anzoategui: {
        coordinates: coordinatesPolar.Anzoategui,
        offices: [
          {
            name: "Cervecería Polar-Planta Oriente",
            country: "Venezuela",
            state: "Anzoategui",
            address: "Carretera Negra, Km 15, Ojo de Agua, Barcelona",
            phone: "0281-2705070 / 0281-2705002",
          },
          {
            name: "Pepsi-Cola Venezuela-Planta Barcelona",
            country: "Venezuela",
            state: "Anzoategui",
            address: "Carretera Negra, Km 15, Ojo de Agua, Barcelona",
            phone: "0281-2705070 / 0281-2705002",
          },
        ],
      },
      Yaracuy: {
        coordinates: coordinatesPolar.Yaracuy,
        offices: [
          {
            name: "Alimentos Polar Comercial-Planta Chivacoa",
            country: "Venezuela",
            state: "Yaracuy",
            address: "Encrucijada de Chivacoa, vía Nirgua, Chivacoa",
            phone: "0251-8801502 / 0251-8801609",
          },
        ],
      },
      Sucre: {
        coordinates: coordinatesPolar.Sucre,
        offices: [
          {
            name: "Alimentos Polar Comercial - Planta Marigüitar",
            country: "Venezuela",
            state: "Sucre",
            address: "Calle el Mamey sin número, Marigüitar ",
            phone: "0293-8391224 / 0293-8391189 / 0293-8391054.",
          },
          {
            name: "Alimentos Polar Comercial - Planta Cumaná",
            country: "Venezuela",
            state: "Sucre",
            address: "Av. Universidad #20, Planta Cumaná",
          },
        ],
      },
      Portuguesa: {
        coordinates: coordinatesPolar.Portuguesa,
        offices: [
          {
            name: "Provencesa, S.A.",
            country: "Venezuela",
            state: "Portuguesa",
            address:
              "Carretera Nacional Acarigua - Guanare, Km. 6, Sector Río Acarigua, Municipio Araure",
          },
        ],
      },
      Monagas: {
        coordinates: coordinatesPolar.Monagas,
        offices: [
          {
            name: "Alimentos Polar  Comercial- Planta Palmonagas",
            country: "Venezuela",
            state: "Monagas",
            address:
              "Carretera Nacional vía La Pica, Sector La Vitorina, Caserío Vuelta Larga, Edificio Planta Extractora, Maturin",
            phone: "0291-3007400",
          },
        ],
      },
      Miranda: {
        coordinates: coordinatesPolar.Miranda,
        offices: [
          {
            name: "Pepsi-Cola Venezuela-Planta Minalba",
            country: "Venezuela",
            state: "Miranda",
            address: "San Pedro de los Altos, Calle Gómez, Los Teques",
            phone: "0212-3780212",
          },
          {
            name: "Pepsi-Cola Venezuela-Planta Concentrados",
            country: "Venezuela",
            state: "Miranda",
            address:
              "4ta transversal de los Cortijos de Lourdes. Calle Adrianna Johanna. Edif Golden, piso 1.",
            phone: "0212-2024119 / 0212-20207679",
          },
        ],
      },
      Guarico: {
        coordinates: coordinatesPolar.Guarico,
        offices: [
          {
            name: "Alimentos Polar Comercial-Planta Calabozo Arroz ",
            country: "Venezuela",
            state: "Guarico",
            address:
              "Av. Los Chaguaramos, Parcelamiento Industrial San Marcos, parcela N° 26 Calabozo",
          },
        ],
      },
      Aragua: {
        coordinates: coordinatesPolar.Aragua,
        offices: [
          {
            name: "Alimentos Polar Comercial-Planta Maracay ",
            country: "Venezuela",
            state: "Aragua",
            address: "Zona Industrial San Vicente 2 parcela F1 F2 Maracay",
            phone: "0243-5516170",
          },
          {
            name: "Alimentos Polar Comercial-Planta Turmero",
            country: "Venezuela",
            state: "Aragua ",
            address:
              "Carretera Nacional Turmero La Encrucijada Antigua Remavenca ",
            phone: "0244-6607253",
          },
        ],
      },
      Carabobo: {
        coordinates: coordinatesPolar.Carabobo,
        offices: [
          {
            name: "Alimentos Polar Comercial-Oficina de Ventas Valencia ",
            country: "Venezuela",
            state: "Carabobo",
            address:
              "Carretera Nacional Valencia Los Guayos, Urb. Industrial Carabobo sector El Morro San Blas, Calle 94 (vía de ervicio) Valencia",
          },
          {
            name: "Alimentos Polar Comercial-Planta Cereales ",
            country: "Venezuela",
            state: "Carabobo",
            address:
              "Av Luis Ernesto Branger cruce con Av. Domingo Olavarria, Valencia",
          },
          {
            name: "Alimentos Polar Comercial-Planta Industrial Valencia ",
            country: "Venezuela",
            state: "Carabobo",
            address:
              "Carretera Nacional Valencia Los Guayos, Urb. Industrial Carabobo sector El Morro San Blas, Calle 94 (vía de ervicio) Valencia",
          },
          {
            name: "Alimentos Polar Comercial-Planta Limpieza ",
            country: "Venezuela",
            state: "Carabobo",
            address:
              "Av Luis Ernesto Branger Zona Industrial Sur II diagonal a Mazda de Venezuela, Valencia",
          },
          {
            name: "Alimentos Polar Comercial-Planta Migurt ",
            country: "Venezuela",
            state: "Carabobo",
            address:
              "Av. Iribarren Borges, vía al aeropuerto Arturo Michelena frentre a 3M Valencia",
            phone: "0241-30002820",
          },
          {
            name: "Alimentos Polar Comercial-Planta Salsas y Untables ",
            country: "Venezuela",
            state: "Carabobo",
            address:
              "Av Luis Ernesto Branger Zona Industrial Norte II al lado de Camara de Industriales del Edo. Carabobo",
            phone: "0241-5138372",
          },
          {
            name: "Alimentos Polar Comercial-Sucursal Valencia ",
            country: "Venezuela",
            state: "Carabobo",
            address:
              "Av. Este-Oeste, parcela N° 7 Zona Industrial Municipal Norte, La Quizanda, Valencia",
          },
          {
            name: "Cervecería Polar-Planta Fabrimonca",
            country: "Venezuela",
            state: "Carabobo",
            address:
              "Av. 37 Urb. Industrial Los Guayos Galpon 61 y 62 Entranda a Paraparal ",
          },
          {
            name: "Cervecería Polar-Planta Metalgráfica",
            country: "Venezuela",
            state: "Carabobo",
            address:
              "Av. Ernesto Branger Zona Industrial Sur a pocos metros de la Cámara de Industraiales del Edo. Carabobo. Valencia",
            phone: "0241-8397002",
          },
          {
            name: "Cervecería Polar-Planta San Joaquín",
            country: "Venezuela",
            state: "Carabobo",
            address: "Carretera Panamerica San Joaquín-Mariara, San Joaquín",
            phone: "0241-8502071 / 0241-8502072",
          },
          {
            name: "Cervecería Polar-Planta Superenvases",
            country: "Venezuela",
            state: "Carabobo",
            address:
              "Av. Henry Ford Zona Industral Sur, frente al Centro Comercial Paseo Las Industrias, Valencia",
            phone: "0241-8397102",
          },
        ],
      },
      Zulia: {
        coordinates: coordinatesPolar.Zulia,
        offices: [
          {
            name: "Pepsi-Cola Venezuela-Planta Pepsi",
            country: "Venezuela",
            state: "Zulia",
            address:
              "Av. 50 vía a Perijá, kimómetro 9 y medio. Parroquia Domitila Flores. Sector parcelamiento Ezequiel Zamora, San Francisco",
             phone:"0261-5202201 / 0261-5202209",
          },
           {
            name: "Cervecería Polar - Planta Modelo",
            country: "Venezuela",
            state: "Zulia",
            address:
              "Km.10 Carretera Vía La Cañada, al lado del Parque Sur. San Francisco",
            phone:"0261-4115631 / 0261-4115632 / 0261-4115633" ,
          },
           {
            name: "Alimentos Polar Comercial - Planta Trigo",
            country: "Venezuela",
            state: "Zulia",
            address:
              "Carretera Vía a Perijá. Kilómetro 9 y medio. Diagonal al antiguo Cementerio Jardines La Chinita. San Francisco",
          },
        ],
      },
      Lara: {
        coordinates: coordinatesPolar.Lara,
        offices: [
          {
            name: "Cervecería Polar-Planta Pomar",
            country: "Venezuela",
            state: "Lara",
            address: "Carretera Lara Zulia Km. 3 Zona Industrial I ",
            phone: "0252-4217921",
          },
        ],
      },
    },
  },
};