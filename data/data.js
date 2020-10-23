export const landmark = [
    {
        id: 'san-diego',
        title: 'San Diego',
        image: 'san-diego.png',
        nextLandmark: 'Los Angeles',
        map: {
            top: '96%',
            left: '24%'
        },
        description: 'San Diego is a city in the U.S. state of California on the coast of the Pacific Ocean, approximately 120 miles (190 km) south of Los Angeles and immediately adjacent to the border with Mexico.',
        choices: [
            {
                id: 'map',
                description: 'Check out the map'

            }, {
                id: 'inventory',
                description: 'Check inventory'
            }, {

                id: 'diego1',
                description: 'Catch some waves and surf in La Jolla',
                result: `You didn't have the experience to surf in La Jolla and injured yourself`,
                energy: -100,
                food: 0,
                weather: 'hot',
            }, {
                id: 'diego2',
                description: 'Check out the USS Midway Museum',
                result: `You had lots of chances to get involved, testing simulators, climbing into cockpits and watching films documenting the dramatic events that took place where you stood`,
                energy: -10,
                food: -5,

            }, {
                id: 'diego3',
                description: 'Check out The San Diego Zoo',
                result: `The San Diego Zoo is rated among the best in the world and houses more than 650 species.! You saw a lot of animal but you ate a lot our snacks while visiting.`,
                energy: -20,
                food: -20,
            }]
    }, {

        id: 'los-angeles',
        title: 'Los Angeles',
        image: 'los-angeles.png',
        nextLandmark: 'The Grape Vine',
        map: {
            top: '88%',
            left: '20%'
        },
        description: 'Los Angeles officially the City of Los Angeles and often known by its initials L.A., is the largest city in California. With an estimated population of nearly four million people, it is the second-most populous city in the United States (after New York City) and the third-most populous city in North America (after Mexico City and New York City). Los Angeles is known for its Mediterranean climate, ethnic diversity, Hollywood entertainment industry, and its sprawling metropolis.',
        choices: [
            {
                id: 'map',
                description: 'Check out the map'

            }, {
                id: 'inventory',
                description: 'Check inventory'
            },
            {
                id: 'la1',
                description: 'Go on a hike with new friends you met in Runyon canyon Park',
                result: `The hike was fun and views were beautiful but the air quality was bad today`,
                energy: 10,
                food: -30,
            }, {
                id: 'la2',
                description: 'Spend the night in LA and hit the social scene',
                result: `You had a great time but you ate alot your travel snacks after the club`,
                energy: -3,
                food: -20,
            }, {
                id: 'la3',
                description: 'Go shopping ',
                result: `You found some really great stuff to wear on your trip, but you spent hour in the dressing rooms`,
                energy: 0,
                food: 0
            }]
    }, {

        id: 'grapevine',
        title: 'Grapevine',
        image: 'grapevine.png',
        nextLandmark: 'Big Sur',
        map: {
            top: '80%',
            left: '14%'
        },
        description: 'Grapevine is an unincorporated community in Kern County, California, at the southern end of the San Joaquin Valley. The small village is directly adjacent to Interstate 5 and consists mainly of travelers and roadside services. At an elevation of 1,499 feet (457 m), the community is located at the foot of a grade known as The Grapevine that starts at the mouth of Grapevine Canyon, immediately south of the community, and ascends the canyon to the Tejon Pass, which separates the Tehachapi Mountains from the San Emigdio Mountains via Interstate 5 (formerly U.S. Route 99).',
        choices: [
            {
                id: 'map',
                description: 'Check out the map'

            }, {
                id: 'inventory',
                description: 'Check inventory'
            },
            {
                id: 'grapevine1',
                description: 'Stop at a gas station.',
                result: `Buy a gas station hot dog spend the rest of the day in the bathroom.`,
                energy: +10,
                food: -20,
            }, {
                id: 'grapevine2',
                description: 'Speed down I5',
                result: `With the wind in your hair and Bon Jovi blaring, you fail to notice the cop who pulls you over for driving 90mph. You spend the night in jail and have to post bail to get out.`,
                energy: -3,
                food: 0,
            }, {
                id: 'grapevine3',
                description: 'Go Pyramid Lake ',
                result: `This detour cost you a couple of days, but it was worth it. You get jet ski's, paddle boats, and soak up the sun while you take in the lake's scenic beauty.`,
                energy: +5,
                food: -35

            }]
    }, {

        id: 'big-sur',
        title: 'Big Sur',
        image: 'big-sur.png',
        nextLandmark: 'San Francisco',
        map: {
            top: '67%',
            left: '6%'
        },
        description: 'Big Sur is a rugged stretch of California’s central coast between Carmel and San Simeon. Bordered to the east by the Santa Lucia Mountains and the west by the Pacific Ocean, it’s traversed by narrow, 2-lane State Route 1, known for winding turns, seaside cliffs and views of the often-misty coastline.',
        choices: [
            {
                id: 'map',
                description: 'Check out the map'

            }, {
                id: 'inventory',
                description: 'Check inventory'
            },
            {
                id: 'bigSur1',
                description: 'Stop and take the Bird Island Trail ',
                result: `You were taken to a cove that seems like it isn't even real. The water color is spectacular and the sand looks so soft and the Sea Lions are just laying there sun bathing`,
                energy: +30,
                food: 0,
            }, {
                id: 'bigSur2',
                description: 'Stay at a campground near the beach',
                result: `The seals found your food`,
                energy: -3,
                food: -20,
            }, {
                id: 'bigSur3',
                description: 'Continue to drive through and take in the scenery',
                result: `You got into an accident looking at the scenery and not the road`,
                energy: -100,
                food: 0
            }]
    }, {

        id: 'san-francisco',
        title: 'San Francisco',
        image: 'san-francisco.png',
        nextLandmark: 'Napa Valley',
        map: {
            top: '59%',
            left: '5%'
        },
        description: 'San Francisco, officially the City and County of San Francisco, is the cultural, commercial, and financial center of Northern California. San Francisco is the 16th most populous city in the United States, and the fourth most populous in California.',
        choices: [
            {
                id: 'map',
                description: 'Check out the map'

            }, {
                id: 'inventory',
                description: 'Check inventory'
            },
            {
                id: 'sf1',
                description: 'Head to downtown.',
                result: `You failed to check for local activities before heading downtown, and unknowing got swept up in gay pride festivities. Twenty-four-hours later, you wake up with a wicked hangover and only one shoe.`,
                energy: -20,
                food: -25,
            }, {
                id: 'sf2',
                description: 'Checkout Chinatown',
                result: `You arrive at the tea rooms and mah jong parlors of Chinatown one of the funnest places, the lingering hippie chic of Haight-Ashbury. You decide to stay and but leave hungry and tired from the sleepy time tea.`,
                energy: -3,
                food: -20,
            }, {
                id: 'sf3',
                description: 'Visit Ghirardelli Square.',
                result: `After hitting up several stores, you stumble into the Ghirardelli chocolate shop, where you gorge yourself on far too much sugar.`,
                energy: 5,
                food: 20
            }]
    }, {

        id: 'napa-valley',
        title: 'Napa Valley',
        image: 'napa-valley.png',
        nextLandmark: 'Shasta',
        map: {
            top: '55%',
            left: '9%'
        },
        description: 'Napa County is north of San Francisco, in California. Its known for hundreds of hillside vineyards in the Napa Valley wine region. In the city of Napa, Oxbow Public Market features regional gourmet food. The Napa Valley Wine Train is a vintage locomotive and traveling restaurant running through the valley.',
        choices: [
            {
                id: 'map',
                description: 'Check out the map'

            }, {
                id: 'inventory',
                description: 'Check inventory'
            },
            {
                id: 'napa1',
                description: 'Take an Aloft Balloon Rides over wine country',
                result: `The balloons gently rise 1,000 to 2,000 feet and float over some of Napa Valley's most famous vineyards, including Robert Mondavi and Domaine Chandon; on clear winter mornings the sight lines go all the way to the snowcapped Sierra Nevadas. After landing, the tour ends with breakfast and a glass of sparkling wine. You are feeling refreshed`,
                energy: +20,
                food: 0,
            }, {
                id: 'napa2',
                description: 'Visit Culinary Institute of America at Greystone',
                result: `Serious seekers of culinary and wine knowledge have flocked to this Napa Valley campus since 1995. The roster of food and wine courses here is formidable, ranging from one-day, hands-on cooking demonstrations—in artisanal bread-baking, say, or the flavors of Asia—to months-long professional certification programs for ambitious chefs and wine experts. You are not a food and wine expert`,
                energy: -3,
                food: -20,
            }, {
                id: 'napa3',
                description: 'Napa Valley Wine Train',
                result: `The three-hour tour includes the option of a multi-course lunch or dinner, as well as a private tour of one or two esteemed wineries, such as Grgich Hills and Domaine Chandon. However, you had too much to drink and have to recover`,
                energy: 0,
            }]
    }, {

        id: 'shasta',
        title: 'Shasta',
        image: 'shasta.png',
        nextLandmark: 'Weed',
        map: {
            top: '39%',
            left: '11%'
        },
        description: 'Shasta is a census-designated place in Shasta County, California, United States. Shasta sits at an elevation of 843 feet. The 2010 U.S. Census reported Shasta population was 1,771. Shasta State Historic Park located at Shasta is a ghost town and California State Historic Park.',
        choices: [
            {
                id: 'map',
                description: 'Check out the map'

            }, {
                id: 'inventory',
                description: 'Check inventory'
            },
            {
                id: 'shasta1',
                description: 'Go hiking up Shasta',
                result: `Walking on the trail you hear a noise above you. You look up to see a UFO. The space ship abducts you and you loose a week. Not remembering your name.`,
                energy: +20,
                food: -20,
            }, {
                id: 'shasta2',
                description: 'Go to a weed farm!',
                result: `At the weed farm you eat to much edibles and pass out for a few hours and wake up with the munchies.`,
                energy: -25,
                food: -20,
            }, {
                id: 'shasta3',
                description: 'Hit up a waterfall',
                result: `You get lost en route to Whiskeytown National Forest and end up in the heart of Redding, Ca. You see a group of people and stop to ask for directions. They invite you inside. You follow but quickly regret the decision when you realize you have been sucked into a charismatic megachurch twilight-zone. You lose 6 hours trying to politely excuse yourself from a prayer circle. `,
                energy: -20,
                food: -3,
            }]
    }, {

        id: 'weed',
        title: 'Weed',
        image: 'weed.png',
        nextLandmark: 'Ashland',
        map: {
            top: '36%',
            left: '12%'
        },
        description: 'The City of Weed, California is nestled at the base of Mount Shasta in the Cascade Mountains and half way between San Francisco and Portland.',
        choices: [
            {
                id: 'map',
                description: 'Check out the map'

            }, {
                id: 'inventory',
                description: 'Check inventory'
            },
            {
                id: 'weed1',
                description: 'Alpaca on the Rocks',
                result: `You discover a local farm store and get to meet alpacas, mini horses, and donkeys! You get caught up by your love of mini horses and lose 3 hours.`,
                energy: +20,
                food: -20,
            }, {
                id: 'weed2',
                description: 'Find the WEED',
                result: `Living up to the town name, you decide too to try to find some weed. You end up looking all night, but all the shops are closed. You leave disappointed and empty-handed.`,
                energy: -3,
                food: -20,
            }, {
                id: 'weed3',
                description: 'Go white water rafting',
                result: `Head out on the Klamath River and loose every thing in the white water rapids.`,
                energy: 0,
                food: 0,
            }]
    }, {

        id: 'ashland',
        title: 'Ashland',
        image: 'ashland.png',
        nextLandmark: 'Eugene',
        map: {
            top: '30%',
            left: '11%'
        },
        description: 'Home to the world-famous Oregon Shakespeare Festival and ranked in the top 10 of “The 100 Best Small Art Towns in America,” Ashland is a cultural hot spot, with award-winning galleries, theaters and restaurants bursting from its seams. Nestled at the base of the Siskiyou and Cascade mountain ranges, Ashland has a reputation for great outdoor recreation in the city limits and beyond. And with the famous Mt. Ashland Ski Area nearby, fun stays in Ashland year-round.',
        choices: [
            {
                id: 'map',
                description: 'Check out the map'

            }, {
                id: 'inventory',
                description: 'Check inventory'
            },
            {
                id: 'ashland1',
                description: 'Wolf Creek Tavern',
                result: `There is no way you can pass the Wolf Creek Tavern from your favorite show, Ghost Adventures, without stopping. You walk to see if the place lives up to your expectations; seconds later, you run out shaking in terror with soiled pants.`,
                energy: +20,
                food: -20,
            }, {
                id: 'ashland2',
                description: 'Oregon Shakespeare Festival',
                result: `You can't drive through Ashland and not hit up the theatre. You get to the box office and snag your tickets to a modern adaptation of Hamlet. Little did you realize you picked the LONGEST Shakespearian play. Five hours later, you crawl starving to the nearest brewery.`,
                energy: -3,
                food: -20,
            }, {
                id: 'ashland3',
                description: 'Visit Grizzly Peak',
                result: `Walking down the mountain trail, you take in the views of Bear Creek Valley. Suddenly you notice a bear coming at you. Panicking, you climb up the nearest tree and get stuck there till the next morning.`,
                energy: 0,
            }]
    }, {

        id: 'eugene',
        title: 'Eugene',
        image: 'eugene.png',
        nextLandmark: 'Salem',
        map: {
            top: '25%',
            left: '11%'
        },
        description: 'Eugene is a city in Oregon, on the Willamette River. The University of Oregon is home to the Northwest-focused Museum of Natural and Cultural History and the Jordan Schnitzer Museum of Art, known for its Asian collections.',
        choices: [
            {
                id: 'map',
                description: 'Check out the map'

            }, {
                id: 'inventory',
                description: 'Check inventory'
            },
            {
                id: 'eugene1',
                description: 'Scavenger Hunt',
                result: `You join a group of barefooted locals to wander around downtown for a photo scavenger hunt while walking around trying to find the next obstacle; you end up making a wrong turn and land at a hookah lounge. You get talked into scraping the scavenger hunt to smoke some shisha instead. You lose 3 hours.`,
                energy: +20,
                food: -20,
            }, {
                id: 'eugene2',
                description: 'Willamette Valley Cheese',
                result: `At a rest stop, you saw a flyer for the Willamette Valley Cheese Festival. The score, that's happening today! You may have said screw my lactose allergy, but your gut said screw you! You spend the rest of the evening stuck in a porta-potty regretting your decision.`,
                energy: -3,
                food: -20,
            }, {
                id: 'eugene3',
                description: 'Explore Oregon University',
                result: `While walking around the University, a group of college students runs past streaking and yelling GO Ducks! You only live once, so you decide to join them. You get arrested by campus security and lose two days trying to prove that you are not a student.`,
                energy: -10,
                food: -30
            }]
    }, {

        id: 'salem',
        title: 'Salem',
        image: 'salem.png',
        nextLandmark: 'Portland',
        map: {
            top: '20%',
            left: '13%'
        },
        description: 'Salem is the capital city of Oregon. Set amid a park with gardens, the domed Oregon State Capitol contains a collection of art by Oregon artists. The Hallie Ford Museum of Art includes works by Pacific Northwest and Native American artists.',
        choices: [
            {
                id: 'map',
                description: 'Check out the map'

            }, {
                id: 'inventory',
                description: 'Check inventory'
            },
            {
                id: 'salem1',
                description: 'Hike Spencer Butte',
                result: `While visiting this iconic trail, you hike to the top and take in the breathtaking few, but you lose your balance and slip off the edge in the process. You lose 3 days waiting for search and rescue to find you.`,
                energy: -60,
                food: -40,
            }, {
                id: 'salem2',
                description: 'Bush’s pasture Park',
                result: `While walking around the 90-acre public park, you notice a homeless person sleeping. You give them 20 dollars, most of your food, and wish them well.`,
                energy: 15,
                food: -10,
            }, {
                id: 'salem3',
                description: 'Local Entertainment',
                result: `Your car overheats just outside Salem, and you hitch a ride to the shop with the tow-truck. The mechanic says it'll take a day to get it fixed but kindly offers you free tickets to the local opera house. Oprea is not really your thing, but with nothing else to do, you decide to give it a try.`,
                energy: 0,
                food: 20
            }]
    }, {

        id: 'portland',
        title: 'Portland',
        image: 'portland.png',
        map: {
            top: '12%',
            left: '18%'
        },
        description: 'Portland, Oregon’s largest city, sits on the Columbia and Willamette rivers, in the shadow of snow-capped Mount Hood. It’s known for its parks, bridges and bicycle paths, as well as for its eco-friendliness and its microbreweries and coffeehouses. Iconic Washington Park encompasses sites from the formal Japanese Garden to Oregon Zoo and its railway. The city hosts thriving art, theater and music scenes',

    }];