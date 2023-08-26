# Webservices-Integrcao-de-sistemas
Uma empresa do ramo educacional possui sistemas legados em Java, e adquiriu um novo sistema em Python. Esse sistema precisará se comunicar via rede com o sistema Java, e receber as informações das turmas cadastradas no sistema Java.
A classe Java “Turma” possui os campos id (string), nome (string), ano (int) e um array de objetos alunos.
A classe Java “Aluno” possui os campos matricula (string), nome (string) e idade (int).

#Atividade:
Codifique as classes Turma e Aluno no Java e instancie pelo menos duas turmas, com 5 alunos cada. Implemente um método capaz de transmitir esses dados para um programa Python, que deverá exibir os dados recebidos, como no seguinte exemplo:

Turma 1 (2019)
- João da Silva, 22 anos, matrícula 12345
- Maria do Carmo, 18 anos, matrícula 45874
- Paulo Roberto, 20 anos, matrícula 98547

Turma 2 (2022)
- Roberto Carlos, 17 anos, matrícula 41258
- Juliana de Paula, 18 anos, matrícula 87459
