import React, { useEffect, useState } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'test-drive'
  });

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Reset form on open
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', interest: 'test-drive' });
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(onClose, 2500);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/40 backdrop-blur-xl transition-all duration-500"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors z-20 text-gray-400 hover:text-dark"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-10">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-8">
                <span className="text-accent font-bold text-[10px] uppercase tracking-[0.2em] mb-3 block">Get in touch</span>
                <h3 className="text-3xl font-display font-bold text-dark leading-none">
                  Your Journey <br/> Starts Here
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Interest Toggle */}
                <div className="bg-card p-1.5 rounded-full flex mb-6">
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, interest: 'test-drive'})}
                    className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                      formData.interest === 'test-drive' 
                        ? 'bg-dark text-white shadow-md' 
                        : 'text-muted hover:text-dark'
                    }`}
                  >
                    Test Drive
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, interest: 'inquiry'})}
                    className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                      formData.interest === 'inquiry' 
                        ? 'bg-dark text-white shadow-md' 
                        : 'text-muted hover:text-dark'
                    }`}
                  >
                    Inquiry
                  </button>
                </div>

                <div className="space-y-3">
                  <input 
                    type="text" 
                    required
                    className="w-full bg-card border-none focus:ring-2 focus:ring-accent/20 rounded-2xl px-5 py-4 outline-none transition-all placeholder:text-gray-400 font-medium text-dark text-sm"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                  
                  <input 
                    type="email" 
                    required
                    className="w-full bg-card border-none focus:ring-2 focus:ring-accent/20 rounded-2xl px-5 py-4 outline-none transition-all placeholder:text-gray-400 font-medium text-dark text-sm"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />

                  <input 
                    type="tel" 
                    required
                    className="w-full bg-card border-none focus:ring-2 focus:ring-accent/20 rounded-2xl px-5 py-4 outline-none transition-all placeholder:text-gray-400 font-medium text-dark text-sm"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-accent text-dark font-bold text-sm uppercase tracking-wide py-4 rounded-full hover:bg-accent-deep transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-6 shadow-lg shadow-accent/20"
                >
                  Confirm Request
                </button>
                
              </form>
            </>
          ) : (
            <div className="py-12 flex flex-col items-center text-center animate-in fade-in duration-500">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-dark mb-2">Request Sent</h3>
              <p className="text-muted text-sm max-w-[200px] mx-auto leading-relaxed">
                We'll be in touch shortly to confirm your {formData.interest === 'test-drive' ? 'test drive' : 'inquiry'}.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};