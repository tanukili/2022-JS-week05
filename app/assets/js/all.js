/*let data = [
  {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
  },
  {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
  },
  {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
  }
];*/

const productList = document.querySelector('.product');
//新增資料筆數
const seachNum = document.querySelector('.seachNum');

axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
  .then(function(response){
    //多了一個外層物件的 data
    let data = response.data.data;
    //資料初始值
    let str = '';
    data.forEach(function(item,index){
      str += `<li class="gx-4 position-r bg-light mb-38 product-s-r">
                <img src="${item.imgUrl}" alt="travel-01" class="list-img">
                <p class="font-2-2 second-style position-area pt-8 pb-8 pr-20 pl-20 tag-r">${item.area}</p>
                <p class="font-1-1 position-score main-style pt-5 pb-5 tac tag-r">${item.rate}</p>
                <div class="p-20 list-content df fxdc jcsb">
                  <div>
                    <h2 class="font-3-4-m primary pb-4 border-2 mb-16">${item.name}</h2>
                    <p class="font-1-2 font-light mb-22">${item.description}</p>
                  </div>
                  <div class="df jcsb aic primary">
                    <div class="df">
                      <span class="material-icons-outlined mr-6">
                        error
                      </span>
                      <p class="font-1-1-m">剩下最後 ${item.group} 組</p>
                    </div>
                    <div class="df aic">
                      <p class="font-1-1-m mr-4">TWD</p>
                      <p class="font-4-5-m ff-en">$${item.price}</p>
                    </div>
                  </div>
                </div>
              </li>`;
      seachNum.textContent = `本次搜尋共 ${index + 1} 筆資料`
    });
    //畫出資料
    productList.innerHTML = str;
  })




