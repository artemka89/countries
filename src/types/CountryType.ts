 export interface ICountry {
     name: CountyName;
     capital: string;
     flags: CountyFlags;
     population: number;
     region: string
 }

 type CountyFlags = {
    alt: string;
    png: string;
    svg: string;
 }

 type CountyName = {
    common: string;
    official: string;
 }

