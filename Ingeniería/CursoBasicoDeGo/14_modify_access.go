package main

import (
	pk "CursoBasicoDeGo/custom_package/custom_package"
	"fmt"
)

func main() {
	var myCar pk.CarPublic
	myCar.Brand = "Ferrari"
	myCar.Year = 2020
	fmt.Println(myCar)

	pk.PrintMessage("Hola Platzi")

	pk.printMessage1("Hola")
}
