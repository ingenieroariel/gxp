/**
 * @requires GeoExt/Lang.js
 */

GeoExt.Lang.add("en", {

    "gxp.menu.LayerMenu.prototype": {
        layerText: "الطبقة"
    },

    "gxp.plugins.AddLayers.prototype": {
        addActionMenuText: "إضافة طبقات",
        addActionTip: "إضافة طبقات",
        addServerText: "إضافة خادم جديد",
        addButtonText: "إضافة طبقات",
        untitledText: "غيرمسمى",
        addLayerSourceErrorText: "عطل أثناء تحميل قدرات خدمة الخرائط الإليكترونية WMS ({msg}).\nرجاء التأكد من صحة العنوان والمحاولة مرة أخرى.",
        availableLayersText: "الطبقات المتاحة",
        expanderTemplateText: "<p><b>الملخص:</b> {abstract}</p>",
        panelTitleText: "العنوان",
        layerSelectionText: "المصدر:",
        sourceSelectOrTypeText: "اختر واحد أو اكتب عنوان الخدمة",
        doneText: "تم",
        uploadText: "رفع الطبقات"
    },
    
    "gxp.plugins.BingSource.prototype": {
        title: "طبقات بنج",
        roadTitle: "طرق بنج",
        aerialTitle: "بنج الجوية",
        labeledAerialTitle: "بنج الجوية بالأسماء"
    },

    "gxp.plugins.FeatureEditor.prototype": {
        splitButtonText: "تحرير",
        createFeatureActionText: "إنشاء",
        editFeatureActionText: "تعديل",
        createFeatureActionTip: "إنشاء ميزة جديدة",
        editFeatureActionTip: "تحرير ميزة موجودة"
    },
    
    "gxp.plugins.FeatureGrid.prototype": {
        displayFeatureText: "عرض على الخريطة",
        firstPageTip: "الصفحة الأولى",
        previousPageTip: "الصفحة السابقة",
        zoomPageExtentTip: "تغيير المنظور لمدى الصفحة",
        nextPageTip: "الصفحة التالية",
        lastPageTip: "الصفحة الأخيرة",
        totalMsg: "الخواص {1} إلى {2} من {0}"
    },

    "gxp.plugins.GoogleEarth.prototype": {
        menuText: "رؤية ثلاثية الأبعاد",
        tooltip: "التحويل للرؤية ثلاثية الأبعاد"
    },
    
    "gxp.plugins.GoogleSource.prototype": {
        title: "طبقات جوجل",
        roadmapAbstract: "إظهار خريطة الشارع",
        satelliteAbstract: "إظهار المرئيات الفضائية",
        hybridAbstract: "إظهار الصور بأسماء الشوارع",
        terrainAbstract: "إظهار خريطة الشارع مع تضاريس الأرض"
    },

    "gxp.plugins.LayerProperties.prototype": {
        menuText: "خصائص الطبقة",
        toolTip: "خصائص الطبقة"
    },
    
    "gxp.plugins.LayerTree.prototype": {
        shortTitle: "الطبقات",
        rootNodeText: "الطبقات",
        overlayNodeText: "Overlays",
        baseNodeText: "الطبقات الأساسية"
    },

    "gxp.plugins.Legend.prototype": {
        menuText: "إظهار مفتاح الخريطة",
        tooltip: "إظهار مفتاح الخريطة"
    },

    "gxp.plugins.LoadingIndicator.prototype": {
        loadingMapMessage: "جاري تحميل الخريطة..."
    },

    "gxp.plugins.MapBoxSource.prototype": {
        title: "طبقات ماب بوكس",
        blueMarbleTopoBathyJanTitle: "طبوغرافيا وقياس الأعماق من بلوماربل (يناير)",
        blueMarbleTopoBathyJulTitle: " طبوغرافيا وقياس الأعماق من بلوماربل (يوليو)",
        blueMarbleTopoJanTitle: "طبوغرافيا بلوماربل (يناير)",
        blueMarbleTopoJulTitle: "طبوغرافيا بلوماربل (يوليو)",
        controlRoomTitle: "غرفة التحكم",
        geographyClassTitle: "مستوى الجغرافيا",
        naturalEarthHypsoTitle: "قياس ارتفاع ناتشورال إيرث",
        naturalEarthHypsoBathyTitle: "قياس ارتفاع وعمق ناتشورال إيرث",
        naturalEarth1Title: "ناتشورال إيرث 1",
        naturalEarth2Title: "ناتشورال إيرث 2",
        worldDarkTitle: "World Dark",
        worldLightTitle: "World Light",
        worldPrintTitle: "World Print"
    },

    "gxp.plugins.Measure.prototype": {
        buttonText: "قياس",
        lengthMenuText: "طول",
        areaMenuText: "مساحة",
        lengthTooltip: "قياس الطول",
        areaTooltip: "قياس المساحة",
        measureTooltip: "قياس"
    },

    "gxp.plugins.Navigation.prototype": {
        menuText: "تحريك الخريطة",
        tooltip: "تحريك الخريطة"
    },

    "gxp.plugins.NavigationHistory.prototype": {
        previousMenuText: "الرجوع للمنظور السابق",
        nextMenuText: "الذهاب للمنظور التالي",
        previousTooltip: "الرجوع للمنظور السابق",
        nextTooltip: "الذهاب للمنظور التالي"
    },

    "gxp.plugins.OSMSource.prototype": {
        title: "طبقات أوبن ستريت ماب",
        mapnikAttribution: "Data CC-By-SA by <a href='http://openstreetmap.org/'>OpenStreetMap</a>",
        osmarenderAttribution: "Data CC-By-SA by <a href='http://openstreetmap.org/'>OpenStreetMap</a>"
    },

    "gxp.plugins.Print.prototype": {
        buttonText:"طباعة",
        menuText: "طباعة الخريطة",
        tooltip: "طباعة الخريطة",
        previewText: "معاينة قبل الطباعة",
        notAllNotPrintableText: "بعض الطبقات لا يمكن طباعتها",
        nonePrintableText: "لا يمكن طباعة أي من طبقات الخريطة الحالية"
    },

    "gxp.plugins.MapQuestSource.prototype": {
        title: "طبقات ماب كويست",
        osmAttribution: "الطبقات متوفرة من <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        osmTitle: "ماب كويست أوبن ستريت ماب",
        naipAttribution: "Tiles Courtesy of <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        naipTitle: "مرئيات ماب كويست"
    },

    "gxp.plugins.QueryForm.prototype": {
        queryActionText: "الاستعلام",
        queryMenuText: "استعلام الطبقة",
        queryActionTip: "استعلام الطبقة المختارة",
        queryByLocationText: "الاستعلام بمدى الخريطة الحالي",
        queryByAttributesText: "الاستعلام بالخصائص",
        queryMsg: "جاري الاستعلام...",
        cancelButtonText: "إلغاء",
        noFeaturesTitle: "لايوجد نتائج",
        noFeaturesMessage: "لا يوجد أي نتائج لهذا الاستعلام"
    },

    "gxp.plugins.RemoveLayer.prototype": {
        removeMenuText: "إزالة الطبقة",
        removeActionTip: "إزالة الطبقة"
    },
    
    "gxp.plugins.Styler.prototype": {
        menuText: "تحرير شكل الخريطة",
        tooltip: "إدارة أشكال الخريطة"

    },

    "gxp.plugins.WMSGetFeatureInfo.prototype": {
        buttonText:"تحديد",
        infoActionTip: "الحصول على معلومات عن الميزة",
        popupTitle: "معلومات عن الميزة"
    },

    "gxp.plugins.Zoom.prototype": {
        zoomMenuText: "صندوق المنظور",
        zoomInMenuText: "تكبير",
        zoomOutMenuText: "تصغير",
        zoomTooltip: "تغيير المنظور بسحب مربع",
        zoomInTooltip: "تكبير",
        zoomOutTooltip: "تصغير"
    },
    
    "gxp.plugins.ZoomToExtent.prototype": {
        menuText: "تكبير لأقصى مدى",
        tooltip: "تصغير لأقل مدى"
    },
    
    "gxp.plugins.ZoomToDataExtent.prototype": {
        menuText: "تغيير المنظور لمدى الطبقة",
        tooltip: "تغيير المنظور لمدى الطبقة"
    },

    "gxp.plugins.ZoomToLayerExtent.prototype": {
        menuText: "تغيير المنظور لمدى الطبقة",
        tooltip: "تغيير المنظور لمدى الطبقة"
    },
    
    "gxp.plugins.ZoomToSelectedFeatures.prototype": {
        menuText: "تغيير المنظور لمدى المميزات المختارة",
        tooltip: "تغيير المنظور لمدى المميزات المختارة"
    },

    "gxp.FeatureEditPopup.prototype": {
        closeMsgTitle: "هل ترغب في حفظ التغييرات؟",
        closeMsg: "هذه الميزة بها تغييرات لم يتم حفظها. هل ترغب في حفظها؟",
        deleteMsgTitle: "هل ترغب في مسح الميزة؟",
        deleteMsg: "هل أنت متأكد من الرغبة في مسح الميزة؟",
        editButtonText: "تحرير",
        editButtonTooltip: "اجعل هذه الميزة قابلة للتحرير",
        deleteButtonText: "مسح",
        deleteButtonTooltip: "مسح هذه الميزة",
        cancelButtonText: "إلغاء",
        cancelButtonTooltip: "توقف عن التحرير، وارمي التغييرات ",
        saveButtonText: "حفظ",
        saveButtonTooltip: "حفظ التغييرات"
    },
    
    "gxp.FillSymbolizer.prototype": {
        fillText: "Fill",
        colorText: "اللون",
        opacityText: "الغمق"
    },
    
    "gxp.FilterBuilder.prototype": {
        builderTypeNames: ["أي منهم", "الكل", "لاشيء", "بعضهم"],
        preComboText: "مطابقة",
        postComboText: "من التالي:",
        addConditionText: "إضافة شرط",
        addGroupText: "إضافة مجموعة",
        removeConditionText: "إزالة الشرط"
    },
    
    "gxp.grid.CapabilitiesGrid.prototype": {
        nameHeaderText : "الاسم",
        titleHeaderText : "العنوان",
        queryableHeaderText : "قابلة للاستعلام",
        layerSelectionLabel: "عرض البيانات المتاحة من:",
        layerAdditionLabel: "أو إضافة خادم جديد",
        expanderTemplateText: "<p><b>الملخص:</b> {abstract}</p>"
    },
    
    "gxp.PointSymbolizer.prototype": {
        graphicCircleText: "دائرة",
        graphicSquareText: "مربع",
        graphicTriangleText: "مثلث",
        graphicStarText: "نجمة",
        graphicCrossText: "علامةزائد",
        graphicXText: "x",
        graphicExternalText: "خارجي",
        urlText: "عنوان المسار الإليكتروني",
        opacityText: "الغمق",
        symbolText: "الرمز",
        sizeText: "الحجم",
        rotationText: "تدوير"
    },

    "gxp.QueryPanel.prototype": {
        queryByLocationText: "الاستعلام بالمكان",
        currentTextText: "المدى الحالي",
        queryByAttributesText: "الاستعلام بالخصائص",
        layerText: "الطبقة"
    },
    
    "gxp.RulePanel.prototype": {
        scaleSliderTemplate: "{scaleType} قياس 1:{scale}",
        labelFeaturesText: "تسمية المميزات",
        labelsText: "الأسماء",
        basicText: "أساسية",
        advancedText: "متقدمة",
        limitByScaleText: "اقتصار بقياس الخريطة",
        limitByConditionText: "اقتصار بالشروط",
        symbolText: "الرمز",
        nameText: "الاسم"
    },
    
    "gxp.ScaleLimitPanel.prototype": {
        scaleSliderTemplate: "{scaleType} قياس 1:{scale}",
        minScaleLimitText: "الحد الأدنى لقياس الخريطة",
        maxScaleLimitText: "الحد الأقصى لقياس الخريطة"
    },
    
    "gxp.StrokeSymbolizer.prototype": {
        solidStrokeName: "صلب",
        dashStrokeName: "شرطات",
        dotStrokeName: "نقاط",
        titleText: "Stroke",
        styleText: "الشكل",
        colorText: "اللون",
        widthText: "العرض",
        opacityText: "الغمق"
    },
    
    "gxp.StylePropertiesDialog.prototype": {   
        titleText: "العام",
        nameFieldText: "الاسم",
        titleFieldText: "العنوان",
        abstractFieldText: "الملخص"
    },
    
    "gxp.TextSymbolizer.prototype": {
        labelValuesText: "تسمية القيمة",
        haloText: "الهالة",
        sizeText: "الحجم"
    },
    
    "gxp.WMSLayerPanel.prototype": {
        aboutText: "About",
        titleText: "العنوان",
        nameText: "الاسم",
        descriptionText: "الوصف",
        displayText: "عرض",
        opacityText: "غمق",
        formatText: "التصميم",
        transparentText: "شفاف",
        cacheText: "Cache",
        cacheFieldText: "Use cached version",
        stylesText: "الأشكال",
        infoFormatText: "تصميم المعلومات",
        infoFormatEmptyText: "اختيار تصميم"
    },

    "gxp.EmbedMapDialog.prototype": {
        publishMessage: "الخريطة جاهزة لنشرها على الإنترنت! انسخ الرابط التالي لتضمين الخريطة داخل موقعك:",
        heightLabel: 'الارتفاع',
        widthLabel: 'العرض',
        mapSizeLabel: 'حجم الخريطة',
        miniSizeLabel: 'دقيق',
        smallSizeLabel: 'صغير',
        premiumSizeLabel: 'متميز',
        largeSizeLabel: 'كبير'
    },
    
    "gxp.WMSStylesDialog.prototype": {
         addStyleText: "إضافة",
         addStyleTip: "إضافة شكل جديد",
         chooseStyleText: "اختيار شكل",
         deleteStyleText: "مسح",
         deleteStyleTip: "مسح الشكل المختار",
         editStyleText: "تحرير",
         editStyleTip: "تحرير الطبقة المختارة",
         duplicateStyleText: "تكرار",
         duplicateStyleTip: "تكرار الشكل المختار",
         addRuleText: "إضافة",
         addRuleTip: "إضافة قاعدة جديدة",
         newRuleText: "قاعدة جديدة",
         deleteRuleText: "مسح",
         deleteRuleTip: "مسح القاعدة المختارة",
         editRuleText: "تحرير",
         editRuleTip: "تحرير القاعدة المختارة",
         duplicateRuleText: "تكرار",
         duplicateRuleTip: "تكرار القاعدة المختارة",
         cancelText: "إلغاء",
         saveText: "حفظ",
         styleWindowTitle: "شكل المستخدم {0}",
         ruleWindowTitle: "قاعدة الشكل {0}",
         stylesFieldsetTitle: "الأشكال",
         rulesFieldsetTitle: "القواعد"
    },

    "gxp.LayerUploadPanel.prototype": {
        titleLabel: "العنوان",
        titleEmptyText: "عنوان الطبقة",
        abstractLabel: "الوصف",
        abstractEmptyText: "وصف الطبقة",
        fileLabel: "البيانات",
        fieldEmptyText: "تصفح أرشيف البيانات...",
        uploadText: "ارفع",
        waitMsgText: "جاري رفع البيانات",
        invalidFileExtensionText: "امتداد الملف يجب أن يكون واحد من: ",
        optionsText: "الخيارات",
        workspaceLabel: "مساحة العمل",
        workspaceEmptyText: "مساحة العمل الافتراضية",
        dataStoreLabel: "تخزين",
        dataStoreEmptyText: "إنشاء مخزن جديد",
        defaultDataStoreEmptyText: "مخزن بيانات افتراضي"
    },
    
    "gxp.NewSourceDialog.prototype": {
        title: "إضافة خادم جديد...",
        cancelText: "إلغاء",
        addServerText: "إضافة خادم",
        invalidURLText: "ادخل عنوان مسار إليكتروني صحيح لوجهة الخدمة الخريطة الإليكترونية، مثل: http://example.com/geoserver/wms)",
        contactingServerText: "جاري الاتصال بالخادم..."
    },

    "gxp.ScaleOverlay.prototype": { 
        zoomLevelText: "مستوى المنظور"
    }

});
