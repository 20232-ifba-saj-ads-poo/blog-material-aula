import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as d,c as k,a as n,b as a,e as s,w as o,d as u}from"./app-dcd7600f.js";const m={},v=n("h1",{id:"exceptions",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#exceptions","aria-hidden":"true"},"#"),a(" Exceptions")],-1),b=u(`<p>Quando um erro (exceção) ocorre, o JVM entra em estado de alerta e procura dento do metodo se existe algum tratamento especial para o problema.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">TesteErro</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;inicio do main&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">metodo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;fim do main&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">metodo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;inicio do metodo1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">metodo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;fim do metodo1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">metodo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;inicio do metodo2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">15</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;fim do metodo2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Exception <span class="token keyword">in</span> thread <span class="token string">&quot;main&quot;</span> java.lang.ArrayIndexOutOfBoundsException: Index <span class="token number">10</span> out of bounds <span class="token keyword">for</span> length <span class="token number">10</span>
        at TesteErro.metodo2<span class="token punctuation">(</span>TesteErro.java:16<span class="token punctuation">)</span>
        at TesteErro.metodo1<span class="token punctuation">(</span>TesteErro.java:9<span class="token punctuation">)</span>
        at TesteErro.main<span class="token punctuation">(</span>TesteErro.java:4<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Como o <code>metodo2</code> não tem nenhum tratamento a JVM interrompe sua execução e volta um nível na pilha e verifica novamente.</li><li>Como o <code>metodo1</code> também não faz nenhum tratamento a JVM sobe mais um nivel até chegar no <code>main</code></li><li>Como o <code>main</code> também não faz nenhum tratamento a Thread morre.</li></ul><p>O tratamento de erros em Java é feito em tempo de execução através do tratamento de exceção. As exceções são classes que seguem o modelo OO e são lançadas quando o sistema encontra um problema mas podem ser utilizadas também para validar regras de negócio.</p><p><code>Exception</code>(exceção) significa &quot;condição excepcional&quot;, e é uma ocorrência que altera o fluxo normal do programa.</p><div class="hint-container tip"><p class="hint-container-title">Dicas</p><p>Quando um evento excepcional ocorre em java, diz-se que uma exceção será lançada.</p></div><ul><li>Métodos podem capturar ou deixar passar exceções que ocorrerem em seu corpo, mas para isto é obrigatório que o método declare a sua decisão.</li><li>Para repassar o tratamento de erro para quem chama o método utilizamos o <code>throws</code>. <ul><li><code>throws</code> declara que o método pode provocar exceções do tipo declarado (ou de qualquer subtipo).</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">validar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Excecao1</span><span class="token punctuation">,</span> <span class="token class-name">Excecao2</span> <span class="token punctuation">{</span>…<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Para tratar a exceção no método utilizamos o try/catch.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">15</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ArrayIndexOutOfBoundsException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;erro: &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Executando o código novamente</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>erro: java.lang.ArrayIndexOutOfBoundsException: Index <span class="token number">10</span> out of bounds <span class="token keyword">for</span> length <span class="token number">10</span>
fim <span class="token keyword">do</span> metodo2
fim <span class="token keyword">do</span> metodo1
fim <span class="token keyword">do</span> main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">?</p><ul><li>Modificando o try para dentro do for qual será o comportamento?</li><li>E na chamada do metodo2?</li><li>E na chamada do metodo1?</li><li>Divisão por 0</li><li>Referência Nula</li></ul></div><p>A partir do momento que uma exception foi catched (pega, tratada, capturada , handled), a execução volta ao normal a partir daquele ponto.</p><p><code>ArrayIndexOutOfBoundsException</code> ou um <code>NullPointerException</code> poderia ser facilmente evitado com o <code>for</code> corretamente escrito ou com <code>ifs</code> que checariam os limites da array. Tais problemas provavelmente poderiam ser evitados pelo programador</p><h2 id="tipos-de-exception" tabindex="-1"><a class="header-anchor" href="#tipos-de-exception" aria-hidden="true">#</a> Tipos de Exception</h2><ul><li>Checadas (Verificadas) –&gt; o compilador verifica e obriga os usuários que chamam o método ou construtor a tratar a exceção</li><li>Não – checadas –&gt; o compilador não verifica, são os subtipos de Error e RuntimeException</li></ul><figure><img src="https://www.plantuml.com/plantuml/svg/XPDDRiCW48NtSmgah7E3g79hDL8sJbJb0jXCRIGCqG1gAlasFKelLen_cmI51PZt7Z3wm9brd9nl5K2sVEQAMylE3PalNYeSv-z4XjY6KB19kLPuST9ejYcLdtA7uwB_C_PIOM7StdWj4f4FhvriSUtMXAX7k_1AdOpK3YaLYNtEhLiLj_OFMk3rwDtnywslmoPYhqJy-saMPaPirsst0w8xSLe5i6mGdHMfM-iM1C0QQumyn0a0TmnZEi4kbNw0CHLDKmf59xrXxHFC00fhr8AHh1i7BBGkDzInixmOrWt2hd-IBrs4FqlzcmfQtc351RUp7kyj6CNlZs7Lx8OpXfC06YcGjTYMI1Qo8FM_n3Z-0G00" alt="uml diagram" loading="lazy"><figcaption>Família das Exceptions.</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">Dicas</p><p><code>RuntimeException</code> é a exception mãe de todas as exceptions não checadas</p></div><p>Abrir um arquivo para leitura</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AbrirArquivo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">metodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;arquivo.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>O código acima não compila e o compilador avisa que é necessário tratar o <code>FileNotFoundException</code> que pode ocorrer.Para compilar e fazer o programa funcionar, temos duas maneiras que podemos tratar o problema. A primeira é tratá-lo com o <code>try</code> e <code>catch</code> e a segunda forma de tratar esse erro, é delegar ele para quem chamou o nosso método, isto é, passar para a frente.</p>`,23),h=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token keyword"},"static"),a(),n("span",{class:"token keyword"},"void"),a(),n("span",{class:"token function"},"metodo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"try"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},[n("span",{class:"token namespace"},[a("java"),n("span",{class:"token punctuation"},"."),a("io"),n("span",{class:"token punctuation"},".")]),a("FileInputStream")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"arquivo.txt"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"catch"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token namespace"},[a("java"),n("span",{class:"token punctuation"},"."),a("io"),n("span",{class:"token punctuation"},".")]),a("FileNotFoundException")]),a(" e"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),a("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Não foi possível encontrar o  arquivo para leitura"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token keyword"},"static"),a(),n("span",{class:"token keyword"},"void"),a(),n("span",{class:"token function"},"metodo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token keyword"},"throws"),a(),n("span",{class:"token class-name"},[n("span",{class:"token namespace"},[a("java"),n("span",{class:"token punctuation"},"."),a("io"),n("span",{class:"token punctuation"},".")]),a("FileNotFoundException")]),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},[n("span",{class:"token namespace"},[a("java"),n("span",{class:"token punctuation"},"."),a("io"),n("span",{class:"token punctuation"},".")]),a("FileInputStream")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"arquivo.txt"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("p",null,"É possível fazer o tratamento de mais de uma exceção no mesmo bloco para ambas abordagens",-1),x=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"try"),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"//Codigo verificado"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TipoExcecao1"),a(" ex1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"//Captura uma exceção TipoExcecao1"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TipoExcecao2"),a(" ex2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"//Captura uma exceção TipoExcecao2"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token keyword"},"void"),a(),n("span",{class:"token function"},"metodo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token keyword"},"throws"),a(),n("span",{class:"token class-name"},"TipoExcecao1"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token class-name"},"TipoExcecao2"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"//…"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=u(`<p>Não há uma regra para decidir em que momento do seu programa deve ser feito o tratamento da exceção. Essa decisão depende de como a exceção será tratada e em que ponto é possivel fazer algo a respeito. Enquanto não for o momento, provavelmente será melhor delegar a responsabilidade para o método que invocou. Lembrando que: caso o tratamento não seja feito por nenhum código quem irá tratar é a JVM.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">15</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ArrayIndexOutOfBoundsException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;erro: &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">15</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ArrayIndexOutOfBoundsException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;erro: &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Para lançar a Exceção explicitamente utilizamos o <code>throw</code> e criamos uma instancia da classe que representa a exceção desejada</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MinhaException</span> <span class="token keyword">extends</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>

<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">dividir</span><span class="token punctuation">(</span><span class="token keyword">double</span> v1<span class="token punctuation">,</span> <span class="token keyword">double</span> v2<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">MinhaException</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>v2<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">MinhaException</span><span class="token punctuation">(</span><span class="token string">&quot;Divisão por ZERO&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="finally" tabindex="-1"><a class="header-anchor" href="#finally" aria-hidden="true">#</a> Finally</h2><p>Os blocos <code>try</code> e <code>catch</code> podem conter uma terceira cláusula chamada <code>finally</code> que indica o que deve ser feito após o término do bloco <code>try</code> ou de um <code>catch</code>.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
 <span class="token comment">// bloco try</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// bloco catch 1</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> sqlex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// bloco catch2</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
 <span class="token comment">// bloco finally</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>É interessante colocar algo que é imprescindível de ser executado, caso o que você queria fazer tenha dado certo, ou não. O caso mais comum é o de liberar um recurso no finally, como um arquivo ou conexão com banco de dados, para que possamos ter a certeza de que aquele arquivo (ou conexão) vá ser fechado, mesmo que algo tenha falhado no decorrer do código.</p><p>O bloco <code>finally</code> sempre será executado, salvo em raras situações.</p><p>De forma geral ele é a garantia de que seu código irá liberar recursos ocupados mesmo que ocorram exceções (Exceptions) ou o método contendo o <code>try</code> retorne prematuramente (<code>return</code>).</p><div class="hint-container tip"><p class="hint-container-title">Dicas</p><p>Os únicos momentos em que o <code>finally</code> não será chamado são:</p><ol><li>Se você chamar System.exit() ou</li><li>um outro thread interromper o atual (através do método interrupt()) ou</li><li>Se a JVM der crash antes.</li></ol></div><ul><li>O bloco <code>try</code> deve ser precedido por um <code>catch</code> ou <code>finalliy</code></li><li>O <code>finally</code> quer dizer que dando erro ou não o trecho de código compreendido nele será executado</li><li>O <code>catch</code> será executa somente se naquele trecho dentro do try resultar em algum erro</li></ul><div class="hint-container tip"><p class="hint-container-title">Dicas</p><p><code>RuntimeException</code> é a exception mãe de todas as exceptions não verificadas</p></div><div class="hint-container tip"><p class="hint-container-title">Dicas</p><p><code>IllegalArgumentException</code> é uma exceção do pacote do java que podemos utilizar para tratar valores indevidos para chamadas de métodos</p></div><h2 id="exercicio" tabindex="-1"><a class="header-anchor" href="#exercicio" aria-hidden="true">#</a> Exercício</h2>`,16),_=n("h2",{id:"links-w3schools",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#links-w3schools","aria-hidden":"true"},"#"),a(" Links w3schools")],-1),q={href:"https://www.w3schools.blog/exception-handling-in-java",target:"_blank",rel:"noopener noreferrer"},j={href:"https://www.w3schools.blog/try-and-catch-blocks-in-java",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.w3schools.blog/multiple-catch-blocks-in-java",target:"_blank",rel:"noopener noreferrer"},O={href:"https://www.w3schools.blog/nested-try-block-in-java",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.w3schools.blog/finally-in-java",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.w3schools.blog/throw-in-java",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.w3schools.blog/throws-keyword-in-java",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.w3schools.blog/exception-propagation-in-java",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.w3schools.blog/exception-handling-with-method-overriding",target:"_blank",rel:"noopener noreferrer"},M={href:"https://www.w3schools.blog/custom-exception-in-java",target:"_blank",rel:"noopener noreferrer"},z={href:"https://www.w3schools.blog/commonly-used-exception-methods-of-throwable-class-in-java",target:"_blank",rel:"noopener noreferrer"};function F(N,L){const i=p("RouterLink"),l=p("CodeTabs"),e=p("ExternalLinkIcon");return d(),k("div",null,[v,n("p",null,[a("Considerando o que foi visto em "),s(i,{to:"/posts/02_Codificando_JAVA.html#pilha-de-execucao"},{default:o(()=>[a("Pilha de execução")]),_:1}),a(".")]),b,s(l,{id:"132",data:[{id:"try"},{id:"throws"}],"tab-id":"java"},{title0:o(({value:t,isActive:c})=>[a("try")]),title1:o(({value:t,isActive:c})=>[a("throws")]),tab0:o(({value:t,isActive:c})=>[h]),tab1:o(({value:t,isActive:c})=>[w]),_:1}),g,s(l,{id:"143",data:[{id:"try"},{id:"throws"}],"tab-id":"java"},{title0:o(({value:t,isActive:c})=>[a("try")]),title1:o(({value:t,isActive:c})=>[a("throws")]),tab0:o(({value:t,isActive:c})=>[x]),tab1:o(({value:t,isActive:c})=>[y]),_:1}),f,n("p",null,[s(i,{to:"/posts/exercicios/ExercicioException/Exception1.html"},{default:o(()=>[a("Exercício")]),_:1})]),_,n("ul",null,[n("li",null,[n("a",q,[a("Exception handling"),s(e)])]),n("li",null,[n("a",j,[a("try and catch blocks"),s(e)])]),n("li",null,[n("a",E,[a("Multiple catch blocks"),s(e)])]),n("li",null,[n("a",O,[a("Nested try block"),s(e)])]),n("li",null,[n("a",A,[a("Finally"),s(e)])]),n("li",null,[n("a",S,[a("throw"),s(e)])]),n("li",null,[n("a",C,[a("throws"),s(e)])]),n("li",null,[n("a",T,[a("Exception propagation"),s(e)])]),n("li",null,[n("a",I,[a("Exception handling with method overriding"),s(e)])]),n("li",null,[n("a",M,[a("Custom exception"),s(e)])]),n("li",null,[n("a",z,[a("Throwable class"),s(e)])])])])}const P=r(m,[["render",F],["__file","16_Exceptions.html.vue"]]);export{P as default};
