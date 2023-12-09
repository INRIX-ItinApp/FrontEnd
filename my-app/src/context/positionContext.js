import { useState, createContext, useContext } from "react";

export const LocationContext = createContext(null);

export default function LocationContextProvider({children}) {
    //   const [id, setID] = useState(0);
    const [currentLocation, setStart] = useState([-122.4194, 37.7749]);
  
    return (
      <LocationContext.Provider
        value={{
          currentLocation,
          setStart,
        }}
      >
        {children}
      </LocationContext.Provider>
    );
  }
  
  export function useLocationContext() {
    //hook to check if the context exists within scope
    const idContext = useContext(LocationContext);
    if (!idContext) {
      throw new Error("useLocationContext must be used within a LocationContextProvider");
    }
    return idContext;
  }