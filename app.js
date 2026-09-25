const posts = [
  {
    id: 5,
    title: 'Como usar IA para criar sites',
    excerpt: 'Ferramentas de inteligência artificial aceleram o desenvolvimento, mas o melhor resultado vem quando você combina automação com conhecimento básico de web.',
    tag: 'IA',
    date: '2026-06-10',
    content: `
      <p>Criar um site com IA não significa abrir mão de entender o que está sendo gerado. Na prática, a IA funciona como um assistente rápido: escreve HTML, sugere layouts, corrige erros e explica trechos de código que você não conhece.</p>
      <p>O segredo é tratar a IA como ponto de partida, não como produto final. Revise sempre o que ela entrega.</p>
      <h2>Comece com um pedido claro</h2>
      <p>Quanto mais específico o prompt, melhor o resultado. Em vez de "crie um site", descreva o objetivo: "landing page para um café com menu, horário de funcionamento e botão de WhatsApp, em português, responsiva e com cores terrosas".</p>
      <p>Inclua restrições úteis: HTML semântico, CSS puro, sem frameworks, acessível e leve. Isso evita soluções complexas demais para projetos simples.</p>
      <h2>Itere em partes</h2>
      <p>Não peça o site inteiro de uma vez. Divida o trabalho: estrutura HTML, depois estilos, depois interações com JavaScript. Cada etapa fica mais fácil de revisar e ajustar.</p>
      <p>Se algo não ficou bom, peça uma correção pontual: "o menu não funciona no celular" ou "deixe os parágrafos mais curtos". Pequenas iterações costumam funcionar melhor que um prompt gigante.</p>
      <h2>Revise o básico</h2>
      <p>Mesmo com IA, vale checar alguns pontos antes de publicar:</p>
      <p>— Títulos e textos alternativos em imagens<br>— Contraste de cores e tamanho de fonte legível<br>— Links e botões funcionando<br>— Página responsiva em telas pequenas</p>
      <p>Esses detalhes separam um site "gerado" de um site realmente utilizável.</p>
      <h2>Quando a IA ajuda mais</h2>
      <p>IA brilha em protótipos, blogs, portfolios e landing pages. Você ganha velocidade para testar ideias e publicar algo funcional no mesmo dia.</p>
      <p>Para sistemas complexos — login, pagamentos, painéis administrativos — a IA ainda ajuda, mas exige mais validação, testes e conhecimento técnico.</p>
      <h2>O papel humano continua essencial</h2>
      <p>A IA acelera, mas não substitui critério. Quem entende HTML, CSS e um pouco de JavaScript consegue orientar melhor a ferramenta, corrigir erros e manter o site no ar com autonomia.</p>
      <p>Use a IA para ir mais rápido. Use seus conhecimentos para ir na direção certa.</p>
    `
  },
  {
    id: 1,
    title: 'Por que aprender HTML ainda importa',
    excerpt: 'Com tantos frameworks disponíveis, entender a base do web continua sendo essencial para qualquer desenvolvedor.',
    tag: 'Web',
    date: '2026-06-05',
    content: `
      <p>HTML é a espinha dorsal da web. Antes de React, Vue ou qualquer outro framework, existe a estrutura semântica que dá significado ao conteúdo.</p>
      <p>Aprender HTML bem significa criar páginas acessíveis, com SEO adequado e que funcionam em qualquer dispositivo — mesmo quando o JavaScript falha.</p>
      <h2>O básico bem feito</h2>
      <p>Tags como <code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code> e <code>&lt;header&gt;</code> não são apenas detalhes. Elas ajudam leitores de tela, mecanismos de busca e outros desenvolvedores a entender sua página.</p>
      <p>Comece simples. Domine o básico. Depois, se quiser, adicione camadas de complexidade.</p>
    `
  },
  {
    id: 2,
    title: 'CSS moderno sem complicação',
    excerpt: 'Grid, flexbox e variáveis CSS resolvem a maior parte dos layouts sem precisar de bibliotecas externas.',
    tag: 'CSS',
    date: '2026-06-02',
    content: `
      <p>CSS evoluiu muito nos últimos anos. Hoje é possível criar layouts responsivos e elegantes usando apenas recursos nativos do navegador.</p>
      <p>Flexbox é ideal para alinhar elementos em uma dimensão. CSS Grid brilha quando você precisa de layouts bidimensionais.</p>
      <h2>Variáveis CSS</h2>
      <p>Com <code>:root</code> e custom properties, você centraliza cores, fontes e espaçamentos. Trocar o tema inteiro do site pode ser questão de alterar algumas linhas.</p>
      <p>Menos dependências, mais controle. Esse é o caminho.</p>
    `
  },
  {
    id: 3,
    title: 'JavaScript vanilla no dia a dia',
    excerpt: 'Nem todo projeto precisa de um bundler. Para sites simples, JS puro continua sendo rápido e suficiente.',
    tag: 'JavaScript',
    date: '2026-05-28',
    content: `
      <p>JavaScript vanilla — sem frameworks — é perfeito para interações leves: busca em tempo real, menus, formulários e manipulação do DOM.</p>
      <p>Sem build step, sem node_modules gigantes. Abra o arquivo no navegador e funciona.</p>
      <h2>Quando usar</h2>
      <p>Blogs, landing pages, portfolios e protótipos se beneficiam muito dessa abordagem. Você entrega rápido e mantém o código fácil de entender.</p>
      <p>Frameworks têm seu lugar, mas não são obrigatórios para criar coisas úteis na web.</p>
    `
  },
  {
    id: 4,
    title: 'Escrevendo para a web',
    excerpt: 'Textos curtos, parágrafos claros e títulos descritivos tornam a leitura online muito mais agradável.',
    tag: 'Escrita',
    date: '2026-05-20',
    content: `
      <p>Ler na tela é diferente de ler no papel. As pessoas escaneiam, não leem palavra por palavra. Seu texto precisa respeitar isso.</p>
      <p>Use parágrafos curtos. Quebre ideias complexas em seções com subtítulos. Destaque o que importa.</p>
      <h2>Seja direto</h2>
      <p>Evite rodeios. Vá ao ponto. Se o leitor quiser se aprofundar, ele continua lendo — mas a mensagem principal deve ficar clara nos primeiros segundos.</p>
      <p>Bons textos na web são simples, honestos e respeitam o tempo de quem lê.</p>
    `
  }
];

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T12:00:00');
  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

