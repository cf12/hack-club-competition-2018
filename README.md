# Gift Finder

🎁 *This project was created for the Hack Club Holiday Challenge (2018) - More info can be found here: [Link](https://hackclub.com/)*

It's hard to find the perfect gift for <s>yourself</s> your friends during the holiday season. Some people love board games. Others love gift cards. Some don't give a crap.

Introducing the ALL NEW GIFT FINDER 2018 - the best way to find a gift for those friends that don't give a crap.

## Post Writeup & Inspiration
I'll be completely honest; the inspiration for this project wasn't the most interesting.
I was browsing amazon one fine evening for gifts, and I started wondering if there was a way for
me to find a perfect gift without going through 200 pages of products. The idea of a gift finder service
came to my mind while I was thinking about this, and I started looking around for one.

Now, if you actually google "Gift Finder," you can find dozens of gift finder websites. I
figured this was a neat little idea, and because it fit the theme perfectly, I decided
to create my own holiday themed gift finder.

The first thing I worked on was the snow. It was actually a lot easier to make than I initially thought it would be. I spent a few hours
learning JavaScript canvas, and implementing an individual snow particle, before I scaled up the amount of flakes.
The snow looked pretty weird at first (all of them were moving in the same direction) but after a few more revisions, I
threw in random velocities, opacities, and directions for the flakes. It ended up making a really nice background snow
parallax, and I'm proud to say that the only flaw I noticed in the results were that I forgot to read the apush chapter in
the midst of making it.

After the snow was designed, everything else fell in place. I picked a ridiculously bright blue gradient for the backdrop,
imported "Nunito" from google fonts, and styled it all w/ scss. I browsed the internet for a nice background,
and added a present along w/ the "Subscribe to PewDiePie" elf.

After I finished all of that, I browsed around amazon for some cool gifts and items. I stored the product IDs in a file
(src/assets/products.json) and implemented code that would randomly pick a gift from the list.

The hardest part of this project was probably picking the best font weights and colors for the text.
Even right now, I still think some of the text doesn't contrast well w/ the background, so I'll definitely have to
sort that out some other day...

In the end, I love how it turned out. There's definitely a lot more I can do to improve this project, especially in terms
of features, but I'm still very satisfied with the results.

I wanted to thank the Hack Club organizers for organizing this holiday challenge. It was really fun being able to participate,
as well as seeing all the other cool stuff everybody else made. Thank you guys!

## Coding Standards
This project uses the Standard JS Coding Style. Most of my Javascript projects are coded with the Standard JS Coding Style.
You can learn more about the project here: https://standardjs.com/

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
