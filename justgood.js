const fetch = require('node-fetch');

class Imjustgood {
    constructor(apikey) {
        this.host = "https://api.imjustgood.com";
        this.headers = {
            "User-Agent": "Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36",
            "Apikey": apikey
        };
        this.apikey = apikey;
    }

    GoodJson(data) {
        return JSON.stringify(data, null, 4);
    }

    async Get(path, headers = {}, params = {}) {
        headers = { ...this.headers, ...headers };
        const url = new URL(this.host + path);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        const response = await fetch(url, { headers });
        const result = await response.json();

        if (response.status !== 200) {
            throw new Error("ERROR API SYSTEM");
        }

        if (result.status !== 200) {
            throw new Error(result.message);
        }

        return result;
    }

    async Post(path, headers = {}, params = {}, data = null, files = null, isjson = null) {
        headers = { ...this.headers, ...headers };
        const url = new URL(this.host + path);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        const body = new FormData();

        if (data) {
            for (const key in data) {
                body.append(key, data[key]);
            }
        }

        if (files) {
            for (const key in files) {
                body.append(key, files[key]);
            }
        }

        if (isjson) {
            headers['Content-Type'] = 'application/json';
        }

        const response = await fetch(url, {
            method: 'POST',
            headers,
            body
        });

        const result = await response.json();

        if (response.status !== 200) {
            throw new Error("ERROR API SYSTEM");
        }

        if (result.status !== 200) {
            throw new Error(result.message);
        }

        return result;
    }

    async status() {
        const params = { "apikey": this.apikey };
        return this.Get("/status", params);
    }

    async youtube(query) {
        return this.Get(`/youtube=${query}`);
    }

    async youtubedl(url) {
        return this.Get(`/youtubedl=${url}`);
    }

    async joox(query) {
        return this.Get(`/joox=${query}`);
    }

    async lyric(query) {
        return this.Get(`/lyric=${query}`);
    }

    async chord(query) {
        return this.Get(`/joox=${query}`);
    }

    async smule(username) {
        return this.Get(`/joox=${username}`);
    }

    async smuledl(url) {
        return this.Get(`/smuledl=${url}`);
    }

    async tiktok(username) {
        return this.Get(`/tiktok=${username}`);
    }

    async tiktokdl(url) {
        return this.Get(`/tiktokdl=${url}`);
    }

    async instagram(username) {
        return this.Get(`/instagram=${username}`);
    }

    async instapost(url) {
        return this.Get(`/instapost=${url}`);
    }

    async instastory(username) {
        return this.Get(`/instastory=${username}`);
    }

    async twitter(username) {
        return this.Get(`/twitter=${username}`);
    }

    async twitterdl(username) {
        return this.Get(`/twitterdl=${username}`);
    }

    async snackvideo(username) {
        return this.Get(`/snackvideo=${username}`);
    }

    async secreto(url) {
        const params = { "url": url };
        return this.Get("/secreto", params);
    }

    async facebookdl(url) {
        const params = { "url": url };
        return this.Get("/facebook/video", params);
    }

    async pinterest(url) {
        const params = { "url": url };
        return this.Get("/pinterest", params);
    }

    async pinsearch(query) {
        const params = { "search": query };
        return this.Get("/pinterest", params);
    }

    async github(username) {
        return this.Get(`/github=${username}`);
    }

    async playstore(query) {
        return this.Get(`/playstore=${query}`);
    }

    async translate(lang, text) {
        return this.Get(`/translate/${lang}=${text}`);
    }

    async image(query) {
        return this.Get(`/image=${query}`);
    }

    async wallpaper(query) {
        return this.Get(`/wallpaper=${query}`);
    }

    async hentai() {
        return this.Get("/hentai");
    }

    async kamasutra() {
        return this.Get("/kamasutra");
    }

    async dick() {
        return this.Get("/dick");
    }

    async tits() {
        return this.Get("/tits");
    }

    async vagina() {
        return this.Get("/vagina");
    }

    async movie(query) {
        return this.Get(`/movie=${query}`);
    }

    async movie_quotes() {
        return this.Get("/movie/quotes");
    }

    async cinema(cityname) {
        return this.Get(`/cinema=${cityname}`);
    }

    async tinyurl(url) {
        return this.Get(`/tinyurl=${url}`);
    }

    async bitly(url) {
        return this.Get(`/bitly=${url}`);
    }

    async kbbi(query) {
        return this.Get(`/kbbi=${query}`);
    }

    async topnews() {
        return this.Get("/topnews");
    }

    async wikipedia(query) {
        return this.Get(`/wikipedia=${query}`);
    }

    async urban(query) {
        return this.Get(`/urban=${query}`);
    }

    async zodiac(sign) {
        return this.Get(`/zodiac=${sign}`);
    }
    async alquran() {
        return this.Get("/alquran=list");
    }

    async alquranQS(query) {
        return this.Get(`/alquran=${query}`);
    }

    async bible() {
        return this.Get("/bible");
    }

    async adzan(cityname) {
        return this.Get(`/adzan=${cityname}`);
    }

    async cuaca(cityname) {
        return this.Get(`/cuaca=${cityname}`);
    }

    async bmkg() {
        return this.Get("/bmkg");
    }

    async corona() {
        return this.Get("/corona");
    }

    async gold() {
        return this.Get("/gold");
    }

    async crypto(code) {
        const params = { convert: code };
        return this.Get("/crypto", { params });
    }

