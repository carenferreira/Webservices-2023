package socket.webservice;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.*;

public class Webservice {
	public static void main(String[] args) {
		List<Turma> turmas = new ArrayList<>();
		
		criarTurmas(turmas);
		String stringTurmasJson = converteTurmasJson(turmas);
		
		System.out.println(stringTurmasJson);
		
		final int PORT = 5060;

		try {
			ServerSocket server = new ServerSocket(PORT);
			System.out.println("Servidor ouvindo a porta " + PORT);

			while(true) {
				Socket client = server.accept();
				System.out.println("Cliente conectado: " + client.getInetAddress().getHostAddress());
				PrintWriter saida = new PrintWriter(client.getOutputStream(), true);
				saida.println(stringTurmasJson);
				saida.println();
				
				BufferedReader in = new BufferedReader(new InputStreamReader(client.getInputStream()));
				String lideres = in.readLine();
				
				System.out.println(lideres);
				
				saida.close();
				in.close();
				client.close();
			}

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private static String converteTurmasJson(List<Turma> turmas) {
		JSONArray turmasJson = new JSONArray();

		for(Turma turma : turmas) {
			JSONObject turmaJson = new JSONObject();
			turmaJson.put("id", turma.getId());
			turmaJson.put("nome", turma.getNome());
			turmaJson.put("ano", String.valueOf(turma.getAno()));


			JSONArray alunos = new JSONArray();

			for(Aluno a : turma.getArrayAlunos()) {
				JSONObject aluno = new JSONObject();
				aluno.put("matricula", a.getMatricula());
				aluno.put("nome", a.getNome());
				aluno.put("idade", a.getIdade());
				alunos.add(aluno);
			}

			turmaJson.put("alunos", alunos);
			turmasJson.add(turmaJson);
		}

		return turmasJson.toJSONString();
	}

	private static void criarTurmas(List<Turma> turmas) {
		Aluno[] alunosArray1 = {
				new Aluno("5000", "1", 21),
				new Aluno("5001", "2", 21),
				new Aluno("5002", "3", 20),
				new Aluno("5003", "4", 20),
				new Aluno("5004", "5", 27),
		};
		Aluno[] alunosArray2 = {
				new Aluno("3000", "1", 20),
				new Aluno("3001", "2", 30),
				new Aluno("3002", "3", 20),
				new Aluno("3003", "4", 22),
				new Aluno("3004", "5", 20),
		};

		turmas.add(new Turma("1", "WebServices", 2023, alunosArray1));
		turmas.add(new Turma("2", "TOO", 2023, alunosArray2));

	}
}
