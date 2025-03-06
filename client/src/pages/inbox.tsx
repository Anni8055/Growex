import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockMessages = [
  {
    id: 1,
    sender: "Emma Thompson",
    subject: "Collaboration Opportunity",
    preview: "Hi, I'd love to discuss a potential partnership...",
    date: "2024-02-18",
    isUnread: true
  },
  {
    id: 2,
    sender: "John Miller",
    subject: "Product Review Request",
    preview: "We're launching a new line of sustainable...",
    date: "2024-02-17",
    isUnread: false
  }
];

export default function InboxPage() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Inbox</h1>
        </div>

        <div className="space-y-4">
          {mockMessages.map((message) => (
            <Card 
              key={message.id}
              className={`hover:shadow-lg transition-shadow ${
                message.isUnread ? 'bg-blue-50' : ''
              }`}
            >
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <h3 className="font-semibold">{message.sender}</h3>
                  <p className="text-sm text-muted-foreground">{message.subject}</p>
                </div>
                <div className="flex items-center gap-2">
                  {message.isUnread && (
                    <Badge variant="secondary">New</Badge>
                  )}
                  <span className="text-sm text-muted-foreground">
                    {message.date}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{message.preview}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
