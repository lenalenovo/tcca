confirm("Ativar localização?");


var map;

function success(pos) {
  const { latitude, longitude } = pos.coords;

  if (!map) {
    initializeMap(latitude, longitude);
  }

  addMarker(latitude, longitude, "Você está aqui");
}

function error(error) {
  console.log(error);
}

function initializeMap(lat, lon) {
  map = L.map("mapid").setView([lat, lon], 15);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  addPointsOfInterest();
}

function addMarker(lat, lon, content) {
  L.marker([lat, lon])
    .addTo(map)
    .bindPopup(content)
    .openPopup();
}

function addPointsOfInterest() {
  const pointsOfInterest = [
    {name: "Banco Municipal do Agasalho", lat: -29.758089747508677, lon: -51.14419917876032},
    {name: "Fundação Casa Aberta", lat: -29.725953470371405, lon: -51.18354549429757 },
    {name:"Ong Grupo de Coração", lat: -29.73077351311273, lon:-51.14486492192358},
    {name:"Associação de Apoio a Criança e ao Adolescente - Amencar", lat:-29.763603890865152, lon:-51.11867314421744},
    {name: "Achados do Claudio Brechó e Acervo", lat:-29.76560044053756, lon:-51.14878039994337},
    {name:"Yes! Brechó", lat:-29.766185442108856, lon:-51.14747749939649},
    {name:"Brechó da Solidariedade", lat:-29.737109008312444, lon: -51.13835470037685},
    {name: "Feira Bem Vestida", lat:-29.76453212981316,lon: -51.144930400376865},
    {name:"Breduncho Brechó", lat:-29.765351706713925, lon:-51.14896444265551},
    {name:"Jujuba Brechó e loja infantil Sl", lat:-29.766767323750564, lon: -51.14840654319145},
    {name:"Brechó Urbano", lat:-29.759101389429077, lon: -51.08783319297312},
    {name:"Mais Brechó", lat:-29.753542374224466, lon:-51.10957653900331},
    {name:"Era Meu - Brechó infantil", lat:-29.75346785872957, lon:-51.0982039730051},
    {name:"Brechó Girasol", lat:-29.764638683943694, lon:-51.14789411572024},
    {name:"Ju Brechó", lat:-29.769667762275667, lon: -51.165800800376864},
    {name:"Brecho infantil passa e repassa kids - brechó da alegria", lat:-29.762859263386748, lon: -51.148706669690085},
    {name:"Brechó das Bênçãos", lat:-29.765169001495995, lon:-51.14874958503351},
    {name:"Brecho da Mari", lat:-29.739958634781676, lon:-51.14049666969009},
    {name:"Época Brecho", lat:-29.762780246847065, lon:-51.14908751572024},
    {name:"Brechó da Béba", lat:-29.76548139598861,lon: -51.148714054346684},
    {name:"Bah cresci brechó", lat:-29.72492556736194, lon:-51.160852300376845},
    {name:"Brechó da Danny", lat:-29.793784729047754, lon:-51.12372165767169},
    {name:"Brechó da Lisa", lat:-29.744717321768917, lon:-51.1349166390033},
    {name:"Vai & Vem Brechó e loja infantil", lat:-29.75438963982653, lon:-51.10069841625618},
    //porto alegre
    {name:"Central de Doações da Defesa Civil do Rio Grande do Sul", lat: -30.0387985524721, lon:-51.23166210150743},
    {name:"Mensageiro da Caridade", lat:-30.044148186423588,lon: -51.217929191622794},
    {name:"AtraiA", lat:-30.03016625005673, lon:-51.212607745167354},
    {name:"SOS - Casas de Acolhida", lat:-30.032246878817134, lon:-51.209002856322634},
    {name: "ONG só bebê", lat:-30.08989263327802, lon:-51.23166215751345},
    {name:"Exército de salvação", lat:-30.009654858627243, lon:-51.198703173790314},
    {name:"Associação dos Angolanos e Amigos do Rio Grande do Sul", lat:-30.0640453382652, lon:-51.191321734727325},
    {name:"Lar de Santo Antonio dos Excepcionais", lat:-30.0605844638456, lon: -51.15054896288099},
    {name:"Associação solidária Só os fortes", lat:-30.003324059650037, lon:-51.18851714700166},
    {name:"Casa de apoio Madre Ana", lat:-30.02888996312891, lon:-51.226454310558},
    {name:"Casa do Menino Jesus de Praga", lat:-30.05682365602932, lon:-51.15900503580738},
    {name:"Brick, Doações e Caridade Jamil", lat:-30.02658480218377, lon:-51.10832061738676},
    {name:"Brique do Lar Santo Antonio dos Excepcionais", lat:-30.065367884196377, lon:-51.143511198966166},
    {name:"Cáritas Brasileira - Regional RS", lat:-30.042185978606415, lon:-51.22449004013388},
    {name:"Lar Esperança de Porto Alegre", lat:-30.030839063934465, lon:-51.118192647001656},
    {name:"Divina Troca Porto Alegre", lat:-30.00967626864285, lon:-51.18782770150744},
    {name:"Me Gusta Brechó", lat:-30.017851605435332, lon:-51.20276224100701},
    {name:"Brechó Chic", lat:-30.016067953063512, lon:-51.19812738392094},
    {name:"Brechó Central", lat:-30.028106983974787, lon:-51.22645151055801},
    {name:"Brechó da Lúcia", lat:-30.01814887771173, lon:-51.19280588134064},
    {name:"Emilia Brechó", lat:-30.0402931557393, lon:-51.21495019852963},
    {name:"Brechó da Reji", lat:-30.03880711746164, lon:-51.2154651826503},
    {name:"Brechó da Anita", lat:-30.023499626298108, lon:-51.191432590352186},
    {name:"Brechós Luxo's", lat:-30.03717244961414, lon:-51.17975961695023},
    {name:"Vintage Butique Brechó", lat:-30.021567444838805, lon:-51.202247256886324},
    {name:"Era meu Agora é teu brechó infantil & Outlet", lat:-30.008041120424394, lon:-51.16739999805406},
    {name:"Brechó Boutique Maier's", lat:-30.005514020166448, lon:-51.16242181822087},
    {name:"Brechó Center", lat:-30.041036166520065, lon:-51.215121859903185},
    {name:"Peça Rara Porto Alegre", lat:-30.036280801240082, lon:-51.2252498809431},
    {name:"Brechó da Cris", lat:-30.0402931557393,lon: -51.215293521276735},
    {name:"Brechó João Pessoa", lat:-30.03925293128516, lon:-51.21632348951808},
    {name:"Brechó Lafayette", lat:-30.037766877406156, lon:-51.21615182814453},
    {name:"Brechó", lat:-30.01963522572661,lon: -51.19864236804161},
    {name:"Tienda Brechó & Outlet", lat:-30.036280801240082,lon: -51.19692575430604},
    {name:"Brechó da Mari", lat:-30.05767814750865, lon:-51.227481478799355},
    {name:"Passa Passará", lat:-30.015473395144088, lon:-51.172549839260796},
    {name:"Brechó Rosa Lima", lat:-30.0399959498668, lon:-51.21495019852963},
    {name:"Brecho Caridade infantil e adulto", lat:-30.00729786232462, lon:-51.192977542714196},
    {name:"Tendências Brechó Boutique", lat:-30.005959983712835, lon:-51.18250619892716},
    {name:"Brechó Brecholentas", lat:-30.018446149096988, lon:-51.19864236804161},
    {name:"ViP brechó", lat:-30.06649334259135, lon:-51.20591093112234},
    {name:"Nossa Senhora das Maravilhas", lat:-30.02325195360488, lon:-51.20453764013386},
    {name:"Brechó Compromisso", lat:-30.04242314583524, lon:-51.152867566692905},
    {name:"ByeByeCloset", lat:-30.02102250454841, lon:-51.19646955557663},
    {name:"Bécco Vintage Brechó", lat:-30.012854086724353, lon:-51.15192361738676},
    {name:"Cabide Chic brechó", lat:-30.007204049139474, lon:-51.20197863711702},
    {name:"Brechó Amor à Segunda Vista", tal:-30.020879119640167, lon:-51.199747039260764},
    {name:"Brechó histórico(brechó feminino adulto)", lat:-30.027418704177972, lon:-51.23081774787477},
    {name:"Brechó Inovare", lat:-30.041090986882303, lon:-51.21571154700167},
    {name:"Franboesa Brechó", lat:-30.03999051441892, lon:-51.177884817107966},
    {name:"Brechó Nonai", lat:-30.086693176951762, lon:-51.21681306212727},
    {name:"Amaxô Brechó", lat:-30.039686372119636, lon:-51.16609316319914},
    {name:"Brechó É seu meu bemmmm", lat:-30.024374445307192, lon:-51.213319100753715},
    {name:"Piriquitus Brechó infantil", lat:-30.062243264920653, lon:-51.178543562127274},
    {name:"Brechó Little kids", lat:-30.027760648574485, lon:-51.2149270076215},
    {name:"Brechó Biboka", lat:-30.11509288746141, lon:-51.2071647780066},
    {name:"Brechó da Bibi", lat:-30.03036879745681, lon:-51.15420429281406},
    {name:"Moda brechó", lat:-30.042672019691814, lon:-51.21595235418761},
    {name:"Abuse Use Brechó", lat:-30.041483219396977, lon:-51.21646733830833},
    {name:"Báu Mágico Brechó", lat:-30.103440323675926, lon:-51.23613780075372},
    {name:"Ateliê e Brechó do Porto", lat:-30.027746079228557, lon:-51.20108839515655},
    {name:"Brechó Etc & tals", lat:-30.067859221279402, lon:-51.230439755259475},
    {name:"Brechó da Tia Lili", lat:-30.06845346489991, lon:-51.20503387197291},
    {name:"Los Peraltas Brechó", lat:-30.038302828465174, lon:-51.220396599681855},
    {name:"Pateo Brecho moda feminina", lat:-30.006419374120004, lon:-51.20397543251237},
    {name:"Brechó Caminho dos Antiquários", lat:-30.03411398306506, lon:-51.22757611964991},
    {name:"Brechó Madame Talentosa", lat:-30.05566037711981, lon:-51.214787347319835},
    {name:"Cordeirinhos brechó", lat:-30.035005650935727,lon: -51.20620427864195},
    {name:"Brechó ByJoy", lat:-30.03753199966669, lon:-51.20088277606165},
    {name:"M E M brechó", lat:-30.084451011716478, lon:-51.193074807621514},
    {name:"Brechó Multimarcas", lat:-30.057693945069126, lon:-51.19405372350082},
    {name:"Brécho da Maria", lat:-30.0119139676201,lon: -51.11296215314474},
    {name:"Brechó Raffiné", lat:-30.03904147040671, lon:-51.217965347729596},
    {name:"Garimpo Pop", lat:-30.016971231590624,lon: -51.199940903505976},
    {name:"Espaço Tri Brechó em Porto Alegre", lat:-30.077930746214303, lon:-51.19867614624795},
    {name:"Rouparia360 Brechó", lat:-30.02066489576967, lon:-51.1713554780066},
    {name:"Brechó da Escadinha", lat:-30.039860775705147, lon:-51.215840831440495},
    {name:"Brechó Jeito Novo", lat:-30.03896915152213,lon: -51.21704246105538},
    {name:"PortoBella Brechó & Outlet", lat:-30.016378662977104, lon:-51.19901801683179},
    {name:"Dimittas Moda Consciente", lat:-30.02834334587499, lon:-51.20064879988059},
    {name:"Versatili Brechó", lat:-30.05531431987847, lon:-51.223565593250584},
    {name:"Brechó - Ciranda", lat:-30.01353570952328, lon:-51.19723147800659},
    {name:"Paca Brechó", lat:-30.047665794603223,lon: -51.21269634731982},
    {name:"Brechó da Sharla", lat:-30.024937665534075, lon:-51.18457065418762},
    {name:"Ki Brechó", lat:-30.041362510778537, lon:-51.215104654187606},
    {name:"Ki Brechó", lat:-30.038093232432868, lon:-51.218108728224905},
    {name:"Brechó Infatil João e Maria", lat:-30.059490187207405, lon:-51.22385938423909},
    {name:"Brechó Lua & Sol", lat:-30.041585412191985, lon:-51.21570546899508},
    {name:"Breshow", lat:-30.025312291219567, lon:-51.21905286577947},
    {name:"Pandora-Loja e Brechó", lat:-30.033932176710515, lon:-51.21192891877681},
    {name:"Santíssima Brechó & Outlet", lat:-30.015557957046283, lon:-51.195509392814046},
    {name:"Ioiô kids Brechó e Outlet Infantil", lat:-30.05722470090193, lon:-51.21523738594625},
    {name:"Hadassa Brechó", lat:-30.09156381539114,lon: -51.239147270066944},
    {name:"Tutti Frutti Brecho Infantil", lat:-30.020638259454493, lon:-51.19229255525948},
    {name:"Brechó El Favorito", lat:-30.032230892019196, lon:-51.21383605764103},
    {name:"Boomerang Kids Brechó & Outlet", lat:-30.020906405658845, lon:-51.15169900075372},
    {name:"Nina Brecho", lat:-30.03894486027882, lon:-51.216943870066935},
    {name:"Deu Bossa Brechó", lat:-30.007553767802882,lon: -51.20656805418761},
    {name:"Cabide Mágico brechó e outlet infantil", lat:-30.03425991805655, lon:-51.235610000753724},
    {name:"Roupagem Brechó e Upcycling", lat:-30.03284809626598, lon:-51.21346568356473},
    {name:"Brechó Gato Preto", lat:-30.027943716934974, lon:-51.21741389515656},
    {name:"Gateiras Bazar e Brechó", lat:-30.023262037572668,lon: -51.210890762961355},
    {name:"Brechó da Vó Célia", lat:-30.009542999746003, lon:-51.20092250075371},
    {name:"Brechó Perk Moinhos", lat:-30.024481080418482, lon:-51.20315409860994},
    {name:"Amor de Brechó", lat:-30.01005828503064, lon:-51.16894180075372},
    {name:"Brechó Circular", lat:-30.0134874811328, lon:-51.202522248828224},
    {name:"Bate Volta Brechó e loja infantil", lat:-30.01274426384, lon:-51.1879310320758},
    {name:"Retrô Brechó", lat:-30.023817624762444,lon: -51.19720074624794},
    {name:"Mostarda brechó Félix", lat:-30.021513873017685,lon: -51.20149228058689},
    {name:"Brechó da GiGi", lat:-30.014156371934764,lon: -51.19668576212726},
    {name:"Garimpo Turck brechó", lat:-30.008061866840414,lon: -51.17351147669693},
    {name:"Diva's Moda brechó", lat:-30.01668325203142,lon: -51.19926068273064}
    // Adicione mais pontos de interesse conforme necessário
  ];

  const customIcon = L.icon({
    iconUrl: "../assets/marcador.png",
    iconSize: [38, 32],
    iconAnchor: [16, 32],
  });

  pointsOfInterest.forEach((poi) => {
    addMarker(poi.lat, poi.lon, poi.name);
  });
}

