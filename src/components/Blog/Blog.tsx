import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Sophia Martinez",
    text: "Meeting the pet sitter in advance gave me so much peace of mind. The updates and photos I receive every day make me feel connected to my dog, even when I’m away.",
    avatar: "/dog-icon3.png", // Reemplaza con la ruta correcta de la imagen
    bgColor: "bg-green-400",
  },
  {
    name: "Ethan Chen",
    text: "The daily check-ins about my dog's behavior and activities are so reassuring. I can tell they really care, and I appreciate the professionalism of the whole team.",
    avatar: "/dog-icon2.png",
    bgColor: "bg-purple-500",
  },
  {
    name: "Amelia Lopez",
    text: "Having a trusted walker for my dog has been a game-changer. I love getting little updates every day, and it’s clear my dog feels comfortable with them.",
    avatar: "/dog-icon.png",
    bgColor: "bg-yellow-500",
  },
  {
    name: "Liam Patel",
    text: "The team is fantastic! I’m always informed about my pet's activities, and knowing that they’re in good hands brings me such relief.",
    avatar: "/dog-icon2.png",
    bgColor: "bg-blue-400",
  },
  {
    name: "Emma Thompson",
    text: "I was a bit nervous at first, but the daily updates and attention to detail really set my mind at ease. My dog seems so happy and well-cared for.",
    avatar: "/dog-icon3.png",
    bgColor: "bg-orange-500",
  },
];

export default function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div
      id="blog-section"
      className="flex flex-col items-center text-center py-12 bg-gray-50"
    >
      <h2 className="text-3xl font-bold text-red-500 mb-8">
        Here's what pet owners have to say about Fetch! Pet Care...
      </h2>

      <div className="relative w-full max-w-3xl flex items-center justify-center">
        {/* Botón de Anterior */}
        <button
          onClick={handlePrev}
          className="absolute left-0 transform -translate-x-1/2 bg-red-400 text-white p-4 rounded-full shadow-lg"
        >
          &lt;
        </button>

        {/* Tarjeta de Testimonio */}
        <div
          className={`transition-all duration-500 transform ${testimonials[currentIndex].bgColor} text-white p-8 rounded-lg shadow-lg flex flex-col items-center w-80`}
        >
          <img
            src={testimonials[currentIndex].avatar}
            alt={testimonials[currentIndex].name}
            className="w-16 h-16 rounded-full mb-4"
          />
          <h3 className="text-lg font-bold">
            {testimonials[currentIndex].name}
          </h3>
          <p className="mt-4">{testimonials[currentIndex].text}</p>
        </div>

        {/* Botón de Siguiente */}
        <button
          onClick={handleNext}
          className="absolute right-0 transform translate-x-1/2 bg-red-400 text-white p-4 rounded-full shadow-lg"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
