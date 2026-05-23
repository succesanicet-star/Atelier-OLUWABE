"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, Cpu, Battery, Shield, FileText, CheckCircle, 
  AlertTriangle, Phone, Mail, MapPin, Sliders, HardDrive, 
  Wrench, Layers, Search, Eye, Download, Printer, ArrowRight, 
  Star, ChevronLeft, ChevronRight, Upload, Clock, Send, Gauge
} from "lucide-react";

export default function AtelierOlouwabe() {
  // États de simulation pour le Dashboard de diagnostic en temps réel
  const [scanProgress, setScanProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("all");
  const [isScanning, setIsScanning] = useState(true);
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

  const scanSteps = [
    "Interrogation du bus CAN central...",
    "Lecture du calculateur d'injection ME-SFI...",
    "Analyse de la boîte de vitesses ETC...",
    "Analyse de l'unité SAMF (Signal Acquisition)...",
    "Calcul de la résistance interne batterie..."
  ];

  // Simulation de la boucle de scan infini/répétitif de l'interface
  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          setIsScanning(false);
          setTimeout(() => {
            setIsScanning(true);
            setCurrentTestIndex((idx) => (idx + 1) % scanSteps.length);
          }, 4000);
          return 0;
        }
        return prev + 1;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Jean-Pierre K.",
      role: "Propriétaire Mercedes AMG GTS",
      text: "Le niveau de précision électronique ici dépasse tout ce que j'ai vu, même en concession officielle. Le rapport de diagnostic IA a ciblé exactement le défaut réseau.",
      stars: 5,
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120"
    },
    {
      name: "Marc-Olivier T.",
      role: "Flotte Logistique Élite",
      text: "Confier nos diagnostics de codage de calculateurs à l'Atelier Olouwabe nous a fait gagner des semaines de maintenance préventive. Service d'une rapidité d'exécution incroyable.",
      stars: 5,
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120"
    }
  ];

  const services = [
    { icon: <Cpu className="w-6 h-6" />, title: "Diagnostic Mercedes-Benz", desc: "Analyse approfondie via l'architecture constructeur Xentry & MaxiIM Star." },
    { icon: <Sliders className="w-6 h-6" />, title: "Analyse & Codage ECU", desc: "Reprogrammation, calibration et appairage de calculateurs électroniques d'origine." },
    { icon: <Battery className="w-6 h-6" />, title: "Diagnostic Batteries Pro", desc: "Mesure de résistance cellulaire, courbe de décharge dynamique et santé globale SOH." },
    { icon: <HardDrive className="w-6 h-6" />, title: "Analyse de Santé Véhicule", desc: "Interrogation complète de la topologie réseau de l'ensemble des multiplexeurs CAN/LIN." },
    { icon: <FileText className="w-6 h-6" />, title: "Rapports Intelligents", desc: "Génération instantanée de documents d'analyse certifiés au format entreprise." },
    { icon: <Wrench className="w-6 h-6" />, title: "Maintenance Préventive", desc: "Suivi prédictif algorithmique pour anticiper les pannes d'usure de modules critiques." }
  ];

  const portfolio = [
    { title: "Codage Calculateur Moteur", category: "ECU Programming", status: "Terminé (100%)", img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=600", stats: "99.8% Efficacité" },
    { title: "Diagnostic Électronique Multiplexé", category: "Mercedes GLC", status: "Terminé (100%)", img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=600", stats: "Zéro Erreur CAN" },
    { title: "Restauration Module de Charge SAM", category: "Hardware Reset", status: "Terminé (100%)", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600", stats: "14.2V Stable" },
    { title: "Analyse Cellulaire Haute-Tension", category: "Battery Analysis", status: "Terminé (100%)", img: "https://images.unsplash.com/photo-1558441719-ff34b0524a24?auto=format&fit=crop&q=80&w=600", stats: "SOH Restauré" }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-black text-zinc-100 min-h-screen antialiased selection:bg-red-600 selection:text-white font-sans overflow-x-hidden">
      
      {/* GLOW DE FOND GLOBAL STYLE TESLA */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-red-950/10 via-transparent to-transparent blur-[120px] pointer-events-none z-0" />

      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/75 border-b border-zinc-900/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-zinc-800 to-black border border-zinc-700 flex items-center justify-center shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Activity className="w-5 h-5 text-red-500 relative z-10" />
            </div>
            <div>
              <span className="text-base font-extrabold tracking-widest text-white block">ATELIER OLOUWABE</span>
              <span className="text-[10px] text-zinc-500 tracking-wider uppercase font-semibold block">Mercedes-Benz Core Intelligence</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
            <a href="#hero" class="hover:text-white transition-colors">Accueil</a>
            <a href="#live-os" class="hover:text-red-500 transition-colors flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span> Telemetry
            </a>
            <a href="#report" class="hover:text-white transition-colors">Rapport</a>
            <a href="#ai-core" class="hover:text-white transition-colors">IA Analyse</a>
            <a href="#services" class="hover:text-white transition-colors">Services</a>
            <a href="#works" class="hover:text-white transition-colors">Labos</a>
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden sm:flex flex-col text-right font-mono text-xs">
              <a href="tel:0191225380" className="text-white font-bold hover:text-red-500 transition-colors">0191225380</a>
              <span className="text-[10px] text-zinc-500">kponadouo@gmail.com</span>
            </div>
            <a href="#intake" className="px-4 py-2.5 rounded bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-red-950/40 transition-all duration-300 transform active:scale-95">
              Intake Terminal
            </a>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              SYSTEM HARDWARE STATUS: OBD-II COMPLIANT CONNECTED
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-white">
              Diagnostic Professionnel <br className="hidden sm:inline"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-red-600">
                Mercedes-Benz
              </span> <br />
              & Analyse Intelligente
            </h1>
            
            <p class="text-zinc-400 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base font-light leading-relaxed">
              Diagnostic automobile avancé, analyse fine des calculateurs ECU, tests d'impédance batterie et génération automatisée de rapports de réparation de niveau ingénieur.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 font-mono text-xs font-bold">
              <a href="#live-os" className="w-full sm:w-auto px-6 py-4 rounded bg-white text-black hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">
                <Gauge className="w-4 h-4" /> DÉMARRER UN DIAGNOSTIC
              </a>
              <a href="#report" className="w-full sm:w-auto px-6 py-4 rounded border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" /> TÉLÉCHARGER LE RAPPORT
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-900 text-center lg:text-left">
              <div>
                <span className="block text-2xl font-mono font-black text-white">42+</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Modules CAN Scannés</span>
              </div>
              <div>
                <span className="block text-2xl font-mono font-black text-red-500">0.02s</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Latence Télémétrie</span>
              </div>
              <div>
                <span className="block text-2xl font-mono font-black text-white">100%</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Précision Code DTC</span>
              </div>
            </div>
          </div>

          {/* SCANNER SIMULATION GRAPHICS */}
          <div className="lg:col-span-6 flex justify-center w-full relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600/5 to-transparent blur-3xl pointer-events-none" />
            <div className="w-full max-w-xl bg-zinc-950 rounded-2xl border border-zinc-800/80 p-6 font-mono text-xs shadow-2xl relative overflow-hidden shadow-red-950/5">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                  <span className="text-[11px] font-bold text-zinc-400 tracking-widest uppercase">STAR DIAGNOSTIC OS v6.35</span>
                </div>
                <span className="text-[10px] text-zinc-600 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">SYS_ONLINE</span>
              </div>

              <div className="space-y-3.5 bg-black/60 p-4 rounded-xl border border-zinc-900">
                <div className="flex justify-between text-[11px] text-zinc-400">
                  <span>CORE TEMP: 41°C</span>
                  <span>BUS: CHASSIS_CAN_LINK</span>
                </div>
                <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden relative border border-zinc-800">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-zinc-700 via-red-600 to-zinc-500" 
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>
                <div className="text-[11px] text-zinc-500 h-5 flex items-center justify-between">
                  <span className="animate-pulse">{isScanning ? scanSteps[currentTestIndex] : "Analyse complète."}</span>
                  <span className="text-white font-bold">{scanProgress}%</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-red-950/10 border border-red-900/30 rounded-xl flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block font-bold text-red-500 text-[11px] uppercase tracking-wider">Alerte Système Critique</span>
                  <p class="text-zinc-400 text-[11px] leading-relaxed mt-0.5">Calculateur SAMF : Résistance interne de la batterie de démarrage en dehors des tolérances nominales.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SECTION DIAGNOSTIC EN TEMPS RÉEL (DASHBOARD) */}
      <section id="live-os" className="py-20 bg-zinc-950/40 border-y border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-2">
            <span className="text-xs font-mono text-red-500 uppercase tracking-widest font-bold block">Telemetry Display</span>
            <h2 className="text-3xl font-black text-white tracking-tight">Tableau de bord Diagnostic en temps réel</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 font-mono">
            {/* Colonne Gauche — Métadonnées */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800/80 space-y-4 shadow-xl">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block border-b border-zinc-900 pb-2">FICHIER VÉHICULE CONTROLE</span>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between"><span class="text-zinc-400">VÉHICULE</span><span class="text-white font-bold">Mercedes-Benz GLC (253)</span></div>
                  <div className="flex justify-between"><span class="text-zinc-400">VIN</span><span class="text-white font-mono select-all">WDC0G4JB9GF110677</span></div>
                  <div className="flex justify-between"><span class="text-zinc-400">KILOMÉTRAGE</span><span class="text-white">201 747 km</span></div>
                  <div className="flex justify-between"><span class="text-zinc-400">OUTIL DE CODE</span><span class="text-zinc-300">MaxiIM IM608 PRO II</span></div>
                  <div className="flex justify-between"><span class="text-zinc-400">S/N LOGICIEL</span><span class="text-zinc-400">HAAGT3C01082</span></div>
                  <div className="flex justify-between"><span class="text-zinc-400">VERSION OS</span><span class="text-red-500">V6.35</span></div>
                </div>
              </div>

              <div className="bg-zinc-900/30 p-5 rounded-xl border border-zinc-900 flex items-center justify-between">
                <div>
                  <span class="text-[10px] text-zinc-500 block uppercase">TIMESTAMP LOG</span>
                  <span class="text-xs text-zinc-300 block mt-1">2026-05-21 13:31:50</span>
                </div>
                <Clock className="w-5 h-5 text-zinc-600" />
              </div>
            </div>

            {/* Colonne Droite — Analyse Module & Graphique de Charge */}
            <div className="lg:col-span-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex items-center justify-between shadow-lg">
                  <div>
                    <span className="text-[10px] text-zinc-500 block">RÉSULTAT GLOBAL</span>
                    <span className="text-xl font-bold text-red-500">1 DÉFAUT</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-red-950/40 flex items-center justify-center border border-red-900/30">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  </div>
                </div>

                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex items-center justify-between shadow-lg">
                  <div>
                    <span className="text-[10px] text-zinc-500 block">TENSION BUS CAN</span>
                    <span className="text-xl font-bold text-amber-500">11.8V</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-amber-950/40 flex items-center justify-center border border-amber-900/30">
                    <Battery className="w-4 h-4 text-amber-500" />
                  </div>
                </div>

                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex items-center justify-between shadow-lg">
                  <div>
                    <span className="text-[10px] text-zinc-500 block">ÉTAT REGISTRES</span>
                    <span className="text-xl font-bold text-zinc-400">MEMORISÉ</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                    <HardDrive className="w-4 h-4 text-zinc-400" />
                  </div>
                </div>
              </div>

              {/* Focus DTC Card */}
              <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 p-6 rounded-xl border border-red-900/30 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-3xl pointer-events-none" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4 mb-4">
                  <div className="space-y-1">
                    <span className="px-2.5 py-1 rounded bg-red-950/50 text-red-500 text-xs font-bold border border-red-950">
                      DTC REGISTRE : B1F4500
                    </span>
                    <h3 className="text-white text-base font-bold mt-2">SAMF (Signal Acquisition Module Front)</h3>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase bg-zinc-900 px-3 py-1 rounded border border-zinc-800 self-start sm:self-center">
                    GRAVITÉ : HAUTE
                  </span>
                </div>
                
                <p className="text-zinc-400 text-sm leading-relaxed font-sans italic">
                  "La batterie de démarrage présente une résistance trop élevée. Les cycles de régulation alternateur ne parviennent plus à stabiliser la tension nominale sous charge."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION RAPPORT PREMIUM */}
      <section id="report" class="py-20 bg-black relative">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12 space-y-2">
            <span class="text-xs font-mono text-zinc-500 uppercase tracking-widest block">Enterprise Output</span>
            <h2 class="text-3xl font-black text-white">Rapport Officiel de Diagnostic</h2>
          </div>

          {/* PDF Preview Container */}
          <div class="bg-zinc-950 border border-zinc-800/80 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs">
            
            {/* Faux Header Action PDF */}
            <div class="bg-zinc-900 px-6 py-4 border-b border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span class="text-[9px] text-zinc-500 block uppercase">ID RAPPORT NUMÉRIQUE</span>
                <span class="text-white font-bold select-all">MAXIA20260521133150</span>
              </div>
              <div class="flex gap-2 w-full sm:w-auto">
                <button onClick={handlePrint} class="flex-1 sm:flex-none px-3.5 py-2 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 rounded text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-2">
                  <Printer className="w-3.5 h-3.5" /> Imprimer
                </button>
                <button class="flex-1 sm:flex-none px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded shadow-lg shadow-red-900/20 transition-all flex items-center justify-center gap-2">
                  <Download className="w-3.5 h-3.5" /> Exporter PDF
                </button>
              </div>
            </div>

            {/* Corps du Document Corporate */}
            <div id="printable-area" class="p-6 sm:p-10 space-y-8 bg-gradient-to-b from-zinc-950 to-black">
              <div class="flex justify-between items-start border-b border-zinc-900 pb-6">
                <div>
                  <h3 class="text-sm font-bold text-white tracking-widest uppercase">ATELIER OLOUWABE</h3>
                  <span class="text-[10px] text-zinc-500 block mt-1">Diagnostic Automobile Spécialisé</span>
                </div>
                <div class="text-right text-[10px] text-zinc-500 space-y-0.5">
                  <div>DATE TEST : 2026-05-21</div>
                  <div>TERMINAL : AUTEL MAXIIM v6</div>
                </div>
              </div>

              {/* Double Grille Spécifications */}
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-zinc-400">
                <div class="space-y-2">
                  <span class="text-[10px] font-bold text-zinc-500 block uppercase">DONNÉES CLIENT & CHÂSSIS</span>
                  <div class="p-3.5 bg-black border border-zinc-900 rounded-xl space-y-2">
                    <div class="flex justify-between"><span>VÉHICULE :</span><span class="text-white">GLC (253)</span></div>
                    <div class="flex justify-between"><span>VIN :</span><span class="text-white text-[11px]">WDC0G4JB9GF110677</span></div>
                    <div class="flex justify-between"><span>KILOMÉTRAGE :</span><span class="text-white">201 747 km</span></div>
                  </div>
                </div>

                <div class="space-y-2">
                  <span class="text-[10px] font-bold text-zinc-500 block uppercase">ANALYSE DU CODE DÉFAUT</span>
                  <div class="p-3.5 bg-black border border-zinc-900 rounded-xl space-y-2">
                    <div class="flex justify-between"><span>CODE DTC :</span><span class="text-red-500 font-bold">B1F4500</span></div>
                    <div class="flex justify-between"><span>REGISTRE :</span><span class="text-white">SAMF FRONT</span></div>
                    <div class="flex justify-between"><span>SITUATION :</span><span class="text-zinc-300">ACTUEL & MÉMORISÉ</span></div>
                  </div>
                </div>
              </div>

              {/* Résumé Technique */}
              <div class="p-4 bg-zinc-900/30 border border-zinc-900 rounded-xl">
                <span class="text-[10px] font-bold text-zinc-500 block uppercase mb-1">CONCLUSIONS DE L'EXPERT LABO</span>
                <p class="text-zinc-300 font-sans text-xs leading-relaxed">
                  La résistance interne mesurée dépasse la valeur de coupure de sécurité de 12.5 mΩ. Risque de coupure des réseaux multiplexés en phase de démarrage à froid. Remplacement requis.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECTION ANALYSE IA (PREDICTIVE CORE) */}
      <section id="ai-core" class="py-20 bg-zinc-950/30 border-t border-zinc-900 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-5 space-y-4">
            <span class="text-xs font-mono text-red-500 uppercase tracking-widest font-bold block">Predictive Maintenance</span>
            <h2 class="text-3xl font-black text-white tracking-tight">Analyse Prédictive par Intelligence Artificielle</h2>
            <p class="text-zinc-400 font-sans text-sm font-light leading-relaxed">
              Notre module d'IA exclusif croise instantanément le code défaut relevé avec la base télématique constructeur pour générer un plan de remédiation complet.
            </p>
          </div>

          <div class="lg:col-span-7 w-full font-mono text-xs">
            <div class="bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 shadow-2xl space-y-5">
              <div class="flex items-center gap-2 text-zinc-400 border-b border-zinc-900 pb-3">
                <Cpu class="w-4 h-4 text-red-500 animate-pulse" />
                <span>ALGORITHME RECOMMANDATION VÉHICULE</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="p-4 bg-black border border-zinc-900 rounded-xl space-y-1">
                  <span class="text-[9px] text-zinc-500 block">PROBABILITÉ DE CLAQUAGE CELLULE</span>
                  <span class="text-3xl font-bold text-red-500">91%</span>
                </div>
                <div class="p-4 bg-black border border-zinc-900 rounded-xl space-y-1">
                  <span class="text-[9px] text-zinc-500 block">FOURCHETTE ESTIMATIVE INTERVENTION</span>
                  <span class="text-3xl font-bold text-white">$180 - $300</span>
                </div>
              </div>

              <div class="p-4 bg-zinc-900/30 rounded-xl border border-zinc-900 space-y-3 text-zinc-400">
                <span class="text-white font-bold block text-[10px] uppercase">PLAN DE CONTRÔLE AUTOMATISÉ :</span>
                <div class="space-y-1.5 text-[11px]">
                  <div class="flex items-center gap-2"><CheckCircle class="w-3.5 h-3.5 text-red-500 flex-shrink-0" /> <span>Test d'impédance dynamique et contrôle tension</span></div>
                  <div class="flex items-center gap-2"><CheckCircle class="w-3.5 h-3.5 text-red-500 flex-shrink-0" /> <span>Vérification complète du circuit d'alternateur</span></div>
                  <div class="flex items-center gap-2"><CheckCircle class="w-3.5 h-3.5 text-red-500 flex-shrink-0" /> <span>Remplacement de la cellule et réinitialisation SAMF</span></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SECTION SERVICES PREMIUM */}
      <section id="services" class="py-20 bg-black">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 space-y-2">
            <span class="text-xs font-mono text-zinc-500 uppercase tracking-widest block">Workshop Capabilities</span>
            <h2 class="text-3xl font-black text-white tracking-tight">Services Électroniques de Haute Précision</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv, index) => (
              <div key={index} class="group p-6 bg-zinc-950 rounded-xl border border-zinc-900/80 hover:border-zinc-800 transition-all duration-300 hover:-translate-y-1 shadow-lg relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div class="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-500 group-hover:text-white group-hover:bg-red-600 transition-all mb-4 shadow-inner">
                  {srv.icon}
                </div>
                <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-2">{srv.title}</h3>
                <p class="text-xs text-zinc-400 font-light leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION TRAVAUX EFFECTUÉS (LABOS) */}
      <section id="works" class="py-20 bg-zinc-950/20 border-t border-zinc-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 space-y-2">
            <span class="text-xs font-mono text-red-500 uppercase tracking-widest block font-bold">Real-world Diagnostics</span>
            <h2 class="text-3xl font-black text-white tracking-tight">Travaux Réalisés en Atelier</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, idx) => (
              <div key={idx} class="group bg-zinc-950 rounded-xl border border-zinc-900 overflow-hidden shadow-2xl relative">
                <div class="relative h-48 overflow-hidden bg-zinc-900">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                  <span class="absolute top-3 left-3 px-2 py-0.5 bg-black/80 border border-zinc-800 rounded text-[9px] font-mono text-green-400 font-bold uppercase tracking-wider">
                    {item.status}
                  </span>
                </div>
                <div class="p-4 font-mono text-xs space-y-2">
                  <span class="text-[10px] text-zinc-500 block uppercase">{item.category}</span>
                  <h4 class="text-white font-bold font-sans text-sm line-clamp-1">{item.title}</h4>
                  <div class="pt-2 border-t border-zinc-900 text-[10px] text-zinc-400 flex justify-between items-center">
                    <span>MÉTRIQUE :</span>
                    <span class="text-red-500 font-bold">{item.stats}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION FORMULAIRE DE DEMANDE (INTAKE TERMINAL) */}
      <section id="intake" class="py-20 bg-black border-t border-zinc-900">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12 space-y-2">
            <span class="text-xs font-mono text-zinc-500 uppercase tracking-widest block">Secure Queue Intake</span>
            <h2 class="text-3xl font-black text-white">Soumettre une demande de Diagnostic</h2>
            <p class="text-zinc-500 text-xs font-mono">Aucun tarif fixe — Analyse personnalisée sur devis de télémétrie</p>
          </div>

          <div class="bg-zinc-950 p-6 sm:p-10 rounded-2xl border border-zinc-900/80 shadow-2xl font-mono text-xs">
            <form class="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Données transmises avec succès au serveur de tri."); }}>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                  <label class="text-zinc-500 uppercase text-[10px] font-bold">Nom Complet</label>
                  <input type="text" required class="w-full bg-black border border-zinc-800 focus:border-zinc-700 rounded p-3 text-white outline-none transition-colors" placeholder="Ex: Jean Dupont"/>
                </div>
                <div class="space-y-1.5">
                  <label class="text-zinc-500 uppercase text-[10px] font-bold">Numéro Téléphone</label>
                  <input type="tel" required class="w-full bg-black border border-zinc-800 focus:border-zinc-700 rounded p-3 text-white outline-none transition-colors" placeholder="Ex: 0191225380"/>
                </div>
              </div>

              <div class="space-y-1.5">
                <label class="text-zinc-500 uppercase text-[10px] font-bold">Email de Réception</label>
                <input type="email" required class="w-full bg-black border border-zinc-800 focus:border-zinc-700 rounded p-3 text-white outline-none transition-colors" placeholder="kponadouo@gmail.com"/>
              </div>

              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div class="space-y-1.5 col-span-1">
                  <label class="text-zinc-500 uppercase text-[10px] font-bold">Marque</label>
                  <input type="text" required class="w-full bg-black border border-zinc-800 focus:border-zinc-700 rounded p-3 text-white outline-none transition-colors" placeholder="Mercedes"/>
                </div>
                <div class="space-y-1.5 col-span-1">
                  <label class="text-zinc-500 uppercase text-[10px] font-bold">Modèle</label>
                  <input type="text" required class="w-full bg-black border border-zinc-800 focus:border-zinc-700 rounded p-3 text-white outline-none transition-colors" placeholder="GLC 253"/>
                </div>
                <div class="space-y-1.5 col-span-1">
                  <label class="text-zinc-500 uppercase text-[10px] font-bold">Année</label>
                  <input type="number" required class="w-full bg-black border border-zinc-800 focus:border-zinc-700 rounded p-3 text-white outline-none transition-colors" placeholder="2021"/>
                </div>
                <div class="space-y-1.5 col-span-1">
                  <label class="text-zinc-500 uppercase text-[10px] font-bold">KM</label>
                  <input type="number" required class="w-full bg-black border border-zinc-800 focus:border-zinc-700 rounded p-3 text-white outline-none transition-colors" placeholder="201747"/>
                </div>
              </div>

              <div class="space-y-1.5">
                <label class="text-zinc-500 uppercase text-[10px] font-bold">Symptômes ou Code Panne Relevé</label>
                <textarea rows={4} class="w-full bg-black border border-zinc-800 focus:border-zinc-700 rounded p-3 text-white outline-none transition-colors resize-none placeholder:zinc-700" placeholder="Décrivez les voyants allumés ou comportements anormaux du véhicule..."></textarea>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div class="border border-zinc-900 bg-black/40 p-4 rounded-xl flex flex-col items-center justify-center text-center group hover:border-zinc-800 transition-colors relative cursor-pointer">
                  <Upload class="w-4 h-4 text-zinc-500 mb-1" />
                  <span class="text-[10px] text-zinc-400 font-bold">Photo du Véhicule</span>
                  <span class="text-[9px] text-zinc-600 mt-0.5">JPG, PNG (max 5MB)</span>
                </div>
                <div class="border border-zinc-900 bg-black/40 p-4 rounded-xl flex flex-col items-center justify-center text-center group hover:border-zinc-800 transition-colors relative cursor-pointer">
                  <FileText class="w-4 h-4 text-zinc-500 mb-1" />
                  <span class="text-[10px] text-zinc-400 font-bold">Rapport Pré-existant</span>
                  <span class="text-[9px] text-zinc-600 mt-0.5">PDF, XML (max 10MB)</span>
                </div>
              </div>

              <button type="submit" class="w-full py-4 rounded bg-white text-black font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 mt-4 text-xs">
                <Send class="w-4 h-4" /> TRANSMETTRE LES DONNÉES AU RECEPTACLE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 8. SECTION TÉMOIGNAGES */}
      <section class="py-20 bg-zinc-950/40 border-t border-zinc-900">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-black text-white tracking-tight">Retours d'Expérience Client</h2>
          </div>

          <div class="bg-zinc-950 border border-zinc-900 p-6 sm:p-8 rounded-2xl relative overflow-hidden shadow-xl">
            <div class="flex items-center gap-1 text-red-500 mb-4">
              {[...Array(testimonials[currentReview].stars)].map((_, i) => (
                <Star key={i} class="w-4 h-4 fill-current" />
              ))}
            </div>
            <p class="text-zinc-300 text-sm sm:text-base font-light italic leading-relaxed font-sans">
              "{testimonials[currentReview].text}"
            </p>
            
            <div class="flex items-center justify-between border-t border-zinc-900 pt-6 mt-6">
              <div class="flex items-center gap-3">
                <img src={testimonials[currentReview].img} alt="" class="w-10 h-10 rounded-full object-cover filter grayscale border border-zinc-800"/>
                <div>
                  <span class="block text-xs font-bold font-mono text-white">{testimonials[currentReview].name}</span>
                  <span class="block text-[10px] font-mono text-zinc-500 uppercase mt-0.5">{testimonials[currentReview].role}</span>
                </div>
              </div>
              <div class="flex gap-1.5">
                <button onClick={() => setCurrentReview((idx) => (idx === 0 ? testimonials.length - 1 : idx - 1))} class="w-8 h-8 rounded border border-zinc-800 flex items-center justify-center hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors">
                  <ChevronLeft class="w-4 h-4" />
                </button>
                <button onClick={() => setCurrentReview((idx) => (idx === testimonials.length - 1 ? 0 : idx + 1))} class="w-8 h-8 rounded border border-zinc-800 flex items-center justify-center hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors">
                  <ChevronRight class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION CONTACT & MAPS REPLICA */}
      <section id="contact" class="py-20 bg-black border-t border-zinc-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div class="lg:col-span-5 space-y-6 font-mono text-xs">
            <div>
              <span class="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">HQ Command Node</span>
              <h2 class="text-3xl font-black font-sans text-white tracking-tighter">Coordonnées Physiques</h2>
            </div>

            <div class="space-y-4 p-5 bg-zinc-950 border border-zinc-900 rounded-xl">
              <div class="flex items-start gap-3">
                <MapPin class="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span class="block text-white font-bold uppercase text-[10px]">ADRESSE PHYSIQUE</span>
                  <p class="text-zinc-400 mt-0.5 leading-relaxed">F87Q+JWJ Abomey calavi,<br />Abomey calavi, Bénin</p>
                </div>
              </div>

              <div class="flex items-center gap-3 border-t border-zinc-900 pt-3">
                <Phone class="w-4 h-4 text-zinc-500 flex-shrink-0" />
                <div>
                  <span class="block text-zinc-500 text-[9px] uppercase">Ligne Directe</span>
                  <a href="tel:0191225380" class="text-white font-bold hover:text-red-500 transition-colors">0191225380</a>
                </div>
              </div>

              <div class="flex items-center gap-3 border-t border-zinc-900 pt-3">
                <Mail class="w-4 h-4 text-zinc-500 flex-shrink-0" />
                <div>
                  <span class="block text-zinc-500 text-[9px] uppercase">E-mail Secure</span>
                  <span class="text-zinc-300">kponadouo@gmail.com</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-3">
              <a href="tel:0191225380" class="flex-1 p-3.5 bg-white text-black font-bold uppercase tracking-wider text-center rounded hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                <Phone class="w-4 h-4" /> CALL WORKSHOP
              </a>
              <a href="https://wa.me/2290191225380" target="_blank" rel="noopener noreferrer" class="flex-1 p-3.5 bg-zinc-900 text-green-400 border border-green-900/30 font-bold uppercase tracking-wider text-center rounded hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                WHATSAPP NODE
              </a>
            </div>
          </div>

          {/* Faux Bloc Google Maps Premium Minimaliste */}
          <div class="lg:col-span-7 h-80 lg:h-auto min-h-[320px] bg-zinc-950 rounded-2xl border border-zinc-900 overflow-hidden relative group shadow-2xl">
            <div class="absolute inset-0 bg-[radial-gradient(#1f1f23_1px,transparent_1px)] [background-size:16px_16px] opacity-40 group-hover:scale-[1.02] transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
            
            <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 font-mono text-xs">
              <div class="w-10 h-10 rounded-full bg-red-950/40 border border-red-900/30 flex items-center justify-center mb-3">
                <MapPin class="w-5 h-5 text-red-500" />
              </div>
              <span class="text-white font-bold uppercase text-[10px] tracking-widest">Axe Principal Calavi</span>
              <p class="text-zinc-500 max-w-xs mt-1">Positionnement GPS vérifié — Index de zone F87Q+JWJ</p>
              <span class="mt-4 px-3 py-1.5 bg-zinc-900 rounded border border-zinc-800 text-[10px] text-zinc-400">Horaires : Lun - Ven // 08:00 - 18:00</span>
            </div>
          </div>

        </div>
      </section>

      {/* 10. FOOTER */}
      <footer class="bg-zinc-950 border-t border-zinc-900/60 py-12 text-xs font-mono text-zinc-600">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-zinc-900 pb-8">
            <div class="space-y-1">
              <span class="text-white font-bold tracking-widest block text-sm">ATELIER OLOUWABE</span>
              <p class="text-[10px] text-zinc-500 font-sans max-w-sm">Architecture de diagnostic embarqué et programmation de modules de calcul de précision Mercedes-Benz.</p>
            </div>
            
            {/* Newsletter Minimaliste */}
            <div class="w-full md:w-auto space-y-1.5">
              <span class="text-zinc-400 font-bold block text-[10px] uppercase">Rapports & Bulletins Techniques</span>
              <div class="flex max-w-md bg-black rounded border border-zinc-800 overflow-hidden focus-within:border-zinc-700 transition-colors">
                <input type="email" placeholder="Saisir e-mail" class="bg-transparent px-3 py-2 outline-none text-white w-full text-xs" />
                <button class="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 px-3 font-bold border-l border-zinc-800 transition-colors">JOIN</button>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px]">
            <span>© 2026 ATELIER OLOUWABE. TOUS DROITS RÉSERVÉS.</span>
            <div class="flex gap-6 text-zinc-500">
              <a href="#" class="hover:text-zinc-400 transition-colors">Mentions Légales</a>
              <a href="#" class="hover:text-zinc-400 transition-colors">Politique de Sécurité CAN</a>
              <a href="#" class="hover:text-zinc-400 transition-colors">Données OBD-II</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
