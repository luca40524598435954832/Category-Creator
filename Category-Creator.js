module.exports = {
    // Set this to the name of the mod. This is what will be shown inside of Discord Bot Studio.
    // THIS FILE NAME MUST BE THIS VALUE WITH SPACES REMOVED
    name: "Category-Creator",

    // Place the author of the mod here. This is an array so you can add other authors by writing ["Great Plains Modding", "New User"]
    author: ["Hansi#5211"],

    // Place the version of the mod here.
    version: "0.1",

    // Whenever you make a change, please place the changelog here with your name. Created Send Message ~ Great Plains Modding\n
    changelog: "Created Category mod",

    // Set this to true if this will be an event. Note events wont show up in DBS.
    isEvent: false,
    
    isResponse: true,

    // Set this to true if this will be a response mod.
    isMod: true,

    // If you want to modify a core feature, set this to true.
    isAddon: false,

    // Here you can define where you want your mod to show up inside of Discord Bot Studio
    section: "Channel Action",

    // Place your html to show inside of Discord Bot Studio when they select your mod.
    html: function(data) {
        return `
            </div>
            <div class="col">
             <label>The Category Name *</label>
              <div class="input-group mb-3">
              <input class="form-control needed-field" name="category"></input><br>
             <div class="input-group-append">
           <a class="btn btn-outline-primary" role="button" id="variables" forinput="category">Insert Variable</a>
         </div>
       </div>
        `;
    },

    // When the bot is first started, this code will be ran.
    init: function() {
        console.log("The Create Creater is reday hope you have fun");
    },

    // Place your mod here.
    mod: function(DBS, message, action, args, command, index) {
        message.guild.channels.create(DBS.BetterMods.parseAction(action.category, message), { type: "GUILD_CATEGORY" });


        // Remember to use callNextAction or the bot wont continue any actions after this mod.
        DBS.callNextAction(command, message, args, index + 1);
    }
};
