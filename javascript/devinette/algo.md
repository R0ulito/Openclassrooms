var answer, token = 0

fonction answerInput () 
	answer = parseInt(prompt('Devinez le nombre'))


answerInput()

Tant que token < 6
	Si answer n'est pas un nombre
		answerInput()

	Sinon si answer > solution
		token ++
		afficher "C'est moins"
		answerInput()

	Sinon si answer < solution
		token ++
		afficher "C'est plus"
		answerInput()


Si answer !== solution
	afficher 'Nombre d'essais d�pass�s. La r�ponse �tait solution"

Si answer === solution
	afficher 'Vous avez trouv� ! La r�ponse �tait solution"