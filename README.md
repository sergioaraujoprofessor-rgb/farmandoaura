# Farmando Aura - O Cortiço 🚀

Este é um projeto gamificado desenvolvido para incentivar os alunos a praticarem leitura crítica e inferência sobre a obra "O Cortiço", de Aluísio Azevedo. O projeto utiliza uma estética moderna e pontuação competitiva global.

## 🛠️ Tecnologias Utilizadas
- **HTML5** e **Vanilla JavaScript** (Leveza e rapidez)
- **Tailwind CSS** (Estilização via CDN)
- **Supabase** (Banco de dados Backend-as-a-Service para o Leaderboard)
- **Chart.js** (Visualização da evolução do jogador)
- **Lucide Icons** (Ícones modernos)

## 📋 Como Funciona
O aluno inicia a página e insere seu nome/apelido. Em seguida, seleciona um capítulo de "O Cortiço" e tenta responder discursivamente a uma questão inferencial. Após submeter, o aluno avalia sua própria resposta em relação ao gabarito, ganhando ou perdendo "Aura" (pontos). Essa pontuação é instantaneamente sincronizada com a nuvem e exibida no Ranking Global da turma.

## ⚙️ Configuração e Execução (Para Professores)

1. **Configurar o Banco de Dados:**
   - Crie um projeto no [Supabase](https://supabase.com/).
   - Crie uma tabela `leaderboard` com as colunas: `id` (uuid, PK), `student_name` (text), `score` (int8).
   - Insira sua **URL** e **Anon Key** nas variáveis `SUPABASE_URL` e `SUPABASE_KEY` dentro do arquivo principal (HTML).

2. **Hospedagem (Deploy):**
   - Suba este código (renomeando o HTML para `index.html`) para um repositório público no GitHub.
   - Ative o **GitHub Pages** (Settings -> Pages).
   - Envie o link gerado para os alunos!

## 📜 Histórico de Modificações (Changelog)
- **v1.0.0**: Criação inicial (HTML/Tailwind/JS) com armazenamento local das questões, gráfico e estética Vibe Coding. (Baseado na primeira iteração com Gemini).
- **v2.0.0 (Atual)**: 
  - Adicionado SDK do Supabase.
  - Criado sistema de modal para captação do nome do aluno.
  - Criada seção e painel de Leaderboard Global com listagem (Top 10).
  - Ajustes avançados de UI com Glassmorphism, Background dinâmico e Lucide Icons.
