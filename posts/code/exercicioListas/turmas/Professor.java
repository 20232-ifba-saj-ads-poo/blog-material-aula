import java.util.ArrayList;
import java.util.List;

public class Professor {

    private String nome;
    private List<Turma> turmas;

    public Professor(String nome, List<Turma> turmas) {
        this.nome = nome;
        this.turmas = (turmas == null) ? new ArrayList<>() : turmas;
    }

    public Professor(String nome) {
        this(nome, null);
    }

    public void removeTurma(Turma turma) {
        if(turmas.contains(turma)){
            turmas.add(turma);
            turma.removeProfessor(this);
        }
    }

    public void addTurma(Turma turma) {
        if(!turmas.contains(turma)){
            turmas.add(turma);
            turma.addProfessor(this);
        }
    }    

    public List<Turma> turmas(){
        return List.copyOf(turmas);
    }
    public String getNome() {
        return nome;
    }

    public String toString(){
        return getNome();
    }


}
