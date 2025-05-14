# FazendaPro

- Rafael Manso Campigotto - RA: 22014205-2
- João Henriue Salvalagio - RA: 23123581-2
- Eduardo Navarro - RA: 22014553-2
- Eduardo Voltatone - RA: 22207439-2
- Luciano Giraldi - RA: 22228890-2
- Pedro Gomes - RA: 22087525-2

## 📌 Índice

- [Definição do Produto](#definição-do-produto)
- [Requisitos Funcionais](#requisitos-funcionais)
- [Requisitos Não Funcionais](#requisitos-não-funcionais)
- [Restrições e Condições](#restrições-e-condições)
- [Necessidades dos Stakeholders](#necessidades-dos-stakeholders)
- [Riscos do Projeto](#riscos-do-projeto)
- [Implementação do LogManager](#implementação-do-logmanager)

---

### Definição do Produto
- **Aplicativo Web para gestão agropecuária**  
  - **Objetivo:** Sistema focado para a gestão de fazendas, com foco principal no gado de corte.  
  - **Público-Alvo:** Fazendas de pequeno, médio e grande porte, com rebanhos de tamanhos variados.  
  - **Contexto de uso:** O sistema será utilizado por proprietários, gerentes, agrônomos e funcionários administrativos. Ele deve ser intuitivo, pois nem todos os usuários têm familiaridade com tecnologia. O acesso será realizado tanto em escritórios quanto no campo, exigindo compatibilidade com computadores, tablets e celulares, além de funcionamento offline com sincronização posterior.  
  - **Objetivo Principal:** Tornar a gestão agropecuária mais eficiente, reduzindo desperdícios e aumentando a produtividade. O sistema deve atender a normas ambientais e regulatórias, como o Cadastro Ambiental Rural (CAR), e permitir a geração de relatórios exigidos por órgãos governamentais. A integração com outras ferramentas do setor pode ser um diferencial importante.  

---

### Requisitos Funcionais  

1. **Cadastro de Gado** – Permitir o registro de cada animal com informações como identificação (brinco, RFID), raça, idade, peso, origem e status (ativo, vendido, abatido, etc.).  
2. **Movimentação de Gado** – Gerenciar a entrada, saída e transferência de animais entre lotes e áreas da fazenda, funcionando como um sistema de almoxarifado.  
3. **Gestão de Lotes** – Permitir o agrupamento de animais em lotes, facilitando o manejo e rastreamento do rebanho.  
4. **Registro de Alimentação e Manejo** – Registrar dados sobre alimentação, suplementação e manejo sanitário (vacinas, vermífugos, medicações).  
5. **Controle de Pesagem** – Registrar e acompanhar o histórico de peso dos animais para avaliar o desenvolvimento.  
6. **Gestão de Vendas e Saídas** – Permitir o controle da venda de animais, registrando comprador, data, valor e destino.  
7. **Relatórios Gerenciais** – Gerar relatórios sobre o rebanho, como quantidade total, taxa de ganho de peso, movimentações e histórico de vendas.  
8. **Controle de Usuários** – Definir permissões de acesso para diferentes tipos de usuários (administrador, gerente, funcionário).

---  

### Requisitos Não Funcionais  

1. **Interface Simples e Intuitiva** – O sistema deve ser fácil de usar, com design minimalista e acessível mesmo para usuários com pouca familiaridade com tecnologia.  
2. **Acesso Web e Mobile** – Possibilidade de uso em navegadores e dispositivos móveis para facilitar a gestão no campo.  
3. **Desempenho Rápido** – O sistema deve ser ágil, permitindo buscas e cadastros rápidos, mesmo com grandes volumes de dados.  
4. **Armazenamento Seguro** – Utilizar banco de dados confiável e seguro, garantindo a integridade das informações.  
5. **Operação Offline (se necessário)** – Possibilidade de operar offline com sincronização dos dados quando a conexão estiver disponível.  
6. **Escalabilidade** – O sistema deve permitir crescimento conforme a necessidade da fazenda, suportando um número crescente de registros sem perda de desempenho.  
7. **Suporte a Múltiplas Fazendas (se necessário)** – Permitir o gerenciamento de diferentes propriedades dentro de uma única conta.  
8. **Conformidade com Normas Agropecuárias** – O sistema deve seguir boas práticas do setor e permitir exportação de dados para relatórios exigidos por órgãos reguladores.  

---

### Restições e Condições

#### **Restrições Técnicas**  
- O sistema será desenvolvido como uma aplicação web, acessível via navegador em desktops, tablets e celulares.  
- A linguagem de programação principal será **TypeScript** com **NestJS** para o backend e **React** para o frontend.  
- O banco de dados utilizado será **PostgreSQL** (ou outro conforme necessidade), garantindo relacionamento e segurança para armazenar registros e manter constância.  
- O sistema será hospedado em servidores **AWS** para garantir escalabilidade e confiabilidade.  
- Deve haver suporte para armazenamento seguro de dados e backups regulares.

#### **Restrições Não Técnicas**  
- O desenvolvimento do sistema deve ser concluído dentro de um prazo determinado, com entregas parciais para validação.  
- O orçamento disponível pode impactar a escolha de tecnologias e infraestrutura, priorizando soluções econômicas e eficientes.  
- O sistema deve cumprir todas as exigências legais relacionadas à agropecuária e rastreabilidade animal, incluindo regulamentos ambientais e fiscais.  
- A acessibilidade e usabilidade do sistema devem ser adequadas para usuários com pouca experiência em tecnologia.  
- A integração com outros sistemas agropecuários pode ser necessária, dependendo da demanda do mercado.

---

### Necessidades dos Stakeholders  

#### **Clientes (Proprietários de Fazendas, Gerentes e Agrônomos)**  
- Interface fácil de usar e acessível para diferentes níveis de experiência.  
- Controle detalhado de todo o ciclo produtivo do gado.  
- Relatórios gerenciais para tomada de decisão estratégica.  
- Segurança e integridade dos dados armazenados.  
- Capacidade de acessar o sistema de qualquer lugar, inclusive no campo.  

#### **Usuários Finais (Funcionários e Operadores do Sistema na Fazenda)**  
- Simplicidade no cadastro e atualização de informações.  
- Ferramentas rápidas para registro de movimentações de gado.  
- Possibilidade de acesso via dispositivos móveis e tablets.  
- Mecanismos offline para quando não houver conexão com a internet.

#### **Gerentes de Projeto e Equipe de Desenvolvimento**  
- Arquitetura escalável e modular para facilitar manutenção e expansão.  
- Utilização de tecnologias modernas como **TypeScript, NestJS, React e PostgreSQL**.  
- Infraestrutura em **AWS** para garantir segurança e escalabilidade.  
- Cumprimento de prazos e orçamentos estabelecidos.
- Garantia de conformidade com requisitos regulatórios do setor agropecuário

---

### Riscos do Projeto

#### Riscos Técnicos
- Escolha de Tecnologias Inadequadas – Se as tecnologias escolhidas não atenderem aos requisitos de escalabilidade e desempenho, podem surgir dificuldades na manutenção e evolução do sistema.
- Problemas de Integração – Caso haja necessidade de integração com dispositivos RFID ou outras ferramentas agropecuárias, pode haver incompatibilidades técnicas.
- Segurança e Proteção de Dados – Falhas na segurança podem comprometer informações sensíveis da fazenda, exigindo medidas de criptografia e backups regulares.
- Desempenho e Escalabilidade – Um aumento no número de usuários ou registros pode impactar a performance, exigindo otimizações contínuas.

#### Riscos Operacionais
- Dificuldade de Adoção pelo Usuário – Como alguns usuários podem ter pouca familiaridade com tecnologia, uma interface complexa pode dificultar a adoção do sistema.
- Conectividade Limitada no Campo – A falta de internet em algumas áreas pode afetar a usabilidade, exigindo soluções offline.
- Erros Humanos – Registros incorretos ou inconsistentes podem comprometer a confiabilidade dos dados, sendo necessário um controle rigoroso de entrada de informações.

#### Riscos de Negócio
- Mudanças Regulatórias – Alterações em leis e normas agropecuárias podem exigir ajustes frequentes no sistema.
- Concorrência no Mercado – Outras soluções podem surgir, tornando necessário o diferencial competitivo do sistema.
- Orçamento e Prazos – Restrições financeiras ou atrasos no desenvolvimento podem impactar a entrega do produto final.
- Evolução das Necessidades do Cliente – O sistema pode precisar de atualizações constantes para atender novas demandas do setor agropecuário.

---

### Implementação do LogManager
- Foi criado a entidade LogManager para ser salva em um banco de dados MongoDB em docker.
- Como utilização para nosso projeto, está sendo utilizado para guardar os logs de criação de gados, que seria a única entidade que temos no sistema atualmente.
- O processo é simples, é salvo os dados dessa forma: ["chave: valor","chave: valor",...] e com a data de alteração do dado.