import { negociacaoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacaoService {
    
    public obterNegociacoesDoDia(): Promise <Negociacao[]> {
        return  fetch('http://localhost:8080/dados')
        .then(res => res.json())
        .then((dados: negociacaoesDoDia[] ) => {
            return dados.map(dadoDeHoje => {
                return new Negociacao(
                    new Date(),
                    dadoDeHoje.vezes,
                    dadoDeHoje.montante
                );
            })
        })

    }
}