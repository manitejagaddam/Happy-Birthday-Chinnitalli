import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const LetterSection = () => {
	const [displayedText, setDisplayedText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [typingStarted, setTypingStarted] = useState(false); // 👈 flag to start typing

	const letter = `అమ్మా 🤗  

నువ్వే మా మొదటి 👩‍🏫 టీచర్, మా 💪 బలం, మా ప్రేరణ ✨.  
నిన్ను చూసి మేము ఇద్దరం చాలా inspire అయ్యాం ❤️.  

నీ ప్రేమ 💖, నీ care 🤲 మా జీవితంలోనే పెద్ద gift 🎁.  
నీ స్థానాన్ని ఎవరూ ఎన్నటికీ తీసుకోలేరు … నువ్వే మా ప్రపంచం 🌍.  

మా నవ్వులు 😂, మా ధైర్యం 💪, మా కలలు 🌟 — ఇవన్నీ నువ్వే ఇచ్చినవే 🙏.  
నీతో ఉండటం మా జీవితంలో అతిపెద్ద ఆశీర్వాదం 🙏💖.  

అమ్మా, నువ్వే మా 👑 క్వీన్ 👸, మా సర్వస్వం 💕.  
నువ్వు లేకపోతే మేము మేము కాదు 🙏.  
నువ్వే మా ప్రపంచం 🌍, మా ప్రేమ ❤️, మా ఆనందం ✨.  

ఈ రోజు నీ birthday 🎂 కాబట్టి ఒక మాట —  
మేము ఇద్దరం నిన్ను చాలా చాలా ప్రేమిస్తున్నాం అమ్మా ❤️😍  
నువ్వే మా hero 👑✨  

హ్యాపీ బర్త్‌డే అమ్మా 🎂🥳💖  

-- ప్రేమతో మీ పిల్లలు 💕  
   నాగవైష్ణవి & మణితేజ  
`;

	// 👇 Ref to track when the letter block is in view
	const sectionRef = React.useRef(null);
	const isInView = useInView(sectionRef, { once: true }); // triggers only once

	// 👇 Start typing only when section is in view
	useEffect(() => {
		if (isInView && !typingStarted) {
			setTypingStarted(true);
		}
	}, [isInView, typingStarted]);

	// 👇 Typing effect (runs only if typingStarted = true)
	useEffect(() => {
		if (typingStarted && currentIndex < letter.length) {
			const timer = setTimeout(() => {
				setDisplayedText(letter.slice(0, currentIndex + 1));
				setCurrentIndex(currentIndex + 1);
			}, 50);

			return () => clearTimeout(timer);
		}
	}, [currentIndex, typingStarted, letter]);

	return (
		<section
			ref={sectionRef}
			className="min-h-screen py-20 relative overflow-hidden"
		>
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 via-purple-200/30 to-yellow-200/30" />

			{/* Sparkles + existing code remains the same... */}

			<div className="container mx-auto px-4 relative z-10">
				{/* Heading */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
						A Letter From My Heart 💌
					</h2>
					<div className="flex justify-center gap-2 text-2xl">
						<Heart className="w-8 h-8 text-red-400 fill-current animate-pulse" />
						<Heart className="w-6 h-6 text-pink-400 fill-current animate-pulse" />
						<Heart className="w-8 h-8 text-red-400 fill-current animate-pulse" />
					</div>
				</motion.div>

				{/* Letter */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="max-w-4xl mx-auto"
				>
					<div className="backdrop-blur-lg bg-white/90 rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 relative overflow-hidden">
						<div className="relative z-10">
							<div className="text-gray-800 text-lg leading-relaxed font-serif">
								<motion.div
									className="whitespace-pre-line"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.5 }}
								>
									{displayedText}
									{typingStarted && (
										<motion.span
											className="inline-block w-0.5 h-6 bg-pink-500 ml-1"
											animate={{ opacity: [1, 0, 1] }}
											transition={{
												duration: 1,
												repeat: Infinity,
												repeatType: "reverse",
											}}
										/>
									)}
								</motion.div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default LetterSection;
