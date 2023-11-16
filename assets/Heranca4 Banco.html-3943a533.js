import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as t,c as e,a,b as p,e as c,d as l}from"./app-7b23504c.js";const i={},u=l(`<h1 id="exercicio-de-heranca-4-sistema-banco" tabindex="-1"><a class="header-anchor" href="#exercicio-de-heranca-4-sistema-banco" aria-hidden="true">#</a> Exercício de Herança 4 (Sistema banco)</h1><ol><li><p>Vamos criar uma classe <code>Conta</code>, que possua um saldo os métodos para pegar saldo, depositar e sacar</p><ul><li>Crie a classe <code>Conta</code></li><li>Adicione o atributo saldo <ul><li>Crie os métodos <code>getSaldo()</code>, <code>deposita(double)</code> e <code>saca(double)</code></li></ul></li></ul></li><li><p>Adicione um método na classe <code>Conta</code>, que atualiza essa conta de acordo com uma taxa percentual fornecida</p></li><li><p>Crie duas subclasses da classe <code>Conta</code>: <code>ContaCorrente</code> e <code>ContaPoupanca</code>. Ambas terão o método atualiza reescrito: A <code>ContaCorrente</code> deve atualizar-se com o dobro da taxa e a <code>ContaPoupanca</code> deve atualizar-se com o triplo da taxa. Além disso, a <code>ContaCorrente</code> deve reescrever o método deposita, a fim de retirar uma taxa bancária de dez centavos de cada depósito.</p><ul><li>Crie as classes <code>ContaCorrente</code> e <code>ContaPoupanca</code>. Ambas são filhas da classe <code>Conta</code>;</li><li>Reescreva o método atualiza na classe ContaCorrente, seguindo o enunciado;</li><li>Repare que, para acessar o atributo saldo herdado da classe <code>Conta</code>, você vai precisar trocar o modificador de visibilidade de saldo para protected;</li><li>Reescreva o método atualiza na classe <code>ContaPoupanca</code>, seguindo o enunciado:</li><li>Na classe <code>ContaCorrente</code>, reescreva o método deposita para descontar a taxa bancária de dez centavos:</li></ul><figure><img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuL800WSKNd9EOd6nWdD-NabYDLW01BHJyakJSb8LYXDpKlAjaOHJ2_ABCqiIDI3ocWYPuiHaBAA99QM9EPbLC1c5aiIAH8XqBPW4MwjWKwEh2s46v9SM9EOb9sALTCulAahDAqc5U28rBmNa1IWD0000" alt="uml diagram" loading="lazy"></figure></li><li><p>Crie uma classe com método main e instancie essas classes, atualize-as e veja o resultado. Algo como:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestaContas</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Conta</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Conta</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ContaCorrente</span> cc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ContaCorrente</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ContaPoupanca</span> cp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ContaPoupanca</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c<span class="token punctuation">.</span><span class="token function">deposita</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cc<span class="token punctuation">.</span><span class="token function">deposita</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cp<span class="token punctuation">.</span><span class="token function">deposita</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c<span class="token punctuation">.</span><span class="token function">atualiza</span><span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cc<span class="token punctuation">.</span><span class="token function">atualiza</span><span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cp<span class="token punctuation">.</span><span class="token function">atualiza</span><span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">getSaldo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cc<span class="token punctuation">.</span><span class="token function">getSaldo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cp<span class="token punctuation">.</span><span class="token function">getSaldo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Vamos criar uma classe que seja responsável por fazer a atualização de todas as contas bancárias e gerar um relatório com o saldo anterior e saldo novo de cada uma das contas. Além disso, conforme atualiza as contas, o banco quer saber quanto do dinheiro do banco foi atualizado até o momento. Por isso, precisamos ir guardando o saldoTotal e adicionar um getter à classe.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AtualizadorDeContas</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> saldoTotal <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> selic<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">AtualizadorDeContas</span><span class="token punctuation">(</span><span class="token keyword">double</span> selic<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>selic <span class="token operator">=</span> selic<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">roda</span><span class="token punctuation">(</span><span class="token class-name">Conta</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// aqui você imprime o saldo anterior, atualiza a conta,</span>
        <span class="token comment">// e depois imprime o saldo final</span>
        <span class="token comment">// lembrando de somar o saldo final ao atributo saldoTotal</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// outros métodos, colocar o getter para saldoTotal!</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>No método main, vamos criar algumas contas e rodá-las:</p></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestaAtualizadorDeContas</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Conta</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Conta</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Conta</span> cc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ContaCorrente</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Conta</span> cp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ContaPoupanca</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c<span class="token punctuation">.</span><span class="token function">deposita</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cc<span class="token punctuation">.</span><span class="token function">deposita</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cp<span class="token punctuation">.</span><span class="token function">deposita</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AtualizadorDeContas</span> adc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtualizadorDeContas</span><span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        adc<span class="token punctuation">.</span><span class="token function">roda</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        adc<span class="token punctuation">.</span><span class="token function">roda</span><span class="token punctuation">(</span>cc<span class="token punctuation">)</span><span class="token punctuation">;</span>
        adc<span class="token punctuation">.</span><span class="token function">roda</span><span class="token punctuation">(</span>cp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Saldo Total: &quot;</span> <span class="token operator">+</span> adc<span class="token punctuation">.</span><span class="token function">getSaldoTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="link-para-clonar-repositorio" tabindex="-1"><a class="header-anchor" href="#link-para-clonar-repositorio" aria-hidden="true">#</a> Link para clonar repositório</h2>`,4),d={href:"https://classroom.github.com/a/odi77R7J",target:"_blank",rel:"noopener noreferrer"};function r(k,m){const n=o("ExternalLinkIcon");return t(),e("div",null,[u,a("p",null,[a("a",d,[p("classroom"),c(n)])])])}const C=s(i,[["render",r],["__file","Heranca4 Banco.html.vue"]]);export{C as default};
