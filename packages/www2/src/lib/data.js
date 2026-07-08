// Call sites pass the result of import.meta.glob(..., { eager: true }) —
// the glob pattern must be a static string at the call site for Vite to
// analyze it, so it can't be parameterized inside this helper.
export function loadData(modules) {
  return Object.values(modules)
    .map(mod => {
      const entry = mod.default ?? mod;
      return { ...entry, date: new Date(entry.date + 'T00:00:00Z') };
    })
    .filter(entry => !entry.exclude)
    .sort((a, b) => b.date - a.date);
}
