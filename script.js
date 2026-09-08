// ===============================
// CollegeBuddy - Website Functions
// ===============================

// Simple message function
function showMessage(sectionName) {
    alert(
        sectionName +
        " section is ready. Yahan real resources add kiye ja sakte hain."
    );
}


// ===============================
// Search Function
// ===============================

function searchContent() {

    const input = document.getElementById("searchInput");

    if (!input) {
        return;
    }

    const searchText = input.value.trim().toLowerCase();

    if (searchText === "") {
        alert("Please kuch search karo.");
        return;
    }


    // Notes
    if (
        searchText.includes("note") ||
        searchText.includes("notes")
    ) {

        const notes = document.getElementById("notes");

        if (notes) {
            notes.scrollIntoView({
                behavior: "smooth"
            });
        }

        return;
    }


    // Study Material
    if (
        searchText.includes("study") ||
        searchText.includes("book") ||
        searchText.includes("syllabus") ||
        searchText.includes("material")
    ) {

        const study = document.getElementById("study");

        if (study) {
            study.scrollIntoView({
                behavior: "smooth"
            });
        }

        return;
    }


    // Jobs
    if (
        searchText.includes("job") ||
        searchText.includes("jobs")
    ) {

        const jobs = document.getElementById("jobs");

        if (jobs) {
            jobs.scrollIntoView({
                behavior: "smooth"
            });
        }

        return;
    }


    // Internships
    if (
        searchText.includes("internship") ||
        searchText.includes("internships")
    ) {

        const internships =
            document.getElementById("internships");

        if (internships) {
            internships.scrollIntoView({
                behavior: "smooth"
            });
        }

        return;
    }


    alert(
        "Sorry, abhi is search ke liye resource nahi mila."
    );
}


// ===============================
// Notes Filter
// ===============================

