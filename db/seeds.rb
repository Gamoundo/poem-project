# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Song.destroy_all
Poem.destroy_all






akil = User.create!({name: "Akil", password: "Sgetti"})
joy = User.create!({name: "Joy", password: "H8teR"})
steven = User.create!({name: "Steven", password: "galaxy"})
dio = User.create!({name: "Dio!", password: "It is me"})
tony = User.create!({name: "Chopper", password: "Not@pet"})







sulking = Song.create!({
    name: "Sulking",
    genre: "sad",
    url: "/Users/akilgriff/Downloads/Sulking - William Rosati.mp3"
})

awaken = Song.create!({
    name: "Awaken",
    genre: "inspirational",
    url: "/Users/akilgriff/Downloads/Awaken - Anno Domini Beats.mp3"
})


really = Song.create!({
    name: "Really Really Doe",
    genre: "inspirational",
    url: "/Users/akilgriff/Downloads/Really Really Doe - Diamond Ortiz.mp3"
})



meadows = Song.create!({
    name: "Meadows",
    genre: "Happy",
    url: "/Users/akilgriff/Downloads/Meadows - Ramzoid.mp3"
})


treat_yourself = Song.create!({
    name: "Treat Yourself",
    genre: "Happy",
    url: "/Users/akilgriff/Downloads/Treat Yourself - Dyalla.mp3"
})

steps= Song.create!({
    name: "Steps",
    genre: "inspirational",
    url: "/Users/akilgriff/Downloads/Steps - Anno Domini Beats.mp3"
})

ob1 = Song.create!({
    name: "OB1",
    genre: "sad",
    url: "/Users/akilgriff/Downloads/OB1 - RalphReal.mp3"
})

words = Song.create!({
    name: "American Vernacular",
    genre: "inspirational",
    url: "/Users/akilgriff/Downloads/American Vernacular - RAGE.mp3"
})

short = Song.create!({
    name: "I Can't Reach",
    genre: "happy",
    url: "/Users/akilgriff/Downloads/I Can't Reach - Verified Picasso.mp3"
})

regrets = Song.create!({
    name: "Regrets",
    genre: "sad",
    url:  "/Users/akilgriff/Downloads/Regrets - Causmic.mp3"
})

sleepwalker = Song.create!({
    name: "Sleepwalker",
    genre: "happy",
    url: "/Users/akilgriff/Downloads/Sleepwalker - TrackTribe.mp3"
})

shame = Poem.create!({
    name: "Shame",
    genre: "inspirational",
    body: "Is it something that I can eat? No, then I don’t need it. \n
    It is something I have to feed? You can keep it. \n
    It is not unique? Then why breed it? \n
    It has an upkeep cost? I’ll stick with free shit. \n
    Something that is supposed be paired with me? I’m a lot as it is, don’t \n need a side dish. \n
    
     Shame will seek to embrace you, but it only intends to hold you back. \n
    If you don’t stretch out your hands, shame will just be a thing that you \n lack.",
    user: akil,
    song: awaken
})


spiraling = Poem.create!({
    name: "Spiraling",
    genre: "sad",
    body: "I’d write this down but right now the touchdown of pen on paper isn’t a \n
    rewarding sound. \n
    I’m spiraling.\n 
    My thoughts are going round and round.\n
    There’s an excess, am I going to drown?\n
    I’m learning how terrifying a circle is.\n
    Am I at the beginning? Am I at the end?\n
    Not knowing where I am, not knowing where I want to be.\n
    It is hard not to be beside myself.\n\n 
    
    I’m in a cycle, I’m a circle.\n 
    My emotions stuck on repeat.\n
    A lil bit of hope so despair can knock me off my feet.\n
    Will I end on my back or will this end when I take a stand?",
    user: akil,
    song: sulking
})

growth = Poem.create!({
    name: "Growth",
    genre: "inspirational",
    body: "I will be better. Wishful thinking? Might be.\n
    I prefer a positive self-fulfilling prophecy.\n
    So easy to grow negativity. You only have to manage it if you don’t want it to be overgrown.\n
    It has brought me low. But now I know where I want to go.\n
    My only goal is to make changes that last.\n
    Just have to get there so no need to go fast.\n
    
    My only metric for success is where I was.\n
    Leave my past in the dust? Leave it in the dirt.\n
    Some might not be able to look at their past selves without being hurt.\n
    It will ensure I don’t lose my way.\n
    Day by day pushing me towards my prophecy.",
    user: joy,
    song: words
})

