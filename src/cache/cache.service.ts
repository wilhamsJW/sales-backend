import { Injectable, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

/**
 * Função genérica pra guardar qq cache
 */

@Injectable()
export class CacheService {

    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache
     ) {}

    async getCache<T>(key: string, functionRequest: () => Promise<T>): Promise<T> {
        const allData: T = await this.cacheManager.get(key); // guardando os dados em cache

        if(allData) {
            return allData
        }

        const dataToBeCached: T = await functionRequest(); // retornando os dados por fazer o a query ao banco caso não esteja mais no cache, ele não estará em cache se for a primeira requsição ou se o tempo de cache tiver expirado

        await this.cacheManager.set(key, dataToBeCached) // Configura o cache inserindo o que lhe foi passado

        return dataToBeCached
    }

}

/**
 * 
 * Nesse código, o T é um parâmetro genérico usado para indicar um tipo de dado genérico.
 * O uso de T permite que o método getCache e outras partes do código sejam flexíveis e 
 * reutilizáveis para trabalhar com diferentes tipos de dados.
 */
