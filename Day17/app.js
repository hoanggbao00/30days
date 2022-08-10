const facebook = document.querySelector('.facebook h2'),
      youtube = document.querySelector('.youtube h2'),
      twitter = document.querySelector('.twitter h2');

function count(ele, to) {
    let count = 0,
        time = 250,
        stop = to/time;

    let counting = setInterval(() => {
        count += stop;
        if(count > to) {
            clearInterval(counting);
            ele.innerText = to;
        } else {
            ele.innerText = Math.round(count);
        }
    }, 1);
}

count(facebook, 3200);
count(youtube, 1600);
count(twitter, 9000);
