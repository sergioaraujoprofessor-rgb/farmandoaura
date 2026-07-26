21:    <script>
22-        tailwind.config = {
23-            darkMode: 'class',
24-            theme: {
25-                extend: {
26-                    fontFamily: {
27-                        sans: ['Inter', 'sans-serif'],
28-                        display: ['Outfit', 'sans-serif'],
29-                    },
30-                    colors: {
31-                        brand: {
32-                            50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd', 400: '#a78bfa',
33-                            500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 800: '#5b21b6', 900: '#4c1d95',
34-                        },
35-                        dark: { 900: '#09090b', 800: '#18181b', 700: '#27272a' }
36-                    },
37-                    animation: {
38-                        'float-up': 'floatUp 1.5s ease-out forwards',
39-                        'float-down': 'floatDown 1.5s ease-out forwards',
40-                        'blob': "blob 7s infinite",
41-                    },
42-                    keyframes: {
43-                        floatUp: { '0%': { opacity: 1, transform: 'translateY(0) scale(1)' }, '100%': { opacity: 0, transform: 'translateY(-60px) scale(1.2)' } },
44-                        floatDown: { '0%': { opacity: 1, transform: 'translateY(0) scale(1)' }, '100%': { opacity: 0, transform: 'translateY(60px) scale(0.8)' } },
45-                        blob: { "0%": { transform: "translate(0px, 0px) scale(1)" }, "33%": { transform: "translate(30px, -50px) scale(1.1)" }, "66%": { transform: "translate(-20px, 20px) scale(0.9)" }, "100%": { transform: "translate(0px, 0px) scale(1)" } }
46-                    }
47-                }
48-            }
49-        }
50-    </script>
51-
52-    <style>
53-        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;600;700;800&display=swap');
54-        body { background-color: #09090b; color: #f4f4f5; }
55-        .glass-panel { background: rgba(24, 24, 27, 0.65); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
56-        .glass-card { background: rgba(39, 39, 42, 0.5); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.05); }
57-        ::-webkit-scrollbar { width: 8px; height: 8px; }
58-        ::-webkit-scrollbar-track { background: transparent; }
59-        ::-webkit-scrollbar-thumb { background: #3f3f46; border-radius: 4px; }
60-        ::-webkit-scrollbar-thumb:hover { background: #52525b; }
61-        .avatar-option.selected { border-color: #8b5cf6; background-color: rgba(139, 92, 246, 0.2); transform: scale(1.1); }
62-    </style>
63-</head>
64-<body class="h-screen w-screen overflow-hidden flex flex-col md:flex-row p-2 md:p-6 gap-6 relative font-sans text-slate-200">
65-
66-    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0 flex justify-center items-center opacity-30">
67-        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
68-        <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
69-        <div class="absolute -bottom-32 left-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
70-    </div>
71-
72-    <!-- MAIN CONTENT -->
73-    <div class="z-10 flex flex-col md:flex-row w-full h-full gap-6">
74-        
75-        <!-- Painel Lateral -->
76-        <aside class="w-full md:w-1/3 glass-panel rounded-3xl p-8 flex flex-col relative overflow-hidden group">
77-            <header class="text-center mb-6 relative">
78-                <div class="inline-flex items-center justify-center p-3 rounded-2xl bg-brand-500/10 mb-4 ring-1 ring-brand-500/30 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
79-                    <i data-lucide="sparkles" class="w-8 h-8 text-brand-400 fallback-icon">✨</i>
80-                </div>
81-                <h1 class="text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-purple-400 to-blue-400">
82-                    Aura Tracker
83-                </h1>
84-                
85-                <div class="mt-4 flex items-center justify-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/10">
86-                    <span id="playerAvatar" class="text-3xl">👤</span>
87-                    <div class="flex flex-col items-start">
88-                        <span id="playerDisplay" class="text-sm font-semibold text-slate-200 uppercase tracking-wider">Identificando...</span>
89-                        <div class="flex items-center gap-1">
90-                            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
91-                            <span class="text-[10px] text-slate-400 uppercase tracking-widest">Online</span>
92-                        </div>
93-                    </div>
94-                </div>
95-            </header>
96-            
97-            <div class="flex-1 flex flex-col items-center justify-center relative">
98-                <div class="text-7xl font-display font-black mb-1 transition-all duration-500 tracking-tighter drop-shadow-2xl" id="auraScore">0</div>
99-                <div class="text-brand-400/80 uppercase tracking-[0.2em] text-xs font-bold mb-4">Pontos de Aura</div>
100-                
101-                <div class="w-full flex-1 min-h-[150px] relative">
102-                    <canvas id="auraChart"></canvas>
103-                </div>
104-            </div>
105-
106-            <button onclick="openLeaderboard()" class="mt-4 w-full py-4 rounded-2xl glass-card flex items-center justify-center gap-3 text-slate-200 hover:text-white hover:bg-white/5 transition-all border border-white/5 hover:border-brand-500/40">
107-                <i data-lucide="trophy" class="w-5 h-5 text-yellow-400 fallback-icon">🏆</i>
108-                <span class="font-semibold tracking-wide">Ranking Global da Turma</span>
109-            </button>
110-
111-            <div id="animContainer" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-display font-black pointer-events-none opacity-0 z-50 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
112-        </aside>
113-
114-        <!-- Área de Jogo -->
115-        <main class="w-full md:w-2/3 glass-panel rounded-3xl p-8 flex flex-col relative overflow-hidden">
116-            
117-            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-white/10 pb-6">
118-                <div class="flex items-center gap-3">
119-                    <div class="p-2 rounded-lg bg-blue-500/10 ring-1 ring-blue-500/30">
120-                        <i data-lucide="book-open" class="w-5 h-5 text-blue-400 fallback-icon">📖</i>
121-                    </div>
122-                    <h2 class="text-2xl font-display font-bold text-white">Análise Discursiva</h2>
123-                </div>
124-                
125-                <div class="relative w-full sm:w-64">
126-                    <select id="chapterSelect" class="w-full appearance-none bg-dark-800/80 backdrop-blur-md text-white border border-white/10 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-brand-500 outline-none font-medium cursor-pointer">
127-                        <!-- Gerado via JS -->
128-                    </select>
129-                    <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none fallback-icon">▼</i>
130-                </div>
131-            </div>
132-
133-            <!-- Welcome -->
134-            <div id="welcomeArea" class="flex-1 flex flex-col items-center justify-center text-center">
135-                <div class="w-24 h-24 mb-6 rounded-full bg-brand-500/10 flex items-center justify-center border border-brand-500/20">
136-                    <i data-lucide="brain" class="w-12 h-12 text-brand-400 fallback-icon">🧠</i>
137-                </div>
138-                <h2 class="text-3xl font-display font-bold text-white mb-4">Máquina de Aura Naturalista</h2>
139-                <p class="text-slate-400 max-w-lg leading-relaxed text-lg">
140-                    Selecione um capítulo de <span class="text-slate-200 font-semibold">"O Cortiço"</span> acima. Existe exatamente <b>1 desafio de inferência</b> por capítulo.
141-                </p>
142-            </div>
143-
144-            <!-- Question -->
145-            <div id="questionArea" class="flex-1 flex flex-col hidden h-full">
146-                <div class="glass-card rounded-2xl p-6 mb-4 shadow-inner relative overflow-hidden">
147-                    <div class="absolute top-0 left-0 w-1 h-full bg-brand-500"></div>
148-                    <h3 class="text-sm uppercase tracking-widest text-brand-400 font-bold mb-2 flex items-center gap-2">
149-                        <i data-lucide="target" class="w-4 h-4 fallback-icon">🎯</i> Questão Exclusiva do Capítulo
150-                    </h3>
151-                    <p id="questionText" class="text-slate-100 leading-relaxed text-lg font-medium"></p>
152-                </div>
153-
154-                <div class="flex-1 flex flex-col gap-4 relative min-h-[150px]">
155-                    <textarea id="studentAnswer" class="w-full flex-1 bg-dark-900/50 border border-white/10 rounded-2xl p-6 text-slate-100 placeholder-slate-600 focus:ring-2 focus:ring-brand-500 resize-none outline-none font-medium" placeholder="Digite sua análise crítica aqui..."></textarea>
156-                    
157-                    <button id="btnSubmit" class="absolute bottom-6 right-6 bg-white text-dark-900 hover:bg-slate-200 font-bold py-3 px-8 rounded-xl flex items-center gap-2 group">
158-                        <span>Verificar Resposta</span>
159-                        <i data-lucide="arrow-right" class="w-4 h-4 fallback-icon group-hover:translate-x-1 transition-transform">→</i>
160-                    </button>
161-                </div>
162-
163-                <!-- Avaliação -->
164-                <div id="evaluationArea" class="hidden mt-4 glass-card rounded-2xl p-5 border border-white/5 flex-shrink-0">
165-                    <div class="bg-dark-900/80 rounded-xl p-4 border-l-4 border-emerald-500 mb-4">
166-                        <h3 class="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-2">Padrão de Resposta Esperado</h3>
167-                        <p id="expectedAnswer" class="text-slate-200 text-sm leading-relaxed font-medium"></p>
168-                    </div>
169-                    
170-                    <h4 class="text-center text-white font-display font-semibold mb-4">Como foi sua resposta comparada ao padrão?</h4>
171-                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
172-                        <button onclick="farmAura(1000)" class="bg-dark-800 border border-emerald-500/30 hover:border-emerald-500 p-3 rounded-xl flex flex-col items-center gap-1 text-emerald-400">
173-                            <span class="font-bold text-xs uppercase">Acertei Totalmente</span>
174-                            <span class="text-lg font-black">+1000</span>
175-                        </button>
176-                        <button onclick="farmAura(400)" class="bg-dark-800 border border-yellow-500/30 hover:border-yellow-500 p-3 rounded-xl flex flex-col items-center gap-1 text-yellow-400">
177-                            <span class="font-bold text-xs uppercase">Acertei Parcialmente</span>
178-                            <span class="text-lg font-black">+400</span>
179-                        </button>
180-                        <button onclick="farmAura(-300)" class="bg-dark-800 border border-rose-500/30 hover:border-rose-500 p-3 rounded-xl flex flex-col items-center gap-1 text-rose-400">
181-                            <span class="font-bold text-xs uppercase">Errei / Senso Comum</span>
182-                            <span class="text-lg font-black">-300</span>
183-                        </button>
184-                    </div>
185-                </div>
186-            </div>
187-        </main>
188-    </div>
189-
190-    <!-- MODAL LOGIN -->
191-    <div id="loginModal" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md hidden opacity-0 transition-opacity">
192-        <div class="glass-panel rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl border border-white/10" id="loginModalContent">
193-            <div class="text-center mb-6">
194-                <video src="https://con3ktar.nekoweb.org/coloque_os_n%C3%83%C2%BAmeros_e_rodan.mp4" autoplay loop muted playsinline class="w-full h-48 object-cover rounded-2xl mb-4 shadow-[0_0_30px_rgba(139,92,246,0.3)] border border-brand-500/30"></video>
195-                <h2 class="text-2xl font-display font-bold text-white mb-2">Identifique-se</h2>
196-                <p class="text-slate-400 text-sm">Digite seu nome para iniciar o Farm de Aura.</p>
197-            </div>
198-            
199-            <form id="loginForm" class="flex flex-col gap-6">
200-
201-                <input type="text" id="playerNameInput" required placeholder="Seu Nome / Apelido" class="w-full bg-dark-900/50 border border-white/10 rounded-xl px-5 py-4 text-white text-center font-bold text-lg outline-none focus:border-brand-500 transition-colors">
202-                
203-                <button type="submit" class="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all hover:scale-[1.02]">
204-                    <span>Entrar no Jogo</span>
205-                    <i data-lucide="play" class="w-5 h-5 fallback-icon">▶</i>
206-                </button>
207-            </form>
208-        </div>
209-    </div>
210-
211-    <!-- MODAL LEADERBOARD -->
212-    <div id="leaderboardModal" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md hidden opacity-0 transition-opacity">
213-        <div class="glass-panel rounded-3xl w-full max-w-2xl mx-4 max-h-[80vh] flex flex-col shadow-2xl border border-white/10">
214-            <div class="p-6 border-b border-white/10 flex justify-between items-center bg-white/5 rounded-t-3xl">
215-                <h2 class="text-2xl font-display font-bold text-white flex items-center gap-3">
216-                    <i data-lucide="trophy" class="w-6 h-6 text-yellow-400 fallback-icon">🏆</i> Ranking Global
217-                </h2>
218-                <button onclick="closeLeaderboard()" class="text-slate-400 hover:text-white">
219-                    <i data-lucide="x" class="w-6 h-6 fallback-icon">✕</i>
220-                </button>
221-            </div>
--
230:    <script>
231-        // Init ícones de forma super segura
232-        function renderIcons() {
233-            if (window.lucide) {
234-                try {
235-                    lucide.createIcons();
236-                    document.querySelectorAll('.fallback-icon').forEach(el => el.style.display = 'none');
237-                } catch(e) {}
238-            }
239-        }
240-        renderIcons();
241-
242-        // 23 QUESTÕES EXCLUSIVAS
243-        const corticoData = {
244-            1: { q: "Como a trajetória inicial de João Romão ilustra o conceito de 'acumulação primitiva' de capital, e qual a função de Bertoleza nesse processo?", a: "João Romão enriquece através da extrema privação de consumo próprio e da exploração absoluta do trabalho alheio (Bertoleza). Ele a engana com uma falsa alforria, simbolizando o capitalismo que se apropria e se disfarça sobre as lógicas da escravidão." },
245-            2: { q: "O que o sobrado de Miranda representa estruturalmente em contraposição ao cortiço em formação, e qual a base do conflito entre os dois vizinhos?", a: "O sobrado representa o isolamento aristocrático/burguês europeizado, enquanto o cortiço é a força coletiva e desordenada do povo. O conflito é movido pela inveja: Miranda inveja a expansão territorial de Romão, e Romão inveja o status social (título) de Miranda." },
246-            3: { q: "Analise a figura de Jerônimo antes de sofrer a influência do 'meio' brasileiro. O que ele representa na ótica naturalista?", a: "Jerônimo é o imigrante português idealizado inicialmente: puritano, focado no trabalho braçal, metódico e incorruptível. Ele representa a moralidade rígida europeia antes de ser 'contaminada' pelo determinismo climático e social dos trópicos." },
247-            4: { q: "Explique a função de Rita Baiana como agente do determinismo sobre Jerônimo.", a: "Rita personifica a sensualidade, o calor e a cultura dionisíaca do Brasil. Ela é a força da natureza (o meio) que atua fisicamente sobre Jerônimo através dos sentidos (o cheiro, a dança), quebrando sua razão moral europeia." },
248-            5: { q: "Qual a motivação para o súbito 'aburguesamento' de João Romão, e como isso afeta a visão que ele tem de Bertoleza?", a: "Acumulado o capital, Romão deseja status e respeitabilidade (título). Ele começa a investir em aparência para se igualar a Miranda. Ao fazer isso, a presença suja e escrava de Bertoleza passa a ser um estorvo para sua nova imagem elitista." },
249-            6: { q: "Qual é o papel das lavadeiras (como Leocádia e Paula) na construção do cortiço como um organismo vivo?", a: "As lavadeiras representam o aspecto visceral do cortiço. A ausência de privacidade na lavagem das roupas simboliza a vida coletivizada, onde a fofoca e a vigilância mútua formam o 'sangue' social que corre nas veias do organismo cortiço." },
250-            7: { q: "Analise a cena do chorinho e da dança. De que modo a música atua como força naturalista?", a: "A música age não como arte intelectual, mas como feitiço biológico. O chorinho entorpece a racionalidade europeia, estimulando instintos primitivos, a malemolência e os impulsos sexuais, provando a vitória da fisiologia sobre a moral." },
251-            8: { q: "Como Firmo se posiciona no antagonismo direto contra Jerônimo?", a: "Firmo é o malandro carioca, o capoeirista que domina a rua e a destreza física local. Ele é o obstáculo natural de Jerônimo pela posse de Rita Baiana, representando o embate direto entre o português colonizador e o mestiço colonizado." },
252-            9: { q: "Durante a briga na venda e o episódio da navalha, como os personagens são reduzidos à animalidade?", a: "Na visão naturalista de Aluísio, durante a violência extrema, o instinto de sobrevivência sobrepõe a civilidade. Os movimentos de Firmo (ágil como um gato/cobra) e a fúria cega de Jerônimo (como um touro) reduzem os humanos a feras brigando por território e acasalamento." },
253-            10: { q: "Qual o impacto da consumação física da paixão entre Jerônimo e Rita Baiana na trajetória do português?", a: "Marca o ponto sem retorno de sua 'abrasileiração'. O ato físico sela a corrupção de sua ética original de trabalhador; ele abandona as obrigações familiares (Piedade) em prol da satisfação biológica." },
254-            11: { q: "O que o acidente na pedreira revela sobre o valor da vida operária no sistema de João Romão?", a: "Revela que a vida humana é descartável perante a lógica do lucro. A pedra (matéria bruta) e a produtividade importam mais que a segurança dos trabalhadores, ilustrando a exploração desumana da classe baixa." },
255-            12: { q: "O calor excessivo é constantemente citado pelo narrador. Como o clima atua como força motriz das ações?", a: "No determinismo geográfico da obra, o sol e o calor dos trópicos não apenas aquecem, mas 'derretem' a moralidade, incitam a promiscuidade e afrouxam os laços da civilidade importada da Europa." },
256-            13: { q: "Como a condição fisiológica de Pombinha (sua menstruação tardia) a amarra ao cortiço inicialmente?", a: "A ausência da menstruação a impede de casar (cumprir seu papel social). Pombinha é a 'flor do lodo', a pureza ilhada no cortiço, provando que no naturalismo a fisiologia (biologia) comanda o destino social da mulher." },
257-            14: { q: "O que a personagem Léonie representa na transformação moral de Pombinha?", a: "Léonie, a cortesã rica, mostra a Pombinha que a pureza e a pobreza são castigos, enquanto a prostituição elitizada traz conforto e status. Ela é a agente corruptora que desperta a sexualidade e o materialismo em Pombinha." },
258-            15: { q: "Após ceder à paixão, como Jerônimo planeja sua vitória sobre Firmo e o que isso indica sobre sua moralidade?", a: "Ele abandona a luta justa (braçal) e age com traição e tocaia. Essa covardia premeditada indica que ele perdeu completamente seus antigos valores de honra portugueses, adaptando-se às regras selvagens de sobrevivência local." },
259-            16: { q: "Qual o destino de Piedade após ser abandonada e o que isso comprova no romance?", a: "Piedade sucumbe ao desespero, à miséria e ao alcoolismo, passando a viver das sobras e da compaixão do cortiço. Comprova que o determinismo pune não só quem se entrega aos instintos, mas também quem não consegue se adaptar ao meio hostil." },
260-            17: { q: "Qual é o sentido simbólico do grande incêndio que destrói parte do cortiço?", a: "O incêndio purga o espaço velho, destruindo as moradias miseráveis originais. Ele funciona como um elemento de renovação agressiva, abrindo espaço físico para o avanço do capitalismo imobiliário de Romão." },
261-            18: { q: "Após o incêndio, nasce a 'Avenida São João'. Qual é a crítica naturalista à higienização das cidades?", a: "A crítica aponta que a urbanização moderna (a nova avenida) apenas mascara a exploração. A miséria ganha uma fachada respeitável e muros limpos, mas a essência do cortiço e do sofrimento trabalhador permanece sob a capa do progresso." },
262-            19: { q: "O que a concretização do casamento de Romão com Zulmira (filha de Miranda) sela socialmente?", a: "Sela a vitória do capital bruto (Romão) que, enfim, consegue se fundir com a aristocracia/títulos (Miranda). A união das duas classes dominantes sobre os escombros e o sangue dos explorados." },
263-            20: { q: "Como os moradores antigos (como Machona e Leocádia) terminam na nova configuração do cortiço?", a: "Eles continuam presos à miséria cíclica ou são expulsos. A prosperidade do local nunca é repassada aos trabalhadores que o ergueram; eles são apenas peças descartadas de uma máquina biológica e econômica." },
264-            21: { q: "Por que Bertoleza passa a ser uma ameaça existencial e social para o plano de João Romão no final da obra?", a: "Prestes a casar com Zulmira e receber títulos nobres, Romão não pode ter sua imagem ligada a uma mulher negra, escrava fugida e amasiada. Ela é a prova viva de seus crimes e de sua verdadeira origem suja." },
265-            22: { q: "Qual foi a manobra final de João Romão para se livrar de Bertoleza?", a: "Como não pode matá-la diretamente sem escândalo, ele denuncia o paradeiro dela aos seus antigos donos. Ele usa o próprio sistema jurídico-escravocrata do qual ele a 'salvou' falsamente no início para eliminá-la de forma 'legal'." },
266-            23: { q: "Analise o desfecho: o suicídio de Bertoleza seguido da condecoração abolicionista de João Romão.", a: "Bertoleza rasga o ventre para não voltar ao cativeiro, sendo a vítima máxima do sistema. Ironicamente, Romão recebe uma comissão de abolicionistas que o glorifica. A obra fecha com a tese de que a burguesia se constrói na mais profunda hipocrisia e sobre os cadáveres dos oprimidos." }
267-        };
268-
269-        // VARIÁVEIS
270-        let currentChapter = 1;
271-        let playerData = { id: null, name: null, avatar: 'https://con3ktar.nekoweb.org/farmador.png', aura: 0, history: [0] };
272-        
273-        const SUPABASE_URL = 'https://tjvaszhoigbbqnbdpezx.supabase.co';
274-        const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqdmFzemhvaWdiYnFuYmRwZXp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwNzgzNTIsImV4cCI6MjEwMDY1NDM1Mn0.xBfUEaOBEc7_AFtuIHMJftrEBV4W3GUDL7Dh7IkYGbE';
275-        let supabase = null;
276-
277-        // Tenta inicializar SDK do Supabase
278-        try {
279-            if (window.supabase) supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
280-        } catch(e) {}
281-
282-        // DOM Elements
283-        const playerDisplay = document.getElementById('playerDisplay');
284-        const playerAvatar = document.getElementById('playerAvatar');
285-        const auraScore = document.getElementById('auraScore');
286-        const chapterSelect = document.getElementById('chapterSelect');
287-        const questionText = document.getElementById('questionText');
288-        const expectedAnswer = document.getElementById('expectedAnswer');
289-        const studentAnswer = document.getElementById('studentAnswer');
290-        const btnSubmit = document.getElementById('btnSubmit');
291-        const evaluationArea = document.getElementById('evaluationArea');
292-        const welcomeArea = document.getElementById('welcomeArea');
293-        const questionArea = document.getElementById('questionArea');
294-
295-        // Lógica Principal
296-        function initApp() {
297-            try { loadLocalData(); } catch(e){}
298-            
299-            buildChapterSelect();
300-            
301-            try { initChart(); } catch(e) { console.warn("Chart n carregou", e); }
302-            
303-            if (!playerData.id || !playerData.name) {
304-                document.getElementById('loginModal').classList.remove('hidden');
305-                setTimeout(() => document.getElementById('loginModal').classList.remove('opacity-0'), 10);
306-            } else {
307-                updateUI();
308-            }
309-
310-            chapterSelect.addEventListener('change', (e) => {
311-                currentChapter = parseInt(e.target.value);
312-                loadQuestion();
313-            });
314-
315-            btnSubmit.addEventListener('click', () => {
316-                if(studentAnswer.value.trim() === "") {
317-                    studentAnswer.classList.add('ring-2', 'ring-rose-500');
318-                    setTimeout(() => studentAnswer.classList.remove('ring-2', 'ring-rose-500'), 1000);
319-                    return;
320-                }
321-                btnSubmit.classList.add('hidden');
322-                studentAnswer.disabled = true;
323-                evaluationArea.classList.remove('hidden');
324-            });
325-        }
326-
327-        function loadLocalData() {
328-            const saved = localStorage.getItem('cortico_v3');
329-            if(saved) playerData = JSON.parse(saved);
330-        }
331-
332-        function saveLocalData() {
333-            try { localStorage.setItem('cortico_v3', JSON.stringify(playerData)); } catch(e){}
334-        }
335-
336-        document.getElementById('loginForm').addEventListener('submit', (e) => {
337-            e.preventDefault();
338-            const name = document.getElementById('playerNameInput').value.trim();
339-            if (name) {
340-                playerData.id = 'id_' + Math.random().toString(36).substr(2, 9);
341-                playerData.name = name;
342-                playerData.avatar = 'https://con3ktar.nekoweb.org/farmador.png'; // Força o avatar único
343-                saveLocalData();
344-                
345-                document.getElementById('loginModal').classList.add('opacity-0');
346-                setTimeout(() => document.getElementById('loginModal').classList.add('hidden'), 300);
347-                
348-                updateUI();
349-                syncSupabase();
350-            }
351-        });
352-
353-        function updateUI() {
354-            playerDisplay.innerText = playerData.name;
355-            
356-            if (playerData.avatar && playerData.avatar.includes('/')) {
357-                playerAvatar.innerHTML = `<img src="${playerData.avatar}" class="w-10 h-10 object-cover rounded-lg shadow-md" onerror="this.src='https://ui-avatars.com/api/?name=Aura&background=0D8ABC&color=fff'">`;
358-            } else {
359-                playerAvatar.innerText = playerData.avatar || '👤';
360-            }
361-
362-            auraScore.innerText = playerData.aura;
363-            if(window.auraChartInstance) {
364-                auraChartInstance.data.labels = playerData.history.map((_, i) => 'Desafio ' + i);
365-                auraChartInstance.data.datasets[0].data = playerData.history;
366-                auraChartInstance.update();
367-            }
368-        }
369-
370-        function buildChapterSelect() {
371-            for (let i = 1; i <= 23; i++) {
372-                let opt = document.createElement('option');
373-                opt.value = i; opt.textContent = `Capítulo ${i}`;
374-                chapterSelect.appendChild(opt);
375-            }
376-        }
377-
378-        function loadQuestion() {
379-            welcomeArea.classList.add('hidden');
380-            questionArea.classList.remove('hidden');
381-            evaluationArea.classList.add('hidden');
382-            studentAnswer.value = '';
383-            studentAnswer.disabled = false;
384-            btnSubmit.classList.remove('hidden');
385-            
386-            const data = corticoData[currentChapter];
387-            questionText.textContent = data.q;
388-            expectedAnswer.textContent = data.a;
389-        }
390-
391-        window.farmAura = function(points) {
392-            playerData.aura += points;
393-            playerData.history.push(playerData.aura);
394-            saveLocalData();
395-            updateUI();
396-            syncSupabase();
397-
398-            // Anim
399-            const isPositive = points > 0;
400-            const anim = document.getElementById('animContainer');
401-            anim.textContent = isPositive ? `+${points} AURA!` : `${points} AURA...`;
402-            anim.className = `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-display font-black pointer-events-none z-50 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] ${isPositive ? 'text-emerald-400 animate-float-up' : 'text-rose-500 animate-float-down'}`;
403-            anim.style.opacity = '1';
404-            
405-            setTimeout(() => {
406-                anim.style.opacity = '0';
407-                anim.classList.remove('animate-float-up', 'animate-float-down');
408-                if (currentChapter < 23) {
409-                    currentChapter++;
410-                    chapterSelect.value = currentChapter;
411-                    loadQuestion();
412-                }
413-            }, 1000);
414-        }
415-
416-        async function syncSupabase() {
417-            if (!supabase || !playerData.id) return;
418-            try {
419-                await supabase.from('leaderboard').upsert({ 
420-                    id: playerData.id, 
421-                    student_name: playerData.name, 
422-                    score: playerData.aura,
423-                    avatar: playerData.avatar // REQUER NOVA COLUNA NO BANCO
424-                }, { onConflict: 'id' });
425-            } catch (err) {}
426-        }
427-
428-        window.openLeaderboard = async function() {
429-            document.getElementById('leaderboardModal').classList.remove('hidden');
430-            setTimeout(() => document.getElementById('leaderboardModal').classList.remove('opacity-0'), 10);
