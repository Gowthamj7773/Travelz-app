import React ,{useState,useEffect} from 'react';
import { Text,TextInput, KeyboardAvoidingView,View,ActivityIndicator,Dimensions,ScrollView,Button, Alert,Image, StyleSheet ,TouchableOpacity,Modal, Switch, ImageBackground} from 'react-native';
import Cards from './android/components/cards/cards';
export default function App() {
  const [name,SetName] = useState("");
  const [email,SetEmail] = useState("");
  const [Password,SetPassword] = useState("");

  const [email2,SetEmail2] = useState("");
  const [Password2,SetPassword2] = useState("");
  const [mainPage , SetMainPage] = useState(false);
  const [submit,SetSubmit] = useState(false);
  const [login,SetLogin] = useState(false);


 //main page
  const [b1,SetB1] = useState(false);
  const [b2,SetB2] = useState(false);
  const [b3,SetB3] = useState(true);
  const [b4,SetB4] = useState(false);
  const [b5,SetB5] = useState(false);
  const [b6,SetB6] = useState(false);
  const {height,width} = Dimensions.get("window");

//mainPage bottom
const [home,SetHome] = useState(true);
const [like,SetLike] = useState(false);
const [booking,SetBooking] = useState(false);
const [settings,SetSettings] = useState(false);

//switching darkMode:
const [OnOff,SetOnOff] = useState(false);
  const [LikesMemory,SetLikesMemory] = useState({
    "Asia":{
      "japan":false,
      "india":false,
      "indonesia":false,
      "russia":false,
    },
    "Europe":{
      "spain":false,
      "germany":false,
      "UK":false,
      "france":false,
    },
    "southAmerica":{
      "Brazil":false,
      "argentina":false,
      "peru":false,
      "colombia":false,
    },
    "northAmerica":{
      "US":false,
      "mexico":false,
      "canada":false,
      "cuba":false,
    },
    "africa":{
      "southAfrica":false,
      "tanzania":false,
      "egypt":false,
      "morocco":false,
    },
    "australia":{
      "a1":false,
      "a2":false,
      "a3":false,
      "a4":false,
    }

  });

  const Link = {
    "japan":require("./images/japan1.jpg"),
    "india":require("./images/india.jpg"),
    "indonesia":require("./images/bali.jpg"),
    "russia":require("./images/russia.jpeg"),
    "spain":require("./images/spain.jpg"),
    "germany":require("./images/germany.jpeg"),
    "UK":require("./images/uk.jpg"),
    "france":require("./images/france.jpg"),
    "Brazil":require("./images/brazil.jpg"),
    "argentina":require("./images/argentina.jpg"),
    "peru":require("./images/peru.jpeg"),
    "colombia":require("./images/colombia.jpg"),
    "US":require("./images/us.webp"),
    "mexico":require("./images/mexico.jpg"),
    "canada":require("./images/canada.webp"),
    "cuba":require("./images/cuba.jpg"),
    "southAfrica":require("./images/southAfrica.jpg"),
    "tanzania":require("./images/tanzania.jpg"),
    "egypt":require("./images/egpt.jpg"),
    "morocco":require("./images/morocco.jpg"),
    "a1":require("./images/aus1.jpg"),
    "a2":require("./images/aus2.jpg"),
    "a3":require("./images/aus3.jpg"),
    "a4":require("./images/aus4.jpg"),
  };
  const details = {
    "japan":`Overview:
Mount Fuji, soaring at 3,776 meters, is Japan’s tallest and most iconic mountain. Located on Honshu Island, this majestic stratovolcano is famous for its perfectly symmetrical cone and snow-capped peak. Deeply rooted in Japanese culture, Mount Fuji has inspired generations of artists, poets, and pilgrims. Visitors often climb it during the summer season to witness the breathtaking sunrise from its summit, an experience known as Goraikō. It’s not just a climb — it’s a spiritual journey.

Experience:
Nestled within Fuji-Hakone-Izu National Park, Mount Fuji is surrounded by serene lakes, lush forests, and relaxing hot springs. Even if you don’t plan to climb, nearby spots like Lake Kawaguchi offer stunning views of the mountain. Despite being an active volcano (last erupted in 1707), it's safe and well-monitored. In 2013, it was recognized as a UNESCO World Heritage Site for its cultural and artistic significance. Whether you’re an adventurer or a quiet nature lover, Mount Fuji promises a memorable and peaceful escape.`,



    "bali":`Overview:
Bali, the "Island of the Gods," is one of Indonesia’s most beloved travel destinations. Famed for its dreamy beaches, lush rice terraces, and spiritual atmosphere, Bali offers a perfect mix of relaxation and adventure. Whether you’re surfing the waves in Kuta, exploring the culture-rich temples of Ubud, or enjoying a beachside sunset in Seminyak, every corner of the island tells a story. The island’s unique blend of traditional Hindu culture and modern comforts makes it a favorite for travelers from around the world. With its year-round tropical climate, Bali invites you to experience paradise no matter the season.

Experience:
Beyond the beaches, Bali is rich in spiritual and cultural depth. Visit sacred temples like Uluwatu and Tanah Lot, witness traditional Balinese dances, or join a yoga session overlooking jungle valleys. In Ubud, scenic swings and jungle waterfalls create unforgettable memories. Food lovers can explore everything from authentic warungs to gourmet restaurants. The warmth of the Balinese people adds to the charm, making visitors feel at home. Whether you're seeking tranquility, adventure, or cultural immersion.`,



    "india":`Overview:
The Taj Mahal, located in Agra, India, is one of the world’s most famous architectural masterpieces. Built by Mughal emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, it stands as a symbol of eternal love. Made entirely of white marble, the monument is renowned for its stunning symmetry, intricate carvings, and breathtaking beauty that changes with the light of day. Visitors from all over the world flock to witness its grandeur, especially at sunrise and sunset. As a UNESCO World Heritage Site, the Taj Mahal holds immense historical and emotional significance in Indian and global culture.

Experience:
Surrounded by lush gardens and a reflecting pool, the Taj Mahal offers a peaceful and inspiring experience. The detailed inlay work using semi-precious stones, along with its massive dome and minarets, leave visitors in awe. It is part of a larger complex that includes a mosque and a guest house, showcasing the brilliance of Mughal architecture. The best way to explore it is with a guided tour that reveals the fascinating history behind each feature. Whether you’re a history buff.`,




    "russia":`Overview:
Located in the heart of Moscow's Red Square, Saint Basil’s Cathedral is one of Russia’s most iconic landmarks. Built in the 16th century under the orders of Ivan the Terrible, the cathedral is instantly recognizable by its colorful onion-shaped domes and intricate architectural style. Its design represents a flame rising into the sky, symbolizing heaven’s connection to Earth. With nine unique chapels built on a single foundation, each dome showcases different patterns and colors, making the cathedral a masterpiece of Russian architecture.

Experience:
Visiting Saint Basil’s Cathedral feels like stepping into a fairytale. Inside, narrow passages lead to beautifully decorated chapels adorned with frescoes and religious art. The views from Red Square are especially magical at sunrise or dusk when the cathedral glows under changing skies. While it no longer serves as a functioning church, it now operates as a museum, offering visitors insight into its fascinating history and design. A must-visit destination in Moscow.

`,



    "spain":`Overview:
Murallas de Tossa de Mar is a stunning medieval fortress located along the Costa Brava in Catalonia, Spain. Built in the 12th century, these ancient city walls were originally constructed to defend the town from pirates and invaders. Today, the well-preserved walls and towers offer visitors a unique glimpse into history, surrounded by breathtaking views of the Mediterranean Sea. As you walk along the cobbled paths and climb the stone watchtowers, the charm of Tossa’s old town, known as Vila Vella, comes to life. It’s a peaceful blend of heritage, nature, and coastal beauty.

Experience:
The experience of visiting Murallas de Tossa de Mar is like stepping back in time. You can stroll through narrow alleyways, admire traditional Catalan homes, and explore the ruins of an old lighthouse and chapel within the fortress. The panoramic sea views from the walls are especially magical at sunrise or sunset. Nearby beaches and seaside cafés add to the charm, making it easy to spend a relaxing day in this coastal gem. Whether you’re a history lover, a photographer, or a quiet traveler looking for beauty and serenity, Tossa de Mar is a hidden treasure worth exploring.`,



    "germany":`Overview:
Rothenburg ob der Tauber is a beautifully preserved medieval town in Bavaria, Germany. Known for its colorful half-timbered houses, cobblestone streets, and fairytale charm, it feels like stepping into a storybook. Surrounded by old city walls, the town has remained nearly untouched since the Middle Ages. Visitors can walk along the fortified walls, explore charming town squares, and visit the iconic Plönlein corner — one of the most photographed spots in Germany. With its rich history, romantic ambiance, and timeless.

Experience:
Wandering through Rothenburg feels magical, especially during early mornings or snowy winter days. Explore medieval museums like the Crime and Punishment Museum, or climb the Town Hall tower for panoramic views. During Christmas, the town transforms into a festive wonderland with its famous Reiterlesmarkt. Local bakeries serve Schneeballen, a traditional pastry that’s a must-try. Rothenburg’s cozy cafés, artisan shops, and peaceful atmosphere make it perfect for a slow, immersive travel experience. Whether you're interested in history, photography, or simply soaking in medieval vibes.`,



    "UK":`Overview:
Big Ben is one of London’s most iconic landmarks, located at the north end of the Palace of Westminster. Although many refer to the entire tower as Big Ben, the name originally refers to the massive bell inside the Elizabeth Tower. Standing tall since 1859, this historic clock tower is a symbol of British culture and tradition. Its chimes are instantly recognizable and are broadcast around the world. The clock is famed for its accuracy and grandeur, making it a must-see attraction for anyone visiting.

Experience:
While the tower itself isn't open for public tours (except for UK residents with special permission), visitors can admire its Gothic Revival architecture from Parliament Square or the nearby Westminster Bridge. The surrounding area is rich in history — just steps away from the River Thames, Westminster Abbey, and the London Eye. Street performers, classic red buses, and scenic views make the atmosphere lively and memorable. Whether you're on a photo walk or a historical journey, Big Ben serves as a proud reminder of London's legacy and charm, perfectly blending tradition with the buzz of a modern city`,



    "france":`Overview:
The Eiffel Tower, or La Tour Eiffel, is the most famous landmark in Paris and one of the most recognized structures in the world. Built in 1889 for the World's Fair, it was originally met with mixed opinions, but today it stands as a global symbol of France’s elegance and innovation. The iron lattice structure rises 330 meters tall and offers stunning views of the Parisian skyline. Whether admired from below or from its observation decks, the Eiffel Tower captures the romance, charm, and history of Paris like no other monument.

Experience:
Visitors can take the elevator or climb the stairs to the tower’s viewing platforms for breathtaking views of the Seine River, Champs de Mars, and beyond. At night, the tower sparkles with thousands of lights every hour, creating a magical scene that attracts travelers and locals alike. Nearby cafés, souvenir stalls, and picnic spots offer a perfect way to relax while soaking in the ambiance. The Eiffel Tower isn’t just a place to visit — it’s a moment to experience. Whether it’s your first time or a return trip, the tower’s beauty always feels new and unforgettable.`,



    "brazil":`Overview:
Christ the Redeemer (Cristo Redentor) is one of the most iconic monuments in the world, proudly overlooking Rio de Janeiro, Brazil. Standing 30 meters tall atop the Corcovado Mountain, this colossal statue of Jesus Christ symbolizes peace, faith, and unity. Completed in 1931, it has become a national treasure and a global landmark of Brazil. The art deco structure, with its outstretched arms spanning 28 meters, offers a welcoming embrace to the city below.

Experience:
Reaching the summit is a breathtaking journey, whether you take the scenic train through Tijuca Forest or hike one of the lush trails. Once at the top, the panoramic view of Rio — including Sugarloaf Mountain, Copacabana Beach, and Guanabara Bay — is absolutely stunning. The statue itself is awe-inspiring up close, especially under the morning light or evening sunset. Whether you visit for spiritual reflection, photography, or sheer admiration, Christ the Redeemer offers an unforgettable experience. It’s a place where nature, art, and faith `,



    "argentina":`Overview:
Iguazu Falls is one of the largest and most breathtaking waterfall systems in the world, straddling the border between Brazil and Argentina. With over 270 individual falls spread across nearly 3 kilometers, it creates a thunderous, awe-inspiring display of nature’s raw power and beauty. Surrounded by lush rainforest, the falls are part of two national parks that are UNESCO World Heritage Sites. The name "Iguazu" means "big water" in the indigenous Guarani language — a perfect description for this natural wonder. Its grand scale and misty rainbows make it a must-visit for adventure seekers and nature lovers alike.

Experience:
Whether you visit from the Brazilian side for wide panoramic views or the Argentinian side for closer walkways, Iguazu Falls delivers unforgettable moments. Highlights include the Devil’s Throat, a dramatic U-shaped cascade that roars with force, and boat rides that take you right under the crashing water. Wildlife like toucans, butterflies, and coatis add to the magical experience. Elevated trails, eco-friendly trains, and observation decks make it accessible while preserving the environment. `,



    "peru":`Overview:
Machu Picchu, perched high in the Andes Mountains of Peru, is a breathtaking relic of the Inca Empire. Built in the 15th century and hidden from the world until its rediscovery in 1911, this ancient city remains a symbol of mystery and wonder. Surrounded by cloud forests and steep peaks, Machu Picchu's stone structures showcase the incredible architecture and astronomical knowledge of the Incas. Temples, terraces, and plazas are carefully designed to align with the stars and natural landscape, making it not just a historic site, but also a spiritual masterpiece that connects deeply with nature.

Experience:
Whether you reach it via the iconic Inca Trail or take a scenic train ride, arriving at Machu Picchu is an unforgettable experience. Watching the sunrise over the ruins from the Sun Gate is truly magical. The serene ambiance, breathtaking views, and preserved beauty create a sense of stepping back in time. Guided tours bring ancient stories to life, while solo walks let you absorb the peaceful energy. It’s a place that blends adventure, history, and cultural depth — perfect for travelers seeking meaning and wonder. Machu Picchu isn’t just a destination; it’s a journey of discovery.`,



    "colombia":`Overview:
The Caribbean Coast of Colombia is a vibrant and culturally rich region known for its stunning beaches, colonial cities, and rhythmic energy. Stretching along the northern coastline, it includes gems like Cartagena, Santa Marta, and Tayrona National Park. With turquoise waters, white-sand beaches, and colorful streets filled with music and history, this region perfectly blends nature and culture. The area is deeply influenced by African, Indigenous, and Spanish heritage, reflected in its music, food, and architecture. Whether you're exploring coral reefs or dancing to cumbia, Colombia's Caribbean Coast is where adventure meets soul.

Experience:
Start your journey in Cartagena, a UNESCO-listed walled city bursting with charm, then relax on the nearby Rosario Islands. Hike through the jungle trails of Tayrona Park to discover hidden beaches and indigenous culture. Santa Marta offers coastal beauty with mountain backdrops, while Palomino and Riohacha are perfect for off-the-beaten-path experiences. Taste local specialties like coconut rice and fried fish, and enjoy the infectious rhythm of vallenato and champeta.`,



    "US":`Overview:
The Golden Gate Bridge is one of the most iconic landmarks in the United States, connecting San Francisco to Marin County in California. Opened in 1937, it was once the longest suspension bridge in the world, spanning 1.7 miles across the Golden Gate Strait. Its signature International Orange color and Art Deco design make it instantly recognizable. The bridge stands tall with towers reaching 746 feet high, offering stunning views of the bay, the Pacific Ocean, and the city skyline. It's not just an engineering marvel — it's a symbol of American innovation and beauty.

Experience:
Walking or biking across the Golden Gate Bridge is a must-do experience, offering breathtaking panoramic views in every direction. On foggy days, the bridge looks almost magical as it disappears into the mist. Visitors can also enjoy nearby attractions like the Golden Gate Park, Crissy Field, and the historic Fort Point below the bridge. The Welcome Center offers exhibits and souvenirs for those wanting to learn more. Whether you're catching a sunrise, sunset, or just the cool breeze off the bay, the Golden Gate Bridge promises an unforgettable moment for every traveler.`,



    "mexico":`Overview:
El Castillo, also known as the Temple of Kukulcán, is the iconic pyramid at the heart of the ancient Mayan city of Chichén Itzá in Mexico's Yucatán Peninsula. This step pyramid stands as a testament to the astronomical and architectural brilliance of the Maya civilization. Each of its four sides has 91 steps, totaling 365 including the top platform — matching the number of days in a year. The pyramid aligns perfectly with the sun during the equinoxes, casting a shadow that resembles a serpent slithering down its side, symbolizing the feathered serpent god Kukulcán.

Experience:
Visiting El Castillo is a journey through time and mysticism. Surrounded by other fascinating ruins like the Great Ball Court and the Temple of the Warriors, the site is a UNESCO World Heritage treasure. Guided tours reveal the science, mythology, and rituals behind the structure. The pyramid cannot be climbed today, preserving its integrity, but standing before it is awe-inspiring. As one of the New Seven Wonders of the World, El Castillo draws visitors from around the globe to witness its grandeur and spiritual legacy.`,



    "canada":`Overview:
Fairmont Le Château Frontenac is a grand, castle-like hotel perched above Old Québec City, overlooking the Saint Lawrence River. Built in 1893, it’s one of the most photographed hotels in the world and a National Historic Site of Canada. Its dramatic turrets, copper roofs, and elegant architecture reflect the charm of a bygone era. Blending French château-style design with luxury, this iconic landmark captures the heart of Québec’s history and culture. Whether blanketed in snow or lit up at night, the Château Frontenac.

Experience:
Staying at or simply visiting Château Frontenac is like stepping into a fairy tale. The interior is as luxurious as its exterior, with ornate décor, fine dining restaurants, and historical exhibits. You can stroll through the nearby Dufferin Terrace, enjoy stunning river views, or explore the cobblestone streets of Old Québec. Guided tours offer insights into the hotel’s past, including its role in global wartime conferences. Whether you're sipping coffee inside its elegant lounge or taking photos from outside, this château offers a magical experience for history lovers and travelers seeking a regal getaway.`,



    "cuba":`Overview:
The National Capitol of Cuba, or El Capitolio, is a majestic building located in the heart of Havana. Completed in 1929, it was inspired by the U.S. Capitol in Washington, D.C., but with unique Cuban flair and grandeur. Its massive dome towers over the city skyline, and its ornate neoclassical architecture is a striking symbol of Cuban history and power. Originally built as the seat of government, it now houses the Cuban Academy of Sciences and the National Assembly. The Capitol is a cultural and historical gem that reflects Havana’s architectural richness and political legacy.

Experience:
Visitors are drawn to El Capitolio for its impressive facade and lavish interior, which features grand staircases, marble columns, and detailed mosaics. Inside, you can see the Statue of the Republic — one of the largest indoor statues in the world. Guided tours provide deep insight into Cuba’s political history and artistic craftsmanship. Outside, the area buzzes with classic cars and colonial buildings, giving a perfect blend of old-world charm. Whether you're admiring it by day or illuminated at night`,



    "southAfrica":`Overview:
Camps Bay is a stunning coastal suburb of Cape Town, South Africa, known for its pristine white sand beaches and dramatic backdrop of the Twelve Apostles mountain range. Located just a short drive from the city center, this upscale neighborhood blends natural beauty with modern luxury. Palm-lined streets, trendy cafes, and elegant seaside villas make it one of the most sought-after spots in Cape Town. Whether you're basking in the sun, watching the waves roll in, or taking in a glorious sunset, Camps Bay offers a perfect mix of relaxation and scenic charm.

Experience:
Visitors to Camps Bay can enjoy sun-soaked beach days, dine at stylish restaurants overlooking the ocean, or explore the nearby mountain trails for panoramic views. The vibrant promenade comes alive at sunset, with street performers, cocktail bars, and open-air dining. Just minutes away from Table Mountain and Lion’s Head, it's a perfect base for adventure and exploration. The beach itself is ideal for swimming, sunbathing, and even surfing. Whether you're visiting for leisure, romance, or photography`,



    "tanzania":`Overview:
Unguja, the largest island of the Zanzibar Archipelago, is often simply referred to as Zanzibar Island. Located off the coast of Tanzania, it’s a tropical paradise rich in history, culture, and natural beauty. The island boasts powdery white beaches, turquoise waters, and lush spice plantations. Its capital, Stone Town, is a UNESCO World Heritage Site, filled with winding alleys, ancient doors, and vibrant markets. A blend of African, Arab, Indian, and European influences gives Unguja a unique charm, making it a dream destination for beach lovers and cultural explorers alike.

Experience:
From snorkeling in coral reefs to sailing on a traditional dhow at sunset, Unguja offers unforgettable experiences. Tour spice farms to learn about cloves, nutmeg, and cinnamon, or wander through the historical lanes of Stone Town. Visit the Jozani Forest to spot rare red colobus monkeys or simply relax on Nungwi and Kendwa beaches. The island's warm hospitality and laid-back vibe make it perfect for both adventure and relaxation.

`,



    "egypt":`Overview:
The Pyramid of Giza, also known as the Great Pyramid, stands as the oldest and only surviving wonder of the Seven Wonders of the Ancient World. Located on the Giza Plateau near Cairo, Egypt, it was built over 4,500 years ago during the reign of Pharaoh Khufu. This monumental structure is an incredible feat of ancient engineering, constructed from over 2 million limestone blocks. Rising to a height of 146 meters (originally), the pyramid continues to captivate travelers and historians alike with its precision, mystery, and enduring grandeur.

Experience:
Visiting the Pyramid of Giza is like stepping back in time to the heart of ancient Egypt. Explore the vast desert complex, walk among towering pyramids, and marvel at the nearby Great Sphinx. You can even enter the pyramid’s interior chambers for a closer look at its fascinating construction. Camel rides and panoramic views of the plateau add to the adventure. As the sun sets behind the stone structures, the site becomes even more breathtaking. Whether you're drawn by its history, mystery, or sheer size, the Great Pyramid offers an unforgettable experience unlike any other.`,



    "morocco":`Overview:
The Hassan II Mosque, located in Casablanca, Morocco, is one of the most magnificent mosques in the world. Completed in 1993, it sits partially over the Atlantic Ocean, offering a breathtaking fusion of spiritual grandeur and coastal beauty. Its minaret is the tallest in the world, soaring 210 meters high. The mosque can accommodate over 100,000 worshippers, with intricate Moroccan craftsmanship seen in every detail — from the hand-carved marble to the stunning mosaics. With its blend of tradition and modern design, the Hassan II Mosque stands as a symbol of Morocco’s faith, culture, and architectural excellence.

Experience:
Open to both Muslims and non-Muslim visitors, the mosque offers guided tours that showcase its rich details and spiritual atmosphere. Walking through the vast prayer hall beneath a retractable roof, or standing beside the glass floor panels revealing the sea below, is a surreal experience. The mosque is especially stunning at sunset, when the golden light reflects off its marble floors and ocean backdrop. Surrounded by the sounds of waves and the calls to prayer, a visit here is both peaceful and awe-inspiring.`,



    "a1":`Overview:
Lady Musgrave Island is a hidden gem nestled within the southern reaches of the Great Barrier Reef in Queensland, Australia. This coral cay is surrounded by a crystal-clear lagoon teeming with vibrant marine life, making it a dream destination for nature lovers and ocean explorers. The island itself is uninhabited and rich in birdlife, offering a pristine escape from the modern world. With its turquoise waters, white sand beaches, and untouched reef systems, Lady Musgrave Island promises an authentic and tranquil experience right at the heart.

Experience:
Whether you're snorkeling with sea turtles, diving among colorful corals, or walking along its untouched shores, Lady Musgrave Island delivers unforgettable moments. The lagoon provides safe and shallow waters perfect for first-time snorkelers and families. Guided eco-tours reveal the island's biodiversity, from nesting birds to underwater gardens. Day trips from the mainland include glass-bottom boat rides, reef education, and chances to spot dolphins and manta rays. With its rare combination of adventure and serenity.`,



    "a2":`Overview:
Uluru, also known as Ayers Rock, is a massive sandstone monolith rising majestically from the red desert landscape of Australia’s Northern Territory. Located in Uluru-Kata Tjuta National Park, this sacred site holds deep cultural and spiritual significance for the Anangu people, the traditional custodians of the land. Changing color with the light — from rich red at sunrise to deep orange at sunset — Uluru is both visually stunning and spiritually powerful. Recognized as a UNESCO World Heritage Site, it is one of Australia’s most iconic natural landmarks and a must-visit for those seeking connection with the land’s ancient spirit.

Experience:
Visitors can take guided walks around the base, learning about Aboriginal stories, rock art, and native flora and fauna. Climbing Uluru is respectfully discouraged, but walking trails and cultural centers offer deep insight into its meaning and ecology. The nearby Field of Light installation adds a magical glow to the desert night. Whether you're watching the sun paint Uluru in vibrant hues or listening to Dreamtime stories passed down for generations, the experience is immersive and unforgettable.`,



    "a3":`Overview:
The Sydney Opera House is one of the most iconic and recognizable landmarks in the world, located on the shimmering Sydney Harbour in Australia. Designed by Danish architect Jørn Utzon, its sail-like roof structure is a masterpiece of 20th-century architecture. Opened in 1973, the Opera House is a symbol of creativity and innovation, representing Australia’s cultural heart. It’s not just a performance venue — it’s a work of art that has become a UNESCO World Heritage Site and a must-see destination for anyone visiting Sydney.

Experience:
Visitors can take guided tours through its stunning interiors, learning about its design, history, and performances. With multiple venues inside, it hosts over 1,500 events annually, from opera and ballet to contemporary music and theater. The Opera House’s location offers incredible views of the Sydney Harbour Bridge, especially at sunset or during the nightly light shows. Whether you're catching a show, enjoying a waterfront meal at the nearby restaurants, or simply admiring its beauty from the outside, the Sydney Opera House offers a rich and unforgettable cultural experience in the heart of the city.`,



    "a4":`Overview:
Pinnacles Lookout is a breathtaking viewpoint located within the Cape Woolamai area on Phillip Island, Victoria, Australia. Known for its dramatic coastal cliffs and unique rock formations rising from the sea, the lookout offers panoramic views of the rugged Bass Strait coastline. The site is particularly famous for its jagged granite spires known as the Pinnacles, which glow with warm colors during sunset. Surrounded by pristine beaches and coastal trails, this spot combines natural wonder with peaceful seclusion, making it a favorite for hikers, photographers, and nature lovers seeking a memorable escape.

Experience:
The walk to Pinnacles Lookout is part of the Cape Woolamai Trail, a scenic hike featuring diverse landscapes, from sandy beaches to heathlands rich in wildlife. Along the way, you might spot wallabies, seabirds, or even whales offshore during migration season. Once at the lookout, the views are awe-inspiring — perfect for quiet reflection or capturing stunning shots of Australia’s southern coastline. The best time to visit is during golden hour when the rock formations come alive with color.`,



  }
  function HandleCondition()
  {
    if (email==email2 && Password == Password2){
      SetMainPage(true);
    }
    else{
      Alert.alert("Invalid credentials entered")}
  }

  function HandleSubmit()
  {
      if (email.length === 0 || name.length === 0 || Password.length === 0){
          Alert.alert("Enter all Credentials")}
      else{
          SetSubmit(true)
      }
  }

  function HandleSearch(val)
  {
    const LowerVal = val.toLowerCase();
    if(LowerVal == "Asia")
    {
      SetB1(true),SetB2(false),SetB3(false),SetB4(false),SetB5(false),SetB6(false);
    }
    if(LowerVal == "europe")
    {
      SetB1(false),SetB2(true),SetB3(false),SetB4(false),SetB5(false),SetB6(false);
    }
    if(LowerVal == "south america")
    {
      SetB1(false),SetB2(false),SetB3(true),SetB4(false),SetB5(false),SetB6(false);
    }
    if(LowerVal == "north america")
    {
      SetB1(false),SetB2(false),SetB3(false),SetB4(true),SetB5(false),SetB6(false);
    }
    if(LowerVal == "africa")
    {
      SetB1(false),SetB2(false),SetB3(false),SetB4(false),SetB5(true),SetB6(false);
    }
    if(LowerVal == "australia")
    {
      SetB1(false),SetB2(false),SetB3(false),SetB4(false),SetB5(false),SetB6(true);
    }
}

function HandleStatus()
{
  SetOnOff(prev => !prev)
}

function GetLikedPlaces()
{
  const liked = [];

  Object.entries(LikesMemory).forEach(([continent, countries]) => {
    Object.entries(countries).forEach(([country, isLiked]) => {
      if (isLiked) {
        liked.push({ continent, country });
      }
    });
  });

  return liked;
};
const likedPlaces = GetLikedPlaces();


useEffect(() => {
  if (mainPage) {
    SetHome(true);
  }
}, [mainPage]);

function toggleLike(continent, place) {
  SetLikesMemory(prev => ({
    ...prev,
    [continent]: {
      ...prev[continent],
      [place]: !prev[continent][place]
    }
  }));

}
  return (
    <>
    <KeyboardAvoidingView style={styles.container}>
          <View style={styles.signIn}>
            <View style={{width:"100%"}}>
            <Text style={{fontSize:20,marginTop:20,fontFamily:"sans-serif",color:"black",fontWeight:"bold",textAlign:"left",paddingLeft:40}}>Sign In</Text>
            </View>
            <TextInput style={styles.signInInput} placeholder='Name'  onChangeText={(n)=>SetName(n)}/>
            <TextInput  style={styles.signInInput} placeholder='Email'  onChangeText={(e)=>SetEmail(e)} keyboardType='email-address'/>
            <TextInput style={styles.signInInput}  placeholder='Password'  onChangeText={(p)=>SetPassword(p)} secureTextEntry={true} />
            <TouchableOpacity onPress={HandleSubmit}>
              <Text style={styles.loginButton}><Text style={{fontSize:20,color:"white"}}>Sign in</Text></Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signInImageContainer} >
          <Image source={require('./images/intro-removebg.png')} style={styles.signInImage} resizeMode="contain"/>
          </View>
    </KeyboardAvoidingView>

            {/* Modal code  */}

          <Modal visible={submit}>
            <View style={styles.container}>
            
              <View style={styles.login}>
                <TouchableOpacity onPress={()=>SetSubmit(false)}>
                      <Image source={require('./images/back.png')} style={styles.backSymbol}/>
                </TouchableOpacity>
                <View style={{alignItems:"center"}}>
                  <Image source={require('./images/done.png')} style={{width:120,height:120,margin:50}}/>
                </View>
                <View style={{alignItems:"center"}}>
                  <Text style={{fontSize:20,fontFamily:"sans-serif",color:"black",fontWeight:"bold"}}>You are Successfully registered!</Text>
                    <TouchableOpacity style={{marginTop:20}} onPress={() => SetLogin(true)}>
                        <Text style={{fontSize:20,color:"#0096FF"}}>Login</Text>
                    </TouchableOpacity>
                </View>
                
                
              </View>
              <View>
                  <Image source={require('./images/places.png')} style={[styles.signInImage]} resizeMode="contain"/>
              </View>
            </View>
          </Modal>


          {/* Login Modal */}
          <Modal visible={login}>
            <KeyboardAvoidingView style={styles.container}>
              <View style={styles.loginVerification}>
              <TouchableOpacity onPress={()=>SetLogin(false)} style={{flexDirection:"row"}}>
                      <Image source={require('./images/back.png')} style={styles.backSymbol}/>
                      <Text style={{fontSize:20 , fontWeight:"bold" ,color:"black",marginLeft:5}}>Login</Text>
                </TouchableOpacity>
                <View style={{alignItems:"center"}}>
                <Text style={{marginLeft:25 ,margin:"auto",marginTop:5}}>Email</Text>
                <TextInput style={styles.signInInput} placeholder='Enter Email' onChangeText={(e2)=>SetEmail2(e2)}/>
                <Text style={{marginLeft:20 ,margin:"auto"}}>Password</Text>
                <TextInput style={styles.signInInput} placeholder='Enter Password' secureTextEntry={true} onChangeText={(p2)=>SetPassword2(p2)}/>
                <TouchableOpacity onPress={HandleCondition}>
              <Text style={styles.loginButton}><Text style={{fontSize:20,color:"white"}}>Login in</Text></Text>
            </TouchableOpacity>
                </View>
            </View>
            <View style={{alignItems:"center",flex:0.4}} >
                <Image source={require('./images/building.png')} style={styles.LoginImage}  resizeMode="contain"/>
            </View>
          </KeyboardAvoidingView>            
          </Modal>


          {/* mainPage */}
          {/* mainpage modal 1 */}
          <Modal visible={mainPage} >
            <KeyboardAvoidingView style={{backgroundColor:OnOff?"#1E1E1E":"#f8f8f8",flex:1}}> 
            <View style={styles.MainPageContainer}>
              <View style={{flexDirection:"row"}}>
                <View>
                <Text style={{fontSize:25,fontWeight:"bold",color:OnOff?"white":"black"}}>Hello, {name}</Text>
                <Text style={{fontSize:15,color:OnOff?"white":"gray"}}>Welcome to Travelz</Text>
                </View>
                <View style={{borderRadius:100,width:60,height:60,marginLeft:"auto",}}><Image style={{width:60,height:60}} source={require("./images/user.png")}/></View>
              </View>


              <View style={[styles.searchBar,{backgroundColor:OnOff?"#2C2C2C":"white" ,borderWidth:1,borderStyle:"solid",borderColor:OnOff?"black":"white"}]}>
                <Image source={OnOff?require("./images/searchW.png"):require("./images/search.png")} style={{width:40,height:40,marginTop:3,marginLeft:5}}/>
                <TextInput style={{fontSize:20,height:50,marginLeft:10,width:300,color:OnOff?"#FFFFFF":""}} placeholder='Search' placeholderTextColor={OnOff?"#888888":""} onSubmitEditing={(e)=>HandleSearch(e.nativeEvent.text)}></TextInput>
              </View>
              <Text style={{marginVertical:20,fontSize:20,color:OnOff?"white":"black",fontWeight:"bold"}}>Select your next trip</Text>

              {/* list of places */}
              {/* Asia */}
            <View style={{height:50}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity onPress={() =>{ SetB1(true),SetB2(false),SetB3(false),SetB4(false),SetB5(false),SetB6(false)}} activeOpacity={1}>
                <View style={{marginRight:15}} >
                  <View style={[styles.listOfPlace , {backgroundColor:b1?"black":OnOff?"#2C2C2C":"white",borderWidth:1,borderStyle:"solid",borderColor:OnOff?"black":"white"}]}><Text style={[styles.listText ,{color:b1?"white":OnOff?"#888888":"black"} ]}>Asia</Text></View>
                </View>
                </TouchableOpacity>
                
                {/* Europe  */}
                <TouchableOpacity onPress={() =>{ SetB1(false),SetB2(true),SetB3(false),SetB4(false),SetB5(false),SetB6(false)}} activeOpacity={1}>
                <View style={{marginRight:15}} >
                  <View style={[styles.listOfPlace ,{backgroundColor:b2?"black":OnOff?"#2C2C2C":"white",borderWidth:1,borderStyle:"solid",borderColor:OnOff?"black":"white"}]}><Text style={[styles.listText ,{color:b2?"white":OnOff?"#888888":"black"} ]}>Europe</Text></View>
                </View>
                </TouchableOpacity>

                {/*  South America */}
                <TouchableOpacity onPress={() =>{ SetB1(false),SetB2(false),SetB3(true),SetB4(false),SetB5(false),SetB6(false)}} activeOpacity={1}>
                <View style={{marginRight:15}} >
                  <View style={[styles.listOfPlace ,{backgroundColor:b3?"black":OnOff?"#2C2C2C":"white",borderWidth:1,borderStyle:"solid",borderColor:OnOff?"black":"white"}]}><Text style={[styles.listText ,{color:b3?"white":OnOff?"#888888":"black"} ]}>South America</Text></View>
                </View>
                </TouchableOpacity>

                {/* North America */}
                <TouchableOpacity onPress={() =>{ SetB1(false),SetB2(false),SetB3(false),SetB4(true),SetB5(false),SetB6(false)}} activeOpacity={1}>
                <View style={{marginRight:15}} >
                  <View style={[styles.listOfPlace , {backgroundColor:b4?"black":OnOff?"#2C2C2C":"white",borderWidth:1,borderStyle:"solid",borderColor:OnOff?"black":"white"}]}><Text style={[styles.listText ,{color:b4?"white":OnOff?"#888888":"black"} ]}>North America</Text></View>
                </View>
                </TouchableOpacity>

                {/* Africa */}
                <TouchableOpacity onPress={() =>{ SetB1(false),SetB2(false),SetB3(false),SetB4(false),SetB5(true),SetB6(false)}} activeOpacity={1}>
                <View style={{marginRight:15}} >
                  <View style={[styles.listOfPlace ,{backgroundColor:b5?"black":OnOff?"#2C2C2C":"white",borderWidth:1,borderStyle:"solid",borderColor:OnOff?"black":"white"}]}><Text style={[styles.listText ,{color:b5?"white":OnOff?"#888888":"black"} ]}>Africa</Text></View>
                </View>
                </TouchableOpacity>

                {/* Australia */}
                <TouchableOpacity onPress={() =>{ SetB1(false),SetB2(false),SetB3(false),SetB4(false),SetB5(false),SetB6(true)}} activeOpacity={1}>
                <View style={{marginRight:15}} >
                  <View style={[styles.listOfPlace , {backgroundColor:b6?"black":OnOff?"#2C2C2C":"white",borderWidth:1,borderStyle:"solid",borderColor:OnOff?"black":"white"}]}><Text style={[styles.listText ,{color:b6?"white":OnOff?"#888888":"black"} ]}>Australia</Text></View>
                </View>
                </TouchableOpacity>
                        
              </ScrollView>
            </View>

              {/* cards */}

                {
                b1 &&
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Cards isDarkMode={OnOff} url={require("./images/japan1.jpg")} country={"Japan"} about={"Mount Fuji"} isLiked={LikesMemory.Asia.japan} toggleLike={()=> toggleLike("Asia","japan")} detail={details.japan}/>
                        <Cards isDarkMode={OnOff} url={require("./images/bali.jpg")}   country={"Indonesia"} isLiked={LikesMemory.Asia.indonesia} toggleLike={()=> toggleLike("Asia","indonesia")}  about={"Bali"} detail={details.bali}/>
                        <Cards isDarkMode={OnOff} url={require("./images/india.jpg")}  country={"India"} isLiked={LikesMemory.Asia.india} toggleLike={()=> toggleLike("Asia","india")} about={"Taj Mahal"} detail={details.india}/>
                        <Cards isDarkMode={OnOff} url={require("./images/russia.jpeg")}country={"Russia"}about={"The Moscow Kremlin"} detail={details.russia} isLiked={LikesMemory.Asia.russia} toggleLike={()=>toggleLike("Asia","russia")}/>
                </ScrollView>
                }

                {
                b2 &&
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Cards isDarkMode={OnOff}  url={require("./images/spain.jpg")}    country={"Spain"}  isLiked={LikesMemory.Europe.spain} toggleLike={()=> toggleLike("Europe","spain")}        about={"Murallas de Tossa de Mar"} detail={details.spain}/>
                        <Cards isDarkMode={OnOff}  url={require("./images/germany.jpeg")} country={"Germany"}  isLiked={LikesMemory.Europe.germany} toggleLike={()=> toggleLike("Europe","germany")}      about={"Rothenburg ob der Tauber"} detail={details.germany}/>
                        <Cards isDarkMode={OnOff}  url={require("./images/uk.jpg")}       country={"United Kingdom"} isLiked={LikesMemory.Europe.UK} toggleLike={()=> toggleLike("Europe","UK")} about={"Big Ben"} detail={details.UK}/>
                        <Cards isDarkMode={OnOff}  url={require("./images/france.jpg")}   country={"France"}  isLiked={LikesMemory.Europe.france} toggleLike={()=> toggleLike("Europe","france")}       about={"Eiffel Tower"} detail={details.france}/>
                </ScrollView>
                }

                {
                b3 &&
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Cards isDarkMode={OnOff}  url={require("./images/brazil.jpg")}  isLiked={LikesMemory.southAmerica.Brazil} toggleLike={()=> toggleLike("southAmerica","Brazil")}  country={"Brazil"}   about={"Christ the Redeemer"} detail={details.brazil}/>
                        <Cards isDarkMode={OnOff}  url={require("./images/argentina.jpg")} country={"Argentina"} isLiked={LikesMemory.southAmerica.argentina} toggleLike={()=> toggleLike("southAmerica","argentina")} about={"Iguazu Falls"} detail={details.argentina}/>
                        <Cards isDarkMode={OnOff}  url={require("./images/peru.jpeg")}     country={"Peru"}  isLiked={LikesMemory.southAmerica.peru} toggleLike={()=> toggleLike("southAmerica","peru")}   about={"Historic Sanctuary of Machu Picchu"} detail={details.peru}/>
                        <Cards isDarkMode={OnOff}  url={require("./images/colombia.jpg")}  country={"Colombia"} isLiked={LikesMemory.southAmerica.colombia} toggleLike={()=> toggleLike("southAmerica","colombia")} about={"The Caribbean Coast Region"} detail={details.colombia}/>
                </ScrollView>
                }

                {
                b4 &&
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Cards isDarkMode={OnOff}  url={require("./images/us.webp")}    country={"United States"} isLiked={LikesMemory.northAmerica.US} toggleLike={()=> toggleLike("northAmerica","US")} about={"Golden Gate Bridge"} detail={details.US}/>
                        <Cards isDarkMode={OnOff}  url={require("./images/mexico.jpg")} country={"Mexico"}  isLiked={LikesMemory.northAmerica.mexico} toggleLike={()=> toggleLike("northAmerica","mexico")}      about={"El Castillo"} detail={details.mexico}/>
                        <Cards isDarkMode={OnOff}  url={require("./images/canada.webp")}country={"Canada"} isLiked={LikesMemory.northAmerica.canada} toggleLike={()=> toggleLike("northAmerica","canada")}       about={"Fairmont Le Château Frontenac"} detail={details.canada}/>
                        <Cards isDarkMode={OnOff}  url={require("./images/cuba.jpg")}   country={"Cuba"}    isLiked={LikesMemory.northAmerica.cuba} toggleLike={()=> toggleLike("northAmerica","cuba")}      about={"National Capitol of Cuba"} detail={details.cuba}/>
                </ScrollView>
                }

                {
                b5 &&
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Cards isDarkMode={OnOff}  url={require("./images/southAfrica.jpg")} country={"South Africa"} isLiked={LikesMemory.africa.southAfrica} toggleLike={()=> toggleLike("africa","southAfrica")} about={"Camps Bay"}  detail={details.southAfrica}/>
                        <Cards isDarkMode={OnOff}  url={require("./images/tanzania.jpg")}    country={"Tanzania"} isLiked={LikesMemory.africa.tanzania} toggleLike={()=> toggleLike("africa","tanzania")}    about={"The island of Unguja"} detail={details.tanzania}/>
                        <Cards isDarkMode={OnOff}  url={require("./images/egpt.jpg")}   isLiked={LikesMemory.africa.egypt} toggleLike={()=> toggleLike("africa","egypt")}     country={"Egypt of Giza"}about={"Pyramid"} detail={details.egypt}/>
                        <Cards isDarkMode={OnOff}  url={require("./images/morocco.jpg")}     country={"Morocco"}  isLiked={LikesMemory.africa.morocco} toggleLike={()=> toggleLike("africa","morocco")}    about={"Hassan II Mosque"} detail={details.morocco}/>
                </ScrollView>
                }

                {
                b6 &&
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Cards isDarkMode={OnOff}  url={require("./images/aus1.jpg")} country={"Australia"} isLiked={LikesMemory.australia.a1} toggleLike={()=> toggleLike("australia","a1")} about={"Lady Musgrave Island"} detail={details.a1}/>
                        <Cards isDarkMode={OnOff}  url={require("./images/aus2.jpg")} country={"Australia"} isLiked={LikesMemory.australia.a2} toggleLike={()=> toggleLike("australia","a2")} about={"Uluru"} detail={details.a2}/>
                        <Cards isDarkMode={OnOff}  url={require("./images/aus3.jpg")} country={"Australia"} isLiked={LikesMemory.australia.a3} toggleLike={()=> toggleLike("australia","a3")} about={"Sydney Opera House"} detail={details.a3}/>
                        <Cards isDarkMode={OnOff}  url={require("./images/aus4.jpg")} country={"Australia"} isLiked={LikesMemory.australia.a4} toggleLike={()=> toggleLike("australia","a4")} about={"Pinnacles Lookout"} detail={details.a4}/>
                </ScrollView>
                }
            </View>
            <View style={{height:height*0.1,width:width*0.9,marginHorizontal:"5%",marginBottom:"2%",backgroundColor:"black",borderRadius:100,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>

              <TouchableOpacity activeOpacity={1} onPress={()=>{SetHome(true),SetLike(false),SetBooking(false),SetSettings(false)}} >
                <View style={[styles.bottomButtons,{backgroundColor:home?"white":"black"}]}>
                  <Image source={home?require("./images/home1.png"):require("./images/home2.png")} style={{width:30,height:30}}/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={()=>{SetHome(false),SetLike(true),SetBooking(false),SetSettings(false)}} >
                <View style={[styles.bottomButtons,{backgroundColor:like?"white":"black"}]}>
                  <Image source={like?require("./images/heartEmpty2.png"):require("./images/heartEmpty.png")} style={{width:30,height:30}}/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={()=>{SetHome(false),SetLike(false),SetBooking(true),SetSettings(false)}} >
                <View style={[styles.bottomButtons,{backgroundColor:booking?"white":"black"}]}>
                  <Image source={booking?require("./images/notes1.png"):require("./images/notes2.png")} style={{width:30,height:30}}/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={()=>{SetHome(false),SetLike(false),SetBooking(false),SetSettings(true)}} >
                <View style={[styles.bottomButtons,{backgroundColor:settings?"white":"black"}]}>
                  <Image source={settings?require("./images/profile1.png"):require("./images/profile2.png")} style={{width:30,height:30}}/>
                </View>
              </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
          </Modal>

          <Modal visible={settings}>
            <KeyboardAvoidingView style={{flex:1, backgroundColor:OnOff?'#1E1E1E':"white"}}>
            <View style={{flex:1}}>
                  <View style={{height:50,backgroundColor:OnOff?'#1E1E1E':"white",paddingLeft:10,justifyContent:'center'}}>
                        <Text style={{fontSize:20,color:OnOff?'white':'#1E1E1E',fontWeight:"bold"}}>Profile</Text>
                  </View>
                  <View style={{backgroundColor:OnOff?'#1E1E1E':"white",height:180,justifyContent:"center",alignItems:"center"}}>
                    <Image style={{width:150,height:150}} source={require("./images/user.png")}/>
                    <Text style={{color:OnOff?"white":"black",fontSize:23,fontWeight:"condensed"}}>{name}</Text>
                  </View>
                  <View style={{margin:10,backgroundColor:OnOff?'#1E1E1E':"white"}}>
                    <Text style={{fontSize:25,color:OnOff?"white":"black",fontWeight:"bold"}}>Settings</Text>
                    <View style={{ marginVertical: 10, justifyContent: "center", }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                          <Text style={{ fontSize: 15, color:OnOff?"white":"gray",fontWeight:"bold"}}>Dark Mode</Text>
                          <Switch value={OnOff} onValueChange={HandleStatus} />
                        </View>
                  </View>
                        <View style={{marginTop:20}}>
                        <TouchableOpacity onPress={()=>{SetHome(false),SetMainPage(false),SetLogin(false),SetSubmit(false),SetSettings(false)}}>
                          <Text style={{fontSize: 15, color:"red",fontWeight:"bold"}}>Sign Out</Text>
                        </TouchableOpacity>
                        </View>
                    </View>

              
              {/* button code swipe below */}
            </View>
            <View>
              <View style={{height:height*0.1,width:width*0.9,marginHorizontal:"5%",marginBottom:"2%",backgroundColor:"black",borderRadius:100,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                  <TouchableOpacity activeOpacity={1} onPress={()=>{SetHome(true),SetLike(false),SetBooking(false),SetSettings(false)}} >
                    <View style={[styles.bottomButtons,{backgroundColor:home?"white":"black"}]}>
                      <Image source={home?require("./images/home1.png"):require("./images/home2.png")} style={{width:30,height:30}}/>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={()=>{SetHome(false),SetLike(true),SetBooking(false),SetSettings(false)}} >
                    <View style={[styles.bottomButtons,{backgroundColor:like?"white":"black"}]}>
                      <Image source={like?require("./images/heartEmpty2.png"):require("./images/heartEmpty.png")} style={{width:30,height:30}}/>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={()=>{SetHome(false),SetLike(false),SetBooking(true),SetSettings(false)}} >
                    <View style={[styles.bottomButtons,{backgroundColor:booking?"white":"black"}]}>
                      <Image source={booking?require("./images/notes1.png"):require("./images/notes2.png")} style={{width:30,height:30}}/>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={()=>{SetHome(false),SetLike(false),SetBooking(false),SetSettings(true)}} >
                    <View style={[styles.bottomButtons,{backgroundColor:settings?"white":"black"}]}>
                      <Image source={settings?require("./images/profile1.png"):require("./images/profile2.png")} style={{width:30,height:30}}/>
                    </View>
                  </TouchableOpacity>
              </View>
            </View>
            </KeyboardAvoidingView>
          </Modal>

          {/* liked places Modal */}
    <Modal visible={like}>
      <KeyboardAvoidingView style={{flex:1,backgroundColor:OnOff?"#1E1E1E":"#f8f8f8"}}>
      <View style={{flex:1}}>
          <View style={{height:60,justifyContent:"center"}}>
              <Text style={{paddingLeft:"2%",fontSize:20,fontWeight:"bold",color:OnOff?"white":"black"}}>💖 My Travel Picks</Text>
          </View>
          <View style={{flex:1,backgroundColor:OnOff?"#2C2C2C":"white",elevation:20,borderBottomRightRadius:70,borderTopLeftRadius:70,overflow: 'hidden'}}>
              <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical:70,marginHorizontal:10,}}>
                {likedPlaces.length===0 ?
                (<View style={{width:width,justifyContent:"center",alignItems:"center"}}>
                  <Image style={{width:50,height:50,marginBottom:10}} source={OnOff?require("./images/no-resultsW.png"):require("./images/no-results.png")}/>
                  <Text style={{color:OnOff?"white":"black",fontSize:20,fontWeight:"condensed"}}>No Places Selected</Text>
                </View>
                )
                :(
                likedPlaces.map((names , index) => (
                  <View key={index} style={{justifyContent:"center"}}>
                    {Link[names.country]?
                    <View style={{    marginRight: 20,height: height * 0.60,width: width * 0.85,overflow: "hidden",borderRadius: 30,}}>
                        <ImageBackground style={{height:height*.60}} source={Link[names.country]}>
                            <Text style={{marginLeft:20,marginTop:"130%",color:"white",fontSize:20,fontWeight:"bold", textShadowColor: "#f8f8f8",textShadowOffset: { width: 1, height: 1 },textShadowRadius: 2,}}>{names.country}</Text>
                        </ImageBackground>
                    </View>:<Text>Unexpected Error from Link json Mame</Text>}
                    
                  </View>
                  
                ))
                )}
              </ScrollView>
          </View>
          
      </View>
      <View style={{height:height*0.12,justifyContent:"center"}}>
              <View style={{height:height*0.1,width:width*0.9,marginHorizontal:"5%",backgroundColor:"black",borderRadius:100,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                  <TouchableOpacity activeOpacity={1} onPress={()=>{SetHome(true),SetLike(false),SetBooking(false),SetSettings(false)}} >
                    <View style={[styles.bottomButtons,{backgroundColor:home?"white":"black"}]}>
                      <Image source={home?require("./images/home1.png"):require("./images/home2.png")} style={{width:30,height:30}}/>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={()=>{SetHome(false),SetLike(true),SetBooking(false),SetSettings(false)}} >
                    <View style={[styles.bottomButtons,{backgroundColor:like?"white":"black"}]}>
                      <Image source={like?require("./images/heartEmpty2.png"):require("./images/heartEmpty.png")} style={{width:30,height:30}}/>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={()=>{SetHome(false),SetLike(false),SetBooking(true),SetSettings(false)}} >
                    <View style={[styles.bottomButtons,{backgroundColor:booking?"white":"black"}]}>
                      <Image source={booking?require("./images/notes1.png"):require("./images/notes2.png")} style={{width:30,height:30}}/>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={()=>{SetHome(false),SetLike(false),SetBooking(false),SetSettings(true)}} >
                    <View style={[styles.bottomButtons,{backgroundColor:settings?"white":"black"}]}>
                      <Image source={settings?require("./images/profile1.png"):require("./images/profile2.png")} style={{width:30,height:30}}/>
                    </View>
                  </TouchableOpacity>
              </View>
            </View>
      </KeyboardAvoidingView>
    </Modal>




    {/* offers */}
    <Modal transparent={false} visible={booking} animationType="slide">
      <View style={styles.offerContainer}>
        <Image
          source={require('./images/offers.jpg')} // Replace with your image
          style={styles.offerBackgroundImage}
        />

        <View style={styles.offerOverlay}>
          <Text style={styles.offerTitle}>🎁 Special Travel Offer</Text>
          <Text style={styles.offerSubtitle}>
            Save up to <Text style={styles.offerHighlight}>40%</Text> on your next destination.
          </Text>
          <Text style={styles.offerCode}>
            Use Code: <Text style={styles.offerHighlight}>GETAWAY40</Text>
          </Text>

          <TouchableOpacity style={styles.offerButton} onPress={()=>{SetBooking(false),SetHome(true)}}>
            <Text style={styles.offerButtonText}>Explore Deals</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
          </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#D5E9FE"
  },
  signIn:{
    backgroundColor:"#F9F6EE",
    flex:0.6,
    borderBottomLeftRadius:60,
    alignItems:"center",
    elevation: 10,
  },
  signInInput:{
    margin:20,
    borderColor:"#353935",
    borderStyle:"solid",
    borderWidth:1,
    borderRadius:20,
    paddingLeft:20,
    width:350,
  },
  signInImageContainer:{
    height:100,
    flex:0.4,

  },
  signInImage:{
    
      width: 520,
      height: 420,
      position: 'absolute',
      alignSelf: 'center',
      left:-70,

  },
  backSymbol:{
    width:30,
    height:30,

  },
  login:{
    backgroundColor:"#F9F6EE",
    flex:0.6,
    borderBottomLeftRadius:60,
  padding:20,
  elevation:10
  },
  loginButton:{width:350,
    height:60,
    backgroundColor:"#0096FF",
    textAlign:"center", 
    borderRadius:20 ,
    paddingTop:15,
    marginTop:35
  },
  loginVerification:{
    backgroundColor:"#F9F6EE",
    flex:0.6,
    borderBottomLeftRadius:60,
  padding:20,
  elevation:10
  },

  LoginImage:
  {
    width: 600,
    height: 420,
    position: 'absolute',
    alignSelf: 'center',
    marginBottom:20
  },

  // main page  Css

  //mainpage
  MainPageContainer:{
    flex:1,
    margin:15,
    
  },

  listOfPlace:{
    borderRadius:100,
    backgroundColor:"white",
    paddingVertical:10,
    paddingHorizontal:15,

    //for android
    elevation: 5,

    //for ios
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  listText:
  {
    color:"black",
    fontSize:18
  },
  searchBar:{
    height:50,
      borderRadius:100,


      /*
      {height:50,borderRadius:100,borderStyle:"solid",borderWidth:1,borderColor:"#818589",    //for android
    elevation: 5,

    //for ios
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,backgroundColor:"white",width:380 ,flexDirection:"row" ,marginVertical:20}
      */


    //for android
      elevation: 5,
  
      //for ios
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,backgroundColor:"white",width:380 ,flexDirection:"row" ,marginVertical:20
    },
    cards:{
      marginTop:20,
      marginRight:20,
      height:400,
      width:350,
      overflow:"hidden",
      borderRadius:30,
      

    },
    cardsImg:{
      width:"auto",
      height:"100%",
      alignItems:"center"
        },

    readMore:{
      height:60,
      borderRadius:50,
      width:300,
      marginTop:"auto",
      marginBottom:20,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      flexDirection:"row"
    },

    //mainPage bottom 4 icons

    bottomButtons:{
      width:60,
      height:60,
      borderRadius:100,
      alignItems:"center",
      justifyContent:"center"
    },

    // offer page 

    offerContainer: {
      flex: 1,
      position: 'relative',
    },
    offerBackgroundImage: {
      ...StyleSheet.absoluteFillObject, // Fills the parent container
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
      height:"60%",
      width:"100%"
    },    
    offerOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.6)',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 30,
    },
    offerTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 20,
      textAlign: 'center',
    },
    offerSubtitle: {
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      marginBottom: 10,
    },
    offerCode: {
      fontSize: 16,
      color: '#FFD700',
      marginBottom: 30,
      textAlign: 'center',
    },
    offerHighlight: {
      fontWeight: 'bold',
      color: '#FF4081',
    },
    offerButton: {
      backgroundColor: 'black',
      paddingVertical: 14,
      paddingHorizontal: 40,
      borderRadius: 30,
    },
    offerButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
  },
);