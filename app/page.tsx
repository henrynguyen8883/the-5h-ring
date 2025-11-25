import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-300 font-sans selection:bg-amber-900 selection:text-white">
      {/* --- HEADER --- */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-widest text-amber-500 uppercase">
            The 5th Ring
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium tracking-wide">
            <Link href="#" className="hover:text-amber-500 transition-colors">Philosophy</Link>
            <Link href="#" className="hover:text-amber-500 transition-colors">Videos</Link>
            <Link href="https://youtube.com/@THE5THRING" target="_blank" className="text-amber-500 border border-amber-500 px-4 py-1 hover:bg-amber-500 hover:text-black transition-all">
              Subscribe
            </Link>
          </nav>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center">
        {/* Hiệu ứng nền mờ (Glow effect) */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-amber-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        {/* Avatar Kênh */}
        <div className="relative w-32 h-32 mb-8 rounded-full overflow-hidden border-2 border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.3)] bg-zinc-900 flex items-center justify-center">
           {/* Placeholder Avatar - Bạn có thể thay bằng thẻ Image sau khi có ảnh */}
           <span className="text-amber-700 font-bold text-4xl">5R</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Are you truly living, <br/> or just <span className="text-amber-500 italic font-serif">existing?</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          Where Eastern wisdom and Warrior discipline combine. <br/>
          Welcome to the dojo of the mind.
        </p>

        <div className="flex gap-4">
          <a href="https://youtube.com/@THE5THRING" target="_blank" className="bg-amber-600 text-black px-8 py-3 font-bold uppercase tracking-wider hover:bg-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300">
            Join The Order
          </a>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION (Manifesto) --- */}
      <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
        {/* Decorative Background Text (Chữ chìm trang trí) */}
        <div className="absolute top-10 left-0 w-full text-center pointer-events-none opacity-5">
          <span className="text-[10rem] md:text-[15rem] font-bold uppercase tracking-tighter text-white">
            Bushido
          </span>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              The Way of <span className="text-amber-600">Iron & Soul</span>
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="space-y-12 font-serif text-lg md:text-xl text-zinc-400 leading-relaxed">
            {/* Paragraph 1: The Jungian Shadow */}
            <div className="border-l-2 border-amber-600/30 pl-6">
              <h3 className="text-amber-500 font-sans font-bold text-sm uppercase tracking-widest mb-2">01. The Shadow</h3>
              <p>
                "A man without a shadow is not a saint, he is only a naive child. 
                As Carl Jung said: <em className="text-zinc-300">‘I'd rather be whole than good.’</em> 
                We do not teach you to be harmless. We teach you to become a monster, and then learn to control it. 
                Only when you are capable of destruction, yet choose peace, are you truly virtuous."
              </p>
            </div>

            {/* Paragraph 2: The Samurai Discipline */}
            <div className="border-l-2 border-amber-600/30 pl-6">
              <h3 className="text-amber-500 font-sans font-bold text-sm uppercase tracking-widest mb-2">02. The Blade</h3>
              <p>
                Modern society is designed to sedate you with comfort and cheap dopamine. 
                To escape the drift, you must live as a <span className="text-zinc-300 italic">Ronin</span> in the digital age. 
                Sever the distractions. Sharpen the mind. 
                Live with Death sitting on your left shoulder.
              </p>
            </div>

            {/* Paragraph 3: The 5 Rings */}
            <div className="border-l-2 border-amber-600/30 pl-6">
              <h3 className="text-amber-500 font-sans font-bold text-sm uppercase tracking-widest mb-2">03. The 5 Rings</h3>
              <ul className="mt-4 space-y-4 font-sans text-base">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold min-w-[80px]">I. Earth:</span>
                  <span>Building an unshakeable physical foundation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold min-w-[80px]">II. Water:</span>
                  <span>Emotional fluidity. Adaptability in chaos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold min-w-[80px]">III. Fire:</span>
                  <span>Ferocious intensity. Action over hesitation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold min-w-[80px]">IV. Wind:</span>
                  <span>Strategic wisdom and intellectual dominance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold min-w-[80px]">V. Void:</span>
                  <span>No-Mind (Mushin). Pure instinct. The Flow State.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-zinc-500 italic mb-6">"Civilize the mind, but make savage the body."</p>
             <span className="inline-block w-2 h-2 rounded-full bg-amber-600"></span>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 text-center text-gray-600 text-sm border-t border-white/5 bg-zinc-950">
        <p>&copy; 2024 The 5th Ring.</p>
        <p className="mt-2 text-xs uppercase tracking-widest opacity-50">Discipline is Destiny</p>
      </footer>
    </main>
  );
}