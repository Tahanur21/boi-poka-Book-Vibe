const getStoredWishList = () =>{
    const storedWishListStr = localStorage.getItem('wish-list');
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else{
        return [];
    }
}

const addToStoredWishList = (id)=>{
    const storedWishLIst = getStoredWishList();
    if(storedWishLIst.includes(id)){
        console.log(id,'already existed');
    }
    else{
        storedWishLIst.push(id);
        const storedWishListStr = JSON.stringify(storedWishLIst);
        localStorage.setItem('wish-list',storedWishListStr);
        
    }
}

export {addToStoredWishList};