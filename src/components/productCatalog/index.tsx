import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function ProductCatalog(){
    useEffect(()=> {
        api.get('products')
        .then(response => console.log(response.data)
        )
    },[])

    return(
            <Container>
                {}
            </Container>
    )
}