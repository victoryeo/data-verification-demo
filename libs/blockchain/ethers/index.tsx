import { ethers } from "ethers";
import khi from "../abi/khi.json";
import { createContext, useState, useContext, useEffect } from "react";

export const ContractContext = createContext<any | undefined>(undefined);

export function ContractProvider({ children }: any) {
  const [contractInstance, setContractInstance] = useState<any>();
  const [provider, setProvider] = useState<any>();
  const [Wallet, setWallet] = useState<any>();


  const pvtKey = `${process.env.NEXT_PUBLIC_PVT_KEY}`;
  const rpc = `${process.env.NEXT_PUBLIC_RPC_URL}/${process.env.NEXT_PUBLIC_API_KEY}`;
  const address = `${process.env.NEXT_PUBLIC_SC_ADDRESS}`;


  useEffect(()=>{
    const provider = new ethers.JsonRpcProvider(rpc);
    setProvider(provider)

    const signer = new ethers.Wallet(pvtKey, provider);
    setWallet(signer)

    const contract = new ethers.Contract(address, khi, signer);
    setContractInstance(contract);

  }, []);

  return (
    <ContractContext.Provider
      value={{
        contractInstance,
        provider,
        Wallet
      }}
    >
      {children}
    </ContractContext.Provider>
  );
}

export function useContractContext() {
  const context = useContext(ContractContext);
  if (!context) {
    throw new Error(
      "You must use AppProvider in order to consume this context"
    );
  }
  return context;
}
