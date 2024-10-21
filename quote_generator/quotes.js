function getQuote()
{
    quotes = new Array(4);
    sources = new Array(4);

    quotes[0] = "It always seems impossible until it's done";
    sources[0] = "Nelson Mandela";

    quotes[1] = "Don't chase after girls, chase after goals";
    sources[1] = "Sathvik Desai";

    quotes[2] = "Start where you are. Use what you have. Do what you can";
    sources[2] = "Arthur Ashe";

    quotes[3] = "First write my name correctly bro madhan not madan";
    sources[3] = "Madan Kumar";

    i = Math.floor(Math.random() * quotes.length);
    //document.write('<br><p><strong>' + quote[quoteNumber] + '</strong></p>')
    //document.write("<br><p>" + "\"" + quotes[i] + "\"" + "<p>")
    document.getElementById('quote-para').innerHTML = "<br><p>" + "\"" + quotes[i] + "\"" + "<p>";
    document.getElementById('source-para').innerHTML = "<p><em>" + " - " + sources[i] + "</em><p>";
    //document.write("<p><em>" + "-" + sources[i] + "</em><p>")
}