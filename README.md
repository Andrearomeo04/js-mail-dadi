Ciao ragazzi,
Esercizio di oggi:
nome repo: js-mail-dadi
Mail
Chiedi all’utente la sua email (tramite prompt o input, a voi la scelta),
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Vietato utilizzare la funzione includes
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento!

soluzione 1 (dadi)

problema 1 "Generare un numero random da 1 a 6 per il giocatore"
1.creo una variabile per il giocatore a cui assegno un oggetto che tramite un determinato metodo, riuscirà a generare un numero random da 1 a 6

problema 2 "Generare un numero random da 1 a 6 per il computer"
1.creo una variabile per il giocatore a cui assegno un oggetto che tramite un determinato metodo, riuscirà a generare un numero random da 1 a 6

problema 3 "Stabilire il vincitore, in base a chi fa il punteggio più alto."
1.creo una condizione, se la variabile del giocatore è maggiore rispetto a quella del computer allora stamperò in console "Human has won!"
2. altrimenti se la variabile del computer è maggiore rispetto a quella del computer allora stamperò in console "Computer has won!"
3. altrimenti se entrambe le variabili hanno lo stesso valore, allora stamperò in console "Tie!"

soluzione 2 (mail)

problema 1 "Chiedi all’utente la sua email (tramite prompt o input, a voi la scelta),"
1.creo un input che vada a richiedere la mail
2.creo un bottone che mi servirà per controllare se esso è nella lista

problema 2 "controlla che sia nella lista di chi può accedere"
1.creo con un array a cui vado ad assegnare varie email come valore
2.richiamo il bottone tramite id
3.lascio il bottone in attesa di un evento click
4.all'interno di questo evento, richiamo il valore dell'input tramite id
5.creo una variabile di controllo
6.ciclo l'array e confronto l'elemento che sto ciclando con la parola inserita nell'input
7.se la condizione risulta vera, allora imposto la variabile di controllo a "true"

problema 3 "stampa un messaggio appropriato sull'esito del controllo"
1.creo 2 messaggi diversi tramite il console log che si basano sul valore della variabile di controllo
2.se la variabile di controllo risulta "true" allora mostro "Associated mail found"
3.altrimenti mostro "mail not found"