'use client';

import { useEffect, useState } from 'react';

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080';

/** Uploaded files are stored as "/uploads/x.png" and served by the Go API. */
export const assetUrl = (src: string) => (src?.startsWith('/uploads/') ? API_URL + src : src);

/**
 * Loads a collection from the Go API (sorted by "order").
 * - while loading: returns []
 * - API unreachable (e.g. the deployed site, no backend): returns `fallback`
 */
export function useCollection<T>(name: string, fallback: T[]): T[] {
    const [items, setItems] = useState<T[]>([]);

    useEffect(() => {
        const ctl = new AbortController();
        fetch(`${API_URL}/api/public/${name}?limit=200&sort=order`, { signal: ctl.signal })
            .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
            .then((d) => setItems(d.documents as T[]))
            .catch((e) => {
                if (e.name !== 'AbortError') setItems(fallback);
            });
        return () => ctl.abort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    return items;
}
