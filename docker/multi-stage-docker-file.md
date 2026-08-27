# Docker - Multi-stage Build

## Imagem Docker

É um pacote estático e somente de leitura que contém tudo o que é necessário para executar um aplicativo, incluindo o código, bibliotecas, dependências e arquivos de configuração.

## Multi-stage

Você não precisa incluir **tudo** na sua imagem final. A imagem final deve conter apenas coisas absolutamente necessárias para rodar a aplicação.

Construção em múltiplos estágios: usa várias instruções `FROM` no mesmo Dockerfile para separar o ambiente de compilação do ambiente de execução. Cada estágio `FROM` tem uma base image diferente, e cada uma delas é um novo estágio no processo de building. A última imagem conterá apenas os artefatos necessários para rodar a aplicação.

> Cada stage cria um artefato.

### Exemplo sem usar o multi-stage

No primeiro e único stage temos:

- Dependências, build tools (compiler, linter, security scanner, node_modules)
- Source code (Go, C++, Rust)
- Artefato final

Tudo isso se torna a nossa imagem, mas ela é muito pesada.

### Exemplo usando o multi-stage

No multi-stage, temos 2 estágios.

**1. `builder`** — igual ao estágio anterior:

- Dependências, build tools (compiler, linter, security scanner, node_modules)
- Source code (Go, C++, Rust)
- Artefato final

Tudo isso se torna a nossa imagem, mas ela é muito pesada.

**2. `runtime`** — contém apenas:

- Slim base image (como Alpine)
- Cópia do artefato final

Isso se torna a nossa imagem final, super leve.

### Principais vantagens

1. **Redução de tamanho**: elimina compiladores, bibliotecas de desenvolvimento e arquivos temporários da imagem final.
2. **Mais segurança**: menos pacotes e ferramentas instalados significam uma menor superfície de ataque.
3. **Organização**: mantém o fluxo de criação e publicação do software em um único arquivo de configuração.
