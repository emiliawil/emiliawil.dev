---
title: "The Smartest Engineer Has No Brain"
date: 2026-05-30
description: "An overview of biomimicry and what happens when we try to teach computers to do what evolution does."
tags:
  [
    "science",
    "technology",
    "evolution",
    "biomimicry",
    "AI",
    "genetic algorithms",
    "generative design",
    "AlphaFold",
  ]
---

A few years ago, I read something about how researchers had discovered that moth wings could inspire a new generation of ultra-thin soundproofing materials (like wallpaper). Moth wings are covered in tiny, paddle-shaped scales that absorb sound by vibrating at specific frequencies, converting sound energy into kinetic energy rather than reflecting it back, allowing them to be extraordinarily thin while still being highly effective. [^1] [^2]

Millions of years of chaotic trial and error really does lead to some extremely efficient problem-solving. In the case of the moth wings, moths and bats have been locked in an evolutionary tug of war; bats have been getting better at sonar to detect insects to eat, and moths in turn have become increasingly good at hiding from it.

## **Biomimicry in action**

Having been pondering it again this morning, I wondered what other nature-inspired product development has occurred, and immediately fell into a rabbit-hole that I learned is called "biomimicry". And, as it turns out, there are thousands of examples of technologies inspired by biology.

Some well-known examples of biomimicry:

### **1\. Velcro**

Apparently the most well-known example of biomimicry. In 1941, George de Mestral was curious about burrs and the way they clung to natural fibres like his dog's fur. He examined them under a microscope and was inspired by the hook-and-loop surfaces he observed — though it would take him another fourteen years to develop and patent the technology he eventually named Velcro, in 1955. [^3]

### **2\. Shinkansen**

Japan's bullet train was redesigned by engineer Eiji Nakatsu — himself an amateur birdwatcher — to mimic the shape of a Kingfisher's beak and head. There had previously been an issue when the train passed through tunnels — it would create a loud 'boom' which disturbed wildlife and anyone nearby. Nakatsu observed how the kingfisher's beak minimised the pressure wave when transitioning from air into water, allowing it to dive without a large splash in order to catch prey. Once the Shinkansen had been redesigned, it had much less air resistance, making it quieter and faster, and no longer booming through tunnels. [^4]

### **3\. Lotus-effect surfaces**

The "lotus effect" refers to the natural super-hydrophobic and self-cleaning property found on the leaves of the lotus plant. It happens when microscopic surface bumps and a waxy coating force water to bead up into perfect spheres, picking up dirt and rolling off to leave the surface clean and dry. The lotus' surface properties have inspired countless industrial coatings, from stain-resistant fabrics to self-cleaning glass and paint. [^5]

## **Can we simulate evolution?**

This is where my tech brain kicked in and thought "wait, if we had enough computing power and a really good physics engine, could we mimic the evolution process itself using machine learning?" And, of course, the answer was: we already are! Turns out this is a really exciting area of computer science that has existed for a while. There are three things I found in this line of inquiry:

### **1\. Genetic algorithms**

The concept of mimicking evolution computationally actually goes back to the 1970s. A genetic algorithm is essentially a population-based problem-solving method that iteratively evolves candidate solutions toward an optimum by applying selection, crossover (mixing two solutions together like DNA from two parents), and mutation. You start with a population of random designs, test how well each one performs ("fitness"), let the best ones "reproduce" and combine their traits, add a little random mutation, and repeat. Thousands of generations can run overnight on a computer. [^6]

### **2\. Generative design**

This is the kind of thing I was hoping to find when searching around about this. Autodesk and other software have been providing generative AI tools for some years now which allow engineers to create more efficient parts. Engineers tell the software what a part needs to do (what loads it must carry, what forces it will face) and the AI generates 30 to 40 design iterations in a matter of hours, each improving on the last to evolve an optimal structure. It also simultaneously simulates whether the design can be manufactured.

Whereas human designers might manage one design iteration every week or two, the AI can do one iteration per minute, meaning you get vastly more cycles, and therefore far more optimal designs, much faster.

NASA has been using this technique, calling the results "Evolved Structures". Engineer Ryan McClelland pioneered the approach at NASA's Goddard Space Flight Center, using it to design hardware for missions including Mars Sample Return and the EXCITE space telescope — producing components that are around three times better in stiffness-to-weight ratio, at around a tenth of the usual design time. [^7] [^8] [^9]

The best thing about this is how funky they look — or, as McClelland described them, like the bones of an alien species. Just like evolution doesn't "know" what a part is "supposed" to look like, the AI has no aesthetic preconceptions. Evolution converged on the hollow, latticed structure of bird bones over millions of years; this algorithm finds similar solutions in a matter of hours. Pretty cool. [^10]

### **3\. AlphaFold**

