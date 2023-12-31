import { StateEntity } from "../entities/state.entity";

export class ReturnStateDto {
    name: string
    uf: number

    constructor(state: StateEntity) {
        this.name = state?.name;
        this.uf = state.uf
    }
}