from lxml import etree
xml = etree.parse('biblioteca.xml')

#a) Qual a porcentagem de livros da biblioteca que estão emprestados.
root = xml.getroot()
total = 0
emprestados = 0
for livro in root.find('livros'):
 total += int(livro.attrib['quantidade'])
 emprestados +=int(livro.attrib['emprestados'])

porcentagem = (emprestados * 100)/total
print("a) Qual a porcentagem de livros da biblioteca que estão emprestados:\n" + str(porcentagem))

#b) Quantos títulos diferentes do autor "Deitel" a biblioteca possui?
livrosDeitel = 0
for livro in root.find('livros'):
    if livro.find('autor').text == 'Deitel':
       livrosDeitel += 1

print("b) Quantos títulos diferentes do autor \"Deitel\" a biblioteca possui?\n" + str(livrosDeitel))

#c) Qual o nome do livro da biblioteca que possui menos páginas?
menor = 0
nomeMenor = ""
for livro in root.find('livros'):
   if menor == 0:
      menor = livro.find('paginas').text
      nomeMenor = livro.find('titulo').text
   if menor > livro.find('paginas').text:
      menor = livro.find('paginas').text
      nomeMenor = livro.find('titulo').text

print("c) Qual o nome do livro da biblioteca que possui menos páginas?\n" + nomeMenor)

#d) Qual o nome do livro (ou livros) que possui mais de um autor?
livros = []
nomeLivroAutores = ""
for livro in root.find('livros'):
   autores = livro.findall('autor')
   if len(autores) > 1:
      livros.append(livro.find('titulo').text)

print("d) Qual o nome do livro (ou livros) que possui mais de um autor? ")
print(livros)