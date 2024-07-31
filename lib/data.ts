import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  discord,
  twitter,
  instagram,
  telegram,
  facebook,
} from "@/lib/assets";

export const navLinks = [
  {
    id: "0",
    title: "Browse",
    url: "#browse",
  },
  {
    id: "1",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "2",
    title: "FAQ",
    url: "#faq",
  },
  {
    id: "3",
    title: "Start",
    url: "#start",
  },
] as const;

export const projects = [
  {
    id: "1",
    title: "Enchanted Night",
    description:
      "Step into a world of wonder where a serene frog meditates on a lily pad under a starry night. This image captures the magic and tranquility that can inspire your next creative project, whether it be a calming painting or a meditative story.",
    imageProps: {
      width: 300,
      height: 300,
      alt: "Enchanted Night",
      url: img1,
    },
    className: "w-5/12",
    vertical: false,
    ordered: true,
  },
  {
    id: "2",
    title: "Cozy Camping",
    description:
      "Immerse yourself in the warmth of a cozy tent set against a backdrop of twinkling stars. This image evokes a sense of adventure and comfort, perfect for inspiring tales of camping under the stars or cozy, heartwarming artwork.",
    imageProps: {
      width: 400,
      height: 300,
      alt: "Cozy Camping",
      url: img2,
    },
    className: "w-3/12",
    vertical: true,
    ordered: false,
  },
  {
    id: "3",
    title: "Dragon's Keep",
    description:
      "Discover the allure of a tranquil oasis guarded by a mystical dragon. This image inspires tales of hidden paradises, magical creatures, and peaceful retreats that ignite the imagination and transport you to another world.",
    imageProps: {
      width: 280,
      height: 250,
      alt: "Dragon's Keep",
      url: img3,
    },
    className: "w-4/12",
    vertical: true,
    ordered: false,
  },
  {
    id: "4",
    title: "Musical Panda",
    description:
      "Delight in the whimsical scene of a panda playing piano in a bamboo forest. Let this charming image inspire your musical compositions, stories, or illustrations that bring a touch of magic and joy to the natural world.",
    imageProps: {
      width: 300,
      height: 300,
      alt: "Musical Panda",
      url: img4,
    },
    className: "flex-col items-center md:flex-row",
    vertical: false,
    ordered: true,
  },
  {
    id: "5",
    title: "Mountain Sunrise",
    description:
      "Bask in the serene beauty of a mountain sunrise. This breathtaking landscape is ideal for capturing the essence of tranquility and inspiration in your creative endeavors.",
    imageProps: {
      width: 300,
      height: 300,
      alt: "Mountain Sunrise",
      url: img5,
    },
    className: "",
    vertical: false,
    ordered: false,
  },
  {
    id: "6",
    title: "Volcanic Wilderness",
    description:
      "Explore the surreal and vibrant world of volcanic landscapes. This dynamic and colorful scene can ignite your imagination for adventurous stories and vivid paintings.",
    imageProps: {
      width: 300,
      height: 300,
      alt: "Volcanic Wilderness",
      url: img6,
    },
    className: "",
    vertical: true,
    ordered: true,
  },
  {
    id: "7",
    title: "Tiny Dragon in Bloom",
    description:
      "Discover the enchanting scene of a tiny dragon perched on a blooming vase. Perfect for inspiring whimsical tales and detailed illustrations.",
    imageProps: {
      width: 300,
      height: 300,
      alt: "Tiny Dragon in Bloom",
      url: img7,
    },
    className: "",
    vertical: true,
    ordered: false,
  },
  {
    id: "8",
    title: "Moonlit Village",
    description:
      "Wander through a quaint village illuminated by the soft glow of the moon. This image captures the serene beauty of nighttime, inspiring stories of quiet village life, nighttime adventures, or the enchantment of a moonlit world.",
    imageProps: {
      width: 300,
      height: 300,
      alt: "Moonlit Village",
      url: img8,
    },
    className: "",
    vertical: true,
    ordered: true,
  },
  {
    id: "9",
    title: "Teacup Haven",
    description:
      "Dive into a miniature world inside a teacup. This imaginative and detailed scene is perfect for sparking your creativity in storytelling and artistic endeavors.",
    imageProps: {
      width: 300,
      height: 300,
      alt: "Teacup Haven",
      url: img9,
    },
    className: "",
    vertical: true,
    ordered: false,
  },
  {
    id: "10",
    title: "Serpent's Lagoon",
    description:
      "Unveil the secrets of a mythical serpent resting in a tranquil lagoon. This mystical scene is ideal for inspiring fantastical stories and artworks.",
    imageProps: {
      width: 400,
      height: 300,
      alt: "Serpent's Lagoon",
      url: img10,
    },
    className: "",
    vertical: true,
    ordered: true,
  },
  {
    id: "11",
    title: "Traditional Harmony",
    description:
      "Step into a peaceful Japanese garden where tradition and nature harmonize. This image inspires reflections on serenity, the beauty of cultural heritage, and stories of samurai honor and tranquility amidst nature.",
    imageProps: {
      width: 400,
      height: 300,
      alt: "Traditional Harmony",
      url: img11,
    },
    className: "",
    vertical: true,
    ordered: false,
  },
  {
    id: "12",
    title: "Starry Night Pond",
    description:
      "Float into the peaceful ambiance of a starry night pond. This magical scene is perfect for evoking calm and creativity in your writing and art.",
    imageProps: {
      width: 400,
      height: 300,
      alt: "Starry Night Pond",
      url: img12,
    },
    className: "",
    vertical: true,
    ordered: true,
  },
  {
    id: "13",
    title: "Urban Elegance",
    description:
      "Feel the thrill of a sleek, purple sports car cruising through a vibrant, neon-lit city at night. This image evokes a sense of excitement, adventure, and the allure of urban nightlife, perfect for stories of high-speed chases or stylish city scenes.",
    imageProps: {
      width: 400,
      height: 300,
      alt: "Urban Elegance",
      url: img13,
    },
    className: "mt-2",
    vertical: false,
    ordered: true,
  },
] as const;

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discord,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
] as const;
