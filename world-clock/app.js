function tick(){

    const $timezone = document.querySelectorAll('.timezone');

	Array.from($timezone).forEach(item => {
        //const timezone = item.getAttribute('data-timezone');
        //console.log(timezone); //America/New_York
        //console.log(item.dataset.timezone); //America/New_York

        // 取得 國家時間
		const d = new Date().toLocaleString('zh-TW', { 
            timeZone: item.dataset.timezone, hour12: false 
        });
		//console.log(d); // 2019/2/20 10:18:53
        
        // 取得 月
        const dateTime = new Date(d);
        const month = new Intl.DateTimeFormat("en-US", { month: "long" })
        .format(dateTime)
        .substring(0, 3); //February -> Feb

        // 取得 年月日
        const date = `${dateTime.getDate()} ${month}. ${dateTime.getFullYear()}`;
        
        // 取得 時分
        const hours = ("0" + dateTime.getHours()).slice(-2);
        const minutes = ("0" + dateTime.getMinutes()).slice(-2);
        const time = `${hours}:${minutes}`;

        // 寫入資料 
		item.querySelector('.zone-date').innerText = date;
		item.querySelector('.time').innerText = time;
	})
}

tick();
setInterval(tick, 1000);