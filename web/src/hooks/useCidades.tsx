import { useEffect, useState } from "react";

export interface ICidades {
   name: string;
   code: string; 
}


export function useCidades({ uf }: any) {
    const [cidades, setCidades] = useState<ICidades[]>([])
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
       if(!uf) return;
       
   setLoading(true)
   fetch(`http://localhost:3333/location/citys/${uf}`)
    .then((response) => response.json())
    .then((data) => setCidades(data.citys))
    .then(() => setLoading(false))
   
   }, [uf]);

   return {cidades, loading}
    
}