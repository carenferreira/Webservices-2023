package socket.webservice;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;

import org.json.simple.*;

public class Webservice {
	public static void main(String[] args) {
		Aluno[] alunosArray1 = {
		new Aluno("5000", "Vitor", 21),
		new Aluno("5001", "Jão", 21),
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

		Turma webservices = new Turma("1", "WebServices", 2023, alunosArray1);
		Turma too = new Turma("2", "TOO", 2023, alunosArray2);
		
		System.out.println(webservices);
		
		final int PORT = 5060;

		try {
			ServerSocket server = new ServerSocket(PORT);
			System.out.println("Servidor ouvindo a porta " + PORT);

			while(true) {
				Socket client = server.accept();
				System.out.println("Cliente conectado: " + client.getInetAddress().getHostAddress());
				PrintWriter saida = new PrintWriter(client.getOutputStream(), true);
				saida.println(webservices.toString() + "\n" + too.toString());
				saida.close();
				client.close();
			}

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
