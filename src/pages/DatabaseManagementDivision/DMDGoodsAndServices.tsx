import React, { useState } from 'react';
import BaseTemplate from '../BaseTemplate';
import Menu from '@/components/ui/menu';
import { UserInfo } from '@/components/dmd/UserInfo';
import { ProjectInfo } from '@/components/dmd/ProjectInfo';
import { TrackingInfo } from '@/components/dmd/TrackingInfo';

export default function DMDGoodsAndServices() {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [dateReceived, setDateReceived] = useState('');
    const [postedForProcurement, setPostedForProcurement] = useState('');
    const [validated, setValidated] = useState('');
    const [dateReleased, setDateReleased] = useState('');

    const user = {
        lastName: "Doe",
        firstName: "John",
        department: "IT"
    };

    const projectInfo = {
        projectNumber: "PRJ001",
        requestingOffice: "IT Dept",
        abc: "1,000,000",
        projectTitle: "System Upgrade"
    };

    return (
        <BaseTemplate>
            <Menu department="DATABASE_MANAGEMENT" />
            <div className="bg-white p-4">
                <header className="flex justify-between items-center mb-4">
                    <div />
                    <h1 className="text-2xl font-bold">DMD: GOODS AND SERVICES</h1>
                    <UserInfo {...user} />
                </header>

                <div className="flex justify-between items-start mb-4">
                    <ProjectInfo {...projectInfo} />
                    <TrackingInfo trackingNumber={trackingNumber} onTrackingNumberChange={setTrackingNumber} />
                </div>

                <div className="flex justify-end mb-4">
                    <button className="bg-blue-400 mx-1 px-3 py-1 rounded">Amendatory</button>
                    <button className="bg-blue-400 mx-1 px-3 py-1 rounded">PO</button>
                    <button className="bg-blue-400 mx-1 px-3 py-1 rounded">USAGE</button>
                </div>

                <div className="flex h-[40vh] w-full mb-4 space-x-4">
                    <div className="w-[85%] bg-blue-100 h-full overflow-auto rounded">
                        <table className="w-full mt-4">
                            <thead>
                                <tr>
                                    <th className="border px-2 py-1">APPIDNo O-Code</th>
                                    <th className="border px-2 py-1">Account Code Program</th>
                                    <th className="border px-2 py-1">Item Name</th>
                                    <th className="border px-2 py-1">Running Qty</th>
                                    <th className="border px-2 py-1">Unit of Issue<br />Unit of Cost</th>
                                    <th className="border px-2 py-1">Allocated Budget(Project)<br />Running Balance</th>
                                    <th className="border px-2 py-1">Awarded Budget (PO)<br />Running Balance</th>
                                    <th className="border px-2 py-1">Mode<br />Fund Source</th>
                                    <th className="border px-2 py-1">Project Numbers<br />Used</th>
                                    <th className="border px-2 py-1">Conso Numbers<br />Used</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Add table rows here */}
                            </tbody>
                        </table>
                    </div>
                    <div className="w-[15%] bg-gray-200 h-full p-2 rounded">
                        <h2 className="font-bold mb-2">Tracking Information</h2>
                        <div className="space-y-2">
                            <div>
                                <label htmlFor="dateReceived" className="block text-sm">Date Received</label>
                                <input 
                                    type="date" 
                                    id="dateReceived" 
                                    value={dateReceived} 
                                    onChange={(e) => setDateReceived(e.target.value)}
                                    className="w-full p-1 border rounded" 
                                />
                            </div>
                            <div>
                                <label htmlFor="postedForProcurement" className="block text-sm">Posted for Procurement</label>
                                <input 
                                    type="date" 
                                    id="postedForProcurement" 
                                    value={postedForProcurement} 
                                    onChange={(e) => setPostedForProcurement(e.target.value)}
                                    className="w-full p-1 border rounded" 
                                />
                            </div>
                            <div>
                                <label htmlFor="validated" className="block text-sm">Validated</label>
                                <input 
                                    type="date" 
                                    id="validated" 
                                    value={validated} 
                                    onChange={(e) => setValidated(e.target.value)}
                                    className="w-full p-1 border rounded" 
                                />
                            </div>
                            <div>
                                <label htmlFor="dateReleased" className="block text-sm">Date Released</label>
                                <input 
                                    type="date" 
                                    id="dateReleased" 
                                    value={dateReleased} 
                                    onChange={(e) => setDateReleased(e.target.value)}
                                    className="w-full p-1 border rounded" 
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex h-[40vh] w-full space-x-4">
                    <div className="w-[70%] bg-[#FAC7C7] h-full overflow-auto rounded">
                        <table className="w-full mt-4">
                            <thead>
                                <tr>
                                    <th className="border px-2 py-1">APPIDNo<br />Ref No</th>
                                    <th className="border px-2 py-1">Tracking no<br />Office Code</th>
                                    <th className="border px-2 py-1">Account Code</th>
                                    <th className="border px-2 py-1">Item Name</th>
                                    <th className="border px-2 py-1">Unit of Issue<br />Quantity</th>
                                    <th className="border px-2 py-1">Unit Cost<br />Total Cost</th>
                                    <th className="border px-2 py-1">PO Number</th>
                                    <th className="border px-2 py-1">PO-Unit Cost<br />PO-Total Cost</th>
                                    <th className="border px-2 py-1">Consolidation Number<br />Line Item No</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Add table rows here */}
                            </tbody>
                        </table>
                    </div>
                    <div className="w-[30%] bg-[#BAE2C5] h-full rounded p-4">
                        {/* Add content for this section */}
                        <h2 className="text-lg font-semibold mb-2">Additional Information</h2>
                        <p>This section can be used for displaying additional details, summaries, or actions related to the goods and services.</p>
                    </div>
                </div>
            </div>
        </BaseTemplate>
    );
}

