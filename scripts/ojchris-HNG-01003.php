<?php 
$myName = "Christian Okpada";
$myHngID = "HNG-01003";
$codeLang = "PHP";

$internDetails = collate_intern_details($myName, $myHngID, $codeLang);
echo $internDetails;

function collate_intern_details($name, $id, $lang){
   $wordToPrint = "Hello World, this is " . $name . " with HNGi7 ID " . $id . " using " . $lang . " for stage 2 task.";

   return $wordToPrint;
}
