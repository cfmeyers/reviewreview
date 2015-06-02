// Generated by CoffeeScript 1.9.3
(function() {
  var authors, baseURL, buildItemDiv, buildQuery, buildRows, genres, substringMatcher, titles;

  baseURL = 'https://marginal-review-api.herokuapp.com/api/v1/reviews';

  $(document).ready(function() {
    var $contentDiv;
    $('#searchBoxGenre').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    }, {
      name: 'genres',
      limit: 15,
      source: substringMatcher(genres)
    });
    $('#searchBoxTitle').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    }, {
      name: 'titles',
      limit: 15,
      source: substringMatcher(titles)
    });
    $('#searchBoxAuthor').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    }, {
      name: 'authors',
      limit: 15,
      source: substringMatcher(authors)
    });
    $contentDiv = $('#content');
    return $('#submit').click(function(event) {
      var url;
      event.preventDefault();
      $contentDiv.empty();
      url = buildQuery();
      return $.get(url, function(data) {
        var $item, $row, i, index, item, j, len, len1, ref, results, rows;
        rows = buildRows(data.results.length, 4);
        ref = data.results;
        for (index = i = 0, len = ref.length; i < len; index = ++i) {
          item = ref[index];
          $item = buildItemDiv(item);
          rows[Math.floor(index / 4)].append($item);
        }
        results = [];
        for (j = 0, len1 = rows.length; j < len1; j++) {
          $row = rows[j];
          results.push($contentDiv.append($row));
        }
        return results;
      });
    });
  });

  buildRows = function(numItems, columnCount) {
    var i, numRows, ref, results;
    numRows = Math.ceil(numItems / columnCount);
    results = [];
    for (i = 0, ref = numRows; 0 <= ref ? i < ref : i > ref; 0 <= ref ? i++ : i--) {
      results.push($("<div class='row'></div>"));
    }
    return results;
  };

  buildItemDiv = function(item) {
    var $item, post_title;
    post_title = item.post_title.split(' ').slice(0, 5).join(' ');
    return $item = $("<div class='item col-md-3'> <a target='_blank' href='" + item.post_url + "'> <h3 class='itemTitle'>" + post_title + "</h3> <img src='" + item.item_image_url_large + "' alt='" + item.item_title + "'> </a> </div>");
  };

  buildQuery = function() {
    var author, genre, title, url;
    genre = $('#searchBoxGenre').val();
    title = $('#searchBoxTitle').val();
    author = $('#searchBoxAuthor').val();
    url = baseURL + '?';
    if (genre !== '') {
      url += 'genre=' + genre + '&';
    }
    if (title !== '') {
      url += 'title=' + title + '&';
    }
    if (author !== '') {
      url += 'author=' + author + '&';
    }
    return url;
  };

  substringMatcher = function(strs) {
    return function(q, cb) {
      var matches, str, substrRegex;
      console.log('hey oh');
      substrRegex = new RegExp(q, 'i');
      matches = (function() {
        var i, len, results;
        results = [];
        for (i = 0, len = strs.length; i < len; i++) {
          str = strs[i];
          if (substrRegex.test(str)) {
            results.push(str);
          }
        }
        return results;
      })();
      return cb(matches);
    };
  };

  genres = ["Economics", "Reference", "United States", "Literary", "Economic History", "History", "Economic Conditions", "Theory", "Social Sciences", "General", "Economic Policy", "Economic Policy & Development", "Movies", "World", "Contemporary", "Drama", "Sociology", "Political Science", "Pop", "Political", "Development & Growth", "Political Economy", "Indie & Art House", "Europe", "Technology", "Rock", "History & Theory", "Classics", "Economic Theory", "Public Policy", "Finance", "History & Philosophy", "Memoirs", "Classical", "Authors", "Foreign Films", "Globalization", "Cultural", "Popular Culture", "Business & Money", "Education & Reference", "Macroeconomics", "Historical", "Entrepreneurship", "European", "International", "Management", "Social Psychology & Interactions", "Historical Study & Educational Resources", "Criticism & Theory", "Mystery & Thrillers", "Chamber Music", "Conservatism & Liberalism", "Business Development", "Government & Business", "Consumer Behavior", "Environmental Economics", "Business & Finance", "Essays", "Action & Adventure", "Ethics", "Science Fiction", "Cognitive Psychology", "Money & Monetary Policy", "Ethics & Morality", "Industries", "Planning & Forecasting", "State & Local", "Military", "Great Britain", "Comedy", "Asian", "VHS Custom Stores", "Symphonies", "History & Criticism", "Philosophy", "Romance", "Microeconomics", "Company Profiles", "Travel Writing", "Free Enterprise", "Human Resources", "Science & Mathematics", "Science Fiction & Fantasy", "Decision-Making & Problem Solving", "Decision Making", "Poverty", "Human Geography", "Public Affairs & Policy", "Business", "China", "Innovation", "Democracy", "Banks & Banking", "Law", "Urban", "Criminology", "Evolution", "Success", "Health, Fitness & Dieting", "Middle Eastern", "Women", "Literature", "Civilization & Culture", "Class", "Food Science", "Asia", "Computers & Technology", "Humor & Entertainment", "Social Policy", "Criticism", "Comparative", "Indie Rock", "Fantasy", "Psychology", "Anthropology", "Political Ideologies", "Cognitive", "Government", "Commentary & Opinion", "International Relations", "Psychology & Counseling", "Econometrics", "Social Services & Welfare", "Subjects", "History & Surveys", "All", "World War II", "Operettas", "Africa", "Adult Alternative", "Political History", "Investing", "Nonprofit Organizations & Charities", "Environmental Science", "Marriage & Family", "Movements & Periods", "India", "International Business", "Jazz", "Agriculture", "Singer-Songwriters", "Russia", "TV", "All Titles", "All Sony Pictures Titles", "Caribbean & Latin American", "International & World Politics", "Middle East", "Motivational", "Biology", "British & Irish", "Environmental Policy", "Research", "National & International Security", "Income Inequality", "Horror", "Communication & Media Studies", "Conservation", "Commerce", "Hospitality, Travel & Tourism", "Germany", "Family Life", "Vocal Pop", "Personal Finance", "Computer Science", "Religion & Spirituality", "Communications", "Leadership", "Opera & Classical Vocal", "Higher & Continuing Education", "Kids & Family", "Probability & Statistics", "Human Rights", "Studio Specials", "Behavioral Sciences", "Statistics", "Literature & Fiction", "Folk Rock", "Psychological Thrillers", "Travel", "Women in History", "Health Policy", "Happiness", "Business of Art", "Scientists", "Short Stories", "Elections", "Discrimination & Racism", "Documentary", "Education", "Systems & Planning", "Modern", "Dance Pop", "Ethnic Studies", "Applied Psychology", "Health Care Delivery", "Biology & Life Sciences", "Communism & Socialism", "Comparative Politics", "Non-US Legal Systems", "Trades & Tariffs", "Robotics & Automation", "Folk", "National", "Ecology", "Suspense", "Environmentalism", "African-American Studies", "France", "Mental Health", "Reform & Policy", "Restaurant & Food", "Anatomy", "Civil Rights & Liberties", "Philosophers", "World Music", "Accounting", "Alternative Rock", "Personality", "Adventure", "Self-Help", "Chinese", "Public Finance", "Regional", "Album-Oriented Rock (AOR)", "Transportation", "Actors & Entertainers", "Violence in Society", "Demography", "German", "Television", "Personal Transformation", "Climatology", "Linguistics", "Contemporary Folk", "Military & War", "African", "Political Parties", "Bebop", "Japan", "Mystery", "Workplace Culture", "Emigration & Immigration", "Marketing", "Presidents & Heads of State", "Art House & International", "Banking", "Architecture", "French", "Information Management", "Biographies & Memoirs", "England", "Archaeology", "Dance & Electronic", "Avant Garde & Free Jazz", "Parenting", "Russian & Former Soviet Union", "Teen & Young Adult", "Sustainable Development", "Physics", "Diplomacy", "Pop Rap", "Sports", "City Planning & Urban Development", "Neuropsychology", "Concertos", "Urban Planning & Development", "Poetry", "Anthologies", "Engineering", "World War I", "Brazil", "Mathematics", "All Fox Titles", "Aesthetics", "Labor & Industrial Relations", "Church & State", "State", "Cosmology", "Weather", "Religion, Politics & State", "Science & Math", "Rivers", "Internet, Groupware, & Telecommunications", "Musicals", "Jewish", "Sonatinas", "Journalism & Nonfiction", "Other Diets", "Sexuality", "Social Theory", "Interpersonal Relations", "High Tech", "War", "Religious", "Arts & Photography", "Natural History", "Special Editions", "Christianity", "Composers & Musicians", "Minority Studies", "Genetics", "Guides", "Business Ethics", "Urban & Regional", "Progressive Rock", "Energy Production & Extraction", "Political Freedom", "Spanish & Portuguese", "Media & Communications", "Special Interest", "All MGM Titles", "Traditional Folk", "Medical", "Biotechnology", "Terrorism", "Americana", "Geography", "Journalists", "Introduction", "Clinical Psychology", "U.S. Presidents", "Exercise & Fitness", "Specialty Boutique", "Paranormal & Urban", "Foreign Language Study & Reference", "Espionage", "Political Advocacy", "Processes & Infrastructure", "Social Scientists & Psychologists", "Investments & Securities", "Family Saga", "Music", "TV, Movie, Video Game Adaptations", "Corporate Finance", "Ideologies & Doctrines", "Oil & Energy", "Legal History", "Nuclear", "Mammals", "Techno", "Nutrition", "E-Commerce", "Travelers & Explorers", "Country", "Baseball", "Metaphysical & Visionary", "Blues Rock", "Artists, Architects & Photographers", "Women's Studies", "Suites", "Contemporary Women", "Chess", "Anatomy & Physiology", "Customs & Traditions", "Electronica", "Humorous", "Coming of Age", "Historic", "Industrial, Manufacturing & Operational Systems", "Social Philosophy", "Epic", "Disaster Relief", "Game Theory", "Sonatas", "Blues", "Country Rock", "Occupational & Organizational", "Russian", "Neuroscience", "Urban & Land Use Planning", "Egypt", "Australia & New Zealand", "Child Psychology", "Weight Loss", "Psychoanalysis", "Executive Branch", "Today's Country", "Modern Postbebop", "Public Affairs & Administration", "Fiction", "Emotions", "Australia & Oceania", "Satire", "Industrial", "Latin Pop", "All Lionsgate Titles", "Latin Music", "Fantasies", "Church History", "Japanese", "Law Enforcement", "Sex", "Animation", "4-for-3 DVD", "Global", "Rome", "Soul", "Organized Crime", "Americas", "Motivation & Self-Improvement", "Astronomy", "Real Estate", "Telecommunications & Sensors", "Indian", "Environmental", "Patents & Inventions", "Natural Resources", "Italy", "New, Used & Rental Textbooks", "Latin America", "Asian American Studies", "Revolution & Founding", "Sports & Outdoors", "Advertising", "Politics & Government", "Epidemiology", "Earth Sciences", "Space Opera", "Feminist Theory", "Afro Brazilian", "Sacred & Religious", "Property", "Boxed Sets", "Shakespeare", "Regional Planning", "Islam", "Inflation", "African-American & Black", "Humanism", "Consumer Guides", "Biological Sciences", "Canada", "Performing Arts", "Reggae", "Business Culture", "Character Pieces", "Bluegrass", "Religious Studies", "New Age", "Holocaust", "Canadian", "Civil Procedure", "Turkey", "Israel & Palestine", "Biographies", "Pharmacology", "Fugues", "Popular", "Murder & Mayhem", "Behavioral Psychology", "Taxation", "Writing", "Manufacturing", "Biographical", "Iraq War", "Humor", "Metal", "East Coast", "Preludes", "Communication Policy", "Animal Behavior & Communication", "Comparative Religion", "Foreign Exchange", "Art", "Franchising", "Classic Country", "Intellectual Property", "Fauna", "Urban Life", "Torts", "Industrial Relations", "Mathematical Physics", "Communicable Diseases", "Geology", "Classic Rock", "Southeast", "Sony Pictures Classics", "Civil Rights", "Hospital Administration", "Dystopian", "Departments", "Compatible Devices", "Mexico", "Old Testament", "Colonial Period", "Culinary", "Administrative Law", "Sci-Fi & Fantasy", "Native American", "Creativity & Genius", "DTS", "All Universal Studios Titles", "New Business Enterprises", "Individual Artists", "North", "Ancient Civilizations", "Civics & Citizenship", "English Literature"];

  titles = ["Launching The Innovation Renaissance: A New Path to Bring Smart Ideas to Market Fast (TED Books Book 8)", "An Economist Gets Lunch: New Rules for Everyday Foodies", "Discover Your Inner Economist: Use Incentives to Fall in Love, Survive Your Next Meeting, and Motivate Your Dentist", "Create Your Own Economy: The Path to Prosperity in a Disordered World", "Entrepreneurial Economics: Bright Ideas from the Dismal Science", "Average Is Over: Powering America Beyond the Age of the Great Stagnation", "What Price Fame?", "The Great Stagnation: How America Ate All The Low-Hanging Fruit of Modern History, Got Sick,  and Will  (Eventually) Feel Better: A Penguin eSpecial from Dutton", "The Myth of the Rational Voter: Why Democracies Choose Bad Policies", "The Age of the Infovore: Succeeding in the Information Economy", "Good and Plenty: The Creative Successes of American Arts Funding", "The Voluntary City: Choice, Community, and Civil Society (Economics, Cognition, and Society)", "The Undercover Economist: Exposing Why the Rich Are Rich, the Poor Are Poor--and Why You Can Never Buy a Decent Used Car!", "Selfish Reasons to Have More Kids: Why Being a Great Parent is Less Work and More Fun Than You Think", "The Undercover Economist Strikes Back: How to Run-or Ruin-an Economy", "Markets and Cultural Voices: Liberty vs. Power in the Lives of Mexican Amate Painters (Economics, Cognition, and Society)", "In Praise of Commercial Culture", "The Logic of Life: The Rational Economics of an Irrational World", "Judge and Jury: American Tort Law on Trial", "Creative Destruction: How Globalization Is Changing the World's Cultures", "The Great Stagnation: How America Ate All the Low-Hanging Fruit of Modern History, Got Sick, and Will( Eventually) Feel Better", "The Power of Productivity: Wealth, Poverty, and the Threat to Global Stability", "Maximum City: Bombay Lost and Found", "Changing the Guard: Private Prisons and the Control of Crime", "More Sex Is Safer Sex: The Unconventional Wisdom of Economics", "Freakonomics: A Rogue Economist Explores the Hidden Side of Everything", "Race Against The Machine: How the Digital Revolution is Accelerating Innovation, Driving Productivity, and Irreversibly Transforming Employment and the Economy", "Lords of Finance: The Bankers Who Broke the World", "Prophet of Innovation: Joseph Schumpeter and Creative Destruction", "The Bourgeois Virtues: Ethics for an Age of Commerce", "The Bottom Billion: Why the Poorest Countries are Failing and What Can Be Done About It", "The Armchair Economist: Economics and Everyday Life", "Blink: The Power of Thinking Without Thinking", "A Farewell to Alms: A Brief Economic History of the World", "Explorations in the New Monetary Economics", "War, Wine, and Taxes: The Political Economy of Anglo-French Trade, 1689-1900 (The Princeton Economic History of the Western World)", "Why Not? How to Use Everyday Ingenuity to Solve Problems Big and Small", "Capital in the Twenty-First Century", "Moneyball: The Art of Winning an Unfair Game", "From Poverty to Prosperity: Intangible Assets, Hidden Liabilities and the Lasting Triumph over Scarcity", "Good Money: Birmingham Button Makers, the Royal Mint, and the Beginnings of Modern Coinage, 1775-1821", "One Economics, Many Recipes: Globalization, Institutions, and Economic Growth", "Discover Your Inner Economist: Use Incentives to Fall in Love, Survive Your Next Meeting, and Motivate Your Den tist", "The Progress Paradox: How Life Gets Better While People Feel Worse", "Predictably Irrational: The Hidden Forces That Shape Our Decisions", "The End of Poverty: Economic Possibilities for Our Time", "2666: A Novel", "Nudge: Improving Decisions About Health, Wealth, and Happiness", "Stumbling on Happiness", "The Wisdom of Crowds: Why the Many Are Smarter Than the Few and How Collective Wisdom Shapes Business, Economies, Societies and Nations", "The Gated City (Kindle Single)", "The Price of Everything: A Parable of Possibility and Prosperity", "Too Big to Save? How to Fix the U.S. Financial System", "The Up Side of Down: Why Failing Well Is the Key to Success", "Where Have You Been?: Selected Essays", "Mozart: Don Giovanni", "Brazil Classics 1: Beleza Tropical", "Knowledge and the Wealth of Nations: A Story of Economic Discovery", "The Power of Habit: Why We Do What We Do in Life and Business", "Every Grain of Rice: Simple Chinese Home Cooking", "Coming Apart: The State of White America, 1960-2010", "Apollo's Angels: A History of Ballet", "Risk and Business Cycles: New and Old Austrian Perspectives (Foundations of the Market Economy)", "Exit, Voice, and Loyalty: Responses to Decline in Firms, Organizations, and States", "Replenishing the Earth: The Settler Revolution and the Rise of the Angloworld, 1783-1939", "Thinking, Fast and Slow", "Fischer Black and the Revolutionary Idea of Finance", "XXL: Obesity and the Limits of Shame (U of T Centre for Public Management Series on Public Policy & Administration)", "Off the Books: The Underground Economy of the Urban Poor", "Radicals for Capitalism: A Freewheeling History of the Modern American Libertarian Movement", "The Escape from Hunger and Premature Death, 1700-2100: Europe, America, and the Third World (Cambridge Studies in Population, Economy and Society in Past Time)", "Nothing to Envy: Ordinary Lives in North Korea", "The Son Also Rises: Surnames and the History of Social Mobility (The Princeton Economic History of the Western World)", "How Adam Smith Can Change Your Life: An Unexpected Guide to Human Nature and Happiness", "Common Wealth: Economics for a Crowded Planet", "Armchair Economist: Economics & Everyday Life", "The Second Machine Age: Work, Progress, and Prosperity in a Time of Brilliant Technologies", "Violence: A Micro-sociological Theory", "Bringing It All Back Home", "The Gridlock Economy: How Too Much Ownership Wrecks Markets, Stops Innovation, and Costs Lives", "The Passion of Joan of Arc (The Criterion Collection)", "1491: New Revelations of the Americas Before Columbus", "Individualism and Economic Order", "Guns, Germs, and Steel: The Fates of Human Societies", "Orkney", "My Struggle: Book Two: A Man in Love", "Snow", "The Tyranny of the Market: Why You Can't Always Get What You Want", "The Invisible Heart: An Economic Romance", "Why Societies Need Dissent (Oliver Wendell Holmes Lectures)", "A Propensity to Self-Subversion", "Mindless Eating: Why We Eat More Than We Think", "Street Smart: Competition, Entrepreneurship, and the Future of Roads", "The System Worked: How the World Stopped Another Great Depression", "Tragic Songs of Life", "Strange Mercy", "Hateship, Friendship, Courtship, Loveship, Marriage: Stories", "Neptune's Brood", "I Am Shelby Lynne", "Choice and Consequence", "A Great Leap Forward: 1930s Depression and U.S. Economic Growth (Yale Series in Economic and Financial History)", "Private Neighborhoods and the Transformation of Local Government", "The Great Persuasion: Reinventing Free Markets since the Depression", "The Big Questions: Tackling the Problems of Philosophy with Ideas from Mathematics, Economics, and Physics", "Worldly Philosopher: The Odyssey of Albert O. Hirschman", "Wars, Guns, and Votes: Democracy in Dangerous Places", "What Money Can't Buy: The Moral Limits of Markets", "The Assumptions Economists Make", "Enlightenment 2.0: Restoring sanity to our politics, our economy, and our lives", "The Once and Future King: The Rise of Crown Government in America", "Poor Economics: A Radical Rethinking of the Way to Fight Global Poverty", "The Pecking Order: Which Siblings Succeed and Why", "Powerful Medicines: The Benefits, Risks, and Costs of Prescription Drugs", "The Cultural Lives of Whales and Dolphins", "Jonathan Strange and Mr Norrell", "The Social Animal: The Hidden Sources of Love, Character, and Achievement", "Due Diligence: An Impertinent Inquiry into Microfinance", "Eight Preposterous Propositions: From the Genetics of Homosexuality to the Benefits of Global Warming", "V. (Perennial Classics)", "The Executioner's Song", "Underground: The Tokyo Gas Attack and the Japanese Psyche", "The Conscience of a Liberal", "Drug War Crimes: The Consequences of Prohibition", "The Paradox of Choice: Why More Is Less", "Don Giovanni", "The Company of Strangers: A Natural History of Economic Life", "The Greenhouse", "Reasons and Persons", "The Transparent Society: Will Technology Force Us To Choose Between Privacy And Freedom?", "The Tipping Point: How Little Things Can Make a Big Difference", "Alexander Hamilton", "Harlot's Ghost: A Novel", "The Long Divergence: How Islamic Law Held Back the Middle East", "Dead Ringers", "The Language of Food: A Linguist Reads the Menu", "Sacred Games: A Novel", "The Rent Is Too Damn High: What To Do About It, And Why It Matters More Than You Think", "The Woman in the Dunes", "Economics in One Lesson: The Shortest and Surest Way to Understand Basic Economics", "Adapt: Why Success Always Starts with Failure", "Glittering Images: A Journey Through Art from Egypt to Star Wars", "The Museum of Innocence", "The Enlightened Economy: An Economic History of Britain 1700-1850 (The New Economic History of Britain seri)", "The Invisible Hook: The Hidden Economics of Pirates", "Who Should Pay for Medicare?", "The 'Vanity of the Philosopher': From Equality to Hierarchy in Post-Classical Economics", "Aunt Julia and the Scriptwriter: A Novel", "Knowledge and Coordination: A Liberal Interpretation", "The Price of Liberty: Paying for America's Wars", "The Blank Slate: The Modern Denial of Human Nature", "In an Uncertain World: Tough Choices from Wall Street to Washington", "The Archaeology of Knowledge", "The Undercover Economist", "The Rise and Decline of Nations: Economic Growth, Stagflation, and Social Rigidities", "The Passions and the Interests", "College Choice in America", "Lanark: A Life in Four Books (Canongate Classics)", "A Gate at the Stairs", "The Boy with Two Belly Buttons", "Consumed: How Markets Corrupt Children, Infantilize Adults, and Swallow Citizens Whole"];

  authors = ["Tyler Cowen", "Alex Tabarrok", "Tim Harford", "Various Artists", "Bryan Caplan", "Paul Krugman", "Orhan Pamuk", "Steven D. Levitt", "Albert O. Hirschman", "Haruki Murakami", "David T. Beito", "Norman Mailer", "Steven E. Landsburg", "Mario Vargas Llosa", "Cass R. Sunstein", "Erik Brynjolfsson", "Michael Lewis", "Malcolm Gladwell", "Thomas Pynchon", "Deirdre N. McCloskey", "Gregory Clark", "BOB DYLAN", "Jeffrey D. Sachs", "Paul Collier", "Fuchsia Dunlop", "Ingmar Bergman", "F. A. Hayek", "Richard A. Posner", "Alice Munro", "Milton Friedman", "Arnold Kling", "Barry Eichengreen", "Gordon Tullock", "Charles Murray", "Russell Roberts", "Daniel W. Drezner", "Roberto Bolano", "Eric Helland", "Robert H. Frank", "Thomas C. Schelling", "Various", "Steven E Landsburg", "Thomas K. McCraw", "Bruce Bartlett", "Vaclav Smil", "William W. Lewis", "Derek Parfit", "Bob Dylan", "Barry J. Nalebuff", "Jared Diamond", "James Belich", "Liaquat Ahamed", "Jose Saramago", "Robert William Fogel", "Charles Stross", "Neal Stephenson", "Suketu Mehta", "Dan Ariely", "Timur Kuran", "Steven Pinker", "Brazil Classics", "Alasdair Gray", "Judith Rich Harris", "Charles C. Mann", "Shelby Lynne", "Robert J. Shiller", "Virginia Postrel", "Joseph Heath", "Adam Phillips", "Richard H. Thaler", "Laurence J. Kotlikoff", "Brian Doherty", "John V.C. Nye", "James M. Buchanan", "F. Liszt", "Dani Rodrik", "Peter T. Leeson", "Robert D. Putnam", "Karl Ove Knausgaard", "David Grossman", "J. M. Coetzee", "Tony Judt", "Thomas Piketty", "J.S. Bach", "Julian Barnes", "Randall Collins", "Dave Eggers", "Ruth Towse", "James Surowiecki", "Jennifer Homans", "Daniel Gilbert", "Ernst Lubitsch", "Miles Davis", "William Faulkner", "David M. Levy", "Neil Seeman", "Steven Johnson", "Nassim Nicholas Taleb", "Kate Christensen", "Margaret Atwood", "Camille Paglia", "Richard Dawkins", "XTC", "Michael Hofmann", "Javier Cercas", "Sudhir Alladi Venkatesh", "Jason Brennan", "St. Vincent", "Vikram Seth", "Matthew Yglesias", "Gregg Easterbrook", "Daron Acemoglu", "Richard Florida", "Jeffrey A. Miron", "Robert D. Kaplan", "Paul Seabright", "Orson Scott Card", "Barbara Demick", "Gary B. Gorton", "Harold Bloom", "Perry  Mehrling", "Charles Duhigg", "John Gimlette", "David Warsh", "Michael J. Sandel", "Robert Pozen", "Ted Hughes", "Chris Mooney", "Megan McArdle", "Russ Roberts", "Garry Kasparov", "Apichatpong Weerasethakul", "Ryan Avent", "Sebastian Mallaby", "Dalton Conley", "Daniel Kahneman", "Carl Theodor Dreyer", "Richard B. McKenzie", "Vincent Ward", "Alan Macfarlane", "Michel Houellebecq", "Jeremy Adelman", "Diane Coyle", "Thomas Sowell", "Alberto Alesina", "Brian Wansink", "Ted Gioia", "Michael Dirda", "Claire Messud", "Hal Whitehead", "Italo Calvino", "Friedrich Durrenmatt", "Max Hastings", "Stephen King", "Jung Chang", "Angus Burgin", "Kinji Fukasaku", "Amity Shlaes", "George Anthony Selgin", "Umberto Eco", "Rafael Yglesias", "Joel Waldfogel", "Abhijit Banerjee", "Edward Castronova", "Vikram Chandra", "W.A. Mozart", "Robert C. Allen", "Joseph E. Stiglitz", "David Edgerton", "David Brooks", "Daniel B. Klein", "Fleming & John", "Kobo Abe", "Joel Mokyr", "Alan Hollinghurst", "Denis Johnson", "Adam Hochschild", "Daniel Akst", "Philip Auerswald", "Bartley J. Madden", "Ron Chernow", "Seth Roberts", "Mancur Olson", "Ben Goldacre", "Jerry Avorn", "Gordon S. Wood", "Paul Blustein", "Ethan Coen", "Juana Molina", "Dan Jurafsky", "Michel Foucault", "Olaf Stapledon", "H. G. Wells", "John Keay", "Eric Schlosser", "Lawrence Lessig", "David Wessel", "William J. Baumol", "Gore Vidal", "Richard Polsky", "Emeric Pressburger", "Ayn Rand", "Colm Toibin", "James R. Flynn", "Nick Lane", "David W. Galenson", "Daniel Shaviro", "Geoffrey Miller", "Brian De Palma", "David Brin", "Stephen J. Dubner", "Barry Schwartz", "Patrick French", "Michael Heller", "Kyle Gann", "Meghan O'Rourke", "Takashi Miike", "Robert E. Rubin", "Paul Auster", "Jorge Luis Borges", "Richard Rhodes", "John Reader", "Marc Levinson", "Bari Wood", "Ian Ayres", "Thomas J. Sargent", "Matthew E. Kahn", "Akira Kurosawa", "F. H. Buckley", "Juan Rulfo", "Tim Blanning", "George A. Akerlof", "Elizabeth Pisani", "Price V. Fishback", "Roger Scruton", "Walter Isaacson", "Alexander J. Field Ph.D.", "MILES DAVIS", "Amy Sackville", "John Sutherland", "David Roodman", "Susanna Clarke", "Friedrich A. Von Hayek", "Craig Thompson", "Tom Segev", "Charles F. Manski", "Anatol Lieven", "Henry Hazlitt", "Daniel Tudor", "Kanye West", "David Mitchell", "David Rothenberg", "Barry Cunliffe", "Robert D. Hormats", "Robert Nelson", "Robert Ehrlich", "Matt Ridley", "Hermann Broch", "Jonathan Schlefer", "Audur Ava Olafsdottir", "Louvin Brothers", "Nicholas Carr", "Lane Kenworthy", "Ammon Shea", "Clive James", "Alan Weisman", "Nirvana", "Roger Jones", "Michael Pettis", "Robert L. Tignor", "Michael Crichton", "Ramachandra Guha", "Peter H. Schuck", "Nathan Myhrvold", "Iciar Bollain", "Robert Higgs", "Thelonious Monk", "Noah J. Goldstein Ph.D.", "Walter Salles", "Jennifer Egan", "Michael U. Klein", "Daniel C. Dennett", "Ilya Somin", "John McMillan", "Miguel Palacios Lleras", "Dora L. Costa", "Daniel Yergin", "Kenzaburo Oe", "Hans Magnus Enzensberger", "Bruce Fink", "Stephane Audeguy", "Gabriel Garcia Marquez", "Raghuram G. Rajan", "Herman Melville", "Viviana A. Zelizer", "Donald B. Kraybill", "Bethany McLean", "Beck", "Jeffrey J. Selingo", "Robert L. Hetzel", "Dean Karlan", "Paco Underhill", "Vasily Grossman", "Ian McEwan", "Alan Taylor", "Edward Conard", "Ralph Nader", "Anna Reid", "Peter Baldwin", "Isaac Martin", "David A. Price", "Jonathan Gruber", "John Mordechai Gottman", "Penelope Fitzgerald", "Simon Johnson", "Jannik Johansen", "William Easterly", "Dani Kollin", "Xavier Beauvois", "Morten Jerven", "David E. Nye", "Henry Marsh", "David Alan Stockman", "Adam Tooze", "Paul Starr", "Soren Kragh-Jacobsen", "Ben Casnocha", "James Glassman", "Laurence C. Smith", "Rush", "Gunter Grass", "Arthur Herman", "Jonathan Chait", "Dale Peterson", "Stuart Buck", "Ornette Coleman", "Peter L. Bernstein", "Lawrence Wright", "John Updike", "Yimou Zhang", "Ustad Ali Akbar Khan", "Wayne Koestenbaum", "Thomas Hardy", "Peter Watson", "Anne Tyler", "Luis Fernando Verissimo", "Robert Alter", "Michael Chabon", "Santiago Roncagliolo", "Doris Lessing", "Charles Kenny", "Peter Pringle", "Donald J. Boudreaux", "David Thompson", "Alfred D. Chandler Jr.", "John Coltrane", "Donald Shoup", "John Drury", "Mastodon", "William St Clair", "Michael D. Whinston", "Valen E. Johnson", "Gao Xingjian", "William J. Stuntz", "Tim O'Brien", "Peter Kaminsky", "Steve Coll", "David Schmidtz", "Henry Miller", "John Micklethwait", "Sarah Polley", "Prof. Martha White Paas", "Michael Stein", "A. Zee", "Charles D. Ellis", "Sei Shonagon", "Edward R. Tufte", "Justin Yifu Lin", "Carlo Grante", "Avinash K. Dixit", "James K. Galbraith", "Edward Hugh", "Christopher Paolini", "Evan Osnos", "Milan Kundera", "David Hackett Fischer", "E. Roy Weintraub", "William G. Bowen", "Brian Greene", "Dante Alighieri", "Jonathan V. Last", "Michael Blastland", "Dean Keith Simonton", "Robert Wright", "Fernando Pessoa", "Mary Roach", "Alex Shoumatoff", "Oscar Peterson", "R. Wagner", "Johan Van Overtveldt", "David Marsh", "Louis Menand", "Julian Barbour", "Edward Jay Epstein", "Marcia Angell", "William A. Haseltine", "Albert Sanchez Pinol", "Salman Rushdie", "Chris Goodall", "Edward Luce", "Javier Marias", "My Bloody Valentine", "Katerina Clark", "Jean Hatzfeld", "Max Frisch", "George G. Szpiro", "David Henderson", "Stephen M. Bainbridge", "Ezra F. Vogel", "John R. Lott Jr.", "GRAM PARSONS", "Tim WORSTALL", "James Fallows", "Robert J. Barro", "Eric Kaplan", "Jean Tirole", "Ha-Joon Chang", "Nancy Scheper-Hughes", "Stanislaw Lem", "Stewart Brand", "Bruce Springsteen", "James Boswell", "Fleet Foxes", "Adam Smith", "John B. Taylor", "Andrew Gelman", "Ralph Waldo Emerson", "Kevin Phillips", "Lizzie Collingham", "Nigel Barber", "Lester R. Brown", "Christopher Clark", "Mark Blaug", "Don Thompson", "Robert Bresson", "Giacomo Casanova", "Yves Nat", "J.C. Bradbury", "Peter Temin", "Jo Walton", "Stephen L. Carter", "Michael Berube", "Neil Powell", "Ross Douthat", "Dan Simmons", "Robert D. Cooter", "Rose George", "Mara Hvistendahl", "Alex Von Tunzelmann", "George Dyson", "Frank Brady", "Gareth Evans", "Andy Weir", "Francisco Goldman", "Jonah Goldberg", "Colin M. MacLachlan", "Hazel Rowley", "Peter Hoeg", "Bill Forsyth", "Ruchir Sharma", "I. Bostridge", "Gabriel Axel", "Masahisa Fujita", "William Flesch", "Andrew Levy", "Lee Smolin", "John Merrifield", "David J. Berri", "Eugene Rogan", "Liza Mundy", "Joshua Gans", "Matthew Lynn", "Gail Hareven", "James Joyce", "Bela Tarr", "Michael Axworthy", "Drew Daniel", "Bruce C. N. Greenwald", "Kevin Macdonald", "Michael Nielsen", "Bola Sete", "J. Eric Oliver", "Tom Slee", "Jim Lacey", "Andrew Roberts", "Eduardo Giannetti", "Edward St. Aubyn", "Jeffrey C. Williams", "Wilco"];

}).call(this);
