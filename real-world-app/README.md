## Descrição

O Real World App (RWA) é um aplicativo criado pela equipe do Cypress para demonstrar o uso real de métodos, padrões e fluxos de teste do Cypress. É uma espécie de clone do aplicativo Venmo, que permite aos usuários criar uma conta, adicionar uma conta bancária e enviar/receber dinheiro entre amigos. Vamos nos utilizar do RWA para fazer exercícios e colocar nosso aprendizado do curso "Guardião da Qualidade" para aprender recursos avançados do Cypress e estratégias de teste. Ele serve como uma plataforma de aprendizado para explorar e praticar testes em cenários reais de desenvolvimento de software. 

Repo do RWA: https://github.com/cypress-io/cypress-realworld-app


### Casos de teste 1

**Exercício: Criação de Casos de Teste para as Features "Login" e "Registro de Usuário"**

As funcionalidades de "Login" e "Registro de Usuário" são fundamentais no aplicativo Real World App, permitindo que os usuários acessem suas contas existentes ou criem novas contas. Vamos criar casos de teste para garantir que essas funcionalidades funcionem corretamente:

**Caso de Teste: Login com sucesso.**

**Descrição:** Verifique se é possível fazer login com um usuário válido, inserindo as informações corretas.
**Caso de Teste:** Tentar fazer login com credenciais inválidas.

**Descrição:** Garanta que o sistema exiba uma mensagem de erro ao tentar fazer login com credenciais inválidas (email ou senha incorretos).
**Caso de Teste:** Registro de novo usuário com sucesso.

**Descrição:** Verifique se é possível registrar um novo usuário com informações válidas.
**Caso de Teste:** Tentar registrar um novo usuário com informações incompletas.

**Descrição:** Garanta que o sistema exiba mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias.

### Automação dos casos de teste

**Exercício:** Automação dos Casos de Teste "Login" e "Registro de Usuário"

Agora que você criou os casos de teste, é hora de automatizá-los usando o Cypress.io. Certifique-se de que o projeto "Real World App" esteja configurado corretamente no seu ambiente de desenvolvimento. Crie scripts de teste para os casos de teste definidos nos exercícios anteriores:

**Automação do Caso de Teste: Login com sucesso.**

```javascript
describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```

**Automação do Caso de Teste: Tentar fazer login com credenciais inválidas.**

```javascript
describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```

**Automação do Caso de Teste: Registro de novo usuário com sucesso.**

```javascript
describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```

**Automação do Caso de Teste: Tentar registrar um novo usuário com informações incompletas.**

```javascript
describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```

## Casos de teste 2

Exercício: Criação de Casos de Teste para a Feature "Enviar Dinheiro"

Imagine que a feature "Enviar Dinheiro" é uma funcionalidade crítica no aplicativo Real World App. Seu objetivo é criar casos de teste para garantir que essa funcionalidade funcione corretamente. Considere os seguintes cenários como exemplo:

1. Caso de Teste: Enviar dinheiro com saldo suficiente.
   - Descrição: Verifique se é possível enviar dinheiro para um amigo quando o saldo da conta é suficiente.
 
2. Caso de Teste: Enviar dinheiro com saldo insuficiente.
   - Descrição: Garanta que o sistema exiba uma mensagem de erro ao tentar enviar dinheiro sem saldo suficiente.

## Automação dos casos de teste

Exercício: Automação dos Casos de Teste "Enviar Dinheiro"

Agora que você criou os casos de teste, é hora de automatizá-los usando o Cypress.io. Certifique-se de que o projeto "Real World App" esteja configurado corretamente no seu ambiente de desenvolvimento. Crie scripts de teste para os casos de teste definidos nos exercícios anteriores:


Automação do Caso de Teste: Enviar dinheiro com saldo suficiente.

```javascript
describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```
Automação do Caso de Teste: Enviar dinheiro com saldo insuficiente.

```javascript
describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```

## Casos de teste 3

Exercício: Criação de Casos de Teste para a Feature "Visualizar Histórico de Transações"

A funcionalidade "Visualizar Histórico de Transações" é crucial no aplicativo Real World App, permitindo aos usuários rastrear todas as transações realizadas. Vamos criar casos de teste para garantir que essa funcionalidade funcione corretamente:

Caso de Teste: Visualizar histórico de transações com sucesso.

Descrição: Verifique se é possível visualizar o histórico de transações de um usuário com suas transações anteriores exibidas corretamente.
Caso de Teste: Tentar visualizar o histórico de transações de um usuário sem transações anteriores.

Descrição: Garanta que o sistema exiba uma mensagem indicando que o usuário não possui transações anteriores caso tente visualizar o histórico sem transações registradas.

## Automação dos casos de teste

Exercício: Automação dos Casos de Teste "Visualizar Histórico de Transações"

Agora que você criou os casos de teste, é hora de automatizá-los usando o Cypress.io. Certifique-se de que o projeto "Real World App" esteja configurado corretamente no seu ambiente de desenvolvimento. Crie scripts de teste para os casos de teste definidos nos exercícios anteriores:

Automação do Caso de Teste: Visualizar histórico de transações com sucesso.

```javascript
describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```

Automação do Caso de Teste: Tentar visualizar o histórico de transações de um usuário sem transações anteriores.

```javascript
describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```
