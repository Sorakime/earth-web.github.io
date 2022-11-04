document.querySelector('#footer').innerHTML = `
    <div class="footer">
      <div class="tos">
        <a href="tos/tos.html">
          利用規約
        </a>
      </div>
      <div class="vertical">
      |
      </div>
      <div class="pp">
        <a href="pp/pp.html">
          プライバシーポリシー
        </a>
      </div>
      <div class="vertical">
      |
      </div>
      <div class="gc">
        <a href="#">
          お問い合わせ
        </a>
      </div>
    </div>
    <div class="ayear">
      <div>
        © EARTH 2022-
      <div>
      <div id="year">
      </div>
    </div>
  `;
document.querySelector('#rheader').innerHTML = `
  <div class="i">
    <div class="i-main">
      <div class="title-i">fdsada</div>
    <div>
  </div>
  `;
  date = new Date();
  year = date.getFullYear();
  document.getElementById("year").innerHTML = year;