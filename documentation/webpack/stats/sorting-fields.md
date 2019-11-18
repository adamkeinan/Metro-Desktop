Sorting fields
For assetsSort, chunksSort and modulesSort there are several possible fields that you can sort items by:

id is the item's id;
name - a item's name that was assigned to it upon importing;
size - a size of item in bytes;
chunks - what chunks the item originates from (for example, if there are multiple subchunks for one chunk - the subchunks will be grouped together according to their main chunk);
errors - amount of errors in items;
warnings - amount of warnings in items;
failed - whether the item has failed compilation;
cacheable - whether the item is cacheable;
built - whether the asset has been built;
prefetched - whether the asset will be prefetched;
optional - whether the asset is optional;
identifier - identifier of the item;
index - item's processing index;
index2
profile
issuer - an identifier of the issuer;
issuerId - an id of the issuer;
issuerName - a name of the issuer;
issuerPath - a full issuer object. There's no real need to sort by this field;