import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, LayoutDashboard, FileText, Clipboard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

// Mock data for demonstration purposes
const mockData = {
  infrastructureCommittee: [
    { project_number: 'IC001', project_title: 'Road Construction', abc: '$1,000,000' },
    { project_number: 'IC002', project_title: 'Bridge Repair', abc: '$500,000' },
  ],
  receivingForm: [
    { pd_routing_number: 'RF001', year: 2023, received_by: 'John Doe' },
    { pd_routing_number: 'RF002', year: 2023, received_by: 'Jane Smith' },
  ],
  tsdReceivingForm: [
    { project_title: 'IT Infrastructure Upgrade', office: 'IT Department', abc: '$200,000' },
    { project_title: 'Network Security Enhancement', office: 'Security Department', abc: '$150,000' },
  ],
}

export default function Dashboard() {
  const [activeView, setActiveView] = useState('infrastructure')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const renderContent = () => {
    switch (activeView) {
      case 'infrastructure':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Infrastructure Committee Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {mockData.infrastructureCommittee.map((item) => (
                  <li key={item.project_number} className="mb-2">
                    <strong>{item.project_title}</strong> - {item.project_number} (ABC: {item.abc})
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )
      case 'receiving':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Receiving Forms</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {mockData.receivingForm.map((item) => (
                  <li key={item.pd_routing_number} className="mb-2">
                    {item.pd_routing_number} - Year: {item.year}, Received by: {item.received_by}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )
      case 'tsd':
        return (
          <Card>
            <CardHeader>
              <CardTitle>TSD Receiving Forms</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {mockData.tsdReceivingForm.map((item) => (
                  <li key={item.project_title} className="mb-2">
                    <strong>{item.project_title}</strong> - {item.office} (ABC: {item.abc})
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
        initial={false}
        animate={{ width: isSidebarOpen ? 256 : 0 }}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl font-bold">Admin Dashboard</h2>
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
            <X className="h-6 w-6" />
          </Button>
        </div>
        <Separator />
        <nav className="mt-4">
          <Button
            variant={activeView === 'infrastructure' ? 'secondary' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setActiveView('infrastructure')}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Infrastructure
          </Button>
          <Button
            variant={activeView === 'receiving' ? 'secondary' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setActiveView('receiving')}
          >
            <FileText className="mr-2 h-4 w-4" />
            Receiving Forms
          </Button>
          <Button
            variant={activeView === 'tsd' ? 'secondary' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setActiveView('tsd')}
          >
            <Clipboard className="mr-2 h-4 w-4" />
            TSD Receiving
          </Button>
        </nav>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}