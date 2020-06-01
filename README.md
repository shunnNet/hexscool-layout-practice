# hexscool-layout-practice
六角切版練習

## Week 1
第一周 - 履歷版型
[Week 1 resume-layout](https://shunnnet.github.io/hexscool-layout-practice/%E7%AC%AC%E4%B8%80%E5%91%A8/resume.html)
- 嘗試使用 em 寫
- 盡量使用 VSCode emmet 及 熱鍵
- [keybr 每日打字練習](https://www.keybr.com/)

## Week 2
第二周 - 個人頁面版型
[Week 2 person-layout](https://shunnnet.github.io/hexscool-layout-practice/%E7%AC%AC%E4%BA%8C%E5%91%A8/person.html)
本周練習項目
- 嘗試不使用 browser dev tool
- 嘗試不要邊看預覽邊開發: 
  達成狀況： 在最後調整項目前只看了一次。
  最後調整項目： 靠下面那個background、調整key錯數字的部分(邊距/字體大小)、字型
- html 初期建構階段全部使用emmet
- [keybr 每日打字練習](https://www.keybr.com/)

## Week 2 after review
[Week 2 person-layout-after-review](https://shunnnet.github.io/hexscool-layout-practice/%E7%AC%AC%E4%BA%8C%E5%91%A8-%E6%94%B9/person.html)
第二周，經助教建議後修改
1. 將 section & article 區塊拉到 main 底下第一層，強調區塊感。
2. 將各大區塊的樣式寫成具有特定語意的 class。 e.g Intro、About 等。
   這種寫法雖然可以大幅度提高 HTML 的可讀性，但是在多頁可能會發生語意衝突，以及跟網頁內容的耦合較高等等問題。**需要確認使用的時機**。
3. 簡化 DOM 節點。當初可能是考量到擴充性，所以寫的比較累贅。但也許夠用就好？
4. 修正、簡化一些樣式的寫法。
5. 修改 Intro 文字與背景的相對關係。

## Week 3 + 4
[Week 3+4 glasses-layout](https://shunnnet.github.io/hexscool-layout-practice/第三、四周/public/)

第三、四周 - 眼鏡品牌網站
本次練習項目 : 無
花費時間： 斷斷續續累計約 75 小時
感想：
1. 使用 pug mixin，但 HTML 結構不容易隨意更動，而且會有要找檔案才知道樣式的問題
2. 猶豫哪邊要寫成 BEM，哪邊要用工具 class 寫。
   最後覺得可以切分成兩種：
   1. 通用但因地而異的 ：元件樣式寫基本結構 + 工具 class
   2. 完整度很高的： 全 CSS 元件
   3. 很小又不具通用性的： 工具 class 
   
3. 要用的邏輯就貫徹到底比較好