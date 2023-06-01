export class TV {
  id:  String
  title: String
  date:Date
  isrunning: boolean
  language:String
  mainGenre: String
  posterUrl: String


 

  constructor(id: String, title:String ,date:Date, isrunning:boolean,language:String,mainGenre:String,postUrl:String){
    this.id=id;
    this.title=title;
    this.date=date;
    this.isrunning=isrunning;
    this.language=language;
    this.mainGenre=mainGenre;
    this.posterUrl=postUrl;
  }
   
  }

