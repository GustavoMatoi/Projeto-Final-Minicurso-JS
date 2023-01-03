class Pokemon {
    constructor(_nome,_altura,_peso,_categoria,_habilidade,_tipoPrimario,_tipoSecundario){
        this.nome = _nome
        this.altura = _altura 
        this.peso = _peso 
        this.categoria = _categoria
        this.habilidade = _habilidade
        this.tipoPrimario = _tipoPrimario
        this.tipoSecundario = _tipoSecundario
    }

     mostrarInformacoes(){
        alert(`Pokemon: ${this.nome} 
        Altura: ${this.altura} 
        Peso: ${this.peso}
        Categoria: ${this.categoria}
        Habilidade: ${this.habilidade}
        Tipos: ${this.tipoPrimario+" "+ this.tipoSecundario}`)
    }

    static pesquisar(){
        let nome = prompt("Informe o Pokemon que gostaria de pesquisar")

        switch(nome){
            case 'Articuno':
                Articuno.mostrarInformacoes()
                break;
            
            case 'Zapdos':
                Zapdos.mostrarInformacoes()
                break;

            case 'Moltres':
                Moltres.mostrarInformacoes()
                break;

            case 'Mewtwo':
                Mewtwo.mostrarInformacoes()
                break;

            case 'Mew':
                Mew.mostrarInformacoes()
                break;
            
            default:
                throw("Nome inválido")
        }

/*
        if(nome == 'articuno' || nome == 'Articuno'){
            Pokemon.mostrarInformacoes(Articuno)
        }
        if(nome == 'zapdos' || nome == 'Zapdos'){
            Pokemon.mostrarInformacoes(Zapdos)
        }
        if(nome == 'moltres' || nome == 'Moltres'){
            Pokemon.mostrarInformacoes(Moltres)
        }
        if(nome == 'mewtwo' || nome == 'Mewtwo'){
            Pokemon.mostrarInformacoes(Mewtwo)
        }
        if(nome == 'mew' || nome == 'Mew'){
            Pokemon.mostrarInformacoes(Mew)
        } else {
            throw("Nome inválido")
        } */
    }
}


let Articuno = new Pokemon('Articuno', 1.7, 55.4, 'Freeze', 'Pressure', 'Gelo', 'Voador')
let Zapdos = new Pokemon('Zapdos', 1.6, 52.6, 'Electric', 'Pressure', 'Elétrico', 'Voador')
let Moltres = new Pokemon('Moltres', 2.0, 60.0, 'Flame', 'Pressure', 'Fogo', 'Voador')
let Mewtwo = new Pokemon('Mewtwo', 2.0, 122.0, 'Genetic', 'Pressure', 'Psíquico', ' ')
let Mew = new Pokemon('Mew', 0.4, 4.0, 'New Species', 'Synchronize', 'Psíquico', ' ')
