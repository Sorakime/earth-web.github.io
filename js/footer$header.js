document.querySelector('#footer').innerHTML = `
    <div class="footer">
      <div class="tos">
        <a href="pp/pp.html">
          プライバシーポリシー
        </a>
      </div>
      <div class="vertical">
      |
      </div>
      <div>
        <a href="#">
          お問い合わせ
        </a>
      </div>
      <div class="vertical">
      |
      </div>
      <div class="github">
        <a href="https://github.com/earth-web">
        <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
      <div class="twitter">
        <a href="https://twitter.com/earth_ryzen5">
          <ion-icon name="logo-twitter"></ion-icon>
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