    async karir() {
        return this.Get("/karir");
    }

    async cellular(query) {
        return this.Get(`/cell=${query}`);
    }

    async lahir(date) {
        return this.Get(`/lahir=${date}`);
    }

    async jadian(date) {
        return this.Get(`/jadian=${date}`);
    }

    async nama(name) {
        return this.Get(`/nama=${name}`);
    }

    async mimpi(query) {
        return this.Get(`/mimpi=${query}`);
    }

    async acaratv() {
        return this.Get("/acaratv/now");
    }

    async acaratv_channel(channel) {
        return this.Get(`/acaratv=${channel}`);
    }

    async cctv_code() {
        return this.Get("/cctv/code");
    }

    async cctvSearch(code) {
        return this.Get(`/cctv/search/id=${code}`);
    }

    async mangaSearch(query) {
        return this.Get(`/manga/search=${query}`);
    }

    async mangaChapter(chapterId) {
        return this.Get(`/manga/chapter=${chapterId}`);
    }

    async timeline(url) {
        return this.Get(`/timeline=${url}`);
    }

    async resi(query, code) {
        return this.Get(`/resi/${query}=${code}`);
    }

    async courierCode() {
        return this.Get("/courier");
    }

    async screenshot(url) {
        const params = { url };
        return this.Get("/screenshot", { params });
    }

    async gif(query) {
        return this.Get(`/gif=${query}`);
    }

    async search(query) {
        return this.Get(`/search=${query}`);
    }

    async place(query, region = "id", language = "id") {
        const params = { query, region, language };
        return this.Get("/place", { params });
    }

    async calc(query) {
        return this.Get(`/calc=${query}`);
    }

    async language() {
        return this.Get("/language/code");
    }

    async currencyCode() {
        return this.Get("/currency/code");
    }

    async lineapp() {
        return this.Get("/line");
    }

    async linestore(packageId) {
        const params = { id: packageId };
        return this.Get("/linestore", { params });
    }

    async fancy(query) {
        const params = { text: query };
        return this.Get("/fancy", null, params);
    }

    async simisimi(query) {
        const params = { text: query };
        return this.Get("/simisimi", null, params);
    }

    async stamplist() {
        return this.Get("/stamplist");
    }

    async stamp(num, url) {
        const params = { url: url, num: num };
        return this.Get("/stamp", null, params);
    }

    async meme(text1, text2, url) {
        return this.Get(`/meme/${text1}/${text2}/url=${url}`);
    }

    async imagetext(query) {
        const params = { text: query };
        return this.Get("/imgtext", null, params);
    }

    async imgurl(path) {
        const formData = new FormData();
        formData.append("file", path);
        return this.Post("/imgurl", null, null, formData);
    }

    async removebg(imagepath, background = null) {
        const formData = new FormData();
        formData.append("photo", imagepath);
        if (background !== null) {
            formData.append("background", background);
        }
        return this.Post("/removebg", null, null, formData);
    }

    async ascii(query) {
        const result = await this.Get(`/ascii=${query}`);
        return result.text.split("pre")[1].slice(1, -2);
    }

    async customlink(label, url) {
        const headers = { label: label, url: url };
        return this.Get("/custom/make", headers);
    }

    async watermark_image(imageUrl, iconUrl) {
        const params = { image: imageUrl, icon: iconUrl };
        return this.Get("/watermark/image", null, params);
    }

    async watermark_text(imageUrl, text) {
        const params = { image: imageUrl, text: text };
        return this.Get("/watermark/text", null, params);
    }

    async photohack(path, text, effect = "liputan6") {
        const params = { effect: effect, text: text };
        const formData = new FormData();
        formData.append("file", path);
        return this.Post("/photohack", null, params, formData);
    }

    async textpro(text1, text2 = null, text3 = null, effect = "scifi") {
        const params = { effect: effect, text1: text1, text2: text2, text3: text3 };
        return this.Get("/textpro", null, params);
    }

    async lineqr(
        appName = "DESKTOPWIN\t7.13.2\tWindows\t10.0", //default appname you can change it as you want
        sysName = "IMJUSTGOOD", //default sysname you can change it as you want
        cert = null,
        style = null,
        size = null,
        border = null,
        background = null,
        foreground = null,
        path = null
    ) {
        const headers = {
            "appName": appName,
            "sysName": sysName,
            "cert": cert
        };
        const params = {
            "style": style,
            "size": size,
            "border": border,
            "background": background,
            "foreground": foreground
        };
        const files = {};
        if (path !== null) {
            files.logo = new Blob([await fetch(path).then((res) => res.blob())], {
                type: "image/png"
            });
        }
        return this.Post("/lineqr", headers, params, null, files);
    }

    async lineqrGetPin(path) {
        return this.Get("/pin" + path.slice(30));
    }

    async lineqrGetToken(path) {
        return this.Get("/token" + path.slice(32));
    }

    async check_ip(query) {
        return this.Get("/ip=" + query);
    }

    async proxies() {
        return this.Get("/proxies");
    }

    async BinaryEncode(query) {
        const params = { q: query };
        return this.Get("/binary/text", { params });
    }

    async BinaryDecode(query) {
        const params = { q: query };
        return this.Get("/binary/digit", { params });
    }

    async B64Encode(query) {
        const params = { q: query };
        return this.Get("/base64/text", { params });
    }

    async B64Decode(query) {
        const params = { q: query };
        return this.Get("/base64/code", { params });
    }

}
module.exports = Imjustgood;
