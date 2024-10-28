const questions = [
    { question: "What is the capital of France?", choices: ["Berlin", "Madrid", "Paris", "Rome"], correct: 2 },
  { question: "Which planet is known as the Red Planet?", choices: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1 },
  { question: "Who wrote 'Romeo and Juliet'?", choices: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"], correct: 2 },
  { question: "What is the largest mammal in the world?", choices: ["African Elephant", "Blue Whale", "Great White Shark", "Giraffe"], correct: 1 },
  { question: "In what year did the Titanic sink?", choices: ["1905", "1912", "1918", "1920"], correct: 1 },
  { question: "What is the main ingredient in guacamole?", choices: ["Tomato", "Avocado", "Onion", "Pepper"], correct: 1 },
  { question: "What is the hardest natural substance on Earth?", choices: ["Gold", "Diamond", "Quartz", "Iron"], correct: 1 },
  { question: "Which gas do plants absorb from the atmosphere?", choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 1 },
  { question: "Which animal is known as the King of the Jungle?", choices: ["Tiger", "Lion", "Elephant", "Gorilla"], correct: 1 },
  { question: "What is the smallest continent by land area?", choices: ["Europe", "Australia", "South America", "Antarctica"], correct: 1 },
  { question: "Who painted the Mona Lisa?", choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correct: 2 },
  { question: "What is the chemical symbol for gold?", choices: ["Au", "Ag", "Pb", "Fe"], correct: 0 },
  { question: "In which country would you find the Great Pyramid of Giza?", choices: ["Greece", "Egypt", "Mexico", "Italy"], correct: 1 },
  { question: "Which element has the atomic number 1?", choices: ["Helium", "Hydrogen", "Oxygen", "Lithium"], correct: 1 },
  { question: "What is the tallest mountain in the world?", choices: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"], correct: 2 },
  { question: "Which planet is known for its rings?", choices: ["Mars", "Jupiter", "Saturn", "Uranus"], correct: 2 },
  { question: "What language is primarily spoken in Brazil?", choices: ["Spanish", "Portuguese", "French", "English"], correct: 1 },
  { question: "Which vitamin is primarily produced when the skin is exposed to sunlight?", choices: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"], correct: 2 },
  { question: "Who is known as the father of modern physics?", choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"], correct: 1 },
  { question: "What is the capital city of Japan?", choices: ["Beijing", "Seoul", "Tokyo", "Bangkok"], correct: 2 },
  { question: "Which organ is responsible for pumping blood throughout the body?", choices: ["Lungs", "Liver", "Heart", "Brain"], correct: 2 },
  { question: "What is the main language spoken in Canada?", choices: ["French", "Spanish", "English", "German"], correct: 2 },
  { question: "Which instrument is used to measure atmospheric pressure?", choices: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"], correct: 0 },
  { question: "Which animal is known for its ability to change color?", choices: ["Chameleon", "Dog", "Cat", "Rabbit"], correct: 0 },
  { question: "In what year did World War II end?", choices: ["1945", "1940", "1950", "1941"], correct: 0 },
  { question: "What is the largest ocean on Earth?", choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], correct: 3 },
  { question: "Who discovered penicillin?", choices: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"], correct: 1 },
  { question: "What is the capital city of Australia?", choices: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correct: 2 },
  { question: "What is the name of the longest river in the world?", choices: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], correct: 0 },
  { question: "What do bees produce?", choices: ["Wax", "Honey", "Silk", "Nectar"], correct: 1 },
  { question: "Which is the largest planet in our solar system?", choices: ["Earth", "Jupiter", "Saturn", "Mars"], correct: 1 },
  { question: "What is the process by which plants make their own food?", choices: ["Photosynthesis", "Respiration", "Germination", "Pollination"], correct: 0 },
  { question: "Which holiday celebrates the birth of Jesus Christ?", choices: ["Thanksgiving", "Easter", "Christmas", "New Year"], correct: 2 },
  { question: "What is the capital of Italy?", choices: ["Rome", "Milan", "Venice", "Florence"], correct: 0 },
  { question: "What is the primary function of red blood cells?", choices: ["Fight infection", "Transport oxygen", "Regulate temperature", "Clot blood"], correct: 1 },
  { question: "What is the largest desert in the world?", choices: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Kalahari Desert"], correct: 0 },
  { question: "What type of animal is a frog?", choices: ["Mammal", "Reptile", "Amphibian", "Bird"], correct: 2 },
  { question: "Which author wrote 'Pride and Prejudice'?", choices: ["Emily Brontë", "Jane Austen", "Charlotte Brontë", "Mary Shelley"], correct: 1 },
  { question: "What is the most widely spoken language in the world?", choices: ["English", "Spanish", "Mandarin Chinese", "Arabic"], correct: 2 },
  { question: "Which country is known as the Land of the Rising Sun?", choices: ["China", "Japan", "Thailand", "India"], correct: 1 },
  { question: "What is the primary ingredient in bread?", choices: ["Flour", "Sugar", "Rice", "Salt"], correct: 0 },
  { question: "What is the name of the fairy in Peter Pan?", choices: ["Tinkerbell", "Cinderella", "Ariel", "Snow White"], correct: 0 },
  { question: "Which planet is closest to the Sun?", choices: ["Venus", "Mercury", "Earth", "Mars"], correct: 1 },
  { question: "Who is the main character in the Harry Potter series?", choices: ["Hermione Granger", "Ron Weasley", "Harry Potter", "Draco Malfoy"], correct: 2 },
  { question: "What is the currency of the United Kingdom?", choices: ["Euro", "Dollar", "Pound Sterling", "Yen"], correct: 2 },
  { question: "What is the term for a baby kangaroo?", choices: ["Calf", "Joey", "Pup", "Kit"], correct: 1 },
  { question: "Which chemical element is represented by the symbol 'O'?", choices: ["Oxygen", "Gold", "Osmium", "Iron"], correct: 0 },
  { question: "What is the largest organ in the human body?", choices: ["Heart", "Skin", "Liver", "Brain"], correct: 1 },
  { question: "Which instrument has 88 keys?", choices: ["Violin", "Guitar", "Piano", "Flute"], correct: 2 },
  { question: "What is the official language of China?", choices: ["Cantonese", "Mandarin", "English", "Shanghainese"], correct: 1 },
  { question: "Which animal is known for its black and white stripes?", choices: ["Lion", "Zebra", "Panda", "Skunk"], correct: 1 },
  { question: "What is the primary function of the lungs?", choices: ["Pump blood", "Digest food", "Absorb oxygen", "Filter waste"], correct: 2 },
  { question: "Which planet has the most moons?", choices: ["Earth", "Saturn", "Mars", "Neptune"], correct: 1 },
  { question: "What is the capital of Canada?", choices: ["Toronto", "Ottawa", "Vancouver", "Montreal"], correct: 1 },
  { question: "Which ocean is the smallest?", choices: ["Indian Ocean", "Arctic Ocean", "Atlantic Ocean", "Pacific Ocean"], correct: 1 },
  { question: "What is the name of the first manned mission to land on the Moon?", choices: ["Apollo 11", "Apollo 12", "Gemini 8", "Skylab"], correct: 0 },
  { question: "Which vitamin is known as ascorbic acid?", choices: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"], correct: 1 },
  { question: "What is the name of the tallest waterfall in the world?", choices: ["Angel Falls", "Niagara Falls", "Victoria Falls", "Yosemite Falls"], correct: 0 },
  { question: "Which planet is known as the Earth's twin?", choices: ["Mars", "Venus", "Saturn", "Jupiter"], correct: 1 },
  { question: "What is the largest land animal?", choices: ["Giraffe", "Hippopotamus", "African Elephant", "Rhino"], correct: 2 },
  { question: "Who invented the telephone?", choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"], correct: 0 },
  { question: "What is the capital city of Spain?", choices: ["Barcelona", "Madrid", "Valencia", "Seville"], correct: 1 },
  { question: "Which is the smallest country in the world?", choices: ["Monaco", "Vatican City", "San Marino", "Nauru"], correct: 1 },
  { question: "Which type of tree produces acorns?", choices: ["Pine", "Oak", "Maple", "Birch"], correct: 1 },
  { question: "Which artist is known for the ceiling of the Sistine Chapel?", choices: ["Raphael", "Michelangelo", "Leonardo da Vinci", "Caravaggio"], correct: 1 },
  { question: "What is the largest city in the United States?", choices: ["Los Angeles", "New York City", "Chicago", "Houston"], correct: 1 },
  { question: "What is the chemical symbol for water?", choices: ["HO", "H2O", "O2H", "OH2"], correct: 1 },
  { question: "What is the primary ingredient in hummus?", choices: ["Lentils", "Chickpeas", "Beans", "Rice"], correct: 1 },
  { question: "Which bird is known for its colorful plumage and ability to mimic sounds?", choices: ["Parrot", "Sparrow", "Eagle", "Penguin"], correct: 0 },
  { question: "What is the currency used in Japan?", choices: ["Yen", "Won", "Yuan", "Dollar"], correct: 0 },
  { question: "Which ancient civilization built the pyramids?", choices: ["Greeks", "Romans", "Egyptians", "Aztecs"], correct: 2 },
  { question: "What is the boiling point of water at sea level?", choices: ["90°C", "100°C", "110°C", "120°C"], correct: 1 },
  { question: "Which animal is known for having a pouch?", choices: ["Tiger", "Kangaroo", "Elephant", "Bear"], correct: 1 },
  { question: "What is the capital of Germany?", choices: ["Frankfurt", "Berlin", "Munich", "Hamburg"], correct: 1 },
  { question: "Which planet is known for its Great Red Spot?", choices: ["Saturn", "Mars", "Jupiter", "Venus"], correct: 2 },
  { question: "What is the main ingredient in a traditional Japanese sushi roll?", choices: ["Rice", "Noodles", "Bread", "Quinoa"], correct: 0 },
  { question: "Who wrote 'The Odyssey'?", choices: ["Homer", "Virgil", "Ovid", "Sophocles"], correct: 0 },
  { question: "What is the largest species of shark?", choices: ["Great White Shark", "Hammerhead Shark", "Whale Shark", "Tiger Shark"], correct: 2 },
  { question: "What is the capital city of India?", choices: ["Mumbai", "New Delhi", "Kolkata", "Bangalore"], correct: 1 },
  { question: "Which famous scientist developed the theory of evolution?", choices: ["Albert Einstein", "Charles Darwin", "Isaac Newton", "Nikola Tesla"], correct: 1 },
  { question: "What is the main ingredient in a Caesar salad?", choices: ["Spinach", "Romaine lettuce", "Kale", "Arugula"], correct: 1 },
  { question: "What is the largest island in the world?", choices: ["Greenland", "New Guinea", "Borneo", "Madagascar"], correct: 0 },
  { question: "What type of animal is a salmon?", choices: ["Mammal", "Bird", "Fish", "Amphibian"], correct: 2 },
  { question: "Who painted 'The Starry Night'?", choices: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Henri Matisse"], correct: 0 },
  { question: "What is the capital of Russia?", choices: ["Moscow", "St. Petersburg", "Kiev", "Minsk"], correct: 0 },
  { question: "Which organ is responsible for detoxifying the body?", choices: ["Heart", "Liver", "Kidney", "Lungs"], correct: 1 },
  { question: "What is the main ingredient in a traditional Italian pizza?", choices: ["Bread", "Tomato sauce", "Cheese", "Olive oil"], correct: 1 },
  { question: "Which is the largest volcano in the world?", choices: ["Mount Fuji", "Mauna Loa", "Mount St. Helens", "Mount Kilimanjaro"], correct: 1 },
  { question: "Which continent is known as the 'Dark Continent'?", choices: ["Asia", "Africa", "Australia", "South America"], correct: 1 },
  { question: "What is the freezing point of water in Fahrenheit?", choices: ["0°F", "32°F", "25°F", "40°F"], correct: 1 },
  { question: "Which famous playwright wrote 'Hamlet'?", choices: ["Christopher Marlowe", "William Shakespeare", "George Bernard Shaw", "Tennessee Williams"], correct: 1 },
  { question: "What is the capital of Brazil?", choices: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"], correct: 1 },
  { question: "Which element is essential for the formation of DNA?", choices: ["Carbon", "Nitrogen", "Oxygen", "Hydrogen"], correct: 0 },
  { question: "Which country is home to the kangaroo?", choices: ["New Zealand", "Australia", "Canada", "South Africa"], correct: 1 },
  { question: "What is the largest city in Australia?", choices: ["Sydney", "Melbourne", "Brisbane", "Perth"], correct: 0 },
  { question: "What is the capital of Egypt?", choices: ["Cairo", "Alexandria", "Giza", "Luxor"], correct: 0 },
  { question: "Which gas is most abundant in the Earth's atmosphere?", choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 2 },
  { question: "Who is known as the 'Father of Geometry'?", choices: ["Pythagoras", "Euclid", "Archimedes", "Galileo"], correct: 1 },
  { question: "What is the main language spoken in Brazil?", choices: ["Spanish", "Portuguese", "English", "French"], correct: 1 },
  { question: "Which planet is known as the 'Red Planet'?", choices: ["Venus", "Saturn", "Mars", "Jupiter"], correct: 2 },
  { question: "What is the largest organ in the human body?", choices: ["Heart", "Skin", "Liver", "Brain"], correct: 1 },
  { question: "Which instrument is used to measure temperature?", choices: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"], correct: 1 },
  { question: "What is the primary ingredient in guacamole?", choices: ["Tomato", "Avocado", "Onion", "Garlic"], correct: 1 },
  { question: "Who is the author of the Harry Potter series?", choices: ["J.K. Rowling", "Stephen King", "Suzanne Collins", "George R.R. Martin"], correct: 0 },
  { question: "Which planet is known for its rings?", choices: ["Jupiter", "Mars", "Saturn", "Neptune"], correct: 2 },
  { question: "What is the freezing point of water in Celsius?", choices: ["0°C", "32°C", "100°C", "-10°C"], correct: 0 },
  { question: "What is the capital of Italy?", choices: ["Venice", "Rome", "Florence", "Milan"], correct: 1 },
  { question: "Which chemical element has the symbol 'O'?", choices: ["Oxygen", "Osmium", "Gold", "Silver"], correct: 0 },
  { question: "Which ancient civilization is known for its pyramids and pharaohs?", choices: ["Mayans", "Egyptians", "Greeks", "Romans"], correct: 1 },
  { question: "What is the longest river in the world?", choices: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], correct: 0 },
  { question: "Which bird is often associated with wisdom?", choices: ["Eagle", "Owl", "Sparrow", "Penguin"], correct: 1 },
  { question: "What is the chemical symbol for gold?", choices: ["Ag", "Au", "Pb", "Fe"], correct: 1 },
  { question: "Who was the first female Prime Minister of the United Kingdom?", choices: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Indira Gandhi"], correct: 0 },
  { question: "Which planet is known for having a day longer than its year?", choices: ["Mercury", "Venus", "Mars", "Jupiter"], correct: 1 },
  { question: "What is the capital of France?", choices: ["Lyon", "Marseille", "Paris", "Bordeaux"], correct: 2 },
  { question: "Which gas do plants absorb from the atmosphere?", choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], correct: 1 },
  { question: "What is the largest mammal in the ocean?", choices: ["Great White Shark", "Blue Whale", "Orca", "Dolphin"], correct: 1 },
  { question: "Which vitamin is primarily obtained from sunlight?", choices: ["Vitamin A", "Vitamin B12", "Vitamin D", "Vitamin C"], correct: 2 },
  { question: "What is the capital of Argentina?", choices: ["Buenos Aires", "Santiago", "Lima", "Bogotá"], correct: 0 },
  { question: "Which instrument has 47 strings and 7 pedals?", choices: ["Piano", "Harp", "Guitar", "Violin"], correct: 1 },
  { question: "What is the main ingredient in traditional French ratatouille?", choices: ["Eggplant", "Tomato", "Potato", "Carrot"], correct: 0 },
  { question: "Which ocean is the largest?", choices: ["Indian Ocean", "Arctic Ocean", "Atlantic Ocean", "Pacific Ocean"], correct: 3 },
  { question: "What is the longest bone in the human body?", choices: ["Femur", "Tibia", "Humerus", "Radius"], correct: 0 },
  { question: "Which planet is closest to the sun?", choices: ["Venus", "Mars", "Mercury", "Earth"], correct: 2 },
  { question: "What is the capital of Sweden?", choices: ["Oslo", "Copenhagen", "Helsinki", "Stockholm"], correct: 3 },
  { question: "Which fruit is known for having seeds on the outside?", choices: ["Raspberry", "Strawberry", "Blueberry", "Blackberry"], correct: 1 },
  { question: "Which element has the atomic number 1?", choices: ["Helium", "Hydrogen", "Oxygen", "Carbon"], correct: 1 },
  { question: "Who is known for the theory of relativity?", choices: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Nikola Tesla"], correct: 1 },
  { question: "What is the primary language spoken in Egypt?", choices: ["Arabic", "French", "English", "Spanish"], correct: 0 },
  { question: "Which is the largest desert in the world?", choices: ["Sahara Desert", "Arabian Desert", "Antarctic Desert", "Gobi Desert"], correct: 2 },
  { question: "What is the capital of Greece?", choices: ["Athens", "Rome", "Cairo", "Istanbul"], correct: 0 },
  { question: "Which element is represented by the symbol 'Na'?", choices: ["Nitrogen", "Sodium", "Neon", "Nickel"], correct: 1 },
  { question: "What is the main ingredient in chocolate?", choices: ["Cocoa beans", "Sugar", "Milk", "Vanilla"], correct: 0 },
  { question: "Which gas is commonly used in balloons?", choices: ["Hydrogen", "Helium", "Oxygen", "Nitrogen"], correct: 1 },
  { question: "What is the capital of South Korea?", choices: ["Seoul", "Busan", "Incheon", "Daegu"], correct: 0 },
  { question: "Which planet is known for its extreme winds?", choices: ["Earth", "Neptune", "Mars", "Venus"], correct: 1 },
  { question: "Who wrote the play 'Romeo and Juliet'?", choices: ["William Shakespeare", "Charles Dickens", "Mark Twain", "George Orwell"], correct: 0 },
  { question: "What is the main ingredient in pesto?", choices: ["Basil", "Oregano", "Parsley", "Cilantro"], correct: 0 },
  { question: "What is the capital of Thailand?", choices: ["Phuket", "Bangkok", "Chiang Mai", "Pattaya"], correct: 1 },
  { question: "Which animal is known as the 'King of the Jungle'?", choices: ["Tiger", "Lion", "Bear", "Elephant"], correct: 1 },
  { question: "What is the most spoken language in the world?", choices: ["English", "Mandarin Chinese", "Spanish", "Hindi"], correct: 1 },
  { question: "Which element is essential for respiration?", choices: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"], correct: 1 },
  { question: "What is the capital city of Italy?", choices: ["Florence", "Rome", "Venice", "Milan"], correct: 1 },
  { question: "Which fruit is known for having a high vitamin C content?", choices: ["Banana", "Orange", "Apple", "Grape"], correct: 1 },
  { question: "What is the capital of Vietnam?", choices: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Nha Trang"], correct: 1 },
  { question: "What is the primary ingredient in bread?", choices: ["Flour", "Sugar", "Water", "Yeast"], correct: 0 },
  { question: "Which bird is known for its long migration?", choices: ["Sparrow", "Hummingbird", "Arctic Tern", "Robin"], correct: 2 },
  { question: "What is the chemical formula for water?", choices: ["H2O", "CO2", "O2", "H2SO4"], correct: 0 },
  { question: "Which animal is known for building dams?", choices: ["Beaver", "Otter", "Fox", "Rabbit"], correct: 0 },
  { question: "What is the capital of the Philippines?", choices: ["Cebu", "Manila", "Davao", "Iloilo"], correct: 1 }
];
