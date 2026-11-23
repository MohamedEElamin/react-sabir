import "../styles/Cards.css";
import { useTranslation } from "react-i18next";
import React from "react";

function Grid() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar") === true;
  const approvalFact = isArabic
    ? {
        label: "خدمات الاعتماد",
        value:
          "متابعة تنسيق إجراءات اعتماد المخططات والتصاريح الهندسية لدى الجهات المختصة وفق متطلبات كل مشروع",
      }
    : {
        label: "Approval coordination",
        value:
          "Coordination of drawing approvals and engineering permits with the relevant authorities according to each project's requirements",
      };
  const companyFacts = isArabic
    ? [
        { label: "اسم الشركة", value: "صابر السر للاستشارات الهندسية" },
        { label: "سنة التأسيس", value: "2001" },
        { label: "الخبرة المهنية", value: "أكثر من 25 عاماً" },
        {
          label: "مجال العمل",
          value: "الاستشارات الهندسية والتصميم المعماري والإشراف الهندسي",
        },
        {
          label: "المواقع",
          value:
            "الشارقة وعجمان، الإمارات العربية المتحدة، والخرطوم، السودان",
        },
        {
          label: "التخصصات",
          value:
            "الهندسة المعمارية والمدنية والإنشائية والميكانيكية والكهربائية، والتصميم الداخلي وإدارة المشاريع",
        },
      ]
    : [
        {
          label: "Company name",
          value: "Sabir Elsir Engineering Consultants",
        },
        { label: "Year established", value: "2001" },
        { label: "Professional experience", value: "More than 25 years" },
        {
          label: "Field",
          value:
            "Engineering consultancy, architectural design, and engineering supervision",
        },
        {
          label: "Locations",
          value:
            "Sharjah and Ajman, United Arab Emirates, and Khartoum, Sudan",
        },
        {
          label: "Specialties",
          value:
            "Architectural, civil, structural, mechanical, and electrical engineering; interior design; and project management",
        },
      ];
  return (
    <div className="home-page">
      {/* Articles Section */}

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title home-section-heading">
                  {i18n.language.startsWith("ar")
                    ? "خدمات التصميم المعماري والهندسة الإنشائية والإشراف الهندسي"
                    : "Architectural Design, Structural Engineering & Engineering Supervision Services"}
                </h2>
                <p className="card-text">
                  {i18n.language.startsWith("ar")
                    ? "تُعد شركة صابر السر للاستشارات الهندسية من شركات الاستشارات الهندسية العاملة في الشارقة وعجمان، بخبرة مهنية تمتد لأكثر من 25 عاماً منذ تأسيسها عام 2001. نقدم خدمات التصميم المعماري والهندسة الإنشائية والمدنية وهندسة الميكانيكا والكهرباء والسباكة (MEP)، إلى جانب التصميم الداخلي والتصميم ثلاثي الأبعاد وإدارة المشاريع والإشراف الهندسي. نعمل مع أصحاب المشاريع السكنية والتجارية والصناعية لتطوير حلول هندسية متكاملة تراعي متطلبات المشروع والمعايير الفنية والاشتراطات التنظيمية المعمول بها. كما نتابع تنسيق إجراءات اعتماد المخططات والتصاريح الهندسية لدى الجهات المختصة، بما في ذلك بلدية مدينة الشارقة وبلدية عجمان وهيئة كهرباء ومياه وغاز الشارقة (SEWA) والدفاع المدني، وفقاً لطبيعة المشروع ومتطلباته. هدفنا تقديم خدمات استشارية هندسية تجمع بين جودة التصميم والدقة الفنية وكفاءة التنفيذ، من مرحلة التخطيط والتصميم وحتى الإشراف على إنجاز المشروع."
                    : "Sabir Elsir Engineering Consultants is an engineering consultancy serving Sharjah and Ajman, with over 25 years of professional experience since its establishment in 2001. We provide architectural design, structural and civil engineering, mechanical, electrical, and plumbing (MEP) engineering, as well as interior and 3D design, project management, and engineering supervision. We work with residential, commercial, and industrial project owners to develop integrated engineering solutions that take project requirements, technical standards, and applicable regulations into account. We also coordinate drawing approvals and engineering permits with the relevant authorities, including Sharjah City Municipality, Ajman Municipality, Sharjah Electricity, Water and Gas Authority (SEWA), and Civil Defence, according to the nature and requirements of each project. Our aim is to provide consultancy services that combine design quality, technical accuracy, and efficient delivery, from planning and design through supervision of project completion."}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <section className="card-body engineering-consultants-qualifications">
                <h2 className="home-section-heading">
                  {i18n.language.startsWith("ar")
                    ? "استشارات هندسية للمشاريع السكنية والتجارية والصناعية"
                    : "Engineering Consultancy for Residential, Commercial & Industrial Projects"}
                </h2>
                <p className="card-text">
                  {i18n.language.startsWith("ar")
                    ? "نقدم في شركة صابر السر للاستشارات الهندسية مجموعة متكاملة من الخدمات الهندسية لتصميم وتطوير المباني السكنية والتجارية والصناعية في الشارقة وعجمان. تشمل خدماتنا إعداد المخططات المعمارية والإنشائية، والتصميم المدني وأنظمة الميكانيكا والكهرباء والسباكة، وتصميم الفلل والمباني التجارية، والتصميم الداخلي ثلاثي الأبعاد، إضافة إلى إدارة المشاريع والإشراف الهندسي على أعمال التنفيذ. نحرص على تنسيق مختلف التخصصات الهندسية ضمن رؤية متكاملة تساعد على تحقيق التوازن بين المتطلبات المعمارية والسلامة الإنشائية والوظائف التشغيلية وجودة التصميم. كما نولي اهتماماً خاصاً بمتطلبات الجهات التنظيمية وإجراءات اعتماد المخططات الهندسية، مع متابعة التنسيق الفني للمشاريع وفق الأنظمة والاشتراطات المحلية. سواء كنت تخطط لبناء فيلا سكنية أو تطوير مبنى تجاري أو تنفيذ مشروع صناعي، فإن فريقنا يقدم الخبرة الفنية والدعم الاستشاري اللازمين في مختلف مراحل المشروع."
                    : "At Sabir Elsir Engineering Consultants, we provide a range of integrated engineering services for the design and development of residential, commercial, and industrial buildings in Sharjah and Ajman. Our services include preparing architectural and structural drawings; civil design; mechanical, electrical, and plumbing systems; villa and commercial-building design; 3D interior design; project management; and engineering supervision during construction. We coordinate the different engineering disciplines within an integrated approach to help balance architectural requirements, structural safety, operational functions, and design quality. We also give particular attention to regulatory requirements and engineering-drawing approval procedures, coordinating project technical matters in accordance with local regulations. Whether you are planning a residential villa, developing a commercial building, or carrying out an industrial project, our team provides the technical expertise and consultancy support needed at each project stage."}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <section
        className="home-company-facts"
        aria-labelledby="home-company-facts-title"
        dir={isArabic ? "rtl" : "ltr"}
        lang={isArabic ? "ar" : "en"}
      >
        <section className="home-company-facts-group home-company-approvals">
          <h2 className="home-section-heading">
            {isArabic
              ? "خدمات اعتماد المخططات والتنسيق مع الجهات المختصة"
              : "Drawing Approval Services and Coordination with Relevant Authorities"}
          </h2>
          <dl className="home-company-facts-grid">
            <div className="home-company-fact" key={approvalFact.label}>
              <dt>{approvalFact.label}</dt>
              <dd>{approvalFact.value}</dd>
            </div>
          </dl>
        </section>
        <section className="home-company-facts-group">
          <h2 className="home-section-heading">
            {isArabic
              ? "خبرة هندسية تمتد لأكثر من 25 عاماً"
              : "More Than 25 Years of Engineering Experience"}
          </h2>
          <h3 id="home-company-facts-title" className="home-company-facts-title">
            {isArabic
              ? "تعرف على شركة صابر السر للاستشارات الهندسية"
              : "About Sabir Elsir Engineering Consultants"}
          </h3>
          <dl className="home-company-facts-grid">
            {companyFacts.map(({ label, value }) => (
              <div className="home-company-fact" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </section>

      <div className="container my-5">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="/images/modVilla2.jpg"
                className="card-img-top"
                alt="Modern Villa Design"
                loading="lazy"
                width={400}
                height={225}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {i18n.language.startsWith("ar")
                    ? "تصميم فلل عصرية في الشارقة وعجمان | تصميم معماري واستشارات هندسية متكاملة"
                    : "Modern Villa Design in Sharjah & Ajman | Integrated Architectural Design & Engineering Consultancy"}
                </h5>
                <p className="card-text">
                  {i18n.language.startsWith("ar")
                    ? "تقدم شركة صابر السر للاستشارات الهندسية خدمات تصميم الفلل السكنية في الشارقة وعجمان، من خلال إعداد مخططات معمارية وهندسية تجمع بين التصميم العصري والوظائف العملية ومتطلبات الحياة العائلية. تبدأ خدماتنا بدراسة متطلبات المالك وطبيعة الأرض وتخطيط المساحات الداخلية والخارجية، مروراً بتصميم الواجهات المعمارية والتفاصيل الجمالية، وإعداد المخططات الإنشائية وتنسيق أنظمة الميكانيكا والكهرباء والسباكة (MEP). كما نهتم بتصميم الفلل وفق احتياجات كل مشروع، مع مراعاة الخصوصية والاعتبارات المعمارية المحلية وكفاءة استخدام المساحات والإضاءة والتهوية الطبيعية. ويتولى فريقنا الهندسي تنسيق التخصصات المختلفة ومتابعة إجراءات اعتماد المخططات لدى الجهات البلدية المختصة وفق الاشتراطات المعمول بها في الشارقة وعجمان. سواء كنت تخطط لبناء فيلا عصرية أو منزل عائلي بتصميم خاص، نقدم لك خدمات استشارية هندسية متكاملة تبدأ من الفكرة والتصميم وتستمر حتى استكمال المخططات الهندسية المطلوبة للمشروع."
                    : "Sabir Elsir Engineering Consultants provides residential villa design services in Sharjah and Ajman, preparing architectural and engineering plans that combine contemporary design, practical functionality, and family living requirements. Our services begin with reviewing the owner's requirements and the characteristics of the plot, and planning indoor and outdoor spaces. They also include designing architectural facades and aesthetic details, preparing structural drawings, and coordinating mechanical, electrical, and plumbing (MEP) systems. We design villas to suit each project's needs, taking privacy, local architectural considerations, efficient use of space, and natural light and ventilation into account. Our engineering team coordinates the different disciplines and follows up on drawing approval procedures with the relevant municipal authorities in accordance with applicable requirements in Sharjah and Ajman. Whether you are planning a modern villa or a family home with a custom design, we provide integrated engineering consultancy from the initial concept and design through completion of the engineering drawings required for the project."}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="/images/P17-min.jpg"
                alt="Mosque"
                loading="lazy"
                className="card-img-top"
                width={400}
                height={225}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {i18n.language.startsWith("ar")
                    ? "تصميم مساجد في الشارقة وعجمان | استشارات هندسية ومعمارية متكاملة"
                    : "Mosque Design in Sharjah & Ajman | Integrated Architectural and Engineering Consultancy"}
                </h5>
                <p className="card-text">
                  {i18n.language.startsWith("ar")
                    ? "تقدم شركة صابر السر للاستشارات الهندسية خدمات التصميم المعماري والهندسي للمساجد في الشارقة وعجمان، مع الجمع بين أصالة العمارة الإسلامية ومتطلبات التصميم المعماري والإنشائي الحديث. تشمل خدماتنا إعداد المخططات المعمارية للمساجد، وتخطيط قاعات الصلاة ومواقع المحراب والمنبر، ومراعاة اتجاه القبلة وتوزيع المساحات المخصصة للمصلين ومرافق الوضوء. كما تشمل الأعمال التصميم الإنشائي للقباب والمآذن، وتنسيق أنظمة الميكانيكا والكهرباء والتكييف والتهوية والإضاءة والصوتيات، مع الاهتمام بمتطلبات السلامة وسهولة الوصول. نحرص على تنسيق مختلف التخصصات الهندسية وإعداد المخططات وفق متطلبات المشروع والاشتراطات التنظيمية المعمول بها، مع متابعة إجراءات الاعتماد لدى الجهات المختصة، بما في ذلك الجهات البلدية والأوقاف عند الاقتضاء. نسعى إلى تقديم تصاميم مساجد تجمع بين الهوية الإسلامية والوظائف العملية والجودة الهندسية، وتوفر بيئة مريحة ومناسبة للعبادة."
                    : "Sabir Elsir Engineering Consultants provides architectural and engineering design services for mosques in Sharjah and Ajman, combining the heritage of Islamic architecture with modern architectural and structural design requirements. Our services include preparing architectural mosque plans; planning prayer halls and the locations of the mihrab and minbar; and considering the qibla direction, the allocation of space for worshippers, and ablution facilities. The work also includes structural design for domes and minarets, and coordination of mechanical, electrical, air-conditioning, ventilation, lighting, and acoustics systems, with attention to safety and accessibility requirements. We coordinate the engineering disciplines and prepare drawings in accordance with project requirements and applicable regulations, while following up on approval procedures with the relevant authorities, including municipal and Awqaf authorities where applicable. We aim to provide mosque designs that bring together Islamic identity, practical functions, and engineering quality, and create a comfortable environment suitable for worship."}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="/images/re-min.jpg"
                loading="lazy"
                alt="Landscape Design"
                className="card-img-top"
                width={400}
                height={225}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {i18n.language.startsWith("ar")
                    ? "تصميم لاندسكيب وتنسيق حدائق في الشارقة وعجمان | استشارات هندسية للمناظر الطبيعية"
                    : "Landscape Design & Garden Planning in Sharjah & Ajman | Engineering Consultancy for Outdoor Spaces"}
                </h5>
                <p className="card-text">
                  {i18n.language.startsWith("ar") ? (
                    <>
                      تقدم شركة صابر السر للاستشارات الهندسية خدمات{" "}
                      <strong>
                        تصميم اللاندسكيب وتنسيق الحدائق والمناظر الطبيعية
                      </strong>{" "}
                      للمشاريع السكنية والتجارية في الشارقة وعجمان. تشمل خدماتنا
                      إعداد المخططات الهندسية للمساحات الخارجية، وتصميم الحدائق
                      المنزلية، وتخطيط المسطحات الخضراء، وتصميم الممرات والعناصر
                      المعمارية الخارجية (Hardscape)، وأنظمة الإضاءة الخارجية
                      والري. نحرص على دمج الجمال المعماري مع الحلول البيئية
                      المستدامة، من خلال اختيار النباتات المناسبة للمناخ المحلي
                      وتوظيف أنظمة الري الموفرة للمياه، بما يساعد على تقليل
                      استهلاك الموارد وتكاليف الصيانة. كما نراعي التنسيق بين
                      تصميم المناظر الطبيعية والمباني والمرافق المحيطة، مع
                      مراعاة الاشتراطات البلدية والفنية المعمول بها. هدفنا تطوير
                      مساحات خارجية عملية وجذابة تعزز جودة البيئة المحيطة والقيمة
                      الجمالية للعقار.
                    </>
                  ) : (
                    "Sabir Elsir Engineering Consultants provides landscape design, garden planning, and natural-landscape services for residential and commercial projects in Sharjah and Ajman. Our services include preparing engineering plans for outdoor spaces; designing home gardens; planning green areas; designing walkways and outdoor architectural features (hardscape); and outdoor lighting and irrigation systems. We combine architectural aesthetics with sustainable environmental solutions by selecting plants suited to the local climate and using water-efficient irrigation systems, helping reduce resource consumption and maintenance costs. We also coordinate landscape design with surrounding buildings and facilities, taking applicable municipal and technical requirements into account. Our aim is to develop practical, attractive outdoor spaces that enhance the surrounding environment and the property's aesthetic value."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
