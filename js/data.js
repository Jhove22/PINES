/* ===== CONFIGURACIÓN (edita aquí) ===== */
const PHONE = "59167977354"; // +591 67977354

// Enlaces de tus redes (pega aquí tus enlaces reales)
const SOCIAL = {
  tiktok:   "https://www.tiktok.com/@TU_USUARIO",
  facebook: "https://www.facebook.com/TU_PAGINA"
};

// Precios en Bs POR UNIDAD (cámbialos)
const PRICES = { "25": 3.5, "37": 8, "58": 7, corazon: 10, abrelatas: 15, espejo: 15 };

// Estado de cada presentación. Para activarla otra vez, borra su línea.
//   "agotado" = sin stock · "pronto" = muy pronto
const STATUS = { "37": "agotado", abrelatas: "pronto", espejo: "pronto" };
const STATUS_LABEL = { agotado: "Agotado", pronto: "Muy pronto" };
const LABELS = { "25": "25 mm", "37": "37 mm", "58": "58 mm", corazon: "Corazón", abrelatas: "Abrelatas", espejo: "Espejo" };
const ROUND = ["25", "37", "58"]; // opciones de pin redondo

/* Categorías y subcategorías. Cada categoría tiene su página (bts.html, memes.html...).
   "cover" = fotos de presentación (hasta 3) que se muestran arriba al entrar.
   Si no hay "cover" se muestra el emoji "icon". */
const B = "img/bts/";
const CATS = {
  bts: {
    name: "BTS", icon: "💜", desc: "Pines de BTS en todos los tamaños.",
    cover: [B + "grupo/BTS_pin_01_dorado_58mm.png", B + "grupo/BTS_pin_03_grupo_rojo_58mm.png", B + "integrantes/BTS_pin_05_RM_58mm.png"],
    subs: [
      { n: "Grupo",       icon: "👥", desc: "Los siete juntos, en todos los estilos.", cover: [B + "grupo/BTS_pin_01_dorado_58mm.png", B + "grupo/BTS_pin_02_grupo_lila_58mm.png", B + "grupo/BTS_pin_03_grupo_rojo_58mm.png"] },
      { n: "Integrantes", icon: "🎤", desc: "Pines individuales de cada integrante.",  cover: [B + "integrantes/BTS_pin_05_RM_58mm.png", B + "integrantes/BTS_pin_06_Jin_58mm.png", B + "integrantes/BTS_pin_09_Jimin_58mm.png"] },
      { n: "Mascotas",    icon: "🐻", desc: "Los BT21: Koya, RJ, Shooky, Mang, Chimmy, Tata, Cooky y Van.", cover: [B + "mascotas/BT21_grupo_58mm.png", B + "mascotas/BT21_koya_58mm.png", B + "mascotas/BT21_rj_58mm.png"] },
      { n: "Logotipos",   icon: "💜", desc: "Logos y frases para fans.", cover: [B + "logotipos/pin_01_581mm__1_.png", B + "logotipos/pin_03_58mm.png", B + "logotipos/pin_01_581mm__6_.png"] }
    ]
  },
  memes:  { name: "Memes",  icon: "😹", desc: "Los memes más virales hechos pin.", subs: [{ n: "Gatos", icon: "🐱", desc: "Gatos memeros." }, { n: "Clásicos", icon: "📈", desc: "Los memes de siempre." }] },
  anime:  { name: "Anime",  icon: "⚔️", desc: "Para los fans del anime.",          subs: [{ n: "Shonen", icon: "⚔️", desc: "Acción y aventura." }, { n: "Kawaii", icon: "🌸", desc: "Ternura en tamaño pin." }] },
  bandas: { name: "Bandas", icon: "🎸", desc: "Tus bandas favoritas contigo.",     subs: [{ n: "Rock", icon: "🤘", desc: "Para rockeros." }, { n: "Pop", icon: "🎤", desc: "Para amantes del pop." }] }
};

/* Pines. shape: "round" = foto circular con marco.
   "sub" debe coincidir con el nombre de una subcategoría.
   Sin "img" se muestra un emoji de ejemplo (reemplázalo por tu foto). */
