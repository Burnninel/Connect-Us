export default class Cliente {
    #nome: string

    constructor(nome: string, idade: number, id: string = null) {
        this.#nome = nome
    }

    static vazio() {
        return new Cliente('', 0)
    }

    get nome() {
        return this.#nome
    }
}