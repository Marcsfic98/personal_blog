import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class ProdService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      url: process.env.DATABASE_URL, //usar variável de ambiente para a URL do banco de dados
      logging: false, //desabilitar logs em produção
      dropSchema: false, //não apagar o esquema do banco de dados
      ssl: {
        rejectUnauthorized: false, //necessidade de chaves de segurança
      },
      synchronize: true, //sincronizar o esquema do banco de dados automaticamente
      autoLoadEntities: true, //carregar entidades automaticamente
    };
  }
}
