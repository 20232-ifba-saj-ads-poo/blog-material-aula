package posts.code.exercicioListas.militar;

import java.util.ArrayList;

public class Cabo {
    private String nome;
    private int identificacao;
    private int tempoServico;
    private Sargento imediato;
    private ArrayList<Soldado> subordinados;

    public Cabo(String nome, int identificacao) {
        this.nome = nome;
        this.identificacao = identificacao;
        this.tempoServico = 0;
        this.subordinados = new ArrayList<>();
    }

    public int getIdentificacao() {
        return identificacao;
    }

    public Sargento getImediato() {
        return imediato;
    }

    public String getNome() {
        return nome;
    }

    public ArrayList<Soldado> getSubordinados() {
        return subordinados;
    }

    public int getTempoServico() {
        return tempoServico;
    }

    public void addSubordinado(Soldado soldado) {
        soldado.setImediato(this);        
    }

       

}