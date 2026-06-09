const ANIMALS = [
  {
    id:"harimau-sumatera", name:"Harimau Sumatera", latin:"Panthera tigris sumatrae",
    status:"Kritis", statusClass:"kritis", location:"Sumatera",
    image:"assets/images/harimau-sumatera.png", audio:"harimau sumatra.aac",
    populasi:"~400 ekor",
    habitat:"Hutan hujan tropis dataran rendah hingga pegunungan di Pulau Sumatera.",
    deskripsi:"Harimau Sumatera adalah subspesies harimau terkecil yang masih hidup. Mereka memiliki garis-garis yang lebih rapat dibandingkan subspesies harimau lainnya. Harimau ini adalah predator puncak yang berperan penting dalam menjaga keseimbangan ekosistem hutan Sumatera.",
    fakta:["Harimau terkecil dari semua subspesies harimau yang masih ada","Mampu berenang dengan sangat baik dan menyukai air","Memiliki selaput di antara jari-jari kaki untuk berenang","Garis-garis pada tubuhnya unik seperti sidik jari manusia","Dapat melompat sejauh 10 meter dalam satu lompatan"],
    konservasi:["Dukung kawasan Taman Nasional seperti Kerinci Seblat","Jangan membeli produk dari bagian tubuh harimau","Kurangi penggunaan produk kelapa sawit berlebihan","Edukasi teman dan keluarga tentang pentingnya harimau"]
  },
  {
    id:"orangutan", name:"Orangutan Kalimantan", latin:"Pongo pygmaeus",
    status:"Kritis", statusClass:"kritis", location:"Kalimantan",
    image:"assets/images/orangutan.png", audio:"harimau sumatra.aac",
    populasi:"~104.000 ekor",
    habitat:"Hutan hujan tropis dataran rendah di Pulau Kalimantan (Borneo).",
    deskripsi:"Orangutan adalah kera besar yang hanya ditemukan di Asia Tenggara. Nama 'orangutan' berasal dari bahasa Melayu yang berarti 'orang hutan'. Mereka adalah primata paling cerdas setelah manusia dan memiliki DNA yang 97% sama dengan manusia.",
    fakta:["Mampu menggunakan alat dari ranting untuk mengambil serangga","Membangun sarang baru setiap malam di atas pohon","DNA-nya 97% sama dengan manusia","Bisa hidup hingga 35-45 tahun di alam liar","Induk orangutan merawat anaknya hingga 6-7 tahun"],
    konservasi:["Gunakan produk bersertifikat RSPO (kelapa sawit berkelanjutan)","Dukung rehabilitasi orangutan di pusat-pusat konservasi","Adopsi orangutan melalui program resmi","Jangan pernah memelihara orangutan sebagai hewan peliharaan"]
  },
  {
    id:"komodo", name:"Komodo", latin:"Varanus komodoensis",
    status:"Terancam", statusClass:"terancam", location:"Nusa Tenggara Timur",
    image:"assets/images/komodo.png", audio:"komodo.aac",
    populasi:"~3.000 ekor",
    habitat:"Padang savana dan hutan tropis di Pulau Komodo, Rinca, Flores, dan Gili Motang.",
    deskripsi:"Komodo adalah kadal terbesar di dunia yang hanya ditemukan di Indonesia. Mereka bisa tumbuh hingga 3 meter panjangnya dan berat 70 kg. Komodo telah ada sejak jutaan tahun lalu dan sering disebut sebagai 'naga terakhir' di bumi.",
    fakta:["Kadal terbesar di dunia, bisa tumbuh hingga 3 meter","Air liurnya mengandung lebih dari 50 jenis bakteri mematikan","Mampu berlari hingga 20 km/jam dalam jarak pendek","Bisa memakan mangsa hingga 80% berat tubuhnya sekaligus","Memiliki indra penciuman yang sangat tajam lewat lidah bercabangnya"],
    konservasi:["Kunjungi Taman Nasional Komodo secara bertanggung jawab","Jangan memberi makan atau mengganggu komodo di alam liar","Dukung program ekowisata di kawasan Komodo","Patuhi peraturan taman nasional saat berkunjung"]
  },
  {
    id:"gajah-sumatera", name:"Gajah Sumatera", latin:"Elephas maximus sumatranus",
    status:"Kritis", statusClass:"kritis", location:"Sumatera",
    image:"assets/images/gajah-sumatera.png", audio:"gajah-sumatra.aac",
    populasi:"~2.400 ekor",
    habitat:"Hutan hujan tropis dataran rendah di Pulau Sumatera.",
    deskripsi:"Gajah Sumatera adalah subspesies gajah Asia yang paling kecil. Mereka memainkan peran penting sebagai 'arsitek hutan' karena membantu menyebarkan biji tanaman dan membuat jalur yang digunakan hewan lain.",
    fakta:["Subspesies gajah Asia terkecil","Bisa minum hingga 200 liter air per hari","Memiliki ingatan luar biasa kuat","Berkomunikasi dengan suara infrasonik","Kehamilan gajah berlangsung sekitar 22 bulan"],
    konservasi:["Dukung program mitigasi konflik gajah-manusia","Hindari wisata yang mengeksploitasi gajah","Dukung perluasan kawasan konservasi gajah","Bantu petani lokal memasang pagar alami"]
  },
  {
    id:"cendrawasih", name:"Cendrawasih", latin:"Paradisaea apoda",
    status:"Rentan", statusClass:"rentan", location:"Papua",
    image:"assets/images/cendrawasih.png", audio:"cendrawasih.aac",
    populasi:"~20.000 ekor",
    habitat:"Hutan hujan tropis dataran rendah dan pegunungan di Papua.",
    deskripsi:"Cendrawasih atau Burung Surga dikenal dengan bulu-bulunya yang sangat indah dan tarian kawin yang spektakuler. Burung ini menjadi simbol kebanggaan Papua dan Indonesia.",
    fakta:["Dijuluki 'Bird of Paradise' atau burung dari surga","Burung jantan memiliki bulu hias yang sangat indah untuk menarik betina","Ada lebih dari 40 spesies cendrawasih di dunia","Tarian kawin cendrawasih bisa berlangsung berjam-jam","Bulu cendrawasih pernah menjadi komoditas perdagangan dunia"],
    konservasi:["Jangan membeli bulu cendrawasih","Dukung ekowisata di Papua","Lindungi habitat hutan Papua dari penebangan","Edukasi masyarakat tentang nilai cendrawasih"]
  },
  {
    id:"jalak-bali", name:"Jalak Bali", latin:"Leucopsar rothschildi",
    status:"Kritis", statusClass:"kritis", location:"Bali",
    image:"assets/images/jalak-bali.png", audio:"jalak bali.aac",
    populasi:"~100 ekor (liar)",
    habitat:"Hutan monsun kering di Taman Nasional Bali Barat.",
    deskripsi:"Jalak Bali adalah salah satu burung paling langka di dunia dan merupakan satu-satunya spesies endemik Bali. Burung berwarna putih bersih ini memiliki lingkaran biru cerah di sekitar matanya.",
    fakta:["Satu-satunya burung endemik Pulau Bali","Ditemukan pertama kali oleh Walter Rothschild tahun 1910","Populasi di alam liar pernah turun hingga kurang dari 10 ekor","Memiliki jambul elegan di atas kepalanya","Menjadi maskot fauna resmi Provinsi Bali"],
    konservasi:["Jangan membeli jalak bali dari perdagangan ilegal","Dukung program penangkaran di Taman Nasional Bali Barat","Laporkan perdagangan burung ilegal ke pihak berwajib","Kunjungi pusat konservasi jalak bali"]
  },
  {
    id:"badak-jawa", name:"Badak Jawa", latin:"Rhinoceros sondaicus",
    status:"Kritis", statusClass:"kritis", location:"Banten (Ujung Kulon)",
    image:"assets/images/badak-jawa.png", audio:"badak jawa.aac",
    populasi:"~72 ekor",
    habitat:"Hutan hujan tropis dataran rendah di Taman Nasional Ujung Kulon, Banten.",
    deskripsi:"Badak Jawa adalah salah satu mamalia paling langka di dunia. Hanya tersisa sekitar 72 ekor di Taman Nasional Ujung Kulon. Mereka memiliki satu cula dan kulit berlipat yang tampak seperti baju besi.",
    fakta:["Salah satu mamalia paling langka di dunia","Hanya memiliki satu cula, berbeda dengan badak Afrika","Kulitnya berlipat-lipat seperti baju besi","Bisa hidup hingga 30-45 tahun","Hewan penyendiri yang aktif di malam hari"],
    konservasi:["Dukung Taman Nasional Ujung Kulon","Lawan perdagangan cula badak","Bantu program pemantauan badak dengan kamera jebakan","Dukung perluasan habitat badak jawa"]
  },
  {
    id:"badak-sumatera", name:"Badak Sumatera", latin:"Dicerorhinus sumatrensis",
    status:"Kritis", statusClass:"kritis", location:"Sumatera & Kalimantan",
    image:"assets/images/badak-sumatera.png", audio:"badak sumatra.aac",
    populasi:"~80 ekor",
    habitat:"Hutan hujan tropis pegunungan di Sumatera dan Kalimantan.",
    deskripsi:"Badak Sumatera adalah badak terkecil di dunia dan satu-satunya badak Asia yang memiliki dua cula. Tubuhnya ditutupi rambut cokelat kemerahan, menjadikannya unik di antara semua spesies badak.",
    fakta:["Badak terkecil di dunia","Satu-satunya badak Asia dengan dua cula","Tubuhnya berbulu, unik di antara badak modern","Kerabat terdekat badak wol yang sudah punah","Suka berkubang di lumpur untuk mengatur suhu tubuh"],
    konservasi:["Dukung Sumatran Rhino Rescue program","Bantu program penangkaran semi-alami","Lawan deforestasi di habitat badak","Sebarkan kesadaran tentang badak sumatera"]
  },
  {
    id:"kukang-jawa", name:"Kukang Jawa", latin:"Nycticebus javanicus",
    status:"Kritis", statusClass:"kritis", location:"Jawa",
    image:"assets/images/kukang-jawa.png", audio:"kukang jawa.aac",
    populasi:"Tidak diketahui pasti",
    habitat:"Hutan tropis primer dan sekunder di Pulau Jawa.",
    deskripsi:"Kukang Jawa adalah primata nokturnal kecil yang menggemaskan namun beracun. Mereka adalah satu-satunya primata beracun di dunia. Racunnya dihasilkan dari kelenjar di siku yang dicampur dengan air liur.",
    fakta:["Satu-satunya primata beracun di dunia","Hewan nokturnal yang aktif di malam hari","Memiliki mata besar untuk melihat dalam gelap","Bisa memutar kepalanya hampir 180 derajat","Sering menjadi korban perdagangan hewan ilegal"],
    konservasi:["Jangan memelihara kukang sebagai hewan peliharaan","Laporkan perdagangan kukang ke pihak berwajib","Dukung pusat rehabilitasi kukang","Jangan membagikan video kukang peliharaan di media sosial"]
  },
  {
    id:"macan-tutul-jawa", name:"Macan Tutul Jawa", latin:"Panthera pardus melas",
    status:"Kritis", statusClass:"kritis", location:"Jawa",
    image:"assets/images/macan-tutul-jawa.png", audio:"macan tutul jawa.aac",
    populasi:"~350 ekor",
    habitat:"Hutan hujan tropis pegunungan di Pulau Jawa.",
    deskripsi:"Macan Tutul Jawa adalah subspesies macan tutul yang hanya ditemukan di Jawa. Mereka adalah predator puncak di ekosistem hutan Jawa dan memiliki variasi warna hitam (melanistik) yang sering disebut 'black panther'.",
    fakta:["Predator puncak di ekosistem hutan Jawa","Variasi hitamnya sering disebut 'black panther'","Mampu memanjat pohon sambil membawa mangsa","Aktif terutama di malam hari (nokturnal)","Wilayah jelajahnya bisa mencapai 20 km²"],
    konservasi:["Dukung kawasan Taman Nasional di Jawa","Kurangi konflik manusia-satwa di tepi hutan","Dukung program pemantauan kamera jebakan","Bantu masyarakat sekitar hutan dengan edukasi"]
  },
  {
    id:"monyet-hitam-sulawesi", name:"Monyet Hitam Sulawesi", latin:"Macaca nigra",
    status:"Kritis", statusClass:"kritis", location:"Sulawesi Utara",
    image:"assets/images/monyet-hitam-sulawesi.png", audio:"monyet hitam sulawesi.aac",
    populasi:"~5.000 ekor",
    habitat:"Hutan hujan tropis dataran rendah di Sulawesi Utara.",
    deskripsi:"Monyet Hitam Sulawesi atau Yaki adalah primata endemik Sulawesi Utara. Mereka terkenal karena pernah mengambil 'selfie' yang viral di internet. Monyet ini hidup berkelompok dan memiliki struktur sosial yang kompleks.",
    fakta:["Terkenal karena foto 'selfie' yang viral di dunia","Hidup dalam kelompok hingga 100 individu","Memiliki jambul khas di atas kepala","Wajahnya tanpa bulu dengan warna hitam pekat","Terancam oleh perburuan untuk konsumsi lokal"],
    konservasi:["Dukung Taman Nasional Tangkoko","Edukasi masyarakat lokal tentang perlindungan yaki","Dukung ekowisata berbasis masyarakat","Lawan perburuan monyet hitam untuk konsumsi"]
  },
  {
    id:"tarsius", name:"Tarsius", latin:"Tarsius tarsier",
    status:"Rentan", statusClass:"rentan", location:"Sulawesi",
    image:"assets/images/tarsius.png", audio:"tarsius.aac",
    populasi:"Tidak diketahui pasti",
    habitat:"Hutan tropis dan hutan bakau di Sulawesi.",
    deskripsi:"Tarsius adalah primata terkecil di dunia dengan mata yang sangat besar. Matanya bahkan lebih besar dari otaknya! Mereka adalah karnivora murni yang memakan serangga, kadal kecil, dan bahkan burung kecil.",
    fakta:["Primata terkecil di dunia, sebesar telapak tangan","Matanya lebih besar dari otaknya","Bisa memutar kepalanya hampir 360 derajat","Satu-satunya primata yang sepenuhnya karnivora","Bisa melompat sejauh 40 kali panjang tubuhnya"],
    konservasi:["Jangan menggunakan flash saat memotret tarsius","Dukung habitat alami tarsius dari kerusakan","Kunjungi pusat konservasi tarsius secara bertanggung jawab","Hindari memegang atau menyentuh tarsius"]
  },
  {
    id:"trenggiling", name:"Trenggiling", latin:"Manis javanica",
    status:"Kritis", statusClass:"kritis", location:"Sumatera, Kalimantan, Jawa",
    image:"assets/images/trenggiling.png", audio:"trenggiling.aac",
    populasi:"Menurun drastis",
    habitat:"Hutan tropis primer dan sekunder di Sumatera, Kalimantan, dan Jawa.",
    deskripsi:"Trenggiling atau Pangolin adalah mamalia bersisik yang menjadi hewan paling banyak diperdagangkan secara ilegal di dunia. Sisiknya terbuat dari keratin, sama seperti kuku manusia. Saat merasa terancam, trenggiling akan menggulung tubuhnya menjadi bola.",
    fakta:["Mamalia paling banyak diperdagangkan secara ilegal di dunia","Sisiknya terbuat dari keratin seperti kuku manusia","Bisa menggulung tubuh menjadi bola saat terancam","Lidahnya bisa sepanjang 40 cm untuk menangkap semut","Tidak memiliki gigi sama sekali"],
    konservasi:["Lawan perdagangan sisik trenggiling","Jangan mengonsumsi daging trenggiling","Laporkan perdagangan trenggiling ilegal","Dukung program rehabilitasi trenggiling"]
  }
];

