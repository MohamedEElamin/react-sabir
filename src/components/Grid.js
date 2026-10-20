import "../styles/Cards.css";
import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/VideoWatchPage.css";

function Grid() {
  const { t, i18n } = useTranslation();
  return (
    <div className="home-page">
      {/* Articles Section */}

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">
                  {i18n.language.startsWith("ar")
                    ? "تعاون مع نخبة الاستشاريين الهندسيين لحلول مبتكرة وقابلة للتوسع"
                    : "Partner with Industry-Leading Engineering Consultants for Innovative, Scalable Solutions"}
                </h2>
                <p className="card-text">
                  {i18n.language.startsWith("ar")
                    ? "بصفتنا من شركات الاستشارات الهندسية الرائدة في الشارقة وعجمان، نقدم حلولاً متكاملة للمشاريع من بدايتها حتى إنجازها، مع خدمات التصميم الهندسي واستيفاء متطلبات الاعتماد لدى بلديتي الشارقة وعجمان. يضم فريقنا متعدد التخصصات خبراء في التصميم المعماري والهندسة الإنشائية وهندسة الميكانيكا والكهرباء والسباكة والهندسة المدنية، لخدمة مشاريع المباني التجارية والفلل. كما نقدم التصميم الداخلي وإدارة المشاريع، ونتابع إجراءات الموافقات لدى الجهات المختصة، بما في ذلك شهادات عدم الممانعة من هيئة كهرباء ومياه وغاز الشارقة ومتطلبات الدفاع المدني. ويتولى فريقنا المعتمد تنسيق خدمات التصميم والإشراف الهندسي ومتابعة تنفيذ الأعمال في الشارقة وعجمان، من مرحلة التخطيط وحتى اكتمال المشروع."
                    : "As one of the best engineering consultants in Sharjah and a leading engineering consultancy in Ajman, our firm delivers complete solutions from project planning through completion, including engineering design and approval requirements for Sharjah and Ajman municipalities. Our multidisciplinary team includes architectural, structural, MEP, and civil engineering consultants, supporting commercial building and villa projects. We also provide interior design and project management, and coordinate authority approvals, including SEWA no-objection certificates and Civil Defence requirements. Our team provides engineering design and construction supervision in Sharjah and Ajman, guiding each project from its initial plans through completion."}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <section className="card-body engineering-consultants-qualifications">
                <h2>
                  {i18n.language.startsWith("ar")
                    ? "أفضل شركات الاستشارات الهندسية في الشارقة، عجمان، والخرطوم: كيف تختار المستشار المناسب؟"
                    : "How to choose an engineering consultant in Sharjah, Ajman, or Khartoum"}
                </h2>
                <p className="card-text">
                  {i18n.language.startsWith("ar")
                    ? "عند البحث عن أفضل مكتب استشارات هندسية في الشارقة أو عجمان أو الخرطوم، لا تكفي العروض التسويقية والشعارات البراقة لضمان نجاح مشروعك. ابحث عن مؤهلات مهنية واعتمادات أكاديمية موثقة، إلى جانب خبرة عملية مناسبة لنطاق المشروع ومتطلبات الجهة المحلية."
                    : "When looking for an engineering consultancy in Sharjah, Ajman, or Khartoum, polished marketing alone cannot establish whether a firm is right for your project. Review verifiable professional credentials and academic qualifications alongside relevant project experience and local authority requirements."}
                </p>

                <h3>
                  {i18n.language.startsWith("ar")
                    ? "المؤهلات الأساسية التي يجب أن يمتلكها مستشارك الهندسي"
                    : "Key qualifications to look for in an engineering consultant"}
                </h3>
                <p className="card-text">
                  {i18n.language.startsWith("ar")
                    ? "قد تساعد الشهادات والاعتمادات المهنية على توضيح خبرة الفريق، لكنها لا تغني عن التحقق من الترخيص المحلي المناسب لكل مشروع. من المؤهلات التي يمكنك الاستفسار عنها:"
                    : "Credentials can help you understand a team’s training and expertise, but they do not replace checking the local registration required for your specific project. Ask whether the team includes professionals with qualifications such as:"}
                </p>
                <ul className="qualification-list">
                  <li>
                    <strong>
                      {i18n.language.startsWith("ar")
                        ? "رخصة مهندس محترف (Professional Engineer - PE): "
                        : "Professional Engineer (PE) licence: "}
                    </strong>
                    {i18n.language.startsWith("ar")
                      ? "مؤهل مهني يُظهر استيفاء متطلبات الترخيص في الجهة التي أصدرته؛ تحقق من الاعتراف به ومتطلبات التسجيل لدى البلدية أو الجهة المختصة بالمشروع."
                      : "A professional credential indicating that its holder met the licensing requirements of the issuing jurisdiction. Confirm local recognition and registration requirements with the project authority."}
                  </li>
                  <li>
                    <strong>
                      {i18n.language.startsWith("ar")
                        ? "شهادة محترف إدارة المشاريع (PMP®): "
                        : "Project Management Professional (PMP®) certification: "}
                    </strong>
                    {i18n.language.startsWith("ar")
                      ? "شهادة مهنية في إدارة المشاريع، ترتبط بمهارات تخطيط النطاق والوقت والتكلفة والمخاطر."
                      : "A project-management credential covering practices used to plan and manage scope, schedules, cost, and risk."}
                  </li>
                  <li>
                    <strong>
                      {i18n.language.startsWith("ar")
                        ? "درجة الماجستير في تخصص هندسي (MSc): "
                        : "A master’s degree in an engineering discipline (MSc): "}
                    </strong>
                    {i18n.language.startsWith("ar")
                      ? "قد تعكس دراسة متقدمة وتخصصاً في مجالات مثل الهندسة المدنية أو المعمارية أو إدارة الإنشاءات."
                      : "May demonstrate advanced study and specialization in areas such as civil, architectural, or construction-management engineering."}
                  </li>
                  <li>
                    <strong>
                      {i18n.language.startsWith("ar")
                        ? "درجة الدكتوراه (PhD): "
                        : "A doctorate (PhD): "}
                    </strong>
                    {i18n.language.startsWith("ar")
                      ? "تعكس بحثاً أكاديمياً متقدماً في مجال التخصص، وقد تكون ذات صلة بالمسائل الهندسية المعقدة أو الابتكار."
                      : "Represents advanced academic research in a specialist field and may be relevant to complex engineering questions or innovation."}
                  </li>
                </ul>

                <h3>
                  {i18n.language.startsWith("ar")
                    ? "لماذا تُعد هذه المؤهلات مهمة لمشروعك؟"
                    : "Why do these qualifications matter for your project?"}
                </h3>
                <p className="card-text">
                  {i18n.language.startsWith("ar")
                    ? "المؤهلات المهنية والدرجات العلمية توثق جانباً من التدريب والخبرة، وتساعدك على تقييم قدرة الفريق على دراسة التحديات والتواصل بشأن الحلول. قيّمها مع سجل المشاريع ذات الصلة، وخطة ضبط الجودة، ومتطلبات السلامة والأنظمة المحلية؛ فالمؤهل وحده لا يضمن نتيجة المشروع."
                    : "Professional credentials and academic degrees document aspects of a team’s training and experience. Consider them alongside relevant project history, quality-control processes, safety practices, and local regulations; a credential alone cannot guarantee a project outcome."}
                </p>

                <aside className="qualification-tip">
                  <strong>
                    {i18n.language.startsWith("ar")
                      ? "نصيحة خبراء الهندسة: "
                      : "Engineering tip: "}
                  </strong>
                  {i18n.language.startsWith("ar")
                    ? "قبل التعاقد مع شركة استشارات هندسية في الإمارات (الشارقة أو عجمان) أو السودان (الخرطوم)، اطلب السيرة الذاتية للمستشار المشرف وفريق المشروع، وتحقق من التراخيص والاعتمادات لدى الجهات المعنية."
                    : "Before hiring an engineering consultancy in Sharjah, Ajman, or Khartoum, ask for the CVs of the project lead and team, and verify their licences and credentials with the relevant authorities."}
                </aside>
              </section>
            </div>
          </div>
        </div>
      </div>

      <section className="home-video-promo">
        <Link
          className="home-video-thumbnail"
          to="/videos/modern-villa-design"
          aria-label={
            i18n.language.startsWith("ar")
              ? "شاهد فيديو تصميم فيلا حديثة"
              : "Watch the modern villa design video"
          }
        >
          <img
            src="https://i.ytimg.com/vi/kDAkQ_-998s/hqdefault.jpg"
            alt={
              i18n.language.startsWith("ar")
                ? "صورة مصغرة لفيديو تصميم فيلا حديثة"
                : "Thumbnail for the modern villa design video"
            }
            loading="lazy"
            width="480"
            height="360"
          />
          <span className="home-video-play" aria-hidden="true">
            ▶
          </span>
        </Link>
        <div className="home-video-copy">
          <p className="home-video-eyebrow">
            {i18n.language.startsWith("ar") ? "من أعمالنا" : "Project video"}
          </p>
          <h2>
            {i18n.language.startsWith("ar")
              ? "تصميم فيلا حديثة"
              : "Modern Villa Design"}
          </h2>
          <p>
            {i18n.language.startsWith("ar")
              ? "شاهد عرضاً لتصميم فيلا حديثة من صابر السر للاستشارات الهندسية."
              : "Watch a modern villa design presentation by Sabir Elsir Engineering Consultants."}
          </p>
          <Link
            className="home-video-watch-link"
            to="/videos/modern-villa-design"
          >
            {i18n.language.startsWith("ar") ? "شاهد الفيديو" : "Watch video"}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <div className="container my-5">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="images/modVilla2.jpg"
                className="card-img-top"
                alt="Modern Villa Design"
                loading="eager"
                width={400}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {i18n.language.startsWith("ar")
                    ? "تصميم فلل عصرية في الشارقة وعجمان | استشارات هندسية معمارية"
                    : "Premier Modern Villa Design Services in Sharjah & Ajman | Expert Architectural Engineering"}
                </h5>
                <p className="card-text">
                  {i18n.language.startsWith("ar")
                    ? "اكتشف أسلوب الحياة الفاخر مع خدمات تصميم الفلل العصرية حسب الطلب، المصممة للمشاريع السكنية في الشارقة وعجمان. بصفتنا مكتب استشارات هندسية في الإمارات، نمزج الاتجاهات المعمارية الحديثة وممارسات البناء المستدامة والأناقة العملية لإنشاء منازل مميزة ومراعية للبيئة. من الفكرة الأولية وتخطيط المساحات إلى موافقات البلدية والتصميم الإنشائي، ينسق فريقنا الهندسي والمعماري التصاميم بما يتوافق مع احتياجاتك وكود البناء والاعتبارات الثقافية المحلية. تواصل مع مستشارينا في الشارقة وعجمان لتحويل أرضك إلى منزل عصري مصمم للراحة والقيمة طويلة الأمد."
                    : "Discover luxury living with our bespoke modern villa design services, tailored specifically for high-end residential projects across Sharjah and Ajman. As a trusted engineering consultancy in the UAE, we blend contemporary architectural trends, sustainable building practices, and functional elegance to craft visually striking, eco-friendly homes. From initial concept and space planning to local municipal authority approvals and structural engineering, our engineering and architecture team coordinates designs with UAE building codes and local cultural considerations. Contact our Sharjah and Ajman engineering consultants today to turn your plot into a custom modern sanctuary designed for luxury, comfort, and long-term value."}
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
                loading="eager "
                className="card-img-top"
                width={400}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {i18n.language.startsWith("ar")
                    ? "تصميم مساجد معمارية هادفة في الشارقة وعجمان | خدمات استشارات هندسية متكاملة"
                    : "Purposeful Mosque Design in Sharjah & Ajman | Integrated Engineering Consultancy"}
                </h5>
                <p className="card-text">
                  {i18n.language.startsWith("ar") ? (
                    <>
                      بصفتنا مكتب استشارات هندسية يخدم الشارقة وعجمان، نقدم
                      خدمات <strong>تصميم مساجد</strong> تجمع بين أصالة العمارة
                      الإسلامية والحلول الهندسية الحديثة. نراعي اتجاه القبلة
                      والصوتيات الداخلية وتوزيع الإضاءة الطبيعية لتهيئة أجواء
                      روحانية هادئة. وينسق فريقنا مراحل المشروع، من التصميم
                      المعماري والإنشائي للقباب والمآذن إلى تجهيز معاملات
                      الاعتماد لدى الجهات الحكومية والجهات المختصة بالأوقاف في
                      الشارقة وعجمان، بحسب متطلبات المشروع. تواصل مع فريقنا
                      الهندسي لمناقشة تصميم مسجد مستدام يعكس قيم المجتمع ويراعي
                      متطلبات العبادة.
                    </>
                  ) : (
                    "As an engineering consultancy serving Sharjah and Ajman, we provide purposeful mosque design that brings together Islamic architectural heritage and modern engineering solutions. Our team considers qibla orientation, interior acoustics, and natural lighting to support a calm spiritual environment. We coordinate project stages from architectural and structural design for domes and minarets to preparing approval submissions for relevant government and Awqaf authorities in Sharjah and Ajman, as applicable to the project. Contact our engineering team to discuss a sustainable mosque design that reflects community values and supports the needs of worshippers."
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="/images/re-min.jpg"
                loading="eager"
                alt="Landscape Design"
                className="card-img-top"
                width={400}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {i18n.language.startsWith("ar")
                    ? "تصميم مناظر طبيعية ولاندسكيب في الشارقة وعجمان | خدمات هندسية خارجية مستدامة"
                    : "Landscape Design in Sharjah & Ajman | Sustainable Outdoor Engineering"}
                </h5>
                <p className="card-text">
                  {i18n.language.startsWith("ar") ? (
                    <>
                      نقدم في مكتبنا للاستشارات الهندسية حلولاً متطورة في{" "}
                      <strong>تصميم المناظر الطبيعية (اللاندسكيب)</strong>{" "}
                      للمشاريع السكنية والتجارية والعامة في الشارقة وعجمان. يدمج
                      مهندسونا بين الجمال المعماري والممارسات البيئية المستدامة،
                      من خلال الري الذكي واختيار النباتات الملائمة للمناخ الجاف
                      في الإمارات للمساعدة على تقليل استهلاك المياه. تشمل
                      خدماتنا تخطيط الحدائق وتصميم العناصر الصلبة (Hardscape)
                      وأنظمة الإضاءة الخارجية والمسطحات المائية، مع مراعاة
                      المعايير والاشتراطات البلدية المحلية. تواصل مع خبراء
                      اللاندسكيب لدينا لتحويل مساحتك الخارجية إلى بيئة جذابة
                      تعزز قيمة عقارك وتلبي تطلعاتك.
                    </>
                  ) : (
                    "Our engineering consultancy provides landscape design services for residential, commercial, and public projects in Sharjah and Ajman. We combine architectural quality with sustainable practices, including smart irrigation and climate-appropriate plant selection to help reduce water use in the UAE's arid climate. Our services include garden planning, hardscape design, outdoor lighting, and water features, with consideration for applicable local municipal standards. Contact our landscape design team to create an attractive outdoor space that supports your needs and adds value to your property."
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
