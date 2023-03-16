import { useEffect, useState } from "react";




export interface IEstados {
    id: number;
    sigla: string;
    nome: string;
    
}


export function useEstados() {
    const [estados, setEstados] = useState<IEstados[]>([])


   useEffect(() => {
     fetch("http://localhost:3333/location/states")
    .then((response) => response.json())
    .then((data) => setEstados(data))

   }, []);

   return {estados}
    
}