function filterNotes() {

    const course =
        document.getElementById("courseFilter").value;

    const semester =
        document.getElementById("semesterFilter").value;

    const cards =
        document.querySelectorAll(".note-card");


    cards.forEach(function(card) {

        const cardCourse =
            card.getAttribute("data-course");

        const cardSemester =
            card.getAttribute("data-semester");


        const courseMatch =
            course === "all" ||
            cardCourse === course;


        const semesterMatch =
            semester === "all" ||
            cardSemester === semester;


        if (courseMatch && semesterMatch) {

            card.classList.remove("hidden");

        } else {

            card.classList.add("hidden");

        }

    });

}function openNote(noteName) {

    const notesWindow = window.open("", "_blank");

    let title = noteName;
    let content = "";

    // =========================
    // B.Tech CSE
    // =========================

    if (noteName === "B.Tech CSE Programming") {

        title = "B.Tech CSE - Programming Fundamentals";

        content = `
            <h2>💻 B.Tech CSE - Programming Fundamentals</h2>

            <h2>1. Introduction to Programming</h2>
            <p>
                Programming is the process of writing instructions that
                tell a computer what to do.
            </p>

            <div class="important">
                <b>Exam Point:</b>
                A program is a set of instructions written to solve a
                particular problem.
            </div>

            <h2>2. Algorithm</h2>
            <p>
                An algorithm is a step-by-step procedure used to solve
                a particular problem.
            </p>

            <h3>Characteristics of Algorithm</h3>
            <ul>
                <li>It should have clear steps.</li>
                <li>It should have a definite beginning and end.</li>
                <li>Each step should be understandable.</li>
                <li>It should produce a result.</li>
            </ul>

            <h2>3. Variables</h2>
            <p>
                A variable is a named memory location used to store data.
            </p>

            <pre>
int age = 20;
float marks = 85.5;
char grade = 'A';
            </pre>

            <h2>4. Data Types</h2>
            <ul>
                <li><b>int</b> - Integer values</li>
                <li><b>float</b> - Decimal values</li>
                <li><b>char</b> - Single character</li>
                <li><b>double</b> - Large decimal values</li>
            </ul>

            <h2>5. Operators</h2>
            <ul>
                <li>Arithmetic: +, -, *, /, %</li>
                <li>Relational: &lt;, &gt;, ==, !=</li>
                <li>Logical: &amp;&amp;, ||, !</li>
                <li>Assignment: =, +=, -=, *=</li>
            </ul>

            <h2>6. If-Else Statement</h2>

            <pre>
#include &lt;stdio.h&gt;

int main() {

    int age = 20;

    if (age &gt;= 18) {
        printf("Eligible to vote");
    } else {
        printf("Not eligible to vote");
    }

    return 0;
}
            </pre>

            <h2>7. Loops</h2>

            <p>
                Loops are used to execute a block of code repeatedly.
            </p>

            <ul>
                <li>for loop</li>
                <li>while loop</li>
                <li>do-while loop</li>
            </ul>

            <pre>
for(int i = 1; i &lt;= 5; i++) {
    printf("%d\\n", i);
}
            </pre>

            <h2>8. Functions</h2>

            <p>
                A function is a reusable block of code that performs
                a specific task.
            </p>

            <pre>
int add(int a, int b) {
    return a + b;
}
            </pre>

            <h2>9. Arrays</h2>

            <p>
                An array stores multiple values of the same data type.
            </p>

            <pre>
int marks[5] = {80, 75, 90, 85, 70};
            </pre>

            <h2>10. Strings</h2>

            <p>
                A string is a collection of characters.
            </p>

            <pre>
char name[] = "CollegeBuddy";
            </pre>

            <h2>11. Pointers</h2>

            <p>
                A pointer is a variable that stores the memory address
                of another variable.
            </p>

            <pre>
int age = 20;
int *ptr = &age;
            </pre>

            <h2>📌 Important Exam Questions</h2>

            <ol>
                <li>What is programming?</li>
                <li>What is an algorithm?</li>
                <li>Explain variables and data types.</li>
                <li>Explain different operators.</li>
                <li>Explain if-else statement.</li>
                <li>What are loops?</li>
                <li>What is a function?</li>
                <li>Explain arrays.</li>
                <li>What is a string?</li>
                <li>What is a pointer?</li>
            </ol>
        `;
    }


    // =========================
    // B.Tech Mathematics
    // =========================

    else if (noteName === "B.Tech Mathematics") {

        title = "B.Tech Mathematics - Engineering Mathematics";

        content = `
            <h2>🧮 B.Tech Mathematics - Engineering Mathematics</h2>

            <h2>1. Differential Calculus</h2>

            <p>
                Differential calculus deals with the rate of change
                of a function.
            </p>

            <div class="important">
                <b>Important Formula:</b><br>
                d/dx (xⁿ) = n xⁿ⁻¹
            </div>

            <h2>2. Integration</h2>

            <p>
                Integration is the reverse process of differentiation.
            </p>

            <div class="important">
                <b>Important Formula:</b><br>
                ∫ xⁿ dx = xⁿ⁺¹ / (n+1) + C
            </div>

            <h2>3. Matrices</h2>

            <p>
                A matrix is a rectangular arrangement of numbers
                in rows and columns.
            </p>

            <pre>
A = [ 1  2 ]
    [ 3  4 ]
            </pre>

            <h2>4. Determinants</h2>

            <p>
                For a 2 × 2 matrix:
            </p>

            <pre>
| a  b |
| c  d |

Determinant = ad - bc
            </pre>

            <h2>5. Differential Equations</h2>

            <p>
                A differential equation contains one or more derivatives
                of an unknown function.
            </p>

            <h2>📌 Important Exam Questions</h2>

            <ol>
                <li>Define differentiation.</li>
                <li>Explain basic differentiation formulas.</li>
                <li>Define integration.</li>
                <li>Explain matrices.</li>
                <li>Find the determinant of a 2 × 2 matrix.</li>
                <li>What is a differential equation?</li>
            </ol>
        `;
    }


    // =========================
    // BCA
    // =========================

    else if (noteName === "BCA Computer Fundamentals") {

        title = "BCA - Computer Fundamentals";

        content = `
            <h2>💻 BCA - Computer Fundamentals</h2>

            <h2>1. Computer</h2>

            <p>
                A computer is an electronic device that accepts data,
                processes it and produces useful information.
            </p>

            <h2>2. Characteristics of Computer</h2>

            <ul>
                <li>High speed</li>
                <li>Accuracy</li>
                <li>Storage capacity</li>
                <li>Automation</li>
                <li>Reliability</li>
            </ul>

            <h2>3. Hardware</h2>

            <p>
                Hardware refers to the physical parts of a computer.
            </p>

            <ul>
                <li>Keyboard</li>
                <li>Mouse</li>
                <li>Monitor</li>
                <li>CPU</li>
                <li>Printer</li>
            </ul>

            <h2>4. Software</h2>

            <p>
                Software is a collection of programs and instructions
                used to operate a computer.
            </p>

            <h3>Types of Software</h3>

            <ul>
                <li>System Software</li>
                <li>Application Software</li>
            </ul>

            <h2>5. Operating System</h2>

            <p>
                An operating system is system software that manages
                computer hardware and software resources.
            </p>

            <h2>📌 Important Exam Questions</h2>

            <ol>
                <li>What is a computer?</li>
                <li>Explain characteristics of computers.</li>
                <li>What is hardware?</li>
                <li>What is software?</li>
                <li>Explain types of software.</li>
                <li>What is an operating system?</li>
            </ol>
        `;
    }


    // =========================
    // BBA
    // =========================

    else if (noteName === "BBA Business Management") {

        title = "BBA - Business Management";

        content = `
            <h2>📊 BBA - Business Management</h2>

            <h2>1. Introduction to Management</h2>

            <p>
                Management is the process of planning, organizing,
                directing and controlling resources to achieve goals.
            </p>

            <h2>2. Functions of Management</h2>

            <ul>
                <li>Planning</li>
                <li>Organizing</li>
                <li>Staffing</li>
                <li>Directing</li>
                <li>Controlling</li>
            </ul>

            <h2>3. Planning</h2>

            <p>
                Planning means deciding in advance what has to be done,
                how it has to be done and when it has to be done.
            </p>

            <h2>4. Organizing</h2>

            <p>
                Organizing involves arranging people and resources
                to achieve organizational objectives.
            </p>

            <h2>5. Leadership</h2>

            <p>
                Leadership is the ability to influence and guide people
                toward achieving a common goal.
            </p>

            <h2>6. Motivation</h2>

            <p>
                Motivation is the process of encouraging employees
                to perform better and achieve organizational goals.
            </p>

            <h2>📌 Important Exam Questions</h2>

            <ol>
                <li>What is management?</li>
                <li>Explain functions of management.</li>
                <li>What is planning?</li>
                <li>What is organizing?</li>
                <li>Define leadership.</li>
                <li>What is motivation?</li>
            </ol>
        `;
    }


    // =========================
    // Page Design
    // =========================

    notesWindow.document.write(`
        <!DOCTYPE html>

        <html>

        <head>

            <title>${title} - CollegeBuddy</title>

            <style>

                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.7;
                    margin: 0;
                    background: #f5f7fb;
                    color: #172033;
                }

                header {
                    background: #4169e1;
                    color: white;
                    padding: 30px;
                    text-align: center;
                }

                header h1 {
                    margin: 0;
                    font-size: 30px;
                }

                .container {
                    max-width: 900px;
                    margin: 30px auto;
                    background: white;
                    padding: 35px;
                    border-radius: 12px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
                }

                h2 {
                    color: #4169e1;
                    margin-top: 35px;
                }

                h3 {
                    margin-top: 25px;
                }

                li {
                    margin: 10px 0;
                }

                pre {
                    background: #1e1e1e;
                    color: white;
                    padding: 18px;
                    border-radius: 8px;
                    overflow-x: auto;
                }

                .important {
                    background: #eef3ff;
                    padding: 15px;
                    border-left: 5px solid #4169e1;
                    margin: 20px 0;
                    border-radius: 5px;
                }

                .back {
                    display: inline-block;
                    padding: 10px 18px;
                    background: #4169e1;
                    color: white;
                    text-decoration: none;
                    border-radius: 8px;
                    margin-bottom: 20px;
                }

            </style>

        </head>

        <body>

            <header>

                <h1>📚 CollegeBuddy</h1>

                <p>${title}</p>

            </header>

            <div class="container">

                <a href="javascript:window.close()" class="back">
                    ← Close Notes
                </a>

                ${content}

            </div>

        </body>

        </html>
    `);

    notesWindow.document.close();
}

 // ===============================
