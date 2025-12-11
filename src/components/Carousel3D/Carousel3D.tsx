import React, { useEffect, useRef, useState } from "react";
import { Code, Bug, BookOpen, Atom, GitBranch, Rocket, Clock, MapPin } from "lucide-react";
import "./carousel.css";

const CARDS = [
	{
		id: 1,
		date: "LANGUAGE: Python",
		title: "First Line of Code",
		icon: <Code size={48} />,
		preview: "The terminal glowed, displaying my first 'Hello, World!'...",
		content: "I remember the thrill of typing my first 'Hello, World!' in Python. It was simple, yet it opened a portal to endless possibilities. The interpreter executed the command flawlessly.",
		location: "console: ~",
		time: "09:00:00"
	},
	{
		id: 2,
		date: "FRAMEWORK: ReactJS",
		title: "Debugging the Matrix",
		icon: <Bug size={48} />,
		preview: "The error messages multiplied, haunting my console...",
		content: "Debugging a complex ReactJS component felt like navigating a vast, interconnected matrix. Each fix unveiled new issues. They say my code is destabilizing the build with each change.",
		location: "localhost:3000",
		time: "14:30:15"
	},
	{
		id: 3,
		date: "CONCEPT: Algorithms",
		title: "The Algorithm Library",
		icon: <BookOpen size={48} />,
		preview: "Endless tomes of sorting, searching, and optimization...",
		content: "Endless shelves containing every possible solution. I found my own data structures there—pages still being written as I coded. The Librarian told me I was never supposed to reinvent the wheel.",
		location: "Stack Overflow",
		time: "11:05:40"
	},
	{
		id: 4,
		date: "PARADIGM: Abstraction",
		title: "The Abstract Void",
		icon: <Atom size={48} />,
		preview: "Nothing concrete exists here, yet I feel the underlying logic...",
		content: "The Abstract Void is the space between concrete implementations, a quantum foam of design patterns. I stayed too long designing and began to dissolve into pure theory.",
		location: "design patterns.md",
		time: "--:--:--"
	},
	{
		id: 5,
		date: "TOOL: Git",
		title: "Version Control Mirror",
		icon: <GitBranch size={48} />,
		preview: "I saw my code, but not as it is now; multiple branches...",
		content: "The mirror of Git showed all my possible branches across different commits. Some were stable, some were experimental. All were my work. The reflection spoke: 'You're fracturing the codebase.'",
		location: "github.com/repo",
		time: "18:55:20"
	},
	{
		id: 6,
		date: "PROCESS: Deployment",
		title: "The Deployment Dream",
		icon: <Rocket size={48} />,
		preview: "I'm trying to send it live, but which environment is real?",
		content: "Every server feels familiar yet subtly different. The boundaries between staging and production are thinning. Sometimes I see through the logs of other instances.",
		location: "cloud-server:port",
		time: "NOW"
	}
];

export const Carousel3D = () => {
	const carouselRef = useRef<HTMLDivElement>(null);
	const [radius, setRadius] = useState(400);
	const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
	const [selectedIndex, setSelectedIndex] = useState(0);

	// Swipe State
	const touchStartX = useRef(0);
	const touchEndX = useRef(0);
	const minSwipeDistance = 50; // Minimum distance to trigger a swipe

	useEffect(() => {
		const handleResize = () => {
			setRadius(window.innerWidth <= 768 ? 250 : 400);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Update rotation when selectedIndex changes
	useEffect(() => {
		if (carouselRef.current) {
			const angle = 360 / CARDS.length;
			const theta = selectedIndex * -angle;
			carouselRef.current.style.transform = `rotateY(${theta}deg)`;
		}
	}, [selectedIndex]);

	// --- Swipe Handlers ---
	const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
		touchEndX.current = 0; // Reset end position
		if ('touches' in e) {
			touchStartX.current = e.targetTouches[0].clientX;
		} else {
			touchStartX.current = (e as React.MouseEvent).clientX;
		}
	};

	const onTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
		if ('touches' in e) {
			touchEndX.current = e.targetTouches[0].clientX;
		} else {
			touchEndX.current = (e as React.MouseEvent).clientX;
		}
	};

	const onTouchEnd = () => {
		if (!touchStartX.current || !touchEndX.current) return;

		const distance = touchStartX.current - touchEndX.current;
		const isLeftSwipe = distance > minSwipeDistance;
		const isRightSwipe = distance < -minSwipeDistance;

		if (isLeftSwipe) {
			setSelectedIndex(prev => prev + 1); // Next Card
		}
		if (isRightSwipe) {
			setSelectedIndex(prev => prev - 1); // Previous Card
		}
	};

	const toggleFlip = (index: number) => {
		setFlippedIndices(prev =>
			prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
		);
	};

	return (
		<div
			className="carousel-root relative w-full overflow-visible bg-transparent py-20"
			onTouchStart={onTouchStart}
			onTouchMove={onTouchMove}
			onTouchEnd={onTouchEnd}
			onMouseDown={onTouchStart}
			onMouseMove={onTouchMove}
			onMouseUp={onTouchEnd}
			style={{ cursor: 'grab' }}
		>
			<div className="carousel-scene">
				<div className="carousel-container">
					<div
						ref={carouselRef}
						className="carousel-track"
						style={{ transition: "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)" }} // Smooth snap transition
					>
						{CARDS.map((card, index) => {
							const angle = (360 / CARDS.length) * index;
							const transformStyle = `rotateY(${angle}deg) translateZ(${radius}px)`;

							return (
								<div
									key={card.id}
									className={`memory-card ${flippedIndices.includes(index) ? 'flipped' : ''}`}
									style={{ transform: transformStyle }}
									onClick={() => toggleFlip(index)}
								>
									<div className="card-inner">
										{/* Front */}
										<div className="card-front">
											<div className="memory-date">{card.date}</div>
											<h3>
												{card.title}
											</h3>
											<div className="memory-image">
												{card.icon}
												<div className="glitch-effect"></div>
											</div>
											<p className="memory-preview">{card.preview}</p>
										</div>

										{/* Back */}
										<div className="card-back">
											<h3>{card.title}</h3>
											<p>{card.content}</p>
											<div className="memory-coordinates">
												<span className="flex items-center gap-2">
													<MapPin size={12} /> {card.location}
												</span>
												<span className="flex items-center gap-2 text-[var(--accent)]">
													<Clock size={12} /> {card.time}
												</span>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};