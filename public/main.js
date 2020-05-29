let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('get', `./page${ n+1 }`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const array = JSON.parse(request.response);
        array.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item.id;
          xxx.appendChild(li);
        })
        n += 1;
      } else {
        alert('加载失败');
      }

    }
  }
  request.send();
}


getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('get', './5.json');
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const object = JSON.parse(request.response);
        myName.textContent = object.name;
      } else {
        alert('加载失败');
      }
    }
  }
  request.send();
}


getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('get', './4.xml');
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName('warning')[0].textContent;
        console.log(text.trim())
      } else {
        alert('加载失败');
      }
    }
  }
  request.send();
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('get', './3.html');
  request.onload = () => {
    const div = document.createElement('div');
    div.innerHTML = request.response;
    document.body.appendChild(div);
  }
  request.onerror = () => {
    console.log('监听失败');
  }
  request.send();
}

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('get', '/2.js');
  request.onload = () => {
    const script = document.createElement('script');
    script.innerHTML = request.response;
    document.body.appendChild(script);
  }
  request.onerror = () => {
    console.log('监听失败');
  }
  request.send();
}

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('get', '/style.css');
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        // 创建style标签
        const style = document.createElement('style');
        // 填写style内容
        style.innerHTML = request.response;
        // 插入到head里
        document.head.appendChild(style);
      } else {
        alert('加载失败');
      }
    }
  }
  request.send();
}