import { useState, useEffect } from "react";
import axios from "axios";

const useStats = () => {
  const [githubStats, setGithubStats] = useState(null);
  const [leetcodeStats, setLeetcodeStats] = useState(null);

  useEffect(() => {
    const fetchGithubStats = async () => {
      const response = await axios.get(
        "https://api.github.com/users/ghostp13409"
      );
      setGithubStats(response.data);
    };

    const fetchLeetcodeStats = async () => {
      const response = await axios.post("https://leetcode.com/graphql", {
        query: `
          {
            matchedUser(username: "ghostp134") {
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
          }
        `,
      });
      setLeetcodeStats(
        response.data.data.matchedUser.submitStats.acSubmissionNum
      );
    };

    fetchGithubStats();
    fetchLeetcodeStats();
  }, []);

  return { githubStats, leetcodeStats };
};

export default useStats;
