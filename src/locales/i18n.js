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
          "Sabir Elsir Consulting Office is one of the leading companies in the field of engineering consulting since 2001. Through our branches in Sudan and the United Arab Emirates, we provide exceptional architectural and construction designs. We also provide engineering supervision services.":
            "منذ عام 2001، كان مكتب صابر السر الاستشاري رائداً في مجال الاستشارات الهندسية. تقدم فروعنا في السودان والإمارات العربية المتحدة تصميمات معمارية وإنشائية استثنائية، إلى جانب خدمات الإشراف الهندسي عالية المستوى.",

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

          "Our Services": "خدماتنا",
          "Architectural Engineering Consultancy":
            "الاستشارات الهندسية المعمارية",
          "Sabir Elsir Engineering Consultancy provides comprehensive solutions  that integrate architectural design with engineering excellence. Our team collaborates closely with clients to deliver innovative designs, precise engineering, and seamless project management from concept to completion.":
            "تقدم صابر السر للاستشارات الهندسية حلولا شاملة تدمج التصميم المعماري مع التميز الهندسي. يتعاون فريقنا بشكل وثيق مع العملاء لتقديم تصميمات مبتكرة وهندسة دقيقة وإدارة سلسة للمشروع من المفهوم إلى الانتهاء.",

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
