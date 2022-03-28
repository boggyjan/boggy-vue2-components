<template>
  <div>
    <h1>Boggy Vue2 Components Demo Page</h1>
    <nav class="page-nav">
      <a href="#" @click="showPage('ScrollShow')">ScrollShow</a>
      <a href="#" @click="showPage('Carousel')">Carousel</a>
      <a href="#" @click="showPage('ThreeDBox')">ThreeDBox</a>
      <a href="#" @click="showPage('DragSort')">DragSort</a>
      <a href="#" @click="showPage('Cheat')">Cheat</a>
      <a href="#" @click="showPage('TypingText')">TypingText</a>
      <a href="#" @click="showPage('DialogToast')">DialogToast</a>
    </nav>

    <div v-if="demoPage === 'ScrollShow'" class="scroll-show-demo-page">
      <ScrollShow class="my-section">
        <h2>ScrollShow 組件說明</h2>

        <p>ScrollShow 最初是拿來優化一些長頁面的效能用的。ScrollShow 在一開始會在 tag 上加上 style="visibility: hidden"，接著利用 IntersectionObserver 來判斷內容是否在畫面中或畫面外，以此來判斷需加上或移除 visibility: hidden，來隱藏畫面外的區域（並保有該區域的內容範圍所佔的長寬（包含transform過的位置）並顯示畫面內的內容。</p>

        <p>once attribute 預設值為 true。是用來告訴 ScrollShow 是否一旦顯示就不再隱藏，同時也意味著 active class 與 @show 的切換與觸發只會發生一次。因為所需的值是布林值，請在 attribute 開頭加上冒號 :once="true" 來宣告。</p>

        <p>active-class attribute 是用來設定當區塊變成可視時，要另外加上什麼 class name。這個 class name 預設為 active，但若命名為 active 不符合你的需求，設置會發生不預期的宣染時，你就可以透過 active-class 來自定你所想要的 class name。也可以留白 active-class=""。active class 的切換會依據 once 的設定而有所不同。</p>

        <p>show 是 ScrollShow 切換到可視狀態時所觸發的事件，讓您可以在該區塊變成可視狀態時，執行其他動作，例如：@show="doSomething()"</p>

        <div style="height: 800px;" />
      </ScrollShow>

      <ScrollShow
        :once="false"
        class="my-section"
      >
        <h2>once attribute 的範例</h2>
        <p>這個區塊每當出現在視窗範圍，或變成在視窗範圍外，都會使 style的visibility, active class, emit('show') 都改變或者觸發。</p>
        <div style="height: 800px;" />
      </ScrollShow>

      <ScrollShow
        :once="false"
        active-class="active-ani"
        class="my-section"
      >
        <h2>active-class attribute 的範例</h2>
        <p>當這個區塊出現在視窗範圍內時，會為該區塊增加 active-ani class name。讓 active-ani selector 中所設定的 animation 可以被執行。同時也設定了 :once="false" 使每次消失在視窗範圍後，再進入視窗範圍時，都會重新移除再賦予 class name，使得動畫可以再重新演釋一次。</p>
        <div style="height: 800px;" />
      </ScrollShow>

      <ScrollShow
        class="my-section"
        @show="doSomething()"
      >
        <h2>show 事件的範例</h2>
        <p>當這個區塊出現在視窗範圍內時，會透過 @show 來執行 methods 中的 doSomething function。</p>
        <div style="height: 800px;" />
      </ScrollShow>
    </div>

    <div v-if="demoPage === 'Carousel'" class="carousel-demo-page">
      <h2>Carousel 組件說明</h2>
      <h3>Regular example</h3>
      <Carousel
        :items="3"
        :dots="true"
        :nav="true"
        :margin="10"
        :responsive="{
          480: { items: 1, nav: true, dots: true, margin: 20 },
          578: { items: 3, nav: false, dots: false, margin: 10 },
          768: { items: 4, nav: true, dots: true }
        }"
        :auto-height="true"
      >
        <div class="banner">
          <a href="https://www.google.com">
            <img src="https://picsum.photos/id/1011/1400/550" width="1400" height="550" loading="lazy">
          </a>
        </div>
        <div class="banner">
          <a href="https://www.google.com">
            <img src="https://picsum.photos/id/1014/1400/550" width="1400" height="550" loading="lazy">
          </a>
        </div>
        <div class="banner">
          <a href="https://www.google.com">
            <img src="https://picsum.photos/id/101/1400/550" width="1400" height="550" loading="lazy">
          </a>
        </div>
        <div class="banner">
          <a href="https://www.google.com">
            <img src="https://picsum.photos/id/1011/1400/550" width="1400" height="550" loading="lazy">
          </a>
        </div>
        <div class="banner">
          <a href="https://www.google.com">
            <img src="https://picsum.photos/id/1014/1400/850" width="1400" height="850" loading="lazy">
          </a>
        </div>
        <div class="banner">
          <a href="https://www.google.com">
            <img src="https://picsum.photos/id/101/1400/950" width="1400" height="550" loading="lazy">
          </a>
        </div>
        <div class="banner">
          <a href="https://www.google.com">
            <img src="https://picsum.photos/id/1014/1400/550" width="1400" height="550" loading="lazy">
          </a>
        </div>
        <div class="banner">
          <a href="https://www.google.com">
            <img src="https://picsum.photos/id/1016/1400/550" width="1400" height="550" loading="lazy">
          </a>
        </div>
        <div class="banner">
          <a href="https://www.google.com">
            <img src="https://picsum.photos/id/1018/1400/550" width="1400" height="550" loading="lazy">
          </a>
        </div>
        <div class="banner">
          <a href="https://www.google.com">
            <img src="https://picsum.photos/id/1019/1400/550" width="1400" height="550" loading="lazy">
          </a>
        </div>
      </Carousel>

      <h3>Horizon Scroll Pane (autoWidth) example</h3>
      <Carousel
        :margin="30"
        :auto-width="true"
        class="my-tiny-list"
      >
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1010/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1011/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1012/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1013/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1014/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1015/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1016/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1021/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1018/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1019/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1020/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1021/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1022/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1023/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1024/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1025/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1026/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1027/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1028/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1029/100/100" width="100" height="100" loading="lazy">
        </a>
        <a href="#" class="my-tiny-item">
          <img src="https://picsum.photos/id/1031/100/100" width="100" height="100" loading="lazy">
        </a>
      </Carousel>
    </div>

    <div v-if="demoPage === 'ThreeDBox'" class="three-d-box-demo-page">
      <h2>ThreeDBox 組件說明</h2>
      <div class="box-container">
        <ThreeDBox class="three-d-box-comp" width="10vw" height="10vw" length="10vw">
          <img slot="back" src="https://picsum.photos/id/1011/400/400">
          <img slot="left" src="https://picsum.photos/id/1012/400/400">
          <img slot="right" src="https://picsum.photos/id/1013/400/400">
          <img slot="top" src="https://picsum.photos/id/1014/400/400">
          <img slot="bottom" src="https://picsum.photos/id/1015/400/400">
          <img slot="front" src="https://picsum.photos/id/1016/400/400">
        </ThreeDBox>
      </div>
    </div>

    <div v-if="demoPage === 'DragSort'" class="drag-sort-demo-page">
      <h2>DragSort 組件說明</h2>

      <h3>&lt;table&gt; tag Demo</h3>
      <table class="draggable-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>RANK</th>
          </tr>
        </thead>

        <DragSort tag="tbody" :list="list">
          <tr v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td><a href="https://www.google.com" target="_blank">{{ item.name }}</a></td>
            <td>{{ item.rank }}</td>
          </tr>
        </DragSort>
      </table>

      <h3>&lt;ul&gt; tag Demo</h3>
      <DragSort tag="ul" :list="list2" class="draggable-ul">
        <li v-for="item in list2" :key="item.id">
          {{ item }}
        </li>
      </DragSort>
    </div>

    <div v-if="demoPage === 'Cheat'" class="cheat-demo-page">
      <h2>Cheat 組件說明</h2>
      <p>這是拿來做金手指用的，看code。</p>
      <Cheat code="ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowLeft,ArrowRight,ArrowRight,a,b" @complete="show('cheat code [ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowLeft,ArrowRight,ArrowRight,a,b] complete!')" />
      <Cheat code="T,E,S,T" @complete="show('cheat code [T,E,S,T] complete!')" />
      <Cheat code="t,e,s,t" @complete="show('cheat code [t,e,s,t] complete!')" />
      <Cheat code="Escape" @complete="show('cheat code [Esc] complete!')" />
    </div>

    <div v-if="demoPage === 'TypingText'" class="typing-text-ani-demo">
      <h2>TypingText Animation</h2>

      <h3>Regular Typing Text Animation</h3>
      <TypingTextAnimation
        :content="title[titleIndex]"
        :speed="5"
        @complete="changeTitle()"
      />

      <h3>Lily Chou-Chou Typing Text Animation</h3>
      <div class="lilychouchou">
        <LilychouchouTypingTextAnimation :content="title2[title2Index]" :speed="5" @complete="changeTitle2()" />
      </div>

      <h3>Lily Chou-Chou Typing Text Animation (English)</h3>
      <div class="lilychouchou">
        <LilychouchouTypingTextAnimation :content="title3[title3Index]" :speed="5" @complete="changeTitle3()" />
      </div>
    </div>

    <div v-if="demoPage === 'DialogToast'" class="dialog-toast-demo-page">
      <!-- toast and dialog -->
      <!-- 要放在layout中 -->
      <Toast ref="toast" :countdown="3000" />
      <Dialog ref="dialog" ok-label="OK" cancel-label="Cancel" />

      <h2>Dialog and toast demo</h2>
      <p>
        Place Dialog and Toast component to layout. and call <code>await this.$alert('content')</code> or <code>await this.$confirm('content')</code> or <code>this.$toast('content')</code>.
      </p>

      <button @click="showAlert()">
        $alert()
      </button>
      <button @click="showAlertFromStore()">
        call $alert() from store
      </button>
      <button @click="showConfirm()">
        $confirm()
      </button>
      <button @click="showToast()">
        $toast()
      </button>
    </div>
  </div>
