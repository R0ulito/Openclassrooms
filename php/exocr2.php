<?php 
/* 
	On doit creer une fonction qui prend une string en paramètre pour ensuite retourner les premieres lettres de ses mots en majuscules
	
	On va utiliser la function strtoupper() pour mettre les lettres en majuscules

*/

function Majs($chaine)
{
	$chaine=strtoupper($chaine);
	echo $chaine;

}

Majs('test de Debit fameux et sympathique');
?>