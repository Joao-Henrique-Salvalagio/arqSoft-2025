
# 🐄 FazendaPro – Aplicação do Padrão Strategy na Autenticação

## 1. Introdução ao Padrão Strategy

O padrão de projeto **Strategy** permite encapsular diferentes algoritmos (ou comportamentos) sob uma interface comum, possibilitando que sejam intercambiáveis. Ele é ideal quando queremos permitir que o comportamento de um sistema varie em tempo de execução, sem acoplar múltiplas opções diretamente no código principal.

---

## 2. Por que usar Strategy no FazendaPro?

No sistema **FazendaPro**, que visa gerenciar propriedades rurais, é essencial permitir que diferentes perfis de usuários (produtores, técnicos, gestores) possam acessar o sistema de diferentes formas:

- Login via **e-mail e senha**
- Login via **Google**
- Futuramente: login por **biometria**, **token mágico**, ou integração com **outros serviços**

Para evitar if-else gigantes no controller, usamos o padrão Strategy para tornar o sistema **escalável**, **testável** e **organizado**.

---

## 3. Estrutura da Implementação

### Interface base (AuthStrategy)
```ts
// auth/strategies/auth-strategy.interface.ts
export interface AuthStrategy {
  login(data: any): Promise<any>;
}
```

### Estratégias concretas
```ts
// auth/strategies/email-password.strategy.ts
@Injectable()
export class EmailPasswordStrategy implements AuthStrategy {
  async login(data: { email: string; password: string }) {
    const user = await userService.findByEmail(data.email);
    if (!user || user.password !== data.password) {
      throw new Error('Credenciais inválidas');
    }
    return { token: 'jwt', user };
  }
}
```

```ts
// auth/strategies/google.strategy.ts
@Injectable()
export class GoogleStrategy implements AuthStrategy {
  async login(data: { token: string }) {
    // Lógica de validação do token via Google API
    return { token: 'jwt-google', user: { name: 'Usuário Google' } };
  }
}
```

### Serviço de contexto
```ts
// auth/auth-context.service.ts
@Injectable()
export class AuthContextService {
  private strategy: AuthStrategy;

  setStrategy(strategy: AuthStrategy) {
    this.strategy = strategy;
  }

  async login(data: any) {
    if (!this.strategy) throw new Error('Estratégia não definida');
    return this.strategy.login(data);
  }
}
```

### Controller
```ts
// auth/auth.controller.ts
@Controller('auth')
export class AuthController {
  constructor(
    private readonly context: AuthContextService,
    private readonly emailStrategy: EmailPasswordStrategy,
    private readonly googleStrategy: GoogleStrategy,
  ) {}

  @Post('login')
  async login(@Body() body: any) {
    const { type } = body;

    if (type === 'email') {
      this.context.setStrategy(this.emailStrategy);
    } else if (type === 'google') {
      this.context.setStrategy(this.googleStrategy);
    } else {
      throw new Error('Tipo de login inválido');
    }

    return this.context.login(body);
  }
}
```

---

## 4. Benefícios dessa abordagem

- ✅ **Aberto para extensão**, fechado para modificação (Princípio OCP – SOLID)
- ✅ Suporte a múltiplos métodos de login com mínima manutenção
- ✅ Facilita a adição de novas estratégias no futuro
- ✅ Código mais limpo e desacoplado
- ✅ Testes unitários mais fáceis por estratégia

---

## 5. Considerações finais

Ao aplicar o padrão Strategy na autenticação do **FazendaPro**, garantimos uma arquitetura escalável e preparada para evoluir conforme o sistema cresce. A separação clara entre as estratégias facilita o entendimento do código e reduz o risco de bugs ao alterar comportamentos específicos.
