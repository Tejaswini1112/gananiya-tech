
import React from 'react';
import { Car, Building2, Truck, Building, Factory, MonitorSmartphone } from 'lucide-react';

const IndustryIcon = ({ 
  type, 
  color 
}: { 
  type: 'transportation' | 'healthcare' | 'logistics' | 'real-estate' | 'manufacturing' | 'it',
  color: string 
}) => {
  const iconMap = {
    'transportation': Car,
    'healthcare': Building2,
    'logistics': Truck,
    'real-estate': Building,
    'manufacturing': Factory,
    'it': MonitorSmartphone
  };

  const Icon = iconMap[type];
  return <Icon className={`w-12 h-12 ${color}`} />;
};

const TechStack3D = () => {
  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 p-8">
        <div className="flex flex-col items-center space-y-4 animate-fade-in">
          <IndustryIcon type="it" color="text-purple-400" />
          <span className="text-purple-400">IT</span>
        </div>
        <div className="flex flex-col items-center space-y-4 animate-fade-in [animation-delay:100ms]">
          <IndustryIcon type="transportation" color="text-blue-400" />
          <span className="text-blue-400">Transportation</span>
        </div>
        <div className="flex flex-col items-center space-y-4 animate-fade-in [animation-delay:200ms]">
          <IndustryIcon type="healthcare" color="text-indigo-400" />
          <span className="text-indigo-400">Healthcare</span>
        </div>
        <div className="flex flex-col items-center space-y-4 animate-fade-in [animation-delay:400ms]">
          <IndustryIcon type="logistics" color="text-purple-400" />
          <span className="text-purple-400">Logistics</span>
        </div>
        <div className="flex flex-col items-center space-y-4 animate-fade-in [animation-delay:600ms]">
          <IndustryIcon type="real-estate" color="text-blue-400" />
          <span className="text-blue-400">Real Estate</span>
        </div>
        <div className="flex flex-col items-center space-y-4 animate-fade-in [animation-delay:800ms]">
          <IndustryIcon type="manufacturing" color="text-indigo-400" />
          <span className="text-indigo-400">Manufacturing</span>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-white mt-8 animate-fade-in [animation-delay:1000ms]">
        Industries
      </h2>
    </div>
  );
};

export default TechStack3D;
