_sortingAlgorithms = { insertion : "window.sortingAlgoFn = async function sortingAlgo(arr) {\n" +
        "    \n" +
        "    // swap animation duration in ms.\n" +
        "    \n" +
        "\twindow.swapDelay = 50;\n" +
        "\t\n" +
        "\t// DO NOT EDIT ABOVE\n" +
        "\t// ===================================================\n" +
        "\t\n" +
        "                \t//////////////////////\n" +
        "                \t//  Insertion Sort  //\n" +
        "                \t//////////////////////\n" +
        "\t\n" +
        "\tfor(let i = 1; i < arr.length; i++) {\n" +
        "\t\twhile(i - 1 >= 0 && arr[i-1] > arr[i]) {\n" +
        "\t\t    // Must use 'await swap(a, b);' to swap elements.\n" +
        "\t\t\tawait swap(i, i - 1);\n" +
        "\t\t\ti--;\n" +
        "\t\t}\n" +
        "\t}\n" +
        "\t\n" +
        "\t// DO NOT EDIT BELOW\n" +
        "\t// ====================================================\n" +
        "\t\n" +
        "\treturn true;\n" +
        "}",
    selection : "window.sortingAlgoFn = async function sortingAlgo(arr) {\n" +
        "    \n" +
        "    // swap animation duration in ms.\n" +
        "    \n" +
        "\twindow.swapDelay = 50;\n" +
        "\t\n" +
        "\t// DO NOT EDIT ABOVE\n" +
        "\t// ===================================================\n" +
        "\t\n" +
        "                \t//////////////////////\n" +
        "                \t//  Selection Sort  //\n" +
        "                \t//////////////////////\n" +
        "\t\n" +
        "\tfor(let i = 0; i < arr.length; i++) {\n" +
        "\t    let minVal = arr[i];\n" +
        "\t    let minIndex = i;\n" +
        "\t\tfor(let j = i; j < arr.length; j++) {\n" +
        "\t\t    if (arr[j] < minVal) {\n" +
        "\t\t        minVal = arr[j];\n" +
        "\t\t        minIndex = j;\n" +
        "\t\t    }\n" +
        "\t\t}\n" +
        "\t\t// Must use 'await swap(a, b);' to swap elements.\n" +
        "\t\tawait swap(i, minIndex);\n" +
        "\t}\n" +
        "\t\n" +
        "\t// DO NOT EDIT BELOW\n" +
        "\t// ====================================================\n" +
        "\t\n" +
        "\treturn true;\n" +
        "}",
    bubble : "window.sortingAlgoFn = async function sortingAlgo(arr) {\n" +
        "    \n" +
        "    // swap animation duration in ms.\n" +
        "    \n" +
        "\twindow.swapDelay = 50;\n" +
        "\t\n" +
        "\t// DO NOT EDIT ABOVE\n" +
        "\t// ===================================================\n" +
        "\t\n" +
        "                \t///////////////////\n" +
        "                \t//  Bubble Sort  //\n" +
        "                \t///////////////////\n" +
        "    \n" +
        "    for (let i = 0; i < arr.length - 1; i++) {\n" +
        "        \n" +
        "        let swapped = false;\n" +
        "        \n" +
        "        for(let j = 0; j < arr.length - 1; j++) {\n" +
        "        \n" +
        "            if (arr[j] > arr[j+1]) {\n" +
        "    \t\t    // Must use 'await swap(a, b);' to swap elements.\n" +
        "                await swap(j, j + 1);\n" +
        "                swapped = true;\n" +
        "            }\n" +
        "            \n" +
        "        }\n" +
        "        \n" +
        "        if (!swapped) {\n" +
        "            break;\n" +
        "        }\n" +
        "    }\n" +
        "\t\n" +
        "\t// DO NOT EDIT BELOW\n" +
        "\t// ====================================================\n" +
        "\t\n" +
        "\treturn true;\n" +
        "}",
    quick : "window.sortingAlgoFn = async function sortingAlgo(arr) {\n" +
        "    \n" +
        "    // swap animation duration in ms.\n" +
        "    \n" +
        "\twindow.swapDelay = 100;\n" +
        "\t\n" +
        "\t// DO NOT EDIT ABOVE\n" +
        "\t// ===================================================\n" +
        "\t\n" +
        "                    //////////////////\n" +
        "                    //  Quick Sort  //\n" +
        "                    //////////////////\n" +
        "                    \n" +
        "    async function quickSort(arr, low, high) {\n" +
        "        if (low < high) {\n" +
        "            let pi = await partition(arr, low, high);\n" +
        "            \n" +
        "            await quickSort(arr, low, pi - 1);\n" +
        "            await quickSort(arr, pi + 1, high);\n" +
        "        }\n" +
        "    }\n" +
        "    \n" +
        "    async function partition(arr, low, high) {\n" +
        "        let pivot = arr[high];\n" +
        "        let i = low -1;\n" +
        "        \n" +
        "        for (let j = low; j < high; j++) {\n" +
        "            if (arr[j] < pivot) {\n" +
        "                i++;\n" +
        "                await swap(i, j);\n" +
        "            }\n" +
        "        }\n" +
        "        await swap(i + 1, high);\n" +
        "        return (i + 1);\n" +
        "    }\n" +
        "    \n" +
        "    await quickSort(arr, 0, arr.length - 1);\n" +
        "\t\n" +
        "\t// DO NOT EDIT BELOW\n" +
        "\t// ====================================================\n" +
        "\t\n" +
        "\treturn true;\n" +
        "}",
    genome : "window.sortingAlgoFn = async function sortingAlgo(arr) {\n" +
        "    \n" +
        "    // swap animation duration in ms.\n" +
        "    \n" +
        "\twindow.swapDelay = 50;\n" +
        "\t\n" +
        "\t// DO NOT EDIT ABOVE\n" +
        "\t// ===================================================\n" +
        "\t\n" +
        "                \t///////////////////\n" +
        "                \t//  Genome Sort  //\n" +
        "                \t///////////////////\n" +
        "    let index = 0;\n" +
        "                \t\n" +
        "    while (index < arr.length) { \n" +
        "        if (index === 0) \n" +
        "            index++; \n" +
        "        if (arr[index] >= arr[index - 1]) \n" +
        "            index++; \n" +
        "        else { \n" +
        "            await swap(index, index - 1); \n" +
        "            index--; \n" +
        "        } \n" +
        "    } \n" +
        "\t\n" +
        "\t// DO NOT EDIT BELOW\n" +
        "\t// ====================================================\n" +
        "\t\n" +
        "\treturn true;\n" +
        "}",
    bogo : "window.sortingAlgoFn = async function sortingAlgo(arr) {\n" +
        "    \n" +
        "    // swap animation duration in ms.\n" +
        "    \n" +
        "\twindow.swapDelay = 50;\n" +
        "\t\n" +
        "\t// DO NOT EDIT ABOVE\n" +
        "\t// ===================================================\n" +
        "\t\n" +
        "                \t/////////////////\n" +
        "                \t//  Bogo Sort  //\n" +
        "                \t/////////////////\n" +
        "    \n" +
        "    function isSorted(arr, n) {\n" +
        "        while ( --n > 1 ) {\n" +
        "            if (arr[n] < arr[n-1]) \n" +
        "                return false;\n" +
        "        }\n" +
        "        return true; \n" +
        "    }\n" +
        "    \n" +
        "    function getRandomInt(max) {\n" +
        "        return Math.floor(Math.random() * Math.floor(max));\n" +
        "    }\n" +
        "    \n" +
        "    while(!isSorted(arr, arr.length)) {\n" +
        "        for (let i = 0; i < arr.length; i++) {\n" +
        "            await swap(i, getRandomInt(arr.length)); \n" +
        "        }\n" +
        "    }\n" +
        "\n" +
        "\t// DO NOT EDIT BELOW\n" +
        "\t// ====================================================\n" +
        "\t\n" +
        "\treturn true;\n" +
        "}"

};

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
editor.setValue(_sortingAlgorithms.quick, 1);


$(function() {
    // Code here

    var loader = new THREE.FileLoader();
    loader.load( 'app.json', function ( text ) {

        var player = new APP.Player();
        player.load( JSON.parse( text ) );

        var playerDOM = $(player.dom);

        player.setSize( playerDOM.outerWidth(), playerDOM.outerHeight() );
        player.play();

        document.body.appendChild( player.dom );

        window.addEventListener( 'resize', function () {
            player.setSize( playerDOM.outerWidth(), playerDOM.outerHeight() );
        } );

        const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

        window.sort = async function() {
            eval(editor.getValue());

            await window.sortingAlgoFn(window.barArrayInt);
            setTimeout(function(){
                window.sortCompleted();
            }, 500);

        };
    } );
});