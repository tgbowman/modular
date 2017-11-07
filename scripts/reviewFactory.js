const reviewsDatabase = []

let newReviewFactory = function(user, review, starNum, productId){
    reviewsDatabase.push(Object.create(null, {
        "user": {
            value: user,
            enumerable: true
        },
        "review": {
            value: review,
            enumerable: true
        },
        "starNum": {
            value: starNum,
            enumerable: true
        },
        "productId": {
            value: productId,
            enumerable: true
        },
    }))

}

newReviewFactory("jsmith1234", "90's franzen quinoa +1 master cleanse hashtag post-ironic drinking vinegar pug trust fund artisan. Echo park woke small batch lyft retro. Flannel synth wolf street art echo park, af glossier. Leggings XOXO ramps plaid 90's, ethical mlkshk seitan coloring book portland man bun. Mumblecore enamel pin austin banh mi poutine, man braid selvage pop-up yuccie brooklyn. Green juice blog XOXO, +1 echo park tote bag marfa celiac succulents before they sold out pork belly. Yuccie dreamcatcher taiyaki, vegan cliche pour-over flannel trust fund fixie pork belly. Food truck helvetica pug leggings humblebrag ugh retro direct trade shoreditch cray la croix adaptogen brunch narwhal semiotics. Swag ramps microdosing, glossier food truck butcher tote bag drinking vinegar locavore. Pop-up portland tattooed jean shorts, street art master cleanse synth. Mustache slow-carb put a bird on it irony affogato. Poke tbh green juice keffiyeh photo booth actually, wolf seitan tumblr succulents jean shorts fanny pack franzen.", 4, 1)

newReviewFactory("dumbledore23", "Wayfarers hexagon tumblr sartorial, whatever you probably haven't heard of them scenester biodiesel drinking vinegar shaman keffiyeh. Master cleanse pop-up trust fund, kombucha marfa affogato street art lumbersexual DIY. Deep v paleo ramps try-hard thundercats vexillologist austin man bun unicorn man braid snackwave. Schlitz gochujang waistcoat skateboard vaporware, +1 kitsch drinking vinegar tumeric meditation hammock street art cronut slow-carb kickstarter. Live-edge letterpress hot chicken, chillwave seitan wayfarers typewriter drinking vinegar chartreuse celiac. Sustainable glossier chartreuse cray before they sold out flannel everyday carry stumptown truffaut etsy mustache vegan. +1 street art glossier quinoa jean shorts actually art party migas mlkshk. Celiac poutine next level deep v, pork belly echo park venmo cornhole raclette austin. Af marfa intelligentsia disrupt, woke paleo air plant authentic tacos meh brooklyn. Crucifix literally pork belly art party post-ironic taxidermy mumblecore +1 you probably haven't heard of them PBR&B, taiyaki small batch farm-to-table microdosing man bun.", 3, 1)

newReviewFactory("artisanIceCube88", "Tbh deep v XOXO distillery ugh. Gluten-free church-key pabst, master cleanse vaporware kogi normcore VHS try-hard. Crucifix williamsburg small batch bespoke brunch. Scenester typewriter stumptown tumblr. Disrupt XOXO iPhone cloud bread, williamsburg DIY sriracha tacos normcore. Vinyl neutra blog wolf synth, succulents vape deep v ennui hoodie poutine kale chips hashtag. Before they sold out skateboard live-edge kinfolk hell of leggings kombucha YOLO viral try-hard slow-carb. Normcore yuccie chicharrones marfa vice wayfarers put a bird on it PBR&B YOLO mlkshk chartreuse lumbersexual cardigan whatever waistcoat. Tbh pinterest celiac enamel pin kickstarter. Venmo pour-over jean shorts aesthetic, drinking vinegar mixtape brooklyn. Next level man braid pinterest microdosing four loko.", 5, 1)

newReviewFactory("fancypants48", "Snackwave normcore readymade trust fund cliche. Tumblr lomo kitsch, portland messenger bag actually pour-over pug. Sartorial godard pinterest, typewriter pop-up twee la croix fixie offal adaptogen +1 kombucha. Lo-fi fanny pack wayfarers hexagon before they sold out. Raclette franzen farm-to-table snackwave fanny pack pop-up sustainable schlitz palo santo locavore gastropub kogi +1 man braid. DIY messenger bag quinoa synth flannel fanny pack, pitchfork pinterest hella poutine lumbersexual schlitz church-key vaporware wolf. Listicle green juice cornhole hell of biodiesel, tumblr kitsch try-hard four loko. Heirloom aesthetic disrupt, selfies 90's normcore wolf hella freegan four dollar toast vice tote bag church-key. Roof party chillwave next level 3 wolf moon man bun microdosing brooklyn plaid iPhone hell of crucifix. Kombucha synth plaid post-ironic. Microdosing pok pok four loko, shabby chic cliche taxidermy occupy banjo. Pinterest shabby chic VHS artisan yuccie photo booth, copper mug single-origin coffee tbh.", 3, 2)

newReviewFactory("ellusiveShibaInu75", "Enamel pin live-edge cold-pressed lumbersexual fanny pack freegan yr williamsburg. Drinking vinegar distillery normcore synth. Intelligentsia hashtag cloud bread la croix occupy. Kale chips yr bicycle rights succulents. Seitan intelligentsia kale chips letterpress, kombucha health goth artisan food truck banjo migas neutra. Schlitz letterpress whatever woke retro tilde put a bird on it godard etsy sriracha four loko tote bag drinking vinegar neutra. Typewriter mustache neutra vape keffiyeh biodiesel. Yuccie cray subway tile, ennui 90's taxidermy artisan sartorial kogi microdosing cliche. Pug butcher portland chicharrones freegan meh. Aesthetic bespoke authentic chicharrones meggings poke pickled cliche air plant disrupt dreamcatcher chambray truffaut mustache.", 5, 2)

newReviewFactory("fedoraLover55", "Brunch adaptogen meggings chillwave salvia snackwave tumblr next level banh mi pok pok tattooed iceland freegan ramps. 8-bit locavore keytar leggings sriracha narwhal tilde mixtape bicycle rights waistcoat pop-up mlkshk. Man braid typewriter gluten-free, dreamcatcher vexillologist retro knausgaard bicycle rights jianbing pork belly trust fund hot chicken flannel succulents pug. Paleo pork belly kitsch humblebrag cliche sustainable. Jianbing austin beard cardigan, lyft knausgaard listicle. Jianbing brunch ethical yr la croix you probably haven't heard of them tote bag austin. Readymade live-edge fam listicle migas meggings mlkshk try-hard. Flexitarian bespoke vape blue bottle fixie food truck. Snackwave quinoa before they sold out, 8-bit squid pug shaman umami. Farm-to-table chartreuse chia, direct trade keytar meditation normcore tousled letterpress irony VHS chambray brooklyn man bun.", 2, 2)

module.exports = reviewsDatabase