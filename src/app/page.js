"use client";

import { useState } from "react";

export default function Page() {
  const [activeSection, setActiveSection] = useState("Bab 1 - Pendahuluan");

  // Data Dummy Skripsi Asli
  const sections = [
    {
      id: "bab1",
      title: "Bab 1 - Pendahuluan",
      content: `
        1.1 Latar Belakang
        Dalam era globalisasi, produktivitas karyawan menjadi faktor utama dalam kesuksesan perusahaan. 
        Penelitian ini bertujuan untuk mengkaji pengaruh kepemimpinan dan budaya organisasi terhadap produktivitas kerja.

        1.2 Rumusan Masalah
        - Bagaimana pengaruh kepemimpinan terhadap produktivitas kerja?
        - Bagaimana budaya organisasi mempengaruhi motivasi karyawan?

        1.3 Tujuan Penelitian
        - Mengidentifikasi hubungan antara kepemimpinan dan produktivitas kerja.
        - Menjelaskan pengaruh budaya organisasi terhadap motivasi dan kinerja karyawan.

        1.4 Manfaat Penelitian
        - Akademis: Sebagai referensi bagi penelitian selanjutnya dalam bidang perilaku organisasi.
        - Praktis: Memberikan rekomendasi kepada perusahaan untuk meningkatkan efektivitas kepemimpinan.`,
    },
    {
      id: "bab2",
      title: "Bab 2 - Tinjauan Pustaka",
      content: `
        2.1 Teori Kepemimpinan (Bass, 1990)
        Kepemimpinan transformasional dapat meningkatkan motivasi dan kinerja karyawan melalui inspirasi dan pengaruh positif.

        2.2 Teori Motivasi (Maslow, 1943)
        Kebutuhan manusia dikategorikan dalam lima tingkatan: fisiologis, keamanan, sosial, penghargaan, dan aktualisasi diri.

        2.3 Teori Budaya Organisasi (Hofstede, 1991)
        Budaya organisasi yang kuat berperan dalam meningkatkan loyalitas dan kepuasan kerja.

        2.4 Penelitian Terdahulu
        - Studi oleh Robbins (2015) menemukan bahwa kepemimpinan yang baik dapat meningkatkan produktivitas hingga 20%.
        - Penelitian oleh Luthans (2018) menunjukkan bahwa budaya organisasi yang kuat berkontribusi pada tingkat retensi karyawan yang lebih tinggi.`,
    },
    {
      id: "bab3",
      title: "Bab 3 - Metodologi Penelitian",
      content: `
        3.1 Desain Penelitian
        Penelitian ini menggunakan metode kuantitatif dengan pendekatan survei melalui kuesioner.

        3.2 Populasi dan Sampel
        Sampel penelitian terdiri dari 150 karyawan di tiga perusahaan manufaktur di Indonesia.

        3.3 Teknik Pengumpulan Data
        - Kuesioner: Mengukur variabel kepemimpinan, motivasi, dan produktivitas kerja.
        - Wawancara: Untuk mendapatkan perspektif tambahan dari manajer perusahaan.

        3.4 Teknik Analisis Data
        Data dianalisis menggunakan metode regresi linier dengan bantuan software SPSS.`,
    },
    {
      id: "bab4",
      title: "Bab 4 - Hasil Penelitian dan Pembahasan",
      content: `
        4.1 Hasil Uji Statistik
        - Kepemimpinan transformasional memiliki korelasi positif dengan produktivitas kerja (r = 0.78).
        - Budaya organisasi memiliki hubungan signifikan dengan motivasi kerja (p-value < 0.05).

        4.2 Pembahasan
        Hasil penelitian menunjukkan bahwa kepemimpinan yang baik dapat meningkatkan produktivitas kerja karyawan. 
        Selain itu, budaya organisasi yang kuat memberikan dampak positif terhadap kepuasan dan loyalitas karyawan.`,
    },
    {
      id: "bab5",
      title: "Bab 5 - Kesimpulan dan Saran",
      content: `
        5.1 Kesimpulan
        - Kepemimpinan transformasional memiliki dampak positif terhadap produktivitas kerja.
        - Budaya organisasi yang kuat dapat meningkatkan loyalitas dan motivasi karyawan.

        5.2 Saran
        - Perusahaan perlu meningkatkan program pelatihan kepemimpinan bagi manajer.
        - Perusahaan disarankan untuk menciptakan budaya kerja yang lebih terbuka dan kolaboratif untuk meningkatkan keterlibatan karyawan.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-10 bg-white shadow-md p-4">
        <nav className="flex justify-around overflow-x-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`px-4 py-2 rounded-md ${
                activeSection === section.title ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveSection(section.title)}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </header>

      {/* Konten Skripsi */}
      <main className="p-6">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="mt-6">
            {activeSection === section.title && (
              <>
                <h2 className="text-2xl font-bold">{section.title}</h2>
                <p className="text-gray-700 whitespace-pre-line mt-2">{section.content}</p>
                <div className="h-40 bg-gray-50 p-4 rounded-md mt-4">
                  <p className="text-gray-600">[Tambahan konten untuk uji scrolling...]</p>
                </div>
              </>
            )}
          </section>
        ))}
      </main>
    </div>
  );
}
