<?php 
$chaine='J\'ai gagne une tablette youpiiiiiii !';
$inverse='vide';
$j=0;
echo 'Chaîne de départ: '.$chaine.'<br />';
 
// echo strlen($chaine);

for ($i=strlen($chaine)-1; $i >=0 ; $i--) { 

	$inverse[$j] = $chaine[$i];
	$j++;
	# code...
}
 
echo '<br /> Chaîne inversée: '.$inverse;
?>