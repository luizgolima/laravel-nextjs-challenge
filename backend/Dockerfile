# Define a imagem base com PHP e Laravel
FROM php:latest

# Instala o Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração do projeto
COPY . .

# Instala as dependências do projeto
RUN composer install

# Gera uma chave de aplicativo Laravel
RUN php artisan key:generate

# Instala o driver do MySQL
RUN docker-php-ext-install pdo pdo_mysql

# # Executa as migrações do banco de dados
# RUN ./vendor/bin/sail up -d

# Expõe a porta do servidor de desenvolvimento
EXPOSE 8000

# Comando para iniciar o servidor de desenvolvimento
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
