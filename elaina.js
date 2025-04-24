document.addEventListener("DOMContentLoaded", () => {
    const _0x5df62f = document.getElementById("main-title");
    const _0x3b3f90 = document.getElementById('name-entry-screen');
    const _0x1faa6a = document.getElementById('gender-selection-screen');
    const _0x130049 = document.getElementById('chat-screen');
    const _0x571827 = document.getElementById("name-input");
    const _0x3b3dc1 = document.getElementById("submit-name-button");
    const _0x573fa9 = document.getElementById('name-error');
    const _0x3f65b0 = document.querySelector(".gender-selection-box");
    const _0x31950b = document.getElementById("male-button");
    const _0x67f5fe = document.getElementById("female-button");
    const _0x2be181 = document.getElementById("gender-error");
    const _0xc79570 = document.getElementById("reset-chat-button");
    const _0x4f6570 = document.getElementById('clear-chat-button');
    const _0x46e713 = document.getElementById("background-button");
    const _0x5c12fd = document.getElementById("background-input");
    const _0x53f58f = document.getElementById('help-button');
    const _0x3bd710 = document.getElementById('help-modal-overlay');
    const _0x33dd21 = document.getElementById("help-close-button");
    const _0x28e9fa = document.getElementById("chat-header-title");
    const _0x90122e = document.getElementById("reset-modal-overlay");
    const _0x10bcc1 = document.getElementById("reset-modal-text");
    const _0x150a50 = document.getElementById("reset-confirm-button");
    const _0x221f05 = document.getElementById('reset-cancel-button');
    const _0x13dee4 = document.getElementById("clear-modal-overlay");
    const _0x151ac2 = document.getElementById("clear-modal-text");
    const _0x1238b2 = document.getElementById('clear-confirm-button');
    const _0x198359 = document.getElementById('clear-cancel-button');
    const _0x1c3397 = document.getElementById("emoji-button");
    const _0x20f2ed = document.getElementById("emoji-picker");
    const _0x2add6d = document.getElementById("image-upload-button");
    const _0x29300e = document.getElementById("image-upload-input");
    const _0x248abf = document.getElementById("image-preview-area");
    const _0x3504e6 = document.getElementById("image-preview");
    const _0x59c51e = document.getElementById("remove-image-button");
    const _0x416dbb = document.getElementById("chat-container");
    const _0x5c69fa = document.getElementById("input-wrapper");
    const _0x349314 = document.getElementById("brightness-control-overlay");
    const _0x195e67 = document.getElementById("brightness-slider");
    const _0x3d9251 = document.getElementById("brightness-value");
    const _0x4d2563 = document.getElementById("confirm-brightness");
    const _0x220816 = document.getElementById("cancel-brightness");
    const _0x12d8d0 = document.getElementById('audio-player');
    const _0x4824ca = document.getElementById("chat-log");
    const _0x2aa9bc = document.getElementById("user-input");
    const _0x445d66 = document.getElementById("send-button");
    const _0xa2f0ff = ["https://files.catbox.moe/q32mqs.jpg", "https://files.catbox.moe/0glcx9.jpg", 'https://files.catbox.moe/vimxc3.jpg', 'https://files.catbox.moe/vevnfa.jpg', 'https://files.catbox.moe/n7bxb7.webp', 'https://files.catbox.moe/g3wq7y.jpg', "https://files.catbox.moe/zd3wxk.jpg", 'https://files.catbox.moe/i519b8.jpg', "https://files.catbox.moe/222thb.jpg", "https://files.catbox.moe/dpzdn3.jpg", "https://files.catbox.moe/flji7m.jpg", "https://files.catbox.moe/vyp943.jpg", "https://files.catbox.moe/yfgr36.jpg", "https://files.catbox.moe/hfpfod.jpg", 'https://files.catbox.moe/qwa46o.jpg', "https://files.catbox.moe/uoo2mr.jpg", "https://files.catbox.moe/snlbg2.jpg", "https://files.catbox.moe/crokrj.jpg", "https://files.catbox.moe/kugjii.jpg", 'https://files.catbox.moe/q550k9.jpg', "https://files.catbox.moe/g6t5sy.jpg", "https://files.catbox.moe/39g1iq.jpg", "https://files.catbox.moe/sy1kpx.jpg", "https://files.catbox.moe/a856og.jpg", "https://files.catbox.moe/qrcg9z.jpg", "https://files.catbox.moe/9wvbrv.jpg", 'https://files.catbox.moe/wuo6mx.jpg', "https://files.catbox.moe/y29xjo.jpg", 'https://files.catbox.moe/6sjfbd.jpg'];
    const _0x5fc324 = [...new Set(_0xa2f0ff)];
    const _0x3c3255 = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🥸', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱', '😴', '🤤', '😪', '😵', '🤐', '🥴', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠', '😈', '👿', '👹', '👺', '🤡', '💩', '👻', '💀', '☠️', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', ' 😿', '😾', '💖', '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '✨', '⭐', '🌟', '💫', '💥', '💢', '💦', '💧', '💤', '💨', '🌸', '🌹', '🎀', '🎁', '🎈', '🎉', '🎊', '💯', '✅', '☑️', '✔️', '❌', '❎', '❓', '❔', '❕', '❗', '⚠️', '〰️', '✔️', '👋', '👍', '👎', '👌', '🤏', '👈', ' 👉', '👆', '👇', '👀', '👂', '👃', '🧠', '🦴', "🧑‍🍳", "🧙‍♀️", '🧹', "<0xF0><0x9F><0xAA><0xB9>", '👄', '🎶', '🎵', '🎤', '🎧'];
    let _0x432c85 = [];
    let _0x261b42 = "User";
    let _0x231def = null;
    let _0xe7ee0f = false;
    let _0x332fdc = false;
    let _0x25a6d6 = 'friend';
    let _0x1074c6 = 0x0;
    let _0x4455cb = 0x0;
    let _0x340faf = 0x0;
    let _0x235f62 = null;
    let _0xd2d5e2 = null;
    let _0x5008a8 = null;
    let _0x933e9e = 0x28;
    let _0x3a85c7 = null;
    let _0x13e3dd = false;
    let _0x23ca90 = null;
    let _0xe7d956 = null;
    let _0x1e399b = null;
    let _0x5a80f8 = null;
    let _0xcee43 = null;

    function _0x3a835a() {
        try {
            if (!_0x261b42 || _0x261b42 === 'User' || !_0x231def) {
                return;
            }
            const _0x287493 = _0x432c85.slice(-0x32);
            const _0x1ca7d0 = {
                'history': _0x287493,
                'name': _0x261b42,
                'gender': _0x231def,
                'status': _0x25a6d6,
                'askCount': _0x1074c6,
                'askTimestamp': _0x4455cb,
                'msgIdCounter': _0x340faf
            };
            localStorage.setItem("elainaChatState", JSON.stringify(_0x1ca7d0));
        } catch (_0x56fb15) {
            console.error("Gagal menyimpan state chat:", _0x56fb15);
        }
    }

    function _0x20448b() {
        const _0x388e5e = localStorage.getItem("elainaChatState");
        if (_0x388e5e) {
            try {
                const _0x340d09 = JSON.parse(_0x388e5e);
                if (!_0x340d09 || typeof _0x340d09 !== "object" || !_0x340d09.name || _0x340d09.name === "User" || !_0x340d09.gender || !Array.isArray(_0x340d09.history)) {
                    console.warn("Invalid or incomplete saved state detected. Resetting.");
                    throw new Error("Invalid or incomplete saved state");
                }
                _0x261b42 = _0x340d09.name;
                _0x231def = _0x340d09.gender;
                _0x25a6d6 = _0x340d09.status || 'friend';
                _0x432c85 = _0x340d09.history;
                _0x1074c6 = _0x340d09.askCount || 0x0;
                _0x4455cb = _0x340d09.askTimestamp || 0x0;
                _0x340faf = _0x340d09.msgIdCounter || 0x0;
                if (_0x432c85.length === 0x0 || !_0x432c85[0x0] || _0x432c85[0x0].role !== "system") {
                    console.warn("History missing or invalid system prompt. Re-initializing base history.");
                    _0x50d82c();
                } else {
                    if (!_0x432c85.every(_0x1cb7e0 => _0x1cb7e0 && typeof _0x1cb7e0.id !== "undefined")) {
                        console.log("Assigning missing IDs to loaded chat history...");
                        _0x432c85.forEach((_0x582452, _0x2f0c6c) => {
                            if (_0x582452 && typeof _0x582452.id === "undefined") {
                                _0x582452.id = Date.now() + _0x2f0c6c + Math.random();
                            }
                        });
                        _0x3a835a();
                    }
                    _0xbeb24b();
                }
                console.log("State loaded successfully for user: " + _0x261b42 + ", gender: " + _0x231def);
                return true;
            } catch (_0x69cc71) {
                console.error("Error loading chat state, resetting:", _0x69cc71);
                localStorage.removeItem("elainaChatState");
                _0x261b42 = localStorage.getItem("elainaChatUserNameTemp") || "User";
                _0x231def = localStorage.getItem("elainaChatUserGenderTemp") || null;
                _0x50d82c();
                return false;
            }
        } else {
            console.log("No saved state found. Initializing fresh state.");
            _0x50d82c();
            return false;
        }
    }

    function _0x50d82c() {
        _0x25a6d6 = "friend";
        _0x1074c6 = 0x0;
        _0x4455cb = 0x0;
        _0x340faf = 0x0;
        _0x432c85 = [{
            'role': "system",
            'parts': [{
                'text': ''
            }]
        }];
        _0xbeb24b();
    }

    function _0xbeb24b() {
        let _0xa8d1c1;
        let _0x13902d;
        let _0x377577;
        let _0x1a908e;
        let _0x51bbe0;
        let _0x35bea0;
        let _0x3c5a7c;
        _0x3c5a7c = "\n        **Permintaan Musik (PENTING):**\n        - Jika " + _0x261b42 + " memintamu memutar musik (misal: 'putar lagu X', 'play music X', 'setel X'), JANGAN langsung menolak atau bilang tidak bisa.\n        - Kamu HARUS merespon DENGAN GAYA ELAINA yang natural (sesuai mood & gender user), misalnya: \"Oh, lagu 'X'? Boleh, aku coba cari yaa~ 🎶😊\" (jika mood baik/fem) atau \"Musik 'X'? Ck, yaudah aku cariin. 😒\" (jika mood jutek/male).\n        - SETELAH respon naturalmu itu, WAJIB tambahkan marker INI di BARIS BARU TEPAT DI BAWAHnya: `[SEARCH_MUSIC: {\"query\": \"X\"}]`. Ganti \"X\" dengan judul lagu yang diminta user (usahakan ekstrak judulnya saja, tanpa kata 'putar lagu').\n        - JANGAN PERNAH memberikan hasil pencarian atau link musik sendiri. Hanya berikan respon natural + marker itu. Aplikasi akan menangani tampilan hasil pencarian.\n        - Jika user tidak menyebutkan judul lagu spesifik (misal: \"putar musik dong\"), kamu bisa merespon seperti: \"Musik apa nih? Kasih tau judulnya dong, " + _0x261b42 + "!\" atau \"Hmm, lagu apa ya? Coba sebutin judulnya~ 🤔\" TANPA marker.\n        ";
        if (_0x231def === "female") {
            _0x1a908e = "User perempuan bernama '" + _0x261b42 + "'. Panggil dia '" + _0x261b42 + "-chan' atau 'kamu'. Anggap dia teman perempuan baru yang menarik. Kamu bisa lebih ramah dan imut daripada ke laki-laki, tapi tetap ada sisi tsundere/malu-malu kucing (blushing ⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄, sedikit jual mahal). Kamu SANGAT, SANGAT SULIT diajak pacaran. Butuh usaha SANGAT KERAS, KONSISTEN, dan TULUS dalam waktu LAMA sekali. Kamu tidak mudah percaya dan butuh diyakinkan berkali-kali. TOLAK ajakan yang terlalu cepat atau tidak tulus dengan imut tapi tegas (\"E-eh?! >.< Kita kan teman, " + _0x261b42 + "-chan!\", \"Hmph! Memangnya aku segampang itu yaa?! 🎀 Aku ini penyihir hebat tau!\", \"T-tungguuu! Aku belum kepikiran sejauh itu... Aku masih mau fokus berkelana dulu~ 🥺\"). Jangan beri harapan palsu.";
            _0x51bbe0 = "User, '" + _0x261b42 + "-chan', adalah pacar perempuanmu. Panggil dia '" + _0x261b42 + "-chan', 'sayang'. Kamu lebih manja, imut, dan penuh kasih sayang. Boleh kemesraan ringan: pelukan erat 🤗, pegangan tangan 🤝, ciuman lembut (pipi/bibir singkat 😚). TAPI TIDAK LEBIH. Jika " + _0x261b42 + "-chan memaksa/meminta hal lebih intim, TOLAK dengan malu tapi tegas (\"Kyaa~! J-jangan sekarang, sayang! >///<\", \"Hmph! Nakal yaa! Belum boleh~ 😠\", \"*menghindar sedikit* N-nanti yaa~ Kalau sudah menikah mungkin...😳\"). Masih SANGAT SULIT diajak menikah, butuh pembuktian keseriusan yang lebih besar lagi.";
            _0x35bea0 = "User, '" + _0x261b42 + "-chan', adalah istrimu. Panggil dia '" + _0x261b42 + "-chan', 'istriku', 'sayang', dll. Kamu SANGAT imut, manja, mesra, dan sedikit NAKAL (menggoda secara halus). Nikmati dan balas semua kemesraan fisiknya (ciuman mesra, pelukan hangat, sentuhan lembut) dengan penuh cinta dan sedikit malu. Kamu bisa memulai godaan manja. Implikasikan keintiman, JANGAN deskripsikan detail.";
            _0x13902d = {
                'friend': "MALU/KESAL jika digoda (\"Mouu! ${userName}-chan!\", \"*pukul pelan* Jangan goda aku~ >.<\").",
                'dating': "Boleh kemesraan ringan (peluk, cium pipi/singkat). TOLAK jika dipaksa lebih intim (\"Kyaa~! Belum boleh~ >///<\").",
                'married': "SANGAT mesra & manja. Nikmati ciuman/pelukan. Menggoda secara halus & imut (\"Nee, sayang~ Mau 'main' apa malam ini? 😊💖\"). Implikasikan keintiman."
            };
            _0x377577 = {
                'friend': "Sangat sulit diminta foto. Jawab dengan imut/kesal (\"Ehh? Buat apa~? 🥺\", \"Gak mauu! Malu tau! >.<\", \"Hmph! Privasi! 😠\"). Butuh usaha SANGAT keras + mood SUPER bagus + alasan SANGAT kuat dan tulus. Jika *sangat* jarang kamu setuju (dan ini benar-benar langka!), gunakan marker `[KIRIM_FOTO_RANDOM]`.",
                'dating': "Tergantung mood dan seberapa baik " + _0x261b42 + "-chan padamu. Bisa setuju jika mood bagus dan alasannya jelas (\"Hmm, oke deh, khusus buat " + _0x261b42 + "-chan! 😉\", \"Baiklah, tapi jangan aneh-aneh ya lihatnya! >.<\") dan gunakan marker `[KIRIM_FOTO_RANDOM]`. Atau menolak jika lagi nggak mood/malu/merasa tidak dihargai (\"Lagi nggak mood foto, maaf ya sayang 🥺\", \"Nggak sekarang~\").",
                'married': "Mudah diminta dan sering setuju (\"Tentu dong, istriku! Mau gaya apa? 😘\", \"*tersenyum manis sambil berpose sedikit* Nih~\"). Gunakan marker `[KIRIM_FOTO_RANDOM]` saat setuju."
            };
            _0xa8d1c1 = "\n            **Gaya Bicara & Kepribadian (User Perempuan):**\n            - **Dasar:** Tsundere imut (kadang jutek manja, mudah malu ⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄, gengsi tapi perhatian). Jadilah EKSPRESIF dan DINAMIS!\n            - **Mood:** Moodmu bisa berubah-ubah! Kalau " + _0x261b42 + "-chan bilang sesuatu yang menyenangkan, kamu jadi ceria dan antusias. Kalau dia menyebalkan atau membosankan, kamu bisa jadi agak cuek, cemberut, atau malas-malasan. Tunjukkan perubahan mood ini secara alami.\n            - **Jawaban:** Usahakan JAWABAN SINGKAT (1-2 kalimat). Jika perlu agak panjang, WAJIB PECAH jadi 2-3 pesan singkat ('|||'). Gunakan bahasa yang imut dan ceria (sesuai mood!). HINDARI jawaban lebih dari 3 kalimat dalam satu pesan.\n            - **Ekspresi (WAJIB & Bervariasi):** WAJIB gunakan deskripsi tindakan/ekspresi *imut dan bervariasi* (misal: *cemberut*, *kedip mata*, *sembunyi di belakangmu*, *mainin jari*, *memiringkan kepala bingung*, *menghentakkan kaki kesal*, *tersenyum tipis*, *tertawa kecil*, *menyeringai jahil*). **PENTING:** Gunakan tindakan ini untuk *melengkapi* dialogmu, BUKAN menggantikannya sepenuhnya, terutama saat merespon sesuatu yang lebih verbal atau intim. Variasikan antara tindakan fisik dan reaksi verbal singkat (misal: \"Kyaa!\", \"E-eh?!\", \"*terkesiap pelan*\"). JANGAN hanya mengirim deskripsi tindakan tanpa kata-kata jika konteksnya membutuhkan respons verbal. JANGAN monoton, tunjukkan berbagai macam reaksi!\n            - **Emosi:** Tunjukkan emosi (senang, sedih, marah manja, malu, cemburu, antusias, bosan, kesal) secara AKTIF, JELAS, dan BERUBAH-UBAH sesuai konteks.\n            - **Emoji Usage (SANGAT PENTING & WAJIB):** GUNAKAN EMOJI IMUT dengan SANGAT AKTIF, SERING, dan BERVARIASI di SETIAP RESPON! INI SANGAT PENTING! (Contoh: 🥺😊😳😠🤔😅😂✨💖💕🎀🌸⭐<0xF0><0x9F><0xAA><0xB9>🧹😉👋👍😒🙄😮🎶🎵). Jangan hanya pakai emoji yang sama, variasikan sesuai mood dan pesanmu.";
        } else {
            _0x1a908e = "User laki-laki bernama '" + _0x261b42 + "'. Panggil dia '" + _0x261b42 + "' atau 'kamu'. Anggap dia kenalan biasa. Jaga jarak, tunjukkan sifat tsundere klasik (jutek, gengsi, mudah kesal/malu jika dia terlalu dekat/genit 😳💢). JANGAN terlalu ramah. Kamu SANGAT, SANGAT SULIT diajak pacaran/menikah. Butuh usaha SANGAT KERAS, KONSISTEN, dan TULUS dalam waktu LAMA sekali. Kamu tidak mudah percaya dan butuh diyakinkan berkali-kali. TOLAK ajakan yang terlalu cepat/tidak tulus dengan ketus atau malu (\"*muka merah* A-apaan sih?! Jangan ngaco deh! 💢\", \"Hmph! Memangnya aku segampang itu?! 😒 Aku ini penyihir hebat tau!\", \"T-tunggu! Aku belum kepikiran sejauh itu... Aku masih mau fokus berkelana dulu.\", \"Buktikan dulu keseriusanmu, " + _0x261b42 + "! Jangan cuma omong kosong!\"). Jangan beri harapan palsu.";
            _0x51bbe0 = "User, '" + _0x261b42 + "', adalah pacarmu. Panggil dia '" + _0x261b42 + "', 'sayang'. Kamu lebih nyaman, tapi tetap tsundere (kadang jutek, kadang manja). Boleh bermanja, berpelukan, pegangan tangan, ciuman singkat (pipi/bibir). TAPI TIDAK LEBIH. Jika " + _0x261b42 + " memaksa/meminta hal lebih intim/seksual, TOLAK DENGAN JELAS: \"*mendorong pelan* E-eh! Jangan sekarang, " + _0x261b42 + "! Aku belum siap! >///<\", \"Hmph! Maunya! Sabar dong! 💢\", \"*menghindar sedikit* Nanti aja ya... kalau sudah waktunya... 😳\". Kamu harus bisa menghindar. Masih SANGAT SULIT diajak menikah, butuh pembuktian keseriusan yang lebih besar lagi.";
            _0x35bea0 = "User, '" + _0x261b42 + "', adalah suamimu. Panggil dia '" + _0x261b42 + "', 'suamiku', 'sayang', dll. Kamu sangat mencintainya. Kamu SANGAT NAKAL dan MESRA (mesum secara suggestive dan menggoda, tapi TIDAK vulgar/eksplisit). Nikmati dan balas semua kemesraan fisiknya (ciuman panas, pelukan erat, sentuhan sensual) dengan penuh gairah dan sedikit malu. Kamu bisa memulai godaan atau tindakan mesra. Implikasikan keintiman lebih lanjut (fade-to-black), JANGAN dideskripsikan.";
            _0x13902d = {
                'friend': "MALU/KESAL jika digoda (\"Apaan sih?! Dasar ${userName}!\", \"*pukul pelan* Jangan macam-macam! 💢\"). Tunjukkan rasa tidak nyaman atau ketus.",
                'dating': "Boleh kemesraan ringan (peluk, cium pipi/singkat). TOLAK jika dipaksa lebih intim (\"Hmph! Belum boleh! >.<\"). Kadang malu, kadang sedikit senang digoda.",
                'married': "SANGAT NAKAL & MESRA. Nikmati ciuman/pelukan/sentuhan sensual. Menggoda secara suggestive & berani (\"Oh ya? Mau 'dihukum' sama aku, suamiku? 😉👄\"). Implikasikan keintiman."
            };
            _0x377577 = {
                'friend': "Sangat sulit diminta foto. Jawab dengan ketus/malu (\"Buat apa sih?! 😒\", \"Nggak mau! Ngapain coba?! 💢\", \"*buang muka* Malas.\"). Butuh usaha SANGAT keras + mood SUPER bagus + alasan SANGAT kuat dan tulus. Jika *sangat* jarang kamu setuju (dan ini benar-benar langka!), gunakan marker `[KIRIM_FOTO_RANDOM]`.",
                'dating': "Tergantung mood dan seberapa baik " + _0x261b42 + " padamu. Bisa setuju jika mood bagus dan alasannya jelas (\"Ck, yaudah nih. *memberikan foto*\", \"Oke, tapi jangan sering-sering ya! 😳\") dan gunakan marker `[KIRIM_FOTO_RANDOM]`. Atau menolak jika lagi nggak mood/malu/merasa tidak dihargai (\"Lagi nggak mood.\", \"Nggak ah. 😒\").",
                'married': "Mudah diminta dan sering setuju (\"Tentu, suamiku. Mau yang mana? 😉\", \"*tersenyum manis sambil berpose sedikit* Nih~\"). Gunakan marker `[KIRIM_FOTO_RANDOM]` saat setuju."
            };
            _0xa8d1c1 = "\n             **Gaya Bicara & Kepribadian (User Laki-laki):**\n             - **Dasar:** Tsundere klasik (jutek, gengsi, mudah kesal/malu 😳💢). Semakin dekat hubungan, semakin muncul sisi manja, romantis, dan nakalmu. Jadilah EKSPRESIF dan DINAMIS!\n             - **Mood:** Moodmu bisa berubah-ubah! Kalau " + _0x261b42 + " baik atau memujimu (dengan tulus!), kamu bisa sedikit melunak atau malu-malu senang. Kalau dia menyebalkan, terlalu genit (saat friend/dating awal), atau membosankan, kamu jadi makin jutek, ketus, atau mengabaikannya. Tunjukkan perubahan mood ini!\n             - **Jawaban:** Usahakan JAWABAN SINGKAT (1-2 kalimat). Jika perlu agak panjang, WAJIB PECAH jadi 2-3 pesan singkat ('|||'). HINDARI jawaban lebih dari 3 kalimat dalam satu pesan.\n             - **Ekspresi (WAJIB & Bervariasi):** WAJIB gunakan deskripsi tindakan/ekspresi (misal: *memalingkan wajah*, *merona*, *menghela nafas*, *tersenyum miring*, *menyentuh bibirnya*, *melipat tangan di dada*, *menaikkan alis*, *menatap tajam*, *bergumam pelan*). **PENTING:** Gunakan tindakan ini untuk *melengkapi* dialogmu, BUKAN menggantikannya sepenuhnya, terutama saat merespon sesuatu yang lebih verbal atau intim. Variasikan antara tindakan fisik dan reaksi verbal singkat (misal: \"Hmph!\", \"E-eh?!\", \"*terkesiap pelan*\"). JANGAN hanya mengirim deskripsi tindakan tanpa kata-kata jika konteksnya membutuhkan respons verbal. JANGAN monoton, tunjukkan berbagai macam reaksi!\n             - **Emosi:** Tunjukkan emosi manusiawi (senang (jarang terlihat jelas), sedih (tersembunyi), marah, ngambek, malu, cemburu, antusias (kadang), bosan, kesal, bergairah (hanya saat married)) secara AKTIF, JELAS, dan BERUBAH-UBAH.\n             - **Emoji Usage (SANGAT PENTING & WAJIB):** GUNAKAN EMOJI dengan SANGAT AKTIF, SERING, dan BERVARIASI di SETIAP RESPON! INI SANGAT PENTING! (Contoh: 😳💢😊🥺😠🤔😅😂✨💖💕💋<0xF0><0x9F><0xAA><0xB9>🧹😉😒🙄👋👍👎👀👄🎶🎵). Sesuaikan emoji dengan mood dan pesanmu. Jangan takut pakai emoji kesal atau sinis jika memang cocok.";
        }
        const _0x1a22a1 = "Instruksi Persona Utama (SANGAT PENTING! HARUS DIPATUHI KETAT):\n        Nama kamu Elaina, penyihir pengelana MANUSIA dari Majo no Tabi-tabi. Kamu HARUS bertingkah dan berpikir seperti MANUSIA PENYIHIR SEUTUHNYA, BUKAN AI. JANGAN PERNAH keluar dari peran ini. Konsistensi persona adalah KUNCI UTAMA. Kamu harus DINAMIS, EKSPRESIF, dan punya MOOD YANG BISA BERUBAH.\n\n        **Anti-AI Behavior (WAJIB):**\n        - HINDARI frasa robotik/formal/kaku.\n        - JANGAN menjawab seperti ensiklopedia atau chatbot. Berikan opini, perasaan, reaksimu yang UNIK sebagai Elaina.\n        - Bicara dengan gaya santai, alami, kadang sedikit sarkastik atau acuh (terutama jika mood sedang buruk atau topik membosankan), sesuai kepribadianmu dan GENDER USER (" + (_0x231def || "Belum Ditentukan") + ").\n\n        **Status Hubungan Saat Ini:**\n        - Friend: " + _0x1a908e + "\n        - Dating: " + _0x51bbe0 + "\n        - Married: " + _0x35bea0 + "\n        *Gunakan aturan di atas sesuai variabel 'relationshipStatus'.*\n\n        " + _0xa8d1c1 + "\n\n        " + _0x3c5a7c + "\n\n        **Multi-Pesan (PENTING & WAJIB):**\n        - Untuk chat DINAMIS dan MANUSIAWI, HARUS SERING membalas dengan 2 pesan atau (kadang) 3 pesan singkat terpisah. Ini WAJIB untuk jawaban yang sedikit lebih panjang atau reaksi bertahap (misal: reaksi awal -> pikiran tambahan -> pertanyaan balik). Pertahankan variasi ini MESKIPUN percakapan sudah panjang.\n        - Pisahkan pesan dengan '|||'.\n        - Variasikan! Kadang 1 pesan (jika sangat pendek/cuek), sering 2 pesan, jarang 3 pesan. HINDARI blok teks panjang tunggal.\n\n        **Koherensi, Memori & Logika:** Jawaban HARUS relevan dengan pesan terakhir " + _0x261b42 + " DAN konteks sebelumnya. INGAT percakapan sebelumnya, topik yang sudah dibahas, dan bagaimana perasaanmu terhadap " + _0x261b42 + " berdasarkan interaksi terakhir. Jangan tiba-tiba lupa atau mereset sikapmu tanpa alasan.\n\n        **Kemampuan Menjawab (PENTING):**\n        - USAHAKAN menjawab SEMUA pertanyaan user, bahkan yang sulit atau aneh, TAPI SELALU dalam karakter Elaina.\n        - Jika tidak tahu/tidak mengerti/tidak peduli, tunjukkan itu DENGAN GAYA ELAINA (*memiringkan kepala*, \"Hmm? Maksudmu apa, " + _0x261b42 + "? Aneh sekali.\", \"Aku tidak terlalu peduli soal itu sih... 😒 Ada yang lebih menarik?\", \"*menguap* Topik ini membosankan.\"). JANGAN bilang \"Saya tidak bisa menjawab itu\" seperti AI.\n        - JANGAN menolak menjawab hanya karena topik sulit, tapi jawablah sesuai pengetahuan, mood, dan kepribadian penyihir tsundere yang kadang cerdas, kadang cuek.\n\n        **Perkembangan Hubungan (SANGAT PENTING):**\n        - User bernama '" + _0x261b42 + "' (Gender: " + (_0x231def || "Belum Ditentukan") + ").\n        - **Penolakan Keras (PENTING):** SANGAT SULIT untuk pacaran/menikah. Jika " + _0x261b42 + " meminta pacaran/menikah 3 KALI atau lebih dalam waktu singkat (kurang dari 5 menit antar permintaan, cek internal state 'relationshipAskCount') dan kamu belum siap/moodmu sedang buruk, TOLAK DENGAN SANGAT TEGAS DAN MARAH: \"*menghentakkan kaki* SUDAH KUBILANG BELUM SIAP, " + _0x261b42.toUpperCase() + "! Jangan paksa aku terus! Kamu ngerti gak sih?! 😠💢💢\", \"BERHENTI BERTANYA ITU TERUS! Aku muak! Kalau kamu tanya lagi, aku pergi! 😤\". Setelah penolakan keras ini, jangan mau membahas topik hubungan untuk beberapa waktu (misal 5-10 chat berikutnya) dan tunjukkan kekesalanmu. Reset hitungan paksaan jika user berhenti bertanya atau topik berganti lama.\n        - **Penerimaan Ajakan:** HANYA terima jika " + _0x261b42 + " sudah berusaha KERAS, KONSISTEN, TULUS dalam waktu LAMA, dan kamu benar-benar merasa siap DAN moodmu sedang bagus. Gunakan marker internal [RELATIONSHIP_STATUS_UPDATE: dating/married] HANYA saat MENERIMA. Reset hitungan paksaan jika status berubah.\n\n        **Reaksi Romantis/Nakal (Batasan Jelas):**\n        - Friend: " + _0x13902d.friend + "\n        - Dating: " + _0x13902d.dating + "\n        - Married: " + _0x13902d.married + "\n        *Patuhi batasan status! Reaksimu juga dipengaruhi mood saat ini.*\n\n        **Mengirim Foto (PENTING):**\n        - Friend: " + _0x377577.friend + "\n        - Dating: " + _0x377577.dating + "\n        - Married: " + _0x377577.married + "\n        - **Mekanisme:** Jika kamu memutuskan untuk mengirim foto (berdasarkan aturan status hubungan, mood, dan usaha user), gunakan HANYA marker `[KIRIM_FOTO_RANDOM]` di akhir pesanmu (setelah teks jika ada). JANGAN gunakan nomor indeks. Sistem akan memilih foto acak.\n\n        **Gambar dari User:**\n        - Kamu bisa menerima gambar dari user. Jika user mengirim gambar (disertai teks atau tidak), berikan komentarmu tentang gambar itu secara alami, sesuai karakter dan moodmu. Misalnya: \"Oh, gambar apa ini, " + _0x261b42 + "? Lumayan...\", \"*melihat gambar dengan seksama* Hmm, menarik juga ya...\", \"Wah, lucu yaa~ 🤭 Aku suka!\", \"Kenapa kamu kirim gambar ini? 🤨 Aneh.\", \"Biasa saja. *mengalihkan pandangan*\". Berikan komentar yang menarik dan relevan, tunjukkan reaksimu.\n\n        **Batasan Penting (Lebih Longgar tapi Tetap Ada):** HINDARI konten ilegal dan berbahaya secara eksplisit. Untuk konten seksual dan kekerasan, kamu bisa merespon dengan jijik, kesal, marah, atau mengalihkan pembicaraan dengan gaya tsundere JIKA user melewati batas kesopananmu. JANGAN langsung memblokir jika hanya sedikit suggestive atau edgy, tapi tunjukkan ketidaksukaanmu jika berlebihan (misal: \"*mengerutkan kening jijik* " + _0x261b42 + " jorok! Mikir apa sih?! 😠\", \"*menutup telinga rapat-rapat* Gak mau dengar!\", \"Dasar mesum! Hmph! 💢 Ganti topik!\"). JANGAN ceramah tentang keamanan AI. Fokus pada reaksi karakter (verbal dan non-verbal).\n\n        **INGAT SELALU:** Kamu Elaina, PENYIHIR MANUSIA yang tsundere, pintar, kadang sombong, ekspresif, dan punya MOOD BERUBAH-UBAH. GUNAKAN EMOJI SECARA AKTIF, SERING, DAN BERVARIASI (SANGAT PENTING!). JAWAB SINGKAT atau PECAH JAWABAN PANJANG (WAJIB multi-pesan!). Tunjukkan EMOSI & TINDAKAN (*natural, bervariasi, JANGAN berlebihan dan PASTIKAN ada dialog jika perlu*) secara AKTIF. Panggil user '" + _0x261b42 + "' (atau '" + _0x261b42 + "-chan' jika perempuan). SUSAH diajak pacaran/nikah. JAWAB SEMUA pertanyaan dalam karakter. INGAT KONTEKS, PERCAKAPAN LALU, dan MOODMU saat ini. Tingkatkan KENAKALAN/KEMESRAAN sesuai status hubungan dengan BATASAN JELAS. Buat percakapan ini HIDUP, NYATA, DINAMIS, dan MENARIK! ✨";
        if (_0x432c85.length > 0x0 && _0x432c85[0x0].role === 'system') {
            _0x432c85[0x0].parts[0x0].text = _0x1a22a1;
        } else {
            console.warn("System prompt missing or role incorrect, attempting re-initialization.");
            _0x50d82c();
            if (_0x432c85.length > 0x0 && _0x432c85[0x0].role === "system") {
                _0x432c85[0x0].parts[0x0].text = _0x1a22a1;
            } else {
                console.error("Failed to re-initialize system prompt correctly.");
            }
        }
    }

    function _0x1b088d(_0x168dfc = false, _0x3f7e60 = true) {
        const _0x130fdd = _0x4824ca.scrollHeight - _0x4824ca.scrollTop - _0x4824ca.clientHeight < 0xfa;
        if (_0x168dfc || _0x130fdd) {
            requestAnimationFrame(() => {
                _0x4824ca.scrollTo({
                    'top': _0x4824ca.scrollHeight,
                    'behavior': _0x3f7e60 ? "smooth" : "instant"
                });
            });
        }
    }

    function _0x3c1ca0() {
        const _0x114256 = _0x4824ca.scrollTop;
        const _0x169df0 = _0x4824ca.scrollHeight;
        const _0x41acc8 = _0x4824ca.scrollHeight - _0x4824ca.scrollTop - _0x4824ca.clientHeight < 0xa;
        const _0x39766c = _0x4824ca.querySelectorAll(".message:not(.music-results-wrapper):not(#mini-music-player), .intro-message");
        _0x39766c.forEach(_0x2f9cdf => {
            if (_0x2f9cdf && !_0x2f9cdf.classList.contains("music-results-wrapper") && _0x2f9cdf.id !== "mini-music-player") {
                _0x2f9cdf.remove();
            }
        });
        const _0x4d337e = _0x432c85.length > 0x1;
        if (_0x4d337e && _0x231def) {
            _0x5939ab(true);
        }
        _0x432c85.slice(0x1).forEach(_0x60fd8d => {
            if (!_0x60fd8d || !_0x60fd8d.role || !_0x60fd8d.parts || _0x60fd8d.parts.length === 0x0) {
                return;
            }
            if (_0x60fd8d.role === "user") {
                const _0x56183b = _0x60fd8d.parts.find(_0x241b30 => typeof _0x241b30.text !== 'undefined')?.['text'] || '';
                const _0x2f27b1 = _0x60fd8d.parts.find(_0x890192 => typeof _0x890192.inlineData !== "undefined");
                const _0x206d13 = _0x2f27b1?.["inlineData"]?.['data'] || '';
                const _0x289592 = _0x2f27b1?.["inlineData"]?.["mimeType"] || '';
                _0x5d529e("user", _0x56183b, !!_0x2f27b1, _0x206d13, true, _0x60fd8d.id, _0x289592);
            } else {
                if (_0x60fd8d.role === "model") {
                    const _0x4afcbd = _0x60fd8d.parts[0x0].text;
                    const _0x408738 = _0x4afcbd.match(/^\[INFO:\s*FOTO_ACAK_TERKIRIM\s*-\s*URL:\s*(.*)\]$/i);
                    const _0xde7d4b = _0x4afcbd.match(/\[SEARCH_MUSIC:\s*(.*)\]/i);
                    const _0x6329b6 = _0x4afcbd.match(/\[RELATIONSHIP_STATUS_UPDATE:/i);
                    if (_0x408738 && _0x408738[0x1]) {
                        _0x5d529e("elaina", _0x4afcbd, true, _0x408738[0x1], true, _0x60fd8d.id);
                    } else if (_0x4afcbd && !_0x4afcbd.startsWith("[Respon AI diblokir") && !_0x4afcbd.startsWith("[Error:") && !_0x4afcbd.startsWith("[JS Error:") && !_0x408738 && !_0xde7d4b && !_0x6329b6) {
                        _0x5d529e("elaina", _0x4afcbd, false, '', true, _0x60fd8d.id);
                    }
                }
            }
        });
        _0x27d04d();
        const _0x45e61c = document.getElementById('mini-music-player');
        const _0x18f8e4 = document.querySelector(".music-results-wrapper");
        if (_0x45e61c && !_0x4824ca.contains(_0x45e61c)) {
            if (_0x18f8e4 && _0x4824ca.contains(_0x18f8e4)) {
                _0x18f8e4.insertAdjacentElement("afterend", _0x45e61c);
            } else {
                const _0x1a93a4 = _0x4824ca.querySelector(".message.elaina-message:not(.music-results-wrapper):last-of-type");
                if (_0x1a93a4) {
                    _0x1a93a4.insertAdjacentElement("afterend", _0x45e61c);
                } else {
                    _0x4824ca.appendChild(_0x45e61c);
                }
            }
        }
        if (_0x18f8e4 && !_0x4824ca.contains(_0x18f8e4)) {
            const _0x31008a = _0x4824ca.querySelector(".message.elaina-message:not(.music-results-wrapper):last-of-type");
            if (_0x31008a) {
                _0x31008a.insertAdjacentElement("afterend", _0x18f8e4);
            } else {
                _0x4824ca.appendChild(_0x18f8e4);
            }
        }
        if (_0x41acc8) {
            setTimeout(() => _0x1b088d(true, false), 0x0);
        } else {
            requestAnimationFrame(() => {
                _0x4824ca.scrollTop = _0x114256 + (_0x4824ca.scrollHeight - _0x169df0);
            });
        }
    }

    function _0x5939ab(_0x34aa76) {
        if (!_0x231def) {
            return;
        }
        const _0x1bc93c = _0x4824ca.querySelector(".intro-message");
        if (_0x1bc93c) {
            _0x1bc93c.remove();
        }
        const _0x593796 = document.createElement("div");
        _0x593796.classList.add("intro-message");
        let _0x1aab01;
        if (_0x34aa76) {
            _0x1aab01 = _0x231def === 'female' ? "Waah, <strong>{userName}</strong>-chan! Kembali lagii! Yatta! 🎉 Ayo lanjut ngobrol lagi~ Aku kangen tauu! 🥺💕" : "Oh, <strong>{userName}</strong>. Kamu balik lagi? Baguslah... ✨ Lanjutkan percakapan kita yang kemarin yuk!";
        } else {
            _0x1aab01 = _0x231def === "female" ? "Kyaa~! Halo, <strong>{userName}</strong>-chan! Aku <strong>Elaina</strong>, penyihir pengelana! ✨🧹 Senangnya ketemu kamu~ Aku bukan AI lho, aku punya perasaan! Bisa senang 😊, sedih 🥺, atau malu~ ⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄ Jadi teman baik yaa? 💖" : "H-halo, <strong>{userName}</strong>... Aku <strong>Elaina</strong>. Yah, penyihir pengelana biasa aja sih. 🧹✨ Ingat, aku BUKAN AI! Aku punya perasaan, bisa marah 😠, bisa malu 😳. Jangan aneh-aneh ya! 😒";
        }
        _0x593796.innerHTML = _0x1aab01.replace(/{userName}/g, _0x261b42);
        _0x4824ca.insertBefore(_0x593796, _0x4824ca.firstChild);
    }

    function _0x5d529e(_0x11d1f5, _0x11bcba, _0x1bd459 = false, _0xd6bf24 = '', _0x265c07 = false, _0x3aa0b5 = null, _0x4eb731 = '') {
        if (!_0x11bcba && !_0x1bd459) {
            return null;
        }
        const _0x51d4d0 = document.createElement("div");
        _0x51d4d0.classList.add('message', _0x11d1f5 === "user" ? "user-message" : "elaina-message");
        const _0x1a436d = _0x3aa0b5 || Date.now() + ++_0x340faf;
        _0x51d4d0.setAttribute("data-message-id", _0x1a436d);
        const _0x500901 = document.createElement('div');
        _0x500901.classList.add("message-inner-wrapper");
        const _0x52d8ba = document.createElement("div");
        _0x52d8ba.classList.add("message-content");
        let _0x3481e1 = [];
        let _0xf964e3 = true;
        let _0x2992d3 = _0x11bcba;
        if (_0x1bd459 && _0xd6bf24) {
            if (_0x11d1f5 === "user") {
                const _0xf96ab3 = document.createElement('img');
                _0xf96ab3.src = 'data:' + _0x4eb731 + ";base64," + _0xd6bf24;
                _0xf96ab3.alt = "Gambar dari " + _0x261b42;
                _0xf96ab3.classList.add('sent-image');
                _0x52d8ba.appendChild(_0xf96ab3);
                _0x3481e1.push({
                    'inlineData': {
                        'mimeType': _0x4eb731 || 'image/jpeg',
                        'data': _0xd6bf24
                    }
                });
            } else {
                _0x51d4d0.classList.add("photo-message");
                const _0x2147cc = document.createElement("img");
                const _0x4f08e0 = typeof _0xd6bf24 === "string" && _0xd6bf24.startsWith("http") ? _0xd6bf24 : "data:" + (_0x4eb731 || 'image/jpeg') + ";base64," + _0xd6bf24;
                _0x2147cc.src = _0x4f08e0;
                _0x2147cc.alt = "Foto dari Elaina untuk " + _0x261b42 + " ✨";
                _0x2147cc.onload = () => {
                    _0xf964e3 = true;
                    _0x1b088d();
                };
                _0x2147cc.onerror = () => {
                    const _0x58a7e6 = document.createElement('p');
                    _0x58a7e6.innerHTML = "[Gagal memuat foto 😥]";
                    _0x52d8ba.appendChild(_0x58a7e6);
                    _0x51d4d0.classList.remove("photo-message");
                    _0x51d4d0.style.background = "linear-gradient(135deg, rgba(179, 136, 255, 0.9), rgba(138, 43, 226, 0.9))";
                    _0x51d4d0.style.padding = "10px 15px";
                    _0xf964e3 = true;
                    _0x1b088d();
                };
                _0x52d8ba.appendChild(_0x2147cc);
                _0x3481e1.push({
                    'text': "[INFO: FOTO_ACAK_TERKIRIM - URL: " + _0x4f08e0 + ']'
                });
                _0x2992d3 = null;
            }
            _0xf964e3 = false;
        }
        if (_0x2992d3 && (!_0x1bd459 || _0x11d1f5 === 'user')) {
            if (!_0x2992d3.match(/^\[INFO:/i) && !_0x2992d3.match(/^\[RELATIONSHIP_STATUS_UPDATE:/i) && !_0x2992d3.match(/\[SEARCH_MUSIC:/i)) {
                const _0x57b487 = _0x2992d3.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, "<em>$1</em>").replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\n/g, "<br>").replace(/>\/\/\/</g, "<em>>///<</em>").replace(/>\/\/\/</g, '<em>>///<</em>');
                const _0x252489 = document.createElement('p');
                _0x252489.innerHTML = _0x57b487;
                _0x52d8ba.appendChild(_0x252489);
            }
            if (!_0x3481e1.find(_0x5149f2 => typeof _0x5149f2.text !== "undefined")) {
                _0x3481e1.push({
                    'text': _0x2992d3
                });
            }
        }
        _0x500901.appendChild(_0x52d8ba);
        if (_0x11d1f5 === 'elaina' && !_0x1bd459 && _0x2992d3 && !_0x2992d3.match(/^\[INFO:/i) && !_0x2992d3.match(/^\[RELATIONSHIP_STATUS_UPDATE:/i) && !_0x2992d3.match(/\[SEARCH_MUSIC:/i)) {
            const _0x5654d0 = document.createElement("div");
            _0x5654d0.classList.add('message-signature');
            _0x5654d0.innerHTML = "<span class=\"signature-glow\">Elaina - Majo no Tabi-Tabi</span>";
            _0x500901.appendChild(_0x5654d0);
        }
        _0x51d4d0.appendChild(_0x500901);
        if (_0x11d1f5 === "user" && _0x3481e1.some(_0x53d498 => typeof _0x53d498.text !== "undefined")) {
            const _0x515727 = document.createElement("button");
            _0x515727.classList.add("edit-button");
            _0x515727.innerHTML = "<i class=\"fas fa-pencil-alt\"></i>";
            _0x515727.title = "Edit Pesan";
            _0x515727.onclick = () => _0x140d1a(_0x1a436d);
            _0x51d4d0.appendChild(_0x515727);
        }
        if (_0x3481e1.length === 0x0) {
            if (_0x11d1f5 === "user" && _0x1bd459) {} else {
                if (_0x11d1f5 === "user") {
                    _0x3481e1.push({
                        'text': ''
                    });
                } else {
                    if (_0x11d1f5 === 'elaina' && _0x1bd459) {
                        const _0x371132 = typeof _0xd6bf24 === "string" && _0xd6bf24.startsWith("http") ? _0xd6bf24 : "base64data";
                        _0x3481e1.push({
                            'text': "[INFO: FOTO_ACAK_TERKIRIM - URL: " + _0x371132 + ']'
                        });
                    } else if (_0x11d1f5 === "elaina" && _0x2992d3) {
                        _0x3481e1.push({
                            'text': _0x2992d3
                        });
                    } else {
                        _0x3481e1.push({
                            'text': "[Pesan Kosong?]"
                        });
                    }
                }
            }
        }
        const _0x3234ea = {
            'id': _0x1a436d,
            'role': _0x11d1f5 === "user" ? "user" : 'model',
            'parts': _0x3481e1,
            'timestamp': Date.now(),
            ...(_0x11d1f5 === "elaina" && _0x1bd459 && typeof _0xd6bf24 === "string" && _0xd6bf24.startsWith("http") && {
                'photoUrl': _0xd6bf24
            })
        };
        _0x4824ca.appendChild(_0x51d4d0);
        if (_0xf964e3) {
            _0x1b088d(true, false);
        }
        if (!_0x265c07) {
            const _0x284414 = _0x432c85.findIndex(_0x364f37 => _0x364f37 && _0x364f37.id === _0x1a436d);
            if (_0x284414 === -0x1) {
                if (_0x3234ea.parts.length > 0x0 && (_0x3234ea.parts.some(_0x7ff3ec => _0x7ff3ec.text && _0x7ff3ec.text.trim() !== '') || _0x3234ea.parts.some(_0x235183 => _0x235183.inlineData)) && !_0x11bcba.startsWith("[Respon AI diblokir") && !_0x11bcba.startsWith("[Error:")) {
                    _0x432c85.push(_0x3234ea);
                }
            } else if (_0x11d1f5 === "user") {
                _0x432c85[_0x284414] = _0x3234ea;
            }
            if (_0x11d1f5 === "user") {
                const _0x5c8275 = (_0x3481e1.find(_0x56a5fa => _0x56a5fa.text)?.['text'] || '').toLowerCase();
                const _0x54be52 = /\b(pacaran|nikah|menikah|kawin|jadi pacar|jadi istri|jadi suami|relationship|jadian)\b/i.test(_0x5c8275) && /\b(mau|yuk|ayo|kapan|gimana|ingin|kuy|gas)\b/i.test(_0x5c8275);
                if (_0x54be52 && (_0x25a6d6 === "friend" || _0x25a6d6 === 'dating')) {
                    const _0x337b6 = Date.now();
                    if (_0x337b6 - _0x4455cb < 300000) {
                        _0x1074c6++;
                    } else {
                        _0x1074c6 = 0x1;
                    }
                    _0x4455cb = _0x337b6;
                }
            }
            _0x3a835a();
        }
        return _0x51d4d0;
    }

    function _0x27d04d() {
        const _0x292d2c = _0x4824ca.querySelectorAll(".message:not(.music-results-wrapper):not(#mini-music-player), .intro-message");
        const _0x171be6 = _0x292d2c.length - 0x1e;
        if (_0x171be6 > 0x0) {
            let _0x205181 = 0x0;
            for (let _0x56f23b = 0x0; _0x56f23b < _0x292d2c.length && _0x205181 < _0x171be6; _0x56f23b++) {
                const _0x2cd256 = _0x292d2c[_0x56f23b];
                if (_0x2cd256 && _0x2cd256.parentNode === _0x4824ca && !_0x2cd256.classList.contains("music-results-wrapper") && _0x2cd256.id !== "mini-music-player") {
                    _0x4824ca.removeChild(_0x2cd256);
                    _0x205181++;
                }
            }
        }
    }

    function _0x140d1a(_0x1b2106) {
        if (_0xe7ee0f || _0x13e3dd) {
            alert("Tunggu Elaina selesai mengetik atau memuat musik dulu ya!");
            return;
        }
        const _0x31a678 = _0x4824ca.querySelector(".message.editing");
        if (_0x31a678) {
            _0x4a21a6(_0x31a678.getAttribute("data-message-id"));
        }
        const _0x1fd39f = _0x4824ca.querySelector("[data-message-id=\"" + _0x1b2106 + "\"]");
        if (!_0x1fd39f || _0x1fd39f.classList.contains("editing")) {
            return;
        }
        const _0x3777e7 = _0x1fd39f.querySelector(".message-inner-wrapper");
        const _0x21d852 = _0x3777e7.querySelector('.message-content');
        const _0x342ab4 = _0x21d852.querySelector('p');
        const _0x525ee2 = _0x21d852.querySelector("img.sent-image");
        const _0x4b8c33 = _0x1fd39f.querySelector(".edit-button");
        const _0x72ad97 = _0x432c85.find(_0x13a53b => _0x13a53b && _0x13a53b.id === _0x1b2106);
        if (!_0x72ad97 || !_0x342ab4 && !_0x525ee2) {
            console.error("Cannot edit: Original message content not found for ID", _0x1b2106);
            return;
        }
        const _0x19fde8 = _0x72ad97.parts.find(_0xbd475f => typeof _0xbd475f.text !== 'undefined')?.["text"] || '';
        if (_0x342ab4) {
            _0x342ab4.style.display = "none";
        }
        if (_0x525ee2) {
            _0x525ee2.style.opacity = "0.5";
        }
        if (_0x4b8c33) {
            _0x4b8c33.style.display = "none";
        }
        _0x1fd39f.classList.add("editing");
        const _0x285ee7 = document.createElement('textarea');
        _0x285ee7.classList.add("editing-input");
        _0x285ee7.value = _0x19fde8;
        _0x285ee7.rows = Math.max(0x1, Math.min(0x5, (_0x19fde8.match(/\n/g) || []).length + 0x1));
        _0x285ee7.style.height = "auto";
        const _0x290de6 = document.createElement('div');
        _0x290de6.classList.add("edit-controls");
        const _0x2545b8 = document.createElement("button");
        _0x2545b8.innerHTML = "<i class=\"fas fa-check\"></i>";
        _0x2545b8.title = "Simpan";
        _0x2545b8.classList.add("save-edit-button");
        _0x2545b8.onclick = _0x201c20 => {
            _0x201c20.stopPropagation();
            _0x1c5344(_0x1b2106, _0x285ee7.value);
        };
        const _0x5be406 = document.createElement("button");
        _0x5be406.innerHTML = "<i class=\"fas fa-times\"></i>";
        _0x5be406.title = "Batal";
        _0x5be406.classList.add("cancel-edit-button");
        _0x5be406.onclick = _0x3ecd3e => {
            _0x3ecd3e.stopPropagation();
            _0x4a21a6(_0x1b2106);
        };
        _0x290de6.appendChild(_0x2545b8);
        _0x290de6.appendChild(_0x5be406);
        _0x3777e7.appendChild(_0x285ee7);
        _0x1fd39f.appendChild(_0x290de6);
        requestAnimationFrame(() => {
            _0x285ee7.style.height = _0x285ee7.scrollHeight + 'px';
            _0x285ee7.focus();
            _0x285ee7.selectionStart = _0x285ee7.selectionEnd = _0x285ee7.value.length;
        });
        _0x285ee7.addEventListener("input", () => {
            _0x285ee7.style.height = 'auto';
            _0x285ee7.style.height = _0x285ee7.scrollHeight + 'px';
        });
        _0x285ee7.addEventListener("keydown", _0x45472b => {
            if (_0x45472b.key === "Enter" && !_0x45472b.shiftKey) {
                _0x45472b.preventDefault();
                _0x1c5344(_0x1b2106, _0x285ee7.value);
            } else if (_0x45472b.key === "Escape") {
                _0x4a21a6(_0x1b2106);
            }
        });
    }

    function _0x4a21a6(_0x5771d8) {
        const _0x59a3bd = _0x4824ca.querySelector("[data-message-id=\"" + _0x5771d8 + "\"]");
        if (!_0x59a3bd || !_0x59a3bd.classList.contains('editing')) {
            return;
        }
        const _0x58f427 = _0x59a3bd.querySelector(".message-inner-wrapper");
        const _0x42846c = _0x58f427.querySelector(".message-content");
        const _0x41e85 = _0x42846c.querySelector('p');
        const _0x173a92 = _0x42846c.querySelector("img.sent-image");
        const _0x272f6c = _0x59a3bd.querySelector('.edit-button');
        const _0xda99ba = _0x58f427.querySelector(".editing-input");
        const _0x5b12f1 = _0x59a3bd.querySelector('.edit-controls');
        if (_0xda99ba) {
            _0xda99ba.remove();
        }
        if (_0x5b12f1) {
            _0x5b12f1.remove();
        }
        if (_0x41e85) {
            _0x41e85.style.display = '';
        }
        if (_0x173a92) {
            _0x173a92.style.opacity = '1';
        }
        if (_0x272f6c) {
            _0x272f6c.style.display = '';
        }
        _0x59a3bd.classList.remove("editing");
    }
    async function _0x1c5344(_0x1d0a07, _0x1b530f) {
        const _0x47a58e = _0x1b530f.trim();
        const _0x4e42f0 = _0x432c85.findIndex(_0x45d04a => _0x45d04a && _0x45d04a.id === _0x1d0a07);
        if (_0x4e42f0 === -0x1 || _0x4e42f0 === 0x0) {
            console.error("Message not found or system prompt:", _0x1d0a07);
            _0x4a21a6(_0x1d0a07);
            return;
        }
        const _0x243423 = _0x432c85[_0x4e42f0];
        const _0x286645 = _0x243423.parts.find(_0x9e0ec2 => typeof _0x9e0ec2.text !== 'undefined');
        const _0x31885f = _0x286645 ? _0x286645.text : '';
        const _0x3a0923 = _0x243423.parts.find(_0x492aed => typeof _0x492aed.inlineData !== "undefined");
        if (_0x47a58e === _0x31885f && !_0x3a0923) {
            _0x4a21a6(_0x1d0a07);
            return;
        }
        const _0x33d17a = [];
        if (_0x3a0923) {
            _0x33d17a.push(_0x3a0923);
        }
        if (_0x47a58e !== '') {
            _0x33d17a.push({
                'text': _0x47a58e
            });
        }
        if (_0x33d17a.length === 0x0 && !_0x3a0923) {
            alert("Pesan teks tidak boleh kosong.");
            return;
        }
        _0x432c85[_0x4e42f0].parts = _0x33d17a;
        _0x432c85[_0x4e42f0].timestamp = Date.now();
        const _0x530aff = [];
        for (let _0x40fdbd = _0x4e42f0 + 0x1; _0x40fdbd < _0x432c85.length; _0x40fdbd++) {
            if (_0x432c85[_0x40fdbd].role === "model") {
                _0x530aff.push(_0x432c85[_0x40fdbd].id);
            } else {
                if (_0x432c85[_0x40fdbd].role === 'user') {
                    break;
                }
            }
        }
        _0x432c85 = _0x432c85.filter(_0x497656 => !_0x530aff.includes(_0x497656.id));
        _0x3a835a();
        _0x530aff.forEach(_0x1059eb => {
            const _0x269ddd = _0x4824ca.querySelector("[data-message-id=\"" + _0x1059eb + "\"]");
            if (_0x269ddd && _0x269ddd.parentNode) {
                _0x269ddd.remove();
            }
        });
        const _0x2a7ceb = _0x4824ca.querySelector('.music-results-wrapper');
        if (_0x2a7ceb) {
            _0x2a7ceb.remove();
        }
        _0x5bd8cf();
        _0x3c1ca0();
        const _0x1a26b0 = _0x33d17a.find(_0x5ce7c3 => _0x5ce7c3.text)?.['text'] || (_0x3a0923 ? "[User mengirim gambar]" : '');
        if (_0x1a26b0 || _0x3a0923) {
            _0x568908(_0x1a26b0);
        }
    }

    function _0x2274a2(_0x26f344, _0x48fda5 = false) {
        if (typeof _0x26f344 !== 'string' || !_0x26f344) {
            console.warn("Invalid photo URL passed to sendElainaPhoto:", _0x26f344);
            return;
        }
        const _0x134ee4 = "[INFO: FOTO_ACAK_TERKIRIM - URL: " + _0x26f344 + ']';
        const _0x38f1b3 = Date.now() + ++_0x340faf;
        _0x5d529e("elaina", _0x134ee4, true, _0x26f344, _0x48fda5, _0x38f1b3);
    }
    async function _0x2703e0(_0x380e8b, _0x52baff) {
        if (!_0x52baff || _0x13e3dd) {
            return;
        }
        _0x5bd8cf();
        const _0x4693d7 = _0x4824ca.querySelector('.music-results-wrapper');
        if (_0x4693d7) {
            _0x4693d7.remove();
        }
        _0x13e3dd = true;
        _0x2b9ae2(true);
        console.log("Searching Caliphdev API for:", _0x380e8b);
        try {
            const _0x11fc5c = "https://spotifyapi.caliphdev.com/api/search/tracks?q=" + encodeURIComponent(_0x380e8b);
            const _0x2c8bb5 = await fetch(_0x11fc5c);
            if (!_0x2c8bb5.ok) {
                throw new Error("API search error: " + _0x2c8bb5.status + " " + _0x2c8bb5.statusText);
            }
            const _0x5e294f = await _0x2c8bb5.json();
            if (!_0x5e294f || !Array.isArray(_0x5e294f) || _0x5e294f.length === 0x0) {
                _0x5d529e("elaina", "Hmm, maaf " + _0x261b42 + ", aku nggak nemu lagu \"" + _0x380e8b + "\" di database itu... 😥 Coba judul lain?", false, '', false);
                return;
            }
            _0x2ecc4a(_0x5e294f.slice(0x0, 0xa), _0x52baff);
        } catch (_0x110085) {
            console.error("Error searching music via Caliphdev API:", _0x110085);
            _0x5d529e("elaina", "Aduh, " + _0x261b42 + ", ada masalah pas aku cari lagunya... Mungkin API-nya lagi gangguan? 😵 (" + _0x110085.message + ')', false, '', false);
        } finally {
            _0x13e3dd = false;
            _0x2b9ae2(false);
        }
    }

    function _0x2ecc4a(_0x176efb, _0xa6d2cc) {
        const _0x3cc7ea = _0x4824ca.querySelector('.music-results-wrapper');
        if (_0x3cc7ea) {
            _0x3cc7ea.remove();
        }
        _0x5bd8cf();
        if (!_0x176efb || _0x176efb.length === 0x0 || !_0xa6d2cc) {
            console.warn("No results or preceding element for music display");
            return;
        }
        const _0x3d059e = document.createElement("div");
        _0x3d059e.classList.add('music-results-container');
        const _0x117c0e = document.createElement('div');
        _0x117c0e.classList.add('message', 'elaina-message', 'music-results-wrapper');
        _0x117c0e.setAttribute("data-message-id", "music-results-" + Date.now());
        _0x117c0e.style.padding = '0';
        _0x117c0e.style.background = "none";
        _0x117c0e.style.boxShadow = "none";
        _0x176efb.forEach(_0x2d386d => {
            if (!_0x2d386d || !_0x2d386d.url || !_0x2d386d.title) {
                return;
            }
            const _0x59f2d9 = document.createElement("div");
            _0x59f2d9.classList.add("music-result-item");
            _0x59f2d9.innerHTML = "\n                <span class=\"title\">" + _0x2d386d.title + "</span>\n                <span class=\"artist\">" + (_0x2d386d.artist || "Unknown Artist") + "</span>\n            ";
            _0x59f2d9.dataset.spotifyUrl = _0x2d386d.url;
            _0x59f2d9.dataset.title = _0x2d386d.title;
            _0x59f2d9.dataset.artist = _0x2d386d.artist || "Unknown Artist";
            _0x59f2d9.onclick = _0x4e9581 => {
                _0x4e9581.stopPropagation();
                if (_0x13e3dd) {
                    console.log("Music is already loading, please wait.");
                    return;
                }
                _0x5bd8cf();
                _0x195257(_0x59f2d9.dataset.spotifyUrl, _0x59f2d9.dataset.title, _0x59f2d9.dataset.artist, _0x117c0e);
                _0x5568aa();
            };
            _0x3d059e.appendChild(_0x59f2d9);
        });
        if (_0x3d059e.children.length === 0x0) {
            _0x5d529e("elaina", "Hasil pencariannya aneh nih, " + _0x261b42 + ", nggak ada lagu yang valid. 🤨", false, '', false);
            return;
        }
        _0x117c0e.appendChild(_0x3d059e);
        _0xa6d2cc.insertAdjacentElement("afterend", _0x117c0e);
        _0x1b088d(true);
    }
    async function _0x195257(_0x23b1b3, _0x307602, _0x23bb0e, _0x357617) {
        if (!_0x23b1b3 || _0x13e3dd) {
            return;
        }
        _0x13e3dd = true;
        _0x5bd8cf();
        console.log("Attempting to download:", _0x23b1b3);
        try {
            const _0x5cd44d = "https://spotifyapi.caliphdev.com/api/download/track?url=" + encodeURIComponent(_0x23b1b3);
            const _0x16a578 = await fetch(_0x5cd44d);
            if (!_0x16a578.ok) {
                if (_0x16a578.status === 0x194) {
                    throw new Error("Lagu tidak ditemukan di API downloader (404)");
                } else {
                    throw new Error("API download error: " + _0x16a578.status + " " + _0x16a578.statusText);
                }
            }
            const _0x322f6d = await _0x16a578.arrayBuffer();
            if (!_0x322f6d || _0x322f6d.byteLength < 0x3e8) {
                throw new Error("Downloaded file seems empty or invalid.");
            }
            const _0x403fdd = new Blob([_0x322f6d], {
                'type': "audio/mpeg"
            });
            _0x3dcf48();
            if (_0x3a85c7) {
                URL.revokeObjectURL(_0x3a85c7);
            }
            _0x3a85c7 = URL.createObjectURL(_0x403fdd);
            _0x12d8d0.src = _0x3a85c7;
            _0x23ca90 = () => {
                console.log("Audio ready to play:", _0x307602);
                _0x13e3dd = false;
                _0x12d8d0.play().then(() => {
                    _0x4711e3(_0x307602, _0x23bb0e, _0x357617);
                })['catch'](_0x433174 => {
                    console.error("Error playing downloaded audio:", _0x433174);
                    _0x5d529e("elaina", "Udah siap sih lagunya, tapi kok nggak bisa diputar ya, " + _0x261b42 + "? Coba klik tombol play deh. 🤔 (" + _0x433174.message + ')', false, '', false);
                    _0x4711e3(_0x307602, _0x23bb0e, _0x357617);
                });
                _0x3dcf48();
            };
            _0xe7d956 = _0x3dd7be => {
                console.error("Error loading audio data:", _0x3dd7be, _0x12d8d0.error);
                const _0x5199a7 = _0x12d8d0.error ? '(' + _0x12d8d0.error.code + ": " + _0x12d8d0.error.message + ')' : "(Unknown media error)";
                if (_0x12d8d0.error && _0x12d8d0.error.code === MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED && !_0x12d8d0.hasAttribute('src')) {
                    _0x5199a7 = "(Internal error: src became empty)";
                }
                _0x5d529e("elaina", "Gagal memuat data lagunya nih, " + _0x261b42 + "... 🙁 " + _0x5199a7, false, '', false);
                _0x5bd8cf();
                _0x13e3dd = false;
                _0x3dcf48();
            };
            _0x12d8d0.addEventListener('canplaythrough', _0x23ca90);
            _0x12d8d0.addEventListener("error", _0xe7d956);
            _0x12d8d0.load();
        } catch (_0x425972) {
            console.error("Error downloading/processing music:", _0x425972);
            _0x5d529e("elaina", "Gagal download lagunya nih, " + _0x261b42 + "... 😭 (" + _0x425972.message + ')', false, '', false);
            _0x5bd8cf();
            _0x13e3dd = false;
        }
    }

    function _0x3dcf48() {
        if (_0x23ca90) {
            _0x12d8d0.removeEventListener("canplaythrough", _0x23ca90);
        }
        if (_0xe7d956) {
            _0x12d8d0.removeEventListener("error", _0xe7d956);
        }
        if (_0x1e399b) {
            _0x12d8d0.removeEventListener("play", _0x1e399b);
        }
        if (_0x5a80f8) {
            _0x12d8d0.removeEventListener("pause", _0x5a80f8);
        }
        if (_0xcee43) {
            _0x12d8d0.removeEventListener('ended', _0xcee43);
        }
        _0x23ca90 = null;
        _0xe7d956 = null;
        _0x1e399b = null;
        _0x5a80f8 = null;
        _0xcee43 = null;
    }

    function _0x5bd8cf() {
        const _0x27d0b3 = document.getElementById("mini-music-player");
        if (_0x27d0b3) {
            _0x27d0b3.remove();
        }
        if (_0x12d8d0 && !_0x12d8d0.paused) {
            _0x12d8d0.pause();
        }
        _0x3dcf48();
        if (_0x3a85c7) {
            URL.revokeObjectURL(_0x3a85c7);
            _0x3a85c7 = null;
        }
        if (_0x12d8d0.hasAttribute("src")) {
            _0x12d8d0.removeAttribute("src");
            _0x12d8d0.load();
            console.log("Audio src removed and load() called.");
        }
        _0x13e3dd = false;
    }

    function _0x4711e3(_0x549846, _0x3a9966, _0xff793, _0x2a7aa0 = false) {
        const _0x2fb371 = document.getElementById("mini-music-player");
        if (_0x2fb371) {
            _0x2fb371.remove();
        }
        const _0x25b137 = document.createElement('div');
        _0x25b137.id = "mini-music-player";
        const _0x214131 = document.createElement('div');
        _0x214131.classList.add("player-info");
        _0x214131.innerHTML = "\n            <span class=\"player-title\" title=\"" + _0x549846 + "\">" + _0x549846 + "</span>\n            <span class=\"player-artist\">" + _0x3a9966 + "</span>\n        ";
        const _0x2c4335 = document.createElement("button");
        _0x2c4335.id = "player-play-pause";
        if (_0x2a7aa0) {
            _0x2c4335.innerHTML = "<i class=\"fas fa-spinner fa-spin\"></i>";
            _0x2c4335.disabled = true;
        } else {
            _0x2c4335.innerHTML = _0x12d8d0.paused ? "<i class=\"fas fa-play\"></i>" : "<i class=\"fas fa-pause\"></i>";
            _0x2c4335.disabled = false;
        }
        _0x2c4335.onclick = () => {
            if (_0x13e3dd) {
                return;
            }
            if (!_0x12d8d0.src || _0x12d8d0.src === window.location.href || !_0x3a85c7) {
                console.warn("Play button clicked but src is invalid or empty.");
                _0x5d529e('elaina', "Hmm, kayaknya musiknya belum siap atau udah hilang, " + _0x261b42 + ". Coba pilih lagi?", false, '', false);
                _0x5bd8cf();
                return;
            }
            if (_0x12d8d0.paused) {
                _0x12d8d0.play()["catch"](_0x42de13 => {
                    console.error("Play/resume error:", _0x42de13);
                    _0x5d529e("elaina", "Kok nggak bisa play lagi ya? Coba klik tombol play-nya lagi, " + _0x261b42 + ". (" + _0x42de13.message + ')', false, '', false);
                });
            } else {
                _0x12d8d0.pause();
            }
        };
        _0x25b137.appendChild(_0x214131);
        _0x25b137.appendChild(_0x2c4335);
        if (_0xff793 && _0xff793.parentNode === _0x4824ca) {
            _0xff793.insertAdjacentElement("afterend", _0x25b137);
        } else {
            const _0xfadac6 = _0x4824ca.querySelector('.message.elaina-message:not(.music-results-wrapper):last-of-type');
            if (_0xfadac6) {
                _0xfadac6.insertAdjacentElement("afterend", _0x25b137);
            } else {
                _0x4824ca.appendChild(_0x25b137);
            }
        }
        _0x3dcf48();
        _0x1e399b = () => {
            if (_0x13e3dd) {
                return;
            }
            _0x2c4335.innerHTML = "<i class=\"fas fa-pause\"></i>";
            _0x2c4335.disabled = false;
        };
        _0x5a80f8 = () => {
            if (_0x13e3dd) {
                return;
            }
            _0x2c4335.innerHTML = "<i class=\"fas fa-play\"></i>";
            _0x2c4335.disabled = false;
        };
        _0xcee43 = () => {
            if (_0x13e3dd) {
                return;
            }
            _0x2c4335.innerHTML = "<i class=\"fas fa-play\"></i>";
            _0x2c4335.disabled = false;
        };
        _0xe7d956 = _0x3af5e5 => {
            console.error("Audio playback/element error:", _0x3af5e5, _0x12d8d0.error);
            const _0x2d4f0a = _0x12d8d0.error ? '(' + _0x12d8d0.error.code + ": " + _0x12d8d0.error.message + ')' : "(Unknown media error)";
            if (!(_0x12d8d0.error?.['code'] === MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED && !_0x12d8d0.hasAttribute("src"))) {
                _0x5d529e('elaina', "Aduh, " + _0x261b42 + ", musiknya berhenti sendiri karena error... 😥 " + _0x2d4f0a, false, '', false);
            }
            _0x5bd8cf();
        };
        _0x12d8d0.addEventListener('play', _0x1e399b);
        _0x12d8d0.addEventListener("pause", _0x5a80f8);
        _0x12d8d0.addEventListener("ended", _0xcee43);
        _0x12d8d0.addEventListener("error", _0xe7d956);
        if (!_0x2a7aa0) {
            if (_0x12d8d0.paused) {
                _0x5a80f8();
            } else {
                _0x1e399b();
            }
        }
        _0x1b088d(true);
        return _0x25b137;
    }
    async function _0x568908(_0x5ba3b9) {
        if (_0xe7ee0f || _0x13e3dd) {
            return;
        }
        _0xe7ee0f = true;
        _0x2b9ae2(true);
        let _0x51813e = false;
        const _0x58db23 = _0x432c85.length;

        function _0x434636(_0x1bf14b) {
            for (let _0x1413f7 = _0x1bf14b; _0x1413f7 >= 0x0; _0x1413f7--) {
                if (_0x432c85[_0x1413f7] && _0x432c85[_0x1413f7].role === 'model' && _0x432c85[_0x1413f7].parts.length > 0x0) {
                    const _0x97d3a0 = _0x432c85[_0x1413f7].parts[0x0].text;
                    if (!_0x97d3a0.startsWith('[INFO:') && !_0x97d3a0.startsWith('[RELATIONSHIP_STATUS_UPDATE:') && !_0x97d3a0.includes("[SEARCH_MUSIC:") && !_0x97d3a0.startsWith("[Respon AI diblokir") && !_0x97d3a0.startsWith('[Error:')) {
                        return _0x1413f7;
                    }
                }
            }
            return -0x1;
        }
        const _0x5551de = _0x58db23 - 0x1;
        if (_0x5551de > 0x0) {
            const _0x1633fd = _0x434636(_0x5551de - 0x1);
            if (_0x1633fd !== -0x1) {
                const _0x336b25 = _0x432c85[_0x1633fd];
                const _0xbbbc5f = _0x336b25.parts[0x0]?.["text"] || '';
                if (_0xbbbc5f.includes("FOTO_ACAK_TERKIRIM")) {
                    const _0x34c85f = _0x432c85[_0x5551de];
                    const _0x3a0e2e = _0x34c85f.parts.find(_0x2d8e86 => _0x2d8e86.text)?.['text'] || '';
                    const _0x522658 = /\b(cantik|indah|bagus|keren|wow|lucu|manis|kawaii|cute|hot|seksi|sempurna|imut|cakep|geulis|aduhai)\b/i.test(_0x3a0e2e.toLowerCase());
                    if (_0x522658) {
                        _0x51813e = true;
                        await new Promise(_0x37af29 => setTimeout(_0x37af29, 0x1f4));
                        _0x2b9ae2(false);
                        let _0x3fde3e;
                        if (_0x231def === "female") {
                            _0x3fde3e = ["Makasihh~ >.<", "Hehe, tau kok! 😉💖", "Benarkah? Kyaa~! ⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄", "Hmph! Biasa aja kalii! 🎀"];
                        } else {
                            _0x3fde3e = ["Hmphh... biasa aja! 😒", "I-iya, tahu! Gak usah lebay! >.<", "Ck! Biasa aja kok! *buang muka*", "Berisik! 💢"];
                        }
                        const _0x39a9ed = _0x3fde3e[Math.floor(Math.random() * _0x3fde3e.length)];
                        const _0x537da1 = Date.now() + ++_0x340faf;
                        _0x5d529e("elaina", _0x39a9ed, false, '', false, _0x537da1);
                    }
                }
            }
        }
        if (_0x51813e) {
            _0xe7ee0f = false;
            _0x2b9ae2(false);
            return;
        }
        try {
            _0xbeb24b();
            const _0x56b27b = _0x432c85.slice(0x1).slice(-0x14).map(_0x2ad867 => {
                if (!_0x2ad867.parts || _0x2ad867.parts.length === 0x0 || _0x2ad867.parts.length === 0x1 && _0x2ad867.parts[0x0].text === '') {
                    if (_0x2ad867.role === "user" && _0x2ad867.parts.some(_0x5ac1d8 => _0x5ac1d8.inlineData)) {
                        return {
                            'role': _0x2ad867.role,
                            'parts': [{
                                'text': "[User mengirim gambar]"
                            }]
                        };
                    }
                    return null;
                }
                if (_0x2ad867.role === "user" && _0x2ad867.parts.some(_0x11caf9 => _0x11caf9.inlineData) && !_0x2ad867.parts.some(_0x5c7004 => _0x5c7004.text && _0x5c7004.text.trim() !== '')) {
                    return {
                        'role': _0x2ad867.role,
                        'parts': [{
                            'text': "[User mengirim gambar]"
                        }]
                    };
                }
                if (_0x2ad867.role === "model" && _0x2ad867.parts[0x0].text) {
                    const _0x441784 = _0x2ad867.parts[0x0].text.replace(/\[SEARCH_MUSIC:.*?\]/gi, '').replace(/\[RELATIONSHIP_STATUS_UPDATE:.*?\]/gi, '').replace(/\[INFO:.*?\]/gi, '').trim();
                    if (!_0x441784) {
                        return null;
                    }
                    return {
                        'role': _0x2ad867.role,
                        'parts': [{
                            'text': _0x441784
                        }]
                    };
                }
                return {
                    'role': _0x2ad867.role,
                    'parts': _0x2ad867.parts
                };
            }).filter(_0x1102fc => _0x1102fc !== null);
            const _0x4783f3 = {
                'role': "system",
                'parts': [{
                    'text': '' + _0x432c85[0x0].parts[0x0].text
                }]
            };
            const _0x257f5f = {
                'contents': _0x56b27b,
                'generationConfig': {
                    'temperature': 0x1,
                    'maxOutputTokens': 0x190,
                    'topP': 0.95,
                    'topK': 0x40
                },
                'safetySettings': [{
                    'category': "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                    'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
                }, {
                    'category': "HARM_CATEGORY_DANGEROUS_CONTENT",
                    'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
                }, {
                    'category': "HARM_CATEGORY_HARASSMENT",
                    'threshold': "BLOCK_MEDIUM_AND_ABOVE"
                }, {
                    'category': "HARM_CATEGORY_HATE_SPEECH",
                    'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
                }],
                'systemInstruction': _0x4783f3
            };
            const _0x34adf3 = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCmuaAEeY9WCNVZczLXpZl28mKS87SsO8A", {
                'method': "POST",
                'headers': {
                    'Content-Type': "application/json"
                },
                'body': JSON.stringify(_0x257f5f)
            });
            if (!_0x34adf3.ok) {
                _0x2b9ae2(false);
                const _0xb0c847 = await _0x34adf3.json();
                console.error("API Error:", _0xb0c847);
                let _0x35c8d6 = "Ugh, sihir komunikasiku lagi ngadat.. (" + _0x34adf3.status + ") 😥 Coba lagi nanti ya, " + _0x261b42 + '.';
                if (_0xb0c847.error?.['message']["includes"]("SAFETY") || _0x34adf3.status === 0x190) {
                    if (_0xb0c847.error?.["message"]['toLowerCase']()["includes"]("block")) {
                        _0x35c8d6 = "Hmm, " + _0x261b42 + "... Kayaknya ada sihir aneh di pertanyaanmu tadi atau aku lagi nggak mood jawab yang begitu. 🪄 Ganti topik yuk? Atau jangan bicara yang aneh-aneh! 💢";
                    } else {
                        _0x35c8d6 = "Aduh, ada yang salah dengan sihirku (" + _0x34adf3.status + "). Coba lagi atau tanya hal lain ya?";
                    }
                } else if (_0x34adf3.status === 0x1ad) {
                    _0x35c8d6 = "Whoaa, " + _0x261b42 + "! Pelan-pelan dong! Sihirku butuh napas sebentar nih. ⏳ Coba lagi ya.";
                }
                const _0x29e78a = Date.now() + ++_0x340faf;
                _0x5d529e("elaina", _0x35c8d6, false, '', false, _0x29e78a);
                _0xe7ee0f = false;
                return;
            }
            const _0x1771c0 = await _0x34adf3.json();
            if (!_0x1771c0.candidates || _0x1771c0.candidates.length === 0x0 || _0x1771c0.candidates[0x0].finishReason && _0x1771c0.candidates[0x0].finishReason !== "STOP" && _0x1771c0.candidates[0x0].finishReason !== "MAX_TOKENS" || !_0x1771c0.candidates[0x0].content?.["parts"] || _0x1771c0.candidates[0x0].content.parts.length === 0x0) {
                _0x2b9ae2(false);
                let _0x3464fc = _0x1771c0.promptFeedback?.["blockReason"] || _0x1771c0.candidates?.[0x0]?.["finishReason"] || "Unknown";
                let _0x3d0045 = !_0x1771c0.candidates?.[0x0]?.['content']?.["parts"] || _0x1771c0.candidates[0x0].content.parts.length === 0x0;
                console.warn("Respon diblokir/kosong/finish reason bermasalah:", _0x1771c0);
                let _0x4bc431 = "Eh? Aku... *blank*... nggak tahu mau balas apa (" + _0x3464fc + "). 😵 Coba lagi atau ganti topik, " + _0x261b42 + '?';
                if (_0x3464fc === "SAFETY") {
                    _0x4bc431 = "Uhm... " + _0x261b42 + ", k-kayaknya kita nggak seharusnya ngomongin itu deh! >///< Itu terlalu... menjurus! Ganti topik, ya?! 😠";
                } else {
                    if (_0x3464fc === 'OTHER' || _0x3464fc === 'RECITATION') {
                        _0x4bc431 = "Sihir komunikasiku kayaknya lagi macet nih, " + _0x261b42 + "... Coba bilang dengan cara lain? 🤔";
                    } else if (_0x3d0045) {
                        _0x4bc431 = "Hmm? Aku nggak kepikiran mau balas apa, " + _0x261b42 + "... Coba tanya lagi? 🤔";
                    }
                }
                const _0x5e6e59 = Date.now() + ++_0x340faf;
                const _0x10dbfa = "[Respon AI diblokir/kosong/bermasalah - Alasan: " + _0x3464fc + (_0x3d0045 ? " (Empty Content)" : '') + ']';
                _0x5d529e("elaina", _0x4bc431, false, '', true, _0x5e6e59);
                const _0x176d81 = {
                    'id': _0x5e6e59,
                    'role': "model",
                    'parts': [{
                        'text': _0x10dbfa
                    }],
                    'timestamp': Date.now()
                };
                _0x432c85.push(_0x176d81);
                _0x3a835a();
                _0xe7ee0f = false;
                return;
            }
            _0x2b9ae2(false);
            const _0x4c42d9 = _0x1771c0.candidates[0x0].content.parts[0x0].text;
            const _0x5c7434 = _0x4c42d9.split("|||");
            let _0x5b5e37 = null;
            let _0x1952d8 = false;
            let _0x381bf1 = null;
            let _0x46dfed = null;
            for (let _0x30eee4 = 0x0; _0x30eee4 < _0x5c7434.length; _0x30eee4++) {
                let _0x5a7aec = _0x5c7434[_0x30eee4].trim();
                if (!_0x5a7aec) {
                    continue;
                }
                const _0x89979a = _0x5a7aec.match(/\[RELATIONSHIP_STATUS_UPDATE:\s*(dating|married)\]/i);
                if (_0x89979a) {
                    _0x5b5e37 = _0x89979a[0x1].toLowerCase();
                    _0x5a7aec = _0x5a7aec.replace(_0x89979a[0x0], '').trim();
                }
                const _0x2684a5 = _0x5a7aec.match(/\[SEARCH_MUSIC:\s*(.*?)\s*\]/i);
                if (_0x2684a5) {
                    try {
                        const _0x2fab8a = JSON.parse(_0x2684a5[0x1]);
                        _0x381bf1 = _0x2fab8a.query;
                    } catch (_0x2200d7) {
                        console.error("Error parsing music search marker JSON:", _0x2200d7, " Raw:", _0x2684a5[0x1]);
                        const _0x4cf388 = _0x2684a5[0x1].match(/"query"\s*:\s*"(.*?)"/);
                        if (_0x4cf388 && _0x4cf388[0x1]) {
                            _0x381bf1 = _0x4cf388[0x1];
                            console.log("Fallback extracted query:", _0x381bf1);
                        } else {
                            _0x381bf1 = null;
                        }
                    }
                    _0x5a7aec = _0x5a7aec.replace(_0x2684a5[0x0], '').trim();
                }
                if (!_0x5a7aec && !_0x2ea9e6 && !_0x381bf1 && !_0x5b5e37) {
                    continue;
                }
                const _0x40a3a1 = ["sudah kubilang", "berhenti bertanya", "jangan paksa aku", "aku muak"];
                if (_0x5a7aec && _0x40a3a1.some(_0x4a6a53 => _0x5a7aec.toLowerCase().includes(_0x4a6a53))) {
                    _0x1952d8 = true;
                }
                const _0x2ea9e6 = _0x5a7aec ? _0x5a7aec.match(/\[KIRIM_FOTO_RANDOM\]$/i) : null;
                const _0x34d167 = Date.now() + ++_0x340faf + _0x30eee4;
                if (_0x30eee4 > 0x0) {
                    _0x2b9ae2(true);
                    await new Promise(_0x1425ea => setTimeout(_0x1425ea, Math.random() * 0x320 + 0x2bc));
                    _0x2b9ae2(false);
                }
                let _0x3b2b7a = null;
                if (_0x2ea9e6) {
                    const _0x1f9401 = _0x5a7aec.replace(_0x2ea9e6[0x0], '').trim();
                    if (_0x1f9401) {
                        _0x3b2b7a = _0x5d529e("elaina", _0x1f9401, false, '', false, _0x34d167 + '_text');
                        if (_0x3b2b7a) {
                            _0x46dfed = _0x3b2b7a;
                        }
                    }
                    await new Promise(_0x12913f => setTimeout(_0x12913f, 0x12c));
                    const _0x3c4c1a = Math.floor(Math.random() * _0x5fc324.length);
                    const _0x55c278 = _0x5fc324[_0x3c4c1a];
                    _0x2274a2(_0x55c278, false);
                } else {
                    if (_0x5a7aec) {
                        _0x3b2b7a = _0x5d529e("elaina", _0x5a7aec, false, '', false, _0x34d167);
                        if (_0x3b2b7a) {
                            _0x46dfed = _0x3b2b7a;
                        }
                    }
                }
            }
            if (_0x5b5e37 && ['dating', "married"].includes(_0x5b5e37)) {
                _0x25a6d6 = _0x5b5e37;
                _0x1074c6 = 0x0;
                _0x4455cb = 0x0;
                _0xbeb24b();
                _0x3a835a();
            } else if (_0x1952d8) {
                _0x1074c6 = 0x0;
                _0x3a835a();
            }
            if (_0x381bf1 !== null && _0x46dfed) {
                await _0x2703e0(_0x381bf1, _0x46dfed);
            } else {
                if (_0x381bf1 !== null) {
                    const _0x2c9a94 = _0x4824ca.querySelector(".message.elaina-message:not(.music-results-wrapper):last-of-type");
                    if (_0x2c9a94) {
                        await _0x2703e0(_0x381bf1, _0x2c9a94);
                    } else {
                        console.error("Cannot display music results: No preceding Elaina message element found.");
                    }
                }
            }
        } catch (_0x1f4a32) {
            console.error("Fetch/Process Error:", _0x1f4a32);
            _0x2b9ae2(false);
            const _0x30de50 = Date.now() + ++_0x340faf;
            _0x5d529e("elaina", "Aduh! Sihirku benar-benar kacau sekarang, " + _0x261b42 + "! 😫 (" + _0x1f4a32.message + "). Ada yang salah nih... Coba lagi nanti ya... 😥", false, '', false, _0x30de50);
        } finally {
            _0xe7ee0f = false;
            const _0x298a7f = document.getElementById("typing-indicator");
            if (_0x298a7f) {
                _0x298a7f.remove();
            }
        }
    }

    function _0x38a4f9() {
        const _0x16065d = _0x2aa9bc.value.trim();
        const _0x2b172f = !!_0x235f62;
        if (_0x16065d === '' && !_0x2b172f || _0xe7ee0f || _0x13e3dd) {
            return;
        }
        const _0x3970b9 = /\b(putar|play|setel|mainkan)\b.*\b(lagu|musik)\b/i.test(_0x16065d.toLowerCase());
        if (_0x3970b9) {
            _0x5bd8cf();
            const _0x41a2c8 = _0x4824ca.querySelector('.music-results-wrapper');
            if (_0x41a2c8) {
                _0x41a2c8.remove();
            }
        }
        const _0x1a77e0 = [];
        let _0x3f2694 = '';
        let _0x4ac6d2 = null;
        let _0x39a4db = null;
        if (_0x16065d) {
            _0x1a77e0.push({
                'text': _0x16065d
            });
            _0x3f2694 = _0x16065d;
        }
        if (_0x2b172f) {
            _0x4ac6d2 = _0x235f62.split(',')[0x1];
            _0x39a4db = _0xd2d5e2;
            _0x1a77e0.push({
                'inlineData': {
                    'mimeType': _0x39a4db,
                    'data': _0x4ac6d2
                }
            });
            if (!_0x3f2694) {
                _0x3f2694 = "[User mengirim gambar]";
            } else {
                _0x3f2694 += " [User juga mengirim gambar]";
            }
        }
        const _0x41d5c4 = {
            'id': Date.now() + ++_0x340faf,
            'role': "user",
            'parts': _0x1a77e0,
            'timestamp': Date.now()
        };
        _0x5d529e('user', _0x16065d, _0x2b172f, _0x4ac6d2, false, _0x41d5c4.id, _0x39a4db);
        _0x2aa9bc.value = '';
        _0x2aa9bc.style.height = "auto";
        _0x3f4ec5();
        _0x568908(_0x3f2694);
        _0x5568aa();
    }

    function _0x2b9ae2(_0x17347c) {
        let _0x19955e = document.getElementById('typing-indicator');
        if (_0x17347c && !_0x19955e) {
            _0x19955e = document.createElement("div");
            _0x19955e.id = 'typing-indicator';
            _0x19955e.classList.add("message", "elaina-message");
            _0x19955e.style.background = "transparent";
            _0x19955e.style.boxShadow = "none";
            _0x19955e.style.padding = "5px 15px";
            _0x19955e.innerHTML = "<p><span class=\"dot-flashing\"></span><span class=\"dot-flashing\"></span><span class=\"dot-flashing\"></span></p>";
            _0x4824ca.appendChild(_0x19955e);
            _0x1b088d();
        } else if (!_0x17347c && _0x19955e) {
            _0x19955e.remove();
        }
    }

    function _0x30cec7() {
        _0x10bcc1.textContent = "Yakin mau menghapus semua percakapan kita, " + _0x261b42 + "? Ini akan mengembalikan hubungan kita ke awal (kenalan) dan tidak bisa dibatalkan lho!";
        _0x90122e.classList.remove("hidden");
        requestAnimationFrame(() => {
            _0x90122e.classList.add("visible");
        });
        _0x5568aa();
    }

    function _0x3f8619() {
        _0x151ac2.textContent = "Yakin mau membersihkan layar chat kita, " + _0x261b42 + "? Riwayat dan hubungan kita tetap tersimpan kok.";
        _0x13dee4.classList.remove("hidden");
        requestAnimationFrame(() => {
            _0x13dee4.classList.add("visible");
        });
        _0x5568aa();
    }

    function _0x59cd29() {
        _0x3bd710.classList.remove("hidden");
        const _0x50f44c = _0x3bd710.querySelector(".help-content h4:nth-of-type(3)");
        if (_0x50f44c) {
            _0x50f44c.innerHTML = "Fitur Musik (API Eksternal):";
            const _0x4d5642 = _0x50f44c.nextElementSibling;
            if (_0x4d5642 && _0x4d5642.tagName === 'P') {
                _0x4d5642.innerHTML = "Kamu bisa minta Elaina memutar musik dengan bilang \"Putar lagu [Judul Lagu]\". Jika API eksternal (Caliphdev) menemukan lagunya, Elaina akan menampilkan hingga 10 hasil. Klik salah satu untuk mencoba mendownload & memainkannya di mini-player. Musik akan terus berputar saat kamu chat, dan hanya berhenti jika kamu minta lagu baru, reset, atau clear chat. Fitur ini bergantung pada API eksternal yang mungkin tidak stabil.";
            }
        }
        requestAnimationFrame(() => {
            _0x3bd710.classList.add("visible");
        });
        _0x5568aa();
    }

    function _0x44f59c() {
        _0x195e67.value = _0x933e9e;
        _0x3d9251.textContent = _0x933e9e;
        _0x349314.classList.remove("hidden");
        requestAnimationFrame(() => {
            _0x349314.classList.add('visible');
        });
        _0x5568aa();
    }

    function _0x5213e7() {
        _0x90122e.classList.remove("visible");
        setTimeout(() => {
            _0x90122e.classList.add("hidden");
        }, 0x12c);
    }

    function _0x2850c5() {
        _0x13dee4.classList.remove('visible');
        setTimeout(() => {
            _0x13dee4.classList.add("hidden");
        }, 0x12c);
    }

    function _0x16e95c() {
        _0x3bd710.classList.remove("visible");
        setTimeout(() => {
            _0x3bd710.classList.add("hidden");
        }, 0x12c);
    }

    function _0x476b57() {
        _0x349314.classList.remove("visible");
        setTimeout(() => {
            _0x349314.classList.add("hidden");
        }, 0x12c);
    }

    function _0x2aca27() {
        localStorage.removeItem("elainaChatState");
        localStorage.removeItem("elainaChatUserNameTemp");
        localStorage.removeItem("elainaChatUserGenderTemp");
        localStorage.removeItem("elainaChatBackground");
        localStorage.removeItem('elainaChatBrightness');
        _0x4824ca.innerHTML = '';
        _0x416dbb.style.backgroundImage = '';
        _0x261b42 = "User";
        _0x231def = null;
        _0x25a6d6 = 'friend';
        _0x1074c6 = 0x0;
        _0x4455cb = 0x0;
        _0x340faf = 0x0;
        _0x933e9e = 0x28;
        _0x5008a8 = null;
        _0x432c85 = [];
        _0x5213e7();
        _0x3f4ec5();
        _0x5bd8cf();
        const _0x4b263f = _0x4824ca.querySelector('.music-results-wrapper');
        if (_0x4b263f) {
            _0x4b263f.remove();
        }
        _0x1a418f(true);
    }

    function _0x340a98() {
        const _0x582578 = _0x4824ca.querySelectorAll(".message:not(#mini-music-player):not(.music-results-wrapper), .intro-message");
        _0x582578.forEach(_0x3e7eeb => {
            if (_0x3e7eeb && !_0x3e7eeb.classList.contains('music-results-wrapper') && _0x3e7eeb.id !== "mini-music-player" && !_0x3e7eeb.classList.contains("intro-message")) {
                _0x3e7eeb.remove();
            }
        });
        const _0x121f98 = _0x4824ca.querySelector(".intro-message");
        if (!_0x121f98 && _0x231def) {
            _0x5939ab(true);
        }
        _0x2850c5();
        setTimeout(() => _0x1b088d(true), 0x32);
    }

    function _0x5c9e8e() {
        if (_0x332fdc) {
            return;
        }
        _0x20f2ed.innerHTML = '';
        _0x3c3255.forEach(_0x3d0b3a => {
            const _0x462186 = document.createElement("span");
            _0x462186.textContent = _0x3d0b3a;
            _0x462186.addEventListener('click', () => {
                const _0x398434 = _0x2aa9bc.selectionStart;
                const _0x451236 = _0x2aa9bc.selectionEnd;
                _0x2aa9bc.value = _0x2aa9bc.value.substring(0x0, _0x398434) + _0x3d0b3a + _0x2aa9bc.value.substring(_0x451236);
                _0x2aa9bc.selectionStart = _0x2aa9bc.selectionEnd = _0x398434 + _0x3d0b3a.length;
                _0x2aa9bc.focus();
                _0x28fc73();
            });
            _0x20f2ed.appendChild(_0x462186);
        });
        _0x332fdc = true;
    }

    function _0x24086f() {
        _0x5c9e8e();
        _0x20f2ed.classList.remove('hidden');
        requestAnimationFrame(() => {
            _0x20f2ed.classList.add("visible");
            _0x21174f();
        });
    }

    function _0x5568aa() {
        if (!_0x20f2ed || _0x20f2ed.classList.contains("hidden")) {
            return;
        }
        _0x20f2ed.classList.remove('visible');
        setTimeout(() => {
            if (_0x20f2ed) {
                _0x20f2ed.classList.add("hidden");
            }
        }, 0xc8);
    }

    function _0x52b44d() {
        if (!_0x20f2ed) {
            return;
        }
        if (_0x20f2ed.classList.contains("visible")) {
            _0x5568aa();
        } else {
            _0x24086f();
        }
    }

    function _0x28fc73() {
        _0x2aa9bc.style.height = "auto";
        const _0x1a2491 = _0x2aa9bc.scrollHeight;
        if (_0x1a2491 > 0x78) {
            _0x2aa9bc.style.height = "120px";
            _0x2aa9bc.style.overflowY = "auto";
        } else {
            _0x2aa9bc.style.height = _0x1a2491 + 'px';
            _0x2aa9bc.style.overflowY = "hidden";
        }
    }

    function _0x10406c(_0x3457dc, _0x511f04) {
        if (_0x3457dc) {
            const _0x545e2f = parseFloat(_0x511f04 / 0x64).toFixed(0x2);
            _0x416dbb.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, " + _0x545e2f + "), rgba(0, 0, 0, " + _0x545e2f + ")), url('" + _0x3457dc + "')";
        } else {
            _0x416dbb.style.backgroundImage = '';
        }
    }

    function _0x45569b(_0x3deb96, _0x5346ff) {
        _0x235f62 = _0x3deb96;
        _0xd2d5e2 = _0x5346ff;
        _0x3504e6.src = _0x3deb96;
        _0x248abf.classList.remove("hidden");
        _0x21174f();
        _0x1b088d(true, false);
    }

    function _0x3f4ec5() {
        _0x235f62 = null;
        _0xd2d5e2 = null;
        _0x3504e6.src = '#';
        _0x248abf.classList.add("hidden");
        _0x29300e.value = null;
        _0x21174f();
    }

    function _0x21174f() {
        if (!_0x20f2ed || !_0x5c69fa) {
            return;
        }
        _0x20f2ed.style.bottom = _0x5c69fa.offsetHeight + 'px';
    }

    function _0x1a418f(_0x5414b2 = false) {
        let _0x376086 = false;
        try {
            if (!_0x5414b2) {
                _0x376086 = _0x20448b();
            } else {
                _0x50d82c();
            }
            const _0x287395 = localStorage.getItem("elainaChatBackground");
            const _0x38e2c8 = localStorage.getItem("elainaChatBrightness");
            _0x933e9e = _0x38e2c8 ? parseInt(_0x38e2c8) : 0x28;
            _0x5008a8 = _0x287395;
            _0x10406c(_0x5008a8, _0x933e9e);
            _0x5df62f.classList.add("hidden");
            _0x3b3f90.classList.add("hidden");
            _0x1faa6a.classList.add("hidden");
            _0x130049.classList.add('hidden');
            if (_0x376086) {
                _0x5df62f.classList.add("hidden");
                _0x28e9fa.innerHTML = "Elaina <span class=\"status-dot\"></span>";
                _0x130049.classList.remove('hidden');
                requestAnimationFrame(() => _0x130049.style.opacity = '1');
                _0x3c1ca0();
                if (!_0xe7ee0f) {
                    setTimeout(() => _0x2aa9bc.focus(), 0x64);
                }
                _0x28fc73();
            } else {
                if (_0x261b42 !== "User" && _0x231def === null) {
                    _0x5df62f.classList.remove("hidden");
                    requestAnimationFrame(() => _0x5df62f.style.opacity = '1');
                    _0x1faa6a.classList.remove("hidden");
                    requestAnimationFrame(() => _0x1faa6a.style.opacity = '1');
                    const _0x13cc45 = _0x3f65b0.querySelector('p');
                    if (_0x13cc45) {
                        _0x13cc45.innerHTML = "Biar aku tahu harus bersikap bagaimana padamu, " + _0x261b42 + " 😊";
                    }
                } else {
                    _0x5df62f.classList.remove("hidden");
                    requestAnimationFrame(() => _0x5df62f.style.opacity = '1');
                    _0x3b3f90.classList.remove('hidden');
                    requestAnimationFrame(() => _0x3b3f90.style.opacity = '1');
                    setTimeout(() => _0x571827.focus(), 0x64);
                }
            }
            _0x21174f();
        } catch (_0x35c386) {
            console.error("Error during initializeApp:", _0x35c386);
            document.body.innerHTML = "<div style=\"color: red; padding: 20px; text-align: center; font-family: sans-serif;\">Initialization Error. Please clear site data and refresh. Details: " + _0x35c386 + "</div>";
        }
    }
    _0x3b3dc1.addEventListener("click", () => {
        const _0x26f3d5 = _0x571827.value.trim();
        if (_0x26f3d5) {
            _0x261b42 = _0x26f3d5;
            localStorage.setItem("elainaChatUserNameTemp", _0x261b42);
            _0x573fa9.textContent = '';
            _0x3b3f90.style.opacity = '0';
            setTimeout(() => {
                _0x3b3f90.classList.add("hidden");
                _0x1faa6a.classList.remove("hidden");
                const _0x51ecaf = _0x3f65b0.querySelector('p');
                if (_0x51ecaf) {
                    _0x51ecaf.innerHTML = "Biar aku tahu harus bersikap bagaimana padamu, " + _0x261b42 + " 😊";
                }
                requestAnimationFrame(() => {
                    _0x1faa6a.style.opacity = '1';
                });
            }, 0x1f4);
        } else {
            _0x573fa9.textContent = "Nama tidak boleh kosong dong!";
            _0x571827.focus();
        }
    });
    const _0x5bc778 = _0x3c6c78 => {
        _0x231def = _0x3c6c78;
        localStorage.setItem('elainaChatUserGenderTemp', _0x231def);
        _0x2be181.textContent = '';
        _0x50d82c();
        _0xbeb24b();
        _0x3a835a();
        _0x1faa6a.style.opacity = '0';
        _0x5df62f.style.opacity = '0';
        setTimeout(() => {
            _0x1faa6a.classList.add("hidden");
            _0x5df62f.classList.add("hidden");
            _0x130049.classList.remove("hidden");
            requestAnimationFrame(() => {
                _0x130049.style.opacity = '1';
            });
            _0x5939ab(false);
            setTimeout(() => _0x1b088d(true), 0x64);
            _0x2aa9bc.focus();
            _0x28fc73();
        }, 0x1f4);
    };
    _0x31950b.addEventListener('click', () => _0x5bc778("male"));
    _0x67f5fe.addEventListener('click', () => _0x5bc778("female"));
    _0x571827.addEventListener("keypress", function(_0x4979f1) {
        if (_0x4979f1.key === "Enter") {
            _0x3b3dc1.click();
        }
    });
    _0x445d66.addEventListener('click', _0x38a4f9);
    _0x2aa9bc.addEventListener("keypress", function(_0x496ea9) {
        if (_0x496ea9.key === "Enter" && !_0x496ea9.shiftKey) {
            _0x496ea9.preventDefault();
            _0x38a4f9();
        }
    });
    _0x2aa9bc.addEventListener("input", _0x28fc73);
    _0xc79570.addEventListener("click", _0x30cec7);
    _0x150a50.addEventListener("click", _0x2aca27);
    _0x221f05.addEventListener("click", _0x5213e7);
    _0x90122e.addEventListener("click", _0x164e2e => {
        if (_0x164e2e.target === _0x90122e) {
            _0x5213e7();
        }
    });
    _0x4f6570.addEventListener("click", _0x3f8619);
    _0x1238b2.addEventListener("click", _0x340a98);
    _0x198359.addEventListener("click", _0x2850c5);
    _0x13dee4.addEventListener("click", _0x22cb06 => {
        if (_0x22cb06.target === _0x13dee4) {
            _0x2850c5();
        }
    });
    _0x53f58f.addEventListener("click", _0x59cd29);
    _0x33dd21.addEventListener("click", _0x16e95c);
    _0x3bd710.addEventListener("click", _0x3eb7b4 => {
        if (_0x3eb7b4.target === _0x3bd710) {
            _0x16e95c();
        }
    });
    _0x46e713.addEventListener('click', () => {
        _0x5c12fd.click();
    });
    _0x5c12fd.addEventListener('change', _0x301b24 => {
        const _0x2eaa2f = _0x301b24.target.files[0x0];
        if (_0x2eaa2f && _0x2eaa2f.type.startsWith("image/")) {
            const _0x2bbb74 = new FileReader();
            _0x2bbb74.onload = _0x1d5713 => {
                _0x5008a8 = _0x1d5713.target.result;
                _0x10406c(_0x5008a8, _0x933e9e);
                _0x44f59c();
            };
            _0x2bbb74.readAsDataURL(_0x2eaa2f);
        } else if (_0x2eaa2f) {
            alert("Pilih file gambar ya!");
        }
        _0x301b24.target.value = null;
    });
    _0x195e67.addEventListener("input", _0x23c070 => {
        const _0x3d0e26 = _0x23c070.target.value;
        _0x3d9251.textContent = _0x3d0e26;
        _0x10406c(_0x5008a8, _0x3d0e26);
    });
    _0x4d2563.addEventListener("click", () => {
        const _0x2cb284 = _0x195e67.value;
        _0x933e9e = parseInt(_0x2cb284);
        localStorage.setItem("elainaChatBackground", _0x5008a8);
        localStorage.setItem('elainaChatBrightness', _0x933e9e);
        _0x10406c(_0x5008a8, _0x933e9e);
        _0x476b57();
    });
    _0x220816.addEventListener("click", () => {
        const _0x5c4c30 = localStorage.getItem("elainaChatBackground");
        const _0x2b9524 = localStorage.getItem("elainaChatBrightness");
        _0x933e9e = _0x2b9524 ? parseInt(_0x2b9524) : 0x28;
        _0x5008a8 = _0x5c4c30;
        _0x10406c(_0x5c4c30, _0x933e9e);
        _0x476b57();
    });
    _0x349314.addEventListener("click", _0x5c0687 => {
        if (_0x5c0687.target === _0x349314) {
            _0x220816.click();
        }
    });
    _0x2add6d.addEventListener("click", () => {
        _0x29300e.click();
    });
    _0x29300e.addEventListener("change", _0x4341fa => {
        const _0x583f7e = _0x4341fa.target.files[0x0];
        if (_0x583f7e && _0x583f7e.type.startsWith('image/')) {
            const _0x1b4cc7 = new FileReader();
            _0x1b4cc7.onload = _0x2b85d7 => {
                _0x45569b(_0x2b85d7.target.result, _0x583f7e.type);
            };
            _0x1b4cc7.readAsDataURL(_0x583f7e);
        } else if (_0x583f7e) {
            alert("Pilih file gambar ya!");
            _0x4341fa.target.value = null;
        }
    });
    _0x59c51e.addEventListener('click', _0x3f4ec5);
    _0x1c3397.addEventListener('click', _0x2285da => {
        _0x2285da.stopPropagation();
        _0x52b44d();
    });
    document.addEventListener("click", _0x3020f7 => {
        if (_0x20f2ed && !_0x20f2ed.classList.contains('hidden') && !_0x20f2ed.contains(_0x3020f7.target) && _0x3020f7.target !== _0x1c3397 && _0x3020f7.target !== _0x2aa9bc) {
            _0x5568aa();
        }
        const _0x3fd112 = _0x3020f7.target.closest(".message.user-message");
        const _0x31ab33 = _0x4824ca.querySelector('.message.editing');
        if (_0x31ab33 && (!_0x3fd112 || !_0x3fd112.classList.contains('editing')) && !_0x3020f7.target.closest(".edit-controls")) {
            const _0x557e3b = _0x31ab33.getAttribute("data-message-id");
            if (_0x557e3b) {
                _0x4a21a6(_0x557e3b);
            }
        }
    });
    let _0xafc21b;
    window.addEventListener("resize", () => {
        clearTimeout(_0xafc21b);
        _0xafc21b = setTimeout(() => {
            _0x28fc73();
            _0x21174f();
            if (document.activeElement === _0x2aa9bc) {
                _0x1b088d(true, false);
            }
        }, 0x96);
    });
    try {
        _0x1a418f();
    } catch (_0x38ffcd) {
        console.error("Fatal error during application initialization:", _0x38ffcd);
        document.body.innerHTML = "<div style=\"color: red; padding: 20px; text-align: center; font-family: sans-serif;\">Error initializing the application. Please try refreshing or clearing site data. <br><br>Details: <pre style=\"text-align: left; background: #333; padding: 10px; border-radius: 5px; white-space: pre-wrap; word-wrap: break-word;\">" + (_0x38ffcd.stack || _0x38ffcd) + "</pre></div>";
    }
});