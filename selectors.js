const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    const seeded = document.getElementsByClassName("seed");
    console.log(seeded);
    seeded[0].innerText = "Apples used to be here"
    
    // 2. Get all seedless fruit elements
    // Your code here
    const seedless = document.querySelectorAll(".seedless");
    seedless.forEach(el => console.log(el));
    console.log(seedless);

    // 3. Get first seedless fruit element
    // Your code here
    const firstSeedless = document.querySelector(".seedless");
    console.log(firstSeedless);

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    //const firstSpan = document.querySelector("span");
    //console.log(firstSpan);

    const section = document.getElementById("two");
    console.log(section);
    const div = section.children[1];
    console.log(div);
    const para = div.children[0];
    console.log(para);
    const span = para.children;
    console.log(span);

    // 5. Get all children of element "wrapper"
    // Your code here
    const wrapperChildren = document.getElementById("wrapper");
    console.log(wrapperChildren);

    // 6. Get all odd number list items in the list
    // Your code here
    const odd = document.querySelectorAll(".odd");
    console.log(odd);

    // 7. Get all even number list items in the list
    // Your code here
    const even = document.querySelectorAll("ol li:not(.odd)");
    console.log(even);

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const sect = document.getElementById("three");
    console.log(sect);
    const children = sect.children[1];
    console.log(children);
    const google = children.querySelector("p a");
    console.log(google);

    // 9. Get "Amazon" list element
    // Your code here
    const amazon = document.getElementsByClassName("shopping");
    console.log(amazon);

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const sectionThree = document.getElementById("three");
    console.log(sectionThree);
    const listChildren = sectionThree.children[3];
    console.log(listChildren);

    //const unicornEls = document.querySelectorAll("#three ul li");
};

window.onload = select;