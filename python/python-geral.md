# Python - Anotações Gerais

## `__init__.py`

O arquivo `__init__.py` serve para marcar uma pasta como um pacote de módulos em Python e executar códigos de inicialização quando essa pasta é importada.

- **Reconhecimento**: informa ao interpretador do Python que o diretório é um pacote que pode ser importado.
- **Inicialização**: roda códigos automaticamente assim que você importa o pacote.
- **Organização**: facilita expor funções ou variáveis internas diretamente no nível principal do pacote.

## FastAPI

Antes de instalar essa lib, deve instalar a venv dentro da pasta do backend. Com a venv ativada, siga para o primeiro passo.

Primeiros passos: https://fastapi.tiangolo.com/tutorial/first-steps/

### 1. Instalar as dependências

Instalar a lib `fastapi` (framework moderno feito especificamente para criar APIs RESTful) e `uvicorn` (funciona como o servidor web que executa e coloca a sua aplicação FastAPI no ar):

```bash
pip install fastapi uvicorn
```

### 2. Criar o código inicial

No arquivo `main.py`, que fica na raiz da pasta `app` do backend, colocar um código inicial:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello world"}
```