To explain AlphaFold, I need to briefly mention proteins. Proteins are the molecular machines that run all of life. They do essentially everything inside your cells, and their 3D shape determines what they do. Evolution has been testing and refining protein shapes for billions of years. Figuring out a protein's shape from scratch was considered one of the hardest unsolved problems in all of science. Then in 2020, Google DeepMind's AlphaFold essentially cracked it. [^11]

AlphaFold studied how amino acid sequences had co-evolved across millions of species over billions of years and inferred which parts of a protein must be near each other in 3D space, using the process of evolution itself as training data. AlphaFold 3, released in 2024, went even further, modelling how proteins interact with DNA, RNA, and drug molecules, and has doubled prediction accuracy in some key areas. [^12]
Researchers have already used it to make progress on malaria vaccines, cancer treatments, and enzyme design. It's also opening up drug discovery for diseases that were previously considered "undruggable", meaning we couldn't figure out how to interfere with the relevant protein.

## **The limits of borrowing from nature**

It would be easy to end here on a triumphant note — evolution is brilliant, we're learning from it, let's have a dance party and let the credits roll, etc.

But there's a tension at the heart of all of this that, to me, sort of mimics one of the greater problems with generative AI more generally. Evolution is "dumb" in a way that turns out to be extraordinarily useful. It has no goal. It isn't optimising for anything in particular — just for survival, right now, in whatever is the subject's current environment. That's exactly why it finds solutions humans can't replicate inorganically. Our digital versions — genetic algorithms, generative design — are goal-directed. We tell them what we want, and that makes them faster, but also more constrained. They find a good answer to our question, rather than stumbling across something we didn't even know to ask. That diversity of solutions is what makes evolution so powerful, and it's something we lose when we try to direct it.

I came across a quote in Zygote Quarterly, a journal about biologically-inspired design, from a researcher working with mycelium (fungal networks, another area of intense biomimicry interest).

> "Biology is not a machine waiting to be tuned; it operates according to its own logic. Working with mycelium has repeatedly shown me that biology does not optimise for maximum performance, but for species survivability. When we attempt to extract only what serves us, we risk ignoring the system, since we reduce it to only what we need and the knowledge we have at that time. This means we probably miss key features of that system."
>
> <cite>Ilse (C.A.) Rovers, "From hype to hyphae", <em>Zygote Quarterly</em>, Issue 40 [^13]</cite>

I think that's the right note to end on. The moth didn't evolve its wings to inspire our wallpaper. The kingfisher didn't shape its beak for the benefit of Japanese rail engineers. Nature's solutions are embedded in whole systems — predator-prey relationships, ecosystems, millions of years of context — and when we extract just the bit we need, we are, by definition, simplifying something that wasn't designed to be simple.

My understanding of this topic is nowhere near deep enough to make any grand claims about it, but I do think it's important to acknowledge the limits of our understanding and the risks of oversimplification. Biomimicry is a powerful tool, but it's not a magic bullet. We can learn a lot from nature, but we also need to be humble about what we don't know and cautious about what we try to extract from it.

---

## Further reading

- _Biomimicry: Innovation Inspired by Nature_ — Janine M. Benyus, 1997. The book that coined the term and sparked the field.

