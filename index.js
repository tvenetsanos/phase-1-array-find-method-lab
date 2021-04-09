function superbowlWin(record){
    const result = record.find( ({ result }) => result === 'W' )
    if (result == undefined)
       return result
    return result.year
}

