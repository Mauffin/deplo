const supports = [
  {
    img: "/supporte/1.jpg",
    text: "SKU 1001 Alameda / frente metro Ecuador 3,5 Mts X 5,0 Mts",
    ubicacion: "Alameda / frente metro Ecuador",
    Codigo: "1001",
    Alto: "3,5 mts",
    Largo: "5,0 mts",
    Lat: "-334558466",
    Long: "-706997879",
  },
  {
    img: "/supporte/2.jpg",
    text: "SKU 1002 Alameda / frente metro Ecuador 3,5 Mts X 5,0 Mts",
    ubicacion: "Alameda / frente metro Ecuador",
    Codigo: "1002",
    Alto: "3,5 mts",
    Largo: "5,0 mts",
    Lat: "-334558466",
    Long: "-706997879",
  },
  {
    img: "/supporte/3.jpg",
    text: "SKU 1003 Av. Pajaritos / frente Escuela de Investigaciones 3,5 Mts X 5,0 Mts",
    ubicacion: "Av. Pajaritos / frente Escuela de Investigaciones",
    Codigo: "1003",
    Alto: "3,5 mts",
    Largo: "5,0 mts",
    Lat: "-334596881",
    Long: "-707143571",
  },
  {
    img: "/supporte/4.jpg",
    text: "SKU 1004 Av. Pajaritos / Av. Las Torres 3,5 Mts X 5,0 Mts",
    ubicacion: "Av. Pajaritos / Av. Las Torres",
    Codigo: "1004",
    Alto: "3,5 mts",
    Largo: "5,0 mts",
    Lat: "-334675555",
    Long: "-707309569",
  },
  {
    img: "/supporte/5.jpg",
    text: "SKU 1005 Av. Las Torres / Av. Pajaritos 3,5 Mts X 5,0 Mts",

    ubicacion: "Av. Pajaritos / Av. Las Torres",
    Codigo: "1005",
    Alto: "3,5 mts",
    Largo: "5,0 mts",
    Lat: "-33467657",
    Long: "-707311217",
  },
  {
    img: "/supporte/6.jpg",
    text: "SKU 1006 Av. La Florida / Av. Departamental 3,5 Mts X 5,0 Mts",
  },
  {
    img: "/supporte/7.jpg",
    text: "SKU 1011 Av. Macul 8510 / Diagonal Las Torres 3,5 Mts X 5,0 Mts",
  },
  {
    img: "/supporte/8.jpg",
    text: "SKU 1022 Av. Argentina / Chillán 3,5 Mts X 5,0 Mts",
  },
  {
    img: "/supporte/9.jpg",
    text: "SKU 1023 Av. Argentina / Chillán 3,5 Mts X 5,0 Mts",
  },
  {
    img: "/supporte/10.jpg",
    text: "SKU 1025 Valdivia 500 / Rengo 3,76 Mts X 5,2 Mts",
  },
  {
    img: "/supporte/11.jpg",
    text: "SKU 1026 Walker Martínez 750 / Colombia 3,5 Mts X 5,0 Mts",
  },
  {
    img: "/supporte/12.jpg",
    text: "SKU 1027 Walker Martínez / Tobalaba 4,2 Mts X 6,0 Mts",
  },
  {
    img: "/supporte/13.jpg",
    text: "SKU 1138 Av. Pajaritos 3490 / Puente La Aguada, hacia Plaza Maipú 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/14.jpg",
    text: "SKU 1159 Ruta 78 Km 29,8 / hacia Melipilla 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/15.jpg",
    text: "SKU 1246 Ruta 68 Km 84,2 / Viña del Mar a Santiago 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/16.jpg",
    text: "SKU 1256 Av. Américo Vespucio / salida Camino Melipilla 12,0 Mts X 6,0 Mts",
  },
  {
    img: "/supporte/17.jpg",
    text: "SKU 1300 Av. Vicuña Mackenna 3370 / Av. Gabriela Oriente 10,0 Mts X 5,0 Mts",
  },
  {
    img: "/supporte/18.jpg",
    text: "SKU 1327 Ruta 68 Km 37,1 / Santiago hacia Viña del Mar 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/19.jpg",
    text: "SKU 1328 Ruta 68 Km 37,7 / Santiago hacia Viña del Mar 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/20.jpg",
    text: "SKU 1333 Ruta 68 Km 64,19 / Viña del Mar a Santiago 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/21.jpg",
    text: "SKU 1342 Ruta 68 Km 80,2 / Santiago a Viña del Mar 12,0 Mts X 6,0 Mts",
  },
  {
    img: "/supporte/22.jpg",
    text: "SKU 1364 Alameda 4399 / Concón bandejon central 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/23.jpg",
    text: "SKU 1365 Alameda 4399 / Concón bandejon central 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/24.jpg",
    text: "SKU 1371 Av. Pajaritos 3490 / Puente La Aguada, hacia Mall Arauco Maipú 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/25.jpg",
    text: "SKU 1527 Av. Américo Vespucio 1600 12,0 Mts X 8,0 Mts",
  },
  {
    img: "/supporte/26.jpg",
    text: "SKU 1610 Balmaceda / Salvador Reyes 6,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/27.jpg",
    text: "SKU 1611 Balmaceda / Salvador Reyes 7,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/28.jpg",
    text: "SKU 1674 Av. Irarrázaval / Emilio Vaisse 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/29.jpg",
    text: "SKU 1681 Av. Américo Vespucio / salida Gral. Velásquez 12,0 Mts X 6,0 Mts",
  },
  {
    img: "/supporte/30.jpg",
    text: "SKU 1683 Balmaceda / Salvador Reyes 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/31.jpg",
    text: "SKU 1694 Av. Pedro Montt 1746 / Carrera 6,0 Mts X 12,0 Mts",
  },
  {
    img: "/supporte/32.jpg",
    text: "SKU 17 Ruta 5 Norte Km 470 / antes de 4 esquinas 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/33.jpg",
    text: "SKU 1728 Panamericana / Bio Bio Nº1485, hacia Av. Matta 10,0 Mts X 3,0 Mts",
  },
  {
    img: "/supporte/34.jpg",
    text: "SKU 1729 Autopista Central / Carelmapu 15,0 Mts X 5,0 Mts",
  },
  {
    img: "/supporte/35.jpg",
    text: "SKU 1743 Gral. San Martín Km 7,6 / Av. Del Valle 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/36.jpg",
    text: "SKU 1756 Av. Américo Vespucio 685 / salida Ruta Maipo 12,0 Mts X 8,0 Mts",
  },
  {
    img: "/supporte/37.jpg",
    text: "SKU 1920 Av. Alessandri 1281 / Carlos Condell 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/38.jpg",
    text: "SKU 1921A Camilo Henríquez 34 / José Manso de Velasco 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/39.jpg",
    text: "SKU 1921B Camilo Henríquez 34 / José Manso de Velasco 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/40.jpg",
    text: "SKU 1922 Balmaceda / Uribe 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/41.jpg",
    text: "SKU 1949 Av. Américo Vespucio 3137 / Pasado Norte Sur 10,0 Mts X 6,0 Mts",
  },
  {
    img: "/supporte/42.jpg",
    text: "SKU 2003A Av. Caupolicán 1211 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/43.jpg",
    text: "SKU 2003B Av. Caupolicán 1211 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/44.jpg",
    text: "SKU 2004 Av. Américo Vespucio / Pasado Grecia 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/45.jpg",
    text: "SKU 2005 Ruta 68 Km 10,4 / Salida Santiago hacia Viña del Mar 12,0 Mts X 8,0 Mts",
  },
  {
    img: "/supporte/46.jpg",
    text: "SKU 2006 Av. Camilo Henríquez / Gabriela Oriente 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/47.jpg",
    text: "SKU 2010 Autopista Central 740 / Jorge Hirmas 12,0 Mts X 4,0 Mts",
  },
  {
    img: "/supporte/48.jpg",
    text: "SKU 2011 Av. Américo Vespucio 5602 / Av. La Florida 17,0 Mts X 6,0 Mts",
  },
];

export default supports;
