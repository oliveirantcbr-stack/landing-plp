import { Testimonial } from "@/app/components/TestimonialsStack";
import { Star, ThumbsUp, Eye } from "lucide-react"; // Importe alguns ícones

export const testimonialsPLP: Testimonial[] = [
  {
    id: 1,
    initials: "M",
    name: "Marina Souza",
    role: "Social Media",
    quote: "Antes eu travava no design. Agora só copio, colo e personalizo. Consigo entregar páginas muito mais rápido.",
    tags: [{ text: "Criadora Digital", type: "featured" }],
    stats: [
      { icon: Star, text: "5/5" },
      { icon: ThumbsUp, text: "98%" },
      { icon: Eye, text: "2k+" }
    ],
    avatarGradient: "linear-gradient(135deg,#60a5fa,#3b82f6)",
  },
  {
    id: 2,
    initials: "R",
    name: "Rafael Lima",
    role: "Gestor de Tráfego",
    quote: "Os templates são profissionais e com foco total em conversão. O PLP elevou meu nível como gestor.",
    tags: [{ text: "Tráfego Pago", type: "default" }],
    stats: [
      { icon: Star, text: "5/5" },
      { icon: ThumbsUp, text: "95%" },
      { icon: Eye, text: "1.5k+" }
    ],
    avatarGradient: "linear-gradient(135deg,#f472b6,#ec4899)",
  },
  {
    id: 3,
    initials: "A",
    name: "Ana Paula",
    role: "Criadora de Conteúdo",
    quote: "O PLP economizou horas do meu dia. Consigo criar páginas bonitas sem depender de designers.",
    tags: [{ text: "Produtividade", type: "featured" }],
    stats: [
      { icon: Star, text: "5/5" },
      { icon: ThumbsUp, text: "97%" },
      { icon: Eye, text: "1.8k+" }
    ],
    avatarGradient: "linear-gradient(135deg,#4ade80,#16a34a)",
  },
  {
    id: 4,
    initials: "L",
    name: "Lucas Mendes",
    role: "Freelancer WordPress",
    quote: "Eu cobrava barato por medo do layout. Agora entrego páginas premium e aumentei meu ticket.",
    tags: [{ text: "Freelancer", type: "default" }],
    stats: [
      { icon: Star, text: "5/5" },
      { icon: ThumbsUp, text: "96%" },
      { icon: Eye, text: "1.2k+" }
    ],
    avatarGradient: "linear-gradient(135deg,#a78bfa,#7c3aed)",
  },
  {
    id: 5,
    initials: "J",
    name: "Juliana Rocha",
    role: "Copywriter",
    quote: "O PLP removeu o bloqueio visual do design. Hoje minhas páginas combinam copy forte com visual profissional.",
    tags: [{ text: "Copywriting", type: "featured" }],
    stats: [
      { icon: Star, text: "5/5" },
      { icon: ThumbsUp, text: "99%" },
      { icon: Eye, text: "2.5k+" }
    ],
    avatarGradient: "linear-gradient(135deg,#facc15,#eab308)",
  },
  {
    id: 6,
    initials: "C",
    name: "Caio Fernandes",
    role: "Afiliado Profissional",
    quote: "Meu tempo de criação caiu pela metade. O PLP me permitiu escalar campanhas muito mais rápido.",
    tags: [{ text: "Afiliado", type: "default" }],
    stats: [
      { icon: Star, text: "5/5" },
      { icon: ThumbsUp, text: "94%" },
      { icon: Eye, text: "3k+" }
    ],
    avatarGradient: "linear-gradient(135deg,#fb7185,#f43f5e)",
  },
];