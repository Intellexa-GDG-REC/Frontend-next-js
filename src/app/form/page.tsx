"use client"
import React, { useState, useEffect } from 'react';
import { Footer } from '@/components/footer';

export default function FormPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scriptId = 'typeform-script';
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = "//embed.typeform.com/next/embed.js";
      script.onload = () => setLoading(false);
      document.body.appendChild(script);
    }

    return () => {
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {loading ? (
        <div style={styles.loaderContainer}>
          <div style={styles.loader} aria-label="Loading">
            Loading...
          </div>
        </div>
      ) : (
        <div style={styles.typeformContainer} data-tf-live="01JM7Z78RDJGXPM9887AXCAWF6"></div>
      )}
    </>
  );
}

// Inline styles
const styles = {
  loaderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  loader: {
    border: '16px solid #f3f3f3',
    borderRadius: '50%',
    borderTop: '16px solid #3498db',
    width: '120px',
    height: '120px',
    animation: 'spin 2s linear infinite',
  },
  typeformContainer: {
    width: '60%',
    height: '60%',
    padding: '20px',
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
};

// Inject global styles for the animation
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(styleSheet);
}