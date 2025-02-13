import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'City A', cost: 1200 },
  { name: 'City B', cost: 1500 },
  { name: 'City C', cost: 1000 },
];

const Charts = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="cost" fill="#3182CE" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Charts;