</template>

<script>
import ScrollShow from './components/ScrollShow'
import Carousel from './components/Carousel'
import ThreeDBox from './components/ThreeDBox'
import DragSort from './components/DragSort'
import Cheat from './components/Cheat'
import TypingTextAnimation from './components/TypingTextAnimation'
import LilychouchouTypingTextAnimation from './components/LilychouchouTypingTextAnimation'
import Dialog from './components/Dialog'
import Toast from './components/Toast'

export default {
  components: {
    ScrollShow,
    Carousel,
    ThreeDBox,
    DragSort,
    Cheat,
    TypingTextAnimation,
    LilychouchouTypingTextAnimation,
    Dialog,
    Toast
  },

  data () {
    // DragSort demo data
    const list = [
      {
        id: 1,
        name: 'Boggy Jan',
        rank: 1
      },
      {
        id: 2,
        name: 'SakaiYu',
        rank: 5
      },
      {
        id: 3,
        name: 'Ai',
        rank: 3
      },
      {
        id: 4,
        name: 'Radwimps',
        rank: 2
      }
    ]

    const list2 = ['Russia starts genocide in Ukraine', 'Crude oil price rises again and again', 'Taiwan Stock Exchange says the price will surges to highest since 2013']

    return {
      demoPage: 'ScrollShow',
      list,
      list2,

      // TypingText Animation demo data
      titleIndex: 0,
      title: [
        '泣いていいんだよ　そんな一言に僕は救われたんだよ　ほんとにありがとう　情けないけれど。',
        'ありのままの2人でいいよ。ひだまり見つけて遊ぼうよ。ベランダで水をやる君の。'
      ],

      title2Index: 0,
      title2: [
        '夕暮れの空はあかく',
        'みんなの視線　冷たく',
        'そして大きな雲が',
        '空から降りてきて',
        'あたしを隠していく'
      ],

      title3Index: 0,
      title3: [
        'The territory of modern',
        'Ukraine has been',
        'inhabited since 32,000 BC.',
        'During the Middle Ages',
        'the area was a key centre of East Slavic'
      ]
    }
  },

  mounted () {
    // dialog & toast
    // 有用VUEX的話可以這樣註冊
    /* eslint-disable */
    // Vuex.Store.prototype.$alert = this.$refs.dialog.alert
    // Vuex.Store.prototype.$confirm = this.$refs.dialog.confirm
    // Vuex.Store.prototype.$toast = this.$refs.toast.toast
    /* eslint-enable */
  },

  methods: {
    showPage (pageName) {
      this.demoPage = pageName
    },

    doSomething () {
      /* eslint-disable */
      console.log('yoyoyo show!!!')
    },

    // cheat demo func
    show (msg) {
      alert(msg)
    },

    //TypingText Animation demo func
    changeTitle () {
      this.titleIndex++

      if (this.titleIndex > this.title.length - 1) {
        this.titleIndex = 0
      }
    },
    changeTitle2 () {
      this.title2Index++

      if (this.title2Index > this.title2.length - 1) {
        this.title2Index = 0
      }
    },
    changeTitle3 () {
      this.title3Index++

      if (this.title3Index > this.title3.length - 1) {
        this.title3Index = 0
      }
    },

    // Dialog demo func
    async showAlert () {
      await this.$alert('This is a alert')
    },

    async showConfirm () {
      if (await this.$confirm('This is a confirm')) {
        await this.$alert('Click OK')
      } else {
        await this.$alert('Click Cancel')
      }
    },

    // Toast demo func
    showToast () {
      this.$toast('This is a toast')
    },

    showAlertFromStore () {
      this.$alert('看code')
      // 首先dialog & toast的註冊方式如下
      // Vuex.Store.prototype.$alert = this.$refs.dialog.alert
      // Vuex.Store.prototype.$confirm = this.$refs.dialog.confirm
      // Vuex.Store.prototype.$toast = this.$refs.toast.toast

      // diapatch store action
      // this.$store.dispatch('showAlertFromStore')
      // 在store中可直接使用 this.$alert ...etc
    }
  }
}
</script>

