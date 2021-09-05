const toLowerCase = ( ...args ) => (
    args.join( '' ).toLowerCase()
)   

const merger =( ...args ) => (
    args.reduce( ( acc, obj ) => ( { ...acc, ...obj }) )
)

export {
    toLowerCase,
    merger
}