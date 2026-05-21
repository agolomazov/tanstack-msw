import { setLocale, getLocale } from "../../paraglide/runtime";

export const LangSwitcher = () => {
  const currentLocale = getLocale();

  return (
    <button onClick={() => setLocale(currentLocale === 'en' ? 'de' : 'en', { reload: true })} className="border rounded-lg border-gray-200 py-1 px-2 cursor-pointer">{currentLocale.toUpperCase()}</button>
  );
}