import { BarChart3, Code, Database, LayoutDashboard, Brain, LineChart, FileSpreadsheet, PieChart, TrendingUp, Server, FlaskConical, Lightbulb, Search, Filter, GitBranch, Workflow, Target, Gauge, Layers, ShieldCheck } from 'lucide-react';

const items = [
  { label: 'DATA ANALYTICS', icon: BarChart3 },
  { label: 'PYTHON', icon: Code },
  { label: 'SQL', icon: Database },
  { label: 'POWER BI', icon: LayoutDashboard },
  { label: 'MACHINE LEARNING', icon: Brain },
  { label: 'VISUALIZATION', icon: LineChart },
  { label: 'EXCEL', icon: FileSpreadsheet },
  { label: 'TABLEAU', icon: PieChart },
  { label: 'STATISTICS', icon: TrendingUp },
  { label: 'BIG DATA', icon: Server },
  { label: 'DATA SCIENCE', icon: FlaskConical },
  { label: 'INSIGHTS', icon: Lightbulb },
  { label: 'DATA MINING', icon: Search },
  { label: 'ETL PIPELINES', icon: Filter },
  { label: 'DATA MODELING', icon: GitBranch },
  { label: 'PREDICTIVE ANALYTICS', icon: Target },
  { label: 'DATA WRANGLING', icon: Workflow },
  { label: 'KPI TRACKING', icon: Gauge },
  { label: 'DATA WAREHOUSING', icon: Layers },
  { label: 'DATA GOVERNANCE', icon: ShieldCheck },
];

function ItemList() {
  return (
    <div className="flex shrink-0">
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-2.5 mx-6 shrink-0">
          <item.icon size={20} className="text-primary/70 shrink-0" />
          <span>{item.label}</span>
        </span>
      ))}
    </div>
  );
}

export default function MarqueeStrip() {
  return (
    <div className="w-full flex justify-center py-8 mt-4">
      <div className="w-1/2 overflow-hidden rounded-full border border-border/30 bg-card/30 backdrop-blur-sm py-3">
        <div
          className="whitespace-nowrap font-display text-base md:text-lg tracking-[0.15em] text-muted-foreground/70 font-medium uppercase flex animate-marquee-loop"
        >
          <ItemList />
          <ItemList />
          <ItemList />
        </div>
      </div>
    </div>
  );
}
