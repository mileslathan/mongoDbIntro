// Add a couple of ingredient documents to the ingredients collection
db.ingredients.insertMany({name: 'test1', unit: 'oz'}),({name: 'test2', unit: 'lbs'})