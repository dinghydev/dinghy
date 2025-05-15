export const importJson=async (file:string)=> (await import(file,{ with: { type: 'json' }})).default
