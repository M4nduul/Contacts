import React, {useRef} from 'react'
import { FlatList, Text, View, Pressable} from 'react-native'

type Contacts = 
{
  id?: string 
  firstName: string
  lastName: string
  phoneNumber?: string
}

type RenderNamesProps = {
  item: Contacts,
  index: number
}

const contacts: Contacts = [
  { id: 'A' },
  {
    firstName: 'Alesia',
    lastName: 'Hixenbaugh',
    phoneNumber: '202-646-7516'
  },
  { firstName: 'Alpha', lastName: 'Palaia', phoneNumber: '08003' },
  {
    firstName: 'Alline',
    lastName: 'Jeanty',
    phoneNumber: '574-656-2800'
  },
  {
    firstName: 'Adell',
    lastName: 'Lipkin',
    phoneNumber: '973-654-1561'
  },
  {
    firstName: 'Annmarie',
    lastName: 'Castros',
    phoneNumber: '936-751-7961'
  },
  {
    firstName: 'Ahmed',
    lastName: 'Angalich',
    phoneNumber: '717-528-8996'
  },
  {
    firstName: 'Antione',
    lastName: 'Onofrio',
    phoneNumber: '909-430-7765'
  },
  { firstName: 'Arthur', lastName: 'Farrow', phoneNumber: '07631' },
  {
    firstName: 'Annelle',
    lastName: 'Tagala',
    phoneNumber: '410-757-1035'
  },
  {
    firstName: 'Audry',
    lastName: 'Yaw',
    phoneNumber: '813-797-4816'
  },
  {
    firstName: 'Aja',
    lastName: 'Gehrett',
    phoneNumber: '973-544-2677'
  },
  {
    firstName: 'Adelina',
    lastName: 'Nabours',
    phoneNumber: '216-230-4892'
  },
  {
    firstName: 'Amie',
    lastName: 'Perigo',
    phoneNumber: '972-419-7946'
  },
  { firstName: 'Alecia', lastName: 'Bubash', phoneNumber: '76301' },
  {
    firstName: 'Alyce',
    lastName: 'Arias',
    phoneNumber: '209-317-1801'
  },
  { firstName: 'An', lastName: 'Fritz', phoneNumber: '609-228-5265' },
  { firstName: 'Alex', lastName: 'Loader', phoneNumber: '98409' },
  {
    firstName: 'Alaine',
    lastName: 'Bergesen',
    phoneNumber: '914-300-9193'
  },
  {
    firstName: 'Avery',
    lastName: 'Steier',
    phoneNumber: '407-808-9439'
  },
  { firstName: 'Aliza', lastName: 'Baltimore', phoneNumber: '95132' },
  {
    firstName: 'Ashlyn',
    lastName: 'Pinilla',
    phoneNumber: '305-670-9628'
  },
  { firstName: 'Andra', lastName: 'Scheyer', phoneNumber: '97302' },
  {
    firstName: 'Annabelle',
    lastName: 'Boord',
    phoneNumber: '978-697-6263'
  },
  {
    firstName: 'Arminda',
    lastName: 'Parvis',
    phoneNumber: '602-906-9419'
  },
  { firstName: 'Audra', lastName: 'Kohnert', phoneNumber: '37211' },
  {
    firstName: 'Angella',
    lastName: 'Cetta',
    phoneNumber: '808-892-7943'
  },
  {
    firstName: 'Alease',
    lastName: 'Buemi',
    phoneNumber: '303-301-4946'
  },
  {
    firstName: 'Arlene',
    lastName: 'Klusman',
    phoneNumber: '504-710-5840'
  },
  {
    firstName: 'Arlette',
    lastName: 'Honeywell',
    phoneNumber: '904-775-4480'
  },
  {
    firstName: 'Amber',
    lastName: 'Monarrez',
    phoneNumber: '215-934-8655'
  },
  {
    firstName: 'Alishia',
    lastName: 'Sergi',
    phoneNumber: '212-860-1579'
  },
  { firstName: 'Albina', lastName: 'Glick', phoneNumber: '08812' },
  { firstName: 'Ammie', lastName: 'Corrio', phoneNumber: '43215' },
  { firstName: 'Allene', lastName: 'Iturbide', phoneNumber: '54481' },
  {
    firstName: 'Alisha',
    lastName: 'Slusarski',
    phoneNumber: '732-658-3154'
  },
  {
    firstName: 'Abel',
    lastName: 'Maclead',
    phoneNumber: '631-335-3414'
  },
  { firstName: 'Art', lastName: 'Venere', phoneNumber: '08014' },
  { id: 'B' },
  {
    firstName: 'Brittni',
    lastName: 'Gillaspie',
    phoneNumber: '208-709-1235'
  },
  {
    firstName: 'Britt',
    lastName: 'Galam',
    phoneNumber: '215-888-3304'
  },
  {
    firstName: 'Bernardine',
    lastName: 'Rodefer',
    phoneNumber: '901-901-4726'
  },
  { firstName: 'Billye', lastName: 'Miro', phoneNumber: '39208' },
  {
    firstName: 'Brett',
    lastName: 'Mccullan',
    phoneNumber: '619-461-9984'
  },
  {
    firstName: 'Barbra',
    lastName: 'Adkin',
    phoneNumber: '718-201-3751'
  },
  {
    firstName: 'Buddy',
    lastName: 'Cloney',
    phoneNumber: '440-989-5826'
  },
  {
    firstName: 'Benedict',
    lastName: 'Sama',
    phoneNumber: '314-787-1588'
  },
  {
    firstName: 'Beckie',
    lastName: 'Silvestrini',
    phoneNumber: '313-533-4884'
  },
  {
    firstName: 'Barrett',
    lastName: 'Toyama',
    phoneNumber: '817-765-5781'
  },
  {
    firstName: 'Belen',
    lastName: 'Strassner',
    phoneNumber: '770-507-8791'
  },
  {
    firstName: 'Benton',
    lastName: 'Skursky',
    phoneNumber: '310-579-2907'
  },
  {
    firstName: 'Bulah',
    lastName: 'Padilla',
    phoneNumber: '254-463-4368'
  },
  {
    firstName: 'Beatriz',
    lastName: 'Corrington',
    phoneNumber: '508-584-4279'
  },
  {
    firstName: 'Becky',
    lastName: 'Mirafuentes',
    phoneNumber: '908-877-8409'
  },
  {
    firstName: 'Bok',
    lastName: 'Isaacs',
    phoneNumber: '718-809-3762'
  },
  {
    firstName: 'Brandon',
    lastName: 'Callaro',
    phoneNumber: '808-215-6832'
  },
  { firstName: 'Bobbye', lastName: 'Rhym', phoneNumber: '94070' },
  {
    firstName: 'Blondell',
    lastName: 'Pugh',
    phoneNumber: '401-960-8259'
  },
  {
    firstName: 'Brock',
    lastName: 'Bolognia',
    phoneNumber: '212-402-9216'
  },
  {
    firstName: 'Blair',
    lastName: 'Malet',
    phoneNumber: '215-907-9111'
  },
  {
    firstName: 'Bernardo',
    lastName: 'Figeroa',
    phoneNumber: '77301'
  },
  {
    firstName: 'Bette',
    lastName: 'Nicka',
    phoneNumber: '610-545-3615'
  },
  { id: 'C' },
  {
    firstName: 'Chauncey',
    lastName: 'Motley',
    phoneNumber: '407-413-4842'
  },
  { firstName: 'Carlee', lastName: 'Boulter', phoneNumber: '67410' },
  {
    firstName: 'Catalina',
    lastName: 'Tillotson',
    phoneNumber: '609-373-3332'
  },
  {
    firstName: 'Colette',
    lastName: 'Kardas',
    phoneNumber: '402-896-5943'
  },
  {
    firstName: 'Cecilia',
    lastName: 'Colaizzo',
    phoneNumber: '608-382-4541'
  },
  {
    firstName: 'Cristal',
    lastName: 'Samara',
    phoneNumber: '213-975-8026'
  },
  { firstName: 'Cassi', lastName: 'Wildfong', phoneNumber: '60008' },
  { firstName: 'Cecil', lastName: 'Lapage', phoneNumber: '07087' },
  { firstName: 'Caprice', lastName: 'Suell', phoneNumber: '37211' },
  {
    firstName: 'Clorinda',
    lastName: 'Heimann',
    phoneNumber: '92025'
  },
  { firstName: 'Catarina', lastName: 'Gleich', phoneNumber: '07834' },
  {
    firstName: 'Cordelia',
    lastName: 'Storment',
    phoneNumber: '70506'
  },
  { firstName: 'Ciara', lastName: 'Ventura', phoneNumber: '12771' },
  {
    firstName: 'Cyril',
    lastName: 'Daufeldt',
    phoneNumber: '212-745-8484'
  },
  {
    firstName: 'Corinne',
    lastName: 'Loder',
    phoneNumber: '508-942-4186'
  },
  { firstName: 'Caitlin', lastName: 'Julia', phoneNumber: '02919' },
  {
    firstName: 'Cherry',
    lastName: 'Lietz',
    phoneNumber: '248-980-6904'
  },
  {
    firstName: 'Christiane',
    lastName: 'Eschberger',
    phoneNumber: '602-390-4944'
  },
  {
    firstName: 'Cathrine',
    lastName: 'Pontoriero',
    phoneNumber: '806-703-1435'
  },
  { firstName: 'Casie', lastName: 'Good', phoneNumber: '37211' },
  {
    firstName: 'Carmen',
    lastName: 'Sweigard',
    phoneNumber: '732-941-2621'
  },
  {
    firstName: 'Charlene',
    lastName: 'Hamilton',
    phoneNumber: '707-300-1771'
  },
  { firstName: 'Carey', lastName: 'Dopico', phoneNumber: '46220' },
  {
    firstName: 'Ceola',
    lastName: 'Setter',
    phoneNumber: '207-627-7565'
  },
  {
    firstName: 'Chaya',
    lastName: 'Malvin',
    phoneNumber: '734-928-5182'
  },
  {
    firstName: 'Cristy',
    lastName: 'Lother',
    phoneNumber: '760-971-4322'
  },
  {
    firstName: 'Candida',
    lastName: 'Corbley',
    phoneNumber: '908-275-8357'
  },
  {
    firstName: 'Claribel',
    lastName: 'Varriano',
    phoneNumber: '419-544-4900'
  },
  {
    firstName: 'Carmela',
    lastName: 'Cookey',
    phoneNumber: '773-494-4195'
  },
  { firstName: 'Clay', lastName: 'Hoa', phoneNumber: '775-501-8109' },
  {
    firstName: 'Chantell',
    lastName: 'Maynerich',
    phoneNumber: '651-591-2583'
  },
  { firstName: 'Carin', lastName: 'Deleo', phoneNumber: '72202' },
  { firstName: 'Carissa', lastName: 'Batman', phoneNumber: '97401' },
  {
    firstName: 'Cheryl',
    lastName: 'Haroldson',
    phoneNumber: '609-518-7697'
  },
  { firstName: 'Chau', lastName: 'Kitzman', phoneNumber: '90212' },
  {
    firstName: 'Celeste',
    lastName: 'Korando',
    phoneNumber: '516-509-2347'
  },
  {
    firstName: 'Cyndy',
    lastName: 'Goldammer',
    phoneNumber: '952-334-9408'
  }
]  
  
export const ScrollFlatList = () => {
  
  const indices = useRef([]).current

  const renderNames = ({ item: { firstName, lastName, id }, index }: RenderNamesProps) => {
    if (id) {
      indices.push(index)
    } 
    return (id ? 
      (
        <Pressable 
        style={{borderWidth: 0.3, padding: 5, backgroundColor: '#E0E0E0', }}>
          <Text style={{fontWeight: 'bold'}}>{id}</Text>
        </Pressable>
      ) 
      : 
      (
        <View style={{borderWidth: 0.3, padding: 5}}>
          <Text>{firstName} {lastName}</Text>
        </View>
      )
    )
  };
    
  return (
    <View> 
    <View style={{height: 70, justifyContent: 'flex-end', padding: 5}}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Contacts</Text>
      </View> 
      <FlatList
        data={contacts}
        renderItem={renderNames}
        stickyHeaderIndices = {indices}
      />
    </View>

  );
}

export default ScrollFlatList;
