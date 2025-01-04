import React from "react";
import { Link } from "react-router-dom";
import "./footerstyle.css";

function Footer() {
  return (
    <footer className="all">
      <div className="box">
        <div className="brands">
          <img src="./BRANDS/apple.jpeg" alt="Apple" />
          <img src="/brands/asus.jpg" alt="Asus" />
          <img src="/brands/canon.png" alt="Canon" />
          <img src="/brands/hp.png" alt="HP" />
          <img src="/brands/intel.png" alt="Intel" />
          <img src="/brands/jbl.jpeg" alt="JBL" />
          <img src="/brands/lenovo.jpg" alt="Lenovo" />
          <img src="/brands/marvo.png" alt="Marvo" />
          <img src="/brands/MEE TIION.png" alt="MeeTiion" />
          <img src="./BRANDS/msi.png" alt="MSI" />
          <img src="/brands/playstation.jpg" alt="PlayStation" />
          <img src="/brands/xbox.png" alt="Xbox" />
        </div>
      </div>

      <div className="features">
        <section>
          <img src="/car.png" alt="توصيل سريع" />
          <div>
            <h2>توصيل سريع</h2>
            <p>توصيل من يوم إلى ثلاثة أيام لجميع المناطق</p>
          </div>
        </section>

        <section>
          <img src="/doller.png" alt="الدفع عند الاستلام" />
          <div>
            <h2>الدفع نقدا عند التسليم</h2>
            <p>يمكنك الدفع عند استلام الطلب</p>
          </div>
        </section>

        <section>
          <img src="/headsett.png" alt="دعم فني" />
          <div>
            <h2>دعم فني 12 ساعة خلال اليوم</h2>
            <p>متاح رسائل ومكالمات لراحتكم</p>
          </div>
        </section>

        <section>
          <img src="/shild.png" alt="كفالة" />
          <div>
            <h2>كفالة مضمونة</h2>
            <p>الكفالة الرسمية لجميع المنتجات مضمونة</p>
          </div>
        </section>
      </div>

      <div className="footer">
        <section className="we">
          <img src="/pict.jpg" alt="MTC electronics store" width="200px" height="200" />
          <p>الموقع: نابلس - عورتا - وسط البلد - مبنى ابو عودة التجاري</p>
          <p>mtcgaming177@gmail.com</p>
          <p>+970599880618</p>
          <a
            href="https://www.facebook.com/mtcelectronicsandcomputers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Facebook-Logo-PNG-Isolated-HD.png" alt="شعار فيسبوك" width="50" height="50" />
          </a>
          <a href="https://www.instagram.com/mtcforgaming/" target="_blank" rel="noopener noreferrer">
            <img src="/Instagram_logo_2016.svg.png" alt="شعار انستجرام" width="50" height="50" />
          </a>
          <a href="https://www.tiktok.com/@mtcforgaming" target="_blank" rel="noopener noreferrer">
            <img src="/tiktok.jpg" alt="شعار تيك توك" width="50" height="50" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=%2B970599880618"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/whatsapp.jpg" alt="شعار واتساب" width="50" height="50" />
          </a>
        </section>

        <section className="information">
          <h2>معلومات</h2>
          <Link to="/who-we-are">من نحن</Link>
          <br />
          <Link to="/contact">اتصل بنا</Link>
        </section>

        <section className="help">
          <h1>مساعدة</h1>
          <Link to="/signin">حسابي</Link>
          <br />
          <Link to="/shopping-cart">عربة التسوق</Link>
          <br />
          <Link to="/refund-policy">استرجاع أو استرداد</Link>
          <br />
          <Link to="/privacy-policy">سياسة الخصوصية</Link>
          <br />
          <Link to="/terms-and-conditions">الأحكام والشروط</Link>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
