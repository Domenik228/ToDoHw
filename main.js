const yuborishTugmasi = document.getElementById('yuborishTugmasi');
const matnKiritish = document.getElementById('matnKiritish');
const vazifalarRoyxati = document.getElementById("vazifalarRoyxati");
const temaTugmasi = document.getElementById('temaTugmasi');
const body = document.body;

yuborishTugmasi.addEventListener('click', () => {
  const matn = matnKiritish.value.trim();
  if (matn === '') return;

  const li = document.createElement('li');

  const chap = document.createElement('div');
  chap.className = 'vazifa-chap';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    li.classList.toggle('bajarilgan', checkbox.checked);
  });

  const span = document.createElement('span');
  span.textContent = matn;

  chap.appendChild(checkbox);
  chap.appendChild(span);

  const ong = document.createElement('div');
  ong.className = 'vazifa-ong';

  const ochirishTugmasi = document.createElement('button');
  ochirishTugmasi.className = 'ochirish-tugmasi';
  ochirishTugmasi.textContent = '🗑️';
  ochirishTugmasi.addEventListener('click', () => {
    vazifalarRoyxati.removeChild(li);
  });

  ong.appendChild(ochirishTugmasi);

  li.appendChild(chap);
  li.appendChild(ong);

  vazifalarRoyxati.appendChild(li);

  matnKiritish.value = '';
});

temaTugmasi.addEventListener('click', () => {
  body.classList.toggle('qorongu-rejim');
  temaTugmasi.textContent = body.classList.contains('qorongu-rejim') ? '☀️' : '🌙';
});