non_starter = Poem.create!({
    name: "Non-starter",
    genre: "happy",
    body: "Deadlines approaching? Why does it feel like I’m partying harder.\n
    Left it all til the last day need to start working smarter.\n
    Probably should start by doing some work first.\n
    Have to start before this gets worse.\n
    Beat drops.\n
    Maybe after this next verse.",
    user: dio,
    song: short
})

head_space = Poem.create!({
    name: "Head-Space",
    genre: "sad",
    body: "I’m in my head so much you’d swear it’s comfortable.\n
    It’s like I never leave, I can see why this is easy to believe.\n
    But I’m just incontinent, self defecating so too ashamed to show my face.\n
    Don’t want anyone else to know my incompetence.\n
    Every time I think I’m doing all right that gets drowned out by the sound\n of my incontinence.\n\n
    
    In my head I must be a bitter old man.\n
    With so many plans thwarted.\n
    A plan gets shot down before it is event started.\n
    Another brainchild aborted the scars are eating away at me.\n
    Tired of seeing plans not born, but not in the mental state to raise them.\n 
    Healthy thoughts won’t survive in my situation.\n
    Aborted ideas just adding to my damnation.",
    user: steven,
    song: ob1
})

expression = Poem.create!({
    name: "Expression",
    genre: "sad",
    body: "I write my thoughts down on paper.
    My stress starts to taper. My worries start to fade.
    My happiness I have to savor, I’m very quick to jade.
    A ritual to get me through those days.
    A quick fix, a patchwork have to find something that stays.
    
    Have to kick out that growing ball of negativity, or that will be all that remains.
    I’m trying, guess I have hope even though it feels like we’re estranged.
    I’d love to have more of that, but that is also a dangerous game.
    Being so positively charged drawing the worst to you, being surrounded by despair on the outside,
    I wouldn’t call that change.
    
    I’m just trying be healthy strike a balance. Don’t want to play Happy or Shame.
    Tired of the toss up. Want a game with some option selects no more 50/50.
    No more instant laugh or instant pain. Want my emotions to be like a rollercoaster not a seesaw.
    Want to be more expressive.",
    user: dio,
    song: regrets
})

smile = Poem.create!({
    name: "Smile",
    genre: "romantic?",
    body: "I used to think they were all the same.
    Saw yours, how quickly the game has changed.
    Never knew lips were so talkative. 
    Telling stories. Like how that lip curled tells me I’m in trouble.
    And there is no talking my way out of this, like you’re smiling because you’ve already designed the punishment.
    
    A smile that tells me your ears won’t work. Like you’re at an altitude where I expect you to chirp.
    At a place where you’re above all the dirt, a place where you don’t feel bound.
    A smile that tries to put me at ease, even though you are more worried than me. 
    It hurts but it was something I needed to see. You knew that better than I did.
    
    Your smile bursting through the darkness where I hid. Telling me I can’t be trapped inside my mind.
    “Don’t even try, because I will find you.”
    A smile that will make me question what time is. The day I figure out your smile is timeless.",
    user: tony,
    song: sleepwalker
})

picture = Poem.create!({
    name: "Picture",
    genre: "happy",
    body: "I paint a picture I do it vividly. Make sure to catch those eyes.
        Want you searching viciously, even though there is nothing to find.
        I paint a picture I laid it all out, nothing I’m trying to hide.
        You don’t trust my words? You don’t believe?
        Do I need to have thousands of them? I may have made pictures inside pictures.
        Nested stories but it is still just one picture, that I don’t intend to divide.
        Maybe I’m more of a big picture thinker, so my words come across as lies.
        You don’t need to look deeper, just look at what is in focus.
        It encapsulates everything that is in the background.
        You see the big picture, you’ll see everything I wanted to show.",
    user: steven,
    song: meadows
})

