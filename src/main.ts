import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { exec } from 'child_process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API de Mentorias Academicas')
    .setDescription(
      'Sistema integral para la gestion de mentorias, alumnos y categorias de asignaturas',
    )
    .setVersion('1.0')
    .addTag('Users', 'Operaciones con Mentores y Estudiantes')
    .addTag('Categories', 'Gestion de areas de conocimiento')
    .addTag('Mentorships', 'Transacciones y flujo de citas de mentorias')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  const url = `http://localhost:${port}/api-docs`;
  console.log(`\n🚀 Servidor corriendo en: http://localhost:${port}`);
  console.log(`📚 Documentacion Swagger: ${url}\n`);

  // Abrir el navegador automaticamente
  exec(`start ${url}`);
}
bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
