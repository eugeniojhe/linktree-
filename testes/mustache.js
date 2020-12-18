// Using JQuery, JSON and Mustache
$(document).ready(function() {

    // JSON (data) updated July 27th 2015
    var data = {
            "ensc-department": [{
                    "name": "Jacob Ashford",
                    "position": "Ph.D. Student",
                    "image": "ashford_jacob_tab4.jpg",
                    "facultyPage": "sickman",
                    "professor": "James Sickman",
                    "program": "Ph.D., Environmental Sciences",
                    "email": "jacob.ashford@email",
                    "profilePage": "ashford",
                    "research": "Investigating of diatom community structure and diversity in Alpine Lake sediment cores and understanding limnological and environmental processes driving Alpine Lake sediment deposition and composition",
                    "graduate-student": "True",
                    "sickman": "True"
            }, {
                    "name": "Arisha Ashraf",
                    "position": "Ph.D. Student",
                    "image": "ashraf_arisha_tab.jpeg",
                    "facultyPage": "dinar",
                    "professor": "Ariel Dinar",
                    "program": "Ph.D., Environmental Economics",
                    "email": "arisha.ashraf@email",
                    "profilePage": "ashraf",
                    "research": "Researching the role of institutional dynamics in addressing water scarcity",
                    "graduate-student": "True",
                    "dinar": "True"
            }, {
                    "name": "Luisa Becker Bertotto",
                    "position": "Ph.D. Student",
                    "image": "becker_bertotto_luisa90x125.jpg",
                    "facultyPage": "schlenk",
                    "professor": "Daniel Schlenk",
                    "program": "Ph.D., Environmental Toxicology",
                    "email": "luisa.beckerbertotto@email",
                    "profilePage": "beckerbertotto",
                    "research": "Researching the effects of bifenthrin in zebrafish",
                    "graduate-student": "True",
                    "schlenk": "True"
            }, {
                    "name": "Simone Boudreau",
                    "position": "M.S. Student",
                    "image": "boudreau_simone_tab.jpg",
                    "facultyPage": "anderson",
                    "professor": "Michael Anderson",
                    "program": "M.S., Environmental Sciences",
                    "email": "simone.boudreau@email",
                    "profilePage": "boudreau",
                    "research": "Analyzing phosphorus recycling dynamics in two southern California lakes using stable isotopes to determine how long phosphorus remains bioavailable under different conditions",
                    "graduate-student": "True",
                    "anderson": "True"
            }, {
                    "name": "Nydia Celis",
                    "position": "M.S. Student",
                    "image": "celis_nydia_tab.jpeg",
                    "facultyPage": "wu",
                    "professor": "Laosheng Wu",
                    "program": "M.S., Environmental Sciences",
                    "email": "nydia.celis@email",
                    "profilePage": "celis",
                    "research": "Screening avocado rootstocks for salinity tolerance, studying the effect of sodium and chloride on growth and yield, and modelling the salt distribution in the root zone",
                    "graduate-student": "True",
                    "wu": "True"
            }, {
                    "name": "Diti Chatterjee",
                    "position": "Ph.D. Student",
                    "image": "chatterjee_diti_tab.jpeg",
                    "facultyPage": "dinar",
                    "professor": "Ariel Dinar",
                    "program": "Ph.D., Environmental Sciences",
                    "email": "diti.chatterjee@email",
                    "profilePage": "chatterjee",
                    "research": "Estimating the economic impact of UC Cooperative Extension on agricultural production, and irrigation water use in California",
                    "graduate-student": "True",
                    "dinar": "True"
            }, {
                    "name": "Philip Clements",
                    "position": "M.S. Student",
                    "image": "clements_philip93x125.jpg",
                    "facultyPage": "graham",
                    "professor": "Robert Graham",
                    "program": "M.S., Geosciences",
                    "email": "philip.clements@email",
                    "profilePage": "clements",
                    "research": "Researching the effect of talus deposits on soil formation and ecology",
                    "graduate-student": "True",
                    "graham": "True"
            }, {
                    "name": "Scott Coffin",
                    "position": "Ph.D. Student",
                    "image": "coffin_scott_93x125.jpg",
                    "facultyPage": "schlenk",
                    "professor": "Daniel Schlenk",
                    "program": "Ph.D., Environmental Toxicology",
                    "email": "scott.coffin@email",
                    "profilePage": "coffin",
                    "research": "Researching epigenetic and teratogenic effects of plastic debris on fish",
                    "graduate-student": "True",
                    "schlenk": "True"
            }, {
                    "name": "Zachary Cryder",
                    "position": "Ph.D. Student",
                    "image": "",
                    "facultyPage": "gan",
                    "professor": "Jay Gan",
                    "program": "",
                    "email": "",
                    "profilePage": "",
                    "research": "",
                    "graduate-student": "True",
                    "gan": "True"
            }, {
                    "name": "Katie Curnyn",
                    "position": "M.S. Student",
                    "image": "curnyn_katie_tab3.jpeg",
                    "facultyPage": "curnyn",
                    "professor": " Marylynn V. Yates",
                    "program": "M.S., Environmental Microbiology",
                    "email": "katie.curnyn@email",
                    "profilePage": "curnyn",
                    "research": "Establishing a high-throughput, in vivo antiviral screening method using dengue virus serotype 1 (DENV1) as a model",
                    "graduate-student": "True",
                    "yates": "True"
            }, {
                    "name": "Graciel Diamante",
                    "position": "Ph.D. Student",
                    "image": "diamante_graciel_tab.jpg",
                    "facultyPage": "schlenk",
                    "professor": "Daniel Schlenk",
                    "program": "Ph.D., Environmental Toxicology",
                    "email": "graciel.diamante@email",
                    "profilePage": "diamante",
                    "research": "Researching aquatic toxicology",
                    "graduate-student": "True",
                    "schlenk": "True"
            }, {
                    "name": "Justin Dingle",
                    "position": "Ph.D. Student",
                    "image": "dingle_justin_tab2.jpeg",
                    "facultyPage": "bahreini",
                    "professor": "Roya Bahreini",
                    "program": "Ph.D., Environmental Toxicology",
                    "email": "justin.dingle@email",
                    "profilePage": "dingle",
                    "research": "Quantifying trace organic compounds in ambient aerosol particles using GC-MS and studying chemical and optical properties of secondary organic aerosol generated in a smog-chamber",
                    "graduate-student": "True",
                    "bahreini": "True"
            }, {
                    "name": "Stacia Dudley",
                    "position": "Ph.D. Student",
                    "image": "dudley_stacia_93x125.jpg",
                    "facultyPage": "gan",
                    "professor": "Jay Gan",
                    "program": "Ph.D., Environmental Toxicology",
                    "email": "stacia.dudley@email",
                    "profilePage": "dudley",
                    "research": "Researching the effects of unregulated contaminants, known as Contaminants of Emerging Concern -- pharmaceuticals, endocrine disrupters, polybrominated diphenyl ethers, and phalates-- in terrestrial ecosystems",
                    "graduate-student": "True",
                    "gan": "True"
            }, {
                    "name": "Julie Escalera",
                    "position": "Ph.D. Student",
                    "image": "escalera_julie_tab.jpeg",
                    "facultyPage": "crowley",
                    "professor": "David Crowley",
                    "program": "Ph.D., Environmental Sciences",
                    "email": "julie.escalera@email",
                    "profilePage": "escalera",
                    "research": "Researching reclaimed water and it's affects on soil chemical and physical properties, and researching salinity reclamation in Coachella Valley, the interactions of soil water on salinity, and avocado root stocks",
                    "graduate-student": "True",
                    "crowley": "True"
            }, {
                    "name": "Hasnain Farooq",
                    "position": "Ph.D. Student",
                    "image": "farooq_hasnain93x125.jpg",
                    "facultyPage": "wu",
                    "professor": "Laosheng Wu",
                    "program": "Ph.D., Environmental Sciences",
                    "email": "hasnain.farooq@email",
                    "profilePage": "farooq",
                    "research": "Assessing and Comparing the salt tolerance of multipurpose trees used in agroforestry",
                    "graduate-student": "True",
                    "wu": "True"
            }, {
                    "name": "Alexander Frie",
                    "position": "Ph.D. Student",
                    "image": "",
                    "facultyPage": "bahreini",
                    "professor": "Roya Bahreini",
                    "program": "",
                    "email": "",
                    "profilePage": "",
                    "research": "",
                    "graduate-student": "True",
                    "bahreini": "True"
            }, {
                    "name": "Miguel Garcia",
                    "position": "M.S. Student",
                    "image": "garcia_miguel_newtab.jpg",
                    "facultyPage": "anderson",
                    "professor": "Michael Anderson",
                    "program": "M.S., Environmental Sciences",
                    "email": "miguel.garcia006@email",
                    "profilePage": "mgarcia",
                    "research": "Studying the fate and transport of disinfectants, disinfection byproducts and emerging contaminants from recycled water for applications in lake management",
                    "graduate-student": "True",
                    "anderson": "True"
            }, {
                    "name": "Sarah Helalia",
                    "position": "Ph.D. Student",
                    "image": "helalia_sarah_5_93x125.jpg",
                    "facultyPage": "simunek",
                    "professor": "Jirka Å imunek",
                    "program": "Ph.D., Environmental Sciences",
                    "email": "sarah.helalia@email",
                    "profilePage": "helalia",
                    "research": "Modifying a model of plant-soil parameters which elucidate their impacts on the vadose zone water and N balance",
                    "graduate-student": "True",
                    "simunek": "True"
            }, {
                    "name": "Joyce Jong",
                    "position": "Ph.D. Student",
                    "image": "jong_joyce_tab.jpeg",
                    "facultyPage": "crohn",
                    "professor": "David Crohn",
                    "program": "Ph.D., Environmental Sciences and Management",
                    "email": "shwuying.jong@email",
                    "profilePage": "jong",
                    "research": "Researching resource management in sustainable agricultural systems and policy implications",
                    "graduate-student": "True",
                    "crohn": "True"
            }, {
                    "name": "Allison Kupsco",
                    "position": "Ph.D. Student",
                    "image": "kupsco_allsion_tab.jpeg",
                    "facultyPage": "schlenk",
                    "professor": "Daniel Schlenk",
                    "program": "Ph.D., Environmental Toxicology",
                    "email": "allison.kupsco@email",
                    "profilePage": "kupsco",
                    "research": "Researching combined effects of salinity and selenium toxicity on fish embryonic development",
                    "graduate-student": "True",
                    "schlenk": "True"
            }, {
                    "name": "David Lee",
                    "position": "Ph.D. Student",
                    "image": "",
                    "facultyPage": "volz",
                    "professor": "David Volz",
                    "program": "",
                    "email": "",
                    "profilePage": "",
                    "research": "",
                    "graduate-student": "True",
                    "volz": "True"
            }, {
                    "name": "Lucy Levers",
                    "position": "Ph.D. Student",
                    "image": "levers_lucy_tab.jpeg",
                    "facultyPage": "schwabe",
                    "professor": "Kurt Schwabe",
                    "program": "Ph.D., Environmental Management",
                    "email": "lucia.levers@email",
                    "profilePage": "levers",
                    "research": "Reasearching crop and groundwater modeling",
                    "graduate-student": "True",
                    "schwabe": "True"
            }, {
                    "name": "Jing Liang",
                    "position": "Ph.D. Student",
                    "image": "liang_jing_tab.jpeg",
                    "facultyPage": "simunek",
                    "professor": "Jirka Å imunek",
                    "program": "Ph.D., Environmental Sciences",
                    "email": "jlian004@",
                    "profilePage": "liang",
                    "research": "Investigating the interconnection between surface and subsurface water and microbial fluxes in order to develop improved model to describe preferential surface and subsurface transport of microbial pollutants",
                    "graduate-student": "True",
                    "simunek": "True"
            }, {
                    "name": "Aileen Maldonado",
                    "position": "Ph.D. Student",
                    "image": "maldonado_aileen_tab.jpeg",
                    "facultyPage": "schlenk",
                    "professor": "Daniel Schlenk",
                    "program": "Ph.D., Environmental Sciences",
                    "email": "aileen.maldonado@email",
                    "profilePage": "maldonado",
                    "research": "Furthering knowledge of dietary detoxification and the role of the biotransformation enzyme cytochrome P450 monooxygenase (CYP) in corallivorous fish species of the genus Chaetodon",
                    "graduate-student": "True",
                    "schlenk": "True"
            }, {
                    "name": "Claudia C. Marin",
                    "position": "Ph.D. Student",
                    "image": "",
                    "facultyPage": "ying",
                    "professor": "Samantha Ying",
                    "program": "",
                    "email": "",
                    "profilePage": "",
                    "research": "",
                    "graduate-student": "True",
                    "ying": "True"
            }, {
                    "name": "Gustavo Mellior",
                    "position": "Ph.D. Student",
                    "image": "mellior_gustavo_93x125.jpg",
                    "facultyPage": "baerenklau",
                    "professor": "Kenneth Baerenklau",
                    "program": "Ph.D., Environmental and Management",
                    "email": "gmell001@",
                    "profilePage": "mellior",
                    "research": "Researching water economics",
                    "graduate-student": "True",
                    "baerenklau": "True"
            }, {
                    "name": "Rebecca Mock",
                    "position": "Ph.D. Student",
                    "image": "",
                    "facultyPage": "ying",
                    "professor": "Samantha Ying",
                    "program": "",
                    "email": "",
                    "profilePage": "",
                    "graduate-student": "True",
                    "ying": "True"
            }, {
                    "name": "Sanval Nasim",
                    "position": "Ph.D. Student",
                    "image": "nasim_sanval_tab.jpeg",
                    "facultyPage": "dinar",
                    "professor": "Ariel Dinar",
                    "program": "Ph.D., Environmental Economics",
                    "email": "ariel.dinar@email",
                    "profilePage": "nasim",
                    "research": "Comparing water-specific allocative inefficiency across agricultural tenure systems in Pakistan and improving irrigation efficiency through water trading mechanisms",
                    "graduate-student": "True",
                    "dinar": "True"
            }, {
                    "name": "Nancy Phu",
                    "position": "M.S. Student",
                    "image": "phu_nancy_tab.jpeg",
                    "facultyPage": "wu",
                    "professor": "Laosheng Wu",
                    "program": "M.S., Environmental Sciences",
                    "email": "nancy.phu@email",
                    "profilePage": "phu",
                    "research": "Conducting slow sand filtration column studies to test the removal efficiencies for various contaminants of emerging concern in reclaimed water",
                    "graduate-student": "True",
                    "wu": "True"
            }, {
                    "name": "Dane Reano",
                    "position": "Ph.D. Student",
                    "image": "reano_dane_93x125_2.jpg",
                    "facultyPage": "yates",
                    "professor": "Marylynn V Yates",
                    "program": "Ph.D., Environmental Microbiology",
                    "email": "drean001@",
                    "profilePage": "reano",
                    "research": "Researching the application of intracellularly delivered molecular beacons allows us to detect nearly any infectious virion",
                    "graduate-student": "True",
                    "yates": "True"
            }, {
                    "name": "Jaben Richards",
                    "position": "Ph.D. Student",
                    "image": "richards_jaben_tab.jpeg",
                    "facultyPage": "gan",
                    "professor": "Jay Gan",
                    "program": "Ph.D., Environmental Sciences",
                    "email": "jaben.richards@email",
                    "profilePage": "richards",
                    "research": "Investigating the fate and transport of pesticides in urban environments in order to reduce the negative effects these compounds have on aquatic ecosystems",
                    "graduate-student": "True",
                    "gan": "True"
            }, {
                    "name": "Amy Salvador",
                    "position": "Ph.D. Student",
                    "image": "",
                    "facultyPage": "ying",
                    "professor": "Samantha Ying",
                    "program": "",
                    "email": "",
                    "profilePage": "",
                    "research": "",
                    "graduate-student": "True",
                    "ying": "True"
            }, {
                    "name": "Edmond Sanganyado",
                    "position": "Ph.D. Student",
                    "image": "sanganyado_edmond_tab.jpeg",
                    "facultyPage": "gan",
                    "professor": "Jay Gan",
                    "program": "Ph.D., Environmental Toxicology",
                    "email": "edmond.sanganyado@email",
                    "profilePage": "sanganyado",
                    "research": "Researching environmental toxicology",
                    "graduate-student": "True",
                    "gan": "True"
            }, {
                    "name": "Lindsey Saum",
                    "position": "Ph.D. Student",
                    "image": "saum_lindsey_tab.jpeg",
                    "facultyPage": "crowley",
                    "professor": "David Crowley",
                    "program": "Ph.D., Environmental Microbiology",
                    "email": "lindsey.saum@email",
                    "profilePage": "saum",
                    "research": "Researching bioremediation of polycyclic aromatic hydrocarbons (PAHs), with focus on residual oil in the Prince William Sound",
                    "graduate-student": "True",
                    "crowley": "True"
            }, {
                    "name": "Jacob Shiba",
                    "position": "M.S. Student",
                    "image": "shiba_jacob_tab.jpeg",
                    "facultyPage": "anderson",
                    "professor": "Michael Anderson",
                    "program": "M.S., Environmental Sciences",
                    "email": "jacob.shiba@email",
                    "profilePage": "shiba",
                    "research": "Researching physical and chemical factors regulating the storage and ebullition of methane gas in lakes",
                    "graduate-student": "True",
                    "anderson": "True"
            }, {
                    "name": "Jenessa Stemke",
                    "position": "Ph.D. Student",
                    "image": "stemke_jenessa_tab.jpeg",
                    "facultyPage": "crowley",
                    "professor": "David Crowley",
                    "program": "Ph.D., Environmental Sciences",
                    "email": "jenessa.stemke@email",
                    "profilePage": "stemke",
                    "research": "Studying the potential for using treated recycled water to irrigate avocados, which are highly sensitive to salinity",
                    "graduate-student": "True",
                    "crowley": "True"
            }, {
                    "name": "Allison Taylor",
                    "position": "Ph.D. Student",
                    "image": "taylor_allison_tab.jpeg",
                    "facultyPage": "gan",
                    "professor": "Jay Gan",
                    "program": "Ph.D., Environmental Sciences",
                    "email": "allison.taylor@email",
                    "profilePage": "ataylor",
                    "research": "Investigating the aging and bioavailability of contaminants in marine sediments",
                    "graduate-student": "True",
                    "gan": "True"
            }, {
                    "name": "Edgar Tellez Foster",
                    "position": "Ph.D. Student",
                    "image": "tellez_foster_tab.jpeg",
                    "facultyPage": "dinar",
                    "professor": "Ariel Dinar",
                    "program": "Ph.D., Environmental Economics",
                    "email": "etell001@",
                    "profilePage": "tellez_foster",
                    "research": "Analyzing the behavioral responses of Common Pool Resource (CPR) users to changes in institutional arrangements of the energy price structure",
                    "graduate-student": "True",
                    "dinar": "True"
            }, {
                    "name": "Sara Vliet",
                    "position": "Ph.D. Student",
                    "image": "",
                    "facultyPage": "volz",
                    "professor": "David Volz",
                    "program": "",
                    "email": "",
                    "profilePage": "",
                    "research": "",
                    "graduate-student": "True",
                    "volz": "True"
            }, {
                    "name": "Kennedy Vu",
                    "position": "Ph.D. Student",
                    "image": "vu_kennedy_tab2.jpeg",
                    "facultyPage": "bahreini",
                    "professor": "Roya Bahreini",
                    "program": "Ph.D., Environmental Toxicology",
                    "email": "kennedy.vu@email",
                    "profilePage": "vu",
                    "research": "Researching chemical and optical properties of ambient aerosol particles and fundamental optical properties of laboratory generated secondary organic aerosol particles",
                    "graduate-student": "True",
                    "bahreini": "True"
            }, {
                    "name": "Dan Wasik",
                    "position": "Ph.D. Student",
                    "image": "wasik_daniel_tab3.jpeg",
                    "facultyPage": "yates",
                    "professor": "Marylynn V. Yates",
                    "program": "Ph.D., Environmental Toxicology",
                    "email": "daniel.wasik@email",
                    "profilePage": "wasik",
                    "research": "Developing and improving methods to detect microorgansims in environmental samples",
                    "graduate-student": "True",
                    "yates": "True"
            }, {
                    "name": "Douglas Wolf",
                    "position": "Ph.D. Student",
                    "image": "wolf_douglas_93x125.jpg",
                    "facultyPage": "gan",
                    "professor": "Jay Gan",
                    "program": "Ph.D., Environmental Toxicology",
                    "email": "douglas.wolf@email",
                    "profilePage": "wolf",
                    "research": "Researching soil and water remediation of inorganic and organic contaminant pollution",
                    "graduate-student": "True",
                    "gan": "True"
            }, {
                    "name": "Yuhua Xiong",
                    "position": "Ph.D. Student",
                    "image": "xiong_yuhua93x125.jpg",
                    "facultyPage": "schwabe",
                    "professor": "Kurt Schwabe",
                    "program": "Ph.D., Environmental Economics",
                    "email": "yuhua.xiong@email",
                    "profilePage": "xiong",
                    "research": "Researching water economics and computational economics",
                    "graduate-student": "True",
                    "schwabe": "True"
            }, {
                    "name": "Salvatore Campisi",
                    "position": "Postdoc",
                    "email": "salvatore.campisi",
                    "research": "Scientific data mining and Knowledge Discovery in Databases (KDD): it includes statistical methods to address causality and associations in Earth science domains.",
                    "academic-staff": "True",
                    "dinar": "True"
            }, {
                    "name": "Emily Creegan",
                    "position": "Visiting Graduate Student",
                    "email": "emily.creegan",
                    "academic-staff": "True",
                    "crohn": "True"
            }, {
                    "name": "Taisheng Du",
                    "position": "Visiting International Scholar",
                    "email": "taisheng.du",
                    "academic-staff": "True",
                    "wu": "True"
            }, {
                    "name": "Qiuguo (Rachel) Fu",
                    "position": "Junior Specialist",
                    "email": "qiuguo.fu",
                    "academic-staff": "True",
                    "gan": "True"
            }, {
                    "name": "Yuhui Geng",
                    "position": "Visiting International Scholar",
                    "email": "yuhui.geng",
                    "academic-staff": "True",
                    "simunek": "True"
            }, {
                    "name": "Yan He",
                    "position": "Visiting International Scholar",
                    "email": "yanhe",
                    "academic-staff": "True",
                    "crowley": "True"
            }, {
                    "name": "Peter Homyak",
                    "position": "NSF Post-Doctoral Researcher",
                    "email": "peter.homyak",
                    "academic-staff": "True",
                    "sickman": "True"
            }, {
                    "name": "Eloise Lemaire",
                    "position": "Visiting International Scholar",
                    "email": "eloise.lemaire",
                    "academic-staff": "True",
                    "schlenk": "True"
            }, {
                    "name": "Yuanbo (Allen) Li",
                    "position": "Postdoc",
                    "email": "yuanbo.li",
                    "academic-staff": "True",
                    "gan": "True"
            }, {
                    "name": "Chunyang (Charles) Liao",
                    "position": "Assistant Specialist",
                    "email": "chunyang.liao",
                    "academic-staff": "True",
                    "gan": "True"
            }, {
                    "name": "Congan Ma",
                    "position": "Visiting International Scholar",
                    "email": "congan.ma",
                    "academic-staff": "True",
                    "simunek": "True"
            }, {
                    "name": "Fabio Mallmann",
                    "position": "Visiting International Researcher",
                    "email": "fabio.mallmann",
                    "research": "Numerical modeling of heavy metals transport in agricultural soils",
                    "academic-staff": "True",
                    "simunek": "True"
            }, {
                    "name": "Gabrielle Muller",
                    "position": "Visiting International Scholar",
                    "email": "gabrielle.muller",
                    "academic-staff": "True",
                    "schlenk": "True"
            }, {
                    "name": "Luis Neves",
                    "position": "Visiting Student",
                    "academic-staff": "True",
                    "schwabe": "True"
            }, {
                    "name": "Namratha Reddy",
                    "position": "Postdoc",
                    "email": "namratha.reddy",
                    "academic-staff": "True",
                    "crohn": "True"
            }, {
                    "name": "Steven Sadro",
                    "position": "Postdoc",
                    "email": "steven.sadro",
                    "academic-staff": "True",
                    "sickman": "True"
            }, {
                    "name": "Jiachun Shi",
                    "position": "Visiting International Scholar",
                    "email": "jiachun.shi",
                    "research": "Environmental assessment and pollution source apportionment; Biogeochemical cycles of nitrogen",
                    "academic-staff": "True",
                    "wu": "True"
            }, {
                    "name": "Daquan Sun",
                    "position": "Visiting International Researcher",
                    "email": "daquan.sun",
                    "research": "Biochar effects on soil microbiome",
                    "academic-staff": "True",
                    "crowley": "True"
            }, {
                    "name": "Sasha Tsapin",
                    "position": "Research Scientist",
                    "email": "sasha.tsapin",
                    "academic-staff": "True"
            }, {
                    "name": "Jiaying (Angela) Xue",
                    "position": "Junior Specialist",
                    "email": "jiaying.xue",
                    "academic-staff": "True",
                    "gan": "True"
            }, {
                    "name": "Genbo (Elvis) Xu",
                    "position": "Postdoc",
                    "email": "genbo.xu",
                    "research": "Marine pollution and aquatic toxicology, with particular emphasis on endocrine disrupting chemicals and ecotoxicogenomics, and integrated ecological risk assessment",
                    "academic-staff": "True",
                    "schlenk": "True"
            }, {
                    "name": "Flavia Yoshie Yamamoto",
                    "position": "Visiting International Scholar",
                    "email": "flavia.yamamoto",
                    "academic-staff": "True",
                    "schlenk": "True"
            }, {
                    "name": "Pingjiu Zhang",
                    "position": "Visiting International Scholar",
                    "email": "pingjiu.zhang",
                    "academic-staff": "True",
                    "crowley": "True"
            }, {
                    "name": "Stephen Qi",
                    "position": "Staff Research Associate",
                    "email": "",
                    "crowley": "True"
            }, {
                    "name": "Anya Baladian",
                    "position": "Undergrad Researcher",
                    "email": "",
                    "gan": "True"
            }, {
                    "name": "Towfiqur Khan",
                    "position": "Undergrad Researcher",
                    "email": "",
                    "graham": "True"
            }, {
                    "name": "Kevin Skeen",
                    "position": "Staff Research Associate",
                    "email": "",
                    "sickman": "True"
            }, {
                    "name": "Beatriz Vindiola",
                    "position": "Lab Assistant III",
                    "email": "",
                    "sickman": "True"
            }, {
                    "name": "Mark Anson",
                    "position": "Undergrad Researcher",
                    "email": "",
                    "sickman": "True"
            }, {
                    "name": "Hannah Campi",
                    "position": "Undergrad Researcher",
                    "email": "",
                    "sickman": "True"
            }, {
                    "name": "Tyler Davenport",
                    "position": "Undergrad Researcher",
                    "email": "",
                    "sickman": "True"
            }, {
                    "name": "Micaelina Martinez",
                    "position": "Undergrad Researcher",
                    "email": "",
                    "sickman": "True"
            }, {
                    "name": "Kevin Martinez",
                    "position": "Undergrad Researcher",
                    "email": "",
                    "ying": "True"
            }, {
                    "name": "Mariejo Plaganas",
                    "position": "Undergrad Researcher",
                    "email": "",
                    "ying": "True"
            }, {
                    "name": "Shima Sahebjami",
                    "position": "Undergrad Researcher",
                    "email": "",
                    "ying": "True"
            }, {
                    "name": "Andrew Tran",
                    "position": "Undergrad Researcher",
                    "email": "",
                    "ying": "True"
            }]
    };

    //get HTML template
    var template = $('#template').html();

    //if template there is HTML in template 
    if (typeof template !== "undefined") {
            //remove CDATA
            template = template
                    .replace("// <![CDATA[", "")
                    .replace("// ]]>", ""),

                    //Iterate through data and render Mustache template
                    rendered = Mustache.render(template, data);

            //load HTML template to DOM
            $('#ensc-list').html(rendered);
    } else {

            //else declare an array of the faculty
            var faculty = [
                    "anderson", "baerenklau",
                    "bahreini", "crohn",
                    "crowley", "dinar",
                    "gan", "graham",
                    "gray", "hernandez",
                    "knapp", "schlenk",
                    "schwabe", "sickman",
                    "simunek", "volz",
                    "wu", "yates",
                    "ying"
            ];

            //and for each member in faculty
            for (var i = 0, rendered; i < faculty.length; i++) {
                    //Iterate through data and render Mustache string
                    rendered = Mustache.render("{{#ensc-department}}" + "{{#" + faculty[i] + "}}" //if 
                            + "{{name}}, {{position}}<br />" + "{{/" + faculty[i] + "}}" //end if
                            + "{{/ensc-department}}",
                            data);
                    //load HTML to DOM
                    $("#group-" + faculty[i]).html(rendered);
            };
    }
})();