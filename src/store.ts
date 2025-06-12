import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface FcState {
    ismute: boolean
    ischaropen: boolean
    setismute: () => void
    setischaropen: () => void
    setmuted: (value:boolean) => void
}

const useStore = create<FcState>()(
    persist(
        (set)=>({
            ismute:false,
            ischaropen:false,
            setischaropen: ()=> set((state)=>({ischaropen: !state.ischaropen})),
            setismute: ()=> set((state)=>({ismute:!state.ismute})),
            setmuted:(value)=> set(()=>({ismute:value}))
        }),
        {name:"options",storage: createJSONStorage(() => sessionStorage)}
        
    )
)

export default useStore