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
  <div class="headerda">
    <a href="https://earth-web.github.io/">
      <img src="img/icon 01.png"></img>
    </a>
  </div>
  <div class="header-link">
    <div class="header-link-f">
      <a href="blog/bloghome.html">BLOG</a>
    </div>
    <div class="header-link-s">
      <a href="">

      </a>
    </div>
    <div class="header-link-t">
      <a href="">

      </a>
    </div>
  </div>
  `;
  date = new Date();
  year = date.getFullYear();
  document.getElementById("year").innerHTML = year;