import java.util.ArrayList;
import java.util.List;

public class Escola {
    public static void main(String[] args) {
        List<Turma> turmas = new ArrayList<>();
        Turma t = new Turma("POO");
        turmas.add(t);

        Professor p = new Professor("Leandro");
        Aluno a = new Aluno("Pedro");
        t.addAluno(a);
        t.addProfessor(p);
        
        System.out.println(turmas);
    }
}
