const names = [ "Youtube" , "Facebook","Netflix","Amazon","Google"];

// FOR-OF loop --> for Arrays
for(const n of names )
{
    console.log(n);
}

// FOR-IN used for Objects
const symbols = {
    yt : "Youtube",
    ig : "Instagram",
    az : "Amazon",
    fb : "facebook",
}

// gives the Keys
for( const n in symbols)
{
    console.log(n);
}
for(const n in symbols)
{
    console.log(`Key is ${n} and Value is ${symbols[n]}` );
}
