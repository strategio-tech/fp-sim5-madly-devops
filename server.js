const express =require("express");
const mongoose =require("mongoose");
const port=3001;
const app= express();
const cors =require("cors");
app.use(express.urlencoded({
  extended:true
}));
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/TimerDB");
const timerSchema = new mongoose.Schema({
  eventName:String,
  eventDate:String,
  eventTime:String,
  color:String,
});
const Timer = mongoose.model("Timer",timerSchema);
app.route("/timers")
.get((req,res)=>{
  Timer.find({},(err,timers)=>{
    if(err) res.send(err);
    else{
      res.json(timers);
    }
  })
})
.post((req,res)=>{
  const timer = new Timer({
    eventName: req.body.eventName,
    eventDate:req.body.eventDate,
    eventTime:req.body.eventTime,
    color:req.body.color
  })
  timer.save();
  console.log("Timer Saved");
});
app.delete("/timer",(req,res)=>{
  console.log(req.body);
  Timer.deleteOne({eventName:req.body.eventName,eventDate:req.body.eventDate,eventTime:req.body.eventTime,color:req.body.color},(err,result)=>{
    if(err) res.send(err);
    else res.send(result);
  })
});

app.listen(port,(req,res)=>{
  console.log("Server has Successfully started on Port 3001");
})
