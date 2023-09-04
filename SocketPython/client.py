import socket
import json
import random

HOST = '127.0.0.1'
PORT = 5060

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as client:
    client.connect((HOST, PORT))

    dados = bytearray()

    while True:
        data = client.recv(1024)

        if not data or data == b'\r\n':
            break

        dados+=data

    turmas = json.loads(dados.decode())
    print(turmas)

    lideres = []
    for turma in turmas:
        if(len(turma['alunos'])):
            lider = random.randint(0,len(turma['alunos']) - 1)
            lideres.append({'turma':turma['nome']})
            lideres.append({'lider':turma['alunos'][lider]})
        else:
            lider.append(None)

    print(lideres)

    client.sendall(json.dumps(lideres).encode())

#client.close()
