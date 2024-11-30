import React from 'react';

interface TrackingInfoProps {
  trackingNumber: string;
  onTrackingNumberChange: (value: string) => void;
}

export const TrackingInfo: React.FC<TrackingInfoProps> = ({ trackingNumber, onTrackingNumberChange }) => (
  <div className="flex items-center mx-2">
    <label htmlFor="trackingNumber" className="mr-2">Tracking Number:</label>
    <input
      type="text"
      id="trackingNumber"
      value={trackingNumber}
      onChange={(e) => onTrackingNumberChange(e.target.value)}
      className="h-8 px-2 border rounded"
      placeholder="Enter Tracking Number"
    />
  </div>
);

