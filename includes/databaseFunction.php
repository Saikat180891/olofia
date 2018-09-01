<?php
class Database
{
  function connectToDatabase($dbHost, $dbName, $dbUser, $dbPassword)
    {
      $conn =  mysqli_connect($dbHost, $dbUser, $dbPassword, $dbName);
      // Check connection
      if(mysqli_connect_errno()){
          echo "Not Connected" . mysqli_connect_error() . PHP_EOL;
          exit;
      }
      return $conn;
    }

    function createTable($connection, $tableName, $stringColumnName){
      $sql = "CREATE TABLE ".$tableName."(".$stringColumnName.");";
      $queryResult = mysqli_query($connection, $sql);
      if(!$queryResult){
        return 0;
      }else{
        return 1;
      }
    }

    function insertData($connection, $tableName, $stringColumnName, $values){
      $sql = "INSERT INTO ".$tableName." (".$stringColumnName.") VALUES(".$values.");";
      $queryResult = mysqli_query($connection, $sql);
      if(!$queryResult){
        return 0;
      }else{
        $id = mysqli_insert_id($connection);
        return $id;
      }
    }

    function deleteFromTable($connection, $tableName, $firstValue, $secondValue){
      $sql = "DELETE FROM ".$tableName." WHERE ".$firstValue." = ".$secondValue.";";
      $queryResult = mysqli_query($connection, $sql);
      if(!$queryResult){
        return 0;
      }else{
        return 1;
      }
    }

    function deleteMultipleRows($connection, $tableName, $firstValue, $rowArrayValues){
      $db = new Database();
      for ($x = 0; $x <= sizeof($rowArrayValues); $x++) {
          if(isset($rowArrayValues[$x])){
              $h = $db->deleteFromTable($connection, $tableName, $firstValue, $rowArrayValues[$x]);
          }
      }
    }

    function selectAll($connection, $tableName){
      $i = 0;
      $sql = "SELECT * FROM ".$tableName.";";
      $queryResult = mysqli_query($connection, $sql);
      if(mysqli_num_rows($queryResult) > 0){
        while($row = mysqli_fetch_assoc($queryResult)){
          $storeDataInAnArray[$i] = $row;
          $i++;
        }
        return json_encode($storeDataInAnArray);
      }else{
        return 0;
      }
    }

    function updateValue($connection, $tableName, $changeValue, $condition){
      $sql = "UPDATE ".$tableName." SET ".$changeValue." WHERE ".$condition.";";
      $queryResult = mysqli_query($connection, $sql);
      if(!$queryResult){
        return 0;
      }else{
        return 1;
      }
    }

    function getNumberOfRows($connection, $tableName){
      $i = 0;
      $sql = "SELECT * FROM ".$tableName.";";
      $queryResult = mysqli_query($connection, $sql);
      if(mysqli_num_rows($queryResult) > 0){
        while($row = mysqli_fetch_assoc($queryResult)){
          $storeDataInAnArray[$i] = $row;
          $i++;
        }
        return $i;
      }else{
        return 0;
      }
    }
}

?>
