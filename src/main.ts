const TREE_SIZE: number = 11;
const MAX_COLORS: number = 5;
for (let i: number = 0; i < TREE_SIZE; i++) 
    {
        for (let j = 0; j <= i; j++)
            {
                console.log(i%MAX_COLORS+1);
            } 
        }