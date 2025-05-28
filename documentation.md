# Documentação de Manutenção - Site RefurbishedLaptops.ie

## Visão Geral
Este documento fornece instruções para manutenção e atualização do site RefurbishedLaptops.ie, um site de venda de notebooks reformados na Irlanda. O site foi desenvolvido utilizando HTML5, CSS3 e JavaScript, sem frameworks ou bibliotecas externas além do Font Awesome para ícones.

## Estrutura de Arquivos

```
refurbished-laptops/
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/
│   └── (arquivos de imagem)
├── index.html
├── catalog.html
├── product.html
├── about.html
├── contact.html
├── faq.html
└── policies.html
```

## Páginas do Site

1. **index.html** - Página inicial com destaque para produtos e informações sobre a empresa
2. **catalog.html** - Catálogo completo de produtos com filtros
3. **product.html** - Página de detalhes do produto (template para produtos individuais)
4. **about.html** - Informações sobre a empresa e processo de reforma dos notebooks
5. **contact.html** - Formulário de contato e informações de contato
6. **faq.html** - Perguntas frequentes organizadas por categorias
7. **policies.html** - Políticas de garantia, devolução, pagamento e privacidade

## Tecnologias Utilizadas

- **HTML5** - Estrutura semântica do site
- **CSS3** - Estilização, incluindo Flexbox, Grid e Media Queries para responsividade
- **JavaScript** - Interatividade, validação de formulários e funcionalidades dinâmicas
- **Font Awesome** - Biblioteca de ícones (carregada via CDN)

## Como Atualizar o Conteúdo

### Adicionar Novos Produtos

Para adicionar um novo produto ao catálogo:

1. Adicione a imagem do produto na pasta `images/`
2. No arquivo `catalog.html`, copie um bloco de produto existente dentro da div `products-grid` e atualize:
   - Atributos `data-*` para filtros
   - Caminho da imagem e texto alternativo
   - Título, especificações e preço do produto
   - Links para a página de produto e WhatsApp

3. Crie uma nova página de produto baseada em `product.html`, atualizando:
   - Meta tags para SEO
   - Título da página
   - Imagens do produto (principal e miniaturas)
   - Especificações técnicas
   - Descrição do produto
   - Links de contato

### Atualizar Informações de Contato

Para atualizar informações de contato:

1. Localize as seções de contato em `contact.html`, `footer` em todas as páginas, e botões de WhatsApp
2. Atualize os seguintes elementos:
   - Endereço físico
   - Número de telefone
   - Endereço de e-mail
   - Link do WhatsApp (formato: `https://wa.me/+353XXXXXXXXX`)
   - Horário de funcionamento

### Modificar Políticas

Para atualizar as políticas do site:

1. Abra o arquivo `policies.html`
2. Localize a seção específica que precisa ser atualizada (garantia, devolução, pagamento, privacidade)
3. Modifique o conteúdo HTML dentro da div `policy-section` correspondente

## Responsividade

O site foi desenvolvido para ser totalmente responsivo, adaptando-se a diferentes tamanhos de tela:

- **Desktop** - Layout completo (acima de 992px)
- **Tablet** - Layout adaptado (768px a 992px)
- **Mobile** - Layout simplificado com menu hamburguer (abaixo de 768px)

As media queries estão definidas no arquivo `styles.css` e não devem ser modificadas sem testes adequados.

## SEO

O site inclui otimizações para SEO:

- Meta tags (title, description, keywords) em cada página
- Estrutura semântica HTML5
- URLs amigáveis
- Textos otimizados para o mercado irlandês
- Atributos alt em imagens

Ao adicionar novo conteúdo, mantenha essas práticas para preservar a otimização para mecanismos de busca.

## JavaScript

O arquivo `script.js` contém as seguintes funcionalidades:

- Menu mobile (hamburguer)
- Galeria de imagens na página de produto
- Acordeão na página de FAQ
- Validação do formulário de contato
- Filtros no catálogo de produtos
- Rastreamento de cliques em botões de WhatsApp
- Carregamento lazy de imagens

Qualquer modificação no JavaScript deve ser testada cuidadosamente para garantir que todas as funcionalidades continuem operando corretamente.

## Hospedagem e Domínio

Recomendações para hospedagem:
- Hostinger ou SiteGround (a partir de €5/mês)
- Certificado SSL (https://)
- Domínio .ie (€10-20/ano via Namecheap ou GoDaddy)

Para publicar o site:
1. Contrate um serviço de hospedagem
2. Registre um domínio (preferencialmente com extensão .ie)
3. Faça upload de todos os arquivos mantendo a estrutura de pastas
4. Configure o certificado SSL

## Suporte e Manutenção

Para qualquer dúvida ou suporte adicional relacionado ao site, entre em contato com o desenvolvedor original.
