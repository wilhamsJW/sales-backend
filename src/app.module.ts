import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AdressModule } from './adress/adress.module';

/**
 * Em um determinado momento adicionei uma chave dentro do TypeOrmModule.forRoot chamada synchronize: true
 * ela cria de forma instantanea meu banco de dados mas o certo é criar com migrations
 * isso foi apenas para visualização rápida mas q pode ser útil para testes
 * 
 * entities: [`${__dirname}/* * /.entity{.js,.ts}`] -> adicionei essa chave para
 * que a configuração enxergue minhas entidades, dessa forma ela irá buscar todos os arquivos
 * que contenha o nome enitity e que tenha .js ou .ts, maneira prática de fazer isso, ao invés
 * de colocar um por um no valor da chave
 */

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun: true
    }),
    StateModule,
    CityModule,
    AdressModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

/**
 * Explicações sobre a busca de pastas acima em dirname
 * 
 * entities: [`${__dirname}/ * * / *.entity{.js,.ts}`],
 * migrations: [`${__dirname} / migration{.js, * .ts}`] qual a diferença da forma q está buscando esses arquivos? ex: /* * / *.entity qquer dizer q foi voltada uma pasta? 
 * e o /migration indica q eles estão no mesmo diretório? e pq tem esse astericos no meio {.js,*.ts}
 * 
 * Na configuração fornecida, há diferenças na forma como os arquivos são buscados:

entities: [${__dirname}/* * /*.entity{.js,.ts}]: Aqui, a busca está sendo feita recursivamente em todos os diretórios a partir do diretório atual (__dirname). A parte /** /*.entity significa que está procurando por arquivos cujos nomes terminam com .entity. A expressão {.js,.ts} indica que ele está procurando por arquivos com extensão .js ou .ts.

migrations: [${__dirname}/migration{.js,*.ts}]: Nesse caso, a busca está sendo feita apenas no diretório atual (__dirname). A parte /migration indica que está procurando por arquivos específicos dentro desse diretório chamado "migration". A expressão {.js,*.ts} indica que ele está procurando por arquivos com extensão .js ou .ts.

Portanto, a diferença é que a busca de entidades (entities) está sendo feita recursivamente em todos os diretórios a partir do diretório atual, enquanto a busca de migrações (migrations) está sendo feita apenas no diretório atual. Além disso, a expressão {.js,*.ts} é usada para especificar as extensões dos arquivos que estão sendo buscados.

O uso de * como um curinga é uma forma de fazer casamento de padrões nos nomes dos arquivos. No exemplo fornecido, {.js,*.ts} significa que está procurando por arquivos com extensão .js ou qualquer arquivo com extensão .ts. Isso permite que você procure por diferentes tipos de arquivos usando um único padrão.
 */