<style lang="scss">
.page-nav {
  display: block;

  a {
    margin-right: 10px;
  }
}

.carousel-demo-page {
  .banner {
    img {
      width: 100%;
      height: auto;
    }
  }

  // autoWidth需要自訂一下nav的高度
  .my-tiny-list {
    .carousel__navLeftBtn,
    .carousel__navRightBtn {
      top: calc(50% - 33px);
      background-color: #fff;
      border: 10px solid #fff;
      box-shadow: 0 0 10px #0003;
    }
  }
}

.scroll-show-demo-page {
  .my-section {
    margin: 20px;
    padding: 20px;
    background: #f0f0f0;
  }

  .active-ani {
    animation: slide-in 1s;
  }

  @keyframes slide-in {
    0% {
      transform: translateX(800px);
    }
  }
}

.three-d-box-demo-page {
  .box-container {
    display: inline-block;
    vertical-align: middle;
    margin: 0 25px;
    perspective: 1000px;
    transform-style: preserve-3d;
  }

  .three-d-box-comp {
    animation: rotate-box 10s linear infinite;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @keyframes rotate-box {
    0% {
      transform: rotateX(0) rotateY(0) rotateZ(0);
    }
    100% {
      transform: rotateX(360deg) rotateY(0) rotateZ(360deg);
    }
  }
}

.drag-sort-demo-page {
  .draggable-table {
    border-collapse: collapse;

    tr {
      background: #fafafa;

      &:nth-child(even) {
        background: #f0f0f0;
      }
    }

    th {
      text-align: left;
    }

    th, td {
      padding: 10px;
      border: 1px solid #ccc;
    }
  }

  .draggable-ul {
    padding: 0;
    list-style: none;

    li {
      margin-bottom: 3px;
      padding: 10px;
      background: #fafafa;
      border: 1px solid #ccc;
    }
  }
}

.typing-text-ani-demo {
  .lilychouchou {
    padding: 100px 20px;
    background: #000;
    color: #fff;
    font-family: serif;
    font-size: 2em;
    font-weight: 100;
    text-align: center;
    text-shadow: 0 0 16px #fff;
  }
}
</style>