// Important Questions
// ===============================

function openStudyMaterial(type) {

    if (type !== "questions") {
        alert("Ye section abhi ready ho raha hai.");
        return;
    }

    const questionsWindow = window.open("", "_blank");

    questionsWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>CollegeBuddy - Important Questions</title>

            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    background: #f5f7fb;
                    color: #172033;
                }

                header {
                    background: #4169e1;
                    color: white;
                    padding: 30px;
                    text-align: center;
                }

                .container {
                    max-width: 1000px;
                    margin: 30px auto;
                    padding: 20px;
                }

                .filters {
                    background: white;
                    padding: 20px;
                    border-radius: 12px;
                    margin-bottom: 25px;
                    text-align: center;
                }

                select {
                    padding: 12px 18px;
                    margin: 5px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    font-size: 15px;
                }

                .semester {
                    background: white;
                    padding: 25px;
                    margin-bottom: 25px;
                    border-radius: 12px;
                    box-shadow: 0 3px 10px rgba(0,0,0,0.08);
                }

                .level {
                    background: #eef3ff;
                    padding: 15px;
                    margin-top: 15px;
                    border-radius: 8px;
                }

                h2 {
                    color: #4169e1;
                }

                li {
                    margin: 10px 0;
                    line-height: 1.5;
                }

                .qa-item {
                    background: #ffffff;
                    padding: 14px 16px;
                    margin: 12px 0;
                    border-radius: 8px;
                    border: 1px solid #e5e7eb;
                    list-style-position: inside;
                }

                .question {
                    margin-bottom: 8px;
                }

                .answer {
                    background: #f5f7fb;
                    padding: 10px 12px;
                    border-radius: 6px;
                    line-height: 1.6;
                }
                    .pdf-button {
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    background: #4169e1;
    color: white;
    font-size: 15px;
    cursor: pointer;
    margin: 5px;
}
            </style>
        </head>

        <body>

            <header>
                <h1>📝 CollegeBuddy</h1>
                <p>B.Tech CSE – Important Questions</p>
                <p>Semester 1 to Semester 8</p>
            </header>

            <div class="container">
