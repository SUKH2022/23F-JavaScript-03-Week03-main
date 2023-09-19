// STEP 1: Declare and initialize variables
		// STEP 1a: Grab the parts of the DOM that we need to build the invoice
        var productBody= document.querySelector("tbody");
        var finalPrice= document.querySelector("tfoot td");
		// STEP 1b: Build the products array in the format 'Product Name: 0.00'
        var productArray=["Shirts: 19.99", "Pants: 30.61", "Caps: 7.88", "T-Shirts: 15.50"];
		// STEP 1c: Set up invoiceTotal variable - start at zero
        var invoiceTotal= 0;

		// STEP 2: Build a loop to iterate through the products array
        for(let i=0;i<productArray.length;i++){
            // console.log(productArray[i]);

			// STEP 3: Break apart the product name from the price for each item with split()
            var productItemArray= productArray[i].split(": ");
            console.log(productItemArray);
			// STEP 4: Now we have an array as an element of an array - set the second array element to the product price (as type number)
            // Capture each price as variables
            var productPrice= Number(productItemArray[1]);
            console.log(productPrice);
			
			// STEP 5: Add the price of this product to the invoice total
            // invoiceTotal= invoiceTotal+productPrice
            // invoiceTotal= 0+19.99
            // invoiceTotal= 19.99 + 30.61 and so on
            invoiceTotal += productPrice;
            
			// STEP 6: Capture each product name variables 
            var productDesc= productItemArray[0];
			
			// STEP 7: Create a TR element for this product and price in the invoice table
            // it will create an html element <tr></tr>
            var tableTr= document.createElement("tr");

			// STEP 8: Build the string that contains two TD elements each containing one of the item description, and the item price
             // it will create an html element <td></td><td></td>
            var tableTd= "<td>"+ productDesc+ "</td><td>$"+ productPrice+ "</td>";
    
			
			// STEP 9: Set the above string as the innerHTML of the new TR element, and then append the new element to the table body (var productList)
            tableTr.innerHTML= tableTd;
            console.log(tableTr);
			productBody.appendChild(tableTr);
			// STEP 10: Set the total cost of the invoice as the textContent of the TD in the TFOOT (var totalData), rounding the number to two decimal places
            finalPrice.textContent="$"+invoiceTotal.toFixed(2);
        }