var watchID = navigator.geolocation.watchPosition(success, error, {
  enableHighAccuracy: true
});







// var map ;
// function success(pos) {
//   const locations = [
//     { name: "Banco Municipal do Agasalho", lat: -29.756748520980107, lon: -51.14419917876032},
//     // ... outras localizações ...
//     { name: "Cubo Self Storage", lat: -29.964065516082552, lon: -51.177074429909574 },
//   ];

//   const customIcon = L.icon({
//     iconUrl: '../assets/marcador.png', // Substitua 'marcador.png' pelo caminho real da sua imagem
//     iconSize: [38, 32],
//     iconAnchor: [16, 32],
//   });
//   console.log(pos);

//   if(map === undefined){
//     map = L.map("mapid").setView([pos.coords.latitude, pos.coords.longitude], 15);
//   }else{
//     map.remove();
//     map = L.map("mapid").setView([pos.coords.latitude, pos.coords.longitude], 15);
//   }

//   L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     attribution:
//       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//   }).addTo(map);

//   // locations.forEach((location) => {
//   //   const content = `<div>
//   //         <strong>${location.name}</strong><br>
//   //       </div>`;
  
//   //   L.marker([location.lat, location.lon], { icon: customIcon })
//   //     .addTo(map)
//   //     .bindPopup(content);
//   // });

