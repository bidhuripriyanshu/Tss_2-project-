import React, { useEffect, useState } from 'react';

const TransporterDashboard = () => {
    const [shipments, setShipments] = useState([]);

    useEffect(() => {
        const fetchShipments = async () => {
            const response = await fetch('http://localhost:5000/api/transporters/shipments');
            const data = await response.json();
            setShipments(data);
        };
        fetchShipments();
    }, []);

    return (
        <div>
            <h1>Transporter Dashboard</h1>
            <ul>
                {shipments.map((shipment) => (
                    <li key={shipment._id}>
                        {shipment.goodsDescription} - {shipment.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransporterDashboard;
