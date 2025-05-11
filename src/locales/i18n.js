import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend"; // Add this line if using the backend plugin

i18n
  .use(Backend) // Add this line if using the backend plugin
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          slide1_alt: "Slide 1",
          slide2_alt: "Slide 2",
          slide3_alt: "Slide 3",
          slide4_alt: "Slide 4",
          Home: "Home",
          About: "About",
          Contact: "Contact",

          "About US": "About US",
          "Our History": "Our History",
          "Our Team": "Our Team",
          "Mission & Vision": "Mission & Vision",
          "Our Story": "Our Story",
        },
      },
      ar: {
        translation: {
          Home: " الرئيسية",
          About: "من نحن",
          Contact: "تواصل معنا",
          Services: "الخدمات",

          "Welcome to Sabir Elsir Engineering Consultants":
            "مرحبا بكم في صابر السر للاستشارات الهندسية",

          "Who We Are": "معلومات عنا",
          "At Sabir Elsir Consulting Office, excellence in engineering consulting has been our passion since 2001. With thriving branches in Sudan and the United Arab Emirates, we proudly deliver outstanding architectural designs, innovative construction solutions, and expert engineering supervision services across the region. What truly sets Sabir Elsir Consulting Office apart among engineering companies is the exceptional expertise of our team. Our consultants proudly hold prestigious qualifications such as the Professional Engineer (PE) License, the Project Management Professional (PMP) Certification, master’s Degrees (MSc) in specialized engineering fields, and even Doctorate Degrees (PhD). These achievements reflect a deep commitment to professional excellence, innovative thinking, and world-class project execution Whether you need visionary designs or meticulous engineering supervision, Sabir Elsir Consulting Office Consulting Office brings unmatched professionalism and decades of experience to every project. We combine academic mastery with hands-on expertise to help clients realize their dreams — safely, sustainably, and beautifully.Discover why Sabir Elsir Consulting Office continues to lead the way among top engineering consulting firms in Sharjah, Ajman, Khartoum, and beyond.":
            "في صابر السر للاستشارات الهندسية، كان التميز في الاستشارات الهندسية شغفنا منذ عام 2001. مع فروع مزدهرة في السودان والإمارات العربية المتحدة، نقدم بفخر تصميمات معمارية استثنائية وحلول بناء مبتكرة وخدمات إشراف هندسي خبراء عبر المنطقة. ما يميز صابر السر للاستشارات الهندسية بين شركات الهندسة هو الخبرة الاستثنائية لفريقنا. يحمل مستشارونا بفخر مؤهلات مرموقة مثل رخصة المهندس المحترف (PE) ، وشهادة محترف إدارة المشاريع (PMP) ، ودرجات الماجستير (MSc) في مجالات الهندسة المتخصصة ، وحتى درجات الدكتوراه (PhD). تعكس هذه الإنجازات التزامًا عميقًا بالتميز المهني والتفكير المبتكر وتنفيذ المشاريع على مستوى عالمي. سواء كنت بحاجة إلى تصميمات مبتكرة أو إشراف هندسي دقيق ، فإن صابر السر للاستشارات الهندسية يجلب احترافية لا مثيل لها وعقود من الخبرة إلى كل مشروع. نحن نجمع بين الإتقان الأكاديمي والخبرة العملية لمساعدة العملاء على تحقيق أحلامهم - بأمان واستدامة وجمال. اكتشف لماذا تواصل صابر السر للاستشارات الهندسية قيادة الطريق بين أفضل شركات الاستشارات الهندسية في الشارقة وعجمان والخرطوم وما وراءها.",

          "Secrets to Choosing the Right Engineering Partner":
            "أسرار اختيار الشريك الهندسي المناسب",

          "Key Certifications Every Consultant Should Have":
            "المؤهلات الرئيسية التي يجب أن يمتلكها كل مستشار",

          "Are You Looking for the Best Engineering Companies in Sharjah, Ajman, and Khartoum? When choosing an engineering consultant for your project, relying on charming words or flashy presentations isn’t enough. You need strong proof and that’s where certified qualifications come into play. Certifications tell you: 'This person has worked hard, learned, and gained the expertise to lead your project to success! Look for a consultant who holds certifications such as:":
            "هل تبحث عن أفضل شركات الهندسة في الشارقة وعجمان والخرطوم؟ عند اختيار مستشار هندسي لمشروعك، فإن الاعتماد على الكلمات الجذابة أو العروض اللامعة ليس كافيًا. تحتاج إلى دليل قوي وهنا تأتي المؤهلات المعتمدة في الصورة. تخبرك الشهادات: لقد عمل هذا الشخص بجد وتعلم واكتسب الخبرة لقيادة مشروعك نحو النجاح! ابحث عن مستشار يحمل مؤهلات مثل:",

          "When choosing an engineering consultant for your project, relying on charming words or flashy presentations isn’t enough. You need strong proof and that’s where certified qualifications come into play. Certifications tell you: This person has worked hard, learned, and gained the expertise to lead your project to success! Look for a consultant who holds certifications such as:":
            "عند اختيار مستشار هندسي لمشروعك، فإن الاعتماد على الكلمات الجذابة أو العروض اللامعة ليس كافيًا. تحتاج إلى دليل قوي وهنا تأتي المؤهلات المعتمدة في الصورة. تخبرك الشهادات: لقد عمل هذا الشخص بجد وتعلم واكتسب الخبرة لقيادة مشروعك نحو النجاح! ابحث عن مستشار يحمل مؤهلات مثل:",

          "Professional Engineer (PE) License": "رخصة مهندس محترف (PE)",
          "Project Management Professional (PMP) Certification":
            "شهادة محترف إدارة المشاريع (PMP)",
          "Master’s Degree (MSc) in an engineering specialty":
            "درجة الماجستير (MSc) في تخصص هندسي",
          "Doctorate Degree (PhD) in their field":
            "درجة الدكتوراه (PhD) في مجاله",
          "These certifications are not just titles; they are proof of years of study, training, and real-world experience. Each certification means the consultant before you has faced academic and professional challenges and is qualified to turn your ideas into successful real-world projects.":
            "هذه الشهادات ليست مجرد ألقاب؛ إنها دليل على سنوات من الدراسة والتدريب والخبرة العملية. تعني كل شهادة أن المستشار أمامك قد واجه تحديات أكاديمية ومهنية وهو مؤهل لتحويل أفكارك إلى مشاريع ناجحة في العالم الحقيقي.",
          "A Final Tip": "نصيحة أخيرة",
          "When you choose an engineering consultant, look for someone who not only has the right certifications but also a proven track record of successful projects. Ask for references and examples of their work. A good consultant will be happy to share their success stories with you.":
            "عند اختيار مستشار هندسي، ابحث عن شخص لديه ليس فقط الشهادات الصحيحة ولكن أيضًا سجل حافل من المشاريع الناجحة. اطلب المراجع وأمثلة على عملهم. سيكون المستشار الجيد سعيدًا بمشاركة قصص نجاحه معك.",
          "Next time you are searching for an engineering company in Sharjah, Ajman, or Khartoum Always ask about the team's certifications and experience!":
            "في المرة القادمة التي تبحث فيها عن شركة هندسية في الشارقة أو عجمان أو الخرطوم، اسأل دائمًا عن مؤهلات وخبرة الفريق!",

          "Enhancing Mental Well-being through Outdoor Living with Sustainable Landscape Materials.":
            "تعزيز الصحة النفسية من خلال الحياة في الهواء الطلق باستخدام مواد المناظر الطبيعية المستدامة.",
          Mosque: "مسجد",
          "Modern Villa Design": "تصميم فيلا حديث",
          "Design Outdoor Space": " تصميم المساحات الخارجية",
          "Tailored architectural, structural, and MEP design solutions to fulfill each client's unique needs.":
            "حلول التصميم المعماري والهيكلي والكهربائي والميكانيكي مصممة خصيصًا لتلبية الاحتياجات الفريدة لكل عميل.",

          "Landscape Design": "تصميم المناظر الطبيعية",

          "Mixed model Mosque design with the most recent technology with sustainable landscape materials.":
            "تصميم مسجد نموذجي مختلط بأحدث التقنيات مع مواد المناظر الطبيعية المستدامة",

          "Contact Us": "اتصل بنا",
          "Sharjah UAE": "الشارقة - الإمارات العربية المتحدة",
          "Ajman UAE": "  عجمان - الإمارات العربية المتحدة",
          "About US": "من نحن",

          "Our Story": "قصتنا",
          "Sabir Elsir Engineering Consultants Services is a leading company in the Engineering Consultants, established in 2001, with offices in Sudan and UAE. We provide exceptional Design, Construction, Supervision, and Fabrication services, backed by top-tier design capabilities. Our CEO, Sabir Elsir, is a highly qualified professional with a Ph.D. in construction management and has extensive experience of twenty-five years as an architect engineer, covering planning, execution, supervision, and project management. He is also a member of the UAE Engineering Society, a fellow of the Sudanese Architect Society, and a consultant engineer. Our executive manager, Taha Elnour, holds a Ph.D. in civil engineering and has an impressive thirty-two years of experience in civil engineering and construction management.":
            "صابر السر للخدمات الاستشارية الهندسية هي شركة رائدة في هذه مجال الاستشارات الهندسية، تأسست في عام 2001، ولها مكاتب في السودان والإمارات العربية المتحدة. نحن نقدم خدمات استثنائية في التصميم والبناء والإشراف ، مدعومة بقدرات تصميم عالية المستوى. الرئيس التنفيذي لدينا، صابر السر، هو محترف ذو مؤهلات عالية وحاصل على درجة الدكتوراه في إدارة النشيد ويتمتع بخبرة واسعة تمتد لخمسة وعشرين عامًا كمهندس معماري، تغطي التخطيط والتنفيذ والإشراف وإدارة المشاريع. وهو أيضًا عضو في جمعية المهندسين الإماراتية، وزميل جمعية المعماريين السودانيين، ومهندس استشاري. مديرنا التنفيذي، طه النور، حاصل  على درجة الدكتوراه في الهندسة المدنية ويتمتع بخبرة رائعة تمتد إلى اثنين وثلاثين عامًا في الهندسة المدنية وإدارة الإنشاءات.",

          "Expert Team: Our consultants are industry leaders with extensive knowledge and experience.Innovative Solutions: We utilize the latest technologies and methodologies to deliver cutting-edge solutions.Client-Centric Approach: Your satisfaction is our priority. We work closely with you to understand your expectations.":
            "فريق الخبراء: مستشارونا هم قادة الصناعة ويتمتعون بالمعرفة والخبرة الواسعة. الحلول المبتكرة: نحن نستخدم أحدث التقنيات والمنهجيات لتقديم حلول متطورة. نهج يركز على العميل: رضاكم هو أولويتنا. نحن نعمل معك بشكل وثيق لفهم توقعاتك.",

          "Our Mission": "مهمتنا",

          "At Sabir Elsir Engineering Consultants, our mission is to earn a reputation as a top-quality Engineering consultant and a reliable engineering consultant services provider in the UAE.":
            "تتمثل مهمتنا في صابر السر للاستشارات الهندسية في اكتساب سمعة طيبة باعتبارنا مستشارًا هندسيًا عالي الجودة ومزود خدمات استشارية هندسية موثوقًا به في دولة الإمارات العربية المتحدة.",

          "At Sabir Elsir Engineering Consultants, our clear vision is to earn 100% customer satisfaction by consistently delivering superior services and solutions at a competitive cost. Our firm commitment to pushing the boundaries of technology-based corporate solutions ensures an unwavering response from our niche market. We believe in limitless growth, a belief that fuels our commitment to sustain our upward trajectory.":
            "في صابر السر للاستشارات الهندسية، تتمثل مهمتنا في اكتساب سمعة طيبة باعتبارنا مستشارًا هندسيًا عالي الجودة ومزود خدمات استشارية هندسية موثوقًا به في دولة الإمارات العربية المتحدة.",

          "Why US": "لماذا نحن",

          "Our Vision": "رؤيتنا",
          "Office Hours": "ساعات العمل",
          "AJMAN UAE": "عجمان الامارات العربيه المتحده",
          "AL SHARJAH UAE": "الشارقه الامارات العربيه المتحده",

          "Contact US": "اتصل بنا",

          Phone: "هاتف",
          Address: "مكاتبنا",

          Email: "البريد الإلكتروني",
          "Corniche St - Al Majaz 1 - Al Majaz - Sharjah - United Arab Emirates -Floor 22 - office 2203":
            " الشارقه المجاز 1 الكرنيش برج بالرشيد 1",

          Name: "الاسم",
          Message: "رسالتك",
          Send: "ارسال",
          "As one of the leading engineering companies in Sharjah and Ajman, Sabir Elsir Engineering Office stands out with its exceptional expertise in General Buildings Engineering Consultancy. With decades of experience in structural design, architectural planning, and construction supervision, we offer innovative and compliant solutions for residential, commercial, and mixed-use developments. Recognized among the top engineering companies in Sharjah, our team delivers tailored engineering services that meet the highest standards of quality, safety, and sustainability—making us the trusted partner for developers, contractors, and government entities across the UAE.":
            " باعتبارها واحدة من أبرز شركات الهندسة في الشارقة وعجمان، تبرز صابر السر للاستشارات الهندسية في تقديم خدمات استشارية متميزة في تصميم المباني العامة. مع عقود من الخبرة في التصميم الإنشائي، والتخطيط المعماري، والإشراف على البناء، نقدم حلولًا مبتكرة ومتوافقة للمشاريع السكنية والتجارية والمختلطة الاستخدام. ومعترف بها كواحدة من أفضل شركات الهندسة في الشارقة، يقدم فريقنا خدمات هندسية مصممة خصيصًا تلبي أعلى معايير الجودة والسلامة والاستدامة - مما يجعلنا الشريك الموثوق للمطورين والمقاولين والجهات الحكومية عبر دولة الإمارات العربية المتحدة.",
          "We provide innovative landscape design solutions in Sharjah and Ajman, enhancing outdoor spaces for residential, commercial, and public projects. Our designs blend natural beauty with sustainable practices, ensuring minimal water usage and environmental impact in the UAE’s arid climate. From garden layouts and hardscaping to lighting and irrigation systems, we create cohesive outdoor experiences that elevate property value. Our landscape architects collaborate closely with clients to craft spaces that are both visually appealing and functionally practical. Let us transform your surroundings into a serene and welcoming environment tailored to your lifestyle or brand.":
            " نقدم حلول تصميم المناظر الطبيعية المبتكرة في الشارقة وعجمان، مما يعزز المساحات الخارجية للمشاريع السكنية والتجارية والعامة. تجمع تصميماتنا بين الجمال الطبيعي والممارسات المستدامة، مما يضمن الحد الأدنى من استخدام المياه والأثر البيئي في المناخ الجاف لدولة الإمارات. بدءًا من تخطيطات الحدائق والتصميمات الصلبة، وصولًا إلى أنظمة الإضاءة والري، نقوم بإنشاء تجارب خارجية متكاملة تعزز قيمة الممتلكات. يتعاون مهندسونا المعماريون في المناظر الطبيعية بشكل وثيق مع العملاء لصياغة مساحات جذابة بصريًا وعملية وظيفيًا. دعنا نحول محيطك إلى بيئة هادئة ومرحبة مصممة وفقًا لأسلوب حياتك أو علامتك التجارية.",
          "As a leading engineering consultant in Sharjah and Ajman, we offer distinguished mosque design services that honor Islamic architectural heritage while integrating modern engineering solutions. Our team emphasizes spiritual ambiance, acoustics, and optimal prayer space orientation in every mosque project. We adhere strictly to UAE building codes and cultural sensitivities to deliver places of worship that resonate with community values. From domes and minarets to interior calligraphy and lighting, we design mosques that are both structurally sound and spiritually inspiring. Trust us to bring your vision of a sacred space to life with precision and respect.":
            " بصفتنا مستشارين هندسيين رائدين في الش  ارقة وعجمان، نقدم خدمات تصميم مساجد متميزة تكرم التراث المعماري الإسلامي مع دمج الحلول الهندسية الحديثة. يركز فريقنا على الأجواء الروحية، والصوتيات، وتوجيه المساحات للصلاة في كل مشروع مسجد. نحن نلتزم بدقة بقوانين البناء الإماراتية والحساسيات الثقافية لتقديم أماكن عبادة تتناغم مع قيم المجتمع. بدءًا من القباب والمآذن إلى الخطوط الداخلية والإضاءة، نصمم مساجد تكون متينة من الناحية الهيكلية وملهمة روحيًا. ثق بنا لتحويل رؤيتك لمساحة مقدسة إلى واقع بدقة واحترام.",
          "Our engineering consultancy in Sharjah and Ajman specializes in bespoke modern villa designs that combine luxury with functional elegance. We incorporate cutting-edge architectural trends and sustainable building practices to create villas that are visually striking and environmentally responsible. Our team works closely with clients to ensure every design detail aligns with their vision and lifestyle needs. With extensive experience in the UAE's residential sector, we understand the local regulations and cultural aesthetics essential for villa development. Choose us to transform your land into a modern sanctuary that reflects innovation and comfort.":
            " نحن في صابر السر للاستشارات الهندسية في الشارقة وعجمان متخصصون في تصميم الفلل الحديثة المصممة حسب الطلب، والتي تجمع بين الفخامة والأناقة الوظيفية. نحن ندمج أحدث الاتجاهات المعمارية والممارسات المستدامة في البناء لإنشاء فلل تكون لافتة للنظر ومسؤولة بيئيًا. يعمل فريقنا بشكل وثيق مع العملاء لضمان توافق كل تفاصيل التصميم مع رؤيتهم واحتياجات نمط حياتهم. مع خبرة واسعة في قطاع الإسكان في دولة الإمارات، نفهم اللوائح المحلية والجماليات الثقافية الضرورية لتطوير الفلل. اخترنا لتحويل أرضك إلى ملاذ حديث يعكس الابتكار والراحة.",

          "As one of the leading engineering companies in Sharjah and Ajman, Sabir Elsir Engineering Office specializes in Interior Design Engineering Consultancy that blends functionality, aesthetics, and structural integrity. Unlike many engineering companies in Sharjah, we offer a holistic approach to interior design by combining architectural vision with advanced engineering solutions tailored to residential, commercial, and hospitality spaces. From space planning and 3D visualization to material selection and MEP integration, our experienced consultants ensure that every detail aligns with client goals and regulatory standards across the UAE.":
            "باعتبارها واحدة من أبرز شركات الهندسة في الشارقة وعجمان، تتخصص صابر السر للاستشارات الهندسية في تقديم خدمات استشارية متميزة في تصميم الديكور الداخلي الهندسي، حيث تجمع بين الوظائف العملية والجماليات وسلامة الهيكل. وعلى عكس العديد من شركات الهندسة في الشارقة، نعتمد في أعمالنا على رؤية شاملة تدمج بين التصميم المعماري والحلول الهندسية المتقدمة، والموجهة للمساحات السكنية والتجارية والفندقية. بدءًا من تخطيط المساحات والتصاميم ثلاثية الأبعاد، مرورًا باختيار المواد، وانتهاءً بتكامل أنظمة الكهرباء والميكانيكا والسباكة (MEP)، يحرص فريقنا من الاستشاريين ذوي الخبرة على أن يتماشى كل تفصيل مع أهداف العميل والمعايير التنظيمية في دولة الإمارات.",

          "As one of the leading engineering companies in Sharjah, Sabir Elsir  Engineering Office specializes in comprehensive project management consultancy services tailored to meet the diverse needs of the construction and infrastructure sectors. Recognized among top civil engineering companies in Sharjah, we deliver expert guidance from concept to completion—ensuring projects are executed on time, within budget, and to the highest standards. With a strong focus on quality control, risk mitigation, and regulatory compliance, Sabir Elsir Engineering Office empowers developers and contractors to achieve sustainable success in every phase of engineering project execution.":
            "بصفتها واحدة من أبرز شركات الهندسة في الشارقة، تتخصص صابر السر للاستشارات الهندسية في خدمات استشارات إدارة المشاريع الهندسية الشاملة، المصممة لتلبية احتياجات قطاعات البناء والبنية التحتية المتنوعة. ومعترف بها كإحدى أفضل شركات الهندسة المدنية في الشارقة، نقدم توجيهًا هندسيًا احترافيًا من مرحلة التخطيط وحتى التنفيذ، مع ضمان إنجاز المشاريع في الوقت المحدد، وضمن الميزانية، وبأعلى معايير الجودة. من خلال التركيز القوي على مراقبة الجودة، وتخفيف المخاطر، والامتثال للوائح المحلية، تمكّن صابر السر للاستشارات الهندسية المطورين والمقاولين من تحقيق النجاح المستدام في كل مرحلة من مراحل تنفيذ المشاريع الهندسية.",
          "As one of the top engineering companies in Sharjah and Ajman, Sabir Elsir Engineering Office stands out for its exceptional Architectural Engineering Consultancy services tailored to meet the dynamic needs of the UAE's growing construction and infrastructure sectors. Recognized among leading engineering companies in Sharjah, we specialize in innovative architectural design, sustainable development, and regulatory-compliant planning. Our team of experienced architects and engineers delivers bespoke solutions for residential, commercial, and industrial projects, ensuring both aesthetic value and structural integrity. From concept to completion, Sabir Elsir Engineering Office remains a trusted partner for quality, precision, and visionary design.":
            "باعتبارها واحدة من أبرز شركات الهندسة في الشارقة وعجمان، تتخصص صابر السر للاستشارات الهندسية في تقديم خدمات استشارية متميزة في تصميم الديكور الداخلي الهندسي، حيث تجمع بين الوظائف العملية والجماليات وسلامة الهيكل. وعلى عكس العديد من شركات الهندسة في الشارقة، نعتمد في أعمالنا على رؤية شاملة تدمج بين التصميم المعماري والحلول الهندسية المتقدمة، والموجهة للمساحات السكنية والتجارية والفندقية. بدءًا من تخطيط المساحات والتصاميم ثلاثية الأبعاد، مرورًا باختيار المواد، وانتهاءً بتكامل أنظمة الكهرباء والميكانيكا والسباكة (MEP)، يحرص فريقنا من الاستشاريين ذوي الخبرة على أن يتماشى كل تفصيل مع أهداف العميل والمعايير التنظيمية في دولة الإمارات.",

          "": "باعتبارها واحدة من أبرز شركات الهندسة في الشارقة وعجمان، تبرز صابر السر للاستشارات الهندسية في تقديم خدمات الاستشارات الهندسية المعمارية المصممة لتلبية احتياجات قطاعات البناء والبنية التحتية المتنامية في دولة الإمارات العربية المتحدة. ومن بين أفضل شركات الهندسة في الشارقة، نتميز في التصميم المعماري المبتكر، والتنمية المستدامة، والتخطيط المتوافق مع اللوائح المحلية. يضم فريقنا مهندسين ومعماريين ذوي خبرة يقدمون حلولاً مخصصة للمشاريع السكنية والتجارية والصناعية، مما يضمن القيمة الجمالية والسلامة الإنشائية. من الفكرة حتى التنفيذ، تظل MC Engineering Office شريكاً موثوقاً للجودة والدقة والتصميم الإبداعي.",

          "Our Services": "خدماتنا",
          "Architectural Engineering Consultancy":
            "الاستشارات الهندسية المعمارية",
          "Sabir Elsir Engineering Consultancy provides comprehensive solutions  that integrate architectural design with engineering excellence. Our team collaborates closely with clients to deliver innovative designs, precise engineering, and seamless project management from concept to completion.":
            "تقدم صابر السر للاستشارات الهندسية حلولا شاملة تدمج التصميم المعماري مع التميز الهندسي. يتعاون فريقنا بشكل وثيق مع العملاء لتقديم تصميمات مبتكرة وهندسة دقيقة وإدارة سلسة للمشروع من المفهوم إلى الانتهاء.",

          "Sabir Elsir Engineering Consultants Office is one of the most experienced and trusted civil engineering consultancy firms in the UAE, proudly serving Sharjah and Ajman with innovative, cost-effective, and sustainable engineering solutions. With a proven track record in structural design, infrastructure planning, and project management, Sabir Elsir Engineering Consultants combines technical expertise with local regulatory knowledge to deliver high-quality services across residential, commercial, and industrial projects. As a leading civil engineering consultant in Sharjah and Ajman, our commitment to engineering excellence and client satisfaction has positioned us as a top choice for developers, contractors, and government entities alike.":
            "مكتب صابر السر للاستشارات الهندسية هو أحد أكثر مكاتب استشارات الهندسة المدنية خبرةً وموثوقيةً في دولة الإمارات العربية المتحدة، ويفخر بتقديم حلول هندسية مبتكرة، واقتصادية، ومستدامة في الشارقة وعجمان. بسجل حافل في التصميم الإنشائي، وتخطيط البنية التحتية، وإدارة المشاريع، يجمع مكتب صابر السر للاستشارات الهندسية  بين الخبرة الفنية والمعرفة التنظيمية المحلية لتقديم خدمات عالية الجودة في المشاريع السكنية والتجارية والصناعية. وبصفتنا شركة استشارية رائدة في مجال الهندسة المدنية في الشارقة وعجمان، فإن التزامنا بالتميز الهندسي ورضا عملائنا جعلنا الخيار الأمثل للمطورين والمقاولين والجهات الحكومية على حد سواء.",

          "Sabir Elsir Engineering Consultants confidently provides a wide range of high-quality civil engineering services, such as structural design services, building rehabilitation, structural reinforcement, building remodeling":
            "تقدم صابر السر للاستشارات الهندسية بثقة مجموعة واسعة من خدمات الهندسة المدنية عالية الجودة، مثل خدمات التصميم الإنشائي, إعادة تأهيل المباني ، تقوية الهياكل ، إعادة تصميم المباني",
          "Civil Engineering Consultancy": "استشارات الهندسة المدنية",
          "Engineering Projects Management Consultancy":
            "استشارات إدارة المشاريع الهندسية",
          "Sabir Elsir Engineering Consultants is your premier choice for Engineering Projects Management Consultancy. Our top-tier services guarantee the successful execution of complex engineering projects. From planning and feasibility studies to design coordination, procurement, and construction oversight, we offer end-to-end project management solutions. Our expert team is dedicated to optimizing project performance and ensuring adherence to timelines, budgets, and quality standards.":
            "صابر السر للاستشارات الهندسية هو خيارك الأول للاستشارات الإدارية للمشاريع الهندسية. تضمن خدماتنا من الدرجة الأولى التنفيذ الناجح للمشاريع الهندسية المعقدة. من التخطيط ودراسات الجدوى إلى تنسيق التصميم والمشتريات والإشراف على البناء ، نقدم حلول إدارة المشاريع الشاملة. فريق الخبراء لدينا مكرس لتحسين أداء المشروع وضمان الالتزام بالجداول الزمنية والميزانيات ومعايير الجودة.",
          "Interior Design Engineering Consultancy":
            "استشارات هندسة التصميم الداخلي",
          "At Sabir Elsir Engineering Consultants, we specialize in providing personalized Interior design services for both residential and commercial spaces. Our skilled engineers are committed to incorporating functionality and sustainability into every project. From initial idea to final execution, we meticulously oversee every aspect of the process to ensure our client's active involvement and satisfaction. The result is extraordinary designs that elevate the appeal and value of their spaces.":
            "في صابر السر للاستشارات الهندسية ، نحن متخصصون في تقديم خدمات التصميم الداخلي الشخصية لكل من المساحات السكنية والتجارية. يلتزم مهندسونا المهرة بدمج الوظائف والاستدامة في كل مشروع. من الفكرة الأولية إلى التنفيذ النهائي ، نشرف بدقة على كل جانب من جوانب العملية لضمان المشاركة النشطة لعملائنا ورضاهم. والنتيجة هي تصميمات غير عادية ترفع من جاذبية وقيمة مساحاتها.",
          "General Buildings Engineering  Consultancy":
            "الاستشارات الهندسية العامة للمباني",
          "Boost your construction projects with Sabir Elsir Engineering Consultants. Our comprehensive building engineering consultancy services offer expert guidance and innovative solutions for architectural, structural, electrical, and mechanical engineering. Collaborating closely with clients, architects, and contractors, we ensure every aspect of your building is designed for safety, efficiency, and durability.":
            "عزز مشاريع البناء الخاصة بك مع صابر السر للاستشارات الهندسية. تقدم خدماتنا الاستشارية الهندسية الشاملة للمباني إرشادات الخبراء والحلول المبتكرة للهندسة المعمارية والهيكلية والكهربائية والميكانيكية. بالتعاون الوثيق مع العملاء والمهندسين المعماريين والمقاولين ، نضمن أن كل جانب من جوانب المبنى الخاص بك مصمم من أجل السلامة والكفاءة والمتانة.",
          "About Us": "من نحن",
          Vision: "الرؤية",
          Mission: "مهمتنا",
          Architectural: "التصميم المعماري",
          Civil: "التصميم المدني",
          "Projects Management": "إدارة المشاريع",
          "Interior Design": "التصميم الداخلي",
          "General Buildings": "تصميم المباني العامة ",
          "Khartoum Sudan": "الخرطوم -السودان",
          "Saturday to Thursday: 9:00 AM to 5:00 PM":
            "السبت إلى الخميس: 9:00 صباحا إلى 5:00 مساء",
          "Sharjah-Almajaz(1)- Balrasheed Tower (1)-Floor 22 - office 2203":
            "الشارقة - المجاز (1) - برج الرشيد (1) - الدور 22 - مكتب 2203",
          "Ajman-Nakheel 2 Office No. 190": "عجمان - النخيل 2 مكتب رقم 190",
          "About Sabir Elsir Engineering Consultants":
            "عن صابر السر للاستشارات الهندسية",
          "Contact Sabir Elsir Engineering Consultants":
            "تواصل مع صابر السر للاستشارات الهندسية",
          "Sabir Elsir Engineering Consultants's Services":
            "خدمات صابر السر للاستشارات الهندسية",
          "Villa Compound": "مجمع فلل",
          "Modern restaurant design": "تصميم مطعم حديث",
          "Enter your Name": "أدخل أسمك",
          "Enter your Phone Number": "أدخل هاتفك",
          "Enter your Email": "أدخل بريدك الإلكتروني",
          "Enter your Message": "أدخل رسالتك",
          Submit: "ارسال",
          "Name is required": "الاسم مطلوب",
          "Enter a valid phone number": "أدخل رقم هاتف صحيح",
          "Enter a valid email address": "أدخل عنوان بريد إلكتروني صالح",
          "Message is required": "الرجاء ادخال رسالتك",
          "As one of the top engineering companies in Sharjah, our journey began with a vision to redefine engineering consultancy in the UAE. From our humble beginnings, we’ve grown into a trusted name among the top Engineering Consultants in Sharjah UAE and beyond. Our expertise spans residential, commercial, and infrastructure projects—delivering innovative and sustainable solutions to clients across the Emirates. With a deep understanding of local regulations and international standards, we continue to shape Sharjah’s skyline with excellence.":
            "بصفتنا إحدى أفضل شركات الهندسة في الشارقة، بدأت رحلتنا برؤية تهدف إلى إعادة تعريف استشارات الهندسة في دولة الإمارات. من بداياتنا المتواضعة، تطورنا لنصبح اسمًا موثوقًا بين أفضل المكاتب الهندسية في الشارقة، الإمارات العربية المتحدة وخارجها. تشمل خبراتنا المشاريع السكنية والتجارية والبنية التحتية، حيث نقدم حلولًا مبتكرة ومستدامة لعملائنا في جميع أنحاء الإمارات. وبفضل معرفتنا العميقة باللوائح المحلية والمعايير العالمية، نواصل ترك بصمتنا في تطور الشارقة العمراني.",
          "Our mission is to provide smart, reliable, and efficient engineering services that add value to every project. As one of the best Engineering Consultants in Ajman UAE, we focus on delivering quality design and supervision with precision and professionalism. We aim to support our clients through every phase of the project, from concept to completion, ensuring excellence in execution and long-term satisfaction.":
            "تتمثل مهمتنا في تقديم خدمات هندسية ذكية وموثوقة وفعّالة تضيف قيمة إلى كل مشروع. نحن من بين أفضل المكاتب الهندسية في عجمان، الإمارات العربية المتحدة، ونركز على تقديم تصميمات دقيقة وإشراف محترف بجودة عالية. نحرص على دعم عملائنا في كل مرحلة من مراحل المشروع، من الفكرة وحتى الإنجاز، مع ضمان التنفيذ المتقن ورضا العملاء على المدى الطويل.",
          "We envision becoming the benchmark for engineering consultant companies in Sharjah and across the UAE. Our goal is to lead the industry by adopting cutting-edge technologies, promoting sustainable development, and continuously enhancing our service delivery. As we look ahead, we strive to maintain our reputation as one of the top Engineering Consultants in Sharjah UAE, known for our commitment to integrity and innovation.":
            "نطمح لأن نكون المعيار القياسي بين شركات الاستشارات الهندسية في الشارقة وفي جميع أنحاء الإمارات. رؤيتنا ترتكز على ريادة القطاع من خلال تبني أحدث التقنيات، وتعزيز التنمية المستدامة، وتحسين جودة الخدمات باستمرار. ونسعى جاهدين للحفاظ على مكانتنا كواحدة من أفضل المكاتب الهندسية في الشارقة، الإمارات العربية المتحدة، والمعروفة بالتزامها بالنزاهة والابتكار.",
          "Choosing us means partnering with one of the most respected engineering consultant companies in Sharjah. We bring unmatched technical expertise, personalized service, and a strong track record of successful projects. Whether you're seeking the best Engineering Consultants in Ajman UAE or dependable engineering support in Sharjah, our team is dedicated to turning your vision into reality—on time and within budget.":
            "عند اختيارك لنا، فأنت تتعامل مع واحدة من أبرز شركات الاستشارات الهندسية في الشارقة. نحن نقدم خبرة تقنية لا مثيل لها، وخدمة مخصصة، وسجلًا حافلًا من المشاريع الناجحة. سواء كنت تبحث عن أفضل المكاتب الهندسية في عجمان أو دعم هندسي موثوق في الشارقة، فإن فريقنا ملتزم بتحقيق رؤيتك بكفاءة واحترافية وضمن الميزانية المحددة.",
        },
      },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
