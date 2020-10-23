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
                description: 'Some option 1',
                result: `Some result 1`,
                energy: 0,
                food: -20,
                weather: 'hot',
            }, {
                id: 'diego2',
                description: 'Some option 2',
                result: `Some result 2`,
                energy: -20,
                food: -20,

            }, {
                id: 'diego3',
                description: 'Some option 3',
                result: `Some result3`,
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
                description: 'Some option 1',
                result: `Some result 1`,
                energy: +20,
                food: -20,
            }, {
                id: 'la2',
                description: 'Some option 2',
                result: `Some result 2`,
                energy: -3,
                food: -20,
            }, {
                id: 'la3',
                description: 'Some option 3',
                result: `Some result3`,
                energy: 0,
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
                description: 'Some option 1',
                result: `Some result 1`,
                energy: +20,
                food: -20,
            }, {
                id: 'grapevine2',
                description: 'Some option 2',
                result: `Some result 1`,
                energy: -3,
                food: -20,
            }, {
                id: 'grapevine3',
                description: 'Some option 3',
                result: `Some result3`,
                energy: 0,
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
                description: 'Some option 1',
                result: `Some result 1`,
                energy: +20,
                food: -20,
            }, {
                id: 'bigSur2',
                description: 'Some option 2',
                result: `Some result 1`,
                energy: -3,
                food: -20,
            }, {
                id: 'bigSur3',
                description: 'Some option 3',
                result: `Some result3`,
                energy: 0,
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
                id: 'la1',
                description: 'Some option 1',
                result: `Some result 1`,
                energy: +20,
                food: -20,
            }, {
                id: 'la2',
                description: 'Some option 2',
                result: `Some result 1`,
                energy: -3,
                food: -20,
            }, {
                id: 'la3',
                description: 'Some option 3',
                result: `Some result3`,
                energy: 0,
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
                description: 'Some option 1',
                result: `Some result 1`,
                energy: +20,
                food: -20,
            }, {
                id: 'napa2',
                description: 'Some option 2',
                result: `Some result 1`,
                energy: -3,
                food: -20,
            }, {
                id: 'napa3',
                description: 'Some option 3',
                result: `Some result3`,
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
                description: 'Some option 1',
                result: `Some result 1`,
                energy: +20,
                food: -20,
            }, {
                id: 'shasta2',
                description: 'Some option 2',
                result: `Some result 1`,
                energy: -3,
                food: -20,
            }, {
                id: 'shasta3',
                description: 'Some option 3',
                result: `Some result3`,
                energy: 0,
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
                description: 'Some option 1',
                result: `Some result 1`,
                energy: +20,
                food: -20,
            }, {
                id: 'weed2',
                description: 'Some option 2',
                result: `Some result 1`,
                energy: -3,
                food: -20,
            }, {
                id: 'weed3',
                description: 'Some option 3',
                result: `Some result3`,
                energy: 0,
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
                description: 'Some option 1',
                result: `Some result 1`,
                energy: +20,
                food: -20,
            }, {
                id: 'ashland2',
                description: 'Some option 2',
                result: `Some result 1`,
                energy: -3,
                food: -20,
            }, {
                id: 'ashland3',
                description: 'Some option 3',
                result: `Some result3`,
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
                id: 'eugene1',
                description: 'Some option 1',
                result: `Some result 1`,
                energy: +20,
                food: -20,
            }, {
                id: 'eugene2',
                description: 'Some option 2',
                result: `Some result 1`,
                energy: -3,
                food: -20,
            }, {
                id: 'eugene3',
                description: 'Some option 3',
                result: `Some result3`,
                energy: 0,
            }]
    }, {

        id: 'salem',
        title: 'Salem',
        image: 'salem.png',
        nextLandmark: 'Woodburn',
        map: {
            top: '20%',
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
                description: 'Some option 1',
                result: `Some result 1`,
                energy: +20,
                food: -20,
            }, {
                id: 'salem2',
                description: 'Some option 2',
                result: `Some result 1`,
                energy: -3,
                food: -20,
            }, {
                id: 'salem3',
                description: 'Some option 3',
                result: `Some result3`,
                energy: 0,
            }]
    }, {

        id: 'woodburn',
        title: 'Woodburn',
        image: 'woodburn.png',
        nextLandmark: 'Portland',
        map: {
            top: '15%',
            left: '17%'
        },
        description: 'Woodburn is a city in Marion County, Oregon, United States. Incorporated in 1889, the community had been platted in 1871 after the arrival of the railroad. The city is located in the northern end of the Willamette Valley between Portland and Salem.',
        choices: [
            {
                id: 'map',
                description: 'Check out the map'

            }, {
                id: 'inventory',
                description: 'Check inventory'
            },
            {
                id: 'woodburn1',
                description: 'Some option 1',
                result: `Some result 1`,
                energy: +20,
                food: -20,
            }, {
                id: 'woodburn2',
                description: 'Some option 2',
                result: `Some result 1`,
                energy: -3,
                food: -20,
            }, {
                id: 'woodburn3',
                description: 'Some option 3',
                result: `Some result3`,
                energy: 0,
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