//   L.marker([pos.coords.latitude, pos.coords.longitude], [location.lat, location.lon])
//     .addTo(map)
//     .bindPopup("você")
//     .bindPopup(content)
//     .openPopup();    
// }

// function error(error) {
//   console.log(error);
// }
// var watchID = navigator.geolocation.watchPosition(success, error, {
//   enableHighAccuracy: true,
//   timeout: 5000,
// });

// // Adicionar outros marcadores (exemplo: pontos de interesse)
// const locations = [
//   { name: "Banco Municipal do Agasalho", lat: -29.756748520980107, lon: -51.14419917876032},
//   // ... outras localizações ...
//   { name: "Cubo Self Storage", lat: -29.964065516082552, lon: -51.177074429909574 },
// ];


// locations.forEach((location) => {
//   const content = `<div>
//         <strong>${location.name}</strong><br>
//       </div>`;

//   L.marker([location.lat, location.lon], { icon: customIcon })
//     .addTo(map)
//     .bindPopup(content);
// });

// Adicionar popups aos marcadores
// userMarker.bindPopup("Localização do Usuário").openPopup();
// poiMarker1.bindPopup("Ponto de Interesse 1");
// poiMarker2.bindPopup("Ponto de Interesse 2");

//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 10,
//     center: { lat: -33.9, lng: 151.2 },
//   });

//   setMarkers(map);

//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       initMap(position.coords.latitude, position.coords.longitude);
//     },
//     function errorCallback(error) {
//       console.log(error);
//     }
//   );
// }