const PINS = [
  { id: 1, cat: "bts", sub: "Grupo",       name: "BTS Dorado",      desc: "El grupo en negro y dorado con brillo cósmico.", img: B + "grupo/BTS_pin_01_dorado_58mm.png",     shape: "round", opts: ROUND },
  { id: 2, cat: "bts", sub: "Grupo",       name: "BTS Lila",        desc: "Corazones y destellos en tonos lila.",           img: B + "grupo/BTS_pin_02_grupo_lila_58mm.png", shape: "round", opts: ROUND },
  { id: 3, cat: "bts", sub: "Grupo",       name: "BTS Rojo Urbano", desc: "Estilo urbano rojo y negro con corona.",         img: B + "grupo/BTS_pin_03_grupo_rojo_58mm.png", shape: "round", opts: ROUND },
  { id: 4, cat: "bts", sub: "Grupo",       name: "BTS Películas",   desc: "Look vintage de rollo de película en sepia.",    img: B + "grupo/BTS_pin_04_peliculas_58mm.png",  shape: "round", opts: ROUND },
  { id: 40, cat: "bts", sub: "Grupo", name: "BTS Universo", desc: "Siluetas del grupo frente al logo de BTS en un cielo de galaxia.", img: B + "grupo/BTS_pin_12_universo_58mm.png", shape: "round", opts: ROUND },
  { id: 41, cat: "bts", sub: "Grupo", name: "BTS Corona Lila", desc: "El grupo de negro sobre fondo morado, con corona y corazones.", img: B + "grupo/pin_02_58mm.png", shape: "round", opts: ROUND },
  { id: 42, cat: "bts", sub: "Grupo", name: "BTS Chibi", desc: "Versión chibi del grupo con corazones lila sobre negro.", img: B + "grupo/pin_04_58mm.png", shape: "round", opts: ROUND },
  { id: 45, cat: "bts", sub: "Grupo", name: "BTS Blanco y Negro", desc: "Retratos del grupo en blanco y negro con corazón lila.", img: B + "grupo/pin_10_58mm.png", shape: "round", opts: ROUND },
  { id: 46, cat: "bts", sub: "Grupo", name: "BTS Trajes Rosa", desc: "El grupo de traje con etiquetas rosas.", img: B + "grupo/pin_rojo_04_58mm.png", shape: "round", opts: ROUND },
  { id: 47, cat: "bts", sub: "Grupo", name: "BTS Estrellitas", desc: "El grupo en blanco y negro con estrellas y corazón BTS.", img: B + "grupo/pin_rojo_08_58mm.png", shape: "round", opts: ROUND },
  { id: 5, cat: "bts", sub: "Integrantes", name: "RM Esmeralda",    desc: "RM con fondo verde y corona de neón.",           img: B + "integrantes/BTS_pin_05_RM_58mm.png",  shape: "round", opts: ROUND },
  { id: 6, cat: "bts", sub: "Integrantes", name: "Jin Cerezo",      desc: "Jin entre flores de cerezo rosadas.",            img: B + "integrantes/BTS_pin_06_Jin_58mm.png", shape: "round", opts: ROUND },
  { id: 48, cat: "bts", sub: "Integrantes", name: "Suga Púrpura", desc: "Suga con corona y trazos en lila sobre fondo oscuro.", img: B + "integrantes/BTS_pin_07_Suga_58mm.png", shape: "round", opts: ROUND },
  { id: 49, cat: "bts", sub: "Integrantes", name: "J-Hope Naranja", desc: "J-Hope con fondo naranja y grafitis azules.", img: B + "integrantes/BTS_pin_08_JHope_58mm.png", shape: "round", opts: ROUND },
  { id: 50, cat: "bts", sub: "Integrantes", name: "Jimin Mariposas", desc: "Jimin entre mariposas moradas.", img: B + "integrantes/BTS_pin_09_Jimin_58mm.png", shape: "round", opts: ROUND },
  { id: 51, cat: "bts", sub: "Integrantes", name: "V Rosas", desc: "V rodeado de rosas rojas.", img: B + "integrantes/BTS_pin_10_V_58mm.png", shape: "round", opts: ROUND },
  { id: 52, cat: "bts", sub: "Integrantes", name: "Jungkook Eléctrico", desc: "Jungkook con rayos azules y corona.", img: B + "integrantes/BTS_pin_11_Jungkook_58mm.png", shape: "round", opts: ROUND },
  { id: 53, cat: "bts", sub: "Integrantes", name: "RM Corazones", desc: "RM con corona y corazones sobre fondo morado.", img: B + "integrantes/pin_05_58mm.png", shape: "round", opts: ROUND },
  { id: 54, cat: "bts", sub: "Integrantes", name: "Namjoon Sticker", desc: "Kim Namjoon en estilo sticker con corona dorada.", img: B + "integrantes/pin_01_NamJoon_58mm.png", shape: "round", opts: ROUND },
  { id: 55, cat: "bts", sub: "Integrantes", name: "Seokjin Sticker", desc: "Kim Seokjin en estilo sticker con corona dorada.", img: B + "integrantes/pin_02_SeokJin_58mm.png", shape: "round", opts: ROUND },
  { id: 56, cat: "bts", sub: "Integrantes", name: "Yoongi Sticker", desc: "Min Yoongi en estilo sticker con corona dorada.", img: B + "integrantes/pin_03_YoonGi_58mm.png", shape: "round", opts: ROUND },
  { id: 57, cat: "bts", sub: "Integrantes", name: "Hoseok Sticker", desc: "Jung Hoseok en estilo sticker con corona dorada.", img: B + "integrantes/pin_04_HoSeok_58mm.png", shape: "round", opts: ROUND },
  { id: 58, cat: "bts", sub: "Integrantes", name: "Jimin Sticker", desc: "Park Jimin en estilo sticker con corona dorada.", img: B + "integrantes/pin_06_Jimin_B_58mm.png", shape: "round", opts: ROUND },
  { id: 59, cat: "bts", sub: "Integrantes", name: "Jungkook Sticker", desc: "Jeon Jungkook en estilo sticker con corona dorada.", img: B + "integrantes/pin_07_JungKook_58mm.png", shape: "round", opts: ROUND },
  { id: 60, cat: "bts", sub: "Integrantes", name: "Jungkook Blanco y Negro", desc: "Collage en blanco y negro de Jeon Jungkook.", img: B + "integrantes/pin_rojo_05_58mm.png", shape: "round", opts: ROUND },
  { id: 61, cat: "bts", sub: "Integrantes", name: "Rojo y Negro 1", desc: "Retrato guiñando el ojo sobre fondo rojo y negro.", img: B + "integrantes/pin_rojo_01_58mm.png", shape: "round", opts: ROUND },
  { id: 62, cat: "bts", sub: "Integrantes", name: "Rojo y Negro 2", desc: "Retrato con gorro de orejas largas sobre rojo y negro.", img: B + "integrantes/pin_rojo_02_58mm.png", shape: "round", opts: ROUND },
  { id: 63, cat: "bts", sub: "Integrantes", name: "Rojo y Negro 3", desc: "Retrato con chaqueta de lentejuelas sobre rojo.", img: B + "integrantes/pin_rojo_03_58mm.png", shape: "round", opts: ROUND },
  { id: 64, cat: "bts", sub: "Integrantes", name: "Rojo y Negro 4", desc: "Retrato de perfil con ojos cerrados sobre rojo y negro.", img: B + "integrantes/pin_rojo_07_58mm.png", shape: "round", opts: ROUND },
  { id: 65, cat: "bts", sub: "Integrantes", name: "Rojo y Negro 5", desc: "Retrato con la mano en el rostro sobre rojo y negro.", img: B + "integrantes/pin_rojo_09_58mm.png", shape: "round", opts: ROUND },

  // BTS · Logotipos
  { id: 66, cat: "bts", sub: "Logotipos", name: "Logo Mármol", desc: "Logo BTS en negro sobre mármol blanco.", img: B + "logotipos/pin_01_58mm.png", shape: "round", opts: ROUND },
  { id: 67, cat: "bts", sub: "Logotipos", name: "Logo Galaxia Lila", desc: "Logo con corona y anillo en tonos lila sobre cielo estrellado.", img: B + "logotipos/pin_01_581mm__1_.png", shape: "round", opts: ROUND },
  { id: 68, cat: "bts", sub: "Logotipos", name: "Logo Salpicado Lila", desc: "Logo blanco desgastado con trazos de pintura lila.", img: B + "logotipos/pin_01_581mm__3_.png", shape: "round", opts: ROUND },
  { id: 69, cat: "bts", sub: "Logotipos", name: "Logo Rosas Moradas", desc: "Logo neón entre rosas y mariposas moradas.", img: B + "logotipos/pin_01_581mm__6_.png", shape: "round", opts: ROUND },
  { id: 43, cat: "bts", sub: "Logotipos", name: "BTS Forever", desc: "Siluetas frente a una luna lila con la frase Forever.", img: B + "logotipos/pin_01_581mm__7_.png", shape: "round", opts: ROUND },
  { id: 44, cat: "bts", sub: "Logotipos", name: "BTS Nombres", desc: "Los nombres de los integrantes en negro con un corazón lila.", img: B + "logotipos/pin_01_581mm__8_.png", shape: "round", opts: ROUND },
  { id: 70, cat: "bts", sub: "Logotipos", name: "I Purple You", desc: "Logo sobre acuarela pastel con la frase I Purple You.", img: B + "logotipos/pin_01_581mm__9_.png", shape: "round", opts: ROUND },
  { id: 71, cat: "bts", sub: "Logotipos", name: "Logo Neón Corona", desc: "Logo neón con corona, anillo y nubes moradas.", img: B + "logotipos/pin_01_581mm__11_.png", shape: "round", opts: ROUND },
  { id: 72, cat: "bts", sub: "Logotipos", name: "BTS Luna Lila", desc: "BTS en letra de pincel con corazón lila y luna.", img: B + "logotipos/pin_01_581mm__12_.png", shape: "round", opts: ROUND },
  { id: 73, cat: "bts", sub: "Logotipos", name: "Logo Degradé", desc: "Logo en degradé rosa y celeste sobre negro.", img: B + "logotipos/pin_02_58mm.png", shape: "round", opts: ROUND },
  { id: 74, cat: "bts", sub: "Logotipos", name: "Logo Dorado Flores", desc: "Logo dorado con flores sobre fondo negro.", img: B + "logotipos/pin_03_58mm.png", shape: "round", opts: ROUND },
  { id: 75, cat: "bts", sub: "Logotipos", name: "Logo Cian y Fucsia", desc: "Logo en degradé celeste y fucsia sobre negro.", img: B + "logotipos/pin_04_58mm.png", shape: "round", opts: ROUND },
  { id: 76, cat: "bts", sub: "Logotipos", name: "Logo Acuarela", desc: "Logo blanco sobre salpicadura de acuarela multicolor.", img: B + "logotipos/pin_05_58mm.png", shape: "round", opts: ROUND },
  { id: 77, cat: "bts", sub: "Logotipos", name: "ARMY y BTS", desc: "Los logos de ARMY y de BTS en blanco y negro.", img: B + "logotipos/pin_06_58mm.png", shape: "round", opts: ROUND },
  { id: 78, cat: "bts", sub: "Logotipos", name: "BTS ARMY", desc: "Logo blanco sobre negro con BTS y ARMY.", img: B + "logotipos/pin_07_58mm.png", shape: "round", opts: ROUND },
  { id: 79, cat: "bts", sub: "Logotipos", name: "Logo Clásico Negro", desc: "Logo BTS blanco sobre fondo negro.", img: B + "logotipos/pin_08_58mm.png", shape: "round", opts: ROUND },
  { id: 80, cat: "bts", sub: "Logotipos", name: "Logo Ballena", desc: "Logo con ballena de acuarela y planeta sobre fondo rosado.", img: B + "logotipos/pin_08_Logo_ballena_58mm.png", shape: "round", opts: ROUND },
  { id: 81, cat: "bts", sub: "Logotipos", name: "Logo Autógrafos", desc: "Logo blanco con firmas sobre fondo negro.", img: B + "logotipos/pin_09_58mm.png", shape: "round", opts: ROUND },
  { id: 82, cat: "bts", sub: "Logotipos", name: "Logo Galaxia Planetas", desc: "Logo con textura de galaxia, planetas y estrellas.", img: B + "logotipos/pin_10_58mm.png", shape: "round", opts: ROUND },

  // BTS · Mascotas (BT21)
  { id: 20, cat: "bts", sub: "Mascotas", name: "BT21 Todos Juntos", desc: "Todos los BT21 con estrellas sobre fondo negro.", img: B + "mascotas/BT21_grupo_58mm.png", shape: "round", opts: ROUND },
  { id: 21, cat: "bts", sub: "Mascotas", name: "BT21 Kawaii Rosa", desc: "Los BT21 apilados entre corazones, en rosa pastel.", img: B + "mascotas/BT21_kawaii_rosa_58mm.png", shape: "round", opts: ROUND },
  { id: 22, cat: "bts", sub: "Mascotas", name: "Koya", desc: "Koya durmiendo en una nube bajo la luna y las estrellas.", img: B + "mascotas/BT21_koya_58mm.png", shape: "round", opts: ROUND },
  { id: 23, cat: "bts", sub: "Mascotas", name: "RJ", desc: "RJ con su bufanda roja y un té de burbujas.", img: B + "mascotas/BT21_rj_58mm.png", shape: "round", opts: ROUND },
  { id: 24, cat: "bts", sub: "Mascotas", name: "Shooky", desc: "Shooky rodeado de galletas, con su leche tachada.", img: B + "mascotas/BT21_shooky_58mm.png", shape: "round", opts: ROUND },
  { id: 25, cat: "bts", sub: "Mascotas", name: "Mang", desc: "Mang bailando bajo una bola disco.", img: B + "mascotas/BT21_mang_58mm.png", shape: "round", opts: ROUND },
  { id: 26, cat: "bts", sub: "Mascotas", name: "Chimmy", desc: "Chimmy tocando la armónica entre notas musicales.", img: B + "mascotas/BT21_chimmy_58mm.png", shape: "round", opts: ROUND },
  { id: 27, cat: "bts", sub: "Mascotas", name: "Tata", desc: "Tata entre estrellas y planetas.", img: B + "mascotas/BT21_tata_58mm.png", shape: "round", opts: ROUND },
  { id: 28, cat: "bts", sub: "Mascotas", name: "Cooky", desc: "Cooky con guantes de boxeo y mucha energía.", img: B + "mascotas/BT21_cooky_58mm.png", shape: "round", opts: ROUND },
  { id: 29, cat: "bts", sub: "Mascotas", name: "Van", desc: "Van, mitad gris y mitad blanco, con un corazón.", img: B + "mascotas/BT21_van_58mm.png", shape: "round", opts: ROUND },
  { id: 30, cat: "bts", sub: "Mascotas", name: "Koya Carita", desc: "La carita de Koya, simple y tierna.", img: B + "mascotas/BT21_carita_koya_58mm.png", shape: "round", opts: ROUND },
  { id: 31, cat: "bts", sub: "Mascotas", name: "RJ Carita", desc: "La carita de RJ con mejillas rosadas.", img: B + "mascotas/BT21_carita_rj_58mm.png", shape: "round", opts: ROUND },
  { id: 32, cat: "bts", sub: "Mascotas", name: "Shooky Carita", desc: "La carita de Shooky con su sonrisa traviesa.", img: B + "mascotas/BT21_carita_shooky_58mm.png", shape: "round", opts: ROUND },
  { id: 33, cat: "bts", sub: "Mascotas", name: "Mang Carita", desc: "La carita de Mang en color lila.", img: B + "mascotas/BT21_carita_mang_58mm.png", shape: "round", opts: ROUND },
  { id: 34, cat: "bts", sub: "Mascotas", name: "Chimmy Carita", desc: "La carita de Chimmy sacando la lengua.", img: B + "mascotas/BT21_carita_chimmy_58mm.png", shape: "round", opts: ROUND },
  { id: 35, cat: "bts", sub: "Mascotas", name: "Tata Carita", desc: "La carita enojada de Tata.", img: B + "mascotas/BT21_carita_tata_58mm.png", shape: "round", opts: ROUND },
  { id: 36, cat: "bts", sub: "Mascotas", name: "Cooky Carita", desc: "La carita de Cooky con ceño travieso.", img: B + "mascotas/BT21_carita_cooky_58mm.png", shape: "round", opts: ROUND },
  { id: 37, cat: "bts", sub: "Mascotas", name: "Van Carita", desc: "La carita de Van con su X y su O.", img: B + "mascotas/BT21_carita_van_58mm.png", shape: "round", opts: ROUND },

  // BTS · Mascotas (logos BT21)
  { id: 38, cat: "bts", sub: "Mascotas", name: "Logo BT21", desc: "El logo BT21 con salpicaduras de colores.", img: B + "mascotas/BT21_logo_58mm.png", shape: "round", opts: ROUND },
  { id: 39, cat: "bts", sub: "Mascotas", name: "BTS + BT21 Pastel", desc: "El logo de BTS rodeado de los BT21 en rosa pastel.", img: B + "mascotas/BT21_insignia_bts_58mm.png", shape: "round", opts: ROUND },

  // Ejemplos sin foto (reemplázalos cuando tengas las imágenes)
  { id: 10, cat: "memes", sub: "Gatos",    name: "Gato Triste",     desc: "El meme que todos conocen. (ejemplo)",       emoji: "😿", opts: ROUND },
  { id: 11, cat: "memes", sub: "Clásicos", name: "Stonks",          desc: "Para los que invierten en memes. (ejemplo)", emoji: "📈", opts: ROUND },
  { id: 12, cat: "anime", sub: "Shonen",   name: "Ojos Rojos",      desc: "Mirada intensa. (ejemplo)",                  emoji: "👁️", opts: ROUND },
  { id: 13, cat: "anime", sub: "Kawaii",   name: "Gatito Kawaii",   desc: "Ternura en tamaño pin. (ejemplo)",           emoji: "🐱", opts: ROUND },
  { id: 14, cat: "bandas", sub: "Rock",    name: "Rock Mano",       desc: "Cuernos al aire. (ejemplo)",                 emoji: "🤘", opts: ROUND },
  { id: 15, cat: "bandas", sub: "Pop",     name: "Notas Musicales", desc: "Para amantes de la música. (ejemplo)",       emoji: "🎵", opts: ROUND }
];