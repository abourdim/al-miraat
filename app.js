/* ============================================
   المرآة — The Mirror
   app.js
   ============================================ */

(function () {
  'use strict';

  /* ==============================
     TRANSLATIONS
     ============================== */
  var T = {
    ar: {
      app_title: 'المرآة',
      splash_book: 'من كتاب "سر تأخر العرب والمسلمين"',
      splash_author: 'الشيخ محمد الغزالي رحمه الله',
      home_title: 'المرآة',
      home_subtitle: 'انظر بصدق... أين أخطأنا؟',
      home_desc: 'هذا الكتاب مرآة صادقة يضعها الشيخ محمد الغزالي أمام الأمة الإسلامية. ليس لجلد الذات، بل لفهم ما حدث حتى نستطيع النهوض من جديد.',
      flowchart_title: 'دورة التراجع',
      flowchart_subtitle: 'كيف يغذي كل سبب الآخر في حلقة مفرغة — اضغط على أي عنصر للتفاصيل',
      flow_political: 'فساد سياسي',
      flow_political_detail: 'تحول الحكم من شورى إلى ملك وراثي',
      flow_intellectual: 'جمود فكري',
      flow_intellectual_detail: 'إغلاق باب الاجتهاد والتقليد الأعمى',
      flow_spiritual: 'فراغ روحي',
      flow_spiritual_detail: 'انفصال العبادة عن الحياة اليومية',
      flow_cycle: 'تكرار الحلقة',
      flow_cycle_detail: 'الفراغ الروحي يعيد إنتاج الفساد السياسي',
      flow_back: 'العودة للبداية',
      flow_political_full: 'تحول نظام الحكم من الشورى والمحاسبة إلى ملك وراثي جعل السلطة مركزة في يد عائلات حاكمة. هذا الفساد السياسي أنتج ظلما اجتماعيا وقمعا للمعارضة وإفسادا للعلماء الذين إما سكتوا خوفا أو تحولوا إلى أدوات للسلطة.',
      flow_intellectual_full: 'إغلاق باب الاجتهاد حوّل الفكر الإسلامي من حركة حية متجددة إلى تقليد جامد. العلماء صاروا يكررون أقوال السابقين دون تفكير نقدي. العلوم التجريبية والفلسفة أصبحت مشبوهة. الإبداع توقف بينما العالم يتغير.',
      flow_spiritual_full: 'انفصال العبادة عن الحياة اليومية جعل الدين مجرد طقوس شكلية. المسلم يصلي لكن لا يتقن عمله. يصوم لكن لا يعدل في تعامله. الروحانية الحقيقية التي تدفع للعمل والإتقان غابت وحلت محلها روحانية سلبية تنتظر المعجزات.',
      flow_cycle_full: 'الفراغ الروحي يجعل الناس تقبل الظلم وتستسلم للواقع. هذا القبول يشجع الفاسدين على مزيد من الفساد. والفساد بدوره يزيد الجمود الفكري والفراغ الروحي. وهكذا تستمر الحلقة المفرغة جيلا بعد جيل.',
      stat_pages: 'صفحة',
      stat_causes: 'أسباب رئيسية',
      stat_years: 'سنة من التاريخ',
      compare_title: 'مقارنة العصور',
      compare_subtitle: 'الخلافة الراشدة مقابل الحكم المعاصر',
      compare_rashidun: 'الخلافة الراشدة',
      compare_modern: 'الحكم المعاصر',
      compare_r1: 'الحاكم يُختار بالشورى ويُحاسب',
      compare_r2: 'بيت المال للجميع — الحاكم لا يأخذ أكثر من حاجته',
      compare_r3: 'حرية النقد — "لو أخطأت فقوموني"',
      compare_r4: 'العلماء مستقلون عن السلطة',
      compare_r5: 'المساواة بين الأعراق والطبقات',
      compare_m1: 'السلطة تُورَّث أو تُفرض بالقوة',
      compare_m2: 'ثروات الأمة تُنهب من القلة الحاكمة',
      compare_m3: 'قمع المعارضة والرأي الآخر',
      compare_m4: 'العلماء تابعون للسلطة أو مهمشون',
      compare_m5: 'تمييز عرقي وطبقي واسع الانتشار',
      timeline_title: 'المسار — خط زمني للتراجع',
      timeline_subtitle: 'رحلة عبر التاريخ: كيف وصلنا إلى هنا؟',
      ce: 'م',
      read_more: 'اقرأ المزيد',
      read_less: 'إخفاء',
      tl_1_title: 'وفاة النبي ﷺ — بداية الخلافة الراشدة',
      tl_1_detail: 'بعد وفاة النبي محمد ﷺ، تولى أبو بكر الصديق رضي الله عنه الخلافة. استمرت الخلافة الراشدة حوالي ثلاثين سنة، حكم فيها أربعة خلفاء بالشورى والعدل.',
      tl_1_detail2: 'الخلفاء الراشدون: أبو بكر الصديق، عمر بن الخطاب، عثمان بن عفان، علي بن أبي طالب — رضي الله عنهم أجمعين.',
      tl_2_title: 'التحول للملك الأموي الوراثي — الشرخ الأول',
      tl_2_detail: 'هنا يضع الغزالي إصبعه على الجرح الأول: تحول الحكم من الشورى إلى الملك الوراثي.',
      tl_2_detail2: 'لم يكن الأمر مجرد تغيير في شكل الحكم — بل كان تغييرا في الفلسفة كلها.',
      tl_3_title: 'العصر العباسي — ثروة لكن فساد متزايد',
      tl_3_detail: 'العباسيون أسقطوا الأمويين ووعدوا بالعودة لحكم أهل البيت. لكن ما حدث كان مختلفا: ازدهار علمي وثقافي هائل، لكن في الوقت نفسه نمو الترف والبذخ.',
      tl_3_detail2: 'يشير الغزالي إلى أن العلم ازدهر رغم الحكام وليس بسببهم.',
      tl_trans_title: 'حركة الترجمة — قيادة المعرفة العالمية',
      tl_trans_detail: 'في بيت الحكمة ببغداد، قاد المسلمون أعظم حركة ترجمة في التاريخ. نقلوا علوم اليونان والهند والفرس إلى العربية، ثم أضافوا إليها وطوروها.',
      tl_trans_detail2: 'هذا يثبت أن الإسلام الحقيقي يشجع العلم والانفتاح على الحضارات الأخرى.',
      tl_4_title: 'إغلاق باب الاجتهاد — بداية الجمود الفكري',
      tl_4_detail: 'من أخطر المنعطفات في تاريخ الأمة: قرر بعض العلماء أن "باب الاجتهاد أُغلق".',
      tl_4_detail2: 'الغزالي يرى هذا كارثة حقيقية: الإسلام جاء ليحرر العقل، فصار المسلمون يقيدونه باسم الإسلام.',
      tl_crusade_title: 'بداية الحروب الصليبية — ضغط خارجي على حضارة ضعيفة',
      tl_crusade_detail: 'استولى الصليبيون على القدس وأسسوا ممالك في قلب العالم الإسلامي. هذا الغزو لم يكن ليحدث لو كانت الأمة متحدة وقوية.',
      tl_crusade_detail2: 'الدرس: عندما تتحد الأمة تنتصر، وعندما تتفرق تُهزم.',
      tl_5_title: 'سقوط بغداد — الغزو الخارجي بسبب التعفن الداخلي',
      tl_5_detail: 'المغول دمروا بغداد وأحرقوا مكتباتها الشهيرة. لكن الغزالي يؤكد أن المغول لم يكونوا السبب — بل كانوا النتيجة.',
      tl_5_detail2: 'العدو الخارجي لا ينجح إلا عندما يكون الداخل ضعيفا.',
      tl_6_title: 'المركزية العثمانية — جمود في أنحاء الإمبراطورية',
      tl_6_detail: 'الدولة العثمانية وحّدت العالم الإسلامي سياسيا، لكنها فرضت نظاما مركزيا صارما.',
      tl_6_detail2: 'يرى الغزالي أن العثمانيين حافظوا على شكل الخلافة دون روحها.',
      tl_7_title: 'عصر الاستعمار — استغلال الضعف الداخلي',
      tl_7_detail: 'جاء الاستعمار الأوروبي ووجد أمة ضعيفة متفككة. لم يكن الاستعمار هو سبب التخلف — بل كان التخلف هو الذي مكّن الاستعمار.',
      tl_7_detail2: 'الغزالي لا يبرئ المستعمرين لكنه يرفض أن نلوم الآخرين فقط.',
      tl_8_title: 'الاستقلال لكن استمرار التراجع — أزمة هوية',
      tl_8_detail: 'حصلت الدول الإسلامية على استقلالها، لكن التراجع استمر لأن الاستقلال كان سياسيا فقط.',
      tl_8_detail2: 'الحل في فهم الإسلام الصحيح وتطبيقه بذكاء.',
      tl_caliphate_title: 'إلغاء الخلافة العثمانية — نهاية الحكم الموحد',
      tl_caliphate_detail: 'ألغى مصطفى كمال أتاتورك الخلافة العثمانية رسميا عام 1924. لأول مرة منذ وفاة النبي ﷺ، لم يعد للمسلمين رمز سياسي موحد.',
      tl_caliphate_detail2: 'تفتت العالم الإسلامي إلى دول قومية صغيرة رسم حدودها المستعمرون.',
      tl_palestine_title: 'فلسطين والأزمات المعاصرة — عواقب مستمرة',
      tl_palestine_detail: 'نكبة فلسطين عام 1948 كانت أوضح دليل على عجز الأمة المتفككة.',
      tl_palestine_detail2: 'ما زالت فلسطين حتى اليوم مرآة صادقة لحال الأمة.',
      causes_title: 'الأسباب — لماذا تراجعنا؟',
      causes_subtitle: 'ثمانية أسباب رئيسية حددها الشيخ الغزالي',
      cause_1_title: 'الفساد السياسي: من الشورى إلى الملك الوراثي',
      cause_1_detail: 'الإسلام جاء بمبدأ الشورى: الحاكم يُختار ويُحاسب.',
      cause_1_detail2: 'عندما يكون الحاكم فوق المحاسبة، يفسد كل شيء.',
      cause_2_title: 'عودة العصبية القبلية والتعصب العرقي',
      cause_2_detail: 'الإسلام ألغى الفوارق العرقية: لا فضل لعربي على عجمي إلا بالتقوى.',
      cause_2_detail2: 'هذا التعصب لم يمت حتى اليوم.',
      cause_3_title: 'التعصب المذهبي في المسائل الفرعية',
      cause_3_detail: 'بدلا من التركيز على أصول الإسلام الكبرى انشغل المسلمون بالخلافات الفرعية.',
      cause_3_detail2: 'الأمة تغرق وأنتم تتجادلون في تفاصيل لا تقدم ولا تؤخر.',
      cause_4_title: 'تزييف العلم: السلفية الجامدة تضيّق الإسلام',
      cause_4_detail: 'يميز الغزالي بين السلفية الحقيقية والسلفية المغشوشة.',
      cause_4_detail2: 'المعرفة صارت مغشوشة: أحاديث ضعيفة تُستخدم لتبرير الجمود.',
      cause_5_title: 'الجهل بسنن الله في الحضارات',
      cause_5_detail: 'لله سنن تحكم صعود الحضارات وسقوطها. من يعمل ويتعلم ينجح.',
      cause_5_detail2: 'الله ينصر من يأخذ بالأسباب.',
      cause_6_title: 'المؤامرات الخارجية تستغل الضعف الداخلي',
      cause_6_detail: 'نعم، هناك مؤامرات خارجية لكنها لا تنجح إلا لأننا ضعفاء من الداخل.',
      cause_6_detail2: 'الطبيب الحكيم لا يلوم الجراثيم فقط — بل يسأل: لماذا المناعة ضعيفة؟',
      cause_7_title: 'التخلي عن تعليم المرأة — خسارة حضارية',
      cause_7_detail: 'في صدر الإسلام، كانت المرأة عالمة ومعلمة وطبيبة وتاجرة.',
      cause_7_detail2: 'حرمان نصف المجتمع من التعليم يعني خسارة نصف الطاقة الحضارية.',
      cause_8_title: 'الفشل في بناء أنظمة اقتصادية ذاتية',
      cause_8_detail: 'الإسلام جاء بنظام اقتصادي متكامل لكن المسلمين تخلوا عن تطويره.',
      cause_8_detail2: 'الاستقلال الاقتصادي أساس الاستقلال السياسي.',
      solutions_title: 'الحلول — طريق النهضة',
      solutions_subtitle: 'الغزالي لم يكتفِ بالتشخيص — بل قدم الدواء أيضا',
      sol_1_title: 'الوحدة التي تتجاوز المذهب والعرق والجنسية',
      sol_1_detail: 'الأمة الإسلامية واحدة بغض النظر عن المذهب أو العرق أو الجنسية.',
      sol_1_detail2: 'وحدة على أساس المشترك الكبير.',
      sol_2_title: 'إحياء الحكم الإسلامي الأصيل',
      sol_2_detail: 'تطبيق مبادئ الشورى والمحاسبة والعدل.',
      sol_2_detail2: '"لو عثرت بغلة في العراق لخشيت أن يسألني الله عنها."',
      sol_3_title: 'دمج العلم الديني مع العلم الدنيوي',
      sol_3_detail: 'لا يوجد في الإسلام فصل بين الدين والعلم.',
      sol_3_detail2: 'العلم بدون أخلاق خطير، والأخلاق بدون علم عاجزة.',
      sol_4_title: 'نقد الذات قبل لوم الأعداء',
      sol_4_detail: 'كفى لوما للآخرين. الخطوة الأولى للعلاج هي الاعتراف بالمرض.',
      sol_4_detail2: 'هذا الكتاب هو تلك المرآة.',
      sol_5_title: 'تمكين المرأة ضرورة حضارية',
      sol_5_detail: 'تمكين المرأة ليس ترفا غربيا بل ضرورة إسلامية.',
      sol_5_detail2: 'أمة تهمل تعليم نصف أبنائها تسير بنصف طاقتها.',
      sol_6_title: 'الاستقلال الاقتصادي عبر مبادئ التمويل الإسلامي',
      sol_6_detail: 'الإسلام يقدم نظاما اقتصاديا بديلا يقوم على العدالة.',
      sol_6_detail2: 'الاستقلال الاقتصادي يمنح القوة السياسية.',
      ghazali_quote: 'المسلمون لن ينصرهم الله لمجرد أنهم يحملون بطاقة هوية إسلامية. النصر يأتي لمن يأخذ بأسبابه — علما وعملا وعدلا وإتقانا.',
      ghazali_cite: '— معنى كلام الشيخ محمد الغزالي، رحمه الله',
      lessons_title: 'دروس اليوم — التاريخ يعيد نفسه',
      lessons_subtitle: 'كيف تتجلى أسباب التراجع في واقعنا المعاصر',
      lesson_then: 'الأمس',
      lesson_now: 'اليوم',
      lesson_1_then: 'تحول الحكم من الشورى إلى الملك الوراثي',
      lesson_1_now: 'أنظمة استبدادية تتوارث السلطة وتقمع المعارضة وتنهب الثروات',
      lesson_2_then: 'إغلاق باب الاجتهاد والجمود الفكري',
      lesson_2_now: 'تعليم تلقيني يقتل الإبداع — معظم الجامعات الإسلامية خارج التصنيفات العالمية',
      lesson_3_then: 'التعصب المذهبي والقبلي مزّق الأمة',
      lesson_3_now: 'حروب أهلية طائفية في العراق وسوريا واليمن — والأمة عاجزة عن التوحد',
      lesson_4_then: 'الضعف الداخلي مكّن المغول والصليبيين',
      lesson_4_now: 'التدخلات الأجنبية تستغل انقسام المسلمين — فلسطين أوضح مثال',
      lesson_5_then: 'انفصال العبادة عن العمل والعلم',
      lesson_5_now: 'التدين الشكلي — مساجد ممتلئة لكن الفساد والظلم منتشران في كل مكان',
      quiz_title: 'اختبار التأمل',
      quiz_subtitle: 'هل تفهم لماذا تراجعت الأمة؟',
      quiz_retry: 'أعد الاختبار',
      quiz_submit: 'أظهر النتيجة',
      quiz_result_8: 'ممتاز! فهم عميق لأسباب التراجع وطريق النهضة.',
      quiz_result_6: 'جيد جدا! لديك فهم قوي. راجع الأسباب التي أخطأت فيها.',
      quiz_result_4: 'لا بأس. أنصحك بإعادة قراءة أقسام الأسباب والحلول.',
      quiz_result_0: 'تحتاج لمراجعة أعمق. ابدأ بقسم الأسباب ثم الحلول.',
      about_title: 'عن الكتاب والمؤلف',
      book_info_title: '📖 عن الكتاب',
      book_info_1: '<strong>الاسم:</strong> سر تأخر العرب والمسلمين',
      book_info_2: '<strong>المؤلف:</strong> الشيخ محمد الغزالي (1917-1996)',
      book_info_3: '<strong>الحجم:</strong> 133 صفحة — أكثف كتب الغزالي',
      book_info_4: '<strong>الموضوع:</strong> تتبع زمني لتراجع الأمة الإسلامية وتحليل الأسباب الداخلية للتخلف.',
      book_info_5: '<strong>الأسلوب:</strong> مباشر وجريء. الغزالي لا يجامل أحدا.',
      author_bio_title: '👤 عن المؤلف',
      author_bio_1: 'الشيخ محمد الغزالي (1917-1996) عالم ومفكر إسلامي مصري من أبرز علماء القرن العشرين.',
      author_bio_2: 'تخرج من الأزهر الشريف وألف أكثر من 60 كتابا في الفكر الإسلامي.',
      author_bio_3: 'من أشهر كتبه: "فقه السيرة"، "جدد حياتك"، "خلق المسلم".',
      author_bio_4: 'توفي رحمه الله عام 1996 في الرياض. ترك إرثا فكريا ضخما.',
      disclaimer_title: '⚠️ تنبيه مهم',
      disclaimer_1: 'لست عالما ولا فقيها. هذا جهد متواضع.',
      disclaimer_2: 'المحتوى مستمد من الكتاب ومن مصادر إسلامية موثوقة.',
      disclaimer_3: 'إن أصبت فمن الله، وإن أخطأت فمن نفسي والشيطان.',
      sources_title: '📚 المصادر',
      source_1: 'كتاب "سر تأخر العرب والمسلمين" — الشيخ محمد الغزالي',
      source_2: 'القرآن الكريم',
      source_3: 'مصادر تاريخية إسلامية متنوعة',
      tab_home: 'الرئيسية',
      tab_timeline: 'المسار',
      tab_causes: 'الأسباب',
      tab_solutions: 'الحلول',
      tab_lessons: 'دروس',
      tab_quiz: 'اختبار',
      tab_about: 'عن الكتاب',
      help_title: '🪞 المساعدة',
      help_1: 'مرحبا بك في تطبيق "المرآة" — ملخص تفاعلي لكتاب "سر تأخر العرب والمسلمين".',
      help_nav_title: 'التنقل:',
      help_nav_1: '🏠 الرئيسية: نظرة عامة ودورة التراجع',
      help_nav_2: '📜 المسار: خط زمني تفاعلي',
      help_nav_3: '🔍 الأسباب: تحليل أسباب التخلف الثمانية',
      help_nav_4: '💡 الحلول: رؤية الغزالي للنهوض',
      help_nav_5: '📖 عن الكتاب: معلومات عن الكتاب والمؤلف',
      help_nav_6: '📋 دروس اليوم: كيف يتجلى التاريخ في واقعنا',
      help_nav_7: '📝 اختبار التأمل: اختبر فهمك لأسباب التراجع',
      help_features_title: 'المميزات:',
      help_feature_1: 'ثلاث لغات: عربي، إنجليزي، فرنسي',
      help_feature_2: 'ثلاثة أنماط: مرآة، تاريخ، أمل',
      help_feature_3: 'اضغط على البطاقات لقراءة التفاصيل',
      help_feature_4: 'يمكن تفعيل/إيقاف الصوت',
      help_feature_5: 'شريط زمني تفاعلي أفقي في الأعلى',
      toast_lang: 'تم التبديل إلى العربية',
      toast_theme_mirror: 'نمط المرآة',
      toast_theme_history: 'نمط التاريخ',
      toast_theme_hope: 'نمط الأمل',
      toast_sound_on: 'الصوت مفعّل',
      toast_sound_off: 'الصوت مغلق',
      toast_copied: 'تم نسخ الرابط!',
      toast_shared: 'تم المشاركة!'
    },
    en: {
      app_title: 'The Mirror',
      splash_book: 'From the book "The Secret of Arab & Muslim Decline"',
      splash_author: 'Sheikh Mohammed al-Ghazali (may Allah have mercy on him)',
      home_title: 'The Mirror',
      home_subtitle: 'Look honestly... Where did we go wrong?',
      home_desc: 'This book is an honest mirror that Sheikh Mohammed al-Ghazali holds up before the Muslim Ummah. Not to beat ourselves up, but to understand what happened so we can rise again.',
      flowchart_title: 'The Cycle of Decline',
      flowchart_subtitle: 'How each cause feeds the next in a vicious circle — click any node for details',
      flow_political: 'Political Corruption',
      flow_political_detail: 'Governance shifted from consultation to hereditary monarchy',
      flow_intellectual: 'Intellectual Stagnation',
      flow_intellectual_detail: 'Closing the door of ijtihad and blind imitation',
      flow_spiritual: 'Spiritual Emptiness',
      flow_spiritual_detail: 'Worship disconnected from daily life',
      flow_cycle: 'The Cycle Repeats',
      flow_cycle_detail: 'Spiritual emptiness reproduces political corruption',
      flow_back: 'Back to the beginning',
      flow_political_full: 'The shift from consultative governance to hereditary monarchy concentrated power in ruling families. This political corruption produced social injustice, suppression of dissent, and the corruption of scholars who either stayed silent out of fear or became tools of power.',
      flow_intellectual_full: 'Closing the gate of ijtihad transformed Islamic thought from a living, renewing movement into rigid imitation. Scholars began repeating predecessors without critical thinking. Experimental sciences and philosophy became suspect. Creativity stopped while the world changed.',
      flow_spiritual_full: 'The disconnection of worship from daily life made religion mere ritual. The Muslim prays but does not perfect their work. The true spirituality that drives work and excellence vanished, replaced by passive spirituality waiting for miracles.',
      flow_cycle_full: 'Spiritual emptiness makes people accept injustice and submit to reality. This acceptance encourages the corrupt to become even more corrupt. And corruption in turn increases intellectual stagnation and spiritual emptiness. The vicious cycle continues generation after generation.',
      stat_pages: 'pages',
      stat_causes: 'main causes',
      stat_years: 'years of history',
      compare_title: 'Compare the Eras',
      compare_subtitle: 'Rightly-Guided Caliphate vs. Modern Muslim Governance',
      compare_rashidun: 'Rightly-Guided Caliphate',
      compare_modern: 'Modern Governance',
      compare_r1: 'The ruler is chosen by consultation and held accountable',
      compare_r2: 'Public treasury for all — the ruler takes no more than his need',
      compare_r3: 'Freedom of criticism — "If I err, correct me"',
      compare_r4: 'Scholars independent from political power',
      compare_r5: 'Equality among races and classes',
      compare_m1: 'Power inherited or imposed by force',
      compare_m2: 'National wealth plundered by ruling elites',
      compare_m3: 'Suppression of dissent and opposition',
      compare_m4: 'Scholars subordinate to power or marginalized',
      compare_m5: 'Widespread racial and class discrimination',
      timeline_title: 'The Path - A Timeline of Decline',
      timeline_subtitle: 'A journey through history: How did we get here?',
      ce: 'CE',
      read_more: 'Read more',
      read_less: 'Show less',
      tl_1_title: 'Death of the Prophet (peace be upon him) - The Rightly-Guided Caliphate begins',
      tl_1_detail: 'After the death of Prophet Muhammad, Abu Bakr al-Siddiq took over the caliphate. The Rightly-Guided Caliphate lasted about thirty years.',
      tl_1_detail2: 'The Rightly-Guided Caliphs: Abu Bakr, Umar, Uthman, Ali - may Allah be pleased with them all.',
      tl_2_title: 'Transition to Umayyad Hereditary Kingship - The First Crack',
      tl_2_detail: 'Governance shifted from consultation (shura) to hereditary monarchy.',
      tl_2_detail2: 'This first crack opened the door to everything that followed.',
      tl_3_title: 'The Abbasid Era - Wealth but Growing Corruption',
      tl_3_detail: 'Enormous scientific flourishing, but growing luxury and corruption in the ruling court.',
      tl_3_detail2: 'Knowledge flourished despite the rulers, not because of them.',
      tl_trans_title: 'The Translation Movement - Leading Global Knowledge',
      tl_trans_detail: 'At the House of Wisdom in Baghdad, Muslims led the greatest translation movement in history. They translated Greek, Indian, and Persian sciences into Arabic, then added to and developed them.',
      tl_trans_detail2: 'This proves that true Islam encourages science and openness to other civilizations.',
      tl_4_title: 'Closing the Gate of Ijtihad - Intellectual Stagnation Begins',
      tl_4_detail: 'Some scholars declared that the gate of ijtihad (independent reasoning) is closed.',
      tl_4_detail2: 'Islam came to free the mind, yet Muslims began chaining it in Islam\'s name.',
      tl_crusade_title: 'The Crusades Begin - External Pressure on a Weakened Civilization',
      tl_crusade_detail: 'Crusaders seized Jerusalem and established kingdoms in the heart of the Muslim world. This invasion would not have happened if the Ummah had been united and strong.',
      tl_crusade_detail2: 'The lesson: when the Ummah unites, it triumphs. When it fragments, it is defeated.',
      tl_5_title: 'Fall of Baghdad - External Invasion Enabled by Internal Rot',
      tl_5_detail: 'The Mongols destroyed Baghdad and burned its libraries. But they were the result, not the cause.',
      tl_5_detail2: 'The external enemy only succeeds when the interior is weak.',
      tl_6_title: 'Ottoman Centralization - Rigidity Across the Empire',
      tl_6_detail: 'The Ottoman Empire united the Muslim world politically but imposed a strict centralized system.',
      tl_6_detail2: 'The Ottomans preserved the form of the caliphate without its spirit.',
      tl_7_title: 'The Colonial Era - Exploitation of Internal Weakness',
      tl_7_detail: 'European colonialism found a weak, fragmented nation. Colonialism was not the cause of decline - decline enabled colonialism.',
      tl_7_detail2: 'We must ask: Why were we weak enough to be colonized?',
      tl_8_title: 'Independence but Continued Decline - Identity Crisis',
      tl_8_detail: 'Muslim countries gained independence, but the decline continued.',
      tl_8_detail2: 'The solution is understanding true Islam and applying it intelligently.',
      tl_caliphate_title: 'Abolition of the Ottoman Caliphate - End of Unified Governance',
      tl_caliphate_detail: 'Mustafa Kemal Ataturk officially abolished the Ottoman Caliphate in 1924. For the first time since the Prophet\'s death, Muslims had no unified political symbol.',
      tl_caliphate_detail2: 'The Muslim world fragmented into small nation-states whose borders were drawn by colonizers.',
      tl_palestine_title: 'Palestine and Modern Crises - Ongoing Consequences',
      tl_palestine_detail: 'The 1948 Palestinian Nakba was the clearest evidence of the fragmented Ummah\'s inability to act.',
      tl_palestine_detail2: 'Palestine remains today an honest mirror of the Ummah\'s condition.',
      causes_title: 'The Causes - Why Did We Decline?',
      causes_subtitle: 'Eight main causes identified by Sheikh al-Ghazali',
      cause_1_title: 'Political Corruption: From Consultation to Hereditary Monarchy',
      cause_1_detail: 'Islam brought the principle of shura: the ruler is chosen and held accountable.',
      cause_1_detail2: 'When the ruler is above accountability, everything corrupts.',
      cause_2_title: 'Return of Pre-Islamic Tribalism and Racial Prejudice',
      cause_2_detail: 'Islam abolished racial distinctions: no Arab has superiority over a non-Arab except through piety.',
      cause_2_detail2: 'This prejudice has not died even today.',
      cause_3_title: 'Sectarian Fanaticism Over Minor Matters',
      cause_3_detail: 'Instead of focusing on Islam\'s great principles, Muslims became obsessed with minor disagreements.',
      cause_3_detail2: 'The Ummah is drowning and you are arguing about details that make no difference.',
      cause_4_title: 'Adulterated Knowledge: Rigid Pseudo-Salafism Narrowing Islam',
      cause_4_detail: 'Al-Ghazali distinguishes between true Salafism and counterfeit Salafism.',
      cause_4_detail2: 'Knowledge became adulterated: weak hadiths used to justify stagnation.',
      cause_5_title: 'Ignorance of God\'s Laws Governing Civilizations',
      cause_5_detail: 'God has laws governing the rise and fall of civilizations.',
      cause_5_detail2: 'God helps those who take practical steps.',
      cause_6_title: 'External Conspiracies Exploiting Internal Weakness',
      cause_6_detail: 'There are real external conspiracies, but they only succeed because we are weak from within.',
      cause_6_detail2: 'A wise doctor asks: why is the immune system weak?',
      cause_7_title: 'Abandonment of Women\'s Education - A Civilizational Loss',
      cause_7_detail: 'In early Islam, women were scholars, teachers, doctors, and merchants.',
      cause_7_detail2: 'Depriving half of society of education means losing half the civilizational energy.',
      cause_8_title: 'Failure to Develop Indigenous Economic Systems',
      cause_8_detail: 'Islam brought a complete economic system, but Muslims abandoned its development.',
      cause_8_detail2: 'Economic independence is the foundation of political independence.',
      solutions_title: 'Solutions - The Path Forward',
      solutions_subtitle: 'Al-Ghazali did not just diagnose - he prescribed the cure too',
      sol_1_title: 'Unity Transcending Sect, Ethnicity, and Nationality',
      sol_1_detail: 'The Muslim Ummah is one regardless of school, ethnicity, or nationality.',
      sol_1_detail2: 'Unity based on the great common ground.',
      sol_2_title: 'Revival of Authentic Islamic Governance',
      sol_2_detail: 'Applying the principles of shura, accountability, and justice.',
      sol_2_detail2: '"If a mule stumbled in Iraq, I would fear God would ask me about it."',
      sol_3_title: 'Integration of Religious and Worldly Knowledge',
      sol_3_detail: 'There is no separation between religion and science in Islam.',
      sol_3_detail2: 'Science without ethics is dangerous, and ethics without science is helpless.',
      sol_4_title: 'Self-Critique Before Blaming External Enemies',
      sol_4_detail: 'Enough blaming others. The first step to treatment is acknowledging the disease.',
      sol_4_detail2: 'This book is that mirror.',
      sol_5_title: 'Women\'s Empowerment as a Civilizational Necessity',
      sol_5_detail: 'Women\'s empowerment is not Western luxury but an Islamic necessity.',
      sol_5_detail2: 'A nation that neglects educating half its children walks at half capacity.',
      sol_6_title: 'Economic Independence Through Islamic Finance Principles',
      sol_6_detail: 'Islam offers an alternative economic system based on justice.',
      sol_6_detail2: 'Economic independence grants political power.',
      ghazali_quote: 'Muslims will not be granted victory by God just because they carry an Islamic identity card. Victory comes to those who take practical steps - through knowledge, work, justice, and excellence.',
      ghazali_cite: '- Paraphrasing Sheikh Mohammed al-Ghazali, may Allah have mercy on him',
      lessons_title: 'Lessons for Today - History Repeats',
      lessons_subtitle: 'How each historical cause manifests in the modern era',
      lesson_then: 'Then',
      lesson_now: 'Now',
      lesson_1_then: 'Governance shifted from consultation to hereditary monarchy',
      lesson_1_now: 'Authoritarian regimes that inherit power, suppress dissent, and plunder wealth',
      lesson_2_then: 'Closing the gate of ijtihad and intellectual stagnation',
      lesson_2_now: 'Rote education killing creativity - most Muslim universities absent from global rankings',
      lesson_3_then: 'Sectarian and tribal fanaticism tore the Ummah apart',
      lesson_3_now: 'Sectarian civil wars in Iraq, Syria, Yemen - the Ummah unable to unite',
      lesson_4_then: 'Internal weakness enabled the Mongols and Crusaders',
      lesson_4_now: 'Foreign interventions exploit Muslim division - Palestine the clearest example',
      lesson_5_then: 'Worship disconnected from work and knowledge',
      lesson_5_now: 'Superficial religiosity - mosques full but corruption and injustice everywhere',
      quiz_title: 'Reflection Quiz',
      quiz_subtitle: 'Do you understand why the Ummah declined?',
      quiz_retry: 'Retake Quiz',
      quiz_submit: 'Show Results',
      quiz_result_8: 'Excellent! Deep understanding of the causes of decline and the path forward.',
      quiz_result_6: 'Very good! Strong understanding. Review the causes you missed.',
      quiz_result_4: 'Not bad. I recommend re-reading the Causes and Solutions sections.',
      quiz_result_0: 'You need deeper review. Start with the Causes section then Solutions.',
      about_title: 'About the Book & Author',
      book_info_title: '📖 About the Book',
      book_info_1: '<strong>Title:</strong> The Secret of Arab & Muslim Decline',
      book_info_2: '<strong>Author:</strong> Sheikh Mohammed al-Ghazali (1917-1996)',
      book_info_3: '<strong>Size:</strong> 133 pages - Al-Ghazali\'s most concentrated work',
      book_info_4: '<strong>Subject:</strong> Chronological tracing of the Muslim Ummah\'s decline and analysis of internal causes.',
      book_info_5: '<strong>Style:</strong> Direct and bold. Al-Ghazali flatters no one.',
      author_bio_title: '👤 About the Author',
      author_bio_1: 'Sheikh Mohammed al-Ghazali (1917-1996) was a prominent Egyptian Islamic scholar.',
      author_bio_2: 'He graduated from Al-Azhar University and authored more than 60 books.',
      author_bio_3: 'Famous books: "Fiqh al-Sirah", "Jaddid Hayatak", "Khuluq al-Muslim".',
      author_bio_4: 'He passed away in 1996 in Riyadh. He left an enormous intellectual legacy.',
      disclaimer_title: '⚠️ Important Notice',
      disclaimer_1: 'I am not a scholar or jurist. This is a humble effort.',
      disclaimer_2: 'Content derived from the book and trusted Islamic sources.',
      disclaimer_3: 'If I got it right, it is from Allah. If I made mistakes, they are from myself.',
      sources_title: '📚 Sources',
      source_1: '"The Secret of Arab & Muslim Decline" - Sheikh Mohammed al-Ghazali',
      source_2: 'The Holy Quran',
      source_3: 'Various Islamic historical sources',
      tab_home: 'Home',
      tab_timeline: 'Timeline',
      tab_causes: 'Causes',
      tab_solutions: 'Solutions',
      tab_lessons: 'Lessons',
      tab_quiz: 'Quiz',
      tab_about: 'Book',
      help_title: '🪞 Help',
      help_1: 'Welcome to "The Mirror" app - an interactive summary of the book.',
      help_nav_title: 'Navigation:',
      help_nav_1: '🏠 Home: Overview and the cycle of decline',
      help_nav_2: '📜 Timeline: Interactive timeline of decline events',
      help_nav_3: '🔍 Causes: Analysis of eight causes of decline',
      help_nav_4: '💡 Solutions: Al-Ghazali\'s vision for revival',
      help_nav_5: '📖 About: Information about the book and author',
      help_nav_6: '📋 Lessons: How history manifests today',
      help_nav_7: '📝 Quiz: Test your understanding',
      help_features_title: 'Features:',
      help_feature_1: 'Three languages: Arabic, English, French',
      help_feature_2: 'Three themes: Mirror, History, Hope',
      help_feature_3: 'Tap cards to read details',
      help_feature_4: 'Sound can be toggled on/off',
      help_feature_5: 'Interactive horizontal timeline bar at top',
      toast_lang: 'Switched to English',
      toast_theme_mirror: 'Mirror theme',
      toast_theme_history: 'History theme',
      toast_theme_hope: 'Hope theme',
      toast_sound_on: 'Sound enabled',
      toast_sound_off: 'Sound disabled',
      toast_copied: 'Link copied!',
      toast_shared: 'Shared!'
    },
    fr: {
      app_title: 'Le Miroir',
      splash_book: 'Du livre "Le Secret du Declin Arabe et Musulman"',
      splash_author: 'Cheikh Mohammed al-Ghazali',
      home_title: 'Le Miroir',
      home_subtitle: 'Regardons honnetement... Ou avons-nous failli ?',
      home_desc: 'Ce livre est un miroir honnete que Cheikh al-Ghazali place devant la Oumma musulmane.',
      flowchart_title: 'Le Cycle du Declin',
      flowchart_subtitle: 'Comment chaque cause alimente l\'autre — cliquez pour les details',
      flow_political: 'Corruption politique',
      flow_political_detail: 'Le pouvoir passe de la consultation a la monarchie',
      flow_intellectual: 'Stagnation intellectuelle',
      flow_intellectual_detail: 'Fermeture de la porte de l\'ijtihad',
      flow_spiritual: 'Vide spirituel',
      flow_spiritual_detail: 'La pratique religieuse deconnectee de la vie',
      flow_cycle: 'Le Cycle se Repete',
      flow_cycle_detail: 'Le vide spirituel reproduit la corruption',
      flow_back: 'Retour au debut',
      flow_political_full: 'La transformation du systeme de gouvernance de la consultation a la monarchie hereditaire a concentre le pouvoir dans les mains de familles dirigeantes.',
      flow_intellectual_full: 'La fermeture de la porte de l\'ijtihad a transforme la pensee islamique en une imitation rigide.',
      flow_spiritual_full: 'La deconnexion du culte de la vie quotidienne a reduit la religion a de simples rituels formels.',
      flow_cycle_full: 'Le vide spirituel fait accepter l\'injustice. Cette acceptation encourage les corrompus. La corruption augmente la stagnation. Le cycle vicieux continue.',
      stat_pages: 'pages',
      stat_causes: 'causes principales',
      stat_years: 'ans d\'histoire',
      compare_title: 'Comparer les Epoques',
      compare_subtitle: 'Califat bien guide vs. Gouvernance musulmane moderne',
      compare_rashidun: 'Califat bien guide',
      compare_modern: 'Gouvernance moderne',
      compare_r1: 'Le dirigeant est choisi par consultation',
      compare_r2: 'Tresor public pour tous',
      compare_r3: 'Liberte de critique',
      compare_r4: 'Savants independants du pouvoir',
      compare_r5: 'Egalite entre races et classes',
      compare_m1: 'Pouvoir herite ou impose par la force',
      compare_m2: 'Richesses nationales pillees par l\'elite',
      compare_m3: 'Suppression de la dissidence',
      compare_m4: 'Savants soumis au pouvoir ou marginalises',
      compare_m5: 'Discrimination raciale et sociale',
      timeline_title: 'Le Parcours - Chronologie du Declin',
      timeline_subtitle: 'Un voyage a travers l\'histoire',
      ce: 'ap. J.-C.',
      read_more: 'Lire la suite',
      read_less: 'Reduire',
      tl_1_title: 'Mort du Prophete - Debut du Califat bien guide',
      tl_1_detail: 'Le Califat bien guide dura environ trente ans.',
      tl_1_detail2: 'Les Califes bien guides: Abu Bakr, Umar, Uthman, Ali.',
      tl_2_title: 'Transition vers la monarchie omeyyade',
      tl_2_detail: 'La gouvernance est passee de la consultation a la monarchie hereditaire.',
      tl_2_detail2: 'Cette premiere fissure ouvrit la porte a tout ce qui suivit.',
      tl_3_title: 'L\'ere abbasside - Richesse mais corruption',
      tl_3_detail: 'Enorme epanouissement scientifique, mais corruption croissante.',
      tl_3_detail2: 'Le savoir a fleuri malgre les dirigeants, pas grace a eux.',
      tl_trans_title: 'Le Mouvement de Traduction - Direction du Savoir Mondial',
      tl_trans_detail: 'A la Maison de la Sagesse de Bagdad, les musulmans ont dirige le plus grand mouvement de traduction de l\'histoire.',
      tl_trans_detail2: 'L\'Islam veritable encourage la science et l\'ouverture aux autres civilisations.',
      tl_4_title: 'Fermeture de la porte de l\'ijtihad',
      tl_4_detail: 'Certains savants declarerent que la porte de l\'ijtihad est fermee.',
      tl_4_detail2: 'L\'Islam est venu liberer l\'esprit.',
      tl_crusade_title: 'Debut des Croisades - Pression externe sur une civilisation affaiblie',
      tl_crusade_detail: 'Les Croises se sont empares de Jerusalem. Cette invasion n\'aurait pas eu lieu si la Oumma avait ete unie.',
      tl_crusade_detail2: 'Quand la Oumma s\'unit, elle triomphe.',
      tl_5_title: 'Chute de Bagdad - Invasion favorisee par la decadence',
      tl_5_detail: 'Les Mongols detruisirent Bagdad. Mais ils etaient le resultat, pas la cause.',
      tl_5_detail2: 'L\'ennemi exterieur ne reussit que lorsque l\'interieur est faible.',
      tl_6_title: 'Centralisation ottomane',
      tl_6_detail: 'L\'Empire ottoman a impose un systeme centralise strict.',
      tl_6_detail2: 'Les Ottomans ont preserve la forme du califat sans son esprit.',
      tl_7_title: 'L\'ere coloniale',
      tl_7_detail: 'Le colonialisme europeen a trouve une nation faible.',
      tl_7_detail2: 'C\'est le declin qui a permis le colonialisme.',
      tl_8_title: 'Independance mais declin continu',
      tl_8_detail: 'Les pays musulmans ont obtenu leur independance, mais le declin a continue.',
      tl_8_detail2: 'Comprendre le vrai Islam et l\'appliquer intelligemment.',
      tl_caliphate_title: 'Abolition du Califat Ottoman - Fin de la gouvernance unifiee',
      tl_caliphate_detail: 'Ataturk a officiellement aboli le califat en 1924.',
      tl_caliphate_detail2: 'Le monde musulman s\'est fragmente en petits Etats-nations.',
      tl_palestine_title: 'Palestine et crises modernes - Consequences persistantes',
      tl_palestine_detail: 'La Nakba de 1948 fut la preuve la plus claire de l\'incapacite de la Oumma fragmentee.',
      tl_palestine_detail2: 'La Palestine reste un miroir fidele de l\'etat de la Oumma.',
      causes_title: 'Les Causes - Pourquoi avons-nous decline ?',
      causes_subtitle: 'Huit causes principales identifiees par al-Ghazali',
      cause_1_title: 'Corruption politique',
      cause_1_detail: 'L\'Islam a apporte le principe de la choura.',
      cause_1_detail2: 'Quand le dirigeant est au-dessus des comptes, tout se corrompt.',
      cause_2_title: 'Retour du tribalisme',
      cause_2_detail: 'L\'Islam a aboli les distinctions raciales.',
      cause_2_detail2: 'Ce prejuge n\'est pas mort meme aujourd\'hui.',
      cause_3_title: 'Fanatisme sectaire',
      cause_3_detail: 'Les musulmans se sont obsedes par des desaccords mineurs.',
      cause_3_detail2: 'La Oumma se noie et vous disputez des details.',
      cause_4_title: 'Savoir falsifie',
      cause_4_detail: 'Al-Ghazali distingue entre vrai et faux salafisme.',
      cause_4_detail2: 'Des hadiths faibles utilises pour justifier la stagnation.',
      cause_5_title: 'Ignorance des lois divines',
      cause_5_detail: 'Dieu a des lois regissant les civilisations.',
      cause_5_detail2: 'Dieu aide ceux qui prennent les moyens.',
      cause_6_title: 'Conspirations exterieures',
      cause_6_detail: 'Elles ne reussissent que parce que nous sommes faibles.',
      cause_6_detail2: 'Pourquoi le systeme immunitaire est-il faible ?',
      cause_7_title: 'Abandon de l\'education des femmes',
      cause_7_detail: 'Dans l\'Islam originel, les femmes etaient savantes et medecins.',
      cause_7_detail2: 'Priver la moitie de la societe d\'education est une perte civilisationnelle.',
      cause_8_title: 'Echec du developpement economique autonome',
      cause_8_detail: 'L\'Islam a apporte un systeme economique complet.',
      cause_8_detail2: 'L\'independance economique est la base de l\'independance politique.',
      solutions_title: 'Solutions - Le Chemin du Renouveau',
      solutions_subtitle: 'Al-Ghazali a aussi prescrit le remede',
      sol_1_title: 'Unite transcendant la secte et l\'ethnie',
      sol_1_detail: 'La Oumma musulmane est une.',
      sol_1_detail2: 'Unite basee sur le terrain commun.',
      sol_2_title: 'Renouveau de la gouvernance islamique',
      sol_2_detail: 'Appliquer les principes de choura et justice.',
      sol_2_detail2: 'Aucun dirigeant au-dessus de la reddition de comptes.',
      sol_3_title: 'Integration du savoir religieux et profane',
      sol_3_detail: 'Pas de separation entre religion et science en Islam.',
      sol_3_detail2: 'La science sans ethique est dangereuse.',
      sol_4_title: 'Autocritique avant de blamer les autres',
      sol_4_detail: 'La premiere etape est de reconnaitre la maladie.',
      sol_4_detail2: 'Ce livre est ce miroir.',
      sol_5_title: 'Autonomisation des femmes - necessite civilisationnelle',
      sol_5_detail: 'L\'autonomisation des femmes est une necessite islamique.',
      sol_5_detail2: 'Une nation qui neglige la moitie de ses enfants marche a moitie capacite.',
      sol_6_title: 'Independance economique par la finance islamique',
      sol_6_detail: 'L\'Islam offre un systeme economique alternatif base sur la justice.',
      sol_6_detail2: 'L\'independance economique donne le pouvoir politique.',
      ghazali_quote: 'Les musulmans ne seront pas aides par Dieu juste parce qu\'ils portent une carte d\'identite musulmane.',
      ghazali_cite: '- Paraphrase de Cheikh al-Ghazali',
      lessons_title: 'Lecons d\'Aujourd\'hui - L\'Histoire se Repete',
      lessons_subtitle: 'Comment chaque cause historique se manifeste a l\'epoque moderne',
      lesson_then: 'Hier',
      lesson_now: 'Aujourd\'hui',
      lesson_1_then: 'La gouvernance est passee de la consultation a la monarchie',
      lesson_1_now: 'Regimes autoritaires qui heritent du pouvoir et pillent les richesses',
      lesson_2_then: 'Fermeture de l\'ijtihad et stagnation intellectuelle',
      lesson_2_now: 'Education par memorisation tuant la creativite',
      lesson_3_then: 'Fanatisme sectaire et tribal a dechire la Oumma',
      lesson_3_now: 'Guerres civiles sectaires en Irak, Syrie, Yemen',
      lesson_4_then: 'La faiblesse interne a permis les Mongols et Croises',
      lesson_4_now: 'Interventions etrangeres exploitant la division - Palestine en exemple',
      lesson_5_then: 'Le culte deconnecte du travail et du savoir',
      lesson_5_now: 'Religiosite superficielle - mosquees pleines mais corruption partout',
      quiz_title: 'Quiz de Reflexion',
      quiz_subtitle: 'Comprenez-vous pourquoi la Oumma a decline ?',
      quiz_retry: 'Recommencer',
      quiz_submit: 'Voir les Resultats',
      quiz_result_8: 'Excellent ! Comprehension profonde des causes du declin.',
      quiz_result_6: 'Tres bien ! Revoyez les causes que vous avez manquees.',
      quiz_result_4: 'Pas mal. Relisez les sections Causes et Solutions.',
      quiz_result_0: 'Vous avez besoin d\'une revision plus approfondie.',
      about_title: 'A propos du Livre et de l\'Auteur',
      book_info_title: '📖 A propos du Livre',
      book_info_1: '<strong>Titre :</strong> Le Secret du Declin Arabe et Musulman',
      book_info_2: '<strong>Auteur :</strong> Cheikh Mohammed al-Ghazali (1917-1996)',
      book_info_3: '<strong>Taille :</strong> 133 pages',
      book_info_4: '<strong>Sujet :</strong> Chronologie du declin de la Oumma musulmane.',
      book_info_5: '<strong>Style :</strong> Direct et audacieux.',
      author_bio_title: '👤 A propos de l\'Auteur',
      author_bio_1: 'Cheikh Mohammed al-Ghazali (1917-1996) etait un eminent savant islamique egyptien.',
      author_bio_2: 'Il a ecrit plus de 60 livres sur la pensee islamique.',
      author_bio_3: 'Livres celebres: "Fiqh al-Sirah", "Jaddid Hayatak", "Khuluq al-Muslim".',
      author_bio_4: 'Il est decede en 1996 a Riyad.',
      disclaimer_title: '⚠️ Avis Important',
      disclaimer_1: 'Je ne suis ni savant ni juriste. Ceci est un humble effort.',
      disclaimer_2: 'Le contenu est tire du livre et de sources islamiques fiables.',
      disclaimer_3: 'Si j\'ai vise juste, c\'est grace a Allah. Sinon, c\'est de moi.',
      sources_title: '📚 Sources',
      source_1: '"Le Secret du Declin Arabe et Musulman" - al-Ghazali',
      source_2: 'Le Saint Coran',
      source_3: 'Diverses sources historiques islamiques',
      tab_home: 'Accueil',
      tab_timeline: 'Chronologie',
      tab_causes: 'Causes',
      tab_solutions: 'Solutions',
      tab_lessons: 'Lecons',
      tab_quiz: 'Quiz',
      tab_about: 'Livre',
      help_title: '🪞 Aide',
      help_1: 'Bienvenue dans l\'application "Le Miroir".',
      help_nav_title: 'Navigation :',
      help_nav_1: '🏠 Accueil: Vue d\'ensemble',
      help_nav_2: '📜 Chronologie: Evenements du declin',
      help_nav_3: '🔍 Causes: Huit causes du declin',
      help_nav_4: '💡 Solutions: Vision pour le renouveau',
      help_nav_5: '📖 A propos: Livre et auteur',
      help_nav_6: '📋 Lecons: Comment l\'histoire se manifeste aujourd\'hui',
      help_nav_7: '📝 Quiz: Testez votre comprehension',
      help_features_title: 'Fonctionnalites :',
      help_feature_1: 'Trois langues: Arabe, Anglais, Francais',
      help_feature_2: 'Trois themes: Miroir, Histoire, Espoir',
      help_feature_3: 'Appuyez sur les cartes pour les details',
      help_feature_4: 'Le son peut etre active/desactive',
      help_feature_5: 'Barre chronologique interactive en haut',
      toast_lang: 'Passe au Francais',
      toast_theme_mirror: 'Theme Miroir',
      toast_theme_history: 'Theme Histoire',
      toast_theme_hope: 'Theme Espoir',
      toast_sound_on: 'Son active',
      toast_sound_off: 'Son desactive',
      toast_copied: 'Lien copie !',
      toast_shared: 'Partage !'
    }
  };

  /* ==============================
     QUIZ DATA
     ============================== */
  var QUIZ = {
    ar: [
      { q: 'ما هو السبب الأول للتراجع حسب الغزالي؟', options: ['الاستعمار الأوروبي', 'تحول الحكم من الشورى إلى الملك الوراثي', 'ضعف الجيوش الإسلامية', 'الفقر الاقتصادي'], answer: 1 },
      { q: 'لماذا يرى الغزالي أن سقوط بغداد كان نتيجة وليس سببا؟', options: ['لأن المغول كانوا ضعفاء', 'لأن الأمة كانت متفككة من الداخل أصلا', 'لأن بغداد لم تكن مهمة', 'لأن العرب هاجروا منها'], answer: 1 },
      { q: 'ما المقصود بإغلاق باب الاجتهاد؟', options: ['إغلاق المساجد', 'منع التفكير المستقل في فهم النصوص الدينية', 'إغلاق المدارس', 'منع السفر'], answer: 1 },
      { q: 'كيف يرى الغزالي علاقة الإسلام بالعلم؟', options: ['الإسلام يرفض العلوم الطبيعية', 'الإسلام يأمر بطلب كل أنواع العلم', 'العلم الديني فقط مطلوب', 'العلم اختياري في الإسلام'], answer: 1 },
      { q: 'ما موقف الغزالي من نظريات المؤامرة؟', options: ['يرفضها كليا', 'يقبلها كتفسير وحيد', 'يقر بوجود مؤامرات لكنها تنجح بسبب ضعفنا الداخلي', 'لا يتحدث عنها'], answer: 2 },
      { q: 'ما هو الحل الأول الذي يقترحه الغزالي؟', options: ['الحرب على الغرب', 'الوحدة التي تتجاوز المذهب والعرق', 'الانعزال عن العالم', 'العودة لنظام الخلافة حرفيا'], answer: 1 },
      { q: 'لماذا يعتبر تهميش المرأة سببا في تراجع الأمة؟', options: ['لأنه يخالف تعاليم الإسلام ويحرم الأمة من نصف طاقتها', 'لأن المرأة أذكى من الرجل', 'لأن الغرب يريد ذلك', 'ليس سببا حقيقيا'], answer: 0 },
      { q: 'ما معنى عنوان الكتاب "سر تأخر العرب والمسلمين"؟', options: ['هناك سر خفي لا يعرفه أحد', 'الأسباب واضحة لكننا نرفض النظر في المرآة', 'السر هو الاستعمار', 'لا يوجد سر — مجرد حظ سيء'], answer: 1 }
    ],
    en: [
      { q: 'What is the primary cause of decline according to al-Ghazali?', options: ['European colonialism', 'Shift from consultation to hereditary monarchy', 'Weak armies', 'Economic poverty'], answer: 1 },
      { q: 'Why does al-Ghazali see the fall of Baghdad as a result, not a cause?', options: ['The Mongols were weak', 'The Ummah was already fragmented from within', 'Baghdad was not important', 'Arabs had emigrated'], answer: 1 },
      { q: 'What does "closing the gate of ijtihad" mean?', options: ['Closing mosques', 'Prohibiting independent thinking in understanding religious texts', 'Closing schools', 'Banning travel'], answer: 1 },
      { q: 'How does al-Ghazali view Islam\'s relationship with science?', options: ['Islam rejects natural sciences', 'Islam commands seeking all types of knowledge', 'Only religious knowledge matters', 'Science is optional'], answer: 1 },
      { q: 'What is al-Ghazali\'s position on conspiracy theories?', options: ['He fully rejects them', 'He accepts them as the sole explanation', 'He acknowledges conspiracies but says they succeed due to internal weakness', 'He does not discuss them'], answer: 2 },
      { q: 'What is al-Ghazali\'s first proposed solution?', options: ['War against the West', 'Unity transcending sect and ethnicity', 'Isolation from the world', 'Literal return to the caliphate system'], answer: 1 },
      { q: 'Why is marginalizing women considered a cause of decline?', options: ['It contradicts Islamic teachings and deprives the Ummah of half its energy', 'Women are smarter', 'The West demands it', 'It is not a real cause'], answer: 0 },
      { q: 'What does the book title "The Secret of Arab & Muslim Decline" mean?', options: ['There is a hidden secret no one knows', 'The causes are obvious but we refuse to look in the mirror', 'The secret is colonialism', 'No secret — just bad luck'], answer: 1 }
    ],
    fr: [
      { q: 'Quelle est la cause premiere du declin selon al-Ghazali ?', options: ['Le colonialisme europeen', 'Le passage de la consultation a la monarchie hereditaire', 'Des armees faibles', 'La pauvrete economique'], answer: 1 },
      { q: 'Pourquoi al-Ghazali voit la chute de Bagdad comme un resultat ?', options: ['Les Mongols etaient faibles', 'La Oumma etait deja fragmentee', 'Bagdad n\'etait pas importante', 'Les Arabes avaient emigre'], answer: 1 },
      { q: 'Que signifie la fermeture de la porte de l\'ijtihad ?', options: ['Fermer les mosquees', 'Interdire la pensee independante', 'Fermer les ecoles', 'Interdire les voyages'], answer: 1 },
      { q: 'Comment al-Ghazali voit la relation Islam-science ?', options: ['L\'Islam rejette les sciences', 'L\'Islam ordonne de chercher tout savoir', 'Seul le savoir religieux compte', 'La science est optionnelle'], answer: 1 },
      { q: 'Position d\'al-Ghazali sur les theories du complot ?', options: ['Il les rejette totalement', 'Il les accepte comme seule explication', 'Il reconnait les complots mais dit qu\'ils reussissent par notre faiblesse', 'Il n\'en parle pas'], answer: 2 },
      { q: 'Premiere solution proposee par al-Ghazali ?', options: ['Guerre contre l\'Occident', 'Unite depassant secte et ethnie', 'Isolation du monde', 'Retour litteral au califat'], answer: 1 },
      { q: 'Pourquoi marginaliser les femmes est une cause du declin ?', options: ['Cela contredit l\'Islam et prive la Oumma de la moitie de son energie', 'Les femmes sont plus intelligentes', 'L\'Occident le demande', 'Ce n\'est pas une vraie cause'], answer: 0 },
      { q: 'Que signifie le titre du livre ?', options: ['Il y a un secret cache', 'Les causes sont evidentes mais nous refusons le miroir', 'Le secret est le colonialisme', 'Pas de secret — juste la malchance'], answer: 1 }
    ]
  };

  /* ==============================
     STATE
     ============================== */
  var currentLang = localStorage.getItem('miraat_lang') || 'ar';
  var currentTheme = localStorage.getItem('miraat_theme') || 'mirror';
  var soundEnabled = localStorage.getItem('miraat_sound') !== 'false';
  var currentTab = 'about';

  /* ==============================
     AUDIO CONTEXT (lazy)
     ============================== */
  var audioCtx = null;

  function getAudioCtx() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
  }

  function playSound(type) {
    if (!soundEnabled) return;
    try {
      var ctx = getAudioCtx();
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'tab') {
        osc.frequency.value = 600;
        gain.gain.value = 0.08;
        osc.type = 'sine';
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } else if (type === 'click') {
        osc.frequency.value = 800;
        gain.gain.value = 0.06;
        osc.type = 'sine';
        osc.start();
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.stop(ctx.currentTime + 0.1);
      } else if (type === 'theme') {
        osc.frequency.value = 440;
        gain.gain.value = 0.07;
        osc.type = 'triangle';
        osc.start();
        osc.frequency.linearRampToValueAtTime(660, ctx.currentTime + 0.15);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
        osc.stop(ctx.currentTime + 0.2);
      }
    } catch (e) {
      // Audio not available
    }
  }

  /* ==============================
     TOAST
     ============================== */
  function showToast(msg) {
    var container = document.getElementById('toastContainer');
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(function () {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 3200);
  }

  /* ==============================
     LANGUAGE
     ============================== */
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('miraat_lang', lang);

    var html = document.documentElement;
    if (lang === 'ar') {
      html.setAttribute('lang', 'ar');
      html.setAttribute('dir', 'rtl');
    } else {
      html.setAttribute('lang', lang);
      html.setAttribute('dir', 'ltr');
    }

    var els = document.querySelectorAll('[data-i18n]');
    var translations = T[lang];
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      if (translations[key]) {
        if (translations[key].indexOf('<strong>') !== -1 || translations[key].indexOf('<em>') !== -1) {
          els[i].innerHTML = translations[key];
        } else {
          els[i].textContent = translations[key];
        }
      }
    }

    var expandBtns = document.querySelectorAll('.expand-btn');
    for (var j = 0; j < expandBtns.length; j++) {
      var card = expandBtns[j].closest('.expandable-card');
      if (card && card.classList.contains('expanded')) {
        expandBtns[j].textContent = translations.read_less || 'Show less';
      } else {
        expandBtns[j].textContent = translations.read_more || 'Read more';
      }
    }

    var langBtns = document.querySelectorAll('.lang-btn');
    for (var k = 0; k < langBtns.length; k++) {
      langBtns[k].classList.toggle('active', langBtns[k].getAttribute('data-lang') === lang);
    }

    // Re-render quiz if on quiz tab
    if (currentTab === 'quiz') {
      renderQuiz();
    }
  }

  /* ==============================
     THEME
     ============================== */
  function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('miraat_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    var themeBtns = document.querySelectorAll('.theme-btn');
    for (var i = 0; i < themeBtns.length; i++) {
      themeBtns[i].classList.toggle('active', themeBtns[i].getAttribute('data-theme') === theme);
    }
  }

  /* ==============================
     TABS
     ============================== */
  function switchTab(tab) {
    currentTab = tab;

    var panels = document.querySelectorAll('.tab-panel');
    for (var i = 0; i < panels.length; i++) {
      panels[i].classList.remove('active');
    }
    var target = document.getElementById('panel-' + tab);
    if (target) target.classList.add('active');

    var btns = document.querySelectorAll('.tab-btn');
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.toggle('active', btns[j].getAttribute('data-tab') === tab);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Re-run scroll reveal for newly visible content
    setTimeout(checkScrollReveal, 100);

    // Render quiz if switching to quiz tab
    if (tab === 'quiz') {
      renderQuiz();
    }
  }

  /* ==============================
     EXPANDABLE CARDS
     ============================== */
  function setupExpandableCards() {
    var cards = document.querySelectorAll('.expandable-card');
    for (var i = 0; i < cards.length; i++) {
      (function (card) {
        var btn = card.querySelector('.expand-btn');
        if (!btn) return;
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          var isExpanded = card.classList.contains('expanded');
          card.classList.toggle('expanded');

          var translations = T[currentLang];
          if (isExpanded) {
            btn.textContent = translations.read_more || 'Read more';
          } else {
            btn.textContent = translations.read_less || 'Show less';
          }

          var soundType = card.getAttribute('data-sound');
          if (soundType) playSound(soundType);
        });
      })(cards[i]);
    }
  }

  /* ==============================
     SHARE BUTTONS
     ============================== */
  function setupShareButtons() {
    var shareBtns = document.querySelectorAll('.share-btn');
    for (var i = 0; i < shareBtns.length; i++) {
      shareBtns[i].addEventListener('click', function (e) {
        e.stopPropagation();
        var shareKey = this.getAttribute('data-share');
        var card = this.closest('.expandable-card') || this.closest('.cause-card');
        var title = '';
        if (card) {
          var titleEl = card.querySelector('.timeline-event-title, .cause-title, .solution-title');
          if (titleEl) title = titleEl.textContent;
        }

        var shareText = title + ' — ' + T[currentLang].app_title;

        if (navigator.share) {
          navigator.share({
            title: T[currentLang].app_title,
            text: shareText,
            url: window.location.href
          }).catch(function () {});
          showToast(T[currentLang].toast_shared || 'Shared!');
        } else {
          // Fallback: copy to clipboard
          var textArea = document.createElement('textarea');
          textArea.value = shareText + '\n' + window.location.href;
          textArea.style.position = 'fixed';
          textArea.style.left = '-9999px';
          document.body.appendChild(textArea);
          textArea.select();
          try { document.execCommand('copy'); } catch (err) {}
          document.body.removeChild(textArea);
          showToast(T[currentLang].toast_copied || 'Link copied!');
        }

        playSound('click');
      });
    }
  }

  /* ==============================
     SCROLL REVEAL (IntersectionObserver)
     ============================== */
  var revealObserver = null;

  function setupScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: show everything
      var els = document.querySelectorAll('.scroll-reveal');
      for (var i = 0; i < els.length; i++) {
        els[i].classList.add('revealed');
      }
      return;
    }

    revealObserver = new IntersectionObserver(function (entries) {
      for (var e = 0; e < entries.length; e++) {
        if (entries[e].isIntersecting) {
          entries[e].target.classList.add('revealed');
        }
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    var elements = document.querySelectorAll('.scroll-reveal');
    for (var i = 0; i < elements.length; i++) {
      revealObserver.observe(elements[i]);
    }
  }

  function checkScrollReveal() {
    if (!revealObserver) return;
    var elements = document.querySelectorAll('.scroll-reveal:not(.revealed)');
    for (var i = 0; i < elements.length; i++) {
      revealObserver.observe(elements[i]);
    }
  }

  /* ==============================
     TIMELINE SCROLL BAR
     ============================== */
  function setupTimelineScrollBar() {
    var dots = document.querySelectorAll('.timeline-dot');
    for (var i = 0; i < dots.length; i++) {
      dots[i].addEventListener('click', function () {
        var eventIndex = parseInt(this.getAttribute('data-event'), 10);
        switchTab('timeline');
        playSound('click');

        setTimeout(function () {
          var events = document.querySelectorAll('.timeline-event');
          if (events[eventIndex]) {
            events[eventIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
            events[eventIndex].classList.add('revealed');
            // Flash effect
            events[eventIndex].style.transition = 'box-shadow 0.3s';
            events[eventIndex].style.boxShadow = '0 0 20px rgba(255, 143, 0, 0.4)';
            setTimeout(function () {
              events[eventIndex].style.boxShadow = '';
            }, 1500);
          }
        }, 300);
      });
    }
  }

  /* ==============================
     INTERACTIVE FLOWCHART
     ============================== */
  function setupFlowchart() {
    var flowNodes = document.querySelectorAll('.flow-clickable');
    var modal = document.getElementById('flowDetailModal');
    var closeBtn = document.getElementById('flowDetailClose');
    var iconEl = document.getElementById('flowDetailIcon');
    var titleEl = document.getElementById('flowDetailTitle');
    var textEl = document.getElementById('flowDetailText');

    for (var i = 0; i < flowNodes.length; i++) {
      flowNodes[i].addEventListener('click', function () {
        var icon = this.querySelector('.flow-icon').textContent;
        var label = this.querySelector('.flow-label').textContent;
        var detailKey = this.getAttribute('data-flow-detail');
        var detailText = T[currentLang][detailKey] || this.querySelector('.flow-expanded-detail').textContent;

        iconEl.textContent = icon;
        titleEl.textContent = label;
        textEl.textContent = detailText;
        modal.classList.add('visible');
        playSound('click');
      });
    }

    closeBtn.addEventListener('click', function () {
      modal.classList.remove('visible');
    });

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('visible');
      }
    });
  }

  /* ==============================
     QUIZ
     ============================== */
  var quizAnswered = {};

  function renderQuiz() {
    var container = document.getElementById('quizContainer');
    var results = document.getElementById('quizResults');
    var questions = QUIZ[currentLang] || QUIZ.en;

    results.classList.add('hidden');
    container.innerHTML = '';
    quizAnswered = {};

    for (var i = 0; i < questions.length; i++) {
      var qDiv = document.createElement('div');
      qDiv.className = 'quiz-question scroll-reveal revealed';

      var numP = document.createElement('div');
      numP.className = 'quiz-q-num';
      numP.textContent = (i + 1) + ' / ' + questions.length;
      qDiv.appendChild(numP);

      var qText = document.createElement('div');
      qText.className = 'quiz-q-text';
      qText.textContent = questions[i].q;
      qDiv.appendChild(qText);

      var optionsDiv = document.createElement('div');
      optionsDiv.className = 'quiz-options';

      for (var j = 0; j < questions[i].options.length; j++) {
        var optBtn = document.createElement('button');
        optBtn.className = 'quiz-option';
        optBtn.textContent = questions[i].options[j];
        optBtn.setAttribute('data-q', i);
        optBtn.setAttribute('data-opt', j);
        optBtn.addEventListener('click', function () {
          var qi = parseInt(this.getAttribute('data-q'), 10);
          var oi = parseInt(this.getAttribute('data-opt'), 10);
          // Deselect siblings
          var siblings = this.parentNode.querySelectorAll('.quiz-option');
          for (var s = 0; s < siblings.length; s++) {
            siblings[s].classList.remove('selected');
          }
          this.classList.add('selected');
          quizAnswered[qi] = oi;
          playSound('click');
        });
        optionsDiv.appendChild(optBtn);
      }

      qDiv.appendChild(optionsDiv);
      container.appendChild(qDiv);
    }

    // Submit button
    var submitBtn = document.createElement('button');
    submitBtn.className = 'quiz-submit-btn';
    submitBtn.textContent = T[currentLang].quiz_submit || 'Show Results';
    submitBtn.addEventListener('click', function () {
      showQuizResults();
    });
    container.appendChild(submitBtn);
  }

  function showQuizResults() {
    var questions = QUIZ[currentLang] || QUIZ.en;
    var score = 0;

    // Show correct/wrong
    for (var i = 0; i < questions.length; i++) {
      var qDiv = document.querySelectorAll('.quiz-question')[i];
      var options = qDiv.querySelectorAll('.quiz-option');
      for (var j = 0; j < options.length; j++) {
        options[j].disabled = true;
        if (j === questions[i].answer) {
          options[j].classList.add('correct');
        }
        if (quizAnswered[i] === j && j !== questions[i].answer) {
          options[j].classList.add('wrong');
        }
      }
      if (quizAnswered[i] === questions[i].answer) {
        score++;
      }
    }

    // Hide submit button
    var submitBtn = document.querySelector('.quiz-submit-btn');
    if (submitBtn) submitBtn.style.display = 'none';

    // Show results
    var results = document.getElementById('quizResults');
    results.classList.remove('hidden');
    document.getElementById('quizScoreNum').textContent = score;

    var msg = '';
    var translations = T[currentLang];
    if (score >= 7) msg = translations.quiz_result_8;
    else if (score >= 5) msg = translations.quiz_result_6;
    else if (score >= 3) msg = translations.quiz_result_4;
    else msg = translations.quiz_result_0;

    document.getElementById('quizResultMsg').textContent = msg;

    // Scroll to results
    results.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  /* ==============================
     SCROLL TO TOP
     ============================== */
  function setupScrollToTop() {
    var btn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==============================
     SPLASH SCREEN
     ============================== */
  function setupSplash() {
    var splash = document.getElementById('splash');
    var countdown = document.getElementById('splashCountdown');
    var count = 3;

    var interval = setInterval(function () {
      count--;
      if (countdown) countdown.textContent = count;
      if (count <= 0) {
        clearInterval(interval);
        splash.classList.add('hidden');
      }
    }, 1000);
  }

  /* ==============================
     HELP MODAL
     ============================== */
  function setupHelpModal() {
    var modal = document.getElementById('helpModal');
    var openBtn = document.getElementById('helpBtn');
    var closeBtn = document.getElementById('helpClose');

    openBtn.addEventListener('click', function () {
      modal.classList.add('visible');
    });

    closeBtn.addEventListener('click', function () {
      modal.classList.remove('visible');
    });

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('visible');
      }
    });
  }

  /* ==============================
     SOUND TOGGLE
     ============================== */
  function setupSoundToggle() {
    var btn = document.getElementById('soundToggle');
    var icon = document.getElementById('soundIcon');

    function updateSoundIcon() {
      if (soundEnabled) {
        icon.classList.remove('sound-muted');
      } else {
        icon.classList.add('sound-muted');
      }
    }

    updateSoundIcon();

    btn.addEventListener('click', function () {
      soundEnabled = !soundEnabled;
      localStorage.setItem('miraat_sound', soundEnabled);
      updateSoundIcon();
      var translations = T[currentLang];
      showToast(soundEnabled ? translations.toast_sound_on : translations.toast_sound_off);
    });
  }

  /* ==============================
     DUA ROTATION
     ============================== */
  function setupDuaFloat() {
    var duas = [
      'اللهم أصلح أحوال المسلمين',
      'اللهم اجمع كلمة المسلمين',
      'اللهم انصر المستضعفين',
      'ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة',
      'اللهم اهدنا فيمن هديت'
    ];
    var index = 0;
    var duaText = document.querySelector('.dua-text');

    setInterval(function () {
      index = (index + 1) % duas.length;
      duaText.style.opacity = '0';
      setTimeout(function () {
        duaText.textContent = duas[index];
        duaText.style.opacity = '1';
      }, 300);
    }, 8000);
  }

  /* ==============================
     INIT
     ============================== */
  function init() {
    setupSplash();
    applyTheme(currentTheme);
    applyLanguage(currentLang);

    // Tab navigation
    var tabBtns = document.querySelectorAll('.tab-btn');
    for (var i = 0; i < tabBtns.length; i++) {
      tabBtns[i].addEventListener('click', function () {
        var tab = this.getAttribute('data-tab');
        var soundType = this.getAttribute('data-sound');
        if (soundType) playSound(soundType);
        switchTab(tab);
      });
    }

    // Language switcher
    var langBtns = document.querySelectorAll('.lang-btn');
    for (var j = 0; j < langBtns.length; j++) {
      langBtns[j].addEventListener('click', function () {
        var lang = this.getAttribute('data-lang');
        playSound('click');
        applyLanguage(lang);
        showToast(T[lang].toast_lang);
      });
    }

    // Theme switcher
    var themeBtns = document.querySelectorAll('.theme-btn');
    for (var k = 0; k < themeBtns.length; k++) {
      themeBtns[k].addEventListener('click', function () {
        var theme = this.getAttribute('data-theme');
        playSound('theme');
        applyTheme(theme);
        var themeKey = 'toast_theme_' + theme;
        showToast(T[currentLang][themeKey]);
      });
    }

    setupExpandableCards();
    setupShareButtons();
    setupScrollToTop();
    setupHelpModal();
    setupSoundToggle();
    setupDuaFloat();
    setupScrollReveal();
    setupTimelineScrollBar();
    setupFlowchart();

    // Quiz retry button
    var retryBtn = document.getElementById('quizRetryBtn');
    if (retryBtn) {
      retryBtn.addEventListener('click', function () {
        renderQuiz();
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        var helpModal = document.getElementById('helpModal');
        var flowModal = document.getElementById('flowDetailModal');
        if (helpModal.classList.contains('visible')) {
          helpModal.classList.remove('visible');
        }
        if (flowModal.classList.contains('visible')) {
          flowModal.classList.remove('visible');
        }
      }
    });
  }

  /* ==============================
     UPGRADE 1: TYPEWRITER QUOTE EFFECT
     ============================== */
  var typewriterQuotes = [
    'المسلمون لن ينصرهم الله لمجرد أنهم يحملون بطاقة هوية إسلامية.',
    'الضعف الداخلي هو الذي مكّن الاستعمار.',
    'العلم بدون أخلاق خطير، والأخلاق بدون علم عاجزة.',
    'كفى لوما للآخرين. الخطوة الأولى للعلاج هي الاعتراف بالمرض.',
    'أمة تهمل تعليم نصف أبنائها تسير بنصف طاقتها.'
  ];

  function startTypewriter() {
    var el = document.getElementById('typewriterText');
    var cursor = document.getElementById('typewriterCursor');
    if (!el) return;
    var quoteIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var currentQuote = '';

    function type() {
      currentQuote = typewriterQuotes[quoteIndex];
      if (!isDeleting) {
        el.textContent = currentQuote.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentQuote.length) {
          isDeleting = true;
          setTimeout(type, 2500);
          return;
        }
        setTimeout(type, 60);
      } else {
        el.textContent = currentQuote.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          quoteIndex = (quoteIndex + 1) % typewriterQuotes.length;
          setTimeout(type, 500);
          return;
        }
        setTimeout(type, 30);
      }
    }
    type();
  }

  /* ==============================
     UPGRADE 2: 3D CARD FLIP (QUIZ)
     ============================== */
  var origRenderQuiz = renderQuiz;
  renderQuiz = function() {
    origRenderQuiz();
    // Wrap each quiz option click to add flip
    var options = document.querySelectorAll('.quiz-option');
    // Already handled by origRenderQuiz but we add visual flip feedback
  };

  var origShowQuizResults = showQuizResults;
  showQuizResults = function() {
    var questions = QUIZ[currentLang] || QUIZ.en;
    // Show correct/wrong with flip
    for (var i = 0; i < questions.length; i++) {
      var qDiv = document.querySelectorAll('.quiz-question')[i];
      if (!qDiv) continue;
      var opts = qDiv.querySelectorAll('.quiz-option');
      for (var j = 0; j < opts.length; j++) {
        opts[j].disabled = true;
        if (j === questions[i].answer) {
          opts[j].classList.add('correct');
          opts[j].style.transition = 'transform 0.5s';
          opts[j].style.transform = 'rotateY(360deg)';
        }
        if (quizAnswered[i] === j && j !== questions[i].answer) {
          opts[j].classList.add('wrong');
        }
      }
      if (quizAnswered[i] === questions[i].answer) {
        // handled by original
      }
    }
    origShowQuizResults();
  };

  /* ==============================
     UPGRADE 4: PAGE TRANSITION ANIMATIONS
     ============================== */
  var origSwitchTab = switchTab;
  switchTab = function(tab) {
    var panels = document.querySelectorAll('.tab-panel');
    for (var i = 0; i < panels.length; i++) {
      panels[i].classList.remove('slide-in');
    }
    origSwitchTab(tab);
    var target = document.getElementById('panel-' + tab);
    if (target) {
      target.classList.add('slide-in');
      // Show skeleton briefly
      showSkeleton(target);
    }
  };

  /* ==============================
     UPGRADE 5: FLOATING PARTICLES — Silver Mirror Shards
     ============================== */
  function initParticles() {
    var canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var particles = [];
    var count = 18;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 4,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.15 + 0.05
      });
    }

    function drawShard(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      ctx.beginPath();
      // Triangle shard shape
      ctx.moveTo(0, -p.size);
      ctx.lineTo(p.size * 0.7, p.size * 0.5);
      ctx.lineTo(-p.size * 0.7, p.size * 0.5);
      ctx.closePath();
      ctx.fillStyle = '#C0C0C0';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.3)';
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;
        drawShard(p);
      }
      requestAnimationFrame(animate);
    }
    animate();
  }

  /* ==============================
     UPGRADE 6: ANIMATED NUMBER COUNTERS
     ============================== */
  function initCounters() {
    var statNumbers = document.querySelectorAll('.stat-number');
    if (!('IntersectionObserver' in window)) return;

    var counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(function(el) {
      counterObserver.observe(el);
    });
  }

  function animateCounter(el) {
    var text = el.textContent.trim();
    var hasPlus = text.indexOf('+') !== -1;
    var numText = text.replace(/[+,٫٬]/g, '');
    // Convert Arabic-Indic numerals to Western
    var western = numText.replace(/[٠-٩]/g, function(d) {
      return '٠١٢٣٤٥٦٧٨٩'.indexOf(d);
    });
    var target = parseInt(western, 10);
    if (isNaN(target) || target === 0) return;

    var isArabicNum = /[٠-٩]/.test(text);
    var duration = 1500;
    var start = performance.now();

    function step(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      // Ease out
      var ease = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(target * ease);

      if (isArabicNum) {
        var arabicDigits = '٠١٢٣٤٥٦٧٨٩';
        el.textContent = String(current).replace(/[0-9]/g, function(d) {
          return arabicDigits[parseInt(d)];
        }) + (hasPlus ? '+' : '');
      } else {
        el.textContent = current + (hasPlus ? '+' : '');
      }

      if (progress < 1) requestAnimationFrame(step);
    }
    el.textContent = isArabicNum ? '٠' : '0';
    requestAnimationFrame(step);
  }

  /* ==============================
     UPGRADE 7: SWIPE GESTURES
     ============================== */
  function initSwipeGestures() {
    var tabs = ['home', 'timeline', 'causes', 'solutions', 'lessons', 'quiz', 'about'];
    var touchStartX = 0;
    var touchEndX = 0;
    var mainContent = document.getElementById('mainContent');
    if (!mainContent) return;

    mainContent.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    mainContent.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) < 50) return;

      var currentIndex = tabs.indexOf(currentTab);
      if (currentIndex === -1) return;

      var isRtl = document.documentElement.getAttribute('dir') === 'rtl';
      var nextIndex;

      if (isRtl) {
        // RTL: swipe left = previous, swipe right = next
        nextIndex = diff > 0 ? currentIndex - 1 : currentIndex + 1;
      } else {
        nextIndex = diff > 0 ? currentIndex + 1 : currentIndex - 1;
      }

      if (nextIndex >= 0 && nextIndex < tabs.length) {
        switchTab(tabs[nextIndex]);
        if (navigator.vibrate) navigator.vibrate(10);
      }
    }, { passive: true });
  }

  /* ==============================
     UPGRADE 8: HAPTIC FEEDBACK
     ============================== */
  function initHaptic() {
    document.addEventListener('click', function(e) {
      var btn = e.target.closest('button, .tab-btn, .expand-btn, .lang-btn, .theme-btn, .flow-clickable, .quiz-option');
      if (btn && navigator.vibrate) {
        navigator.vibrate(10);
      }
    });
  }

  /* ==============================
     UPGRADE 9: AUTO DARK MODE
     ============================== */
  function initAutoDarkMode() {
    if (localStorage.getItem('miraat_theme')) return; // user already chose
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      applyTheme('history');
    }
  }

  /* ==============================
     UPGRADE 10: READING MODE
     ============================== */
  function initReadingMode() {
    var btn = document.getElementById('readingModeBtn');
    if (!btn) return;
    btn.addEventListener('click', function() {
      document.body.classList.toggle('reading-mode');
      if (navigator.vibrate) navigator.vibrate(10);
    });
  }

  /* ==============================
     UPGRADE 11: SKELETON LOADING
     ============================== */
  function showSkeleton(panel) {
    // Add skeleton overlay briefly
    var existing = panel.querySelector('.skeleton-loader');
    if (existing) return;

    var skeleton = document.createElement('div');
    skeleton.className = 'skeleton-loader';
    skeleton.innerHTML =
      '<div class="skeleton-block skeleton-title"></div>' +
      '<div class="skeleton-block skeleton-text"></div>' +
      '<div class="skeleton-block skeleton-text short"></div>' +
      '<div class="skeleton-block skeleton-card"></div>';
    skeleton.style.position = 'absolute';
    skeleton.style.top = '0';
    skeleton.style.left = '0';
    skeleton.style.right = '0';
    skeleton.style.zIndex = '10';
    skeleton.style.background = 'var(--bg-primary)';
    panel.style.position = 'relative';
    panel.appendChild(skeleton);
    setTimeout(function() {
      skeleton.style.opacity = '0';
      skeleton.style.transition = 'opacity 0.3s';
      setTimeout(function() {
        if (skeleton.parentNode) skeleton.parentNode.removeChild(skeleton);
      }, 300);
    }, 400);
  }

  /* ==============================
     UPGRADE 12: EASTER EGG
     ============================== */
  var exploredTabs = {};
  function checkEasterEgg(tab) {
    exploredTabs[tab] = true;
    var allTabs = ['home', 'timeline', 'causes', 'solutions', 'lessons', 'quiz', 'about'];
    var explored = allTabs.filter(function(t) { return exploredTabs[t]; });
    if (explored.length >= allTabs.length && !localStorage.getItem('miraat_easter_shown')) {
      localStorage.setItem('miraat_easter_shown', '1');
      setTimeout(showEasterEgg, 1000);
    }
  }

  function showEasterEgg() {
    var overlay = document.createElement('div');
    overlay.className = 'easter-egg-overlay';
    overlay.innerHTML =
      '<div class="easter-egg-card">' +
        '<div class="egg-icon">&#128142;</div>' +
        '<div class="egg-title">' + (currentLang === 'ar' ? 'اكتمل الاستكشاف!' :
          currentLang === 'fr' ? 'Exploration terminee !' : 'Exploration Complete!') + '</div>' +
        '<div class="egg-text">' + (currentLang === 'ar' ?
          'بارك الله فيك. لقد استكشفت كل أقسام المرآة. المعرفة نور والجهل ظلام.' :
          currentLang === 'fr' ?
          'Qu\'Allah vous benisse. Vous avez explore tous les chapitres du Miroir.' :
          'May Allah bless you. You have explored every section of The Mirror. Knowledge is light.') + '</div>' +
        '<button class="egg-close" onclick="this.closest(\'.easter-egg-overlay\').remove()">' +
          (currentLang === 'ar' ? 'جزاك الله خيرا' : currentLang === 'fr' ? 'Merci' : 'Thank you') + '</button>' +
      '</div>';
    document.body.appendChild(overlay);
  }

  /* ==============================
     UPGRADE 13A: MIRROR CRACK EFFECT
     ============================== */
  var declineEventsViewed = JSON.parse(localStorage.getItem('miraat_cracks') || '[]');
  var crackPaths = [
    'M50,10 L45,35 L30,60 L35,90',
    'M55,5 L60,30 L75,55 L70,85',
    'M40,15 L35,40 L25,65',
    'M65,10 L70,40 L80,70',
    'M50,20 L55,50 L45,80',
    'M30,5 L25,30 L20,55 L30,80',
    'M70,15 L75,45 L65,75',
    'M45,5 L40,25 L50,50 L40,75'
  ];

  function updateMirrorCracks() {
    var mirrorFrame = document.querySelector('.mirror-frame');
    if (!mirrorFrame) return;
    var existing = mirrorFrame.querySelector('.mirror-crack');
    if (existing) existing.remove();

    if (declineEventsViewed.length === 0) return;

    var crackDiv = document.createElement('div');
    crackDiv.className = 'mirror-crack';
    var svg = '<svg viewBox="0 0 100 100" preserveAspectRatio="none">';
    for (var i = 0; i < Math.min(declineEventsViewed.length, crackPaths.length); i++) {
      svg += '<path class="crack-line visible" d="' + crackPaths[i] + '"/>';
    }
    svg += '</svg>';
    crackDiv.innerHTML = svg;
    mirrorFrame.appendChild(crackDiv);
  }

  function markDeclineEvent(year) {
    if (declineEventsViewed.indexOf(year) === -1) {
      declineEventsViewed.push(year);
      localStorage.setItem('miraat_cracks', JSON.stringify(declineEventsViewed));
      updateMirrorCracks();
    }
  }

  // Hook into expandable cards for decline-era events
  function setupCrackTracking() {
    var declineCards = document.querySelectorAll('.era-decline-border .expand-btn');
    declineCards.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var event = btn.closest('.timeline-event');
        if (event) {
          var year = event.getAttribute('data-year');
          if (year) markDeclineEvent(year);
        }
      });
    });
  }

  /* ==============================
     UPGRADE 13B: SAND TIMER ANIMATION
     ============================== */
  function initSandTimer() {
    var timer = document.createElement('div');
    timer.className = 'sand-timer';
    timer.id = 'sandTimer';
    timer.innerHTML =
      '<svg viewBox="0 0 40 70">' +
        '<rect x="5" y="0" width="30" height="3" rx="1" fill="var(--accent)"/>' +
        '<rect x="5" y="67" width="30" height="3" rx="1" fill="var(--accent)"/>' +
        '<path d="M8,3 L8,25 L20,35 L32,25 L32,3" fill="none" stroke="var(--text-muted)" stroke-width="1.5"/>' +
        '<path d="M8,67 L8,45 L20,35 L32,45 L32,67" fill="none" stroke="var(--text-muted)" stroke-width="1.5"/>' +
        '<rect class="sand-top" id="sandTop" x="10" y="5" width="20" rx="2" height="20" opacity="0.6"/>' +
        '<rect class="sand-bottom" id="sandBottom" x="10" y="50" width="20" rx="2" height="0" opacity="0.6"/>' +
      '</svg>';
    document.body.appendChild(timer);

    // Only show on timeline tab
    function updateTimerVisibility() {
      timer.style.display = currentTab === 'timeline' ? 'block' : 'none';
    }
    // Override switchTab to also update timer
    var origSwitch2 = switchTab;
    switchTab = function(tab) {
      origSwitch2(tab);
      updateTimerVisibility();
      checkEasterEgg(tab);
    };
    updateTimerVisibility();

    // Update sand based on scroll position
    window.addEventListener('scroll', function() {
      if (currentTab !== 'timeline') return;
      var timeline = document.getElementById('panel-timeline');
      if (!timeline) return;
      var rect = timeline.getBoundingClientRect();
      var scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
      var topEl = document.getElementById('sandTop');
      var botEl = document.getElementById('sandBottom');
      if (topEl) topEl.setAttribute('height', 20 * (1 - scrollProgress));
      if (botEl) {
        botEl.setAttribute('height', 17 * scrollProgress);
        botEl.setAttribute('y', 50 + 17 * (1 - scrollProgress));
      }
    });
  }

  /* ==============================
     UPGRADE 13C: RIPPLE CLICK EFFECT
     ============================== */
  function initRippleEffect() {
    document.querySelectorAll('.timeline-card').forEach(function(card) {
      card.addEventListener('click', function(e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var ripple = document.createElement('div');
        ripple.className = 'ripple-effect';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        card.appendChild(ripple);
        setTimeout(function() { if (ripple.parentNode) ripple.parentNode.removeChild(ripple); }, 600);
      });
    });
  }

  /* ==============================
     ENHANCED INIT
     ============================== */
  var origInit = init;
  init = function() {
    initAutoDarkMode();
    origInit();
    startTypewriter();
    initParticles();
    initCounters();
    initSwipeGestures();
    initHaptic();
    initReadingMode();
    initSandTimer();
    initRippleEffect();
    updateMirrorCracks();
    setupCrackTracking();
    checkEasterEgg('home');
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


/* TICKER — rich content */
function startTicker(){
  var el=document.getElementById('tickerText');if(!el)return;
  var tips={
    ar:['🪞 انظر بصدق: أين أخطأنا؟','📜 ١٢ محطة في مسيرة التراجع','🔍 ٨ أسباب للانحدار','💡 الحلول تبدأ من الداخل','🤲 اللّهُمّ أعِزّ الإسلام والمسلمين','💡 Powered by workshop-diy.org'],
    en:['🪞 Look honestly: where did we go wrong?','📜 12 milestones of decline','🔍 8 causes analyzed','💡 Solutions start from within','🤲 O God, honor Islam and Muslims','💡 Powered by workshop-diy.org'],
    fr:['🪞 Regardez honnêtement: où avons-nous échoué?','📜 12 jalons du déclin','🔍 8 causes analysées','💡 Powered by workshop-diy.org']
  };
  var lang=document.documentElement.lang||'ar';var msgs=tips[lang]||tips.ar;
  var txt=msgs.join('  ✦  ');
  el.innerHTML='<span class="tc">'+txt+'  ✦  </span><span class="tc" aria-hidden="true">'+txt+'  ✦  </span>';
  el.style.animation='tickerMarquee '+Math.max(25,txt.length*0.12)+'s linear infinite';
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',startTicker)}else{startTicker()}
