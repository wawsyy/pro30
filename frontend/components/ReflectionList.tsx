"use client";

import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useReflectionContract } from "../hooks/useReflectionContract";
import "../styles/ReflectionList.css";

interface ReflectionEntry {
  id: number;
  content: string;
  stressLevel: number;
  achievementLevel: number;
  mindsetPositive: boolean;
  timestamp: number;
  encrypted: boolean;
}

interface ReflectionListProps {
  refreshTrigger?: number;
}

export const ReflectionList: React.FC<ReflectionListProps> = ({ refreshTrigger = 0 }) => {
  const { address } = useAccount();
  const { getUserEntries, getEntry, decryptEntry, isLoading } = useReflectionContract();
  const [entries, setEntries] = useState<ReflectionEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [decryptingId, setDecryptingId] = useState<number | null>(null);

  const loadEntries = React.useCallback(async () => {
    if (!address) {
      setEntries([]);
      return;
    }

    setLoading(true);
    try {
      console.log("[ReflectionList] Loading entries for address:", address);
      const entryIds = await getUserEntries();
      console.log("[ReflectionList] Loaded entry IDs:", entryIds, "Type:", typeof entryIds, "Length:", entryIds?.length);
      
      if (!entryIds || entryIds.length === 0) {
        console.log("[ReflectionList] No entries found");
        setEntries([]);
        return;
      }
      
      const entriesData: ReflectionEntry[] = [];

      for (const id of entryIds) {
        const entryId = typeof id === 'bigint' ? Number(id) : Number(id);
        entriesData.push({
          id: entryId,
          content: "",
          stressLevel: 0,
          achievementLevel: 0,
          mindsetPositive: false,
          timestamp: 0,
          encrypted: true,
        });
      }

      console.log("[ReflectionList] Setting entries:", entriesData);
      setEntries(entriesData);
    } catch (error: any) {
      // Only log real errors, ignore network errors from external services
      const errorMsg = error?.message?.toLowerCase() || String(error).toLowerCase();
      if (!errorMsg.includes("failed to fetch") && !errorMsg.includes("network")) {
        console.error("[ReflectionList] Error loading entries:", error);
      }
    } finally {
      setLoading(false);
    }
  }, [address, getUserEntries]);

  const handleDecrypt = async (entryId: number) => {
    setDecryptingId(entryId);
    try {
      const decrypted = await decryptEntry(entryId);
      setEntries((prev) =>
        prev.map((entry) =>
          entry.id === entryId
            ? {
                ...entry,
                ...decrypted,
                encrypted: false,
              }
            : entry
        )
      );
    } catch (error: any) {
      // Only log real errors, ignore network errors from external services
      const errorMsg = error?.message?.toLowerCase() || String(error).toLowerCase();
      if (!errorMsg.includes("failed to fetch") && !errorMsg.includes("network")) {
        console.error("Error decrypting entry:", error);
      }
      // Don't show error to user if it's just a network issue
    } finally {
      setDecryptingId(null);
    }
  };

  useEffect(() => {
    console.log("[ReflectionList] useEffect triggered, address:", address, "refreshTrigger:", refreshTrigger);
    loadEntries();
  }, [address, refreshTrigger, loadEntries]);

  if (loading) {
    return (
      <div className="reflection-list">
        <h2 className="reflection-list-title">My Reflections</h2>
        <p className="text-center py-8">Loading entries...</p>
      </div>
    );
  }

  if (entries.length === 0) {
    return (
      <div className="reflection-list">
        <h2 className="reflection-list-title">My Reflections</h2>
        <p className="text-center py-8 text-gray-600">
          No reflection entries yet. Create your first entry above!
        </p>
      </div>
    );
  }

  return (
    <div className="reflection-list">
      <h2 className="reflection-list-title">My Reflections</h2>
      <div className="reflection-entries">
        {entries.map((entry) => (
          <div key={entry.id} className="reflection-entry">
            <div className="reflection-entry-header">
              <span className="reflection-entry-id">Entry #{entry.id}</span>
              {entry.timestamp > 0 && (
                <span className="reflection-entry-date">
                  {new Date(entry.timestamp * 1000).toLocaleDateString()}
                </span>
              )}
            </div>

            {entry.encrypted ? (
              <div className="reflection-entry-encrypted">
                <p className="text-gray-500 mb-4">
                  This entry is encrypted. Click decrypt to view your reflection.
                </p>
                <button
                  onClick={() => handleDecrypt(entry.id)}
                  disabled={decryptingId === entry.id || isLoading}
                  className="reflection-decrypt-button"
                >
                  {decryptingId === entry.id ? "Decrypting..." : "Decrypt Entry"}
                </button>
              </div>
            ) : (
              <div className="reflection-entry-content">
                <div className="reflection-entry-text">
                  <strong>Reflection:</strong>
                  <p>{entry.content}</p>
                </div>
                <div className="reflection-entry-metrics">
                  <div className="reflection-metric">
                    <span className="reflection-metric-label">Stress Level:</span>
                    <span className="reflection-metric-value">{entry.stressLevel}%</span>
                  </div>
                  <div className="reflection-metric">
                    <span className="reflection-metric-label">Achievement Level:</span>
                    <span className="reflection-metric-value">{entry.achievementLevel}%</span>
                  </div>
                  <div className="reflection-metric">
                    <span className="reflection-metric-label">Mindset:</span>
                    <span className={`reflection-metric-value ${entry.mindsetPositive ? "text-green-600" : "text-red-600"}`}>
                      {entry.mindsetPositive ? "Positive" : "Needs Adjustment"}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

