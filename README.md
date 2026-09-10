# Grão & Brasa — Cardápio Digital

Projeto do módulo **Bootcamp Desenvolvimento Web Responsivo**.

## Descrição do projeto

Cardápio digital de uma cafeteria fictícia, desenvolvido como página única (one page) que se adapta a diferentes tamanhos de tela — smartphone, tablet e desktop. O objetivo do projeto foi praticar responsividade usando **apenas HTML e CSS puro** (sem frameworks como Bootstrap), reforçando o entendimento de Flexbox, CSS Grid e Media Queries.

A página possui 4 seções principais:

1. **Cabeçalho / Hero** — navegação (com menu hambúrguer no mobile) e chamada principal.
2. **Sobre** — apresentação da cafeteria e estatísticas rápidas.
3. **Cardápio** — grid de produtos filtrável por categoria (Cafés, Doces, Salgados), que se reorganiza de 1 para 2 e depois 3 colunas conforme a largura da tela.
4. **Contato** — endereço, horário de funcionamento e formulário de contato.

## Tecnologias utilizadas

- **HTML5** semântico
- **CSS3** puro (Flexbox, Grid, `clamp()`, Media Queries, mobile-first)
- **JavaScript (Vanilla)** — apenas para o toggle do menu mobile e o filtro de categorias do cardápio (sem bibliotecas ou frameworks)
- **Google Fonts** — Fraunces (títulos) e Work Sans (corpo de texto)

## Estrutura de pastas

```
cardapio-digital/
├── index.html          # Estrutura e conteúdo da página
├── css/
│   └── style.css        # Estilos, variáveis de tema e media queries
├── js/
│   └── script.js         # Menu mobile, filtro de cardápio e formulário
└── README.md
```

## Instruções para instalação e execução

Não há dependências ou processo de build — é um projeto 100% estático.

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` diretamente no navegador.

   Ou, se preferir rodar com um servidor local (recomendado para testar em outros dispositivos na mesma rede):

   ```bash
   # com Python 3
   python -m http.server 8000

   # ou com a extensão Live Server do VSCode
   ```

3. Acesse `http://localhost:8000` no navegador.

## Testando a responsividade

- Use as ferramentas de desenvolvedor do navegador (F12 → ícone de dispositivo) para simular smartphone, tablet e desktop.
- Breakpoints principais definidos em `css/style.css`:
  - **Mobile** (padrão): até 639px
  - **Tablet**: a partir de 640px
  - **Desktop**: a partir de 900px

## Integrantes

- João Matheus Marques

## Próximos passos (segunda entrega)

- Gravar/preparar a apresentação demonstrando a responsividade nos três tamanhos de tela.
- Manter o repositório Git atualizado com commits incrementais.
- Exportar o projeto em `.zip` para envio no Google Drive do coordenador.
