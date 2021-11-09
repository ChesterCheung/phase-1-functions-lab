function distanceFromHqInBlocks(block){
    const hq = 42;
    if (block > hq){
        return block - hq
    }else{
        return hq - block
    }    
}

function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block) * 264
  }

 
  function distanceTravelledInFeet(start, destination){
  if (start > destination){
      return ((start - destination) * 264)
  }else{
      return ((destination - start) * 264)

  }
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet <= 400){
        return (distanceFromHqInFeet * 0)
    }else if (distanceFromHqInFeet < 2000)
        return (distanceFromHqInFeet * 0.2)
    else if (distanceFromHqInFeet > 2000)
        return 25
    else
        return "cannot travel that far"
}

        
