export class Movie {
    id;
    name;
    status;
    description;
    imageUrl;

    constructor(id:number,name:string,status:boolean,description:string,imageUrl:string){
        this.id = id ;    
        this.name = name ;    
        this.status = status ;    
        this.description = description ;    
        this.imageUrl = imageUrl ;
    }
}

export const Movies = [
    new Movie(0,'Film-1',false,'This film is awesome....','11.png'),
    new Movie(1,'Film-2',false,'This film is awesome....','11.png'),
    new Movie(2,'Film-3',false,'This film is awesome....','11.png'),
    new Movie(3,'Film-4',false,'This film is awesome....','11.png'),
    new Movie(4,'Film-5',false,'This film is awesome....','11.png'),
    new Movie(5,'Film-6',false,'This film is awesome....','11.png'),
    new Movie(6,'Film-7',false,'This film is awesome....','11.png'),
    new Movie(7,'Film-8',false,'This film is awesome....','11.png')
]


