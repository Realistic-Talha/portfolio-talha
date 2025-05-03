"use client"

import { useEffect } from 'react'

export function FaviconHelper() {
  useEffect(() => {
    // Force favicon refresh by removing and re-adding link elements
    const links = document.querySelectorAll("link[rel*='icon']");
    links.forEach(link => link.parentNode?.removeChild(link));
    
    // Add favicon link manually
    const link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '/favicon.ico?v=' + new Date().getTime(); // Add timestamp to bust cache
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);
  
  return null;
}
