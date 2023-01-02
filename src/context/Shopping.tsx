import { useContext, ReactNode, createContext, useState } from "react"
import { isTemplateExpression } from "typescript"

type ShoppingProviderProps={
    children:ReactNode
    }

    type PanierItem = {
        id:number
        quantity:number

    }
type ShoppingContext = {
    openPanier:() => void
    closePanier: () => void
   
    getItemQuantity:(id:number) => number
    increasePanierQuantity:(id:number)=> void
    decreasePanierQuantity:(id:number)=> void
    removeFromPanier:(id:number) => void
    quantityDansPanier:number
    panierItems:PanierItem[]
}

const ShoppingContext = createContext({} as ShoppingContext)

export function useShopping(){
    return useContext(ShoppingContext)
}

export function ShoppingProvider({children}:ShoppingProviderProps){
    const[panierItems, setPanierItems] = useState<PanierItem[]>([])
    const[isOuvert, setIsOuvert] = useState(false)

const openPanier = () => setIsOuvert(true)
const closePanier = () => setIsOuvert(false)
    const quantityDansPanier = panierItems.reduce((quantity, item) => item.quantity + quantity,0)
    function getItemQuantity(id:number){
        return panierItems.find(item =>  item.id === id)?.quantity || 0
    }

    function increasePanierQuantity(id:number){
        setPanierItems(currItems => {
            if(currItems.find(item => item.id === id) == null){
                return [...currItems, {id, quantity:1 }]
            }
            else{ 
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                 }
                    else {
                        return item
                    }
                })
           }
        })
    }

    function decreasePanierQuantity(id:number){
        setPanierItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity === 1){
                return currItems.filter(item => item.id !== id)
            }
            else{ 
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                 }
                    else {
                        return item
                    }
                })
           }
        })
    }
function removeFromPanier(id:number){
    setPanierItems(currItems => {
    return currItems.filter(item => item.id !==id)
    })
}

    return <ShoppingContext.Provider value={{getItemQuantity, increasePanierQuantity, decreasePanierQuantity, removeFromPanier, 
     openPanier, closePanier
     ,panierItems,
    quantityDansPanier
   
    }}>
        {children}
    </ShoppingContext.Provider>
}

