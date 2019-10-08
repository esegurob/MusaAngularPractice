export class model
{
    
    user;
    items;

 constructor()
    {
    this.user="Musa's",
   this. items=[
        {action:"Take Angular Course",done:false},
        {action:"Take Angular Git",done:true},
        {action:"Develop a Onlinestore app",done:false},
        {action:"Make beat",done:false},
    ]
}
}
export class TodoItem{
    action;
    done;
    constructor(action,done){
        this.action=action;
        this.done=done;
    }
}