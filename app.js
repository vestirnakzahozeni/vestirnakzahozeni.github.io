var skupinaPrvni, skupinaDruha, skupinaTreti;
skupinaPrvni = ["Nebuďte zaražení,", "Běžte si oddechnout,", "Vidím ta srdíčka zdáli,", "Je vám hodně,", "Nebojte se otevřít,", "Všechno na vás tlačí,", "Ciťte teplotu ve vašich silách,", "Lepí se vám smůla na prstu,", "Teďka je velká síla,", "Tady vidím velký špatný,", "Boží oko na vás hodně dohlídne,", "Máte nervy,", "Nenechte se zmást,", "Nechte do sebe zasadit semínko,", "Naposledy vydechněte a dýchejte věčně,", "Nalejte si sklenici čistého vína,", "Tak nějak málo tančíte,", "Poznejte svého nepřítele,", "Zhasněte svět,", "Přestaňte nosit samolepky po kapsách,", "Netvařte se kysele,", "Až to skončí, najděte si cvokaře,", "Cibule mají vrstvy,", "Lži jsou jako déšť a už zase prší,", "Jste chudý, jste sláb, možná i nemocen,", "Nekupujte kvůli nikomu hned kytaru,"];
skupinaDruha = ["jako když se kůň zamiluje koňskou láskou,", "vidím velkou radost,", "vidím dluhy,", "čeká vás velká cesta,", "vidím ve vás slizkou hromadu,", "dejte na sebe pozor,", "vaše vztahy vám budou kvétat,", "láska a štěstí nemůže promluvit,", "mezi nebem a zemí,", "hoďte tam tu sůl na někoho,", "budou se vám nosit peníze,", "lodě míří vysoko,", "proplachujte trubky, pijte vodu,", "roste to ve vás,", "nebojte se mrazení v zádech ani fronty v Tescu,", "chybí vám v životě nějaká kočka,", "začněte kousat,", "jíte málo luštěnin,", "budete šťastní,", "nechte znít ten srdcebeat,", "zazpívejte ptákům,", "nehrajte si na kaskadéra,", "nechovejte se jako osel,", "zavolejte si o déšť,", "zazpívejte písničku pro klisničku,", ];
skupinaTreti = ["můžete to položit...", "musim vás zklamat, nedostanete se z toho.", "s nemocí vám nepomůžu.", "chobotnice bude pro vás připravena.", "odpusťte si...", "pes je přítel člověka.", "neustále jsme tady, dnes naposledy.", "protože je teprve krásná noc...", "je vidět, jaký jste kamarád.", "to stáří si dopřejete.", "je to úplně tak, jak to má být.", "máte velký řešení.", "nebojte se změny.", "protože času je málo.", "hlavně nebrečte.", "probuďte v sobě to zvíře.", "předvedete fantastický výkon.", "příroda to potvrdila.", "nezklamte svého ducha.", "na všechno máte dost času.", "pozor na noční vycházky...", "tak se nesmějte.", "to je to kouzlo, co vy dokážete.", "tak si běžte...", "hlavně nezapomeňtě na tři slova.", ];


function randGen() {
  return Math.floor(Math.random() * 3);
}

function sentence() {
 var rand1 = Math.floor(Math.random() * 26);
  // var rand2 = Math.floor(Math.random() * 1);
  var rand2 = Math.floor(Math.random() * 25);
  var rand3 = Math.floor(Math.random() * 25);

var content = skupinaPrvni[rand1] + " " + skupinaDruha[rand2] + " " + skupinaTreti[rand3];
document.getElementById('sentence').textContent = "„"+ content +"“" ;
};

sentence();


