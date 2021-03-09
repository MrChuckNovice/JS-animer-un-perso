<?php
if(!empty($_POST)){
  $values = [
   "prénom" => "Chuck",
   "nom" => "Novice",
   "age" => 24,
   "cheveux" => "brun",
   "amis" => [
       "Olivier", "Ronan", "Vicente", "Loïc", "Sébou"
   ],
   "post" => $_POST
];

echo (json_encode($values));
}

