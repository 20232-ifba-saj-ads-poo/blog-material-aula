import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-bb01549d.js";const t={},o=e(`<h1 id="construtor" tabindex="-1"><a class="header-anchor" href="#construtor" aria-hidden="true">#</a> Construtor</h1><ul><li>Método especial definido na classe e executado no momento que o objeto é instanciado</li><li>Diferente de outro método pois não possui retorno</li><li>Deve ter o mesmo nome da classe.</li><li>Pode receber parâmetros <ul><li>Normalmente utilizados para inicializar os valores dos atributos do objeto</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Conta</span><span class="token punctuation">{</span>
  <span class="token keyword">int</span> numero<span class="token punctuation">;</span>
  <span class="token class-name">String</span> cliente<span class="token punctuation">;</span>
  <span class="token keyword">double</span> saldo<span class="token punctuation">;</span>
  <span class="token keyword">double</span> limite<span class="token punctuation">;</span>

  <span class="token class-name">Conta</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token punctuation">}</span>

  <span class="token keyword">void</span> <span class="token function">saca</span><span class="token punctuation">(</span><span class="token keyword">double</span> quantidade<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">double</span> novoSaldo <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>saldo <span class="token operator">-</span> quantidade<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>saldo <span class="token operator">=</span> novoSaldo<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">void</span> <span class="token function">deposita</span><span class="token punctuation">(</span><span class="token keyword">double</span> quantidade<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>saldo <span class="token operator">+=</span> quantidade<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="o-que-o-new-faz" tabindex="-1"><a class="header-anchor" href="#o-que-o-new-faz" aria-hidden="true">#</a> O que o new faz?</h3><ul><li>A classe chamada é instanciada</li><li>Memória é alocada</li><li>Os passos definidos dentro do método construtor da classe são executados <ul><li>Construtor é um método especial para criar e inicializar novas instâncias da classe.</li><li>Construtores podem ser sobrecarregados</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Conta</span><span class="token punctuation">{</span>
  <span class="token comment">//...</span>
  <span class="token class-name">Conta</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>limite <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sobrecarga" tabindex="-1"><a class="header-anchor" href="#sobrecarga" aria-hidden="true">#</a> Sobrecarga</h2><ul><li><p>É a capacidade de definir métodos com o mesmo nome</p><ul><li>Assinatura seja diferente.</li><li>A mudança na assinatura ocorre alterando a quantidade e/ou tipo de parâmetros que um método recebe</li></ul></li><li><p>Sobrecarga é a capacidade de um objeto responder à mesma mensagem, com comportamentos (métodos) distintos, a depender dos tipos dos parâmetros recebidos</p><ul><li>aplicarInjecao()</li><li>aplicarInjecao(String nomeRemedio)</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//...</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">somar</span><span class="token punctuation">(</span><span class="token keyword">int</span> v1<span class="token punctuation">,</span> <span class="token keyword">int</span> v2<span class="token punctuation">)</span><span class="token punctuation">{</span> 
    <span class="token keyword">return</span> v1 <span class="token operator">+</span> v2<span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 

<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">operar</span><span class="token punctuation">(</span><span class="token keyword">int</span> v1<span class="token punctuation">,</span> <span class="token keyword">int</span> v2<span class="token punctuation">)</span><span class="token punctuation">{</span> 
    <span class="token keyword">return</span> <span class="token function">operar</span><span class="token punctuation">(</span><span class="token char">&#39;+&#39;</span><span class="token punctuation">,</span> v1<span class="token punctuation">,</span> v2<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 

<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">operar</span><span class="token punctuation">(</span><span class="token keyword">char</span> op<span class="token punctuation">,</span> <span class="token keyword">int</span> v1<span class="token punctuation">,</span> <span class="token keyword">int</span> v2<span class="token punctuation">)</span><span class="token punctuation">{</span> 
  <span class="token keyword">switch</span><span class="token punctuation">(</span>op<span class="token punctuation">)</span><span class="token punctuation">{</span> 
    <span class="token keyword">case</span> <span class="token char">&#39;+&#39;</span><span class="token operator">:</span> 
      <span class="token keyword">return</span> <span class="token function">somar</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">)</span><span class="token punctuation">;</span> 
      <span class="token keyword">break</span><span class="token punctuation">;</span> 
    <span class="token keyword">case</span> <span class="token char">&#39;-&#39;</span><span class="token operator">:</span> 
      <span class="token keyword">return</span> <span class="token function">subtrair</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
<span class="token comment">//...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Conta</span><span class="token punctuation">{</span>
  <span class="token comment">//...</span>
  <span class="token class-name">Conta</span><span class="token punctuation">(</span><span class="token keyword">int</span> numero<span class="token punctuation">,</span> <span class="token class-name">String</span> cliente<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>numero <span class="token operator">=</span> numero<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cliente <span class="token operator">=</span> cliente<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>saldo <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>limite <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">Conta</span><span class="token punctuation">(</span><span class="token keyword">int</span> numero<span class="token punctuation">,</span> <span class="token class-name">String</span> cliente<span class="token punctuation">,</span> <span class="token keyword">double</span> saldo<span class="token punctuation">,</span> <span class="token keyword">double</span> limite<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">(</span>numero<span class="token punctuation">,</span> cliente<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>saldo <span class="token operator">=</span> saldo<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>limite <span class="token operator">=</span> limite<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Programa</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Conta</span> minhaConta1<span class="token punctuation">;</span>
    minhaConta1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Conta</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;Leandro1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    minhaConta1<span class="token punctuation">.</span>saldo <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token class-name">Conta</span> minhaConta2<span class="token punctuation">;</span>
    minhaConta2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Conta</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;Leandro2&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),p=[o];function c(i,l){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","06_construtor_sobrecarga.html.vue"]]);export{r as default};