- The Biomimicry Institute — [biomimicry.org](http://biomimicry.org). The leading non-profit in this space. Their website and blog catalogue hundreds of real-world examples and host the AskNature database, which organises nature's strategies by function. [https://biomimicry.org](https://biomimicry.org)

- "The Future of Innovation is Here: 8 Inventions from Nature's Laboratory" — _The Biomimicry Institute_. Covers manta ray-inspired aircraft, artificial photosynthesis, and other examples. [https://biomimicry.org/the-future-of-innovation-is-here-8-inventions-from-natures-laboratory/](https://biomimicry.org/the-future-of-innovation-is-here-8-inventions-from-natures-laboratory/)

- "Inspiration: Biomimicry is Designing Our Future with Nature's Help" — _Alliance for Sustainability_, July 2024. Covers slug-slime inspred adhesive tape a good overview of the field's potential. [https://afors.org/2024/07/24/inspiration-biomimicry-is-designing-our-future-with-natures-help/](https://afors.org/2024/07/24/inspiration-biomimicry-is-designing-our-future-with-natures-help/)

- "5 Biomimicry Innovations Reshaping Technology in 2025" — _Science Array_, October 2025. Covers recent developments including humpback whale-inspired wind turbines. [https://environment.sciencearray.com/biomimicry-innovations-reshaping-tech-2025](https://environment.sciencearray.com/biomimicry-innovations-reshaping-tech-2025)

- "Ten Biomimicry Breakthroughs from 2025" — _Learn Biomimicry_, 2025. Annual roundup from the Biomimicry Institute's Ray of Hope Accelerator programme, showcasing the most promising biomimicry startups. [https://www.learnbiomimicry.com/blog/biomimicry-examples-2025](https://www.learnbiomimicry.com/blog/biomimicry-examples-2025)

[^1]: "Moth wings are acoustic metamaterials" — Neil, T.R. et al., _Proceedings of the National Academy of Sciences (PNAS)_, November 2020. The peer-reviewed paper that formally established moth wings as a naturally occurring acoustic metamaterial. [https://www.pnas.org/doi/10.1073/pnas.2014531117](https://www.pnas.org/doi/10.1073/pnas.2014531117)

[^2]: "Moth wings as sound absorber metasurface" — Neil, T.R. et al., _Proceedings of the Royal Society A_, June 2022. The follow-up study testing moth wing scales on artificial surfaces. [https://royalsocietypublishing.org/doi/10.1098/rspa.2022.0046](https://royalsocietypublishing.org/doi/10.1098/rspa.2022.0046)

[^3]: "An Idea That Stuck: How George de Mestral Invented the Velcro Fastener" — _Velcro Companies Blog_, 2016. The company's own account of the Velcro origin story, with some historical detail. [https://www.velcro.com/news-and-blog/2016/11/an-idea-that-stuck-how-george-de-mestral-invented-the-velcro-fastener/](https://www.velcro.com/news-and-blog/2016/11/an-idea-that-stuck-how-george-de-mestral-invented-the-velcro-fastener/)

[^4]: "Kingfisher-inspired Shinkansen" — _BBC News_, 2019. Short video feature on the Shinkansen redesign and the Kingfisher inspiration behind it. [https://www.bbc.co.uk/news/av/science-environment-47673287](https://www.bbc.co.uk/news/av/science-environment-47673287)

[^5]: "Biomimicry: Top 5 Emblematic Technologies" — _Bioxegy_, 2024. An overview of the most famous biomimicry examples including Velcro, the lotus effect, and more. [https://en.bioxegy.com/post/biomimicry-top-5-iconic-technologies](https://en.bioxegy.com/post/biomimicry-top-5-iconic-technologies)

[^6]: "Your 2024 Guide to Mastering Genetic Algorithms" — _Number Analytics_, 2025. An explanation of how genetic algorithms work. [https://www.numberanalytics.com/blog/2024-guide-mastering-genetic-algorithms](https://www.numberanalytics.com/blog/2024-guide-mastering-genetic-algorithms)

[^7]: "Generative Design and Digital Manufacturing" — McClelland, R., _NASA Technical Reports Server_, 2022. The primary technical paper by the NASA engineer who pioneered the Evolved Structures programme. [https://ntrs.nasa.gov/citations/20220012523](https://ntrs.nasa.gov/citations/20220012523)

[^8]: "Small Steps, Giant Leaps, Episode 92: Evolved Structures" — _NASA Podcast_, 2022. An accessible audio interview with Ryan McClelland explaining the Evolved Structures process in plain language. [https://www.nasa.gov/podcasts/small-steps-giant-leaps/small-steps-giant-leaps-episode-92-evolved-structures/](https://www.nasa.gov/podcasts/small-steps-giant-leaps/small-steps-giant-leaps-episode-92-evolved-structures/)

[^9]: "NASA's Evolved Structures Fuel New Space Missions" — _Autodesk Design & Make_, 2023. An explanatory piece on how NASA is using generative design for missions including Mars Sample Return. [https://www.autodesk.com/design-make/articles/nasa-evolved-structures](https://www.autodesk.com/design-make/articles/nasa-evolved-structures)

[^10]: "NASA's New Generative AI-Designed Parts Look Like They're From an Alien Starship" — _Fast Company_, February 2023. The most readable account of the Evolved Structures story, including the quote about alien bones. [https://www.fastcompany.com/90851698/nasas-new-generative-ai-designed-parts-look-like-theyre-from-an-alien-starship](https://www.fastcompany.com/90851698/nasas-new-generative-ai-designed-parts-look-like-theyre-from-an-alien-starship)

[^11]: "Highly accurate protein structure prediction with AlphaFold" — Jumper, J. et al., _Nature_, August 2021. The landmark peer-reviewed paper on AlphaFold 2 — one of the most cited scientific papers of the decade. [https://www.nature.com/articles/s41586-021-03819-2](https://www.nature.com/articles/s41586-021-03819-2)

[^12]: "AlphaFold 3 predicts the structure and interactions of all of life's molecules" — _Google DeepMind Blog_, May 2024. The announcement of AlphaFold 3, explaining the leap from proteins to DNA, RNA, and drug molecules. [https://blog.google/innovation-and-ai/products/google-deepmind-isomorphic-alphafold-3-ai-model/](https://blog.google/innovation-and-ai/products/google-deepmind-isomorphic-alphafold-3-ai-model/)

[^13]: "From hype to hyphae: Learning from mycelium on what will (and won't) work" — Rovers, Ilse (C.A.), _Zygote Quarterly_, Issue 40. A fantastic article in itself about mycelium and its potential applications, as well as the challenges of the research. [https://zqjournal.org/editions/zq40.html](https://zqjournal.org/editions/zq40.html)
