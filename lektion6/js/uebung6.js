/**
 * Uebung 6: Funktionen
 */

/**
 * 1) Schreibe die debug Funktion.
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================")

  console.debug("Diese Funktion kenne ich bereits!")
}

/**
 * 2) Benutze deinen ersten Parameter.
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================")
  function sagHallo(name) {
    console.debug("Hallo" + name)
  }
  sagHallo("Peter")
}

/**
 * 3) Benutze dein erstes Argument.
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  function sagBye(name) {
    console.debug("Bye " + name)
  }
  sagBye("Dima")
}

/**
 * 4) Schreibe deine erste Funktion mit Parameter und Argument.
 */
function aufgabe4() {
  console.debug("Aufgabe 4 ==========================");
  function willkommenZurueck(name) {
      console.debug("Da bist du ja wieder" + name)
  }‚
    willkommenZurueck("Dima")
}

/**
 * 5) Schreibe deinen ersten return.
 */
function aufgabe5() {
  console.debug("Aufgabe 5 ==========================");

  function multiplizieren(a, b) {
    //ToDo: füge ab hier Deinen Code ein
  }

  console.debug(multiplizieren(3, 5))
}

/**
 * 6) Schreibe deine erste rekursive Funktion.
 */
function aufgabe6() {
  console.debug("Aufgabe 6 ==========================");

  //ToDo: füge ab hier Deinen Code ein

  console.debug(fakultaet(5))
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  aufgabe1()
  aufgabe2()
  aufgabe3()
  aufgabe4()
  aufgabe5()
  aufgabe6()
}
main()