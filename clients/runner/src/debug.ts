let isDebug=Boolean(Deno.env.get('DEBUG'))


const resolveArg=(arg:any)=>{
  if(typeof arg==='function'){
    return arg()
  }else{
    return arg
  }
}

export const setDebug=(debug:any)=>{
  isDebug=Boolean(debug)
}

export const debug=(msg:string, ...args:any[])=>{
  if(isDebug){
    const formattedMsg = msg.replace(/\{(\d+)\}/g, (match, p1) => resolveArg(args[parseInt(p1)]))
    console.log('DEBUG', new Date(), formattedMsg)
  }
}
