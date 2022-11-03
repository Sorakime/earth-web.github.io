document.querySelector('#footer').innerHTML = `
    <div class="footer">
      <div class="tos">
        <a href="tos.html">
          利用規約
        </a>
      </div>
      <div class="vertical">
      |
      </div>
      <div class="pp">
        <a href="pp.html">
          プライバシーポリシー
        </a>
      </div>
      <div class="vertical">
      |
      </div>
      <div class="gc">
        <a href="https://graphicscreate.github.io/GraphicsCreate/">
          GraphicsCreate
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
  date = new Date();
  year = date.getFullYear();
  document.getElementById("year").innerHTML = year;