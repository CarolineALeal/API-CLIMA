# Clima - Consulta de Clima por Cidade

Este é um projeto simples de uma API para consulta de clima, utilizando a [API do OpenWeatherMap](https://openweathermap.org/). O projeto permite que o usuário consulte as condições climáticas de uma cidade específica, retornando informações como temperatura, descrição do clima, umidade e velocidade do vento.

## Tecnologias Utilizadas

- **HTML5**: Estrutura básica da aplicação.
- **CSS3**: Estilização da interface.
- **JavaScript**: Manipulação dos elementos da DOM, chamadas de API e exibição dinâmica dos dados.
- **[OpenWeatherMap API](https://openweathermap.org/)**: API utilizada para obter os dados climáticos.
- **Font Awesome**: Ícones para representar informações como temperatura, vento, etc.
- **Google Fonts**: Utilização da fonte "Ubuntu" para a estilização do texto.

## Funcionalidades

- Busca pelo nome da cidade para obter as condições climáticas.
- Exibição de temperatura, descrição do clima, ícone do clima, umidade e velocidade do vento.
- Integração com a API do OpenWeatherMap para obter dados atualizados em tempo real.

## Estrutura do Projeto

- **index.html**: Arquivo HTML principal que contém a estrutura da interface.
- **css/**
  - `styles.css`: Estilos customizados para a interface do usuário.
- **js/**
  - `scripts.js`: Script principal que lida com a lógica de consulta à API e manipulação da DOM.
- **config.json**: Arquivo de configuração que armazena a chave da API (ignorado no controle de versão para segurança).
- **.env**: Arquivo de ambiente (opcional, ignorado no controle de versão).
