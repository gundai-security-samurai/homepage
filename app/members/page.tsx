import Container from "@/components/layout/container";
import Image from "next/image";

export default async function Home() {
  return (
    <Container className="mt-[80px]" maxWidth="lg">
      <div className="flex justify-end">
        <div className="relative h-16 w-32 md:h-20 md:w-64 shrink-0">
          <Image
            fill
            src="/Member.png"
            alt="member"
            className="object-contain"
          />
        </div>
      </div>
      <div className="bg-white rounded-2xl px-6 py-8">
        <h2 className="text-4xl font-bold">Project Member</h2>
        <div className="mt-10"></div>
        <h2 className="text-4xl font-semibold">Product Owner</h2>
        <div className="mt-4"></div>
        <div className="bg-neutral-300 rounded-2xl p-4 flex gap-4">
          <div className="relative w-20 h-28 mt-5 shrink-0">
            <Image
              fill
              src="/Members/Takaoka.png"
              alt="Takaoka"
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-3xl font-semibold">
              高岡史弥
              <span className="text-xl">　群馬大学情報学部　人文情報PG</span>
            </h4>
            <div className="ms-5 mt-6 text-xl grid grid-cols-[110px,10px,2fr] text-start">
              <h5>担当</h5>
              <p>:</p>
              <ul>
                <li>デザイン</li>
              </ul>
              <h5>趣味</h5>
              <p>:</p>
              <ul>
                <li>フォントを見ること、音楽</li>
              </ul>
              <h5>Address</h5>
              <p>:</p>
              <ul>
                <li>j2200088@gunma-u.ac.jp</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10"></div>
        <h2 className="text-4xl font-semibold">Scrum Master</h2>
        <div className="mt-4"></div>
        <div className="bg-neutral-300 rounded-2xl p-4 flex gap-4">
          <div className="relative w-20 h-28 mt-5 shrink-0">
            <Image
              fill
              src="/Members/Nishizaki.png"
              alt="Nishizaki"
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-3xl font-semibold">
              西崎伽音
              <span className="text-xl">　群馬大学情報学部　社会共創PG</span>
            </h4>
            <div className="ms-5 mt-6 text-xl grid grid-cols-[110px,10px,2fr] text-start">
              <h5>担当</h5>
              <p>:</p>
              <ul>
                <li>ホームページデザイン、成果発表資料作成</li>
              </ul>
              <h5>趣味</h5>
              <p>:</p>
              <ul>
                <li>温泉地巡り</li>
              </ul>
              <h5>Address</h5>
              <p>:</p>
              <ul>
                <li>j2200121@gunma-u.ac.jp</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10"></div>
        <h2 className="text-4xl font-semibold">Developer</h2>
        <div className="mt-4"></div>
        <div className="bg-neutral-300 rounded-2xl p-4 flex gap-4">
          <div className="relative w-20 h-28 mt-5 shrink-0">
            <Image
              fill
              src="/Members/Aoyama.png"
              alt="Aoyama"
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-3xl font-semibold">
              青山和樹
              <span className="text-xl">　群馬大学情報学部　計算機科学PG</span>
            </h4>
            <div className="ms-5 mt-6 text-xl grid grid-cols-[110px,10px,2fr] text-start">
              <h5>担当</h5>
              <p>:</p>
              <ul>
                <li>アプリ実装</li>
              </ul>
              <h5>趣味</h5>
              <p>:</p>
              <ul>
                <li>プログラミング、アニメ、絵を描く</li>
              </ul>
              <h5>Address</h5>
              <p>:</p>
              <ul>
                <li>j2200002@gunma-u.ac.jp</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10"></div>
        <div className="bg-neutral-300 rounded-2xl p-4 flex gap-4">
          <div className="relative w-20 h-28 mt-5 shrink-0">
            <Image
              fill
              src="/Members/Sawada.png"
              alt="Sawada"
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-3xl font-semibold">
              澤田真梨菜
              <span className="text-xl">　群馬大学情報学部　計算機科学PG</span>
            </h4>
            <div className="ms-5 mt-6 text-xl grid grid-cols-[110px,10px,2fr] text-start">
              <h5>担当</h5>
              <p>:</p>
              <ul>
                <li>ホームページ設計</li>
              </ul>
              <h5>趣味</h5>
              <p>:</p>
              <ul>
                <li>映画、編み物、スイーツ</li>
              </ul>
              <h5>Address</h5>
              <p>:</p>
              <ul>
                <li>j2200078@gunma-u.ac.jp</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10"></div>
        <div className="bg-neutral-300 rounded-2xl p-4 flex gap-4">
          <div className="relative w-20 h-28 mt-5 shrink-0">
            <Image
              fill
              src="/Members/Fujita.png"
              alt="Fujita"
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-3xl font-semibold">
              藤田千都
              <span className="text-xl">　群馬大学情報学部　データサイエンスPG</span>
            </h4>
            <div className="ms-5 mt-6 text-xl grid grid-cols-[110px,10px,2fr] text-start">
              <h5>担当</h5>
              <p>:</p>
              <ul>
                <li>ホームページ設計</li>
              </ul>
              <h5>趣味</h5>
              <p>:</p>
              <ul>
                <li>音楽、ゲーム</li>
              </ul>
              <h5>Address</h5>
              <p>:</p>
              <ul>
                <li>j2200137@gunma-u.ac.jp</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
