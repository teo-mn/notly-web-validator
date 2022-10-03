import React, {createContext, useEffect, useState} from "react";

const localeState = { locale: 'mn', onChange: (val: string) => {}};
export const LocaleContext = createContext(localeState);


export const LocaleProvider: React.FC = (props) => {
  const { children } = props;

  const [locale, setLocale] = useState('mn');

  useEffect(() => {
    setLocale(localStorage.getItem('locale') || 'mn');
  }, []);

  const onChangeLocale = (value: string) => {
    setLocale(value);
    localStorage.setItem('locale', value);
    window.dispatchEvent(new Event('storage'));
  }

  return (<LocaleContext.Provider value={{ locale, onChange: onChangeLocale }}>
    {children}
  </LocaleContext.Provider>)
}

