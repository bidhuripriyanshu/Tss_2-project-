import React from 'react';

const UserDashboard = () => {
    return (
        <div>
            <h1>User Dashboard</h1>
            <form>
                <input type="text" placeholder="Drop-off Location" />
                <input type="datetime-local" placeholder="Date and Time" />
                <textarea placeholder="Goods Description"></textarea>
                <input type="text" placeholder="Vehicle Type" />
                <button type="submit">Submit Delivery Request</button>
            </form>
        </div>
    );
};

export default UserDashboard;
