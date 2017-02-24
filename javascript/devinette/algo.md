var answer, token = 0

fonction answerInput () 

	answer = parseInt(prompt('Devinez le nombre'))


answerInput()

Tant que token < 6
	
	Si answer n'est pas un nombre
		answerInput()
		token ++

	Sinon si answer > solution		
		afficher "C'est moins"
		answerInput()
		token ++

	Sinon si answer < solution
		afficher "C'est plus"
		answerInput()
		token ++


Si answer !== solution
	afficher 'Nombre d'essais dépassé. La réponse était solution"

Si answer === solution
	afficher 'Vous avez trouvé ! La réponse était solution"