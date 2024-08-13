/*
 /*
// TODO: This code is written to validate & test useMemo
-
-  function heavyComputation2(value: number) {
-    const complexvalue = useMemo(() => {
-      let sum = 0
-      for(let index = 0; index<value; index++) {
-        sum = sum + index
-      }
-      console.log('heavyComputation1 sum1 is ->' + sum)
-    }, [value])
-  }
-
-  function heavyComputation(value: number) {
-    let sum = 0
-
-    for(let index = 0; index<value; index++) {
-      sum = sum + index
-    }
-
-    console.log('heavyComputation sum is ->' + sum)
-  }
-
-  heavyComputation(100000)
-  heavyComputation2(1000000)
*/
