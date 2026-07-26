
        // Init ícones de forma super segura
        function renderIcons() {
            if (window.lucide) {
                try {
                    lucide.createIcons();
                    document.querySelectorAll('.fallback-icon').forEach(el => el.style.display = 'none');
                } catch(e) {}
            }
        }
        renderIcons();

        // 23 QUESTÕES EXCLUSIVAS
        const corticoData = {
            1: { q: "Como a trajetória inicial de João Romão ilustra o conceito de 'acumulação primitiva' de capital, e qual a função de Bertoleza nesse processo?", a: "João Romão enriquece através da extrema privação de consumo próprio e da exploração absoluta do trabalho alheio (Bertoleza). Ele a engana com uma falsa alforria, simbolizando o capitalismo que se apropria e se disfarça sobre as lógicas da escravidão." },
            2: { q: "O que o sobrado de Miranda representa estruturalmente em contraposição ao cortiço em formação, e qual a base do conflito entre os dois vizinhos?", a: "O sobrado representa o isolamento aristocrático/burguês europeizado, enquanto o cortiço é a força coletiva e desordenada do povo. O conflito é movido pela inveja: Miranda inveja a expansão territorial de Romão, e Romão inveja o status social (título) de Miranda." },
            3: { q: "Analise a figura de Jerônimo antes de sofrer a influência do 'meio' brasileiro. O que ele representa na ótica naturalista?", a: "Jerônimo é o imigrante português idealizado inicialmente: puritano, focado no trabalho braçal, metódico e incorruptível. Ele representa a moralidade rígida europeia antes de ser 'contaminada' pelo determinismo climático e social dos trópicos." },
            4: { q: "Explique a função de Rita Baiana como agente do determinismo sobre Jerônimo.", a: "Rita personifica a sensualidade, o calor e a cultura dionisíaca do Brasil. Ela é a força da natureza (o meio) que atua fisicamente sobre Jerônimo através dos sentidos (o cheiro, a dança), quebrando sua razão moral europeia." },
            5: { q: "Qual a motivação para o súbito 'aburguesamento' de João Romão, e como isso afeta a visão que ele tem de Bertoleza?", a: "Acumulado o capital, Romão deseja status e respeitabilidade (título). Ele começa a investir em aparência para se igualar a Miranda. Ao fazer isso, a presença suja e escrava de Bertoleza passa a ser um estorvo para sua nova imagem elitista." },
            6: { q: "Qual é o papel das lavadeiras (como Leocádia e Paula) na construção do cortiço como um organismo vivo?", a: "As lavadeiras representam o aspecto visceral do cortiço. A ausência de privacidade na lavagem das roupas simboliza a vida coletivizada, onde a fofoca e a vigilância mútua formam o 'sangue' social que corre nas veias do organismo cortiço." },
            7: { q: "Analise a cena do chorinho e da dança. De que modo a música atua como força naturalista?", a: "A música age não como arte intelectual, mas como feitiço biológico. O chorinho entorpece a racionalidade europeia, estimulando instintos primitivos, a malemolência e os impulsos sexuais, provando a vitória da fisiologia sobre a moral." },
            8: { q: "Como Firmo se posiciona no antagonismo direto contra Jerônimo?", a: "Firmo é o malandro carioca, o capoeirista que domina a rua e a destreza física local. Ele é o obstáculo natural de Jerônimo pela posse de Rita Baiana, representando o embate direto entre o português colonizador e o mestiço colonizado." },
            9: { q: "Durante a briga na venda e o episódio da navalha, como os personagens são reduzidos à animalidade?", a: "Na visão naturalista de Aluísio, durante a violência extrema, o instinto de sobrevivência sobrepõe a civilidade. Os movimentos de Firmo (ágil como um gato/cobra) e a fúria cega de Jerônimo (como um touro) reduzem os humanos a feras brigando por território e acasalamento." },
            10: { q: "Qual o impacto da consumação física da paixão entre Jerônimo e Rita Baiana na trajetória do português?", a: "Marca o ponto sem retorno de sua 'abrasileiração'. O ato físico sela a corrupção de sua ética original de trabalhador; ele abandona as obrigações familiares (Piedade) em prol da satisfação biológica." },
            11: { q: "O que o acidente na pedreira revela sobre o valor da vida operária no sistema de João Romão?", a: "Revela que a vida humana é descartável perante a lógica do lucro. A pedra (matéria bruta) e a produtividade importam mais que a segurança dos trabalhadores, ilustrando a exploração desumana da classe baixa." },
            12: { q: "O calor excessivo é constantemente citado pelo narrador. Como o clima atua como força motriz das ações?", a: "No determinismo geográfico da obra, o sol e o calor dos trópicos não apenas aquecem, mas 'derretem' a moralidade, incitam a promiscuidade e afrouxam os laços da civilidade importada da Europa." },
            13: { q: "Como a condição fisiológica de Pombinha (sua menstruação tardia) a amarra ao cortiço inicialmente?", a: "A ausência da menstruação a impede de casar (cumprir seu papel social). Pombinha é a 'flor do lodo', a pureza ilhada no cortiço, provando que no naturalismo a fisiologia (biologia) comanda o destino social da mulher." },
            14: { q: "O que a personagem Léonie representa na transformação moral de Pombinha?", a: "Léonie, a cortesã rica, mostra a Pombinha que a pureza e a pobreza são castigos, enquanto a prostituição elitizada traz conforto e status. Ela é a agente corruptora que desperta a sexualidade e o materialismo em Pombinha." },
            15: { q: "Após ceder à paixão, como Jerônimo planeja sua vitória sobre Firmo e o que isso indica sobre sua moralidade?", a: "Ele abandona a luta justa (braçal) e age com traição e tocaia. Essa covardia premeditada indica que ele perdeu completamente seus antigos valores de honra portugueses, adaptando-se às regras selvagens de sobrevivência local." },
            16: { q: "Qual o destino de Piedade após ser abandonada e o que isso comprova no romance?", a: "Piedade sucumbe ao desespero, à miséria e ao alcoolismo, passando a viver das sobras e da compaixão do cortiço. Comprova que o determinismo pune não só quem se entrega aos instintos, mas também quem não consegue se adaptar ao meio hostil." },
            17: { q: "Qual é o sentido simbólico do grande incêndio que destrói parte do cortiço?", a: "O incêndio purga o espaço velho, destruindo as moradias miseráveis originais. Ele funciona como um elemento de renovação agressiva, abrindo espaço físico para o avanço do capitalismo imobiliário de Romão." },
            18: { q: "Após o incêndio, nasce a 'Avenida São João'. Qual é a crítica naturalista à higienização das cidades?", a: "A crítica aponta que a urbanização moderna (a nova avenida) apenas mascara a exploração. A miséria ganha uma fachada respeitável e muros limpos, mas a essência do cortiço e do sofrimento trabalhador permanece sob a capa do progresso." },
            19: { q: "O que a concretização do casamento de Romão com Zulmira (filha de Miranda) sela socialmente?", a: "Sela a vitória do capital bruto (Romão) que, enfim, consegue se fundir com a aristocracia/títulos (Miranda). A união das duas classes dominantes sobre os escombros e o sangue dos explorados." },
            20: { q: "Como os moradores antigos (como Machona e Leocádia) terminam na nova configuração do cortiço?", a: "Eles continuam presos à miséria cíclica ou são expulsos. A prosperidade do local nunca é repassada aos trabalhadores que o ergueram; eles são apenas peças descartadas de uma máquina biológica e econômica." },
            21: { q: "Por que Bertoleza passa a ser uma ameaça existencial e social para o plano de João Romão no final da obra?", a: "Prestes a casar com Zulmira e receber títulos nobres, Romão não pode ter sua imagem ligada a uma mulher negra, escrava fugida e amasiada. Ela é a prova viva de seus crimes e de sua verdadeira origem suja." },
            22: { q: "Qual foi a manobra final de João Romão para se livrar de Bertoleza?", a: "Como não pode matá-la diretamente sem escândalo, ele denuncia o paradeiro dela aos seus antigos donos. Ele usa o próprio sistema jurídico-escravocrata do qual ele a 'salvou' falsamente no início para eliminá-la de forma 'legal'." },
            23: { q: "Analise o desfecho: o suicídio de Bertoleza seguido da condecoração abolicionista de João Romão.", a: "Bertoleza rasga o ventre para não voltar ao cativeiro, sendo a vítima máxima do sistema. Ironicamente, Romão recebe uma comissão de abolicionistas que o glorifica. A obra fecha com a tese de que a burguesia se constrói na mais profunda hipocrisia e sobre os cadáveres dos oprimidos." }
        };

        // VARIÁVEIS
        let currentChapter = 1;
        let playerData = { id: null, name: null, avatar: '👤', aura: 0, history: [0] };
        
        const SUPABASE_URL = 'https://tjvaszhoigbbqnbdpezx.supabase.co';
        const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqdmFzemhvaWdiYnFuYmRwZXp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwNzgzNTIsImV4cCI6MjEwMDY1NDM1Mn0.xBfUEaOBEc7_AFtuIHMJftrEBV4W3GUDL7Dh7IkYGbE';
        let supabase = null;

        // Tenta inicializar SDK do Supabase
        try {
            if (window.supabase) supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        } catch(e) {}

        const avatars = [
            'avatares/sukuna.jpg',
            'avatares/gojo.jpg',
            'avatares/batman.png',
            'avatares/sigma.jpg',
            'avatares/goku.png',
            '🦊', '🦁', '🐼' // Deixei alguns emojis caso eles não tenham todas as imagens
        ];
        
        // DOM Elements
        const playerDisplay = document.getElementById('playerDisplay');
        const playerAvatar = document.getElementById('playerAvatar');
        const auraScore = document.getElementById('auraScore');
        const chapterSelect = document.getElementById('chapterSelect');
        const questionText = document.getElementById('questionText');
        const expectedAnswer = document.getElementById('expectedAnswer');
        const studentAnswer = document.getElementById('studentAnswer');
        const btnSubmit = document.getElementById('btnSubmit');
        const evaluationArea = document.getElementById('evaluationArea');
        const welcomeArea = document.getElementById('welcomeArea');
        const questionArea = document.getElementById('questionArea');

        // Lógica Principal
        function initApp() {
            try { loadLocalData(); } catch(e){}
            
            buildAvatarSelection();
            buildChapterSelect();
            
            try { initChart(); } catch(e) { console.warn("Chart n carregou", e); }
            
            if (!playerData.id || !playerData.name) {
                document.getElementById('loginModal').classList.remove('hidden');
                setTimeout(() => document.getElementById('loginModal').classList.remove('opacity-0'), 10);
            } else {
                updateUI();
            }

            chapterSelect.addEventListener('change', (e) => {
                currentChapter = parseInt(e.target.value);
                loadQuestion();
            });

            btnSubmit.addEventListener('click', () => {
                if(studentAnswer.value.trim() === "") {
                    studentAnswer.classList.add('ring-2', 'ring-rose-500');
                    setTimeout(() => studentAnswer.classList.remove('ring-2', 'ring-rose-500'), 1000);
                    return;
                }
                btnSubmit.classList.add('hidden');
                studentAnswer.disabled = true;
                evaluationArea.classList.remove('hidden');
            });
        }

        function loadLocalData() {
            const saved = localStorage.getItem('cortico_v3');
            if(saved) playerData = JSON.parse(saved);
        }

        function saveLocalData() {
            try { localStorage.setItem('cortico_v3', JSON.stringify(playerData)); } catch(e){}
        }

        function buildAvatarSelection() {
            const container = document.getElementById('avatarSelection');
            avatars.forEach(av => {
                const div = document.createElement('div');
                div.className = `avatar-option text-3xl cursor-pointer p-2 rounded-xl text-center border-2 border-transparent transition-all hover:bg-white/10 flex items-center justify-center`;
                
                if (av.includes('/')) {
                    div.innerHTML = `<img src="${av}" class="w-12 h-12 object-cover rounded-lg shadow-lg pointer-events-none" onerror="this.src='https://ui-avatars.com/api/?name=Aura&background=0D8ABC&color=fff'">`;
                } else {
                    div.innerText = av;
                }
                
                if(av === playerData.avatar) div.classList.add('selected');
                
                div.onclick = () => {
                    document.querySelectorAll('.avatar-option').forEach(el => el.classList.remove('selected'));
                    div.classList.add('selected');
                    playerData.avatar = av;
                };
                container.appendChild(div);
            });
        }

        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('playerNameInput').value.trim();
            if (name) {
                playerData.id = 'id_' + Math.random().toString(36).substr(2, 9);
                playerData.name = name;
                if(!playerData.avatar) playerData.avatar = '👤';
                saveLocalData();
                
                document.getElementById('loginModal').classList.add('opacity-0');
                setTimeout(() => document.getElementById('loginModal').classList.add('hidden'), 300);
                
                updateUI();
                syncSupabase();
            }
        });

        function updateUI() {
            playerDisplay.innerText = playerData.name;
            
            if (playerData.avatar && playerData.avatar.includes('/')) {
                playerAvatar.innerHTML = `<img src="${playerData.avatar}" class="w-10 h-10 object-cover rounded-lg shadow-md" onerror="this.src='https://ui-avatars.com/api/?name=Aura&background=0D8ABC&color=fff'">`;
            } else {
                playerAvatar.innerText = playerData.avatar || '👤';
            }

            auraScore.innerText = playerData.aura;
            if(window.auraChartInstance) {
                auraChartInstance.data.labels = playerData.history.map((_, i) => 'Desafio ' + i);
                auraChartInstance.data.datasets[0].data = playerData.history;
                auraChartInstance.update();
            }
        }

        function buildChapterSelect() {
            for (let i = 1; i <= 23; i++) {
                let opt = document.createElement('option');
                opt.value = i; opt.textContent = `Capítulo ${i}`;
                chapterSelect.appendChild(opt);
            }
        }

        function loadQuestion() {
            welcomeArea.classList.add('hidden');
            questionArea.classList.remove('hidden');
            evaluationArea.classList.add('hidden');
            studentAnswer.value = '';
            studentAnswer.disabled = false;
            btnSubmit.classList.remove('hidden');
            
            const data = corticoData[currentChapter];
            questionText.textContent = data.q;
            expectedAnswer.textContent = data.a;
        }

        window.farmAura = function(points) {
            playerData.aura += points;
            playerData.history.push(playerData.aura);
            saveLocalData();
            updateUI();
            syncSupabase();

            // Anim
            const isPositive = points > 0;
            const anim = document.getElementById('animContainer');
            anim.textContent = isPositive ? `+${points} AURA!` : `${points} AURA...`;
            anim.className = `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-display font-black pointer-events-none z-50 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] ${isPositive ? 'text-emerald-400 animate-float-up' : 'text-rose-500 animate-float-down'}`;
            anim.style.opacity = '1';
            
            setTimeout(() => {
                anim.style.opacity = '0';
                anim.classList.remove('animate-float-up', 'animate-float-down');
                if (currentChapter < 23) {
                    currentChapter++;
                    chapterSelect.value = currentChapter;
                    loadQuestion();
                }
            }, 1000);
        }

        async function syncSupabase() {
            if (!supabase || !playerData.id) return;
            try {
                await supabase.from('leaderboard').upsert({ 
                    id: playerData.id, 
                    student_name: playerData.name, 
                    score: playerData.aura,
                    avatar: playerData.avatar // REQUER NOVA COLUNA NO BANCO
                }, { onConflict: 'id' });
            } catch (err) {}
        }

        window.openLeaderboard = async function() {
            document.getElementById('leaderboardModal').classList.remove('hidden');
            setTimeout(() => document.getElementById('leaderboardModal').classList.remove('opacity-0'), 10);
            
            const list = document.getElementById('leaderboardList');
            list.innerHTML = `<div class="absolute inset-0 flex items-center justify-center text-slate-400">Consultando o Universo...</div>`;
            
            if (!supabase) {
                list.innerHTML = `<div class="text-center text-yellow-500 mt-10">Banco de Dados Offline.</div>`;
                return;
            }

            try {
                const { data, error } = await supabase.from('leaderboard').select('student_name, score, avatar').order('score', { ascending: false }).limit(20);
                if (error || !data) throw error;
                
                list.innerHTML = '';
                data.forEach((player, index) => {
                    const row = document.createElement('div');
                    row.className = `flex items-center justify-between p-4 mb-2 rounded-xl ${index === 0 ? 'bg-yellow-500/10 border border-yellow-500/30' : 'bg-dark-800 border border-white/5'} transition-all`;
                    
                    let rankBadge = `<span class="w-8 h-8 flex items-center justify-center font-bold text-slate-400 bg-black/30 rounded-lg">#${index+1}</span>`;
                    if(index === 0) rankBadge = `<span class="w-8 h-8 flex items-center justify-center text-xl">🏆</span>`;
                    if(index === 1) rankBadge = `<span class="w-8 h-8 flex items-center justify-center text-xl">🥈</span>`;
                    if(index === 2) rankBadge = `<span class="w-8 h-8 flex items-center justify-center text-xl">🥉</span>`;

                    let av = player.avatar || '👤';
                    if (av.includes('/')) {
                        av = `<img src="${av}" class="w-10 h-10 object-cover rounded-lg shadow-md border border-brand-500/30" onerror="this.src='https://ui-avatars.com/api/?name=Aura'">`;
                    }

                    row.innerHTML = `
                        <div class="flex items-center gap-4">
                            ${rankBadge}
                            <div class="flex items-center justify-center w-10 h-10 text-2xl">${av}</div>
                            <span class="font-bold text-lg text-white">${player.student_name}</span>
                        </div>
                        <div class="font-display font-black text-xl text-brand-400">${player.score}</div>
                    `;
                    list.appendChild(row);
                });
            } catch (err) {
                list.innerHTML = `<div class="text-center text-rose-500 mt-10">Falha ao buscar ranking. Verifique as chaves e a coluna "avatar".</div>`;
            }
        }

        window.closeLeaderboard = function() {
            document.getElementById('leaderboardModal').classList.add('opacity-0');
            setTimeout(() => document.getElementById('leaderboardModal').classList.add('hidden'), 300);
        }

        // CHART
        let auraChartInstance = null;
        function initChart() {
            if(!window.Chart) return;
            const ctx = document.getElementById('auraChart').getContext('2d');
            let gradient = ctx.createLinearGradient(0, 0, 0, 150);
            gradient.addColorStop(0, 'rgba(139, 92, 246, 0.4)');
            gradient.addColorStop(1, 'rgba(139, 92, 246, 0.0)');

            auraChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: playerData.history.map((_, i) => 'Desafio ' + i),
                    datasets: [{
                        data: playerData.history, borderColor: '#a855f7', backgroundColor: gradient,
                        borderWidth: 3, pointBackgroundColor: '#fff', pointBorderColor: '#8b5cf6',
                        fill: true, tension: 0.4
                    }]
                },
                options: {
                    responsive: true, maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: { y: { display: false }, x: { display: false } },
                    interaction: { mode: 'index', intersect: false }
                }
            });
        }

        // Start
        window.addEventListener('DOMContentLoaded', initApp);
    