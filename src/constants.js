// IMAGE LINE-UP
import YouManLU from 'assets/line-up/YouMan.jpg';
import BafangLU from 'assets/line-up/Bafang.jpg';

// IMAGE ARTIST 
import YouManArtist from 'assets/artist/YouMan.png';
import BafangArtist from 'assets/artist/Bafang.png';
import AMC from 'assets/artist/AMC.jpg';

export default {
  youman: {
    id: 'youman',
    name: 'Youman',
    style: 'Electro',
    description: {
      first : 'L’année 2019 marque le retour du duo français You Man sur le devant de la scène électronique. Avec un nouveau maxi, baptisé « Tutti Va Bene », sur le label anglais Nein Records, et un album qui arrive en 2020. Entre électro club et mélodies new wave, la musique de You Man est prête à conquérir les dancefloors du monde entier.',
      second : 'A l’instar d’autres duos, comme Daft Punk ou The Chemical Brothers, Tepat Huleux et Giac Di Falco sont inséparables depuis leur adolescence. Originaires de Calais, les deux jeunes hommes se rencontrent au lycée en 1996. Depuis, ils ne se sont plus quittés. Ils ont formé plusieurs groupes rock et électro, avant de continuer, seulement tous les deux depuis 2013, sous l’identité You Man. Pour ce nouveau projet, ils abandonnent guitare et basse pour se concentrer sur les machines. Toutes leurs années d’apprentissage ont permis aux deux musiciens de trouver la bonne formule et d’offrir un son unique, original, dansant, qu’ils baptisent « Club Wave », soit un savant mélange d’électro club, de mélodies new wave et d’un groove disco déviant, sombre et hypnotique.',
      third: ''
    },
    links: {
      site: 'http://www.you-man.eu/',
      soundcloud: 'https://soundcloud.com/you_man',
      facebook: 'https://www.facebook.com/youmanband',
    },
    lineUpImg: YouManLU,
    artistImg: YouManArtist,
    video: 'sLHeOABFAbA',
  },
  bafang: {
    id: 'bafang',
    name: 'Bafang',
    style: 'Rock Punk Afro',
    description: {
      first: 'Issue d\'un terroir sans précédents, comme si le Niger prenait sa source dans la Manche. BAFANG est une pirogue dans l\'espace.',
      second: 'Entre déserts inter-connectiques où se mélangent les acteurs dans un lien social évident, vous entrerez sans fermer la porte derrière vous. Aux confluents de vos limites. Musique tribale, celtique, éphémère, vouée à rester dans l\'intelligible ou à retourner dans l\'informatif. Vous en conviendez. Mais certes, comme tout le monde le sait certaines histoires ne se racontent pas...',
    },
    links: {
      youtube: 'https://www.youtube.com/channel/UCDte3hZUCOweKrrRDwntXxg',
      soundcloud: 'https://soundcloud.com/bafang?fbclid=IwAR2zrAjtJTopWI6u_8Zm9OPyjgAye0x9CY5-FKinANRPeDnw3mzkqQe6Yt4',
      facebook: 'https://www.facebook.com/BAFANGOFFICIEL/',
    },
    lineUpImg: BafangLU,
    artistImg: BafangArtist,
    video: '3cK2b6Z2VdI'
  },
  anglemortetclignotant: {
    id: 'anglemortetclignotant',
    name: 'Angle Mort & Clignotant',
    style: 'TechnoBoom Stroboscopique',
    description: {
      first: 'Angle Mort & Clignotant sont deux chauffards de Trap Music, qui la recrachent version Technoboom et stroboscopique.',
      second: 'Une performance zapping martelée d’hymnes féria/rugby à l’énergie punk où copulent l\'esthétique clubbing de campagne, des slogans ravageurs et quelques centimes d’euros.',
    },
    
    links: {
      youtube: 'https://www.youtube.com/watch?v=1Vba2TGa830',
      soundcloud: 'https://soundcloud.com/angle-mort-clignotant/des-frites-putain-et-de-la-sauce-bordel',
      facebook: 'https://www.facebook.com/anglemortetclignotant/',
    },
    artistImg: AMC,
    video: '1Vba2TGa830',
  },
}