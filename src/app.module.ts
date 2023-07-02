import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'

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
      entities: [`${__dirname}/**/*.entity{.js,.ts}`]
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
