---
icon: study
date: 2023-11-16 19:53:00.00 -3
tag:
  - heranca
category:
  - exercicio
sidebar: false
---

# Exercício de Herança 3


1. Verdadeiro ou Falso, se falso justifique.
    - [V] Em orientação a objetos herança é a capacidade de uma classe definir o seu comportamento e sua estrutura aproveitando definições de outra classe, normalmente conhecida como classe base ou classe pai.
    - 
    - [V] O objetivo da herança é generalizar o entendimento de uma classe criando novas características e comportamentos que vão além da superclasse.
    - 
    - [V] Classes concretas são classes que não produzem instâncias. Elas agrupam características e comportamentos que serão herdados por outras classes.
    - 
    - [V] Classes abstratas precisam ter métodos com implementação definida.
    - 
    - [V] Os métodos abstratos são obrigatoriamente implementados pelas classes filhas.
    - 
    - [F] Polimorfismo só pode ser utilizando com herança, não podendo ser aplicado a interface.
    - R:A herança ocorre quando uma classe herda atributos ou métodos de sua superclasse, ou seja, o comportamento de sua superclasse.  
    -   O polimorfismo ocorre quando uma classe redefine o comportamento de sua superclasse, sobrescrevendo métodos ou alterando o valor de atributos.
    -   
    - [V] As interfaces são estritamente modelos de comportamento.
    - 
    - [V] As interfaces não podem ser instanciadas pois não produzem objetos.
    - 
    - [F] As interfaces podem ter atributos de instância.
    - R: Uma interface não possui atributos e por isso não ser considerada uma classe, as interfaces não possuem construtores e, por isso, não podem ser instanciadas, como 
    - as classes abstratas.
    - 
    - [F] Classes abstratas podem ter atributos de instância.
    - R:Sendo um tipo de classe especial(Classe Abstrata), Ela não pode ser instanciada, apenas herdada. Sendo assim, uma classe abstrata não pode ter um objeto criado a 
    - partir de sua instanciação. Essas classes são muito importantes quando não queremos criar um objeto a partir de uma classe “geral”, apenas de suas “subclasses”.
    - 
    - [F] As interfaces não podem ter métodos com corpo definido.
    - R: Uma interface nada mais é do que um bloco de código definindo um tipo e os métodos e atributos que esse tipo deve possuir; Ela define um padrão para especificação 
    -  do comportamento de classes.
    -    
    - [F] Classes abstratas não podem ter métodos com corpo definido
    - R: As classes abstratas não podem ser utilizadas nas expressões de instanciação de classes. Apesar de não poderem participar em expressões de instanciação, as classes 
    - abstratas podem definir construtores. Os construtores de classes abstratas são responsáveis pelas iniciações que podem ser necessárias para os campos que podem ser 
    - utilizados nas implementações dos métodos. Assim uma subclasse direta ou indireta de uma classe abstrata ao ser instanciada pode causar a execução de um construtor  
    - da classe abstrata:
          
                
