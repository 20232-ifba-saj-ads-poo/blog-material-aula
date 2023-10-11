package posts.code.exercicioListas.militar;

public class Soldado {
    private String nome;
    private int identificacao;
    private int tempoServico;
    private Cabo imediato;

    public Soldado(String nome, int identificacao) {
        this.nome = nome;
        this.identificacao = identificacao;
        this.tempoServico = 0;
    }

    public int getIdentificacao() {
        return identificacao;
    }

    public Cabo getImediato() {
        return imediato;
    }

    public String getNome() {
        return nome;
    }

    public int getTempoServico() {
        return tempoServico;
    }

    public void incrementarTempoServico(){
        tempoServico++;
    }

    public void setImediato(Cabo imediato) {
        this.imediato = imediato;
        this.imediato.getSubordinados().add(this);
    }

    public static void main(String[] args) {
        Soldado s1 = new Soldado("Leandro", 1);
        Soldado s2 = new Soldado("Leandro2", 12);
        Cabo c1 = new Cabo("Caboclo", 10);
        c1.addSubordinado(s1);
        //s1.setImediato(c1);
        s2.setImediato(c1);
        System.out.println("Imediato do Soldado "+ s1.getNome()+" é :"+s1.getImediato().getNome());
        System.out.println("A quantidade de subordidados do Cabo "+ c1.getNome()+" é :"+c1.getSubordinados().size());                
    }

}