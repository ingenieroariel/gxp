/**
 * @requires GeoExt/Lang.js
 */

GeoExt.Lang.add("en", {

    "gxp.menu.LayerMenu.prototype": {
        layerText: "Layer"
    },

    "gxp.plugins.AddLayers.prototype": {
        addActionMenuText: "Aggiungi layer",
        addActionTip: "Aggiungi layer",
        addServerText: "Aggiungi un nuovo server",
        addButtonText: "Aggiungi layer",
        untitledText: "Senza titolo",
        addLayerSourceErrorText: "Errore capacità di ottenere WMS (msg {}) \ nControllare l'url e riprovare.",
        availableLayersText: "Layer disponibili",
        expanderTemplateText: "<p><b>Riassunto:</b> {abstract}</p>",
        panelTitleText: "Titolo",
        layerSelectionText: "Fonte:",
        sourceSelectOrTypeText: "Scegli uno o digitare l'URL del servizio",
        doneText: "Finito",
        uploadText: "Carica layer"
    },
    
    "gxp.plugins.BingSource.prototype": {
        title: "Layer di Bing",
        roadTitle: "Bing Strade",
        aerialTitle: "Bing Aerea",
        labeledAerialTitle: "Bing Aerea con etichette"
    },

    "gxp.plugins.FeatureEditor.prototype": {
        splitButtonText: "Dividi",
        createFeatureActionText: "Crea",
        editFeatureActionText: "Modifica",
        createFeatureActionTip: "Creare una nuova funzione",
        editFeatureActionTip: "Modifica elemento esistente"
    },
    
    "gxp.plugins.FeatureGrid.prototype": {
        displayFeatureText: "Mostra sulla carta",
        firstPageTip: "Prima pagina",
        previousPageTip: "Pagina precedente",
        zoomPageExtentTip: "Zoom alla pagina",
        nextPageTip: "Pagina successiva",
        lastPageTip: "Ultima pagina",
        totalMsg: "Totale"
    },

    "gxp.plugins.GoogleEarth.prototype": {
        menuText: "Visualizzatore 3D",
        tooltip: "Passa a Viewer 3D"
    },
    
    "gxp.plugins.GoogleSource.prototype": {
        title: "Layers di Google",
        roadmapAbstract: "Mostra mappa stradale",
        satelliteAbstract: "Mostra immagini satellitari",
        hybridAbstract: "Mostra immagini con i nomi delle strade",
        terrainAbstract: "Mostra sulla mappa stradale con terreno"
    },

    "gxp.plugins.LayerProperties.prototype": {
        menuText: "Proprietà layer",
        toolTip: "Proprietà layer"
    },
    
    "gxp.plugins.LayerTree.prototype": {
        shortTitle: "Layers",
        rootNodeText: "Layers",
        overlayNodeText: "Overlay",
        baseNodeText: "Layers di Base"
    },

    "gxp.plugins.Legend.prototype": {
        menuText: "Mostra Legenda",
        tooltip: "Mostra Legenda"
    },

    "gxp.plugins.LoadingIndicator.prototype": {
        loadingMapMessage: "Caricamento ..."
    },

    "gxp.plugins.MapBoxSource.prototype": {
        title: "MapBox Layers",
        blueMarbleTopoBathyJanTitle: "Topografia Blue Marble & batimetria (gennaio)",
        blueMarbleTopoBathyJulTitle: "Topografia Blue Marble & Batimetria (luglio)",
        blueMarbleTopoJanTitle: "Topografia Blue Marble (gennaio)",
        blueMarbleTopoJulTitle: "Topografia Blue Marble (luglio)",
        controlRoomTitle: "Sala di Controllo",
        geographyClassTitle: "Classe Geografia",
        naturalEarthHypsoTitle: "Terra Natural Ipsometrico",
        naturalEarthHypsoBathyTitle: "Terra Natural Ipsometrico & Batimetria",
        naturalEarth1Title: "Terra Natural I",
        naturalEarth2Title: "Terra Natural II",
        worldDarkTitle: "Mondo oscuro",
        worldLightTitle: "Mondo chiaro",
        worldPrintTitle: "Mondo della carta stampata"
    },

    "gxp.plugins.Measure.prototype": {
        buttonText: "Misura",
        lengthMenuText: "Lunghezza",
        areaMenuText: "Area",
        lengthTooltip: "Misurare la lunghezza",
        areaTooltip: "Misurare la area",
        measureTooltip: "Misura"
    },

    "gxp.plugins.Navigation.prototype": {
        menuText: "Pan Mappa",
        tooltip: "Pan Mappa"
    },

    "gxp.plugins.NavigationHistory.prototype": {
        previousMenuText: "Zoom all'estensione precedente",
        nextMenuText: "Zoom all'estensione successiva",
        previousTooltip: "Zoom all'estensione precedente",
        nextTooltip: "Zoom all'estensione successiva"
    },

    "gxp.plugins.OSMSource.prototype": {
        title: "OpenStreetMap Layer",
        mapnikAttribution: "Dati CC-By-SA di <a href='http://openstreetmap.org/'>OpenStreetMap</a>",
        osmarenderAttribution: "Dati CC-By-SA di <a href='http://openstreetmap.org/'>OpenStreetMap</a>"
    },

    "gxp.plugins.Print.prototype": {
        buttonText:"Stampa",
        menuText: "Stampare la Mappa",
        tooltip: "Stampare la Mappa",
        previewText: "Anteprima di stampa",
        notAllNotPrintableText: "Non tutti i layer possono essere stampati",
        nonePrintableText: "Nessuno dei tuoi attuali layer della mappa possono essere stampati"
    },

    "gxp.plugins.MapQuestSource.prototype": {
        title: "MapQuest Layers",
        osmAttribution: "Tiles per gentile concessione di <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        osmTitle: "MapQuest OpenStreetMap",
        naipAttribution: "Tiles per gentile concessione di <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        naipTitle: "MapQuest Immagini"
    },

    "gxp.plugins.QueryForm.prototype": {
        queryActionText: "Interrogare",
        queryMenuText: "Interrogare layer",
        queryActionTip: "Interrogare il layer selezionato",
        queryByLocationText: "Interrogare per area",
        queryByAttributesText: "Interrogare per attributi",
        queryMsg: "Interrogando...",
        cancelButtonText: "Cancellare",
        noFeaturesTitle: "Nessuna corrispondenza",
        noFeaturesMessage: "La tua ricerca non ha restituito alcun risultato."
    },

    "gxp.plugins.RemoveLayer.prototype": {
        removeMenuText: "Rimuovi layer",
        removeActionTip: "Rimuovi layer"
    },
    
    "gxp.plugins.Styler.prototype": {
        menuText: "Modifica Stili",
        tooltip: "Gestire gli stili dei layer"

    },

    "gxp.plugins.WMSGetFeatureInfo.prototype": {
        buttonText:"Identificare",
        infoActionTip: "Ottenere informazioni",
        popupTitle: "Informazioni"
    },

    "gxp.plugins.Zoom.prototype": {
        zoomMenuText: "Zoom",
        zoomInMenuText: "Zoom In",
        zoomOutMenuText: "Zoom Out",
        zoomTooltip: "Zoom trascinando una finestra",
        zoomInTooltip: "Zoom In",
        zoomOutTooltip: "Zoom Out"
    },
    
    "gxp.plugins.ZoomToExtent.prototype": {
        menuText: "Zoom alla massima estensione",
        tooltip: "Zoom alla massima estensione"
    },
    
    "gxp.plugins.ZoomToDataExtent.prototype": {
        menuText: "Zoom all'estensione dei dati",
        tooltip: "Zoom all'estensione dei dati"
    },

    "gxp.plugins.ZoomToLayerExtent.prototype": {
        menuText: "Zoom all'estensione del layer ",
        tooltip: "Zoom all'estensione del layer"
    },
    
    "gxp.plugins.ZoomToSelectedFeatures.prototype": {
        menuText: "Zoom agli oggetti selezionati",
        tooltip: "Zoom agli oggetti selezionati"
    },

    "gxp.FeatureEditPopup.prototype": {
        closeMsgTitle: "Salvare le modifiche?",
        closeMsg: "Quest'oggetto contiene modifiche non salvate. Vuoi salvare le modifiche?",
        deleteMsgTitle: "Eliminare l'oggetto?",
        deleteMsg: "Sei sicuro di voler eliminare quest'oggetto?",
        editButtonText: "Modifica",
        editButtonTooltip: "Rendi modificabile quest'oggetto",
        deleteButtonText: "Elimina",
        deleteButtonTooltip: "Elimina quest'oggetto",
        cancelButtonText: "Annulla",
        cancelButtonTooltip: "Termina l'operazione di modifica ed elimina i cambiamenti.",
        saveButtonText: "Salva",
        saveButtonTooltip: "Salva i cambiamenti"
    },
    
    "gxp.FillSymbolizer.prototype": {
        fillText: "Riempimento",
        colorText: "Colore",
        opacityText: "Opacità"
    },
    
    "gxp.FilterBuilder.prototype": {
        builderTypeNames: ["uno", "tutti", "nessuno", "non tutti"],
        preComboText: "che rispettano",
        postComboText: "dei seguenti:",
        addConditionText: "aggiungi criterio",
        addGroupText: "aggiungi gruppo",
        removeConditionText: "rimuovi criterio"
    },
    
    "gxp.grid.CapabilitiesGrid.prototype": {
        nameHeaderText : "Nome",
        titleHeaderText : "Titolo",
        queryableHeaderText : "Interrogabile",
        layerSelectionLabel: "Visualizza dati disponibili da:",
        layerAdditionLabel: "o aggiungi un nuovo server.",
        expanderTemplateText: "<p><b>Estratto:</b> {abstract}</p>"
    },
    
    "gxp.PointSymbolizer.prototype": {
        graphicCircleText: "cerchio",
        graphicSquareText: "quadrato",
        graphicTriangleText: "triangolo",
        graphicStarText: "stella",
        graphicCrossText: "croce",
        graphicXText: "x",
        graphicExternalText: "esterno",
        urlText: "URL",
        opacityText: "opacità",
        symbolText: "Simobolo",
        sizeText: "Dimensione",
        rotationText: "Rotazione"
    },

    "gxp.QueryPanel.prototype": {
        queryByLocationText: "Interroga per posizione",
        currentTextText: "Estensione corrente",
        queryByAttributesText: "Interroga per attributi",
        layerText: "Layer"
    },
    
    "gxp.RulePanel.prototype": {
        scaleSliderTemplate: "{scaleType} Scala 1:{scale}",
        labelFeaturesText: "Etichetta oggetti",
        labelsText: "Etichette",
        basicText: "Base",
        advancedText: "Avanzate",
        limitByScaleText: "Limita per scala",
        limitByConditionText: "Limita per condizione",
        symbolText: "Simbolo",
        nameText: "Nome"
    },
    
    "gxp.ScaleLimitPanel.prototype": {
        scaleSliderTemplate: "{scaleType} Scala 1:{scale}",
        minScaleLimitText: "Limite minimo di scala",
        maxScaleLimitText: "Limite massimo di scala"
    },
    
    "gxp.StrokeSymbolizer.prototype": {
        solidStrokeName: "solido",
        dashStrokeName: "tratti",
        dotStrokeName: "punti",
        titleText: "Bordo",
        styleText: "Stile",
        colorText: "Colore",
        widthText: "Spessore",
        opacityText: "Opacità"
    },
    
    "gxp.StylePropertiesDialog.prototype": {   
        titleText: "Generale",
        nameFieldText: "Nome",
        titleFieldText: "Titolo",
        abstractFieldText: "Estratto"
    },
    
    "gxp.TextSymbolizer.prototype": {
        labelValuesText: "Etichetta volari",
        haloText: "Alone",
        sizeText: "Dimensione"
    },
    
    "gxp.WMSLayerPanel.prototype": {
        aboutText: "A proposito",
        titleText: "Titolo",
        nameText: "Nome",
        descriptionText: "Descrizione",
        displayText: "Visualizza",
        opacityText: "Opacità",
        formatText: "Formato",
        transparentText: "Trasparente",
        cacheText: "Cache",
        cacheFieldText: "Usa versione in cache",
        stylesText: "Stili",
        infoFormatText: "Formato",
        infoFormatEmptyText: "Seleziona un formato"
    },

    "gxp.EmbedMapDialog.prototype": {
        publishMessage: "La tua mappa é pronta per essere pubblicata sul web. Copia semplicemente il seguente HTML per includere la mappa nel tuo sito."
        heightLabel: 'Altezza',
        widthLabel: 'Larghezza',
        mapSizeLabel: 'Dimensioni mappa',
        miniSizeLabel: 'Mini',
        smallSizeLabel: 'Piccola',
        premiumSizeLabel: 'Premium',
        largeSizeLabel: 'Grande'
    },
    
    "gxp.WMSStylesDialog.prototype": {
         addStyleText: "Aggiungi",
         addStyleTip: "Aggiungi un nuovo stile",
         chooseStyleText: "Scegli uno stile",
         deleteStyleText: "Rimuovi",
         deleteStyleTip: "Elimina lo stile selezionato",
         editStyleText: "Modifica",
         editStyleTip: "Maodifica lo stile selezionato",
         duplicateStyleText: "Duplica",
         duplicateStyleTip: "Duplica lo stile selezionato",
         addRuleText: "Aggiungi",
         addRuleTip: "Aggiungi una nuova regola",
         newRuleText: "Nuova regola",
         deleteRuleText: "Rimuovi",
         deleteRuleTip: "Elimina la regola selezionata",
         editRuleText: "Modifica",
         editRuleTip: "Modifica la regola selezionata",
         duplicateRuleText: "Duplica",
         duplicateRuleTip: "Duplica la regola selezionata",
         cancelText: "Annulla",
         saveText: "Salva",
         styleWindowTitle: "Stile dell'utente: {0}",
         ruleWindowTitle: "Regola di stile: {0}",
         stylesFieldsetTitle: "Stili",
         rulesFieldsetTitle: "Regole"
    },

    "gxp.LayerUploadPanel.prototype": {
        titleLabel: "Titolo",
        titleEmptyText: "Titolo del layer",
        abstractLabel: "Descrizone",
        abstractEmptyText: "Descrizione del layer",
        fileLabel: "Dato",
        fieldEmptyText: "Cerca per archivi di dati...",
        uploadText: "Carica",
        waitMsgText: "Caricando il tuo dato...",
        invalidFileExtensionText: "L'estensione del file deve essere tra: ",
        optionsText: "Opzioni",
        workspaceLabel: "Spazio di lavoro",
        workspaceEmptyText: "Spazio di lavoro di default",
        dataStoreLabel: "Contenitore",
        dataStoreEmptyText: "Crea un nuovo contenitore",
        defaultDataStoreEmptyText: "Contenitore di dati di default"
    },
    
    "gxp.NewSourceDialog.prototype": {
        title: "Aggiungi un nuovo server...",
        cancelText: "Annulla",
        addServerText: "Aggiungi server",
        invalidURLText: "Inserisci una URL valida per un servizio WMS (e.g. http://example.com/geoserver/wms)",
        contactingServerText: "Contattando il server..."
    },

    "gxp.ScaleOverlay.prototype": { 
        zoomLevelText: "Livelli di zoom"
    }

});
