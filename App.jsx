import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  TrendingUp, 
  Target, 
  Globe, 
  Users, 
  DollarSign, 
  Rocket, 
  BarChart3, 
  Zap,
  Crown,
  Building,
  Briefcase,
  ChevronRight,
  Star,
  CheckCircle,
  ArrowUp,
  Languages,
  Trophy,
  Sparkles
} from 'lucide-react'
import './App.css'

function App() {
  const [activePhase, setActivePhase] = useState(0)

  const phases = [
    {
      title: "Foundation",
      timeframe: "Months 1-6",
      target: "$100K/month",
      description: "Dominate both English & Spanish automation markets"
    },
    {
      title: "Scale",
      timeframe: "Months 7-18",
      target: "$1M/month", 
      description: "Expand globally across all business segments"
    },
    {
      title: "Empire",
      timeframe: "Months 19-36",
      target: "$10M+/month",
      description: "Multi-product automation ecosystem worldwide"
    },
    {
      title: "World Domination",
      timeframe: "Years 3-5",
      target: "$30M+/month",
      description: "Global leader in business automation"
    }
  ]

  const globalMarketStats = [
    { label: "Global Small Business Market", value: "$12.9T", icon: DollarSign },
    { label: "English + Spanish Businesses", value: "32M+", icon: Building },
    { label: "Automation Adoption Rate", value: "<15%", icon: TrendingUp },
    { label: "Mejor-AI Advantage", value: "Bilingual", icon: Languages }
  ]

  const revenueStreams = [
    {
      name: "Global SaaS Platform",
      potential: "$15M+/month",
      description: "Core automation platform for English & Spanish businesses worldwide",
      scalability: 98
    },
    {
      name: "Enterprise Solutions", 
      potential: "$8M+/month",
      description: "Custom automation for Fortune 500 and large corporations",
      scalability: 95
    },
    {
      name: "Franchise/Licensing",
      potential: "$5M+/month", 
      description: "License automation solutions globally",
      scalability: 90
    },
    {
      name: "AI Training & Certification",
      potential: "$3M+/month",
      description: "Global automation education and certification programs", 
      scalability: 85
    }
  ]

  const competitiveAdvantages = [
    {
      title: "Bilingual by Design",
      description: "Only platform built from ground up for English + Spanish markets",
      icon: Languages
    },
    {
      title: "Cultural Intelligence",
      description: "Understands business practices across different cultures",
      icon: Globe
    },
    {
      title: "Human-Centered AI",
      description: "Automation that enhances relationships, not replaces them",
      icon: Users
    },
    {
      title: "Proven Success",
      description: "Real results with existing customers across markets",
      icon: Trophy
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-5xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-6 py-3 text-lg">
              <Crown className="w-5 h-5 mr-2" />
              Mejor-AI: Global Automation Empire
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              From <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">$1K</span> to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">$30M+</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 leading-relaxed">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-bold">
                "Mejor" = Better
              </span>
            </p>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              "Los que automatizan evolucionan, los que no se quedan atrás"<br/>
              "Those who automate evolve, those who don't get left behind"
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
              The complete blueprint to build the world's BEST automation platform. Dominate both English and Spanish markets 
              simultaneously. Serve 32+ million businesses worldwide with bilingual automation that actually works.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg">
                <Rocket className="w-5 h-5 mr-2" />
                Build Global Empire
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 text-lg">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Master Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Market Opportunity */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">$12.9 Trillion</span> Global Opportunity
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Why limit yourself to one market when you can dominate TWO? English + Spanish markets combined 
              represent the largest automation opportunity in history.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {globalMarketStats.map((stat, index) => (
              <Card key={index} className="bg-slate-800/80 border-slate-700 hover:border-purple-500 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Spanish Market */}
            <Card className="bg-gradient-to-br from-orange-900/50 to-red-900/50 border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <Languages className="w-6 h-6 mr-3 text-orange-400" />
                  Spanish Market Domination
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Hispanic Business Revenue</span>
                    <span className="text-orange-400 font-bold">$572.9B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Hispanic-Owned Firms</span>
                    <span className="text-orange-400 font-bold">406,086</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Growth Rate</span>
                    <span className="text-orange-400 font-bold">44%/year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Competition</span>
                    <span className="text-green-400 font-bold">Virtually None</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* English Market */}
            <Card className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-blue-400" />
                  English Market Expansion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">US Small Business Revenue</span>
                    <span className="text-blue-400 font-bold">$12.3T</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Small Businesses</span>
                    <span className="text-blue-400 font-bold">31.7M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Automation Adoption</span>
                    <span className="text-yellow-400 font-bold">&lt;15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Mejor-AI Advantage</span>
                    <span className="text-green-400 font-bold">Bilingual Edge</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-purple-500/30">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6">Why Mejor-AI Will Dominate BOTH Markets</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {competitiveAdvantages.map((advantage, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <advantage.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{advantage.title}</h4>
                    <p className="text-gray-400 text-sm">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Empire Building Path */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Global Empire</span> Building Path
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Four strategic phases to build a $30M+ automation empire dominating both English and Spanish markets worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
            {phases.map((phase, index) => (
              <Card 
                key={index} 
                className={`cursor-pointer transition-all duration-300 ${
                  activePhase === index 
                    ? 'bg-gradient-to-br from-purple-900/80 to-pink-900/80 border-purple-400 scale-105' 
                    : 'bg-slate-800/80 border-slate-700 hover:border-purple-500'
                }`}
                onClick={() => setActivePhase(index)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant={activePhase === index ? "default" : "secondary"}>
                      Phase {index + 1}
                    </Badge>
                    <ArrowUp className="w-5 h-5 text-green-400" />
                  </div>
                  <CardTitle className="text-white text-xl">{phase.title}</CardTitle>
                  <CardDescription className="text-gray-400">{phase.timeframe}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-2">
                    {phase.target}
                  </div>
                  <p className="text-gray-300 text-sm">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Phase Details */}
          <Card className="bg-slate-800/80 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl">
                Phase {activePhase + 1}: {phases[activePhase].title}
              </CardTitle>
              <CardDescription className="text-gray-400 text-lg">
                {phases[activePhase].description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="strategy" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-slate-700">
                  <TabsTrigger value="strategy">Strategy</TabsTrigger>
                  <TabsTrigger value="markets">Markets</TabsTrigger>
                  <TabsTrigger value="metrics">Metrics</TabsTrigger>
                </TabsList>
                
                <TabsContent value="strategy" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Core Focus</h4>
                      <p className="text-gray-300">
                        {activePhase === 0 && "Establish Mejor-AI as THE automation solution for both English and Spanish businesses. Build dual-market product-market fit."}
                        {activePhase === 1 && "Scale across all major business segments in both markets. Expand geographically and build enterprise solutions."}
                        {activePhase === 2 && "Create multiple revenue streams and automation products. Build global ecosystem and strategic partnerships."}
                        {activePhase === 3 && "Dominate global automation market. Become the platform of choice for businesses worldwide."}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Milestones</h4>
                      <ul className="text-gray-300 space-y-2">
                        {activePhase === 0 && (
                          <>
                            <li>• 500+ paying customers (English + Spanish)</li>
                            <li>• Dual-market positioning established</li>
                            <li>• $100K MRR achieved</li>
                            <li>• Bilingual team of 15-25 people</li>
                          </>
                        )}
                        {activePhase === 1 && (
                          <>
                            <li>• 5,000+ customers across both markets</li>
                            <li>• Enterprise tier launched globally</li>
                            <li>• $1M MRR achieved</li>
                            <li>• Multi-country presence</li>
                          </>
                        )}
                        {activePhase === 2 && (
                          <>
                            <li>• 25,000+ customers across products</li>
                            <li>• Multiple revenue streams active</li>
                            <li>• $10M+ MRR achieved</li>
                            <li>• Global strategic partnerships</li>
                          </>
                        )}
                        {activePhase === 3 && (
                          <>
                            <li>• 100,000+ customers globally</li>
                            <li>• Market leader position worldwide</li>
                            <li>• $30M+ MRR achieved</li>
                            <li>• IPO or strategic acquisition ready</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="markets" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-slate-700/50">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center">
                          <Languages className="w-5 h-5 mr-2 text-orange-400" />
                          Spanish Markets
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-gray-300 space-y-2">
                          <li>• United States (406K+ businesses)</li>
                          <li>• Mexico (4.9M+ businesses)</li>
                          <li>• Spain (3.4M+ businesses)</li>
                          <li>• Argentina (1.8M+ businesses)</li>
                          <li>• Colombia (2.5M+ businesses)</li>
                          <li>• Other Latin America</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-slate-700/50">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center">
                          <Globe className="w-5 h-5 mr-2 text-blue-400" />
                          English Markets
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-gray-300 space-y-2">
                          <li>• United States (31.7M businesses)</li>
                          <li>• Canada (1.2M businesses)</li>
                          <li>• United Kingdom (5.5M businesses)</li>
                          <li>• Australia (2.5M businesses)</li>
                          <li>• New Zealand (550K businesses)</li>
                          <li>• Other English-speaking markets</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="metrics" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="bg-slate-700/50">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-green-400">{phases[activePhase].target}</div>
                        <div className="text-gray-400 text-sm">Revenue Target</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-700/50">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400">
                          {activePhase === 0 && "500+"}
                          {activePhase === 1 && "5,000+"}
                          {activePhase === 2 && "25,000+"}
                          {activePhase === 3 && "100,000+"}
                        </div>
                        <div className="text-gray-400 text-sm">Customers</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-700/50">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-purple-400">
                          {activePhase === 0 && "15-25"}
                          {activePhase === 1 && "50-100"}
                          {activePhase === 2 && "200-500"}
                          {activePhase === 3 && "1,000+"}
                        </div>
                        <div className="text-gray-400 text-sm">Team Size</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-700/50">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-pink-400">
                          {activePhase === 0 && "5-10"}
                          {activePhase === 1 && "15-25"}
                          {activePhase === 2 && "50-75"}
                          {activePhase === 3 && "Global"}
                        </div>
                        <div className="text-gray-400 text-sm">Markets</div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Revenue Streams */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Multiple <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Revenue Streams</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build a diversified global automation empire with multiple high-value revenue streams across both markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {revenueStreams.map((stream, index) => (
              <Card key={index} className="bg-slate-800/80 border-slate-700 hover:border-purple-500 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-xl">{stream.name}</CardTitle>
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                      {stream.potential}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-400">
                    {stream.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Scalability</span>
                    <span className="text-white font-semibold">{stream.scalability}%</span>
                  </div>
                  <Progress value={stream.scalability} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">Total Revenue Potential</h3>
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-4">
                  $31M+
                </div>
                <p className="text-gray-300">
                  Combined monthly revenue potential across all streams at full global scale
                </p>
                <div className="mt-4 text-sm text-gray-400">
                  English + Spanish markets combined
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Best</span> in the World?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-bold text-2xl">
              "Mejor" means "Better"
            </span>
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            The $12.9 trillion global business market is waiting. English + Spanish markets combined. 
            32+ million businesses ready for the BEST automation platform in the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl">
              <Rocket className="w-6 h-6 mr-3" />
              Become the Best
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-12 py-6 text-xl">
              <BarChart3 className="w-6 h-6 mr-3" />
              Download Master Plan
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Global Strategy</h3>
              <p className="text-gray-400">Dominate both English and Spanish markets simultaneously</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Bilingual Advantage</h3>
              <p className="text-gray-400">Only platform built for true bilingual automation from day one</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">World Domination</h3>
              <p className="text-gray-400">Scale to $30M+ monthly revenue serving 32+ million businesses globally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 mb-2 text-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-bold">
              "Mejor" = Better
            </span>
          </p>
          <p className="text-gray-400 mb-4">
            "Los que automatizan evolucionan, los que no se quedan atrás"<br/>
            "Those who automate evolve, those who don't get left behind"
          </p>
          <p className="text-gray-500 text-sm">
            Mejor-AI Global Empire Strategy © 2025 - Built to be the BEST in the World
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

