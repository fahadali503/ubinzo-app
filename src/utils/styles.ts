interface IShadowOffset {
    width:number| undefined;
    height:number | undefined;
}

export const generateShadow = (shadowColor:string,backgroundColor:string='white',shadowOpacity=1,shadowOffset:IShadowOffset = {height:5,width:5}) =>  {
    return {    
        shadowOffset,
        shadowColor,
        shadowOpacity,
        elevation: 10,
        // background color must be set
        backgroundColor // invisible color
    }
}