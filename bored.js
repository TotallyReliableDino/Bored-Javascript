// just to clean my name and dignity, i did NOT make these jokes or comments, i asked chat gpt for msot of them,
// also it was his whole idea to make this >:(
(function(global) {

    class Bored {

        constructor() {

            this.jokes = [

                "Why don't programmers like nature? It has too many bugs!",

                "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",

                "Why do Java developers wear glasses? Because they don't see sharp!",

            ];

            this.motivationalQuotes = [

                "You are a majestic sloth in a world of caffeinated squirrels!",

                "If at first, you don’t succeed, redefine success.",

                "Remember, even a stopped clock is right twice a day!",

            ];

            this.danceMoves = [

                "Do the Floss while hopping on one foot!",

                "Cha Cha Slide in reverse!",

                "The Robot with jazz hands!",

            ];

            this.nonsensePhrases = [

                "The purple toaster sings opera to the confused spaghetti.",

                "A flying cow plays chess with a moonbeam.",

                "Your socks are plotting against your shoes.",

            ];

        }

        tellJoke() {

            const randomIndex = Math.floor(Math.random() * this.jokes.length);

            console.log(this.jokes[randomIndex]);

        }

        motivate() {

            const randomIndex = Math.floor(Math.random() * this.motivationalQuotes.length);

            console.log(this.motivationalQuotes[randomIndex]);

        }

        danceMove() {

            const randomIndex = Math.floor(Math.random() * this.danceMoves.length);

            console.log(this.danceMoves[randomIndex]);

        }

        procrastinate(duration) {

            console.log(`You've decided to procrastinate for ${duration} minutes...`);

            const extendedDuration = duration + Math.floor(Math.random() * 3);

            setTimeout(() => {

                console.log(`Just kidding! You actually procrastinated for ${extendedDuration} minutes!`);

            }, duration * 60000);

        }

        adoptPetRock() {

            return {

                talk: () => {

                    console.log("I’m just a rock, but I love your company!");

                },

            };

        }

        generateNonsense() {

            const randomIndex = Math.floor(Math.random() * this.nonsensePhrases.length);

            return this.nonsensePhrases[randomIndex];

        }

    }

    // Attach Bored to the global object

    global.Bored = Bored;

})(this);