<button onclick="downloadPDF()" class="pdf-button">
    📥 Download PDF
</button>
                <div class="filters">

                    <select id="semesterSelect" onchange="filterQuestions()">
                        <option value="all">All Semesters</option>
                        <option value="1">Semester 1</option>
                        <option value="2">Semester 2</option>
                        <option value="3">Semester 3</option>
                        <option value="4">Semester 4</option>
                        <option value="5">Semester 5</option>
                        <option value="6">Semester 6</option>
                        <option value="7">Semester 7</option>
                        <option value="8">Semester 8</option>
                    </select>

                    <select id="levelSelect" onchange="filterQuestions()">
                        <option value="all">All Levels</option>
                        <option value="basic">🟢 Basic</option>
                        <option value="intermediate">🟡 Intermediate</option>
                        <option value="advanced">🔴 Advanced</option>
                    </select>

                </div>

                <div class="semester" data-semester="1">

                    <h2>📘 Semester 1</h2>

                    <div class="level" data-level="basic">
                        <h3>🟢 Basic</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. What is programming?</strong></div><div class="answer"><strong>Answer:</strong> Programming is the process of writing instructions for a computer to do a task.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is an algorithm?</strong></div><div class="answer"><strong>Answer:</strong> An algorithm is a step-by-step method used to solve a problem.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is a variable?</strong></div><div class="answer"><strong>Answer:</strong> A variable is a named place used to store a value in a program.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What are data types?</strong></div><div class="answer"><strong>Answer:</strong> Data types tell us what kind of data a variable can store, such as integer, float, character, or string.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is a loop?</strong></div><div class="answer"><strong>Answer:</strong> A loop is used to repeat a block of code again and again.</div></li>
                        </ol>
                    </div>

                    <div class="level" data-level="intermediate">
                        <h3>🟡 Intermediate</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. Explain if-else statements.</strong></div><div class="answer"><strong>Answer:</strong> An if-else statement checks a condition. If the condition is true, the if block runs; otherwise, the else block runs.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain different types of loops.</strong></div><div class="answer"><strong>Answer:</strong> The common loops are for, while, and do-while. They are used to repeat code in different situations.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is an array?</strong></div><div class="answer"><strong>Answer:</strong> An array stores multiple values of the same type under one name.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is a function?</strong></div><div class="answer"><strong>Answer:</strong> A function is a reusable block of code that performs a specific task.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain recursion.</strong></div><div class="answer"><strong>Answer:</strong> Recursion is a method where a function calls itself to solve a smaller part of a problem.</div></li>
                        </ol>
                    </div>

                    <div class="level" data-level="advanced">
                        <h3>🔴 Advanced</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. Explain pointers and their applications.</strong></div><div class="answer"><strong>Answer:</strong> A pointer is a variable that stores the memory address of another variable. Pointers are used for memory access, arrays, functions, and dynamic memory.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain dynamic memory allocation.</strong></div><div class="answer"><strong>Answer:</strong> Dynamic memory allocation means getting memory during program execution. In C, functions like malloc(), calloc(), realloc(), and free() are used for it.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain recursion with an example.</strong></div><div class="answer"><strong>Answer:</strong> In recursion, a function calls itself until a stopping condition is reached. Example: factorial(5) calls factorial(4), then factorial(3), and so on.</div></li>
                        </ol>
                    </div>

                </div>


                <div class="semester" data-semester="2">

                    <h2>📗 Semester 2</h2>

                    <div class="level" data-level="basic">
                        <h3>🟢 Basic</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. What is a data structure?</strong></div><div class="answer"><strong>Answer:</strong> A data structure is a way of organizing and storing data so it can be used efficiently.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is an array?</strong></div><div class="answer"><strong>Answer:</strong> An array stores multiple values of the same type under one name.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is a stack?</strong></div><div class="answer"><strong>Answer:</strong> A stack is a data structure that follows LIFO: Last In, First Out.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is a queue?</strong></div><div class="answer"><strong>Answer:</strong> A queue is a data structure that follows FIFO: First In, First Out.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is a linked list?</strong></div><div class="answer"><strong>Answer:</strong> A linked list is a collection of nodes where each node stores data and a link to the next node.</div></li>
                        </ol>
                    </div>

                    <div class="level" data-level="intermediate">
                        <h3>🟡 Intermediate</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. Explain stack operations.</strong></div><div class="answer"><strong>Answer:</strong> The main stack operations are push (add an item), pop (remove the top item), and peek (view the top item).</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain queue operations.</strong></div><div class="answer"><strong>Answer:</strong> The main queue operations are enqueue (add an item) and dequeue (remove an item).</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain linked lists.</strong></div><div class="answer"><strong>Answer:</strong> A linked list contains nodes connected by links. It can grow or shrink easily during program execution.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain searching and sorting.</strong></div><div class="answer"><strong>Answer:</strong> Searching finds a required item in data. Sorting arranges data in a particular order, such as ascending or descending.</div></li>
                        </ol>
                    </div>

                    <div class="level" data-level="advanced">
                        <h3>🔴 Advanced</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. Explain binary search trees.</strong></div><div class="answer"><strong>Answer:</strong> A binary search tree is a tree where smaller values are placed on the left and larger values on the right.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain AVL trees.</strong></div><div class="answer"><strong>Answer:</strong> An AVL tree is a self-balancing binary search tree. It keeps the height balanced after insertions and deletions.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Compare BFS and DFS.</strong></div><div class="answer"><strong>Answer:</strong> BFS visits nodes level by level, while DFS goes as deep as possible before coming back. BFS usually uses a queue and DFS uses a stack or recursion.</div></li>
                        </ol>
                    </div>

                </div>


                <div class="semester" data-semester="3">

                    <h2>📕 Semester 3</h2>

                    <div class="level" data-level="basic">
                        <h3>🟢 Basic</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. What is a database?</strong></div><div class="answer"><strong>Answer:</strong> A database is an organized collection of data that can be stored, searched, and managed easily.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is DBMS?</strong></div><div class="answer"><strong>Answer:</strong> DBMS stands for Database Management System. It is software used to create, store, update, and manage databases.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is a table?</strong></div><div class="answer"><strong>Answer:</strong> A table stores data in rows and columns.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is a primary key?</strong></div><div class="answer"><strong>Answer:</strong> A primary key is a column or group of columns that uniquely identifies each row in a table.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is SQL?</strong></div><div class="answer"><strong>Answer:</strong> SQL stands for Structured Query Language. It is used to work with data in relational databases.</div></li>
                        </ol>
                    </div>

                    <div class="level" data-level="intermediate">
                        <h3>🟡 Intermediate</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. Explain different types of keys.</strong></div><div class="answer"><strong>Answer:</strong> Common keys include primary key, foreign key, candidate key, super key, and alternate key. They help identify or connect records.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is normalization?</strong></div><div class="answer"><strong>Answer:</strong> Normalization is the process of organizing database tables to reduce duplicate data and improve data consistency.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain SQL commands.</strong></div><div class="answer"><strong>Answer:</strong> SQL commands are commonly grouped as DDL, DML, DQL, DCL, and TCL. They are used to create, change, read, control, and manage database transactions.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What are ACID properties?</strong></div><div class="answer"><strong>Answer:</strong> ACID means Atomicity, Consistency, Isolation, and Durability. These properties help keep database transactions reliable.</div></li>
                        </ol>
                    </div>

                    <div class="level" data-level="advanced">
                        <h3>🔴 Advanced</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. Explain normalization up to BCNF.</strong></div><div class="answer"><strong>Answer:</strong> Normalization divides data into well-organized tables. 1NF removes repeating groups, 2NF removes partial dependency, 3NF removes transitive dependency, and BCNF requires every determinant to be a candidate key.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain concurrency control.</strong></div><div class="answer"><strong>Answer:</strong> Concurrency control manages multiple database operations at the same time and prevents incorrect or conflicting results.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain query optimization.</strong></div><div class="answer"><strong>Answer:</strong> Query optimization finds an efficient way to execute a database query so it uses less time and resources.</div></li>
                        </ol>
                    </div>

                </div>


                <div class="semester" data-semester="4">

                    <h2>📙 Semester 4</h2>

                    <div class="level" data-level="basic">
                        <h3>🟢 Basic</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. What is an operating system?</strong></div><div class="answer"><strong>Answer:</strong> An operating system is system software that manages computer hardware, software, files, and running programs.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is a process?</strong></div><div class="answer"><strong>Answer:</strong> A process is a program that is currently running.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is a thread?</strong></div><div class="answer"><strong>Answer:</strong> A thread is a small unit of execution inside a process.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is memory management?</strong></div><div class="answer"><strong>Answer:</strong> Memory management is the process of allocating and freeing computer memory for programs.</div></li>
                        </ol>
                    </div>

                    <div class="level" data-level="intermediate">
                        <h3>🟡 Intermediate</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. Explain process scheduling.</strong></div><div class="answer"><strong>Answer:</strong> Process scheduling decides which waiting process should get the CPU and for how long.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain CPU scheduling algorithms.</strong></div><div class="answer"><strong>Answer:</strong> Common CPU scheduling algorithms include FCFS, SJF, Round Robin, and Priority Scheduling. They decide the order in which processes use the CPU.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is deadlock?</strong></div><div class="answer"><strong>Answer:</strong> Deadlock is a situation where two or more processes wait for each other and none can continue.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain virtual memory.</strong></div><div class="answer"><strong>Answer:</strong> Virtual memory uses part of storage as extra memory when RAM is not enough.</div></li>
                        </ol>
                    </div>

                    <div class="level" data-level="advanced">
                        <h3>🔴 Advanced</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. Explain deadlock detection and prevention.</strong></div><div class="answer"><strong>Answer:</strong> Deadlock prevention uses rules to stop deadlock conditions. Detection checks whether a deadlock has occurred so it can be handled.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain page replacement algorithms.</strong></div><div class="answer"><strong>Answer:</strong> Page replacement algorithms decide which memory page should be removed when a new page must be loaded. Examples are FIFO, LRU, and Optimal.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain process synchronization.</strong></div><div class="answer"><strong>Answer:</strong> Process synchronization controls access to shared data so multiple processes or threads do not create incorrect results.</div></li>
                        </ol>
                    </div>

                </div>


                <div class="semester" data-semester="5">

                    <h2>📔 Semester 5</h2>

                    <div class="level" data-level="basic">
                        <h3>🟢 Basic</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. What is a computer network?</strong></div><div class="answer"><strong>Answer:</strong> A computer network is a group of connected devices that share data and resources.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is an IP address?</strong></div><div class="answer"><strong>Answer:</strong> An IP address is a unique address used to identify a device on a network.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is a router?</strong></div><div class="answer"><strong>Answer:</strong> A router connects different networks and forwards data to the correct destination.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is a protocol?</strong></div><div class="answer"><strong>Answer:</strong> A protocol is a set of rules used by devices to communicate with each other.</div></li>
                        </ol>
                    </div>

                    <div class="level" data-level="intermediate">
                        <h3>🟡 Intermediate</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. Explain OSI model.</strong></div><div class="answer"><strong>Answer:</strong> The OSI model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain TCP/IP model.</strong></div><div class="answer"><strong>Answer:</strong> The TCP/IP model is a networking model used on the Internet. Its main layers are Network Access, Internet, Transport, and Application.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain TCP and UDP.</strong></div><div class="answer"><strong>Answer:</strong> TCP is connection-oriented and provides reliable delivery. UDP is faster and connectionless but does not guarantee delivery.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is DNS?</strong></div><div class="answer"><strong>Answer:</strong> DNS stands for Domain Name System. It changes domain names, such as example.com, into IP addresses.</div></li>
                        </ol>
                    </div>

                    <div class="level" data-level="advanced">
                        <h3>🔴 Advanced</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. Compare OSI and TCP/IP models.</strong></div><div class="answer"><strong>Answer:</strong> OSI is a 7-layer reference model, while TCP/IP is a practical networking model commonly used on the Internet with 4 main layers.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain congestion control.</strong></div><div class="answer"><strong>Answer:</strong> Congestion control reduces network traffic when too much data is moving through the network.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain IPv4 and IPv6.</strong></div><div class="answer"><strong>Answer:</strong> IPv4 uses 32-bit addresses, while IPv6 uses 128-bit addresses. IPv6 provides a much larger address space.</div></li>
                        </ol>
                    </div>

                </div>


                <div class="semester" data-semester="6">

                    <h2>📒 Semester 6</h2>

                    <div class="level" data-level="basic">
                        <h3>🟢 Basic</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. What is Artificial Intelligence?</strong></div><div class="answer"><strong>Answer:</strong> Artificial Intelligence (AI) is the ability of computers to perform tasks that normally need human intelligence.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is Machine Learning?</strong></div><div class="answer"><strong>Answer:</strong> Machine Learning (ML) is a part of AI where computers learn patterns from data and make predictions or decisions.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is a dataset?</strong></div><div class="answer"><strong>Answer:</strong> A dataset is a collection of data used for analysis or for training a machine learning model.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is a model?</strong></div><div class="answer"><strong>Answer:</strong> A model is a learned mathematical or computer representation that is used to make predictions or decisions.</div></li>
                        </ol>
                    </div>

                    <div class="level" data-level="intermediate">
                        <h3>🟡 Intermediate</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. Explain supervised learning.</strong></div><div class="answer"><strong>Answer:</strong> Supervised learning trains a model using data that already has correct answers or labels.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain unsupervised learning.</strong></div><div class="answer"><strong>Answer:</strong> Unsupervised learning finds patterns or groups in data without given labels.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is classification?</strong></div><div class="answer"><strong>Answer:</strong> Classification is a machine learning task that puts data into categories, such as spam or not spam.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is regression?</strong></div><div class="answer"><strong>Answer:</strong> Regression predicts a continuous numerical value, such as house price or temperature.</div></li>
                        </ol>
                    </div>

                    <div class="level" data-level="advanced">
                        <h3>🔴 Advanced</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. Explain neural networks.</strong></div><div class="answer"><strong>Answer:</strong> A neural network is a machine learning model made of connected layers of artificial neurons. It learns patterns from data.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain overfitting and underfitting.</strong></div><div class="answer"><strong>Answer:</strong> Overfitting happens when a model learns training data too closely and performs poorly on new data. Underfitting happens when the model is too simple to learn the pattern.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain model evaluation metrics.</strong></div><div class="answer"><strong>Answer:</strong> Evaluation metrics measure how well a model works. Common metrics include accuracy, precision, recall, F1-score, and mean squared error.</div></li>
                        </ol>
                    </div>

                </div>


                <div class="semester" data-semester="7">

                    <h2>📓 Semester 7</h2>

                    <div class="level" data-level="basic">
                        <h3>🟢 Basic</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. What is cloud computing?</strong></div><div class="answer"><strong>Answer:</strong> Cloud computing means using computing services such as storage, servers, and software over the Internet.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is cyber security?</strong></div><div class="answer"><strong>Answer:</strong> Cyber security protects computers, networks, applications, and data from unauthorized access and attacks.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is a server?</strong></div><div class="answer"><strong>Answer:</strong> A server is a computer or program that provides data or services to other computers called clients.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is encryption?</strong></div><div class="answer"><strong>Answer:</strong> Encryption converts readable data into a protected form so unauthorized people cannot easily read it.</div></li>
                        </ol>
                    </div>

                    <div class="level" data-level="intermediate">
                        <h3>🟡 Intermediate</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. Explain cloud service models.</strong></div><div class="answer"><strong>Answer:</strong> The main cloud service models are IaaS for infrastructure, PaaS for a development platform, and SaaS for ready-to-use software.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain public and private cloud.</strong></div><div class="answer"><strong>Answer:</strong> A public cloud is shared by many customers through a cloud provider. A private cloud is dedicated to one organization.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain firewalls.</strong></div><div class="answer"><strong>Answer:</strong> A firewall monitors network traffic and blocks unwanted or unauthorized connections based on security rules.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain authentication methods.</strong></div><div class="answer"><strong>Answer:</strong> Authentication checks who a user is. Common methods include passwords, OTPs, biometrics, and security keys.</div></li>
                        </ol>
                    </div>

                    <div class="level" data-level="advanced">
                        <h3>🔴 Advanced</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. Explain cloud architecture.</strong></div><div class="answer"><strong>Answer:</strong> Cloud architecture describes how cloud services, servers, storage, networks, applications, and users work together.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain virtualization.</strong></div><div class="answer"><strong>Answer:</strong> Virtualization creates virtual computers or resources on one physical machine using software.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain secure cloud architecture.</strong></div><div class="answer"><strong>Answer:</strong> Secure cloud architecture uses access control, encryption, monitoring, backups, and network security to protect cloud systems.</div></li>
                        </ol>
                    </div>

                </div>


                <div class="semester" data-semester="8">

                    <h2>📚 Semester 8</h2>

                    <div class="level" data-level="basic">
                        <h3>🟢 Basic</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. What is a software project?</strong></div><div class="answer"><strong>Answer:</strong> A software project is a planned effort to create, improve, or maintain a software product.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is Git?</strong></div><div class="answer"><strong>Answer:</strong> Git is a version control system used to track code changes and manage different versions of a project.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is GitHub?</strong></div><div class="answer"><strong>Answer:</strong> GitHub is an online platform for storing Git repositories and working with code and other developers.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is an API?</strong></div><div class="answer"><strong>Answer:</strong> An API is a set of rules that allows different software programs to communicate with each other.</div></li>
                        </ol>
                    </div>

                    <div class="level" data-level="intermediate">
                        <h3>🟡 Intermediate</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. Explain software development life cycle.</strong></div><div class="answer"><strong>Answer:</strong> SDLC is a process used to develop software. Common stages are planning, requirements, design, development, testing, deployment, and maintenance.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain Agile methodology.</strong></div><div class="answer"><strong>Answer:</strong> Agile is a flexible software development method where work is done in small parts and improved using regular feedback.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. What is REST API?</strong></div><div class="answer"><strong>Answer:</strong> A REST API is a web API that uses HTTP methods such as GET, POST, PUT, and DELETE to work with resources.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. How do you test a software project?</strong></div><div class="answer"><strong>Answer:</strong> Software is tested by checking requirements, running test cases, finding bugs, fixing them, and testing again. Different types include unit, integration, system, and user testing.</div></li>
                        </ol>
                    </div>

                    <div class="level" data-level="advanced">
                        <h3>🔴 Advanced</h3>
                        <ol>
                            <li class="qa-item"><div class="question"><strong>Q. Explain software architecture.</strong></div><div class="answer"><strong>Answer:</strong> Software architecture is the high-level structure of a software system, including its components and how they communicate.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain system design basics.</strong></div><div class="answer"><strong>Answer:</strong> System design means planning the components, data, APIs, storage, and communication needed to build a software system.</div></li>
                            <li class="qa-item"><div class="question"><strong>Q. Explain scalability.</strong></div><div class="answer"><strong>Answer:</strong> Scalability is the ability of a system to handle more users or work by adding or improving resources.</div></li>
                        </ol>
                    </div>

                </div>

            </div>

            <script>

                function filterQuestions() {

                    const semester =
                        document.getElementById("semesterSelect").value;

                    const level =
                        document.getElementById("levelSelect").value;

                    const semesters =
                        document.querySelectorAll(".semester");

                    semesters.forEach(function(item) {

                        const semesterMatch =
                            semester === "all" ||
                            item.dataset.semester === semester;

                        const levels =
                            item.querySelectorAll(".level");

                        let visibleLevel = false;

                        levels.forEach(function(levelItem) {

                            const levelMatch =
                                level === "all" ||
                                levelItem.dataset.level === level;

                            if (levelMatch) {
                                levelItem.style.display = "block";
                                visibleLevel = true;
                            } else {
                                levelItem.style.display = "none";
                            }

                        });

                        if (semesterMatch && visibleLevel) {
                            item.style.display = "block";
                        } else {
                            item.style.display = "none";
                        }

                    });
                }
                    function downloadPDF() {
    window.print();
}

            </script>

        </body>
        </html>
    `);

    questionsWindow.document.close();
}   