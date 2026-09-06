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

    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${noteName} - CollegeBuddy Notes</title>

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
                    padding: 25px;
                    text-align: center;
                }

                .container {
                    max-width: 900px;
                    margin: 30px auto;
                    background: white;
                    padding: 35px;
                    border-radius: 12px;
                }

                h1 {
                    margin: 0;
                }

                h2 {
                    color: #4169e1;
                    margin-top: 35px;
                }

                h3 {
                    margin-top: 25px;
                }

                code {
                    background: #f0f2f5;
                    padding: 3px 6px;
                    border-radius: 4px;
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
                }
            </style>
        </head>

        <body>

            <header>
                <h1>📚 CollegeBuddy</h1>
                <p>${noteName}</p>
            </header>

            <div class="container">

                <h2>1. Introduction to Programming</h2>

                <p>
                    Programming is the process of writing instructions that
                    tell a computer what to do. These instructions are written
                    using programming languages such as C, C++, Java and Python.
                </p>

                <div class="important">
                    <b>Important:</b>
                    A program is a set of instructions written to solve a
                    particular problem.
                </div>

                <h2>2. Algorithm</h2>

                <p>
                    An algorithm is a step-by-step procedure used to solve
                    a problem.
                </p>

                <h3>Characteristics of an Algorithm</h3>

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

                <p>Common C programming data types are:</p>

                <ul>
                    <li><b>int</b> – stores integer values</li>
                    <li><b>float</b> – stores decimal values</li>
                    <li><b>char</b> – stores a single character</li>
                    <li><b>double</b> – stores large decimal values</li>
                </ul>

                <h2>5. Operators</h2>

                <p>Operators are symbols used to perform operations.</p>

                <ul>
                    <li>Arithmetic: +, -, *, /, %</li>
                    <li>Relational: &lt;, &gt;, ==, !=</li>
                    <li>Logical: &amp;&amp;, ||, !</li>
                    <li>Assignment: =, +=, -=, *=</li>
                </ul>

                <h2>6. If-Else Statement</h2>

                <p>
                    The if-else statement is used when we want to execute
                    different code depending on a condition.
                </p>

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

                <h3>Types of Loops</h3>

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
                    A function is a block of code designed to perform
                    a specific task.
                </p>

                <pre>
int add(int a, int b) {
    return a + b;
}
                </pre>

                <h2>9. Arrays</h2>

                <p>
                    An array stores multiple values of the same data type
                    in a single variable.
                </p>

                <pre>
int marks[5] = {80, 75, 90, 85, 70};
                </pre>

                <h2>10. Strings</h2>

                <p>
                    A string is a collection of characters terminated by
                    a null character.
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

                <h2>12. Important Exam Questions</h2>

                <ol>
                    <li>What is an algorithm? Explain its characteristics.</li>
                    <li>What is a variable?</li>
                    <li>Explain different data types in C.</li>
                    <li>Explain arithmetic and logical operators.</li>
                    <li>Explain if-else with an example.</li>
                    <li>What are loops? Explain different types.</li>
                    <li>What is a function?</li>
                    <li>Explain arrays with an example.</li>
                    <li>What is a string?</li>
                    <li>What is a pointer?</li>
                </ol>

                <h2>📌 Quick Revision</h2>

                <div class="important">
                    Programming = Instructions + Logic + Problem Solving<br><br>
                    Variable = Data Storage<br><br>
                    Loop = Repeated Execution<br><br>
                    Function = Reusable Block of Code<br><br>
                    Array = Collection of Same Type Data<br><br>
                    Pointer = Stores Memory Address
                </div>

            </div>

        </body>
        </html>
    `);

    notesWindow.document.close();
}