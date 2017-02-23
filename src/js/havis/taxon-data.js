var taxons = (function iife() {

    var taksonit = [
        {
            "suku": "ACC",
            "birds": [
                {
                    "nimi": "Accipiter gentilis",
                    "suku": "ACC",
                    "lyhenne": "ACCGEN"
                },
                {
                    "nimi": "Accipiter nisus",
                    "suku": "ACC",
                    "lyhenne": "ACCNIS"
                }
            ]
        },
        {
            "suku": "ACR",
            "birds": [
                {
                    "nimi": "Acrocephalus agricola",
                    "suku": "ACR",
                    "lyhenne": "ACRAGR"
                },
                {
                    "nimi": "Acrocephalus arundinaceus",
                    "suku": "ACR",
                    "lyhenne": "ACRARU"
                },
                {
                    "nimi": "Acrocephalus dumetorum",
                    "suku": "ACR",
                    "lyhenne": "ACRDUM"
                },
                {
                    "nimi": "Acrocephalus paludicola",
                    "suku": "ACR",
                    "lyhenne": "ACROLA"
                },
                {
                    "nimi": "Acrocephalus palustris",
                    "suku": "ACR",
                    "lyhenne": "ACRRIS"
                },
                {
                    "nimi": "Acrocephalus schoenobaenus",
                    "suku": "ACR",
                    "lyhenne": "ACRSCH"
                },
                {
                    "nimi": "Acrocephalus scirpaceus",
                    "suku": "ACR",
                    "lyhenne": "ACRSCI"
                }
            ]
        },
        {
            "suku": "ACT",
            "birds": [
                {
                    "nimi": "Actitis hypoleucos",
                    "suku": "ACT",
                    "lyhenne": "ACTHYP"
                },
                {
                    "nimi": "Actitis macularius",
                    "suku": "ACT",
                    "lyhenne": "ACTMAC"
                }
            ]
        },
        {
            "suku": "AEG",
            "birds": [
                {
                    "nimi": "Aegithalos caudatus",
                    "suku": "AEG",
                    "lyhenne": "AEGCAU"
                },
                {
                    "nimi": "Aegolius funereus",
                    "suku": "AEG",
                    "lyhenne": "AEGFUN"
                },
                {
                    "nimi": "Aegypius monachus",
                    "suku": "AEG",
                    "lyhenne": "AEGMON"
                }
            ]
        },
        {
            "suku": "AIX",
            "birds": [
                {
                    "nimi": "Aix galericulata",
                    "suku": "AIX",
                    "lyhenne": "AIXGAL"
                },
                {
                    "nimi": "Aix sponsa",
                    "suku": "AIX",
                    "lyhenne": "AIXSPO"
                }
            ]
        },
        {
            "suku": "ALA",
            "birds": [
                {
                    "nimi": "Alauda arvensis",
                    "suku": "ALA",
                    "lyhenne": "ALAARV"
                }
            ]
        },
        {
            "suku": "ALC",
            "birds": [
                {
                    "nimi": "Alcedo atthis",
                    "suku": "ALC",
                    "lyhenne": "ALCATT"
                },
                {
                    "nimi": "Alca torda",
                    "suku": "ALC",
                    "lyhenne": "ALCTOR"
                }
            ]
        },
        {
            "suku": "ALL",
            "birds": [
                {
                    "nimi": "Alle alle",
                    "suku": "ALL",
                    "lyhenne": "ALLALL"
                }
            ]
        },
        {
            "suku": "ANA",
            "birds": [
                {
                    "nimi": "Anas acuta",
                    "suku": "ANA",
                    "lyhenne": "ANAACU"
                },
                {
                    "nimi": "Anas americana",
                    "suku": "ANA",
                    "lyhenne": "ANAAME"
                },
                {
                    "nimi": "Anas bahamensis",
                    "suku": "ANA",
                    "lyhenne": "ANABAH"
                },
                {
                    "nimi": "Anas carolinensis",
                    "suku": "ANA",
                    "lyhenne": "ANACAR"
                },
                {
                    "nimi": "Anas clypeata",
                    "suku": "ANA",
                    "lyhenne": "ANACLY"
                },
                {
                    "nimi": "Anas crecca",
                    "suku": "ANA",
                    "lyhenne": "ANACRE"
                },
                {
                    "nimi": "Anas cyanoptera",
                    "suku": "ANA",
                    "lyhenne": "ANACYA"
                },
                {
                    "nimi": "Anas discors",
                    "suku": "ANA",
                    "lyhenne": "ANADIS"
                },
                {
                    "nimi": "Anas falcata",
                    "suku": "ANA",
                    "lyhenne": "ANAFAL"
                },
                {
                    "nimi": "Anas formosa",
                    "suku": "ANA",
                    "lyhenne": "ANAFOR"
                },
                {
                    "nimi": "Anas penelope",
                    "suku": "ANA",
                    "lyhenne": "ANAPEN"
                },
                {
                    "nimi": "Anas platyrhynchos",
                    "suku": "ANA",
                    "lyhenne": "ANAPLA"
                },
                {
                    "nimi": "Anas querquedula",
                    "suku": "ANA",
                    "lyhenne": "ANAQUE"
                },
                {
                    "nimi": "Anas rubripes",
                    "suku": "ANA",
                    "lyhenne": "ANARUB"
                },
                {
                    "nimi": "Anas strepera",
                    "suku": "ANA",
                    "lyhenne": "ANASTR"
                }
            ]
        },
        {
            "suku": "ANS",
            "birds": [
                {
                    "nimi": "Anser / Branta",
                    "suku": "ANS",
                    "lyhenne": "ANS/BRA"
                },
                {
                    "nimi": "Anser albifrons",
                    "suku": "ANS",
                    "lyhenne": "ANSALB"
                },
                {
                    "nimi": "Anser anser",
                    "suku": "ANS",
                    "lyhenne": "ANSANS"
                },
                {
                    "nimi": "Anser brachyrhynchus",
                    "suku": "ANS",
                    "lyhenne": "ANSBRA"
                },
                {
                    "nimi": "Anser caerulescens",
                    "suku": "ANS",
                    "lyhenne": "ANSCAE"
                },
                {
                    "nimi": "Anser erythropus",
                    "suku": "ANS",
                    "lyhenne": "ANSERY"
                },
                {
                    "nimi": "Anser fabalis",
                    "suku": "ANS",
                    "lyhenne": "ANSFAB"
                },
                {
                    "nimi": "Anser fabalis fabalis",
                    "suku": "ANS",
                    "lyhenne": "ANSFABFAB"
                },
                {
                    "nimi": "Anser fabalis rossicus",
                    "suku": "ANS",
                    "lyhenne": "ANSFABROS"
                },
                {
                    "nimi": "Anser indicus",
                    "suku": "ANS",
                    "lyhenne": "ANSIND"
                }
            ]
        },
        {
            "suku": "ANT",
            "birds": [
                {
                    "nimi": "Anthus campestris",
                    "suku": "ANT",
                    "lyhenne": "ANTCAM"
                },
                {
                    "nimi": "Anthus cervinus",
                    "suku": "ANT",
                    "lyhenne": "ANTCER"
                },
                {
                    "nimi": "Anthus godlewskii",
                    "suku": "ANT",
                    "lyhenne": "ANTGOD"
                },
                {
                    "nimi": "Anthus gustavi",
                    "suku": "ANT",
                    "lyhenne": "ANTGUS"
                },
                {
                    "nimi": "Anthus hodgsoni",
                    "suku": "ANT",
                    "lyhenne": "ANTHOD"
                },
                {
                    "nimi": "Anthus petrosus",
                    "suku": "ANT",
                    "lyhenne": "ANTPET"
                },
                {
                    "nimi": "Anthus pratensis",
                    "suku": "ANT",
                    "lyhenne": "ANTPRA"
                },
                {
                    "nimi": "Anthus richardi",
                    "suku": "ANT",
                    "lyhenne": "ANTRIC"
                },
                {
                    "nimi": "Anthus trivialis",
                    "suku": "ANT",
                    "lyhenne": "ANTTRI"
                }
            ]
        },
        {
            "suku": "APU",
            "birds": [
                {
                    "nimi": "Apus apus",
                    "suku": "APU",
                    "lyhenne": "APUAPU"
                }
            ]
        },
        {
            "suku": "AQU",
            "birds": [
                {
                    "nimi": "Aquila chrysaetos",
                    "suku": "AQU",
                    "lyhenne": "AQUCHR"
                },
                {
                    "nimi": "Aquila clanga",
                    "suku": "AQU",
                    "lyhenne": "AQUCLA"
                },
                {
                    "nimi": "Aquila heliaca",
                    "suku": "AQU",
                    "lyhenne": "AQUHEL"
                },
                {
                    "nimi": "Aquila nipalensis",
                    "suku": "AQU",
                    "lyhenne": "AQUNIP"
                },
                {
                    "nimi": "Aquila pennata",
                    "suku": "AQU",
                    "lyhenne": "AQUPEN"
                },
                {
                    "nimi": "Aquila pomarina",
                    "suku": "AQU",
                    "lyhenne": "AQUPOM"
                }
            ]
        },
        {
            "suku": "ARD",
            "birds": [
                {
                    "nimi": "Ardea cinerea",
                    "suku": "ARD",
                    "lyhenne": "ARDCIN"
                }
            ]
        },
        {
            "suku": "ARE",
            "birds": [
                {
                    "nimi": "Arenaria interpres",
                    "suku": "ARE",
                    "lyhenne": "AREINT"
                }
            ]
        },
        {
            "suku": "ASI",
            "birds": [
                {
                    "nimi": "Asio flammeus",
                    "suku": "ASI",
                    "lyhenne": "ASIFLA"
                },
                {
                    "nimi": "Asio otus",
                    "suku": "ASI",
                    "lyhenne": "ASIOTU"
                }
            ]
        },
        {
            "suku": "ATH",
            "birds": [
                {
                    "nimi": "Athene noctua",
                    "suku": "ATH",
                    "lyhenne": "ATHNOC"
                }
            ]
        },
        {
            "suku": "AYT",
            "birds": [
                {
                    "nimi": "Aythya ferina",
                    "suku": "AYT",
                    "lyhenne": "AYTFER"
                },
                {
                    "nimi": "Aythya fuligula",
                    "suku": "AYT",
                    "lyhenne": "AYTFUL"
                },
                {
                    "nimi": "Aythya marila",
                    "suku": "AYT",
                    "lyhenne": "AYTMAR"
                },
                {
                    "nimi": "Aythya nyroca",
                    "suku": "AYT",
                    "lyhenne": "AYTNYR"
                }
            ]
        },
        {
            "suku": "BOM",
            "birds": [
                {
                    "nimi": "Bombycilla garrulus",
                    "suku": "BOM",
                    "lyhenne": "BOMGAR"
                }
            ]
        },
        {
            "suku": "BOT",
            "birds": [
                {
                    "nimi": "Botaurus stellaris",
                    "suku": "BOT",
                    "lyhenne": "BOTSTE"
                }
            ]
        },
        {
            "suku": "BRA",
            "birds": [
                {
                    "nimi": "Branta bernicla",
                    "suku": "BRA",
                    "lyhenne": "BRABER"
                },
                {
                    "nimi": "Branta canadensis",
                    "suku": "BRA",
                    "lyhenne": "BRACAN"
                },
                {
                    "nimi": "Branta leucopsis",
                    "suku": "BRA",
                    "lyhenne": "BRALEU"
                },
                {
                    "nimi": "Branta ruficollis",
                    "suku": "BRA",
                    "lyhenne": "BRARUF"
                }
            ]
        },
        {
            "suku": "BUB",
            "birds": [
                {
                    "nimi": "Bubo bubo",
                    "suku": "BUB",
                    "lyhenne": "BUBBUB"
                },
                {
                    "nimi": "Bubo scandiacus",
                    "suku": "BUB",
                    "lyhenne": "BUBSCA"
                }
            ]
        },
        {
            "suku": "BUC",
            "birds": [
                {
                    "nimi": "Bucephala clangula",
                    "suku": "BUC",
                    "lyhenne": "BUCCLA"
                }
            ]
        },
        {
            "suku": "BUT",
            "birds": [
                {
                    "nimi": "Buteo buteo",
                    "suku": "BUT",
                    "lyhenne": "BUTBUT"
                },
                {
                    "nimi": "Buteo lagopus",
                    "suku": "BUT",
                    "lyhenne": "BUTLAG"
                },
                {
                    "nimi": "Buteo rufinus",
                    "suku": "BUT",
                    "lyhenne": "BUTRUF"
                }
            ]
        },
        {
            "suku": "CAL",
            "birds": [
                {
                    "nimi": "Calidris acuminata",
                    "suku": "CAL",
                    "lyhenne": "CALACU"
                },
                {
                    "nimi": "Calidris alba",
                    "suku": "CAL",
                    "lyhenne": "CALALB"
                },
                {
                    "nimi": "Calidris alpina",
                    "suku": "CAL",
                    "lyhenne": "CALALP"
                },
                {
                    "nimi": "Calidris alpina schinzii",
                    "suku": "CAL",
                    "lyhenne": "CALALPSCH"
                },
                {
                    "nimi": "Calandrella brachydactyla",
                    "suku": "CAL",
                    "lyhenne": "CALBRA"
                },
                {
                    "nimi": "Calidris canutus",
                    "suku": "CAL",
                    "lyhenne": "CALCAN"
                },
                {
                    "nimi": "Calandrella rufescens",
                    "suku": "CAL",
                    "lyhenne": "CALENS"
                },
                {
                    "nimi": "Calidris ferruginea",
                    "suku": "CAL",
                    "lyhenne": "CALFER"
                },
                {
                    "nimi": "Calidris fuscicollis",
                    "suku": "CAL",
                    "lyhenne": "CALFUS"
                },
                {
                    "nimi": "Calidris himantopus",
                    "suku": "CAL",
                    "lyhenne": "CALHIM"
                },
                {
                    "nimi": "Calcarius lapponicus",
                    "suku": "CAL",
                    "lyhenne": "CALLAP"
                },
                {
                    "nimi": "Calidris ruficollis",
                    "suku": "CAL",
                    "lyhenne": "CALLIS"
                },
                {
                    "nimi": "Calidris minutilla",
                    "suku": "CAL",
                    "lyhenne": "CALLLA"
                },
                {
                    "nimi": "Calidris maritima",
                    "suku": "CAL",
                    "lyhenne": "CALMAR"
                },
                {
                    "nimi": "Calidris melanotos",
                    "suku": "CAL",
                    "lyhenne": "CALMEL"
                },
                {
                    "nimi": "Calidris subminuta",
                    "suku": "CAL",
                    "lyhenne": "CALSUB"
                },
                {
                    "nimi": "Calidris temminckii",
                    "suku": "CAL",
                    "lyhenne": "CALTEM"
                },
                {
                    "nimi": "Calidris minuta",
                    "suku": "CAL",
                    "lyhenne": "CALUTA"
                }
            ]
        },
        {
            "suku": "CAP",
            "birds": [
                {
                    "nimi": "Caprimulgus europaeus",
                    "suku": "CAP",
                    "lyhenne": "CAPEUR"
                }
            ]
        },
        {
            "suku": "CAR",
            "birds": [
                {
                    "nimi": "Carduelis cannabina",
                    "suku": "CAR",
                    "lyhenne": "CARCAN"
                },
                {
                    "nimi": "Carduelis carduelis",
                    "suku": "CAR",
                    "lyhenne": "CARCAR"
                },
                {
                    "nimi": "Carduelis chloris",
                    "suku": "CAR",
                    "lyhenne": "CARCHL"
                },
                {
                    "nimi": "Carpodacus erythrinus",
                    "suku": "CAR",
                    "lyhenne": "CARERY"
                },
                {
                    "nimi": "Carduelis hornemanni",
                    "suku": "CAR",
                    "lyhenne": "CARHOR"
                },
                {
                    "nimi": "Carduelis flammea",
                    "suku": "CAR",
                    "lyhenne": "CARMEA"
                },
                {
                    "nimi": "Carduelis flavirostris",
                    "suku": "CAR",
                    "lyhenne": "CARRIS"
                },
                {
                    "nimi": "Carduelis sp",
                    "suku": "CAR",
                    "lyhenne": "CARSP"
                },
                {
                    "nimi": "Carduelis spinus",
                    "suku": "CAR",
                    "lyhenne": "CARSPI"
                }
            ]
        },
        {
            "suku": "CEP",
            "birds": [
                {
                    "nimi": "Cepphus grylle",
                    "suku": "CEP",
                    "lyhenne": "CEPGRY"
                }
            ]
        },
        {
            "suku": "CER",
            "birds": [
                {
                    "nimi": "Certhia familiaris",
                    "suku": "CER",
                    "lyhenne": "CERFAM"
                },
                {
                    "nimi": "Cercotrichas galactotes",
                    "suku": "CER",
                    "lyhenne": "CERGAL"
                }
            ]
        },
        {
            "suku": "CHA",
            "birds": [
                {
                    "nimi": "Charadrius alexandrinus",
                    "suku": "CHA",
                    "lyhenne": "CHAALE"
                },
                {
                    "nimi": "Charadrius asiaticus",
                    "suku": "CHA",
                    "lyhenne": "CHAASI"
                },
                {
                    "nimi": "Charadrius dubius",
                    "suku": "CHA",
                    "lyhenne": "CHADUB"
                },
                {
                    "nimi": "Charadrius hiaticula",
                    "suku": "CHA",
                    "lyhenne": "CHAHIA"
                },
                {
                    "nimi": "Charadrius leschenaultii",
                    "suku": "CHA",
                    "lyhenne": "CHALES"
                },
                {
                    "nimi": "Charadrius mongolus",
                    "suku": "CHA",
                    "lyhenne": "CHAMON"
                },
                {
                    "nimi": "Charadrius morinellus",
                    "suku": "CHA",
                    "lyhenne": "CHAMOR"
                }
            ]
        },
        {
            "suku": "CHL",
            "birds": [
                {
                    "nimi": "Chlamydotis macqueenii",
                    "suku": "CHL",
                    "lyhenne": "CHLMAC"
                },
                {
                    "nimi": "Chlidonias niger",
                    "suku": "CHL",
                    "lyhenne": "CHLNIG"
                }
            ]
        },
        {
            "suku": "CIC",
            "birds": [
                {
                    "nimi": "Ciconia ciconia",
                    "suku": "CIC",
                    "lyhenne": "CICCIC"
                },
                {
                    "nimi": "Ciconia nigra",
                    "suku": "CIC",
                    "lyhenne": "CICNIG"
                }
            ]
        },
        {
            "suku": "CIN",
            "birds": [
                {
                    "nimi": "Cinclus cinclus",
                    "suku": "CIN",
                    "lyhenne": "CINCIN"
                }
            ]
        },
        {
            "suku": "CIR",
            "birds": [
                {
                    "nimi": "Circus aeruginosus",
                    "suku": "CIR",
                    "lyhenne": "CIRAER"
                },
                {
                    "nimi": "Circus cyaneus",
                    "suku": "CIR",
                    "lyhenne": "CIRCYA"
                },
                {
                    "nimi": "Circaetus gallicus",
                    "suku": "CIR",
                    "lyhenne": "CIRGAL"
                },
                {
                    "nimi": "Circus macrourus",
                    "suku": "CIR",
                    "lyhenne": "CIRMAC"
                },
                {
                    "nimi": "Circus pygargus",
                    "suku": "CIR",
                    "lyhenne": "CIRPYG"
                }
            ]
        },
        {
            "suku": "CLA",
            "birds": [
                {
                    "nimi": "Clangula hyemalis",
                    "suku": "CLA",
                    "lyhenne": "CLAHYE"
                }
            ]
        },
        {
            "suku": "COC",
            "birds": [
                {
                    "nimi": "Coccothraustes coccothraustes",
                    "suku": "COC",
                    "lyhenne": "COCCOC"
                }
            ]
        },
        {
            "suku": "COL",
            "birds": [
                {
                    "nimi": "Columba livia",
                    "suku": "COL",
                    "lyhenne": "COLLIV"
                },
                {
                    "nimi": "Columba oenas",
                    "suku": "COL",
                    "lyhenne": "COLOEN"
                },
                {
                    "nimi": "Columba palumbus",
                    "suku": "COL",
                    "lyhenne": "COLPAL"
                }
            ]
        },
        {
            "suku": "COR",
            "birds": [
                {
                    "nimi": "Corvus frugilegus",
                    "suku": "COR",
                    "lyhenne": "CORFRU"
                },
                {
                    "nimi": "Coracias garrulus",
                    "suku": "COR",
                    "lyhenne": "CORGAR"
                },
                {
                    "nimi": "Corvus monedula",
                    "suku": "COR",
                    "lyhenne": "CORMON"
                },
                {
                    "nimi": "Corvus corone",
                    "suku": "COR",
                    "lyhenne": "CORNIX"
                },
                {
                    "nimi": "Corvus corone corone",
                    "suku": "COR",
                    "lyhenne": "CORONEONE"
                },
                {
                    "nimi": "Corvus corax",
                    "suku": "COR",
                    "lyhenne": "CORRAX"
                }
            ]
        },
        {
            "suku": "COT",
            "birds": [
                {
                    "nimi": "Coturnix coturnix",
                    "suku": "COT",
                    "lyhenne": "COTCOT"
                }
            ]
        },
        {
            "suku": "CRE",
            "birds": [
                {
                    "nimi": "Crex crex",
                    "suku": "CRE",
                    "lyhenne": "CRECRE"
                }
            ]
        },
        {
            "suku": "CUC",
            "birds": [
                {
                    "nimi": "Cuculus canorus",
                    "suku": "CUC",
                    "lyhenne": "CUCCAN"
                }
            ]
        },
        {
            "suku": "CYG",
            "birds": [
                {
                    "nimi": "Cygnus atratus",
                    "suku": "CYG",
                    "lyhenne": "CYGATR"
                },
                {
                    "nimi": "Cygnus columbianus",
                    "suku": "CYG",
                    "lyhenne": "CYGCOL"
                },
                {
                    "nimi": "Cygnus cygnus",
                    "suku": "CYG",
                    "lyhenne": "CYGCYG"
                },
                {
                    "nimi": "Cygnus olor",
                    "suku": "CYG",
                    "lyhenne": "CYGOLO"
                }
            ]
        },
        {
            "suku": "DEL",
            "birds": [
                {
                    "nimi": "Delichon urbicum",
                    "suku": "DEL",
                    "lyhenne": "DELURB"
                }
            ]
        },
        {
            "suku": "DEN",
            "birds": [
                {
                    "nimi": "Dendrocopos leucotos",
                    "suku": "DEN",
                    "lyhenne": "DENLEU"
                },
                {
                    "nimi": "Dendrocopos major",
                    "suku": "DEN",
                    "lyhenne": "DENMAJ"
                },
                {
                    "nimi": "Dendrocopos minor",
                    "suku": "DEN",
                    "lyhenne": "DENMIN"
                }
            ]
        },
        {
            "suku": "DRY",
            "birds": [
                {
                    "nimi": "Dryocopus martius",
                    "suku": "DRY",
                    "lyhenne": "DRYMAR"
                }
            ]
        },
        {
            "suku": "EGR",
            "birds": [
                {
                    "nimi": "Egretta alba",
                    "suku": "EGR",
                    "lyhenne": "EGRALB"
                },
                {
                    "nimi": "Egretta garzetta",
                    "suku": "EGR",
                    "lyhenne": "EGRGAR"
                }
            ]
        },
        {
            "suku": "EMB",
            "birds": [
                {
                    "nimi": "Emberiza aureola",
                    "suku": "EMB",
                    "lyhenne": "EMBAUR"
                },
                {
                    "nimi": "Emberiza bruniceps",
                    "suku": "EMB",
                    "lyhenne": "EMBBRU"
                },
                {
                    "nimi": "Emberiza buchanani",
                    "suku": "EMB",
                    "lyhenne": "EMBBUC"
                },
                {
                    "nimi": "Emberiza caesia",
                    "suku": "EMB",
                    "lyhenne": "EMBCAE"
                },
                {
                    "nimi": "Emberiza calandra",
                    "suku": "EMB",
                    "lyhenne": "EMBCAL"
                },
                {
                    "nimi": "Emberiza cioides",
                    "suku": "EMB",
                    "lyhenne": "EMBCIO"
                },
                {
                    "nimi": "Emberiza citrinella",
                    "suku": "EMB",
                    "lyhenne": "EMBCIT"
                },
                {
                    "nimi": "Emberiza hortulana",
                    "suku": "EMB",
                    "lyhenne": "EMBHOR"
                },
                {
                    "nimi": "Emberiza leucocephalos",
                    "suku": "EMB",
                    "lyhenne": "EMBLEU"
                },
                {
                    "nimi": "Emberiza melanocephala",
                    "suku": "EMB",
                    "lyhenne": "EMBMEL"
                },
                {
                    "nimi": "Emberiza pusilla",
                    "suku": "EMB",
                    "lyhenne": "EMBPUS"
                },
                {
                    "nimi": "Emberiza rustica",
                    "suku": "EMB",
                    "lyhenne": "EMBRUS"
                },
                {
                    "nimi": "Emberiza rutila",
                    "suku": "EMB",
                    "lyhenne": "EMBRUT"
                },
                {
                    "nimi": "Emberiza schoeniclus",
                    "suku": "EMB",
                    "lyhenne": "EMBSCH"
                }
            ]
        },
        {
            "suku": "ERE",
            "birds": [
                {
                    "nimi": "Eremophila alpestris",
                    "suku": "ERE",
                    "lyhenne": "EREALP"
                }
            ]
        },
        {
            "suku": "ERI",
            "birds": [
                {
                    "nimi": "Erithacus rubecula",
                    "suku": "ERI",
                    "lyhenne": "ERIRUB"
                }
            ]
        },
        {
            "suku": "FAL",
            "birds": [
                {
                    "nimi": "Falco columbarius",
                    "suku": "FAL",
                    "lyhenne": "FALCOL"
                },
                {
                    "nimi": "Falco peregrinus",
                    "suku": "FAL",
                    "lyhenne": "FALPER"
                },
                {
                    "nimi": "Falco rusticolus",
                    "suku": "FAL",
                    "lyhenne": "FALRUS"
                },
                {
                    "nimi": "Falco subbuteo",
                    "suku": "FAL",
                    "lyhenne": "FALSUB"
                },
                {
                    "nimi": "Falco tinnunculus",
                    "suku": "FAL",
                    "lyhenne": "FALTIN"
                },
                {
                    "nimi": "Falco vespertinus",
                    "suku": "FAL",
                    "lyhenne": "FALVES"
                }
            ]
        },
        {
            "suku": "FIC",
            "birds": [
                {
                    "nimi": "Ficedula albicollis",
                    "suku": "FIC",
                    "lyhenne": "FICALB"
                },
                {
                    "nimi": "Ficedula hypoleuca",
                    "suku": "FIC",
                    "lyhenne": "FICHYP"
                },
                {
                    "nimi": "Ficedula parva",
                    "suku": "FIC",
                    "lyhenne": "FICPAR"
                }
            ]
        },
        {
            "suku": "FRA",
            "birds": [
                {
                    "nimi": "Fratercula arctica",
                    "suku": "FRA",
                    "lyhenne": "FRAARC"
                }
            ]
        },
        {
            "suku": "FRI",
            "birds": [
                {
                    "nimi": "Fringilla coelebs",
                    "suku": "FRI",
                    "lyhenne": "FRICOE"
                },
                {
                    "nimi": "Fringilla montifringilla",
                    "suku": "FRI",
                    "lyhenne": "FRIMON"
                }
            ]
        },
        {
            "suku": "FUL",
            "birds": [
                {
                    "nimi": "Fulica atra",
                    "suku": "FUL",
                    "lyhenne": "FULATR"
                },
                {
                    "nimi": "Fulmarus glacialis",
                    "suku": "FUL",
                    "lyhenne": "FULGLA"
                }
            ]
        },
        {
            "suku": "GAL",
            "birds": [
                {
                    "nimi": "Gallinula chloropus",
                    "suku": "GAL",
                    "lyhenne": "GALCHL"
                },
                {
                    "nimi": "Galerida cristata",
                    "suku": "GAL",
                    "lyhenne": "GALCRI"
                },
                {
                    "nimi": "Gallinago gallinago",
                    "suku": "GAL",
                    "lyhenne": "GALGAL"
                },
                {
                    "nimi": "Gallinago media",
                    "suku": "GAL",
                    "lyhenne": "GALMED"
                }
            ]
        },
        {
            "suku": "GAR",
            "birds": [
                {
                    "nimi": "Garrulus glandarius",
                    "suku": "GAR",
                    "lyhenne": "GARGLA"
                }
            ]
        },
        {
            "suku": "GAV",
            "birds": [
                {
                    "nimi": "Gavia adamsii",
                    "suku": "GAV",
                    "lyhenne": "GAVADA"
                },
                {
                    "nimi": "Gavia arctica",
                    "suku": "GAV",
                    "lyhenne": "GAVARC"
                },
                {
                    "nimi": "Gavia immer",
                    "suku": "GAV",
                    "lyhenne": "GAVIMM"
                },
                {
                    "nimi": "Gavia stellata",
                    "suku": "GAV",
                    "lyhenne": "GAVSTE"
                }
            ]
        },
        {
            "suku": "GLA",
            "birds": [
                {
                    "nimi": "Glaucidium passerinum",
                    "suku": "GLA",
                    "lyhenne": "GLAPAS"
                }
            ]
        },
        {
            "suku": "GRU",
            "birds": [
                {
                    "nimi": "Grus canadensis",
                    "suku": "GRU",
                    "lyhenne": "GRUCAN"
                },
                {
                    "nimi": "Grus grus",
                    "suku": "GRU",
                    "lyhenne": "GRUGRU"
                },
                {
                    "nimi": "Grus virgo",
                    "suku": "GRU",
                    "lyhenne": "GRUVIR"
                }
            ]
        },
        {
            "suku": "GYP",
            "birds": [
                {
                    "nimi": "Gyps fulvus",
                    "suku": "GYP",
                    "lyhenne": "GYPFUL"
                },
                {
                    "nimi": "Gyps sp",
                    "suku": "GYP",
                    "lyhenne": "GYPSP"
                }
            ]
        },
        {
            "suku": "HAE",
            "birds": [
                {
                    "nimi": "Haematopus ostralegus",
                    "suku": "HAE",
                    "lyhenne": "HAEOST"
                }
            ]
        },
        {
            "suku": "HAL",
            "birds": [
                {
                    "nimi": "Haliaeetus albicilla",
                    "suku": "HAL",
                    "lyhenne": "HALALB"
                },
                {
                    "nimi": "Haliaeetus leucoryphus",
                    "suku": "HAL",
                    "lyhenne": "HALHUS"
                }
            ]
        },
        {
            "suku": "HIP",
            "birds": [
                {
                    "nimi": "Hippolais icterina",
                    "suku": "HIP",
                    "lyhenne": "HIPICT"
                }
            ]
        },
        {
            "suku": "HIR",
            "birds": [
                {
                    "nimi": "Hirundo rustica",
                    "suku": "HIR",
                    "lyhenne": "HIRRUS"
                }
            ]
        },
        {
            "suku": "HYD",
            "birds": [
                {
                    "nimi": "Hydroprogne caspia",
                    "suku": "HYD",
                    "lyhenne": "HYDCAS"
                },
                {
                    "nimi": "Hydrocoloeus minutus",
                    "suku": "HYD",
                    "lyhenne": "HYDMIN"
                }
            ]
        },
        {
            "suku": "JYN",
            "birds": [
                {
                    "nimi": "Jynx torquilla",
                    "suku": "JYN",
                    "lyhenne": "JYNTOR"
                }
            ]
        },
        {
            "suku": "LAG",
            "birds": [
                {
                    "nimi": "Lagopus lagopus",
                    "suku": "LAG",
                    "lyhenne": "LAGLAG"
                },
                {
                    "nimi": "Lagopus muta",
                    "suku": "LAG",
                    "lyhenne": "LAGMUT"
                }
            ]
        },
        {
            "suku": "LAN",
            "birds": [
                {
                    "nimi": "Lanius collurio",
                    "suku": "LAN",
                    "lyhenne": "LANCOL"
                },
                {
                    "nimi": "Lanius excubitor",
                    "suku": "LAN",
                    "lyhenne": "LANEXC"
                }
            ]
        },
        {
            "suku": "LAR",
            "birds": [
                {
                    "nimi": "Larus argentatus",
                    "suku": "LAR",
                    "lyhenne": "LARARG"
                },
                {
                    "nimi": "Larus canus",
                    "suku": "LAR",
                    "lyhenne": "LARCAN"
                },
                {
                    "nimi": "Larus fuscus",
                    "suku": "LAR",
                    "lyhenne": "LARFUS"
                },
                {
                    "nimi": "Larus glaucoides",
                    "suku": "LAR",
                    "lyhenne": "LARGLA"
                },
                {
                    "nimi": "Larus hyperboreus",
                    "suku": "LAR",
                    "lyhenne": "LARHYP"
                },
                {
                    "nimi": "Larus marinus",
                    "suku": "LAR",
                    "lyhenne": "LARMAR"
                },
                {
                    "nimi": "Larus ridibundus",
                    "suku": "LAR",
                    "lyhenne": "LARRID"
                },
                {
                    "nimi": "Larus schistisagus",
                    "suku": "LAR",
                    "lyhenne": "LARSCH"
                }
            ]
        },
        {
            "suku": "LIM",
            "birds": [
                {
                    "nimi": "Limicola falcinellus",
                    "suku": "LIM",
                    "lyhenne": "LIMFAL"
                },
                {
                    "nimi": "Limosa lapponica",
                    "suku": "LIM",
                    "lyhenne": "LIMLAP"
                },
                {
                    "nimi": "Limosa limosa",
                    "suku": "LIM",
                    "lyhenne": "LIMLIM"
                },
                {
                    "nimi": "Limnodromus scolopaceus",
                    "suku": "LIM",
                    "lyhenne": "LIMSCO"
                }
            ]
        },
        {
            "suku": "LOC",
            "birds": [
                {
                    "nimi": "Locustella fluviatilis",
                    "suku": "LOC",
                    "lyhenne": "LOCFLU"
                },
                {
                    "nimi": "Locustella lanceolata",
                    "suku": "LOC",
                    "lyhenne": "LOCLAN"
                },
                {
                    "nimi": "Locustella luscinioides",
                    "suku": "LOC",
                    "lyhenne": "LOCLUS"
                },
                {
                    "nimi": "Locustella naevia",
                    "suku": "LOC",
                    "lyhenne": "LOCNAE"
                }
            ]
        },
        {
            "suku": "LOX",
            "birds": [
                {
                    "nimi": "Loxia curvirostra",
                    "suku": "LOX",
                    "lyhenne": "LOXCUR"
                },
                {
                    "nimi": "Loxia leucoptera",
                    "suku": "LOX",
                    "lyhenne": "LOXLEU"
                },
                {
                    "nimi": "Loxia pytyopsittacus",
                    "suku": "LOX",
                    "lyhenne": "LOXPYT"
                }
            ]
        },
        {
            "suku": "LUL",
            "birds": [
                {
                    "nimi": "Lullula arborea",
                    "suku": "LUL",
                    "lyhenne": "LULARB"
                }
            ]
        },
        {
            "suku": "LUS",
            "birds": [
                {
                    "nimi": "Luscinia luscinia",
                    "suku": "LUS",
                    "lyhenne": "LUSLUS"
                },
                {
                    "nimi": "Luscinia megarhynchos",
                    "suku": "LUS",
                    "lyhenne": "LUSMEG"
                },
                {
                    "nimi": "Luscinia svecica",
                    "suku": "LUS",
                    "lyhenne": "LUSSVE"
                }
            ]
        },
        {
            "suku": "LYM",
            "birds": [
                {
                    "nimi": "Lymnocryptes minimus",
                    "suku": "LYM",
                    "lyhenne": "LYMMIN"
                }
            ]
        },
        {
            "suku": "MEL",
            "birds": [
                {
                    "nimi": "Melanitta americana",
                    "suku": "MEL",
                    "lyhenne": "MELAME"
                },
                {
                    "nimi": "Melanocorypha calandra",
                    "suku": "MEL",
                    "lyhenne": "MELCAL"
                },
                {
                    "nimi": "Melanitta deglandi",
                    "suku": "MEL",
                    "lyhenne": "MELDEG"
                },
                {
                    "nimi": "Melanitta fusca",
                    "suku": "MEL",
                    "lyhenne": "MELFUS"
                },
                {
                    "nimi": "Melanitta nigra",
                    "suku": "MEL",
                    "lyhenne": "MELNIG"
                },
                {
                    "nimi": "Melanitta perspicillata",
                    "suku": "MEL",
                    "lyhenne": "MELPER"
                }
            ]
        },
        {
            "suku": "MER",
            "birds": [
                {
                    "nimi": "Mergellus albellus",
                    "suku": "MER",
                    "lyhenne": "MERALB"
                },
                {
                    "nimi": "Merops apiaster",
                    "suku": "MER",
                    "lyhenne": "MERAPI"
                },
                {
                    "nimi": "Mergus merganser",
                    "suku": "MER",
                    "lyhenne": "MERMER"
                },
                {
                    "nimi": "Mergus serrator",
                    "suku": "MER",
                    "lyhenne": "MERSER"
                }
            ]
        },
        {
            "suku": "MIL",
            "birds": [
                {
                    "nimi": "Milvus migrans",
                    "suku": "MIL",
                    "lyhenne": "MILMIG"
                },
                {
                    "nimi": "Milvus milvus",
                    "suku": "MIL",
                    "lyhenne": "MILMIL"
                }
            ]
        },
        {
            "suku": "MOR",
            "birds": [
                {
                    "nimi": "Morus bassanus",
                    "suku": "MOR",
                    "lyhenne": "MORBAS"
                }
            ]
        },
        {
            "suku": "MOT",
            "birds": [
                {
                    "nimi": "Motacilla alba",
                    "suku": "MOT",
                    "lyhenne": "MOTALB"
                },
                {
                    "nimi": "Motacilla cinerea",
                    "suku": "MOT",
                    "lyhenne": "MOTCIN"
                },
                {
                    "nimi": "Motacilla citreola",
                    "suku": "MOT",
                    "lyhenne": "MOTCIT"
                },
                {
                    "nimi": "Motacilla flava",
                    "suku": "MOT",
                    "lyhenne": "MOTFLA"
                }
            ]
        },
        {
            "suku": "MUS",
            "birds": [
                {
                    "nimi": "Muscicapa striata",
                    "suku": "MUS",
                    "lyhenne": "MUSSTR"
                }
            ]
        },
        {
            "suku": "NEO",
            "birds": [
                {
                    "nimi": "Neophron percnopterus",
                    "suku": "NEO",
                    "lyhenne": "NEOPER"
                }
            ]
        },
        {
            "suku": "NET",
            "birds": [
                {
                    "nimi": "Netta rufina",
                    "suku": "NET",
                    "lyhenne": "NETRUF"
                }
            ]
        },
        {
            "suku": "NUC",
            "birds": [
                {
                    "nimi": "Nucifraga caryocatactes",
                    "suku": "NUC",
                    "lyhenne": "NUCCAR"
                }
            ]
        },
        {
            "suku": "NUM",
            "birds": [
                {
                    "nimi": "Numenius arquata",
                    "suku": "NUM",
                    "lyhenne": "NUMARQ"
                },
                {
                    "nimi": "Numida meleagris",
                    "suku": "NUM",
                    "lyhenne": "NUMMEL"
                },
                {
                    "nimi": "Numenius phaeopus",
                    "suku": "NUM",
                    "lyhenne": "NUMPHA"
                }
            ]
        },
        {
            "suku": "OCE",
            "birds": [
                {
                    "nimi": "Oceanodroma leucorhoa",
                    "suku": "OCE",
                    "lyhenne": "OCELEU"
                }
            ]
        },
        {
            "suku": "OEN",
            "birds": [
                {
                    "nimi": "Oenanthe deserti",
                    "suku": "OEN",
                    "lyhenne": "OENDES"
                },
                {
                    "nimi": "Oenanthe hispanica",
                    "suku": "OEN",
                    "lyhenne": "OENHIS"
                },
                {
                    "nimi": "Oenanthe isabellina",
                    "suku": "OEN",
                    "lyhenne": "OENISA"
                },
                {
                    "nimi": "Oenanthe oenanthe",
                    "suku": "OEN",
                    "lyhenne": "OENOEN"
                },
                {
                    "nimi": "Oenanthe pleschanka",
                    "suku": "OEN",
                    "lyhenne": "OENPLE"
                },
                {
                    "nimi": "Oenanthe sp",
                    "suku": "OEN",
                    "lyhenne": "OENSP"
                }
            ]
        },
        {
            "suku": "ORI",
            "birds": [
                {
                    "nimi": "Oriolus oriolus",
                    "suku": "ORI",
                    "lyhenne": "ORIORI"
                }
            ]
        },
        {
            "suku": "OTI",
            "birds": [
                {
                    "nimi": "Otis tarda",
                    "suku": "OTI",
                    "lyhenne": "OTITAR"
                }
            ]
        },
        {
            "suku": "OTU",
            "birds": [
                {
                    "nimi": "Otus scops",
                    "suku": "OTU",
                    "lyhenne": "OTUSCO"
                }
            ]
        },
        {
            "suku": "OXY",
            "birds": [
                {
                    "nimi": "Oxyura jamaicensis",
                    "suku": "OXY",
                    "lyhenne": "OXYJAM"
                }
            ]
        },
        {
            "suku": "PAN",
            "birds": [
                {
                    "nimi": "Panurus biarmicus",
                    "suku": "PAN",
                    "lyhenne": "PANBIA"
                },
                {
                    "nimi": "Pandion haliaetus",
                    "suku": "PAN",
                    "lyhenne": "PANHAL"
                }
            ]
        },
        {
            "suku": "PAR",
            "birds": [
                {
                    "nimi": "Parus ater",
                    "suku": "PAR",
                    "lyhenne": "PARATE"
                },
                {
                    "nimi": "Parus caeruleus",
                    "suku": "PAR",
                    "lyhenne": "PARCAE"
                },
                {
                    "nimi": "Parus cinctus",
                    "suku": "PAR",
                    "lyhenne": "PARCIN"
                },
                {
                    "nimi": "Parus cristatus",
                    "suku": "PAR",
                    "lyhenne": "PARCRI"
                },
                {
                    "nimi": "Parus cyanus",
                    "suku": "PAR",
                    "lyhenne": "PARCYA"
                },
                {
                    "nimi": "Parus major",
                    "suku": "PAR",
                    "lyhenne": "PARMAJ"
                },
                {
                    "nimi": "Parus montanus",
                    "suku": "PAR",
                    "lyhenne": "PARMON"
                },
                {
                    "nimi": "Parus palustris",
                    "suku": "PAR",
                    "lyhenne": "PARPAL"
                }
            ]
        },
        {
            "suku": "PAS",
            "birds": [
                {
                    "nimi": "Passer domesticus",
                    "suku": "PAS",
                    "lyhenne": "PASDOM"
                },
                {
                    "nimi": "Passer montanus",
                    "suku": "PAS",
                    "lyhenne": "PASMON"
                }
            ]
        },
        {
            "suku": "PEL",
            "birds": [
                {
                    "nimi": "Pelecanus onocrotalus",
                    "suku": "PEL",
                    "lyhenne": "PELONO"
                }
            ]
        },
        {
            "suku": "PER",
            "birds": [
                {
                    "nimi": "Pernis apivorus",
                    "suku": "PER",
                    "lyhenne": "PERAPI"
                },
                {
                    "nimi": "Perisoreus infaustus",
                    "suku": "PER",
                    "lyhenne": "PERINF"
                },
                {
                    "nimi": "Perdix perdix",
                    "suku": "PER",
                    "lyhenne": "PERPER"
                }
            ]
        },
        {
            "suku": "PHA",
            "birds": [
                {
                    "nimi": "Phalacrocorax aristotelis",
                    "suku": "PHA",
                    "lyhenne": "PHAARI"
                },
                {
                    "nimi": "Phalacrocorax carbo",
                    "suku": "PHA",
                    "lyhenne": "PHACAR"
                },
                {
                    "nimi": "Phasianus colchicus",
                    "suku": "PHA",
                    "lyhenne": "PHACOL"
                },
                {
                    "nimi": "Phalaropus lobatus",
                    "suku": "PHA",
                    "lyhenne": "PHALOB"
                }
            ]
        },
        {
            "suku": "PHI",
            "birds": [
                {
                    "nimi": "Philomachus pugnax",
                    "suku": "PHI",
                    "lyhenne": "PHIPUG"
                }
            ]
        },
        {
            "suku": "PHO",
            "birds": [
                {
                    "nimi": "Phoenicurus ochruros",
                    "suku": "PHO",
                    "lyhenne": "PHOOCH"
                },
                {
                    "nimi": "Phoenicurus phoenicurus",
                    "suku": "PHO",
                    "lyhenne": "PHOPHO"
                }
            ]
        },
        {
            "suku": "PHY",
            "birds": [
                {
                    "nimi": "Phylloscopus bonelli",
                    "suku": "PHY",
                    "lyhenne": "PHYBON"
                },
                {
                    "nimi": "Phylloscopus borealis",
                    "suku": "PHY",
                    "lyhenne": "PHYBOR"
                },
                {
                    "nimi": "Phylloscopus collybita",
                    "suku": "PHY",
                    "lyhenne": "PHYCOL"
                },
                {
                    "nimi": "Phylloscopus collybita tristis",
                    "suku": "PHY",
                    "lyhenne": "PHYCOLTRI"
                },
                {
                    "nimi": "Phylloscopus trochiloides",
                    "suku": "PHY",
                    "lyhenne": "PHYDES"
                },
                {
                    "nimi": "Phylloscopus fuscatus",
                    "suku": "PHY",
                    "lyhenne": "PHYFUS"
                },
                {
                    "nimi": "Phylloscopus inornatus",
                    "suku": "PHY",
                    "lyhenne": "PHYINO"
                },
                {
                    "nimi": "Phylloscopus trochilus",
                    "suku": "PHY",
                    "lyhenne": "PHYLUS"
                },
                {
                    "nimi": "Phylloscopus sibilatrix",
                    "suku": "PHY",
                    "lyhenne": "PHYSIB"
                }
            ]
        },
        {
            "suku": "PIC",
            "birds": [
                {
                    "nimi": "Picus canus",
                    "suku": "PIC",
                    "lyhenne": "PICCAN"
                },
                {
                    "nimi": "Pica pica",
                    "suku": "PIC",
                    "lyhenne": "PICPIC"
                },
                {
                    "nimi": "Picoides tridactylus",
                    "suku": "PIC",
                    "lyhenne": "PICTRI"
                },
                {
                    "nimi": "Picus sp",
                    "suku": "PIC",
                    "lyhenne": "PICUSSP"
                },
                {
                    "nimi": "Picus viridis",
                    "suku": "PIC",
                    "lyhenne": "PICVIR"
                }
            ]
        },
        {
            "suku": "PIN",
            "birds": [
                {
                    "nimi": "Pinicola enucleator",
                    "suku": "PIN",
                    "lyhenne": "PINENU"
                }
            ]
        },
        {
            "suku": "PLA",
            "birds": [
                {
                    "nimi": "Platalea leucorodia",
                    "suku": "PLA",
                    "lyhenne": "PLALEU"
                }
            ]
        },
        {
            "suku": "PLE",
            "birds": [
                {
                    "nimi": "Plectrophenax nivalis",
                    "suku": "PLE",
                    "lyhenne": "PLENIV"
                }
            ]
        },
        {
            "suku": "PLU",
            "birds": [
                {
                    "nimi": "Pluvialis apricaria",
                    "suku": "PLU",
                    "lyhenne": "PLUAPR"
                },
                {
                    "nimi": "Pluvialis squatarola",
                    "suku": "PLU",
                    "lyhenne": "PLUSQU"
                }
            ]
        },
        {
            "suku": "POD",
            "birds": [
                {
                    "nimi": "Podiceps auritus",
                    "suku": "POD",
                    "lyhenne": "PODAUR"
                },
                {
                    "nimi": "Podiceps cristatus",
                    "suku": "POD",
                    "lyhenne": "PODCRI"
                },
                {
                    "nimi": "Podiceps grisegena",
                    "suku": "POD",
                    "lyhenne": "PODGRI"
                }
            ]
        },
        {
            "suku": "POL",
            "birds": [
                {
                    "nimi": "Polysticta stelleri",
                    "suku": "POL",
                    "lyhenne": "POLSTE"
                }
            ]
        },
        {
            "suku": "POR",
            "birds": [
                {
                    "nimi": "Porzana porzana",
                    "suku": "POR",
                    "lyhenne": "PORPOR"
                }
            ]
        },
        {
            "suku": "PRU",
            "birds": [
                {
                    "nimi": "Prunella modularis",
                    "suku": "PRU",
                    "lyhenne": "PRUMOD"
                }
            ]
        },
        {
            "suku": "PYR",
            "birds": [
                {
                    "nimi": "Pyrrhula pyrrhula",
                    "suku": "PYR",
                    "lyhenne": "PYRPYR"
                }
            ]
        },
        {
            "suku": "RAL",
            "birds": [
                {
                    "nimi": "Rallus aquaticus",
                    "suku": "RAL",
                    "lyhenne": "RALAQU"
                }
            ]
        },
        {
            "suku": "REC",
            "birds": [
                {
                    "nimi": "Recurvirostra avosetta",
                    "suku": "REC",
                    "lyhenne": "RECAVO"
                }
            ]
        },
        {
            "suku": "REG",
            "birds": [
                {
                    "nimi": "Regulus regulus",
                    "suku": "REG",
                    "lyhenne": "REGREG"
                }
            ]
        },
        {
            "suku": "REM",
            "birds": [
                {
                    "nimi": "Remiz pendulinus",
                    "suku": "REM",
                    "lyhenne": "REMPEN"
                }
            ]
        },
        {
            "suku": "RIP",
            "birds": [
                {
                    "nimi": "Riparia riparia",
                    "suku": "RIP",
                    "lyhenne": "RIPRIP"
                }
            ]
        },
        {
            "suku": "RIS",
            "birds": [
                {
                    "nimi": "Rissa tridactyla",
                    "suku": "RIS",
                    "lyhenne": "RISTRI"
                }
            ]
        },
        {
            "suku": "SAX",
            "birds": [
                {
                    "nimi": "Saxicola rubetra",
                    "suku": "SAX",
                    "lyhenne": "SAXTRA"
                }
            ]
        },
        {
            "suku": "SCO",
            "birds": [
                {
                    "nimi": "Scolopax rusticola",
                    "suku": "SCO",
                    "lyhenne": "SCORUS"
                }
            ]
        },
        {
            "suku": "SIT",
            "birds": [
                {
                    "nimi": "Sitta europaea",
                    "suku": "SIT",
                    "lyhenne": "SITEUR"
                }
            ]
        },
        {
            "suku": "SOM",
            "birds": [
                {
                    "nimi": "Somateria mollissima",
                    "suku": "SOM",
                    "lyhenne": "SOMMOL"
                },
                {
                    "nimi": "Somateria spectabilis",
                    "suku": "SOM",
                    "lyhenne": "SOMSPE"
                }
            ]
        },
        {
            "suku": "STE",
            "birds": [
                {
                    "nimi": "Sterna paradisaea",
                    "suku": "STE",
                    "lyhenne": "STEAEA"
                },
                {
                    "nimi": "Sternula albifrons",
                    "suku": "STE",
                    "lyhenne": "STEALB"
                },
                {
                    "nimi": "Stercorarius parasiticus",
                    "suku": "STE",
                    "lyhenne": "STECUS"
                },
                {
                    "nimi": "Sterna hirundo",
                    "suku": "STE",
                    "lyhenne": "STEHIR"
                },
                {
                    "nimi": "Stercorarius longicaudus",
                    "suku": "STE",
                    "lyhenne": "STELON"
                },
                {
                    "nimi": "Stercorarius pomarinus",
                    "suku": "STE",
                    "lyhenne": "STEPOM"
                },
                {
                    "nimi": "Stercorarius skua",
                    "suku": "STE",
                    "lyhenne": "STESKU"
                }
            ]
        },
        {
            "suku": "STR",
            "birds": [
                {
                    "nimi": "Strix aluco",
                    "suku": "STR",
                    "lyhenne": "STRALU"
                },
                {
                    "nimi": "Streptopelia decaocto",
                    "suku": "STR",
                    "lyhenne": "STRDEC"
                },
                {
                    "nimi": "Strix nebulosa",
                    "suku": "STR",
                    "lyhenne": "STRNEB"
                },
                {
                    "nimi": "Streptopelia turtur",
                    "suku": "STR",
                    "lyhenne": "STRTUR"
                },
                {
                    "nimi": "Strix uralensis",
                    "suku": "STR",
                    "lyhenne": "STRURA"
                }
            ]
        },
        {
            "suku": "STU",
            "birds": [
                {
                    "nimi": "Sturnus vulgaris",
                    "suku": "STU",
                    "lyhenne": "STUVUL"
                }
            ]
        },
        {
            "suku": "SUR",
            "birds": [
                {
                    "nimi": "Surnia ulula",
                    "suku": "SUR",
                    "lyhenne": "SURULU"
                }
            ]
        },
        {
            "suku": "SYL",
            "birds": [
                {
                    "nimi": "Sylvia atricapilla",
                    "suku": "SYL",
                    "lyhenne": "SYLATR"
                },
                {
                    "nimi": "Sylvia borin",
                    "suku": "SYL",
                    "lyhenne": "SYLBOR"
                },
                {
                    "nimi": "Sylvia communis",
                    "suku": "SYL",
                    "lyhenne": "SYLCOM"
                },
                {
                    "nimi": "Sylvia curruca",
                    "suku": "SYL",
                    "lyhenne": "SYLCUR"
                }
            ]
        },
        {
            "suku": "TAC",
            "birds": [
                {
                    "nimi": "Tachybaptus ruficollis",
                    "suku": "TAC",
                    "lyhenne": "TACRUF"
                }
            ]
        },
        {
            "suku": "TAD",
            "birds": [
                {
                    "nimi": "Tadorna tadorna",
                    "suku": "TAD",
                    "lyhenne": "TADTAD"
                }
            ]
        },
        {
            "suku": "TAR",
            "birds": [
                {
                    "nimi": "Tarsiger cyanurus",
                    "suku": "TAR",
                    "lyhenne": "TARCYA"
                }
            ]
        },
        {
            "suku": "TET",
            "birds": [
                {
                    "nimi": "Tetrastes bonasia",
                    "suku": "TET",
                    "lyhenne": "TETBON"
                },
                {
                    "nimi": "Tetrax tetrax",
                    "suku": "TET",
                    "lyhenne": "TETRAX"
                },
                {
                    "nimi": "Tetrao tetrix",
                    "suku": "TET",
                    "lyhenne": "TETRIX"
                },
                {
                    "nimi": "Tetrao urogallus",
                    "suku": "TET",
                    "lyhenne": "TETURO"
                }
            ]
        },
        {
            "suku": "TRI",
            "birds": [
                {
                    "nimi": "Tringa erythropus",
                    "suku": "TRI",
                    "lyhenne": "TRIERY"
                },
                {
                    "nimi": "Tringa glareola",
                    "suku": "TRI",
                    "lyhenne": "TRIGLA"
                },
                {
                    "nimi": "Tringa nebularia",
                    "suku": "TRI",
                    "lyhenne": "TRINEB"
                },
                {
                    "nimi": "Tringa ochropus",
                    "suku": "TRI",
                    "lyhenne": "TRIOCH"
                },
                {
                    "nimi": "Tringa stagnatilis",
                    "suku": "TRI",
                    "lyhenne": "TRISTA"
                },
                {
                    "nimi": "Tringa totanus",
                    "suku": "TRI",
                    "lyhenne": "TRITOT"
                }
            ]
        },
        {
            "suku": "TRO",
            "birds": [
                {
                    "nimi": "Troglodytes troglodytes",
                    "suku": "TRO",
                    "lyhenne": "TROTRO"
                }
            ]
        },
        {
            "suku": "TUR",
            "birds": [
                {
                    "nimi": "Turdus iliacus",
                    "suku": "TUR",
                    "lyhenne": "TURILI"
                },
                {
                    "nimi": "Turdus merula",
                    "suku": "TUR",
                    "lyhenne": "TURMER"
                },
                {
                    "nimi": "Turdus philomelos",
                    "suku": "TUR",
                    "lyhenne": "TURPHI"
                },
                {
                    "nimi": "Turdus pilaris",
                    "suku": "TUR",
                    "lyhenne": "TURPIL"
                },
                {
                    "nimi": "Turdus torquatus",
                    "suku": "TUR",
                    "lyhenne": "TURTOR"
                },
                {
                    "nimi": "Turdus viscivorus",
                    "suku": "TUR",
                    "lyhenne": "TURVIS"
                }
            ]
        },
        {
            "suku": "TYT",
            "birds": [
                {
                    "nimi": "Tyto alba",
                    "suku": "TYT",
                    "lyhenne": "TYTALB"
                }
            ]
        },
        {
            "suku": "UPU",
            "birds": [
                {
                    "nimi": "Upupa epops",
                    "suku": "UPU",
                    "lyhenne": "UPUEPO"
                }
            ]
        },
        {
            "suku": "URI",
            "birds": [
                {
                    "nimi": "Uria aalge",
                    "suku": "URI",
                    "lyhenne": "URIAAL"
                },
                {
                    "nimi": "Uria lomvia",
                    "suku": "URI",
                    "lyhenne": "URILOM"
                }
            ]
        },
        {
            "suku": "VAN",
            "birds": [
                {
                    "nimi": "Vanellus vanellus",
                    "suku": "VAN",
                    "lyhenne": "VANVAN"
                }
            ]
        },
        {
            "suku": "XEN",
            "birds": [
                {
                    "nimi": "Xenus cinereus",
                    "suku": "XEN",
                    "lyhenne": "XENCIN"
                }
            ]
        }
    ];

    function suvutAlkukirjaimella(alkukirjain) {
        var paluu = [];
        for (var i = 0, n = taksonit.length; i < n; i += 1) {
            if (taksonit[i].suku.charAt(0) === alkukirjain) {
                // TODO: lajien määrä json dataan, tai suvun nimi.
                paluu.push({"genus": taksonit[i].suku, "laji_lkm": suvunLajit(taksonit[i].suku).length});
            }
        }
        return paluu;
    }

    function suvunLajit(suku) {
        for (var i = 0, n = taksonit.length; i < n; i += 1) {
            if (taksonit[i].suku === suku) {
                return taksonit[i].birds;
            }
        }
    }

    // public api
    return {
        genusesByLetter: suvutAlkukirjaimella,
        birdsByGenus: suvunLajit
    };

})();

module.exports = taxons;