const quizQuestionsData = [
    {
      answers: [
        {
          help_text: "I’d like to start with something approachable and easy to love.",
          id: 60,
          slug: "i-m-pretty-new-to-all-of-this",
          text: "I’m pretty new to all of this"
        },
        {
          help_text: "I buy CBD from the tobacco stores and I know a little about CBD",
          id: 61,
          slug: "i-m-at-an-intermediate-stage",
          text: "I’m at an intermediate stage"
        },
        {
          help_text: "I buy premium CBD from weed associations and I know the difference between different strains.",
          id: 62,
          slug: "i-m-pretty-advanced",
          text: "I’m pretty advanced"
        },
        {
          help_text: "I love learning about all the strain family trees and how different terpenes affect us and the taste.",
          id: 63,
          slug: "i-m-a-total-coffee-nerd",
          text: "I’m a total CBD nerd"
        }
      ],
      educational_content: [
        {
          text: "Great CBD is a (delicious) journey and we want to make suggestions that are best suited to wherever you are on yours. We ask for your experience level first because your following answers can be interpreted very differently depending on how you identify.",
          title: "Why It Matters"
        }
      ],
      id: 1,
      order: 0,
      slug: "experience-level",
      text: "What is your CBD experience level?"
    },
    {
      answers: [
        {
          help_text: null,
          id: 70,
          slug: "weed-switch",
          text: "Switching From Traditional Weed"
        },
        {
          help_text: null,
          id: 71,
          slug: "insomnia",
          text: "Insomnia / Better Sleep"
        },
        {
          help_text: null,
          id: 72,
          slug: "muscle-pain",
          text: "Muscle Pain"
        },
        {
          help_text: null,
          id: 73,
          slug: "anxiety",
          text: "Anxiety"
        },
        {
          help_text: null,
          id: 74,
          slug: "appetite",
          text: "Appetite"
        },
        {
          help_text: null,
          id: 75,
          slug: "just-trying",
          text: "Just Trying"
        }
      ],
      educational_content: [
        {
          text: "Certain coffee-making methods are especially good for certain coffees. We start with this question to make sure the coffee we recommend will taste great with your current coffee routine.",
          title: "Why it matters"
        },
        {
          text: "If you use refillable pods that work with ground coffee, we can set you up with a great match for your taste preferences. If you only buy prepackaged pods, please keep in mind that none of our roasters offer their coffee this way. If you’re ready to give freshly roasted coffee a try, contact us to chat with a member of our ground support team and find out the best way to switch today.",
          title: "Do you use Keurig, Nespresso, or other types of pods?"
        }
      ],
      id: 2,
      order: 1,
      slug: "brew-method",
      text: "What do you use CBD for?"
    },
    {
      answers: [
        {
          help_text: null,
          id: 80,
          slug: "rolled",
          text: "Rolled"
        },
        {
          help_text: null,
          id: 81,
          slug: "rolled-with-tobacoo",
          text: "Rolled With Tabacco"
        },
        {
          help_text: null,
          id: 82,
          slug: "bong",
          text: "Bong"
        },
        {
          help_text: null,
          id: 83,
          slug: "pipe",
          text: "Pipe"
        },
        {
          help_text: null,
          id: 84,
          slug: "volcano",
          text: "Volcano"
        },
        {
          help_text: null,
          id: 85,
          slug: "a-mix-of-these-choices",
          text: "A mix of these choices"
        },
      ],
      educational_content: [
        {
          text: "Some coffees can be enhanced by milk, but others may react negatively and result in an unpleasant taste. A little sugar, sweetener or added flavorings can bring out the natural sweetness of some coffees, but overpower others. We’ll recommend coffee that works best with what you like.",
          title: "Why it matters"
        }
      ],
      id: 3,
      order: 2,
      slug: "cbd-method",
      text: "How do you consume your CBD?"
    },
    {
      answers: [
        {
          help_text: "Less than 15% CBD. Recommended if you need to focus and be active",
          id: 90,
          slug: "less-15",
          text: "Low Potency"
        },
        {
          help_text: "Between 15% and 20% CBD.",
          id: 91,
          slug: "between-15-and-20",
          text: "Medium Potency"
        },
        {
          help_text: "More than 20% CBD. Good for sleeping purposes or relaxation.",
          id: 92,
          slug: "more-20",
          text: "High Potency"
        },
        {
          help_text: null,
          id: 93,
          slug: "i-defer-to-you-potency-level",
          text: "I defer to you"
        }
      ],
      educational_content: [
        {
          text: "Some coffees can be enhanced by milk, but others may react negatively and result in an unpleasant taste. A little sugar, sweetener or added flavorings can bring out the natural sweetness of some coffees, but overpower others. We’ll recommend coffee that works best with what you like.",
          title: "Why it matters"
        }
      ],
      id: 4,
      order: 3,
      slug: "potency-level",
      text: "What potency do you typically enjoy?"
    },
    {
      answers: [
        {
          help_text: null,
          id: 100,
          slug: "classic-and-traditional",
          text: "Floral"
        },
        {
          help_text: null,
          id: 101,
          slug: "hints-of-something-different",
          text: "Citric"
        },
        {
          help_text: null,
          id: 102,
          slug: "surprising-and-unconventional",
          text: "Earthy"
        },
        {
          help_text: null,
          id: 102,
          slug: "surprising-and-unconventional",
          text: "Fruity"
        },
        {
          help_text: null,
          id: 103,
          slug: "i-defer-to-you-taste",
          text: "I like tasting different flavours"
        },
        {
          help_text: "We’ll make a pick based on your other responses",
          id: 104,
          slug: "i-defer-to-you-taste",
          text: "I defer to you"
        },
      ],
      educational_content: [
        {
          text: "<p>Taste is a subjective thing. And while none of the coffees on Trade contain any added flavors or ingredients (just 100% coffee!) they can taste totally different based on where they’re from, how they’re processed and how they’re roasted. </p>\n\n<p><strong>Classic coffees</strong> are all about the familiar, nostalgic idea of coffee — only better! These coffees are balanced, rich and easy to drink. </p>\n\n<p><strong>Coffees with a hint of something different</strong> still deliver that great, tr...",
          title: "Let’s talk about taste"
        }
      ],
      id: 5,
      order: 4,
      slug: "taste",
      text: "How do you like your CBD to taste?"
    }
    // {
    //   answers: [
    //     {
    //       help_text: null,
    //       id: 110,
    //       slug: "regular",
    //       text: "Regular",
    //     },
    //     {
    //       help_text: null,
    //       id: 111,
    //       slug: "regular",
    //       text: "Premium",
    //     },
    //   ],
    //   educational_content: [
    //     {
    //       text: "r",
    //       title: "Let’s talk about taste"
    //     }
    //   ],
    //   id: 6,
    //   order: 5,
    //   slug: "quality",
    //   text: "What CBD quality do you regularly buy?"
    // }
  ]
export default quizQuestionsData