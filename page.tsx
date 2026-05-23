"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Activity, Cpu, Battery, Shield, FileText, CheckCircle, 
  AlertTriangle, Phone, Mail, MapPin, Sliders, HardDrive, 
  Wrench, Eye, Download, Printer, ArrowRight, Star, 
  ChevronLeft, ChevronRight, Upload, Clock, Send, Gauge, 
  Layers, Radio, Zap, ShieldAlert, Disc, HelpCircle
} from "lucide-react";

export default function PremiumAtelierOlouwabe() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // États de contrôle de simulation de diagnostic et UI
  const [scanProgress, setScanProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(true);
  const [activeNetworkZone, setActiveNetworkZone] = useState("ALL");
  const [selectedDtc, setSelectedDtc] = useState("B1F4500");
  const [currentReview, setCurrentReview] = useState(0);
  const [uploadProgress, setUploadProgress] = useState({ photo: false, doc: false });

  // Statistiques animées simulées
  const [ecuCount, setEcuCount] = useState(0);
  const [voltage, setVoltage] = useState(11.4);

  useEffect(() => {
    if (ecuCount < 42) {
      const timer = setTimeout(() => setEcuCount(prev => prev + 1), 30);
      return () => clearTimeout(timer);
    }
  }, [ecuCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVoltage(prev => {
        const next = prev + (Math.random() * 0.2 - 0.1);
        return parseFloat(Math.min(12.2, Math.max(11.4, next)).toFixed(2));
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Progression du Scanner Central Infini
  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          setIsScanning(false);
          setTimeout(() => setIsScanning(true), 2500);
          return 0;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Liste des calculateurs de la topologie réseau Mercedes-Benz (Données réelles constructeur)
  const networkNodes = [
    { id: "ME-SFI", name: "Motor Electronics", status: "PASS", zone: "POWERTRAIN" },
    { id: "ETC", name: "Electronic Transmission Control", status: "PASS", zone: "POWERTRAIN" },
    { id: "ESP", name: "Electronic Stability Program", status: "PASS", zone: "CHASSIS" },
    { id: "SAMF", name: "Signal Acquisition Module Front", status: "FAIL", zone: "BODY" },
    { id: "SAMR", name: "Signal Acquisition Module Rear", status: "PASS", zone: "BODY" },
    { id: "EZS", name: "Electronic Ignition Switch", status: "PASS", zone: "BODY" },
    { id: "IC", name: "Instrument Cluster", status: "PASS", zone: "COCKPIT" },
    { id: "COMMAND", name: "Multimedia Head Unit", status: "PASS", zone: "COCKPIT" },
  ];

  const portfolioItems = [
    { title: "Recalibrage Complet Calculateur Moteur ME-SFI", category: "ECU Programming", before: "Bus CAN saturé (Timeout)", after: "Latence stable < 2ms", img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800", metric: "99.8% Efficacité" },
    { title: "Diagnostic Électronique Multiplexé Intelligent", category: "Mercedes GLC Classe", before: "Mode Dégradé Actif", after: "Zéro Défaut Résiduel", img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800", metric: "Topologie OK" },
    { title: "Restauration Module d'Acquisition de Signal SAM", category: "Hardware Alignment", before: "Résistance Batterie > 15 mΩ", after: "Résistance 4.2 mΩ Nominale", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800", metric: "14.2V Régulé" },
    { title: "Analyse des Cellules Haute Tension & SOH", category: "Battery Analytics", before: "SOH Critique à 54%", after: "SOH Restauré à 96%", img: "https://images.unsplash.com/photo-1558441719-ff34b0524a24?auto=format&fit=crop&q=80&w=800", metric: "Cell Balance OK" },
    { title: "Codage d'Injecteurs Piézo-Électriques", category: "Component Coding", before: "Correction Débit Hors Tolérance", after: "Équilibrage Cylindre Parfait", img: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=800", metric: "Zéro Misfire" },
    { title: "Synchronisation Système Antidémarrage EZS", category: "Immobilizer Sync", before: "Défaut d'autorisation de clé", after: "Clé Cryptée Validée", img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800", metric: "Auth Passé" },
    { title: "Analyse de Spectre de Fréquence Réseau LIN", category: "Bus Troubleshooting", before: "Bruit Électrique Majeur", after: "Signal Carré Filtré", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", metric: "LIN Bus stable" },
    { title: "Mise à jour Firmware Module de Sécurité AdBlue", category: "Flashing Service", before: "Compte à rebours blocage actif", after: "Firmware v6.35 Flashé", img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800", metric: "Lock Éliminé" }
  ];

  const testimonials = [
    { name: "Sébastien D.", role: "Pilote & Collectionneur AMG", text: "Le niveau de diagnostic électronique de l'Atelier Olouwabe est digne des laboratoires d'ingénierie de Stuttgart. Le scan de topologie en temps réel est d'une clarté absolue.", stars: 5, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" },
    { name: "Armand K.", role: "Directeur de Flotte Premium", text: "Leur outil d'explication par IA pour le code SAMF a permis d'éviter un remplacement inutile de l'alternateur. Gain de temps et d'argent exceptionnel.", stars: 5, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" }
  ];

  return (
    <div ref={containerRef} className="bg-[#050505] text-zinc-100 min-h-screen antialiased font-sans overflow-x-hidden selection:bg-red-600 selection:text-white">
      
      {/* LIGNES DE GUIDAGE ESTHÉTIQUES STYLE LUXE TECH */}
      <div className="absolute inset-0 grid grid-cols-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none z-0 opacity-5">
        <div className="border-l border-zinc-800 h-full w-full" />
        <div className="border-l border-zinc-800 h-full w-full" />
        <div className="border-l border-zinc-800 h-full w-full" />
        <div className="border-l border-zinc-800 h-full w-full" />
      </div>

      {/* GLOW DE SÉCURITÉ RADIAL ROUGE */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-[1200px] right-1/4 w-[600px] h-[600px] bg-red-900/5 rounded-full blur-[200px] pointer-events-none z-0" />

      {/* HEADER ULTRA-PREMIUM */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-zinc-900/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-zinc-950 border border-zinc-800 flex items-center justify-center relative overflow-hidden group shadow-2xl shadow-red-900/10">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <Activity className="w-5 h-5 text-red-500 relative z-10 animate-pulse" />
            </div>
            <div>
              <span className="text-sm font-black tracking-[0.25em] text-white block">ATELIER OLOUWABE</span>
              <span className="text-[9px] text-zinc-500 font-mono tracking-widest uppercase block mt-0.5">Automotive Labs & Neural Core</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10 text-[10px] font-mono tracking-[0.15em] uppercase text-zinc-400">
            <a href="#hero" className="hover:text-white transition-colors relative py-1 group">ACCUEIL<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-red-600 group-hover:w-full transition-all duration-300"/></a>
            <a href="#topology" className="hover:text-red-500 transition-colors flex items-center gap-1.5">
              <Radio className="w-3 h-3 animate-pulse text-red-600" /> TOPOLOGIE OS
            </a>
            <a href="#report" className="hover:text-white transition-colors relative py-1 group">RAPPORT CERTIFIÉ<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-red-600 group-hover:w-full transition-all duration-300"/></a>
            <a href="#ai-diagnostics" className="hover:text-white transition-colors relative py-1 group">ANALYSES IA<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-red-600 group-hover:w-full transition-all duration-300"/></a>
            <a href="#services" className="hover:text-white transition-colors relative py-1 group">INGÉNIERIE<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-red-600 group-hover:w-full transition-all duration-300"/></a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden xl:flex flex-col text-right font-mono text-[11px] space-y-0.5">
              <a href="tel:0191225380" className="text-white font-bold hover:text-red-500 transition-colors tracking-wider">0191225380</a>
              <span className="text-zinc-600 text-[10px]">kponadouo@gmail.com</span>
            </div>
            <a href="#intake" className="px-5 py-3 border border-red-900/40 bg-gradient-to-b from-red-950/20 to-red-900/10 hover:from-red-600 hover:to-red-700 text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-red-400 hover:text-white shadow-2xl shadow-red-950/20 rounded transition-all duration-500 transform active:scale-95">
              INTAKE CORE
            </a>
          </div>
        </div>
      </header>

      {/* 1. CINEMATIC HERO SECTION */}
      <section id="hero" className="relative pt-12 pb-24 lg:pt-20 lg:pb-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
        
        {/* Fond d'image de luxe style parallaxe et dégradés profonds */}
        <div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none mix-blend-luminosity scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1600')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 rounded font-mono text-[10px] text-zinc-400 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
              SYSTEM TELEMETRY LINK: ONLINE // AGENT SECURE
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter leading-[0.95] text-white uppercase">
              Diagnostic Pro <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-white to-zinc-600">
                Mercedes-Benz
              </span> <br />
              & Analyse Intelligente
            </h1>
            
            <p className="text-zinc-400 max-w-xl mx-auto lg:mx-0 font-sans text-sm sm:text-base font-light leading-relaxed">
              Diagnostic d'architecture embarquée de niveau ingénieur, analyse fine de l'intégrité des calculateurs ECU, test d'impédance de cellules batterie et génération instantanée de rapports cryptographiques.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 font-mono text-[11px] font-bold tracking-wider">
              <a href="#topology" className="w-full sm:w-auto px-6 py-4 rounded bg-white text-black hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2">
                <Gauge className="w-4 h-4" /> DÉMARRER UN DIAGNOSTIC
              </a>
              <a href="#report" className="w-full sm:w-auto px-6 py-4 rounded border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" /> RECHERCHE RAPPORT
              </a>
            </div>

            {/* Compteurs dynamiques stylisés */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-900 font-mono">
              <div>
                <span className="block text-3xl font-black text-white">{ecuCount}</span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-600 mt-1 block">ECU Multiplexés</span>
              </div>
              <div>
                <span className="block text-3xl font-black text-red-500">{voltage}V</span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-600 mt-1 block">Tension Réseau Bus</span>
              </div>
              <div>
                <span className="block text-3xl font-black text-white">0.02s</span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-600 mt-1 block">Latence Transaction</span>
              </div>
            </div>
          </div>

          {/* RENDU SCANNER 3D CYBERNETIQUE */}
          <div className="lg:col-span-6 flex justify-center w-full relative">
            <div className="w-full max-w-xl bg-gradient-to-b from-zinc-950 to-black rounded-xl border border-zinc-900/90 p-6 font-mono text-[11px] shadow-2xl relative overflow-hidden group">
              
              {/* Ligne laser d'animation de scan */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_15px_#ef4444] animate-[bounce_3s_infinite] pointer-events-none z-20" />

              <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span className="text-zinc-400 tracking-widest uppercase font-bold">XENTRY RADAR OS v6.35</span>
                </div>
                <span className="text-[9px] text-zinc-600 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">BUS_IDLE</span>
              </div>

              {/* Rendu Image Mercedes haut de gamme en mode vision nocturne/fil de fer */}
              <div className="relative w-full h-48 bg-black rounded-lg border border-zinc-900 overflow-hidden mb-4 group-hover:border-zinc-800 transition-colors flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600" 
                  alt="Mercedes Elite Core" 
                  className="w-full h-full object-cover filter grayscale opacity-20 contrast-125 mix-blend-lighten"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
                
                {/* Points radar d'analyse de panne */}
                <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-red-600 rounded-full animate-ping pointer-events-none" />
                <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-red-500 rounded-full border border-white/40 pointer-events-none" />
                <span className="absolute bottom-3 left-4 text-[9px] text-red-500 font-bold bg-red-950/40 border border-red-900/30 px-2 py-0.5 rounded backdrop-blur-md">
                  ANOMALIE COMPOSANT DÉTECTÉE : AXE AVANT ZONE 04
                </span>
              </div>

              <div className="bg-[#08080a] p-3.5 rounded border border-zinc-900 space-y-2 text-zinc-500">
                <div className="flex justify-between text-zinc-400 text-[10px]">
                  <span>FRAME TRANSFER : SECURE</span>
                  <span>SCANNER PROGRESS: {scanProgress}%</span>
                </div>
                <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden border border-zinc-900 relative">
                  <div className="h-full bg-red-600 transition-all duration-100 shadow-[0_0_8px_#ef4444]" style={{ width: `${scanProgress}%` }} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SECTION TOPOLOGIE ET DASHBOARD MATÉRIEL */}
      <section id="topology" className="py-24 bg-[#07070a] border-y border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <span className="text-xs font-mono text-red-500 uppercase tracking-[0.2em] font-bold block">Hardware Interrogation Matrix</span>
              <h2 className="text-3xl font-black text-white tracking-tight uppercase">Dashboard de Topologie Réseau</h2>
            </div>
            <div className="flex gap-2 font-mono text-[9px] bg-black p-1 border border-zinc-900 rounded">
              {["ALL", "POWERTRAIN", "BODY", "CHASSIS", "COCKPIT"].map(zone => (
                <button 
                  key={zone}
                  onClick={() => setActiveNetworkZone(zone)}
                  className={`px-3 py-1.5 rounded transition-all font-bold ${activeNetworkZone === zone ? "bg-zinc-900 text-white border border-zinc-800" : "text-zinc-500 hover:text-zinc-300"}`}
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Grille Interactive de Topologie Multi-Calculateurs (Style Logiciel Entreprise) */}
            <div className="lg:col-span-8 bg
