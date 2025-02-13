const Sidebar = () => {
    return (
      <div>
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        <select className="w-full p-2 mb-4 border rounded text-gray-800">
          <option value="city">Select City</option>
          <option value="cost">Cost of Living</option>
          <option value="safety">Safety Rating</option>
        </select>
        <h3 className="text-lg font-semibold mt-4">Statistics</h3>
        <p>📍 Population: 500,000</p>
        <p>💰 Median Income: $60,000</p>
        <p>🏠 Housing Index: 78.5</p>
      </div>
    );
  };
  
  export default Sidebar;
  