import React, { useState, useEffect } from "react";
import useStats from "./useStats";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { Trophy, Star, Code, GitBranch } from "lucide-react";

const StatsCard = ({ icon: Icon, title, value, className }) => (
  <div
    className={`bg-gray-800 p-6 rounded-lg flex items-center gap-4 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
  >
    <div className="p-3 bg-gray-700 rounded-lg">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-sm text-gray-400">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const ProfileStats = () => {
  // Mock data - replace with actual API calls to GitHub and LeetCode
  const leetcodeStats = {
    totalSolved: 245,
    easySolved: 89,
    mediumSolved: 132,
    hardSolved: 24,
    acceptanceRate: 67.8,
    contestRating: 1756,
    ranking: 156432,
  };

  const problemsData = [
    { name: "Easy", solved: 89, total: 120, fill: "#22C55E" },
    { name: "Medium", solved: 132, total: 180, fill: "#EAB308" },
    { name: "Hard", solved: 24, total: 60, fill: "#EF4444" },
  ];

  const languageData = [
    { name: "JavaScript", value: 40, color: "#F7DF1E" },
    { name: "Python", value: 25, color: "#3776AB" },
    { name: "Java", value: 20, color: "#007396" },
    { name: "C#", value: 15, color: "#239120" },
  ];

  const submissionData = [
    { category: "Runtime", value: 85 },
    { category: "Memory", value: 78 },
    { category: "Problem-Solving", value: 92 },
    { category: "Contest Rating", value: 75 },
    { category: "Consistency", value: 88 },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-4 gap-4">
        <StatsCard
          icon={Trophy}
          title="Problems Solved"
          value={leetcodeStats.totalSolved}
        />
        <StatsCard
          icon={Star}
          title="Contest Rating"
          value={leetcodeStats.contestRating}
        />
        <StatsCard
          icon={Code}
          title="Acceptance Rate"
          value={`${leetcodeStats.acceptanceRate}%`}
        />
        <StatsCard
          icon={GitBranch}
          title="Global Ranking"
          value={`#${leetcodeStats.ranking}`}
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Problem Solving Progress */}
        <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-xl font-bold mb-4">Problem Solving Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={problemsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1F2937", border: "none" }}
                itemStyle={{ color: "#E5E7EB" }}
              />
              <Bar dataKey="solved" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Language Distribution */}
        <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-xl font-bold mb-4">Language Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={languageData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, value }) => `${name} ${value}%`}
              >
                {languageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "#1F2937", border: "none" }}
                itemStyle={{ color: "#E5E7EB" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Stats */}
        <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-xl font-bold mb-4">Performance Stats</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={submissionData}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis dataKey="category" stroke="#9CA3AF" />
              <PolarRadiusAxis stroke="#9CA3AF" />
              <Radar
                name="Performance"
                dataKey="value"
                fill="#3B82F6"
                fillOpacity={0.6}
              />
              <Tooltip
                contentStyle={{ backgroundColor: "#1F2937", border: "none" }}
                itemStyle={{ color: "#E5E7EB" }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* GitHub Contribution Calendar */}
        <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-xl font-bold mb-4">GitHub Activity</h3>
          <img
            src={`https://ghchart.rshah.org/ghostp13409`}
            alt="GitHub Contribution Graph"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
