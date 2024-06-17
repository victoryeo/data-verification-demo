import { createContext, useState, useContext, useEffect } from "react";

export const FileContext = createContext<any | undefined>(undefined);

export function FileProvider({ children }: any) {
  const [file, setFiles] = useState<File>();


  return (
    <FileContext.Provider
      value={{
        file,
        setFiles
      }}
    >
      {children}
    </FileContext.Provider>
  );
}

export function useFileContext() {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error(
      "You must use AppProvider in order to consume this context"
    );
  }
  return context;
}
