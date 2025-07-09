const { default: mongoose } = require("mongoose")
const monguse = require("mongoose")


const bookSchema = new monguse.Schema({
    title:{
        type:String,
        require:[true,"you shold write your title"],
        minLength :[3,"you shold write more then 5 char"],
        maxLength :[70,"you shold write less then 70 char"],
        validate: [/^[a-zA-Z0-9]+$/,"please write onlie char"]
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "author",
        require:[true,"you shold write auhtor name"],
        minLength :[3,"you shold write more then 5 char"],
        maxLength :[70,"you shold write less then 70 char"],
    },
    dataOfRelis:{
        type:Date, 
        require:[true,"you shold write your data of Relis"]
    },
    desc:{
        type:String,
        require:[true,"you shold write your desc"],
        minLength :[5,"you shold write more then 5 char"],
        maxLength :[450,"you shold write less then 70 char"],
    },
    period:{
        type:String,
        require:[true,"you shold write your period"],
        enum:{
            values:["Temuriylar davri","Jadid adabiyoti","Sovet davri","Mustaqillik davri"],
            message:"idk thos period"
        }
    },
    lost:{
        type:Number,
        default:0,
        require:false,
        min:0,
        max:150
    },
    rating:{
        type:Number,
        default:2.5,
        require:true,
        min:0,
        max:5
    },
    janr:{
        type:String,
        require:[true,"you shold write your janr"],
        enum:{
            values:["Fiction", "Fantasy", "Science", "Mystery", "Thriller", "Horror", "Romance", "Historical" , "Non-fiction", "Biography", "Self-help","Science", "Psychology"],
            message:"write another janr"
        }
    },
},
{
    versionKey:false,
    timestamps:true
}

) 

const bookModul = monguse.model("book",bookSchema)


module.exports = {
    bookModul
}