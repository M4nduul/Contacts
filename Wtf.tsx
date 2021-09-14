import React from 'react'
import { FlatList, Text, View} from 'react-native'


const Names = [
    {
      "first_name": "James",
      "last_name": "Butt"
    },
    {
      "first_name": "Josephine",
      "last_name": "Darakjy"
    },
    {
      "first_name": "Art",
      "last_name": "Venere"
    },
    {
      "first_name": "Lenna",
      "last_name": "Paprocki"
    },
    {
      "first_name": "Donette",
      "last_name": "Foller"
    },
    {
      "first_name": "Simona",
      "last_name": "Morasca"
    },
    {
      "first_name": "Mitsue",
      "last_name": "Tollner"
    },
    {
      "first_name": "Leota",
      "last_name": "Dilliard"
    },
    {
      "first_name": "Sage",
      "last_name": "Wieser"
    },
    {
      "first_name": "Kris",
      "last_name": "Marrier"
    },
    {
      "first_name": "Minna",
      "last_name": "Amigon"
    },
    {
      "first_name": "Abel",
      "last_name": "Maclead"
    },
    {
      "first_name": "Kiley",
      "last_name": "Caldarera"
    },
    {
      "first_name": "Graciela",
      "last_name": "Ruta"
    },
    {
      "first_name": "Cammy",
      "last_name": "Albares"
    },
    {
      "first_name": "Mattie",
      "last_name": "Poquette"
    },
    {
      "first_name": "Meaghan",
      "last_name": "Garufi"
    },
    {
      "first_name": "Gladys",
      "last_name": "Rim"
    },
    {
      "first_name": "Yuki",
      "last_name": "Whobrey"
    },
    {
      "first_name": "Fletcher",
      "last_name": "Flosi"
    },
    {
      "first_name": "Bette",
      "last_name": "Nicka"
    },
    {
      "first_name": "Veronika",
      "last_name": "Inouye"
    },
    {
      "first_name": "Willard",
      "last_name": "Kolmetz"
    },
    {
      "first_name": "Maryann",
      "last_name": "Royster"
    },
    {
      "first_name": "Alisha",
      "last_name": "Slusarski"
    },
    {
      "first_name": "Allene",
      "last_name": "Iturbide"
    },
    {
      "first_name": "Chanel",
      "last_name": "Caudy"
    },
    {
      "first_name": "Ezekiel",
      "last_name": "Chui"
    },
    {
      "first_name": "Willow",
      "last_name": "Kusko"
    },
    {
      "first_name": "Bernardo",
      "last_name": "Figeroa"
    },
    {
      "first_name": "Ammie",
      "last_name": "Corrio"
    },
    {
      "first_name": "Francine",
      "last_name": "Vocelka"
    },
    {
      "first_name": "Ernie",
      "last_name": "Stenseth"
    },
    {
      "first_name": "Albina",
      "last_name": "Glick"
    },
    {
      "first_name": "Alishia",
      "last_name": "Sergi"
    },
    {
      "first_name": "Solange",
      "last_name": "Shinko"
    },
    {
      "first_name": "Jose",
      "last_name": "Stockham"
    },
    {
      "first_name": "Rozella",
      "last_name": "Ostrosky"
    },
    {
      "first_name": "Valentine",
      "last_name": "Gillian"
    },
    {
      "first_name": "Kati",
      "last_name": "Rulapaugh"
    },
    {
      "first_name": "Youlanda",
      "last_name": "Schemmer"
    },
    {
      "first_name": "Dyan",
      "last_name": "Oldroyd"
    },
    {
      "first_name": "Roxane",
      "last_name": "Campain"
    },
    {
      "first_name": "Lavera",
      "last_name": "Perin"
    },
    {
      "first_name": "Erick",
      "last_name": "Ferencz"
    },
    {
      "first_name": "Fatima",
      "last_name": "Saylors"
    },
    {
      "first_name": "Jina",
      "last_name": "Briddick"
    },
    {
      "first_name": "Kanisha",
      "last_name": "Waycott"
    },
    {
      "first_name": "Emerson",
      "last_name": "Bowley"
    },
    {
      "first_name": "Blair",
      "last_name": "Malet"
    },
    {
      "first_name": "Brock",
      "last_name": "Bolognia"
    },
    {
      "first_name": "Lorrie",
      "last_name": "Nestle"
    },
    {
      "first_name": "Sabra",
      "last_name": "Uyetake"
    },
    {
      "first_name": "Marjory",
      "last_name": "Mastella"
    },
    {
      "first_name": "Karl",
      "last_name": "Klonowski"
    },
    {
      "first_name": "Tonette",
      "last_name": "Wenner"
    },
    {
      "first_name": "Amber",
      "last_name": "Monarrez"
    },
    {
      "first_name": "Shenika",
      "last_name": "Seewald"
    },
    {
      "first_name": "Delmy",
      "last_name": "Ahle"
    },
    {
      "first_name": "Deeanna",
      "last_name": "Juhas"
    },
    {
      "first_name": "Blondell",
      "last_name": "Pugh"
    },
    {
      "first_name": "Jamal",
      "last_name": "Vanausdal"
    },
    {
      "first_name": "Cecily",
      "last_name": "Hollack"
    },
    {
      "first_name": "Carmelina",
      "last_name": "Lindall"
    },
    {
      "first_name": "Maurine",
      "last_name": "Yglesias"
    },
    {
      "first_name": "Tawna",
      "last_name": "Buvens"
    },
    {
      "first_name": "Penney",
      "last_name": "Weight"
    },
    {
      "first_name": "Elly",
      "last_name": "Morocco"
    },
    {
      "first_name": "Ilene",
      "last_name": "Eroman"
    },
    {
      "first_name": "Vallie",
      "last_name": "Mondella"
    },
    {
      "first_name": "Kallie",
      "last_name": "Blackwood"
    },
    {
      "first_name": "Johnetta",
      "last_name": "Abdallah"
    },
    {
      "first_name": "Bobbye",
      "last_name": "Rhym"
    },
    {
      "first_name": "Micaela",
      "last_name": "Rhymes"
    },
    {
      "first_name": "Tamar",
      "last_name": "Hoogland"
    },
    {
      "first_name": "Moon",
      "last_name": "Parlato"
    },
    {
      "first_name": "Laurel",
      "last_name": "Reitler"
    },
    {
      "first_name": "Delisa",
      "last_name": "Crupi"
    },
    {
      "first_name": "Viva",
      "last_name": "Toelkes"
    },
    {
      "first_name": "Elza",
      "last_name": "Lipke"
    },
    {
      "first_name": "Devorah",
      "last_name": "Chickering"
    },
    {
      "first_name": "Timothy",
      "last_name": "Mulqueen"
    },
    {
      "first_name": "Arlette",
      "last_name": "Honeywell"
    },
    {
      "first_name": "Dominque",
      "last_name": "Dickerson"
    },
    {
      "first_name": "Lettie",
      "last_name": "Isenhower"
    },
    {
      "first_name": "Myra",
      "last_name": "Munns"
    },
    {
      "first_name": "Stephaine",
      "last_name": "Barfield"
    },
    {
      "first_name": "Lai",
      "last_name": "Gato"
    },
    {
      "first_name": "Stephen",
      "last_name": "Emigh"
    },
    {
      "first_name": "Tyra",
      "last_name": "Shields"
    },
    {
      "first_name": "Tammara",
      "last_name": "Wardrip"
    },
    {
      "first_name": "Cory",
      "last_name": "Gibes"
    },
    {
      "first_name": "Danica",
      "last_name": "Bruschke"
    },
    {
      "first_name": "Wilda",
      "last_name": "Giguere"
    },
    {
      "first_name": "Elvera",
      "last_name": "Benimadho"
    },
    {
      "first_name": "Carma",
      "last_name": "Vanheusen"
    },
    {
      "first_name": "Malinda",
      "last_name": "Hochard"
    },
    {
      "first_name": "Natalie",
      "last_name": "Fern"
    },
    {
      "first_name": "Lisha",
      "last_name": "Centini"
    },
    {
      "first_name": "Arlene",
      "last_name": "Klusman"
    },
    {
      "first_name": "Alease",
      "last_name": "Buemi"
    },
    {
      "first_name": "Louisa",
      "last_name": "Cronauer"
    },
    {
      "first_name": "Angella",
      "last_name": "Cetta"
    },
    {
      "first_name": "Cyndy",
      "last_name": "Goldammer"
    },
    {
      "first_name": "Rosio",
      "last_name": "Cork"
    },
    {
      "first_name": "Celeste",
      "last_name": "Korando"
    },
    {
      "first_name": "Twana",
      "last_name": "Felger"
    },
    {
      "first_name": "Estrella",
      "last_name": "Samu"
    },
    {
      "first_name": "Donte",
      "last_name": "Kines"
    },
    {
      "first_name": "Tiffiny",
      "last_name": "Steffensmeier"
    },
    {
      "first_name": "Edna",
      "last_name": "Miceli"
    },
    {
      "first_name": "Sue",
      "last_name": "Kownacki"
    },
    {
      "first_name": "Jesusa",
      "last_name": "Shin"
    },
    {
      "first_name": "Rolland",
      "last_name": "Francescon"
    },
    {
      "first_name": "Pamella",
      "last_name": "Schmierer"
    },
    {
      "first_name": "Glory",
      "last_name": "Kulzer"
    },
    {
      "first_name": "Shawna",
      "last_name": "Palaspas"
    },
    {
      "first_name": "Brandon",
      "last_name": "Callaro"
    },
    {
      "first_name": "Scarlet",
      "last_name": "Cartan"
    },
    {
      "first_name": "Oretha",
      "last_name": "Menter"
    },
    {
      "first_name": "Ty",
      "last_name": "Smith"
    },
    {
      "first_name": "Xuan",
      "last_name": "Rochin"
    },
    {
      "first_name": "Lindsey",
      "last_name": "Dilello"
    },
    {
      "first_name": "Devora",
      "last_name": "Perez"
    },
    {
      "first_name": "Herman",
      "last_name": "Demesa"
    },
    {
      "first_name": "Rory",
      "last_name": "Papasergi"
    },
    {
      "first_name": "Talia",
      "last_name": "Riopelle"
    },
    {
      "first_name": "Van",
      "last_name": "Shire"
    },
    {
      "first_name": "Lucina",
      "last_name": "Lary"
    },
    {
      "first_name": "Bok",
      "last_name": "Isaacs"
    },
    {
      "first_name": "Rolande",
      "last_name": "Spickerman"
    },
    {
      "first_name": "Howard",
      "last_name": "Paulas"
    },
    {
      "first_name": "Kimbery",
      "last_name": "Madarang"
    },
    {
      "first_name": "Thurman",
      "last_name": "Manno"
    },
    {
      "first_name": "Becky",
      "last_name": "Mirafuentes"
    },
    {
      "first_name": "Beatriz",
      "last_name": "Corrington"
    },
    {
      "first_name": "Marti",
      "last_name": "Maybury"
    },
    {
      "first_name": "Nieves",
      "last_name": "Gotter"
    },
    {
      "first_name": "Leatha",
      "last_name": "Hagele"
    },
    {
      "first_name": "Valentin",
      "last_name": "Klimek"
    },
    {
      "first_name": "Melissa",
      "last_name": "Wiklund"
    },
    {
      "first_name": "Sheridan",
      "last_name": "Zane"
    },
    {
      "first_name": "Bulah",
      "last_name": "Padilla"
    },
    {
      "first_name": "Audra",
      "last_name": "Kohnert"
    },
    {
      "first_name": "Daren",
      "last_name": "Weirather"
    },
    {
      "first_name": "Fernanda",
      "last_name": "Jillson"
    },
    {
      "first_name": "Gearldine",
      "last_name": "Gellinger"
    },
    {
      "first_name": "Chau",
      "last_name": "Kitzman"
    },
    {
      "first_name": "Theola",
      "last_name": "Frey"
    },
    {
      "first_name": "Cheryl",
      "last_name": "Haroldson"
    },
    {
      "first_name": "Laticia",
      "last_name": "Merced"
    },
    {
      "first_name": "Carissa",
      "last_name": "Batman"
    },
    {
      "first_name": "Lezlie",
      "last_name": "Craghead"
    },
    {
      "first_name": "Ozell",
      "last_name": "Shealy"
    },
    {
      "first_name": "Arminda",
      "last_name": "Parvis"
    },
    {
      "first_name": "Reita",
      "last_name": "Leto"
    },
    {
      "first_name": "Yolando",
      "last_name": "Luczki"
    },
    {
      "first_name": "Lizette",
      "last_name": "Stem"
    },
    {
      "first_name": "Gregoria",
      "last_name": "Pawlowicz"
    },
    {
      "first_name": "Carin",
      "last_name": "Deleo"
    },
    {
      "first_name": "Chantell",
      "last_name": "Maynerich"
    },
    {
      "first_name": "Dierdre",
      "last_name": "Yum"
    },
    {
      "first_name": "Larae",
      "last_name": "Gudroe"
    },
    {
      "first_name": "Latrice",
      "last_name": "Tolfree"
    },
    {
      "first_name": "Kerry",
      "last_name": "Theodorov"
    },
    {
      "first_name": "Dorthy",
      "last_name": "Hidvegi"
    },
    {
      "first_name": "Fannie",
      "last_name": "Lungren"
    },
    {
      "first_name": "Evangelina",
      "last_name": "Radde"
    },
    {
      "first_name": "Novella",
      "last_name": "Degroot"
    },
    {
      "first_name": "Clay",
      "last_name": "Hoa"
    },
    {
      "first_name": "Jennifer",
      "last_name": "Fallick"
    },
    {
      "first_name": "Irma",
      "last_name": "Wolfgramm"
    },
    {
      "first_name": "Eun",
      "last_name": "Coody"
    },
    {
      "first_name": "Sylvia",
      "last_name": "Cousey"
    },
    {
      "first_name": "Nana",
      "last_name": "Wrinkles"
    },
    {
      "first_name": "Layla",
      "last_name": "Springe"
    },
    {
      "first_name": "Joesph",
      "last_name": "Degonia"
    },
    {
      "first_name": "Annabelle",
      "last_name": "Boord"
    },
    {
      "first_name": "Stephaine",
      "last_name": "Vinning"
    },
    {
      "first_name": "Nelida",
      "last_name": "Sawchuk"
    },
    {
      "first_name": "Marguerita",
      "last_name": "Hiatt"
    },
    {
      "first_name": "Carmela",
      "last_name": "Cookey"
    },
    {
      "first_name": "Junita",
      "last_name": "Brideau"
    },
    {
      "first_name": "Claribel",
      "last_name": "Varriano"
    },
    {
      "first_name": "Benton",
      "last_name": "Skursky"
    },
    {
      "first_name": "Hillary",
      "last_name": "Skulski"
    },
    {
      "first_name": "Merilyn",
      "last_name": "Bayless"
    },
    {
      "first_name": "Teri",
      "last_name": "Ennaco"
    },
    {
      "first_name": "Merlyn",
      "last_name": "Lawler"
    },
    {
      "first_name": "Georgene",
      "last_name": "Montezuma"
    },
    {
      "first_name": "Jettie",
      "last_name": "Mconnell"
    },
    {
      "first_name": "Lemuel",
      "last_name": "Latzke"
    },
    {
      "first_name": "Melodie",
      "last_name": "Knipp"
    },
    {
      "first_name": "Candida",
      "last_name": "Corbley"
    },
    {
      "first_name": "Karan",
      "last_name": "Karpin"
    },
    {
      "first_name": "Andra",
      "last_name": "Scheyer"
    },
    {
      "first_name": "Felicidad",
      "last_name": "Poullion"
    },
    {
      "first_name": "Belen",
      "last_name": "Strassner"
    },
    {
      "first_name": "Gracia",
      "last_name": "Melnyk"
    },
    {
      "first_name": "Jolanda",
      "last_name": "Hanafan"
    }
  ]


const Item = ({ first_name }) => (
    <View>
        <Text style={{fontSize: 16}}>
            { first_name }
        </Text>
    </View>
)

export const ScrollFlatList = () => {
    const renderNames = ({ name }) => {
        return (
            <Item first_name={ name }/>
        )
    }

    return (
        <FlatList
        data={Names}
        renderItem ={ renderNames }
        keyExtractor = {item => item.last_name}
        />
    )
}

export default ScrollFlatList