package main

import (
	"fmt"
	pk "customPackage/src/custom_package"
)

func main() {
	var myCar pk.CarPublic
	myCar.Brand = "Ferrari"
	myCar.Year = 2020
	fmt.Println(myCar)

	pk.PrintMessage("Hola Platzi")

	// The following line won't work due to the function is not public.
	// pk.printMessage1("Hola")
}
