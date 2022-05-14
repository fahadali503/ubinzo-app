export const generateShadow = (shadowColor:string,backgroundColor:string) =>  {
    return {    
        shadowOffset: { width: 5, height: 5 },
        shadowColor,
        shadowOpacity: 1,
        elevation: 10,
        // background color must be set
        backgroundColor // invisible color
    }
}