function getPostById(id) {
  return posts.find(post => post.id === Number(id));
}

function createPostCard(post) {
  const card = document.createElement('a');
  card.href = `post.html?id=${post.id}`;
  card.className = 'post-card';
  card.innerHTML = `
    <div class="post-card-meta">
      <span class="post-card-tag">${post.tag}</span>
      <time datetime="${post.date}">${formatDate(post.date)}</time>
    </div>
    <h3>${post.title}</h3>
    <p>${post.excerpt}</p>
    <span class="post-card-footer">Ler mais →</span>
  `;
  return card;
}

function renderPostsList(filter = '') {
  const list = document.getElementById('posts-list');
  const noResults = document.getElementById('no-results');
  if (!list) return;

  const query = filter.toLowerCase().trim();
  const filtered = posts.filter(post =>
    post.title.toLowerCase().includes(query) ||
    post.excerpt.toLowerCase().includes(query) ||
    post.tag.toLowerCase().includes(query)
  );

  list.innerHTML = '';
  filtered.forEach(post => list.appendChild(createPostCard(post)));

  if (noResults) {
    noResults.classList.toggle('hidden', filtered.length > 0);
  }
}

function renderPostPage() {
  const container = document.getElementById('post-content');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const post = getPostById(params.get('id'));

  if (!post) {
    container.innerHTML = `
      <div class="post-error">
        <h1>Post não encontrado</h1>
        <p>O post que você procura não existe ou foi removido.</p>
      </div>
    `;
    document.title = 'Post não encontrado — Meu Blog';
    return;
  }

  document.title = `${post.title} — Meu Blog`;
  container.innerHTML = `
    <article class="post-full">
      <div class="post-meta">
        <span class="post-tag">${post.tag}</span>
        <time datetime="${post.date}">${formatDate(post.date)}</time>
      </div>
      <h1>${post.title}</h1>
      <div class="post-body">${post.content}</div>
    </article>
  `;
}

function initHomePage() {
  const search = document.getElementById('search');
  renderPostsList();

  if (search) {
    search.addEventListener('input', (e) => {
      renderPostsList(e.target.value);
    });
  }
}

if (document.getElementById('posts-list')) {
  initHomePage();
}


document.querySelector(`#app > div > div > div > div.px-0.py-3.flex.justify-center > a`)?.remove()