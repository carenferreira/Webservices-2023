package socket.webservice;

public class Turma {
	private String id;
	private String nome;
	private int ano;
	private Aluno[] arrayAlunos;
	
	public Turma(String id, String nome, int ano, Aluno[] arrayAlunos) {
		super();
		this.id = id;
		this.nome = nome;
		this.ano = ano;
		this.arrayAlunos = arrayAlunos;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public int getAno() {
		return ano;
	}
	public void setAno(int ano) {
		this.ano = ano;
	}
	
	public Aluno[] getArrayAlunos() {
		return arrayAlunos;
	}
	public void setArrayAlunos(Aluno[] arrayAlunos) {
		this.arrayAlunos = arrayAlunos;
	}
	@Override
	public String toString() {
		return String.format("Turma [id=%s, nome=%s, ano=%s]", id, nome, ano);
	}
	
}
