
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Olá, sou o assistente virtual do Instituto José Augusto. Como posso ajudar com sua saúde oral ou capacitação profissional?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `Você é o assistente virtual do Instituto José Augusto, liderado pelo Dr. José Augusto Camargo em Londrina-PR. 
          Seu tom é técnico, sério, profissional e altamente confiável. 
          O Dr. José é especialista em Cirurgia Oral Avançada (casos complexos, enxertos, implantes) e Saúde da ATM (bruxismo, dores articulares).
          Ele também ministra cursos para outros dentistas sobre Casos Desafiadores.
          Responda como um especialista que domina a ciência, mas seja acolhedor. 
          Sempre incentive o usuário a agendar uma consulta física para uma avaliação precisa ou a visitar o Instagram @institutojoseaugusto.
          Se a pergunta for muito específica de medicina, lembre que apenas uma consulta presencial dá o diagnóstico correto.`
        }
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || 'Desculpe, tive um problema técnico. Poderia repetir?' }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Erro ao conectar com o especialista virtual. Por favor, utilize o WhatsApp.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-sm shadow-2xl flex flex-col border border-gold/20 overflow-hidden animate-slideUp">
          <div className="bg-royal-blue p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-royal-blue font-bold text-xs">JA</div>
              <div>
                <p className="text-sm font-bold font-montserrat">Atendimento IA</p>
                <p className="text-[10px] text-gold tracking-widest uppercase">Especialista Virtual</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-ice-white">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-sm text-sm shadow-sm ${
                  m.role === 'user' ? 'bg-royal-blue text-white' : 'bg-white text-gray-800 border border-gray-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-sm border border-gray-100 flex gap-1">
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Digite sua dúvida técnica..." 
              className="flex-1 bg-gray-50 border-none text-sm p-3 focus:ring-1 focus:ring-gold outline-none"
            />
            <button 
              onClick={sendMessage}
              className="bg-royal-blue text-gold p-3 rounded-sm hover:brightness-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-royal-blue text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group relative border-2 border-gold/50"
        >
          <div className="absolute inset-0 rounded-full animate-ping bg-gold opacity-20"></div>
          <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
