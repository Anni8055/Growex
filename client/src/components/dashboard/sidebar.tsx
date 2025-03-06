import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Search,
  ListStart,
  Mail,
  MailPlus,
  BarChart2,
  MonitorPlay,
  Play,
  Wallet,
  UserSearch,
  HelpCircle,
  Globe
} from "lucide-react";

const sidebarItems = [
  { icon: Search, label: "Search", href: "/search" },
  { icon: ListStart, label: "Lists", href: "/lists" },
  { icon: Mail, label: "Inbox", href: "/inbox" },
  { icon: MailPlus, label: "Outreach emails", href: "/outreach" },
  { icon: BarChart2, label: "Reports", href: "/reports" },
  { icon: MonitorPlay, label: "Monitoring media", href: "/monitoring" },
  { icon: Play, label: "Media gallery", href: "/gallery" },
  { icon: Wallet, label: "Creator payments", href: "/payments" },
  { icon: UserSearch, label: "Check any profile", href: "/check-profile" },
  { icon: HelpCircle, label: "Help Center", href: "/help" },
  { icon: Globe, label: "English", href: "/language" },
];

function SidebarContent() {
  const [location] = useLocation();

  return (
    <div className="h-full bg-[#0A1628] text-white">
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-xl font-semibold text-white">Heepsy</h2>
      </div>
      <ScrollArea className="h-[calc(100vh-5rem)]">
        <div className="space-y-2 p-4">
          {sidebarItems.map(({ icon: Icon, label, href }) => (
            <Button
              key={href}
              variant="ghost"
              className={cn(
                "w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors",
                location === href && "bg-gray-800 text-white"
              )}
              asChild
            >
              <Link href={href}>
                <Icon className="mr-2 h-4 w-4" />
                {label}
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden"
      >
        <Menu className="h-5 w-5" />
      </Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="p-0 w-64 bg-[#0A1628]">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      <div className="hidden md:block w-64 border-r border-gray-800 shadow-lg">
        <SidebarContent />
      </div>
    </>
  );
}