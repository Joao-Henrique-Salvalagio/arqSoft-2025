# Projeto: Adapter para Leitura de Pessoas em CSV

RAFAEL MANSO CAMPIGOTTO RA: 22014205-2
JOÃO HENRIQUE SALVALAGIO ABRAHIM RA: 23123581-2

## Objetivo
Este projeto demonstra a aplicação do Padrão de Projeto Adapter para adaptar a leitura de um arquivo `.csv` para o formato utilizado pelo sistema.

## Componentes

- **Pessoa**: classe que representa uma pessoa (nome, idade e email).
- **RepositorioDePessoas (interface)**: define o contrato para repositórios de pessoas.
- **PessoaCsvAdapter (Adapter)**: adapta a leitura de um arquivo CSV para retornar objetos Pessoa.
- **Main**: classe principal que utiliza o Adapter para exibir a lista de pessoas.

## Como usar
1. Adicione seu arquivo `pessoas.csv` na raiz do projeto.
2. Compile e execute a classe `Main`.

## Exemplo de Conteúdo do CSV
```
nome,idade,email
Ana Silva,29,ana.silva@gmail.com
João Santos,34,joao.santos@gmail.com
Marina Souza,41,marina.souza@gmail.com
```

## Padrão de Projeto Aplicado
**Adapter**: Utilizado para adaptar a leitura de arquivos CSV ao modelo de repositório utilizado pelo sistema, sem alterar a lógica principal.
