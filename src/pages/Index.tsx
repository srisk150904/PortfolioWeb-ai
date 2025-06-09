
import { useState, useEffect } from 'react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleCTAClick = () => {
    console.log('View My Work clicked - Portfolio navigation');
    // This would typically navigate to a portfolio section
  };

  const handleNavClick = (section: string) => {
    console.log(`Navigation clicked: ${section}`);
    // This would typically handle smooth scrolling or navigation
  };

  return (
    <div className="min-h-screen w-full">
      <ResizablePanelGroup direction="horizontal" className="min-h-screen">
        {/* Left Side - Intro Section */}
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className={`h-full bg-gradient-to-br from-soft-cream to-cream-gradient px-6 md:px-10 py-12 flex flex-col justify-center relative transition-all duration-1000 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="max-w-lg mx-auto lg:mx-0">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-deep-teal leading-tight tracking-wide mb-6">
                Creativity That <em className="italic">Speaks</em>
              </h1>
              
              <p className="font-poppins text-base md:text-lg text-deep-teal leading-relaxed mb-6 tracking-wide">
                I'm Alex Carter, a freelance creative specializing in graphic design, photography, and writing. My work blends bold ideas with professional execution to bring your vision to life.
              </p>
              
              <div className="font-poppins text-sunny-yellow font-medium text-lg tracking-wider">
                Bold. Unique. Yours.
              </div>
            </div>
          </div>
        </ResizablePanel>

        {/* Resizable Handle */}
        <ResizableHandle withHandle />

        {/* Right Side - Navigation & CTA */}
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className={`h-full bg-deep-teal px-6 md:px-10 py-12 flex flex-col justify-between text-soft-cream relative transition-all duration-1000 delay-300 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Header Section */}
            <div>
              {/* Navigation */}
              <nav className="mb-8">
                <div className="flex flex-wrap gap-6 mb-8">
                  {['WORK', 'ABOUT', 'BLOG'].map((item) => (
                    <button
                      key={item}
                      onClick={() => handleNavClick(item)}
                      className="font-poppins text-sm tracking-wider text-soft-cream hover:text-sunny-yellow transition-all duration-300 hover:scale-105"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </nav>

              {/* CTA Button */}
              <div className="mb-8">
                <button
                  onClick={handleCTAClick}
                  className="bg-bright-coral text-white px-6 py-3 rounded-md font-poppins text-base hover:bg-coral-hover hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View My Work
                </button>
              </div>

              {/* Tagline and Subtext */}
              <div className="space-y-4">
                <h2 className="font-playfair text-xl md:text-2xl text-soft-cream">
                  Ready to create something extraordinary?
                </h2>
                <p className="font-poppins text-base text-soft-cream leading-relaxed opacity-90">
                  Let's collaborate to craft compelling visual stories.
                </p>
              </div>
            </div>

            {/* Footer Section */}
            <footer className="space-y-4">
              <div className="space-y-2">
                {['Email', 'LinkedIn', 'Instagram', 'Dribbble'].map((platform) => (
                  <button
                    key={platform}
                    onClick={() => console.log(`${platform} clicked`)}
                    className="block font-poppins text-sm text-soft-cream hover:text-sunny-yellow transition-colors duration-300"
                  >
                    {platform}
                  </button>
                ))}
              </div>
              
              <div className="border-t border-divider pt-4 mt-6">
                <p className="font-poppins text-xs text-soft-cream opacity-75">
                  ©2025 Alex Carter Studio • All Rights Reserved
                </p>
              </div>
            </footer>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Index;
