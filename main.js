document.addEventListener('DOMContentLoaded', function () { //menjalankan kode tertentu ketika suatu peristiwa (event) terjadi pada elemen HTML dalam hal ini yaitu DOMContentLoaded - ketika halaman di refresh (memuat ulang)
    const userDataContainer = document.getElementById('user-data'); // mendapatkan referensi ke elemen HTML dengan id tertentu yang memiliki id user-data

    fetch('https://randomuser.me/api/?results=9') //melakukan permintaan HTTP yang dilakukan menggunakan API fetch pada JavaScript untuk mengambil data dari URL https://randomuser.me/api/?results=9
        .then(response => response.json()) //Ketika respons diterima, metode .json() digunakan untuk mengonversi respons menjadi objek JavaScript.
        .then(data => { //Setelah data JSON diterima dan dikonversi menjadi objek JavaScript,
            data.results.forEach(user => { //mengakses setiap objek user dalam array results yang diperoleh dari respons API.
                const userCard = document.createElement('div'); //membuat elemen div yang digunakan untuk membungkus setiap data user
                userCard.className = 'bg-white p-4 rounded shadow-md'; //mengatur ukuran, background, style dari userCard yang berupa rounded dan memiliki shadow

                //mendapatkan elemen HTML yang ada pada userCard yang sudah kita buat diatas
                //mendapatkan image dari url ${user.picture.large}, terdapat beberapa ukuran dalam api nya yaitu large, medium dan thumbnail, alt digunakan ketika foto tidak tampil dan akan menampilkan teks Profile Picture ketika kursor di arahkan di foto, w= weight dan h= height dengan ukuran 24px dan full rounded, artinya berbentuk lingkaran, mx = margin left dan right diatur auto, mb = margin bottom dengan 4px
                //mendapatkan nama depan dan belakang ${user.name.first} ${user.name.last}, text-xl menetapkan ukuran font yang lebih besar dari ukuran default, tebal fontnya semi bold, dan fornt berada di tengah
                //menetapkan warna teks menjadi abu-abu dengan tingkat kegelapan 700, teks berada di tengah, <strong> untuk memberikan penekanan atau tebal pada kata-kata yang ada di dalamnya, ${user.email} untuk mendapatkan email dari user
                //menetapkan warna teks menjadi abu-abu dengan tingkat kegelapan 700, teks berada di tengah, <strong> untuk memberikan penekanan atau tebal pada kata-kata yang ada di dalamnya, ${user.phone} untuk mendapatkan phone dari user
                //menetapkan warna teks menjadi abu-abu dengan tingkat kegelapan 700, teks berada di tengah, <strong> untuk memberikan penekanan atau tebal pada kata-kata yang ada di dalamnya, ${user.location.city} untuk mendapatkan city yang terdapat didalam location, begitu juga dengan ${user.location.country} untuk mendapatkan country yang terdapat di dalam location
                userCard.innerHTML = ` 
                    <img src="${user.picture.large}" alt="Profile Picture" class="w-24 h-24 rounded-full mx-auto mb-4">
                    <h2 class="text-xl font-semibold text-center">${user.name.first} ${user.name.last}</h2>
                    <p class="text-gray-700 text-center"><strong>Email:</strong> ${user.email}</p>
                    <p class="text-gray-700 text-center"><strong>Phone:</strong> ${user.phone}</p>
                    <p class="text-gray-700 text-center"><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
                `;

                userDataContainer.appendChild(userCard); //menambahkan elemen userCard ke dalam elemen yang sudah diperoleh sebelumnya, yaitu userDataContainer
            });
        })
        .catch(error => { //untuk menangkap error ketika proses berlangsung, dalam hal ini adalah proses fetching API
            console.error('Error fetching user data:', error); //menampilkan pesan error dalam console, berupa 'Error fetching user data:', lalu diikuti dengan error yang terjadi
        });
});

