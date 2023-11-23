Ciao ragazzi,
Esercizio di oggi:
nome repo: js-mail-dadi
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Attenzione: l'utilizzo della funzione includes non è ammesso. Se usato, comporta la non validità dell'esercizio.
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
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:

**Mail**
1 - Inizializziamo un array contenente delle email
2 - Chiediamo all'utente di far inserire la sua email
3 - facciamo un ciclo for che legge l'array
    4.a - ? l'email inserita == email contenuta in posizione i
        4.a.1 - visualizziamo il messaggio "Email presente"
3 - finisce il ciclo for

**Gioco dei dadi**
1 - dichiariamo una variabile punteggio
2 - facciamo scegliere all'utente quanti round giocare
3 - Avviamo un ciclo for
    4 - generiamo il numero dell'utente da 1 a 6
    4 - generiamo il numero del computer da 1 a 6
    5a - ? numero utente > numero computer
        6 - punteggio += 
        7 - Stampiamo "Hai vinto il round "i""
    5b - : stampiamo "Hai perso il round "i""
3 - chiudiamo il ciclo for
4 - stampiamo il punteggio