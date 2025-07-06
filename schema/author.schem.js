const monguse = require("mongoose")


const authorSchema = new monguse.Schema({
    fuleName:{
        type:String,
        require:[true,"you shold write your name"],
        minLength :[5,"you shold write more then 5 char"],
        maxLength :[70,"you shold write less then 70 char"],
        validate: [/^[a-zA-Z]+$/,"please write onlie char"]

    },
    dataOfBirth:{
        type:Date, 
        require:[true,"you shold write your data of birth"]
    },
    desc:{
        type:String,
        require:[true,"you shold write your desc"],
        minLength :[5,"you shold write more then 5 char"],
        maxLength :[450,"you shold write less then 70 char"],
    },
    Bio:{
        type:String,
        require:[true,"you shold write your bio"],
        minLength :[5,"you shold write more then 5 char"],
        maxLength :[200,"you shold write less then 70 char"],
    },
    period:{
        type:String,
        require:[true,"you shold write your period"],
        enum:{
            values:["Temuriylar davri","Jadid adabiyoti","Sovet davri","Mustaqillik davri"],
            message:"idk thos period"
        }
    },
    creativity:{
        type:String,
        require:[true,"you shold write your creativity "]
    },
    region:{
        type:String,
        require:[true,"you shold write your region"],
        
    },
    dataOfDeth:{
        type:Date,
        require:false
    },
    countOfbook:{
        type:Number,
        default:0,
        require:false,
        min:0,
        max:150
    },
},
{
    versionKey:false,
    timestamps:true
}

) 

const authorModul = monguse.model("author",authorSchema)


module.exports = {
    authorModul
}