const QUIZ_QUESTIONS = [
  { question:"Hewan apa yang dijuluki 'Naga Terakhir' di bumi?", image:"komodo", options:["Komodo","Harimau Sumatera","Buaya Muara","Biawak"], answer:0, explanation:"Komodo adalah kadal terbesar di dunia dan sering disebut sebagai naga terakhir di bumi!" },
  { question:"Di mana satu-satunya tempat Badak Jawa hidup di alam liar?", image:"badak-jawa", options:["Taman Nasional Baluran","Taman Nasional Ujung Kulon","Taman Nasional Gunung Leuser","Taman Nasional Way Kambas"], answer:1, explanation:"Badak Jawa hanya hidup di Taman Nasional Ujung Kulon, Banten." },
  { question:"Primata apa yang matanya lebih besar dari otaknya?", image:"tarsius", options:["Orangutan","Kukang","Tarsius","Monyet Hitam"], answer:2, explanation:"Tarsius memiliki mata yang luar biasa besar, bahkan lebih besar dari otaknya!" },
  { question:"Berapa persen DNA Orangutan yang sama dengan manusia?", image:"orangutan", options:["85%","90%","97%","99%"], answer:2, explanation:"DNA Orangutan 97% sama dengan DNA manusia. Menakjubkan!" },
  { question:"Apa yang membuat Kukang Jawa unik di antara primata?", image:"kukang-jawa", options:["Bisa terbang","Satu-satunya primata beracun","Bisa berubah warna","Hidup di air"], answer:1, explanation:"Kukang Jawa adalah satu-satunya primata beracun di dunia!" },
  { question:"Burung apa yang menjadi maskot resmi Provinsi Bali?", image:"jalak-bali", options:["Cendrawasih","Jalak Bali","Elang Jawa","Kakatua"],answer:1, explanation:"Jalak Bali adalah satu-satunya burung endemik Bali dan menjadi maskot resmi provinsi tersebut." },
  { question:"Berapa liter air yang bisa diminum Gajah Sumatera per hari?", image:"gajah-sumatera", options:["50 liter","100 liter","200 liter","500 liter"], answer:2, explanation:"Gajah Sumatera bisa minum hingga 200 liter air dalam sehari!" },
  { question:"Apa nama lain dari Cendrawasih dalam bahasa Inggris?", image:"cendrawasih", options:["Paradise Bird","Bird of Paradise","Heaven Bird","Angel Bird"], answer:1, explanation:"Cendrawasih dikenal sebagai 'Bird of Paradise' atau Burung Surga." },
  { question:"Hewan apa yang paling banyak diperdagangkan secara ilegal di dunia?", image:"trenggiling", options:["Harimau","Gajah","Trenggiling","Badak"], answer:2, explanation:"Trenggiling adalah mamalia paling banyak diperdagangkan secara ilegal di dunia." },
  { question:"Monyet Hitam Sulawesi terkenal karena apa?", image:"monyet-hitam-sulawesi", options:["Bisa berenang","Foto selfie viral","Bisa bicara","Warna biru"], answer:1, explanation:"Monyet Hitam Sulawesi pernah mengambil foto selfie yang menjadi viral di seluruh dunia!" },
  { question:"Variasi hitam Macan Tutul Jawa sering disebut apa?", image:"macan-tutul-jawa", options:["Dark Tiger","Shadow Cat","Black Panther","Night Leopard"], answer:2, explanation:"Macan Tutul Jawa berwarna hitam (melanistik) sering disebut 'Black Panther'." },
  { question:"Apa keunikan Badak Sumatera dibanding badak Asia lainnya?", image:"badak-sumatera", options:["Punya tiga cula","Punya dua cula","Bisa terbang","Hidup di air"], answer:1, explanation:"Badak Sumatera adalah satu-satunya badak Asia yang memiliki dua cula." },
  { question:"Berapa jauh Harimau Sumatera bisa melompat?", image:"harimau-sumatera", options:["3 meter","5 meter","10 meter","20 meter"], answer:2, explanation:"Harimau Sumatera dapat melompat sejauh 10 meter dalam satu lompatan!" },
  { question:"Berapa lama induk Orangutan merawat anaknya?", image:"orangutan", options:["1-2 tahun","3-4 tahun","6-7 tahun","10 tahun"], answer:2, explanation:"Induk orangutan merawat anaknya hingga 6-7 tahun, salah satu yang terlama di dunia hewan." },
  { question:"Tarsius bisa melompat sejauh berapa kali panjang tubuhnya?", image:"tarsius", options:["5 kali","10 kali","20 kali","40 kali"], answer:3, explanation:"Tarsius bisa melompat sejauh 40 kali panjang tubuhnya! Luar biasa untuk ukurannya." }
];
