import { Youtube, MessageCircle, MessageSquare, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">أكاديمية الأكواد</h4>
            <p className="text-sm opacity-90">منصة تعليمية متخصصة في تعليم البرمجة وتطوير الويب</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">الروابط السريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#courses" className="hover:opacity-80 transition">
                  الدروس
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:opacity-80 transition">
                  التخصصات
                </a>
              </li>
              <li>
                <a href="#instructor" className="hover:opacity-80 transition">
                  المدرب
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">الدعم</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  الدعم الفني
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  سياسة الخصوصية
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">متابعونا</h4>
            <div className="flex gap-3">
              <a
                href="https://www.youtube.com/channel/UChYOfUMgT20CkftUZ7AOwlQ"
                className="hover:opacity-80 transition"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://t.me/+8EyGjRpVVx9lMGY0" className="hover:opacity-80 transition">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://whatsapp.com/channel/0029VbBJXzP96H4LRpSAhE3M" className="hover:opacity-80 transition">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/1DZR4ykVLL/" className="hover:opacity-80 transition">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>© {new Date().getFullYear()} أكاديمية الأكواد - جميع الحقوق محفوظة | ACode Academy</p>
          <p className="mt-2">من إنجاز عبدالرحمن محمد لطفي</p>
        </div>
      </div>
    </footer>
  )
}
