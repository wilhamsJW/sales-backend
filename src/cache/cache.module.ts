import { Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import { CacheModule as CacheModuleNest } from '@nestjs/cache-manager'; // esse as funciona como um apelido, pq eu não posso usar o nome padrão dele pq a classe tem o mesmo nome


@Module({
  imports: [CacheModuleNest.register({
    ttl: 900000,
  }),
],
  providers: [CacheService],
  exports: [CacheService]
})
export class CacheModule {}
