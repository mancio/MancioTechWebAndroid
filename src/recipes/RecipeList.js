const recipes = {
    results: [
        {
            language: 'IT',
            title: 'Crostata di marmellata',
            shape: 'circle',
            diameter: '22 cm',
            picture: 'https://www.scambiaricette.it/wp-content/uploads/2020/03/crostata-alla-marmellata.jpg',
            ingredients: {
                farina: '330 gr',
                burro: '165 gr',
                zucchero: '130 gr',
                uovo: '1',
                tuorlo: '2',
                'zucchero vanigliato': '7 gr',
                sale: '2 gr',
                'lievito per dolci': '1 gr',
                marmellata: '330 gr'
            },
            description: {
                step1: 'Ammorbidire il burro rimescolando con zucchero e sale fino ad amalgamare il tutto',
                step2: 'Includere uovo e tuorli',
                step3: 'Frullare il tutto fino ad avere una pasta omogenea',
                step4: 'Aggiungere farina, lievito e rimescolare fino a comporre una palla che si stacca facilmente dalle mani.',
                step5: 'Mettere in frigo per 1 ora',
                step6: 'Stendere la palla su un piano infarinato con un mattarello infarinato. Creare un cerchio di circa più di 3 mm di spessore e diametro ampiamente più largo dello stampo',
                step7: 'Imburrare lo stampo per bene fondo e lati.',
                step8: 'Avvolgere l\'impasto attorno al mattarello e stenderlo sulla teglia. Far aderire bene la pasta ai bordi utilizzando le nocche delle mani onde evitare di romperla.',
                step9: 'Schiacciare i bordi in modo da rimuovere tutta la pasta in eccesso che straripante dallo stampo',
                step10: 'Bucherellare il fondo dello stampo con una forchetta',
                step11: 'Mettere la marmellata in una ciotola e mescolare velocemente in modo da schiacciare tutti i pezzi di frutta e renderla omogenea',
                step12: 'Versare la marmellata nello stampo e stenderla con una spatola',
                step13: 'Stendere la restante pasta creando un rettangolo bello largo',
                step14: 'Tagliare a strisce',
                step15: 'Adagiare le strisce a rete sulla marmellata facendo aderire i capi con la pasta ai bordi',
                step16: 'Togliere i pezzi in eccesso e impastare in modo da creare altre strisce',
                step17: 'Stendere prima da un lato e poi dall\'altro',
                step18: 'Mettere in forno 20 minuti al centro a 180 gradi',
                step19: 'Spostare nella parte inferiore del forno e cuocere a 170 gradi per altri 10 min'
            },
            notes: 'La pasta ottimale si presenta molto dura appena tolta dal frigo con i bordi che tendono a spaccarsi quando viene stesa, allo stesso tempo è profumata e burrosa. ' +
                'Si ammorbidisce velocemente a contatto con il calore delle mani e lascia il piano unto. ' +
                'Se si hanno problemi a creare le strisce si può rimettere in frigo il restante impasto per renderlo duro nuovamente. ' +
                'Per una migliore qualità estetica si può mettere una teglia in forno appena sopra lo stampo' +
                '(non a contatto) in modo da evitare che la superficie si bruci. ' +
                'Più albumi aumentano la durezza dell\'impasto una volta cotta. ' +
                'Più tuorli aumentano friabilità e sapore.'
        },
        {
            language: 'IT',
            title: 'Tiramisu',
            shape: 'rectangle',
            width: '22 cm',
            height: '16 cm',
            picture: 'https://polki.pl/foto/4_3_LARGE/tiramisu-2350187.webp',
            ingredients: {
                uova: '4',
                mascarpone: '400 gr',
                zucchero: '120 gr',
                savoiardi: '400 gr',
                caffe: '2 lunghi',
                cacao: '1 bustina/e'
            },
            description: {
                step1: 'Fare il caffè lungo (meglio con la moka) e mettere zucchero quanto basta',
                step2: 'Portare il mascarpone a temperatura ambiente',
                step3: 'Separare tuorli da albumi, facendo attenzione non vengano a contatto',
                step4: 'Unire zucchero e acqua in un pentolino in modo tale che l\'acqua copra leggermente lo zucchero',
                step5: 'Mettere sul fuoco il composto e rimescolare onde evitare si formi caramello ma diventi uno sciroppo',
                step6: 'Levare dal fuoco quando si vedono le bollicine bianche (ha superato i 100 gradi)',
                step7: 'Ricordare di usare metà sciroppo per i tuorli e metà per gli albumi',
                step8: 'Sbattere i tuorli a lungo con la frusta elettrica ad alta velocità mentre si versa a filo lo sciroppo. '
                        + 'Continuare fino a quando si vedrà il composto addensare e schiarire',
                step9: 'Versare il composto nella coppa di mascarpone a poco a poco e rimescolare in modo tale da evitare grumi',
                step10: 'Sbattere gli albumi a lungo fino a quando il composto sarà bianco denso e spumoso',
                step11: 'Unire il tutto rimescolando DELICATAMENTE (altrimenti il composto diventerà liquido)',
                step12: 'Mettere un pò di composto sulla base del contenitore',
                step13: 'Bagnare i savoiardi velocemente nel caffè e metterli in fila nel contenitore (faremo due piani)',
                step14: 'Coprire i savoiardi con abbastanza il minimo di crema necessaria per coprirli (attenzione a non usare troppa crema)',
                step15: 'Stendere un altro strato di savoiardi',
                step16: 'Coprire con la crema restante livellando bene da coprire tutti i buchi',
                step17: 'Coprire con cacao in polvere la superficie',
                step18: 'coprire il contenitore con pellicola trasparente e lasciare in frigo per almeno 1 ora'
            },
            notes: 'Sbattere le uova il più possibile in modo da incorporare aria e rendere il composto più solido possibile. '
                + 'Non usare troppo sciroppo per i tuorli altrimenti non sarà possibile pastorizzare gli albumi. '
                + 'Riscaldare lo sciroppo più volte per esseri sicuri sia sempre superiore a 100 gradi. '
                + 'Sbattere le uova velocemente mentre si versa lo sciroppo altrimenti si formeranno pezzi di uovo cotto'
        },
        {
            language: 'IT',
            title: 'Ciambella Bolognese',
            shape: 'rectangle',
            width: '40 cm',
            height: '20 cm',
            picture: 'https://www.gotuj-z-evi.pl/wp-content/uploads/2020/07/ciambella2.jpg',
            ingredients: {
                farina: '500 gr',
                latte: '150 gr',
                burro: '150 gr',
                zucchero: '150 gr',
                sale: '1 gr',
                'levito dolci': '1 bust',
                uova: '2',
                "zucchero vanigliato": '1 bust',
                'zuccherini': '1 bust',
                'ciliegie sciroppate': '1 barat'
            },
            description: {
                step1: 'Sciogliere il burro in un pentolino a fuoco lento evitando che frigga o faccia odore',
                step2: 'Mettere tutte le componenti solide in una terrina',
                step3: 'Unire latte, burro e uova',
                step4: 'Rimescolare il tutto (l’ordine degli ingredienti non e’ importante, ma ricordare che le uova a contatto '
                    + 'con il burro caldo si cuociono e l’albume si monta a contatto con lo zucchero)',
                step5: 'Quando il composto è pronto (non rimescolare troppo, basta che risulti tutto amalgamato)',
                step6: 'Arrotolare leggermente con le mani il composto facendolo diventare come un tubo',
                step7: 'Stendere velocemente su carta da forno in una teglia per il lungo schiacciandolo un pò',
                step8: 'Spalmare con un pennello imbevuto nel latte la superficie',
                step9: 'Decorare con zuccherini e ciliegie sciroppate',
                step10: 'Mettere in forno a 170 gradi 40 min ventilato nel piano al centro',
                step11: 'Girare dopo 20 minuti nel verso opposto per cottura omogenea',
                step12: 'Le tempistiche possono variare a seconda del forno quindi è importante controllare la parte interna della ciambella '
                    + 'o con uno stuzzicadente o con la lama di un coltello appoggiandola tra le crepe che si formeranno in cottura.',
                step13: 'Per una cottura ottimale consiglio di abbassare la temperatura a 100-120 gradi quando la ciambella raggiunge un colore dorato ma non troppo scuro. Così facendo si asciugherà all’interno senza bruciarsi all\'esterno. ',
            },
            notes: 'Il tempo di cottura può variare a seconda del forno quindi è importante controllare la parte interna della ciambella '
                + 'con uno stuzzicadenti o con la lama di un coltello appoggiandola tra le crepe che si formeranno in cottura. '
                + 'Per una cottura ottimale consiglio di abbassare la temperatura a 100-120 gradi quando la ciambella raggiunge un colore dorato ma non troppo scuro. '
                + 'Così facendo si asciugherà all’interno senza bruciarsi all\'esterno.'
        },
        {
            language: 'IT',
            title: 'Spaghetti alla Carbonara',
            shape: 'pasta',
            portions: '4',
            picture: 'https://blog.giallozafferano.it/allacciateilgrembiule/wp-content/uploads/2018/10/pasta-alla-carbonara5.jpg',
            ingredients: {
                pancetta: '150 gr',
                spaghetti: '320 gr',
                tuorli: '6 tuorli',
                pecorino: '50 gr',
            },
            description: {
                step1: 'Tagliare il guanciale o la pancetta cercando di rimuovere i chicchi di pepe',
                step2: 'Mettere la pancetta a rosolare in padella antiaderente a fuoco lento senza olio o burro',
                step3: 'Far bollire la pasta',
                step4: 'Unire il pecorino con i tuorli e il pepe (opzionale) e rimescolare fino a rimuovere i grumi',
                step5: 'Aggiungere qualche cucchiaio di acqua di cottura nel composto (senza esagerare). '
                    + 'Quanto basta per amalgamare il tutto',
                step6: 'Scolare la pasta in anticipo e metterla in padella con la pancetta e rimescolare fino a cottura ultimata',
                step7: 'Togliere la padella dal fuoco',
                step8: 'Versare il composto tuorli, pecorino e acqua sulla pasta e rimescolare',
                step9: 'Impiattare velocemente onde evitare le uova cuociano formando grumi'
            },
            notes: 'Fare attenzione al tipo di pancetta utilizzata. Rimuovere i chicchi grossi di pepe che potrebbero rendere il '
                + "sapore troppo amaro e rovinare il piatto. Aggiungere l'acqua nel composto tuorli e pecorino, serve a reenderlo più "
                + "fluido. Inoltre l'acqua tiepida porta a temperatura il composto evitando che faccia i grumi a contatto con la pasta. "
                + "Attenzione al pecorino! La sapidità è importante. Se il pecorino è troppo salato, mischiare con il parmigiano."
        },
        {
            language: 'IT',
            title: 'Focaccia con pomodorini',
            shape: 'none',
            picture: 'https://www.giallozafferano.it/images/234-23404/Focaccia-con-pomodorini-e-origano_450x300.jpg',
            ingredients: {
                'farina W 260/270': '500 gr',
                'farina 00': '200 gr',
                'acqua': '490 gr',
                'lievito': '1 bustina pizza',
                'olio impasto': '1 cucchiaio e mezzo',
                zucchero: '1 cucchiaino',
                sale: '1 cucchiaino',
                'sale Himalaya': 'a piacere',
                origano: "a piacere"
            },
            description: {
                step1: "Per essere sicuri di attivare il lievito scioglierlo con un po' di acqua leggermente tiepida assieme ad un cucchiaino "
                + " di farina e uno di zucchero.",
                step2: "Unire il composto con farina e l'acqua restante e mescolare con pazienza (l'impasto sarà colloso) eventualmente "
                + "spruzzare un po' d'acqua sulle mani per evitare che la farina si incolli.",
                step3: "Aggiungere olio (un cucchiaio e mezzo), il sale e continuare ad impastare ripiegando l'impasto su se stesso "
                + "facendo attenzione a non schiacciarlo troppo facendo uscire aria",
                step4: "Accendere il forno al minimo (girare la rotella e lasciarla appena si attiva) e spegnerlo appena raggiunge temperatura "
                + "sarà tiepido ma non troppo caldo.",
                step5: "Mettere l'impasto in una ciotola coperta e lasciarlo nel forno semiaperto a lievitare qualche ora.",
                step6: "Quando sarà aumentato impastare nuovamente con delicatezza senza schiacciare e far riposare un altra mezz'ora.",
                step7: "Quando sarà aumentato nuovamente, stenderlo su una teglia precedentemente oliata senza appiattirlo troppo. "
                + "Se volete il bordo soffice dovete far aderire l'impasto alle pareti, altrimenti farà la crosta ai lati.",
                step8: "Riponete la teglia nel forno spento coperta per qualche ora in modo che lieviti ancora un po'.",
                step9: "Tagliare i pomodorini a metà e inserirli facendo pressione sulla superficie dell'impasto.",
                step10: "Create delle impronte sulla superficie dell'impasto con le dita infarinate o bagnate per non farle incollare.",
                step11: "Stendere olio sulla superficie a piacere e massaggiare con le mani per coprire tutta l'area.",
                step12: "Lasciar cadere dall'alto un po' di origano e sale sull'impasto senza esagerare. Ricorda che il sale dell Himalaya "
                + "ha la stessa dimensione del sale grosso ma sala di meno.",
                step13: "Infornare a 190 gradi nella parte medio-alta del forno fino a quando la superficie diventa dorata.",
                step14: "Se la superficie assume il giusto colore ma la focaccia è ancora troppo morbida abbassare la temperatura "
                + "tra i 150 - 100 gradi fino a fine cottura."
            },
            notes: "Puoi usare il sale grosso invece di quello dell Himalaya. La lievitazione varia in base alla forza della farina. "
            + " Cuocere prima che l'odore diventi pungente. Ricorda che non riuscirai a fare una lievitazione troppo lunga essendo l'impasto "
            + "molto bagnato."
        },
        {
            language: 'IT',
            title: 'Piadina Romagnola',
            shape: 'piadina',
            portions: '6',
            picture: 'https://www.tavolartegusto.it/wp/wp-content/uploads/2020/03/Piadina-romagnola-Ricetta-piadina.jpg',
            ingredients: {
                'farina 00': '500 gr',
                'acqua': '220 gr',
                'strutto': '70 gr',
                'bicarbonato': '1 cucchiaino raso',
                sale: '1 cucchiaino raso'
            },
            description: {
                step1: "Mettere in una ciottola farina, sale, strutto e bicarbonato.",
                step2: "Impastare a mano sciogliendo e incorporando lo strutto alle polveri.",
                step3: "Continuare a impastare aggiungendo acqua a poco a poco fino a incorporare tutta la farina rimasta sul fondo della " +
                    "ciottola e formare una palla.",
                step4: "coprire la ciottola con pellicola trasparente e lasciare riposare a temperatura ambiente " +
                    "per 40 minuti (non serve il calore perchè deve compattarsi non lievitare).",
                step5: "Tirare l'impasto fuori dalla ciottola e impastare nuovamente e dividere in palline da 130 - 140 gr " +
                    "ciascuna e rimettere le palline a riposare per 15 minuti coperte con la pellicola.",
                step6: "stendere le palline col mattarello (non serve farina aggiuntiva perchè l'impasto è unto e " +
                    "non appiccica. Fare le piadine molto sottili (2 mm circa) cuocendosi lo spessore aumenterà abbastanza.",
                step7: "Cuocere le piadine una ad una su una padella antiaderente a fuoco medio girandole spesso per " +
                    "controllare che non si brucino.",
                step8: "Per mangiarle subito cuocerle a dovere, altrimenti se le volete surgelare cuocerle leggermente " +
                    "da entrambi i lati. La cottura finirà in padella dopo averle tolte dal freezer.",
                step9: "Se volete surgelare le piadine, consiglio di metterle una sopra all'altra dividendole con la " +
                    "carta per alimenti in modo che non si incollino."
            },
            notes: "Potete sostituire lo strutto con la stessa quantità d'olio. Provare a giocare con strutto e bicarbonato " +
                "per trovare il giusto equilibrio."
        }
    ]
}

export const getRecipesData = function (){
    return recipes;
}