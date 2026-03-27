import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <Hero />

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">What We Offer</h2>
          <p className="text-gray-600">Three reasons to join the Echo Club</p>
        </div>

        {/* Reusable Card used 3 times */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            emoji="🌟"
            title="Weekly Meetups"
            description="Live discussions, workshops, and networking every Tuesday."
            buttonText="Join Next Event"
          />
          <Card 
            emoji="🌟"
            title="Creative Challenges"
            description="Monthly creative briefs that push your limits and spark ideas."
            buttonText="See Challenges"
          />
          <Card 
            emoji="🌟"
            title="Private Community"
            description="A safe space to share ideas, get feedback, and grow together."
            buttonText="Enter the Circle"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;