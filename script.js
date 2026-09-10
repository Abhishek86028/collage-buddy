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

    // ===============================
    // Engineering Mathematics-I
    // ===============================
if (noteName === "Engineering Mathematics-I") {

    title = "Engineering Mathematics-I";

    content = `
        <h2>🧮 Engineering Mathematics-I</h2>

        <h2>📘 Unit 1: Differential Calculus</h2>

        <p>
            Differential Calculus deals with the rate of change of
            a function. It is one of the basic concepts of engineering mathematics.
        </p>

        <h3>Important Topics</h3>
        <ul>
            <li>Functions and Limits</li>
            <li>Continuity of Functions</li>
            <li>Differentiation</li>
            <li>Higher Order Derivatives</li>
            <li>Partial Differentiation</li>
        </ul>

        <div class="important">
            <b>Important Formulas:</b><br><br>
            d/dx (xⁿ) = n xⁿ⁻¹<br>
            d/dx (sin x) = cos x<br>
            d/dx (cos x) = -sin x<br>
            d/dx (eˣ) = eˣ<br>
            d/dx (log x) = 1/x
        </div>

        <h2>📘 Unit 2: Integral Calculus</h2>

        <p>
            Integration is the reverse process of differentiation.
            It is used to find areas, volumes and solutions of many
            engineering problems.
        </p>

        <h3>Important Topics</h3>
        <ul>
            <li>Indefinite Integration</li>
            <li>Definite Integration</li>
            <li>Integration by Parts</li>
            <li>Integration by Substitution</li>
            <li>Applications of Integration</li>
        </ul>

        <div class="important">
            <b>Important Formulas:</b><br><br>
            ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C<br>
            ∫ 1/x dx = log|x| + C<br>
            ∫ eˣ dx = eˣ + C<br>
            ∫ sin x dx = -cos x + C<br>
            ∫ cos x dx = sin x + C
        </div>

        <h2>📘 Unit 3: Differential Equations</h2>

        <p>
            A differential equation is an equation involving an
            unknown function and its derivatives.
        </p>

        <h3>Important Topics</h3>
        <ul>
            <li>Order and Degree</li>
            <li>First Order Differential Equations</li>
            <li>Variable Separable Method</li>
            <li>Linear Differential Equations</li>
            <li>Applications of Differential Equations</li>
        </ul>

        <div class="important">
            <b>Basic Form:</b><br><br>
            dy/dx = f(x,y)
        </div>

        <h2>📘 Unit 4: Matrices and Linear Algebra</h2>

        <p>
            Matrices are rectangular arrangements of numbers.
            They are widely used in engineering, computer science
            and numerical calculations.
        </p>

        <h3>Important Topics</h3>
        <ul>
            <li>Types of Matrices</li>
            <li>Matrix Operations</li>
            <li>Determinants</li>
            <li>Rank of Matrix</li>
            <li>Eigenvalues and Eigenvectors</li>
        </ul>

        <div class="important">
            <b>Important Concepts:</b><br><br>
            Matrix Addition<br>
            Matrix Multiplication<br>
            Determinant<br>
            Inverse of Matrix<br>
            Eigenvalues
        </div>

        <h2>📘 Unit 5: Vector Calculus</h2>

        <p>
            Vector Calculus deals with differentiation and integration
            of vector quantities and is useful in engineering applications.
        </p>

        <h3>Important Topics</h3>
        <ul>
            <li>Scalar and Vector Fields</li>
            <li>Gradient</li>
            <li>Divergence</li>
            <li>Curl</li>
            <li>Directional Derivative</li>
        </ul>

        <div class="important">
            <b>Important Concepts:</b><br><br>
            Gradient → ∇φ<br>
            Divergence → ∇ · A<br>
            Curl → ∇ × A
        </div>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>Define differentiation and explain its basic rules.</li>
            <li>Explain important integration formulas.</li>
            <li>What is a differential equation?</li>
            <li>Explain order and degree of a differential equation.</li>
            <li>What are matrices and determinants?</li>
            <li>Explain eigenvalues and eigenvectors.</li>
            <li>What is gradient?</li>
            <li>Explain divergence and curl.</li>
            <li>Solve basic differential equation problems.</li>
            <li>Solve problems based on matrices and eigenvalues.</li>
        </ol>
    `;
}
    

    // ===============================
    // Programming
    // ===============================

    else if (noteName === "Programming for Problem Solving") {

    title = "Programming for Problem Solving";

    content = `
        <h2>💻 Programming for Problem Solving</h2>

        <h2>📘 Unit 1: Introduction to Programming & Algorithms</h2>

        <p>
            Programming is the process of writing instructions that
            tell a computer how to perform a specific task.
        </p>

        <h3>Important Topics</h3>
        <ul>
            <li>Problem Solving Approach</li>
            <li>Algorithms</li>
            <li>Flowcharts</li>
            <li>Pseudocode</li>
            <li>Programming Languages</li>
        </ul>

        <div class="important">
            <b>Important:</b><br>
            Algorithm = Step-by-step procedure to solve a problem.
        </div>

        <h2>📘 Unit 2: C Programming Basics</h2>

        <p>
            C is a general-purpose programming language widely used
            for system and application programming.
        </p>

        <h3>Important Topics</h3>
        <ul>
            <li>Structure of C Program</li>
            <li>Variables and Constants</li>
            <li>Data Types</li>
            <li>Operators</li>
            <li>Input and Output</li>
        </ul>

        <pre>
int age = 20;
float marks = 85.5;
char grade = 'A';

printf("Hello World");
scanf("%d", &age);
        </pre>

        <h2>📘 Unit 3: Control Statements</h2>

        <p>
            Control statements are used to control the flow of
            execution of a program.
        </p>

        <h3>Important Topics</h3>
        <ul>
            <li>if Statement</li>
            <li>if-else Statement</li>
            <li>Nested if</li>
            <li>switch Statement</li>
            <li>for Loop</li>
            <li>while Loop</li>
            <li>do-while Loop</li>
        </ul>

        <pre>
if(age >= 18) {
    printf("Eligible");
} else {
    printf("Not Eligible");
}
        </pre>

        <h2>📘 Unit 4: Arrays, Strings & Functions</h2>

        <h3>Arrays</h3>
        <p>
            An array is a collection of elements of the same data type
            stored in contiguous memory locations.
        </p>

        <pre>
int marks[5] = {80, 75, 90, 85, 70};
        </pre>

        <h3>Strings</h3>
        <p>
            A string is a sequence of characters terminated by
            a null character.
        </p>

        <pre>
char name[20] = "CollegeBuddy";
        </pre>

        <h3>Functions</h3>
        <p>
            A function is a reusable block of code designed to perform
            a particular task.
        </p>

        <h2>📘 Unit 5: Pointers, Structures & File Handling</h2>

        <h3>Pointers</h3>
        <p>
            A pointer is a variable that stores the memory address
            of another variable.
        </p>

        <pre>
int age = 20;
int *ptr = &age;
        </pre>

        <h3>Structures</h3>
        <p>
            A structure allows different types of data to be grouped
            together under one name.
        </p>

        <pre>
struct Student {
    int roll;
    char name[20];
};
        </pre>

        <h3>File Handling</h3>
        <ul>
            <li>Opening a file</li>
            <li>Reading a file</li>
            <li>Writing to a file</li>
            <li>Closing a file</li>
        </ul>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is an algorithm? Explain its characteristics.</li>
            <li>What is a flowchart?</li>
            <li>Explain variables and data types in C.</li>
            <li>Explain different operators in C.</li>
            <li>Explain if-else and switch statements.</li>
            <li>Explain for, while and do-while loops.</li>
            <li>What is an array? Give an example.</li>
            <li>What is a string in C?</li>
            <li>What is a function? Explain its types.</li>
            <li>What is a pointer?</li>
            <li>Explain structures in C.</li>
            <li>What is file handling?</li>
        </ol>
    `;
}
    else if (noteName === "Computer Fundamentals") {

    notesWindow.document.write(`
        <h1>🖥️ Computer Fundamentals</h1>

        <h2>Unit 1: Introduction to Computer</h2>
        <p>
            A computer is an electronic device that accepts data as input,
            processes it according to instructions, stores it and produces
            meaningful information as output.
        </p>

        <h3>Characteristics of Computer</h3>
        <ul>
            <li>High Speed</li>
            <li>Accuracy</li>
            <li>Large Storage Capacity</li>
            <li>Diligence</li>
            <li>Automation</li>
            <li>Versatility</li>
        </ul>

        <h2>Unit 2: Computer Hardware</h2>
        <p>
            Hardware refers to the physical components of a computer system.
        </p>

        <ul>
            <li>CPU</li>
            <li>Monitor</li>
            <li>Keyboard</li>
            <li>Mouse</li>
            <li>Printer</li>
            <li>Hard Disk</li>
            <li>RAM</li>
            <li>ROM</li>
        </ul>

        <h2>Unit 3: Computer Software</h2>
        <p>
            Software is a collection of programs that tells a computer
            how to perform specific tasks.
        </p>

        <h3>Types of Software</h3>
        <ul>
            <li>System Software</li>
            <li>Application Software</li>
            <li>Utility Software</li>
        </ul>

        <h2>Unit 4: Operating System</h2>
        <p>
            An Operating System is system software that manages computer
            hardware and provides services to application programs.
        </p>

        <h3>Examples</h3>
        <ul>
            <li>Windows</li>
            <li>Linux</li>
            <li>macOS</li>
            <li>Android</li>
        </ul>

        <h2>Unit 5: Input and Output Devices</h2>
        <p>
            Input devices are used to enter data into a computer,
            while output devices display or produce processed information.
        </p>

        <ul>
            <li>Input: Keyboard, Mouse, Scanner, Microphone</li>
            <li>Output: Monitor, Printer, Speaker, Projector</li>
        </ul>

        <h2>Unit 6: Memory</h2>
        <ul>
            <li>Primary Memory – RAM and ROM</li>
            <li>Secondary Memory – HDD, SSD, Pen Drive</li>
            <li>RAM is temporary memory.</li>
            <li>ROM is non-volatile memory.</li>
        </ul>

        <h2>Important Questions</h2>
        <ol>
            <li>What is a computer?</li>
            <li>Explain the characteristics of a computer.</li>
            <li>What is hardware?</li>
            <li>What is software? Explain its types.</li>
            <li>What is an Operating System?</li>
            <li>Explain primary and secondary memory.</li>
            <li>Differentiate between RAM and ROM.</li>
            <li>Explain input and output devices.</li>
        </ol>
    `);
}
else if (noteName === "Programming in C") {

    notesWindow.document.write(`
        <h1>💻 Programming in C</h1>

        <h2>Unit 1: Introduction to C</h2>
        <p>
            C is a general-purpose, procedural programming language.
            It is widely used for system programming and application development.
        </p>

        <h3>Features of C</h3>
        <ul>
            <li>Simple and efficient</li>
            <li>Structured programming language</li>
            <li>Portable</li>
            <li>Fast execution</li>
            <li>Supports functions</li>
        </ul>

        <h2>Unit 2: Variables and Data Types</h2>
        <p>
            A variable is a named memory location used to store data.
        </p>

        <ul>
            <li>int – Integer values</li>
            <li>float – Decimal values</li>
            <li>char – Character values</li>
            <li>double – Large decimal values</li>
        </ul>

        <h2>Unit 3: Operators</h2>
        <ul>
            <li>Arithmetic: +, -, *, /, %</li>
            <li>Relational: &lt;, &gt;, &lt;=, &gt;=, ==, !=</li>
            <li>Logical: &amp;&amp;, ||, !</li>
            <li>Assignment: =, +=, -=, *=, /=</li>
        </ul>

        <h2>Unit 4: Conditional Statements</h2>
        <p>
            Conditional statements are used to make decisions in a program.
        </p>

        <ul>
            <li>if statement</li>
            <li>if-else statement</li>
            <li>else-if ladder</li>
            <li>switch statement</li>
        </ul>

        <h2>Unit 5: Loops</h2>
        <p>
            Loops are used to execute a block of statements repeatedly.
        </p>

        <ul>
            <li>for loop</li>
            <li>while loop</li>
            <li>do-while loop</li>
        </ul>

        <h2>Unit 6: Functions</h2>
        <p>
            A function is a block of code designed to perform a specific task.
        </p>

        <h2>Unit 7: Arrays and Strings</h2>
        <p>
            An array stores multiple values of the same data type.
            A string is a sequence of characters.
        </p>

        <h2>Unit 8: Pointers</h2>
        <p>
            A pointer is a variable that stores the memory address of another variable.
        </p>

        <h2>Important Questions</h2>
        <ol>
            <li>What is C programming?</li>
            <li>Explain the features of C.</li>
            <li>Explain different data types in C.</li>
            <li>What are operators? Explain their types.</li>
            <li>Explain if-else and switch statements.</li>
            <li>Explain for, while and do-while loops.</li>
            <li>What is a function?</li>
            <li>What is an array?</li>
            <li>What is a string?</li>
            <li>What is a pointer?</li>
        </ol>
    `);
}
else if (noteName === "Mathematics") {

    notesWindow.document.write(`
        <h1>📐 Mathematics</h1>

        <h2>Unit 1: Sets</h2>
        <p>
            A set is a well-defined collection of distinct objects.
        </p>

        <ul>
            <li>Types of Sets</li>
            <li>Subset and Proper Subset</li>
            <li>Union of Sets</li>
            <li>Intersection of Sets</li>
            <li>Difference of Sets</li>
        </ul>

        <h2>Unit 2: Relations and Functions</h2>
        <p>
            A relation describes a relationship between elements of two sets.
            A function is a special type of relation in which every input
            has exactly one output.
        </p>

        <h2>Unit 3: Matrices</h2>
        <ul>
            <li>Types of Matrices</li>
            <li>Addition and Subtraction</li>
            <li>Matrix Multiplication</li>
            <li>Transpose of Matrix</li>
            <li>Determinant</li>
            <li>Inverse of Matrix</li>
        </ul>

        <h2>Unit 4: Differential Calculus</h2>
        <p>
            Differentiation is used to find the rate of change of a function.
        </p>

        <ul>
            <li>Limits</li>
            <li>Continuity</li>
            <li>Derivatives</li>
            <li>Rules of Differentiation</li>
            <li>Applications of Derivatives</li>
        </ul>

        <h2>Unit 5: Integral Calculus</h2>
        <p>
            Integration is the reverse process of differentiation and is
            used to find areas and accumulated quantities.
        </p>

        <ul>
            <li>Indefinite Integration</li>
            <li>Definite Integration</li>
            <li>Methods of Integration</li>
            <li>Applications of Integration</li>
        </ul>

        <h2>Unit 6: Probability</h2>
        <p>
            Probability is the mathematical measure of the likelihood
            that an event will occur.
        </p>

        <h2>Important Questions</h2>
        <ol>
            <li>What is a set? Explain different types of sets.</li>
            <li>Explain union and intersection of sets.</li>
            <li>What is a relation and function?</li>
            <li>Explain different types of matrices.</li>
            <li>Find the determinant of a matrix.</li>
            <li>What is differentiation?</li>
            <li>Explain the rules of differentiation.</li>
            <li>What is integration?</li>
            <li>Explain definite and indefinite integration.</li>
            <li>What is probability?</li>
        </ol>
    `);
}
else if (noteName === "Digital Electronics") {

    notesWindow.document.write(`
        <h1>🔌 Digital Electronics</h1>

        <h2>Unit 1: Number Systems</h2>
        <p>
            A number system is a method of representing numbers using
            specific symbols and rules.
        </p>

        <ul>
            <li>Decimal Number System</li>
            <li>Binary Number System</li>
            <li>Octal Number System</li>
            <li>Hexadecimal Number System</li>
            <li>Number System Conversion</li>
        </ul>

        <h2>Unit 2: Logic Gates</h2>
        <p>
            Logic gates are electronic circuits that perform logical
            operations on one or more inputs.
        </p>

        <ul>
            <li>AND Gate</li>
            <li>OR Gate</li>
            <li>NOT Gate</li>
            <li>NAND Gate</li>
            <li>NOR Gate</li>
            <li>XOR Gate</li>
            <li>XNOR Gate</li>
        </ul>

        <h2>Unit 3: Boolean Algebra</h2>
        <p>
            Boolean algebra is a mathematical system used to analyze
            and simplify digital logic circuits.
        </p>

        <ul>
            <li>Boolean Variables</li>
            <li>Boolean Expressions</li>
            <li>Basic Boolean Laws</li>
            <li>De Morgan's Theorems</li>
        </ul>

        <h2>Unit 4: Combinational Circuits</h2>
        <ul>
            <li>Half Adder</li>
            <li>Full Adder</li>
            <li>Half Subtractor</li>
            <li>Full Subtractor</li>
            <li>Multiplexer</li>
            <li>Demultiplexer</li>
            <li>Encoder</li>
            <li>Decoder</li>
        </ul>

        <h2>Unit 5: Sequential Circuits</h2>
        <ul>
            <li>Flip-Flop</li>
            <li>SR Flip-Flop</li>
            <li>JK Flip-Flop</li>
            <li>D Flip-Flop</li>
            <li>T Flip-Flop</li>
            <li>Registers</li>
            <li>Counters</li>
        </ul>

        <h2>Unit 6: Semiconductor Devices</h2>
        <ul>
            <li>Diode</li>
            <li>LED</li>
            <li>Transistor</li>
            <li>Basic Electronic Circuits</li>
        </ul>

        <h2>Important Questions</h2>
        <ol>
            <li>Explain different number systems.</li>
            <li>Convert binary numbers into decimal numbers.</li>
            <li>Explain all basic logic gates with truth tables.</li>
            <li>What is Boolean algebra?</li>
            <li>Explain De Morgan's theorems.</li>
            <li>Explain Half Adder and Full Adder.</li>
            <li>What is a multiplexer?</li>
            <li>What is a flip-flop?</li>
            <li>Explain different types of flip-flops.</li>
            <li>Differentiate between combinational and sequential circuits.</li>
        </ol>
    `);
}


else if (noteName === "Communication Skills") {

    notesWindow.document.write(`
        <h1>🗣️ Communication Skills</h1>

        <h2>Unit 1: Introduction to Communication</h2>
        <p>
            Communication is the process of exchanging information,
            ideas, thoughts and feelings between two or more people.
        </p>

        <h3>Elements of Communication</h3>
        <ul>
            <li>Sender</li>
            <li>Message</li>
            <li>Encoding</li>
            <li>Communication Channel</li>
            <li>Receiver</li>
            <li>Decoding</li>
            <li>Feedback</li>
        </ul>

        <h2>Unit 2: Types of Communication</h2>
        <ul>
            <li>Verbal Communication</li>
            <li>Non-Verbal Communication</li>
            <li>Written Communication</li>
            <li>Visual Communication</li>
        </ul>

        <h2>Unit 3: Barriers to Communication</h2>
        <p>
            Barriers are factors that prevent effective communication.
        </p>

        <ul>
            <li>Language Barrier</li>
            <li>Physical Barrier</li>
            <li>Psychological Barrier</li>
            <li>Cultural Barrier</li>
            <li>Semantic Barrier</li>
            <li>Technical Barrier</li>
        </ul>

        <h2>Unit 4: Listening Skills</h2>
        <p>
            Listening is the active process of receiving, understanding
            and interpreting spoken information.
        </p>

        <ul>
            <li>Active Listening</li>
            <li>Focused Listening</li>
            <li>Critical Listening</li>
            <li>Empathetic Listening</li>
        </ul>

        <h2>Unit 5: Speaking Skills</h2>
        <ul>
            <li>Public Speaking</li>
            <li>Presentation Skills</li>
            <li>Group Discussion</li>
            <li>Interview Skills</li>
            <li>Pronunciation</li>
            <li>Body Language</li>
        </ul>

        <h2>Unit 6: Written Communication</h2>
        <ul>
            <li>Formal Letter</li>
            <li>Informal Letter</li>
            <li>Email Writing</li>
            <li>Notice Writing</li>
            <li>Report Writing</li>
            <li>Resume Writing</li>
        </ul>

        <h2>Unit 7: Presentation Skills</h2>
        <p>
            An effective presentation should have a clear introduction,
            organized content and a strong conclusion.
        </p>

        <h2>Important Questions</h2>
        <ol>
            <li>What is communication?</li>
            <li>Explain the elements of communication.</li>
            <li>Explain different types of communication.</li>
            <li>What are barriers to communication?</li>
            <li>Explain active listening.</li>
            <li>What are speaking skills?</li>
            <li>Explain the importance of body language.</li>
            <li>What is group discussion?</li>
            <li>Explain the format of a formal email.</li>
            <li>What are presentation skills?</li>
        </ol>
    `);
}else if (noteName === "Data Structures") {

    notesWindow.document.write(`
        <h1>🌳 Data Structures</h1>

        <h2>Unit 1: Introduction</h2>
        <p>
            Data Structure is a way of organizing and storing data so that
            it can be accessed and processed efficiently.
        </p>

        <h3>Types of Data Structures</h3>
        <ul>
            <li>Linear Data Structure</li>
            <li>Non-Linear Data Structure</li>
            <li>Static Data Structure</li>
            <li>Dynamic Data Structure</li>
        </ul>

        <h2>Unit 2: Arrays</h2>
        <p>
            An array is a collection of elements of the same data type
            stored in contiguous memory locations.
        </p>

        <ul>
            <li>One-dimensional Array</li>
            <li>Two-dimensional Array</li>
            <li>Array Traversal</li>
            <li>Insertion and Deletion</li>
            <li>Searching and Sorting</li>
        </ul>

        <h2>Unit 3: Linked List</h2>
        <p>
            A linked list is a dynamic data structure consisting of nodes.
            Each node contains data and a link to another node.
        </p>

        <ul>
            <li>Singly Linked List</li>
            <li>Doubly Linked List</li>
            <li>Circular Linked List</li>
            <li>Insertion and Deletion</li>
        </ul>

        <h2>Unit 4: Stack</h2>
        <p>
            Stack follows the LIFO (Last In First Out) principle.
        </p>

        <ul>
            <li>Push Operation</li>
            <li>Pop Operation</li>
            <li>Peek Operation</li>
            <li>Applications of Stack</li>
        </ul>

        <h2>Unit 5: Queue</h2>
        <p>
            Queue follows the FIFO (First In First Out) principle.
        </p>

        <ul>
            <li>Enqueue</li>
            <li>Dequeue</li>
            <li>Circular Queue</li>
            <li>Priority Queue</li>
            <li>Applications of Queue</li>
        </ul>

        <h2>Unit 6: Trees</h2>
        <ul>
            <li>Binary Tree</li>
            <li>Binary Search Tree</li>
            <li>Tree Traversal</li>
            <li>Preorder</li>
            <li>Inorder</li>
            <li>Postorder</li>
        </ul>

        <h2>Unit 7: Graphs</h2>
        <ul>
            <li>Graph Terminology</li>
            <li>Directed Graph</li>
            <li>Undirected Graph</li>
            <li>Breadth First Search</li>
            <li>Depth First Search</li>
        </ul>

        <h2>Unit 8: Searching and Sorting</h2>
        <ul>
            <li>Linear Search</li>
            <li>Binary Search</li>
            <li>Bubble Sort</li>
            <li>Selection Sort</li>
            <li>Insertion Sort</li>
            <li>Merge Sort</li>
            <li>Quick Sort</li>
        </ul>

        <h2>Important Questions</h2>
        <ol>
            <li>What is a data structure?</li>
            <li>Explain different types of data structures.</li>
            <li>Explain arrays and their operations.</li>
            <li>What is a linked list?</li>
            <li>Explain stack and its operations.</li>
            <li>Explain queue and its types.</li>
            <li>What is a binary tree?</li>
            <li>Explain tree traversal techniques.</li>
            <li>What is BFS and DFS?</li>
            <li>Explain different sorting techniques.</li>
        </ol>
    `);
}


else if (noteName === "Database Management System") {

    notesWindow.document.write(`
        <h1>🗄️ Database Management System</h1>

        <h2>Unit 1: Introduction to DBMS</h2>
        <p>
            DBMS is software used to create, store, manage and retrieve
            data from a database.
        </p>

        <ul>
            <li>Database</li>
            <li>DBMS</li>
            <li>RDBMS</li>
            <li>Database Administrator</li>
        </ul>

        <h2>Unit 2: Database Models</h2>
        <ul>
            <li>Hierarchical Model</li>
            <li>Network Model</li>
            <li>Relational Model</li>
            <li>Object-Oriented Model</li>
        </ul>

        <h2>Unit 3: ER Model</h2>
        <p>
            Entity Relationship Model represents entities, attributes
            and relationships in a database.
        </p>

        <ul>
            <li>Entity</li>
            <li>Attribute</li>
            <li>Relationship</li>
            <li>Primary Key</li>
            <li>Foreign Key</li>
        </ul>

        <h2>Unit 4: SQL</h2>
        <p>
            SQL stands for Structured Query Language and is used to
            communicate with relational databases.
        </p>

        <ul>
            <li>SELECT</li>
            <li>INSERT</li>
            <li>UPDATE</li>
            <li>DELETE</li>
            <li>CREATE</li>
            <li>ALTER</li>
            <li>DROP</li>
        </ul>

        <h2>Unit 5: Normalization</h2>
        <p>
            Normalization is the process of organizing data to reduce
            redundancy and improve data integrity.
        </p>

        <ul>
            <li>First Normal Form</li>
            <li>Second Normal Form</li>
            <li>Third Normal Form</li>
            <li>BCNF</li>
        </ul>

        <h2>Unit 6: Transactions</h2>
        <ul>
            <li>Transaction</li>
            <li>ACID Properties</li>
            <li>Commit</li>
            <li>Rollback</li>
            <li>Concurrency Control</li>
        </ul>

        <h2>Important Questions</h2>
        <ol>
            <li>What is DBMS?</li>
            <li>Explain DBMS and RDBMS.</li>
            <li>Explain different database models.</li>
            <li>What is an ER model?</li>
            <li>What is a primary key?</li>
            <li>What is SQL?</li>
            <li>Explain SQL commands.</li>
            <li>What is normalization?</li>
            <li>Explain 1NF, 2NF and 3NF.</li>
            <li>Explain ACID properties.</li>
        </ol>
    `);
}


else if (noteName === "Object Oriented Programming") {

    notesWindow.document.write(`
        <h1>☕ Object Oriented Programming</h1>

        <h2>Unit 1: Introduction to OOP</h2>
        <p>
            Object Oriented Programming is a programming approach based
            on objects and classes.
        </p>

        <h3>Main Concepts</h3>
        <ul>
            <li>Class</li>
            <li>Object</li>
            <li>Encapsulation</li>
            <li>Inheritance</li>
            <li>Polymorphism</li>
            <li>Abstraction</li>
        </ul>

        <h2>Unit 2: Classes and Objects</h2>
        <p>
            A class is a blueprint for creating objects. An object is an
            instance of a class.
        </p>

        <h2>Unit 3: Encapsulation</h2>
        <p>
            Encapsulation combines data and methods into a single unit
            and helps protect data from unauthorized access.
        </p>

        <h2>Unit 4: Inheritance</h2>
        <ul>
            <li>Single Inheritance</li>
            <li>Multilevel Inheritance</li>
            <li>Hierarchical Inheritance</li>
            <li>Multiple Inheritance</li>
        </ul>

        <h2>Unit 5: Polymorphism</h2>
        <p>
            Polymorphism means one interface can have multiple forms.
        </p>

        <ul>
            <li>Compile-time Polymorphism</li>
            <li>Run-time Polymorphism</li>
            <li>Method Overloading</li>
            <li>Method Overriding</li>
        </ul>

        <h2>Unit 6: Abstraction</h2>
        <p>
            Abstraction hides unnecessary implementation details and
            shows only the important features.
        </p>

        <h2>Unit 7: Exception Handling</h2>
        <ul>
            <li>Try</li>
            <li>Catch</li>
            <li>Finally</li>
            <li>Throw</li>
            <li>Throws</li>
        </ul>

        <h2>Important Questions</h2>
        <ol>
            <li>What is Object Oriented Programming?</li>
            <li>Explain class and object.</li>
            <li>Explain the four main principles of OOP.</li>
            <li>What is encapsulation?</li>
            <li>Explain inheritance and its types.</li>
            <li>What is polymorphism?</li>
            <li>Differentiate overloading and overriding.</li>
            <li>What is abstraction?</li>
            <li>Explain exception handling.</li>
        </ol>
    `);
}


else if (noteName === "Computer Organization") {

    notesWindow.document.write(`
        <h1>🖥️ Computer Organization</h1>

        <h2>Unit 1: Computer Organization</h2>
        <p>
            Computer Organization deals with the internal structure and
            operation of computer systems.
        </p>

        <h2>Unit 2: CPU</h2>
        <ul>
            <li>Arithmetic Logic Unit (ALU)</li>
            <li>Control Unit</li>
            <li>Registers</li>
            <li>Program Counter</li>
            <li>Instruction Register</li>
        </ul>

        <h2>Unit 3: Memory</h2>
        <ul>
            <li>Primary Memory</li>
            <li>Secondary Memory</li>
            <li>RAM</li>
            <li>ROM</li>
            <li>Cache Memory</li>
            <li>Virtual Memory</li>
        </ul>

        <h2>Unit 4: Input and Output</h2>
        <p>
            I/O devices allow the computer to communicate with users
            and external devices.
        </p>

        <ul>
            <li>Keyboard</li>
            <li>Mouse</li>
            <li>Monitor</li>
            <li>Printer</li>
            <li>Scanner</li>
        </ul>

        <h2>Unit 5: Instruction Cycle</h2>
        <ul>
            <li>Fetch</li>
            <li>Decode</li>
            <li>Execute</li>
            <li>Store</li>
        </ul>

        <h2>Unit 6: Data Representation</h2>
        <ul>
            <li>Binary</li>
            <li>Decimal</li>
            <li>Octal</li>
            <li>Hexadecimal</li>
            <li>Character Representation</li>
        </ul>

        <h2>Important Questions</h2>
        <ol>
            <li>What is computer organization?</li>
            <li>Explain the basic components of CPU.</li>
            <li>What is ALU?</li>
            <li>Explain different types of registers.</li>
            <li>Explain primary and secondary memory.</li>
            <li>What is cache memory?</li>
            <li>Explain the instruction cycle.</li>
            <li>Explain different number systems.</li>
        </ol>
    `);
}


else if (noteName === "Mathematics-II") {

    notesWindow.document.write(`
        <h1>📐 Mathematics-II</h1>

        <h2>Unit 1: Differential Equations</h2>
        <p>
            A differential equation is an equation involving derivatives
            of an unknown function.
        </p>

        <ul>
            <li>First Order Differential Equations</li>
            <li>Variable Separable Equations</li>
            <li>Linear Differential Equations</li>
        </ul>

        <h2>Unit 2: Partial Differentiation</h2>
        <p>
            Partial differentiation is used when a function depends on
            more than one independent variable.
        </p>

        <h2>Unit 3: Multiple Integration</h2>
        <ul>
            <li>Double Integration</li>
            <li>Triple Integration</li>
            <li>Change of Order of Integration</li>
            <li>Applications</li>
        </ul>

        <h2>Unit 4: Vector Algebra</h2>
        <ul>
            <li>Vectors</li>
            <li>Dot Product</li>
            <li>Cross Product</li>
            <li>Scalar Triple Product</li>
        </ul>

        <h2>Unit 5: Probability</h2>
        <ul>
            <li>Random Experiments</li>
            <li>Events</li>
            <li>Conditional Probability</li>
            <li>Bayes' Theorem</li>
        </ul>

        <h2>Unit 6: Statistics</h2>
        <ul>
            <li>Mean</li>
            <li>Median</li>
            <li>Mode</li>
            <li>Variance</li>
            <li>Standard Deviation</li>
        </ul>

        <h2>Important Questions</h2>
        <ol>
            <li>What is a differential equation?</li>
            <li>Solve first-order differential equations.</li>
            <li>Explain partial differentiation.</li>
            <li>Explain double integration.</li>
            <li>What is a vector?</li>
            <li>Explain dot and cross products.</li>
            <li>What is conditional probability?</li>
            <li>Explain Bayes' theorem.</li>
            <li>Calculate mean, median and mode.</li>
            <li>What is standard deviation?</li>
        </ol>
    `);
}
else if (noteName === "Operating System") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Operating System Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>

        <h1>💻 Operating System — BCA Semester 3</h1>

        <h2>Unit 1: Introduction to Operating System</h2>
        <ul>
            <li>What is an Operating System?</li>
            <li>Functions of Operating System</li>
            <li>Types of Operating Systems</li>
            <li>Batch Operating System</li>
            <li>Time Sharing Operating System</li>
            <li>Real Time Operating System</li>
            <li>Distributed Operating System</li>
            <li>Multiprogramming and Multitasking</li>
        </ul>

        <h2>Unit 2: Process Management</h2>
        <ul>
            <li>What is a Process?</li>
            <li>Process States</li>
            <li>Process Control Block (PCB)</li>
            <li>Process Scheduling</li>
            <li>FCFS Scheduling</li>
            <li>SJF Scheduling</li>
            <li>Round Robin Scheduling</li>
            <li>Priority Scheduling</li>
        </ul>

        <h2>Unit 3: Memory Management</h2>
        <ul>
            <li>Memory Management</li>
            <li>Contiguous Memory Allocation</li>
            <li>Paging</li>
            <li>Segmentation</li>
            <li>Virtual Memory</li>
            <li>Page Replacement</li>
        </ul>

        <h2>Unit 4: File Management</h2>
        <ul>
            <li>File System</li>
            <li>File Attributes</li>
            <li>File Operations</li>
            <li>Directory Structure</li>
            <li>File Allocation Methods</li>
        </ul>

        <h2>Unit 5: Deadlock</h2>
        <ul>
            <li>What is Deadlock?</li>
            <li>Necessary Conditions of Deadlock</li>
            <li>Deadlock Prevention</li>
            <li>Deadlock Avoidance</li>
            <li>Banker's Algorithm</li>
            <li>Deadlock Detection</li>
        </ul>

        </body>
        </html>
    `);
}


else if (noteName === "Computer Networks") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Computer Networks Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>

        <h1>🌐 Computer Networks — BCA Semester 3</h1>

        <h2>Unit 1: Introduction</h2>
        <ul>
            <li>What is Computer Network?</li>
            <li>Advantages of Computer Networks</li>
            <li>Types of Networks: LAN, MAN, WAN</li>
            <li>Network Topologies</li>
            <li>Client-Server Model</li>
            <li>Peer-to-Peer Network</li>
        </ul>

        <h2>Unit 2: OSI and TCP/IP Models</h2>
        <ul>
            <li>OSI Reference Model</li>
            <li>Seven Layers of OSI Model</li>
            <li>Functions of Each Layer</li>
            <li>TCP/IP Model</li>
            <li>Difference between OSI and TCP/IP</li>
        </ul>

        <h2>Unit 3: Data Communication</h2>
        <ul>
            <li>Transmission Media</li>
            <li>Guided and Unguided Media</li>
            <li>Twisted Pair Cable</li>
            <li>Coaxial Cable</li>
            <li>Optical Fiber</li>
            <li>Wireless Communication</li>
        </ul>

        <h2>Unit 4: Network Protocols</h2>
        <ul>
            <li>IP Address</li>
            <li>IPv4 and IPv6</li>
            <li>TCP</li>
            <li>UDP</li>
            <li>HTTP and HTTPS</li>
            <li>FTP</li>
            <li>DNS</li>
            <li>DHCP</li>
        </ul>

        <h2>Unit 5: Network Security</h2>
        <ul>
            <li>Introduction to Network Security</li>
            <li>Authentication</li>
            <li>Encryption</li>
            <li>Firewall</li>
            <li>Virus and Malware</li>
            <li>Common Network Attacks</li>
        </ul>

        </body>
        </html>
    `);
}


else if (noteName === "Web Development") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Web Development Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>

        <h1>🌐 Web Development — BCA Semester 3</h1>

        <h2>Unit 1: HTML</h2>
        <ul>
            <li>Introduction to HTML</li>
            <li>HTML Document Structure</li>
            <li>HTML Tags and Elements</li>
            <li>Headings and Paragraphs</li>
            <li>Links and Images</li>
            <li>Lists</li>
            <li>Tables</li>
            <li>Forms</li>
        </ul>

        <h2>Unit 2: CSS</h2>
        <ul>
            <li>Introduction to CSS</li>
            <li>Inline, Internal and External CSS</li>
            <li>Selectors</li>
            <li>Colors and Fonts</li>
            <li>Box Model</li>
            <li>Margin and Padding</li>
            <li>Flexbox</li>
            <li>Responsive Web Design</li>
        </ul>

        <h2>Unit 3: JavaScript</h2>
        <ul>
            <li>Introduction to JavaScript</li>
            <li>Variables and Data Types</li>
            <li>Operators</li>
            <li>Conditional Statements</li>
            <li>Loops</li>
            <li>Functions</li>
            <li>Arrays</li>
            <li>Objects</li>
        </ul>

        <h2>Unit 4: DOM and Events</h2>
        <ul>
            <li>Document Object Model</li>
            <li>DOM Manipulation</li>
            <li>JavaScript Events</li>
            <li>Event Handling</li>
            <li>Form Validation</li>
        </ul>

        <h2>Unit 5: Web Technologies</h2>
        <ul>
            <li>Client-Side and Server-Side Scripting</li>
            <li>Web Servers</li>
            <li>HTTP and HTTPS</li>
            <li>Cookies and Sessions</li>
            <li>Introduction to APIs</li>
        </ul>

        </body>
        </html>
    `);
}


else if (noteName === "Python Programming") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Python Programming Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>

        <h1>🐍 Python Programming — BCA Semester 3</h1>

        <h2>Unit 1: Python Basics</h2>
        <ul>
            <li>Introduction to Python</li>
            <li>Features of Python</li>
            <li>Python Syntax</li>
            <li>Variables</li>
            <li>Data Types</li>
            <li>Input and Output</li>
            <li>Operators</li>
        </ul>

        <h2>Unit 2: Control Statements</h2>
        <ul>
            <li>if Statement</li>
            <li>if-else Statement</li>
            <li>Nested if</li>
            <li>for Loop</li>
            <li>while Loop</li>
            <li>break and continue</li>
            <li>pass Statement</li>
        </ul>

        <h2>Unit 3: Data Structures</h2>
        <ul>
            <li>Lists</li>
            <li>Tuples</li>
            <li>Sets</li>
            <li>Dictionaries</li>
            <li>String Operations</li>
            <li>List Methods</li>
            <li>Dictionary Methods</li>
        </ul>

        <h2>Unit 4: Functions and Modules</h2>
        <ul>
            <li>Defining Functions</li>
            <li>Function Arguments</li>
            <li>Return Statement</li>
            <li>Lambda Functions</li>
            <li>Modules</li>
            <li>Packages</li>
        </ul>

        <h2>Unit 5: Exception and File Handling</h2>
        <ul>
            <li>Exception Handling</li>
            <li>try-except</li>
            <li>finally</li>
            <li>File Handling</li>
            <li>Reading and Writing Files</li>
            <li>Introduction to Object Oriented Programming in Python</li>
        </ul>

        </body>
        </html>
    `);
}


else if (noteName === "Software Engineering") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Software Engineering Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>

        <h1>⚙️ Software Engineering — BCA Semester 3</h1>

        <h2>Unit 1: Introduction</h2>
        <ul>
            <li>What is Software Engineering?</li>
            <li>Characteristics of Software</li>
            <li>Software Crisis</li>
            <li>Software Development Process</li>
            <li>Software Engineering Principles</li>
        </ul>

        <h2>Unit 2: SDLC Models</h2>
        <ul>
            <li>Software Development Life Cycle</li>
            <li>Waterfall Model</li>
            <li>Prototype Model</li>
            <li>Spiral Model</li>
            <li>Incremental Model</li>
            <li>Agile Model</li>
        </ul>

        <h2>Unit 3: Requirements Engineering</h2>
        <ul>
            <li>Software Requirements</li>
            <li>Functional Requirements</li>
            <li>Non-Functional Requirements</li>
            <li>Requirement Gathering</li>
            <li>Requirement Analysis</li>
            <li>Software Requirement Specification (SRS)</li>
        </ul>

        <h2>Unit 4: Software Design and Testing</h2>
        <ul>
            <li>Software Design</li>
            <li>Modular Design</li>
            <li>Coupling and Cohesion</li>
            <li>Software Testing</li>
            <li>Unit Testing</li>
            <li>Integration Testing</li>
            <li>System Testing</li>
            <li>Acceptance Testing</li>
        </ul>

        <h2>Unit 5: Software Maintenance and Quality</h2>
        <ul>
            <li>Software Maintenance</li>
            <li>Types of Maintenance</li>
            <li>Software Quality</li>
            <li>Software Quality Assurance</li>
            <li>Software Reliability</li>
            <li>Software Project Management</li>
        </ul>

        </body>
        </html>
    `);
}
else if (noteName === "Java Programming") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Java Programming Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>☕ Java Programming — BCA Semester 4</h1>

        <h2>Unit 1: Java Basics</h2>
        <ul>
            <li>Introduction to Java</li>
            <li>Features of Java</li>
            <li>JDK, JRE and JVM</li>
            <li>Java Program Structure</li>
            <li>Variables and Data Types</li>
            <li>Operators and Expressions</li>
        </ul>

        <h2>Unit 2: Control Statements and Arrays</h2>
        <ul>
            <li>if, if-else and switch</li>
            <li>for, while and do-while loops</li>
            <li>break and continue</li>
            <li>Arrays</li>
            <li>String and String Methods</li>
        </ul>

        <h2>Unit 3: Object Oriented Programming</h2>
        <ul>
            <li>Class and Object</li>
            <li>Constructor</li>
            <li>Inheritance</li>
            <li>Polymorphism</li>
            <li>Method Overloading</li>
            <li>Method Overriding</li>
            <li>Encapsulation</li>
            <li>Abstraction</li>
        </ul>

        <h2>Unit 4: Exception and Package</h2>
        <ul>
            <li>Exception Handling</li>
            <li>try, catch and finally</li>
            <li>throw and throws</li>
            <li>Packages</li>
            <li>Interfaces</li>
        </ul>

        <h2>Unit 5: Advanced Java</h2>
        <ul>
            <li>Multithreading</li>
            <li>File Handling</li>
            <li>Collections Framework</li>
            <li>JDBC Introduction</li>
            <li>Database Connectivity</li>
        </ul>
        </body>
        </html>
    `);
}


else if (noteName === "Advanced Database Management") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Advanced Database Management Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>🗄️ Advanced Database Management — BCA Semester 4</h1>

        <h2>Unit 1: Database Concepts</h2>
        <ul>
            <li>Database Architecture</li>
            <li>Database Models</li>
            <li>Relational Database</li>
            <li>Keys and Constraints</li>
            <li>ER Model</li>
        </ul>

        <h2>Unit 2: Advanced SQL</h2>
        <ul>
            <li>SQL Commands</li>
            <li>Joins</li>
            <li>Subqueries</li>
            <li>Views</li>
            <li>Stored Procedures</li>
            <li>Triggers</li>
        </ul>

        <h2>Unit 3: Normalization</h2>
        <ul>
            <li>Functional Dependency</li>
            <li>1NF</li>
            <li>2NF</li>
            <li>3NF</li>
            <li>BCNF</li>
        </ul>

        <h2>Unit 4: Transactions</h2>
        <ul>
            <li>Transaction Management</li>
            <li>ACID Properties</li>
            <li>Concurrency Control</li>
            <li>Serializability</li>
            <li>Deadlock</li>
        </ul>

        <h2>Unit 5: Modern Databases</h2>
        <ul>
            <li>Distributed Database</li>
            <li>NoSQL Database</li>
            <li>MongoDB Introduction</li>
            <li>Database Security</li>
            <li>Database Backup and Recovery</li>
        </ul>
        </body>
        </html>
    `);
}


else if (noteName === "Computer Graphics") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Computer Graphics Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>🎨 Computer Graphics — BCA Semester 4</h1>

        <h2>Unit 1: Introduction</h2>
        <ul>
            <li>What is Computer Graphics?</li>
            <li>Applications of Computer Graphics</li>
            <li>Graphics Display Devices</li>
            <li>Raster Scan Display</li>
            <li>Random Scan Display</li>
        </ul>

        <h2>Unit 2: Drawing Algorithms</h2>
        <ul>
            <li>DDA Line Drawing Algorithm</li>
            <li>Bresenham Line Algorithm</li>
            <li>Circle Drawing Algorithm</li>
            <li>Ellipse Drawing</li>
        </ul>

        <h2>Unit 3: 2D Transformations</h2>
        <ul>
            <li>Translation</li>
            <li>Rotation</li>
            <li>Scaling</li>
            <li>Reflection</li>
            <li>Shearing</li>
        </ul>

        <h2>Unit 4: Clipping</h2>
        <ul>
            <li>Window and Viewport</li>
            <li>Line Clipping</li>
            <li>Cohen-Sutherland Algorithm</li>
            <li>Polygon Clipping</li>
        </ul>

        <h2>Unit 5: 3D Graphics</h2>
        <ul>
            <li>3D Coordinates</li>
            <li>3D Transformations</li>
            <li>Projection</li>
            <li>Parallel Projection</li>
            <li>Perspective Projection</li>
        </ul>
        </body>
        </html>
    `);
}


else if (noteName === "Data Communication") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Data Communication Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>📡 Data Communication — BCA Semester 4</h1>

        <h2>Unit 1: Basics</h2>
        <ul>
            <li>Data Communication</li>
            <li>Components of Communication</li>
            <li>Communication Modes</li>
            <li>Simplex, Half Duplex and Full Duplex</li>
        </ul>

        <h2>Unit 2: Transmission Media</h2>
        <ul>
            <li>Twisted Pair</li>
            <li>Coaxial Cable</li>
            <li>Optical Fiber</li>
            <li>Radio Waves</li>
            <li>Microwave</li>
            <li>Satellite Communication</li>
        </ul>

        <h2>Unit 3: Transmission Techniques</h2>
        <ul>
            <li>Analog and Digital Signals</li>
            <li>Modulation</li>
            <li>Amplitude Modulation</li>
            <li>Frequency Modulation</li>
            <li>Phase Modulation</li>
        </ul>

        <h2>Unit 4: Multiplexing</h2>
        <ul>
            <li>FDM</li>
            <li>TDM</li>
            <li>WDM</li>
            <li>Switching Techniques</li>
            <li>Circuit Switching</li>
            <li>Packet Switching</li>
        </ul>

        <h2>Unit 5: Error and Flow Control</h2>
        <ul>
            <li>Error Detection</li>
            <li>Parity Check</li>
            <li>Checksum</li>
            <li>CRC</li>
            <li>Flow Control</li>
            <li>ARQ</li>
        </ul>
        </body>
        </html>
    `);
}


else if (noteName === "System Analysis and Design") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>System Analysis and Design Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>📋 System Analysis and Design — BCA Semester 4</h1>

        <h2>Unit 1: System Concepts</h2>
        <ul>
            <li>What is a System?</li>
            <li>System Characteristics</li>
            <li>Types of Systems</li>
            <li>Information System</li>
            <li>System Development</li>
        </ul>

        <h2>Unit 2: System Analysis</h2>
        <ul>
            <li>System Analysis</li>
            <li>Requirement Gathering</li>
            <li>Feasibility Study</li>
            <li>Technical Feasibility</li>
            <li>Economic Feasibility</li>
        </ul>

        <h2>Unit 3: System Design</h2>
        <ul>
            <li>System Design</li>
            <li>Input Design</li>
            <li>Output Design</li>
            <li>Database Design</li>
            <li>User Interface Design</li>
        </ul>

        <h2>Unit 4: System Modeling</h2>
        <ul>
            <li>Data Flow Diagram</li>
            <li>Context Diagram</li>
            <li>Entity Relationship Diagram</li>
            <li>Decision Tables</li>
            <li>Decision Trees</li>
        </ul>

        <h2>Unit 5: Implementation</h2>
        <ul>
            <li>System Implementation</li>
            <li>System Testing</li>
            <li>System Conversion</li>
            <li>Maintenance</li>
            <li>System Security</li>
        </ul>
        </body>
        </html>
    `);
}
else if (noteName === "Artificial Intelligence") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Artificial Intelligence Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>🤖 Artificial Intelligence — BCA Semester 5</h1>

        <h2>Unit 1: Introduction to AI</h2>
        <ul>
            <li>What is Artificial Intelligence?</li>
            <li>History of AI</li>
            <li>Applications of AI</li>
            <li>AI and Human Intelligence</li>
            <li>Types of AI</li>
        </ul>

        <h2>Unit 2: Problem Solving</h2>
        <ul>
            <li>Problem Formulation</li>
            <li>State Space Search</li>
            <li>Breadth First Search</li>
            <li>Depth First Search</li>
            <li>Heuristic Search</li>
            <li>A* Algorithm</li>
        </ul>

        <h2>Unit 3: Knowledge Representation</h2>
        <ul>
            <li>Knowledge Representation</li>
            <li>Logic</li>
            <li>Propositional Logic</li>
            <li>Predicate Logic</li>
            <li>Semantic Networks</li>
        </ul>

        <h2>Unit 4: Machine Learning Basics</h2>
        <ul>
            <li>Introduction to Machine Learning</li>
            <li>Supervised Learning</li>
            <li>Unsupervised Learning</li>
            <li>Classification</li>
            <li>Clustering</li>
        </ul>

        <h2>Unit 5: AI Applications</h2>
        <ul>
            <li>Expert Systems</li>
            <li>Natural Language Processing</li>
            <li>Robotics</li>
            <li>Computer Vision</li>
            <li>AI Ethics</li>
        </ul>
        </body>
        </html>
    `);
}


else if (noteName === "Machine Learning") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Machine Learning Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>🧠 Machine Learning — BCA Semester 5</h1>

        <h2>Unit 1: Introduction</h2>
        <ul>
            <li>What is Machine Learning?</li>
            <li>Types of Machine Learning</li>
            <li>Training and Testing Data</li>
            <li>Features and Labels</li>
        </ul>

        <h2>Unit 2: Supervised Learning</h2>
        <ul>
            <li>Linear Regression</li>
            <li>Logistic Regression</li>
            <li>Decision Tree</li>
            <li>K-Nearest Neighbors</li>
        </ul>

        <h2>Unit 3: Unsupervised Learning</h2>
        <ul>
            <li>Clustering</li>
            <li>K-Means Clustering</li>
            <li>Hierarchical Clustering</li>
            <li>Dimensionality Reduction</li>
        </ul>

        <h2>Unit 4: Model Evaluation</h2>
        <ul>
            <li>Accuracy</li>
            <li>Precision</li>
            <li>Recall</li>
            <li>F1 Score</li>
            <li>Confusion Matrix</li>
        </ul>

        <h2>Unit 5: ML Applications</h2>
        <ul>
            <li>Recommendation Systems</li>
            <li>Image Classification</li>
            <li>Spam Detection</li>
            <li>Fraud Detection</li>
            <li>ML in Business</li>
        </ul>
        </body>
        </html>
    `);
}


else if (noteName === "Cloud Computing") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Cloud Computing Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>☁️ Cloud Computing — BCA Semester 5</h1>

        <h2>Unit 1: Introduction</h2>
        <ul>
            <li>What is Cloud Computing?</li>
            <li>Characteristics of Cloud Computing</li>
            <li>Advantages and Disadvantages</li>
            <li>Cloud Architecture</li>
        </ul>

        <h2>Unit 2: Cloud Service Models</h2>
        <ul>
            <li>IaaS</li>
            <li>PaaS</li>
            <li>SaaS</li>
            <li>Public Cloud</li>
            <li>Private Cloud</li>
            <li>Hybrid Cloud</li>
        </ul>

        <h2>Unit 3: Virtualization</h2>
        <ul>
            <li>Virtualization</li>
            <li>Virtual Machines</li>
            <li>Hypervisors</li>
            <li>Server Virtualization</li>
            <li>Storage Virtualization</li>
        </ul>

        <h2>Unit 4: Cloud Security</h2>
        <ul>
            <li>Cloud Security</li>
            <li>Data Privacy</li>
            <li>Authentication</li>
            <li>Access Control</li>
            <li>Data Encryption</li>
        </ul>

        <h2>Unit 5: Cloud Applications</h2>
        <ul>
            <li>Cloud Storage</li>
            <li>Cloud Databases</li>
            <li>Cloud Networking</li>
            <li>Serverless Computing</li>
            <li>Cloud-based Applications</li>
        </ul>
        </body>
        </html>
    `);
}


else if (noteName === "Cyber Security") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Cyber Security Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>🔐 Cyber Security — BCA Semester 5</h1>

        <h2>Unit 1: Introduction</h2>
        <ul>
            <li>What is Cyber Security?</li>
            <li>Cyber Threats</li>
            <li>Information Security</li>
            <li>CIA Triad</li>
        </ul>

        <h2>Unit 2: Cyber Attacks</h2>
        <ul>
            <li>Malware</li>
            <li>Virus</li>
            <li>Worm</li>
            <li>Trojan Horse</li>
            <li>Phishing</li>
            <li>Denial of Service</li>
        </ul>

        <h2>Unit 3: Cryptography</h2>
        <ul>
            <li>Cryptography</li>
            <li>Symmetric Encryption</li>
            <li>Asymmetric Encryption</li>
            <li>Hashing</li>
            <li>Digital Signature</li>
        </ul>

        <h2>Unit 4: Network Security</h2>
        <ul>
            <li>Firewall</li>
            <li>VPN</li>
            <li>Intrusion Detection System</li>
            <li>Secure Network Communication</li>
        </ul>

        <h2>Unit 5: Security Management</h2>
        <ul>
            <li>Password Security</li>
            <li>Authentication</li>
            <li>Access Control</li>
            <li>Security Policies</li>
            <li>Cyber Laws</li>
        </ul>
        </body>
        </html>
    `);
}


else if (noteName === "Data Analytics") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Data Analytics Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>📊 Data Analytics — BCA Semester 5</h1>

        <h2>Unit 1: Introduction</h2>
        <ul>
            <li>What is Data Analytics?</li>
            <li>Types of Data</li>
            <li>Data Analytics Process</li>
            <li>Applications of Data Analytics</li>
        </ul>

        <h2>Unit 2: Data Collection</h2>
        <ul>
            <li>Data Sources</li>
            <li>Structured and Unstructured Data</li>
            <li>Data Collection Methods</li>
            <li>Data Integration</li>
        </ul>

        <h2>Unit 3: Data Cleaning</h2>
        <ul>
            <li>Data Cleaning</li>
            <li>Missing Values</li>
            <li>Duplicate Data</li>
            <li>Data Transformation</li>
        </ul>

        <h2>Unit 4: Data Visualization</h2>
        <ul>
            <li>Charts and Graphs</li>
            <li>Bar Chart</li>
            <li>Pie Chart</li>
            <li>Line Graph</li>
            <li>Dashboards</li>
        </ul>

        <h2>Unit 5: Analytics Tools</h2>
        <ul>
            <li>Excel for Data Analysis</li>
            <li>Python for Data Analytics</li>
            <li>Pandas</li>
            <li>NumPy</li>
            <li>Introduction to Data Visualization Libraries</li>
        </ul>
        </body>
        </html>
    `);
}
else if (noteName === "Big Data") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Big Data Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>📦 Big Data — BCA Semester 6</h1>

        <h2>Unit 1: Introduction</h2>
        <ul>
            <li>What is Big Data?</li>
            <li>Characteristics of Big Data</li>
            <li>5 Vs of Big Data</li>
            <li>Big Data Applications</li>
        </ul>

        <h2>Unit 2: Hadoop</h2>
        <ul>
            <li>Introduction to Hadoop</li>
            <li>Hadoop Architecture</li>
            <li>HDFS</li>
            <li>MapReduce</li>
            <li>YARN</li>
        </ul>

        <h2>Unit 3: Big Data Processing</h2>
        <ul>
            <li>Data Processing</li>
            <li>Batch Processing</li>
            <li>Real-Time Processing</li>
            <li>Distributed Processing</li>
        </ul>

        <h2>Unit 4: NoSQL</h2>
        <ul>
            <li>NoSQL Databases</li>
            <li>Key-Value Databases</li>
            <li>Document Databases</li>
            <li>MongoDB</li>
        </ul>

        <h2>Unit 5: Applications</h2>
        <ul>
            <li>Big Data in Business</li>
            <li>Big Data in Healthcare</li>
            <li>Big Data in Education</li>
            <li>Big Data Security</li>
        </ul>
        </body>
        </html>
    `);
}


else if (noteName === "Mobile Application Development") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Mobile Application Development Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>📱 Mobile Application Development — BCA Semester 6</h1>

        <h2>Unit 1: Mobile Computing</h2>
        <ul>
            <li>Introduction to Mobile Applications</li>
            <li>Mobile Operating Systems</li>
            <li>Mobile Application Architecture</li>
        </ul>

        <h2>Unit 2: Android Basics</h2>
        <ul>
            <li>Introduction to Android</li>
            <li>Android Studio</li>
            <li>Activities</li>
            <li>Layouts</li>
            <li>Views and Widgets</li>
        </ul>

        <h2>Unit 3: Android Components</h2>
        <ul>
            <li>Activities</li>
            <li>Services</li>
            <li>Broadcast Receivers</li>
            <li>Content Providers</li>
            <li>Intents</li>
        </ul>

        <h2>Unit 4: Data Storage</h2>
        <ul>
            <li>Shared Preferences</li>
            <li>SQLite Database</li>
            <li>File Storage</li>
            <li>Cloud Database Basics</li>
        </ul>

        <h2>Unit 5: App Deployment</h2>
        <ul>
            <li>Testing Mobile Applications</li>
            <li>Debugging</li>
            <li>App Security</li>
            <li>Application Deployment</li>
            <li>Publishing Applications</li>
        </ul>
        </body>
        </html>
    `);
}


else if (noteName === "Internet of Things") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Internet of Things Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>🌐 Internet of Things — BCA Semester 6</h1>

        <h2>Unit 1: Introduction to IoT</h2>
        <ul>
            <li>What is IoT?</li>
            <li>Characteristics of IoT</li>
            <li>IoT Architecture</li>
            <li>Applications of IoT</li>
        </ul>

        <h2>Unit 2: IoT Components</h2>
        <ul>
            <li>Sensors</li>
            <li>Actuators</li>
            <li>Microcontrollers</li>
            <li>Embedded Systems</li>
        </ul>

        <h2>Unit 3: IoT Communication</h2>
        <ul>
            <li>Wi-Fi</li>
            <li>Bluetooth</li>
            <li>ZigBee</li>
            <li>RFID</li>
            <li>MQTT</li>
        </ul>

        <h2>Unit 4: IoT Platforms</h2>
        <ul>
            <li>Cloud and IoT</li>
            <li>IoT Gateways</li>
            <li>Edge Computing</li>
            <li>Data Processing</li>
        </ul>

        <h2>Unit 5: IoT Security</h2>
        <ul>
            <li>IoT Security Challenges</li>
            <li>Device Authentication</li>
            <li>Data Encryption</li>
            <li>Privacy</li>
            <li>Secure IoT Architecture</li>
        </ul>
        </body>
        </html>
    `);
}


else if (noteName === "Project Work") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Project Work Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>📚 Project Work — BCA Semester 6</h1>

        <h2>Unit 1: Project Planning</h2>
        <ul>
            <li>Project Selection</li>
            <li>Problem Definition</li>
            <li>Objectives</li>
            <li>Project Scope</li>
        </ul>

        <h2>Unit 2: Requirement Analysis</h2>
        <ul>
            <li>Requirement Gathering</li>
            <li>Functional Requirements</li>
            <li>Non-Functional Requirements</li>
            <li>Feasibility Study</li>
        </ul>

        <h2>Unit 3: System Design</h2>
        <ul>
            <li>System Architecture</li>
            <li>Database Design</li>
            <li>User Interface Design</li>
            <li>Data Flow Diagram</li>
        </ul>

        <h2>Unit 4: Development and Testing</h2>
        <ul>
            <li>Implementation</li>
            <li>Programming</li>
            <li>Testing</li>
            <li>Debugging</li>
            <li>Deployment</li>
        </ul>

        <h2>Unit 5: Documentation</h2>
        <ul>
            <li>Project Report</li>
            <li>Project Presentation</li>
            <li>Testing Report</li>
            <li>Future Scope</li>
            <li>Conclusion</li>
        </ul>
        </body>
        </html>
    `);
}


else if (noteName === "Professional Elective") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Professional Elective Notes</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>🎓 Professional Elective — BCA Semester 6</h1>

        <h2>Unit 1: Career-Oriented Technologies</h2>
        <ul>
            <li>Introduction to Professional Electives</li>
            <li>Emerging Technologies</li>
            <li>Industry Skills</li>
        </ul>

        <h2>Unit 2: Web and Software Technologies</h2>
        <ul>
            <li>Advanced Web Development</li>
            <li>Software Development</li>
            <li>Application Development</li>
        </ul>

        <h2>Unit 3: Data Technologies</h2>
        <ul>
            <li>Data Analytics</li>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
        </ul>

        <h2>Unit 4: Security and Cloud</h2>
        <ul>
            <li>Cyber Security</li>
            <li>Cloud Computing</li>
            <li>Network Security</li>
        </ul>

        <h2>Unit 5: Professional Skills</h2>
        <ul>
            <li>Resume Development</li>
            <li>Interview Preparation</li>
            <li>Communication Skills</li>
            <li>Team Work</li>
            <li>Problem Solving</li>
        </ul>
        </body>
        </html>
    `);
}
else if (noteName === "Principles of Management") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Principles of Management</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>📚 Principles of Management — BBA Semester 1</h1>

        <h2>Unit 1: Introduction to Management</h2>
        <ul>
            <li>Meaning and Definition of Management</li>
            <li>Nature and Importance of Management</li>
            <li>Functions of Management</li>
            <li>Levels of Management</li>
            <li>Management as Art, Science and Profession</li>
        </ul>

        <h2>Unit 2: Planning</h2>
        <ul>
            <li>Meaning and Importance of Planning</li>
            <li>Types of Plans</li>
            <li>Planning Process</li>
            <li>Objectives and Policies</li>
            <li>Decision Making</li>
        </ul>

        <h2>Unit 3: Organizing</h2>
        <ul>
            <li>Meaning of Organization</li>
            <li>Principles of Organization</li>
            <li>Departmentation</li>
            <li>Delegation of Authority</li>
            <li>Centralization and Decentralization</li>
        </ul>

        <h2>Unit 4: Directing</h2>
        <ul>
            <li>Leadership</li>
            <li>Motivation</li>
            <li>Communication</li>
            <li>Supervision</li>
        </ul>

        <h2>Unit 5: Controlling</h2>
        <ul>
            <li>Meaning of Controlling</li>
            <li>Steps in Controlling</li>
            <li>Types of Control</li>
            <li>Budgetary Control</li>
            <li>Management by Objectives</li>
        </ul>
        </body>
        </html>
    `);
}


else if (noteName === "Business Economics") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Business Economics</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>💰 Business Economics — BBA Semester 1</h1>

        <h2>Unit 1: Introduction</h2>
        <ul>
            <li>Meaning of Economics</li>
            <li>Nature and Scope of Business Economics</li>
            <li>Microeconomics and Macroeconomics</li>
            <li>Basic Economic Problems</li>
        </ul>

        <h2>Unit 2: Demand</h2>
        <ul>
            <li>Meaning of Demand</li>
            <li>Law of Demand</li>
            <li>Determinants of Demand</li>
            <li>Elasticity of Demand</li>
            <li>Demand Forecasting</li>
        </ul>

        <h2>Unit 3: Production</h2>
        <ul>
            <li>Production Function</li>
            <li>Factors of Production</li>
            <li>Law of Variable Proportions</li>
            <li>Returns to Scale</li>
        </ul>

        <h2>Unit 4: Cost and Revenue</h2>
        <ul>
            <li>Fixed and Variable Cost</li>
            <li>Total, Average and Marginal Cost</li>
            <li>Revenue Concepts</li>
            <li>Break-Even Analysis</li>
        </ul>

        <h2>Unit 5: Market Structure</h2>
        <ul>
            <li>Perfect Competition</li>
            <li>Monopoly</li>
            <li>Monopolistic Competition</li>
            <li>Oligopoly</li>
        </ul>
        </body>
        </html>
    `);
}


else if (noteName === "Financial Accounting") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Financial Accounting</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>📒 Financial Accounting — BBA Semester 1</h1>

        <h2>Unit 1: Accounting Basics</h2>
        <ul>
            <li>Meaning of Accounting</li>
            <li>Objectives of Accounting</li>
            <li>Accounting Principles</li>
            <li>Accounting Concepts</li>
        </ul>

        <h2>Unit 2: Journal and Ledger</h2>
        <ul>
            <li>Journal Entries</li>
            <li>Ledger</li>
            <li>Trial Balance</li>
            <li>Rules of Debit and Credit</li>
        </ul>

        <h2>Unit 3: Final Accounts</h2>
        <ul>
            <li>Trading Account</li>
            <li>Profit and Loss Account</li>
            <li>Balance Sheet</li>
            <li>Adjustments</li>
        </ul>

        <h2>Unit 4: Depreciation</h2>
        <ul>
            <li>Meaning of Depreciation</li>
            <li>Straight Line Method</li>
            <li>Written Down Value Method</li>
        </ul>

        <h2>Unit 5: Cash and Bank</h2>
        <ul>
            <li>Cash Book</li>
            <li>Bank Reconciliation Statement</li>
            <li>Petty Cash Book</li>
            <li>Errors and Rectification</li>
        </ul>
        </body>
        </html>
    `);
}


else if (noteName === "Business Communication") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Business Communication</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>💬 Business Communication — BBA Semester 1</h1>

        <h2>Unit 1: Communication Basics</h2>
        <ul>
            <li>Meaning of Communication</li>
            <li>Communication Process</li>
            <li>Types of Communication</li>
            <li>Importance of Communication</li>
        </ul>

        <h2>Unit 2: Business Writing</h2>
        <ul>
            <li>Business Letters</li>
            <li>Emails</li>
            <li>Reports</li>
            <li>Notices and Memos</li>
        </ul>

        <h2>Unit 3: Oral Communication</h2>
        <ul>
            <li>Presentation Skills</li>
            <li>Group Discussion</li>
            <li>Public Speaking</li>
            <li>Interview Skills</li>
        </ul>

        <h2>Unit 4: Barriers</h2>
        <ul>
            <li>Physical Barriers</li>
            <li>Language Barriers</li>
            <li>Psychological Barriers</li>
            <li>Ways to Overcome Barriers</li>
        </ul>

        <h2>Unit 5: Professional Skills</h2>
        <ul>
            <li>Listening Skills</li>
            <li>Body Language</li>
            <li>Business Etiquette</li>
            <li>Professional Communication</li>
        </ul>
        </body>
        </html>
    `);
}


else if (noteName === "Business Mathematics") {
    notesWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Business Mathematics</title>
            <style>
                body { font-family: Arial; padding: 25px; line-height: 1.7; }
                h1 { color: #222; }
                h2 { color: #444; margin-top: 25px; }
                li { margin-bottom: 8px; }
            </style>
        </head>
        <body>
        <h1>🔢 Business Mathematics — BBA Semester 1</h1>

        <h2>Unit 1: Basic Mathematics</h2>
        <ul>
            <li>Percentages</li>
            <li>Ratio and Proportion</li>
            <li>Profit and Loss</li>
            <li>Simple and Compound Interest</li>
        </ul>

        <h2>Unit 2: Algebra</h2>
        <ul>
            <li>Linear Equations</li>
            <li>Quadratic Equations</li>
            <li>Sequences and Series</li>
        </ul>

        <h2>Unit 3: Matrices</h2>
        <ul>
            <li>Types of Matrices</li>
            <li>Matrix Operations</li>
            <li>Determinants</li>
            <li>Inverse of Matrix</li>
        </ul>

        <h2>Unit 4: Calculus</h2>
        <ul>
            <li>Limits</li>
            <li>Differentiation</li>
            <li>Applications of Differentiation</li>
            <li>Integration</li>
        </ul>

        <h2>Unit 5: Business Applications</h2>
        <ul>
            <li>Cost Function</li>
            <li>Revenue Function</li>
            <li>Profit Function</li>
            <li>Break-Even Point</li>
        </ul>
        </body>
        </html>
    `);
}
else if (noteName === "Marketing Management") {
    notesWindow.document.write(`
        <h1>📢 Marketing Management — BBA Semester 2</h1>
        <h2>Unit 1: Introduction</h2>
        <ul><li>Meaning and Importance of Marketing</li><li>Marketing Concepts</li><li>Marketing Environment</li></ul>
        <h2>Unit 2: Consumer and Market</h2>
        <ul><li>Consumer Behaviour</li><li>Market Segmentation</li><li>Targeting</li><li>Positioning</li></ul>
        <h2>Unit 3: Marketing Mix</h2>
        <ul><li>Product</li><li>Price</li><li>Place</li><li>Promotion</li></ul>
        <h2>Unit 4: Product Management</h2>
        <ul><li>Product Life Cycle</li><li>Branding</li><li>Packaging</li><li>Labelling</li></ul>
        <h2>Unit 5: Promotion</h2>
        <ul><li>Advertising</li><li>Sales Promotion</li><li>Personal Selling</li><li>Digital Marketing</li></ul>
    `);
}

else if (noteName === "Human Resource Management") {
    notesWindow.document.write(`
        <h1>👥 Human Resource Management — BBA Semester 2</h1>
        <h2>Unit 1: HRM Basics</h2>
        <ul><li>Meaning and Scope of HRM</li><li>Functions of HRM</li><li>Importance of Human Resources</li></ul>
        <h2>Unit 2: Recruitment</h2>
        <ul><li>Recruitment</li><li>Selection</li><li>Interview</li><li>Placement</li></ul>
        <h2>Unit 3: Training</h2>
        <ul><li>Training Methods</li><li>Development</li><li>Performance Appraisal</li></ul>
        <h2>Unit 4: Compensation</h2>
        <ul><li>Wages</li><li>Salary</li><li>Incentives</li><li>Employee Benefits</li></ul>
        <h2>Unit 5: Employee Relations</h2>
        <ul><li>Industrial Relations</li><li>Grievance Handling</li><li>Employee Motivation</li></ul>
    `);
}

else if (noteName === "Business Statistics") {
    notesWindow.document.write(`
        <h1>📊 Business Statistics — BBA Semester 2</h1>
        <h2>Unit 1: Introduction</h2>
        <ul><li>Meaning of Statistics</li><li>Importance in Business</li><li>Data Collection</li></ul>
        <h2>Unit 2: Central Tendency</h2>
        <ul><li>Mean</li><li>Median</li><li>Mode</li></ul>
        <h2>Unit 3: Dispersion</h2>
        <ul><li>Range</li><li>Mean Deviation</li><li>Standard Deviation</li><li>Variance</li></ul>
        <h2>Unit 4: Correlation</h2>
        <ul><li>Correlation</li><li>Types of Correlation</li><li>Correlation Coefficient</li></ul>
        <h2>Unit 5: Regression</h2>
        <ul><li>Regression Analysis</li><li>Regression Lines</li><li>Business Applications</li></ul>
    `);
}

else if (noteName === "Organizational Behaviour") {
    notesWindow.document.write(`
        <h1>🏢 Organizational Behaviour — BBA Semester 2</h1>
        <h2>Unit 1: Introduction</h2>
        <ul><li>Meaning of Organizational Behaviour</li><li>Importance</li><li>Models of OB</li></ul>
        <h2>Unit 2: Individual Behaviour</h2>
        <ul><li>Personality</li><li>Perception</li><li>Learning</li><li>Attitude</li></ul>
        <h2>Unit 3: Motivation</h2>
        <ul><li>Meaning of Motivation</li><li>Maslow Theory</li><li>Herzberg Theory</li></ul>
        <h2>Unit 4: Group Behaviour</h2>
        <ul><li>Groups</li><li>Teamwork</li><li>Leadership</li><li>Conflict</li></ul>
        <h2>Unit 5: Organizational Culture</h2>
        <ul><li>Organizational Culture</li><li>Change Management</li><li>Stress Management</li></ul>
    `);
}

else if (noteName === "Business Environment") {
    notesWindow.document.write(`
        <h1>🌍 Business Environment — BBA Semester 2</h1>
        <h2>Unit 1: Introduction</h2>
        <ul><li>Meaning of Business Environment</li><li>Importance</li><li>Internal and External Environment</li></ul>
        <h2>Unit 2: Economic Environment</h2>
        <ul><li>Economic Systems</li><li>Fiscal Policy</li><li>Monetary Policy</li></ul>
        <h2>Unit 3: Political Environment</h2>
        <ul><li>Government Policies</li><li>Political Stability</li><li>Business and Government</li></ul>
        <h2>Unit 4: Social Environment</h2>
        <ul><li>Culture</li><li>Demographics</li><li>Social Trends</li></ul>
        <h2>Unit 5: Global Environment</h2>
        <ul><li>Globalization</li><li>International Trade</li><li>Multinational Companies</li></ul>
    `);
}
else if (noteName === "Financial Management") {
    notesWindow.document.write(`
        <h1>💰 Financial Management — BBA Semester 3</h1>
        <h2>Unit 1</h2><ul><li>Meaning and Objectives of Financial Management</li><li>Financial Decisions</li></ul>
        <h2>Unit 2</h2><ul><li>Time Value of Money</li><li>Risk and Return</li></ul>
        <h2>Unit 3</h2><ul><li>Capital Budgeting</li><li>NPV</li><li>IRR</li></ul>
        <h2>Unit 4</h2><ul><li>Cost of Capital</li><li>Capital Structure</li></ul>
        <h2>Unit 5</h2><ul><li>Working Capital Management</li><li>Dividend Decisions</li></ul>
    `);
}

else if (noteName === "Production Management") {
    notesWindow.document.write(`
        <h1>🏭 Production Management — BBA Semester 3</h1>
        <h2>Unit 1</h2><ul><li>Production Management</li><li>Production Systems</li></ul>
        <h2>Unit 2</h2><ul><li>Plant Location</li><li>Plant Layout</li></ul>
        <h2>Unit 3</h2><ul><li>Production Planning</li><li>Scheduling</li></ul>
        <h2>Unit 4</h2><ul><li>Quality Management</li><li>Total Quality Management</li></ul>
        <h2>Unit 5</h2><ul><li>Inventory Management</li><li>Maintenance Management</li></ul>
    `);
}

else if (noteName === "Business Law") {
    notesWindow.document.write(`
        <h1>⚖️ Business Law — BBA Semester 3</h1>
        <h2>Unit 1</h2><ul><li>Introduction to Business Law</li><li>Contract</li><li>Essential Elements of Contract</li></ul>
        <h2>Unit 2</h2><ul><li>Offer and Acceptance</li><li>Consideration</li><li>Capacity of Parties</li></ul>
        <h2>Unit 3</h2><ul><li>Free Consent</li><li>Legality of Object</li><li>Void Agreements</li></ul>
        <h2>Unit 4</h2><ul><li>Sale of Goods</li><li>Conditions and Warranties</li></ul>
        <h2>Unit 5</h2><ul><li>Consumer Protection</li><li>Business Ethics and Law</li></ul>
    `);
}

else if (noteName === "Research Methodology") {
    notesWindow.document.write(`
        <h1>🔎 Research Methodology — BBA Semester 3</h1>
        <h2>Unit 1</h2><ul><li>Meaning of Research</li><li>Types of Research</li><li>Research Process</li></ul>
        <h2>Unit 2</h2><ul><li>Research Problem</li><li>Objectives</li><li>Hypothesis</li></ul>
        <h2>Unit 3</h2><ul><li>Research Design</li><li>Sampling</li><li>Sampling Methods</li></ul>
        <h2>Unit 4</h2><ul><li>Data Collection</li><li>Questionnaire</li><li>Interview</li></ul>
        <h2>Unit 5</h2><ul><li>Data Analysis</li><li>Report Writing</li><li>Research Ethics</li></ul>
    `);
}

else if (noteName === "Management Information System") {
    notesWindow.document.write(`
        <h1>💻 Management Information System — BBA Semester 3</h1>
        <h2>Unit 1</h2><ul><li>Meaning of MIS</li><li>Information Systems</li></ul>
        <h2>Unit 2</h2><ul><li>Components of MIS</li><li>Hardware and Software</li></ul>
        <h2>Unit 3</h2><ul><li>Database Systems</li><li>Data Processing</li></ul>
        <h2>Unit 4</h2><ul><li>Decision Support Systems</li><li>Executive Information Systems</li></ul>
        <h2>Unit 5</h2><ul><li>MIS Security</li><li>Business Applications</li></ul>
    `);
}
else if (noteName === "Consumer Behaviour") {
    notesWindow.document.write(`
        <h1>🛒 Consumer Behaviour — BBA Semester 4</h1>
        <h2>Unit 1</h2><ul><li>Meaning of Consumer Behaviour</li><li>Importance</li></ul>
        <h2>Unit 2</h2><ul><li>Consumer Motivation</li><li>Perception</li><li>Learning</li></ul>
        <h2>Unit 3</h2><ul><li>Consumer Decision Process</li><li>Buying Behaviour</li></ul>
        <h2>Unit 4</h2><ul><li>Social and Cultural Factors</li><li>Family Influence</li></ul>
        <h2>Unit 5</h2><ul><li>Brand Loyalty</li><li>Post Purchase Behaviour</li></ul>
    `);
}

else if (noteName === "Operations Management") {
    notesWindow.document.write(`
        <h1>⚙️ Operations Management — BBA Semester 4</h1>
        <h2>Unit 1</h2><ul><li>Introduction to Operations Management</li><li>Operations Strategy</li></ul>
        <h2>Unit 2</h2><ul><li>Process Design</li><li>Capacity Planning</li></ul>
        <h2>Unit 3</h2><ul><li>Supply Chain Management</li><li>Logistics</li></ul>
        <h2>Unit 4</h2><ul><li>Quality Management</li><li>Six Sigma</li></ul>
        <h2>Unit 5</h2><ul><li>Inventory Control</li><li>Operations Improvement</li></ul>
    `);
}

else if (noteName === "Entrepreneurship") {
    notesWindow.document.write(`
        <h1>🚀 Entrepreneurship — BBA Semester 4</h1>
        <h2>Unit 1</h2><ul><li>Meaning of Entrepreneurship</li><li>Entrepreneur</li><li>Importance</li></ul>
        <h2>Unit 2</h2><ul><li>Entrepreneurial Skills</li><li>Creativity</li><li>Innovation</li></ul>
        <h2>Unit 3</h2><ul><li>Business Idea</li><li>Business Plan</li><li>Feasibility</li></ul>
        <h2>Unit 4</h2><ul><li>Sources of Finance</li><li>Startup Funding</li></ul>
        <h2>Unit 5</h2><ul><li>Startup Management</li><li>Business Growth</li><li>Entrepreneurial Challenges</li></ul>
    `);
}

else if (noteName === "Cost Accounting") {
    notesWindow.document.write(`
        <h1>🧾 Cost Accounting — BBA Semester 4</h1>
        <h2>Unit 1</h2><ul><li>Meaning of Cost Accounting</li><li>Objectives</li><li>Cost Concepts</li></ul>
        <h2>Unit 2</h2><ul><li>Material Cost</li><li>Labour Cost</li><li>Overheads</li></ul>
        <h2>Unit 3</h2><ul><li>Job Costing</li><li>Process Costing</li></ul>
        <h2>Unit 4</h2><ul><li>Marginal Costing</li><li>Break-Even Analysis</li></ul>
        <h2>Unit 5</h2><ul><li>Budgetary Control</li><li>Standard Costing</li></ul>
    `);
}

else if (noteName === "Business Research") {
    notesWindow.document.write(`
        <h1>📑 Business Research — BBA Semester 4</h1>
        <h2>Unit 1</h2><ul><li>Business Research</li><li>Research Process</li></ul>
        <h2>Unit 2</h2><ul><li>Research Design</li><li>Sampling Design</li></ul>
        <h2>Unit 3</h2><ul><li>Primary Data</li><li>Secondary Data</li></ul>
        <h2>Unit 4</h2><ul><li>Data Analysis</li><li>Statistical Tools</li></ul>
        <h2>Unit 5</h2><ul><li>Research Report</li><li>Business Recommendations</li></ul>
    `);
}
else if (noteName === "Strategic Management") {
    notesWindow.document.write(`
        <h1>🎯 Strategic Management — BBA Semester 5</h1>
        <h2>Unit 1</h2><ul><li>Strategic Management</li><li>Strategy and Policy</li></ul>
        <h2>Unit 2</h2><ul><li>Environmental Analysis</li><li>SWOT Analysis</li></ul>
        <h2>Unit 3</h2><ul><li>Strategy Formulation</li><li>Business Strategies</li></ul>
        <h2>Unit 4</h2><ul><li>Strategy Implementation</li><li>Organizational Structure</li></ul>
        <h2>Unit 5</h2><ul><li>Strategy Evaluation</li><li>Strategic Control</li></ul>
    `);
}

else if (noteName === "International Business") {
    notesWindow.document.write(`
        <h1>🌎 International Business — BBA Semester 5</h1>
        <h2>Unit 1</h2><ul><li>Meaning of International Business</li><li>Importance</li></ul>
        <h2>Unit 2</h2><ul><li>Globalization</li><li>International Trade</li></ul>
        <h2>Unit 3</h2><ul><li>Export and Import</li><li>Trade Procedures</li></ul>
        <h2>Unit 4</h2><ul><li>Foreign Exchange</li><li>Exchange Rate</li></ul>
        <h2>Unit 5</h2><ul><li>Multinational Corporations</li><li>Global Business Strategies</li></ul>
    `);
}

else if (noteName === "Project Management") {
    notesWindow.document.write(`
        <h1>📋 Project Management — BBA Semester 5</h1>
        <h2>Unit 1</h2><ul><li>Project Management</li><li>Project Life Cycle</li></ul>
        <h2>Unit 2</h2><ul><li>Project Planning</li><li>Scope Management</li></ul>
        <h2>Unit 3</h2><ul><li>Time Management</li><li>Scheduling</li></ul>
        <h2>Unit 4</h2><ul><li>Cost Management</li><li>Risk Management</li></ul>
        <h2>Unit 5</h2><ul><li>Project Monitoring</li><li>Project Closure</li></ul>
    `);
}

else if (noteName === "Investment Management") {
    notesWindow.document.write(`
        <h1>📈 Investment Management — BBA Semester 5</h1>
        <h2>Unit 1</h2><ul><li>Investment Meaning</li><li>Investment Objectives</li></ul>
        <h2>Unit 2</h2><ul><li>Risk and Return</li><li>Types of Risk</li></ul>
        <h2>Unit 3</h2><ul><li>Shares</li><li>Bonds</li><li>Mutual Funds</li></ul>
        <h2>Unit 4</h2><ul><li>Portfolio Management</li><li>Diversification</li></ul>
        <h2>Unit 5</h2><ul><li>Investment Analysis</li><li>Portfolio Evaluation</li></ul>
    `);
}

else if (noteName === "Business Analytics") {
    notesWindow.document.write(`
        <h1>📊 Business Analytics — BBA Semester 5</h1>
        <h2>Unit 1</h2><ul><li>Business Analytics</li><li>Types of Analytics</li></ul>
        <h2>Unit 2</h2><ul><li>Descriptive Analytics</li><li>Diagnostic Analytics</li></ul>
        <h2>Unit 3</h2><ul><li>Predictive Analytics</li><li>Forecasting</li></ul>
        <h2>Unit 4</h2><ul><li>Data Visualization</li><li>Dashboards</li></ul>
        <h2>Unit 5</h2><ul><li>Prescriptive Analytics</li><li>Business Applications</li></ul>
    `);
}
else if (noteName === "Business Ethics") {
    notesWindow.document.write(`
        <h1>⚖️ Business Ethics — BBA Semester 6</h1>
        <h2>Unit 1</h2><ul><li>Meaning of Business Ethics</li><li>Importance</li></ul>
        <h2>Unit 2</h2><ul><li>Ethical Decision Making</li><li>Values</li></ul>
        <h2>Unit 3</h2><ul><li>Corporate Social Responsibility</li><li>Business and Society</li></ul>
        <h2>Unit 4</h2><ul><li>Workplace Ethics</li><li>Professional Ethics</li></ul>
        <h2>Unit 5</h2><ul><li>Ethical Leadership</li><li>Corporate Responsibility</li></ul>
    `);
}

else if (noteName === "Digital Marketing") {
    notesWindow.document.write(`
        <h1>📱 Digital Marketing — BBA Semester 6</h1>
        <h2>Unit 1</h2><ul><li>Digital Marketing Introduction</li><li>Traditional vs Digital Marketing</li></ul>
        <h2>Unit 2</h2><ul><li>Search Engine Optimization</li><li>Search Engine Marketing</li></ul>
        <h2>Unit 3</h2><ul><li>Social Media Marketing</li><li>Content Marketing</li></ul>
        <h2>Unit 4</h2><ul><li>Email Marketing</li><li>Affiliate Marketing</li></ul>
        <h2>Unit 5</h2><ul><li>Web Analytics</li><li>Digital Marketing Strategy</li></ul>
    `);
}

else if (noteName === "Corporate Governance") {
    notesWindow.document.write(`
        <h1>🏢 Corporate Governance — BBA Semester 6</h1>
        <h2>Unit 1</h2><ul><li>Meaning of Corporate Governance</li><li>Importance</li></ul>
        <h2>Unit 2</h2><ul><li>Board of Directors</li><li>Roles and Responsibilities</li></ul>
        <h2>Unit 3</h2><ul><li>Corporate Transparency</li><li>Accountability</li></ul>
        <h2>Unit 4</h2><ul><li>Corporate Social Responsibility</li><li>Stakeholder Management</li></ul>
        <h2>Unit 5</h2><ul><li>Corporate Governance Practices</li><li>Governance Challenges</li></ul>
    `);
}

else if (noteName === "Entrepreneurship Development") {
    notesWindow.document.write(`
        <h1>🚀 Entrepreneurship Development — BBA Semester 6</h1>
        <h2>Unit 1</h2><ul><li>Entrepreneurship Development</li><li>Entrepreneurial Process</li></ul>
        <h2>Unit 2</h2><ul><li>Business Idea Generation</li><li>Innovation</li></ul>
        <h2>Unit 3</h2><ul><li>Business Plan</li><li>Project Report</li></ul>
        <h2>Unit 4</h2><ul><li>Startup Finance</li><li>Government Support</li></ul>
        <h2>Unit 5</h2><ul><li>Business Growth</li><li>Challenges of Entrepreneurs</li></ul>
    `);
}

else if (noteName === "Final Project") {
    notesWindow.document.write(`
        <h1>🎓 Final Project — BBA Semester 6</h1>
        <h2>Unit 1: Project Selection</h2>
        <ul><li>Topic Selection</li><li>Problem Identification</li><li>Project Objectives</li></ul>

        <h2>Unit 2: Research</h2>
        <ul><li>Literature Review</li><li>Data Collection</li><li>Research Method</li></ul>

        <h2>Unit 3: Analysis</h2>
        <ul><li>Data Analysis</li><li>Findings</li><li>Interpretation</li></ul>

        <h2>Unit 4: Report</h2>
        <ul><li>Project Report Structure</li><li>Conclusion</li><li>Recommendations</li></ul>

        <h2>Unit 5: Presentation</h2>
        <ul><li>Project Presentation</li><li>Viva Preparation</li><li>Future Scope</li></ul>
    `);
}

    // ===============================
    // Engineering Physics
    // ===============================

   else if (noteName === "Engineering Physics") {

    title = "Engineering Physics";

    content = `
        <h2>🔬 Engineering Physics</h2>

        <h2>📘 Unit 1: Quantum Mechanics</h2>
        <p>
            Quantum mechanics describes the behaviour of matter and
            energy at microscopic scales.
        </p>

        <ul>
            <li>Wave-Particle Duality</li>
            <li>de Broglie Hypothesis</li>
            <li>Heisenberg Uncertainty Principle</li>
            <li>Schrödinger Wave Equation</li>
            <li>Particle in a Box</li>
        </ul>

        <div class="important">
            <b>Important Formula:</b><br>
            λ = h / p
        </div>

        <h2>📘 Unit 2: Wave Optics</h2>
        <ul>
            <li>Interference of Light</li>
            <li>Young's Double Slit Experiment</li>
            <li>Diffraction</li>
            <li>Polarization</li>
            <li>Coherence</li>
        </ul>

        <div class="important">
            <b>Important:</b><br>
            Interference is the redistribution of light intensity
            due to superposition of coherent waves.
        </div>

        <h2>📘 Unit 3: Lasers and Fiber Optics</h2>
        <ul>
            <li>Principle of Laser</li>
            <li>Spontaneous and Stimulated Emission</li>
            <li>Population Inversion</li>
            <li>Types of Lasers</li>
            <li>Optical Fiber</li>
            <li>Applications of Fiber Optics</li>
        </ul>

        <div class="important">
            <b>Laser:</b><br>
            Light Amplification by Stimulated Emission of Radiation.
        </div>

        <h2>📘 Unit 4: Semiconductor Physics</h2>
        <ul>
            <li>Energy Bands</li>
            <li>Intrinsic Semiconductor</li>
            <li>Extrinsic Semiconductor</li>
            <li>p-type and n-type Semiconductors</li>
            <li>PN Junction</li>
            <li>Semiconductor Applications</li>
        </ul>

        <h2>📘 Unit 5: Electromagnetic Theory</h2>
        <ul>
            <li>Electric Field</li>
            <li>Magnetic Field</li>
            <li>Maxwell's Equations</li>
            <li>Electromagnetic Waves</li>
            <li>Properties of EM Waves</li>
            <li>Applications of Electromagnetic Waves</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>Explain wave-particle duality.</li>
            <li>State Heisenberg's uncertainty principle.</li>
            <li>Explain Young's double slit experiment.</li>
            <li>What is diffraction?</li>
            <li>Explain the principle of laser.</li>
            <li>What is population inversion?</li>
            <li>Explain optical fiber and its applications.</li>
            <li>Differentiate intrinsic and extrinsic semiconductors.</li>
            <li>Explain PN junction.</li>
            <li>What are electromagnetic waves?</li>
        </ol>
    `;
}
    // ===============================
    // Engineering Chemistry
    // ===============================

    else if (noteName === "Engineering Chemistry") {

    title = "Engineering Chemistry";

    content = `
        <h2>🧪 Engineering Chemistry</h2>

        <h2>📘 Unit 1: Water Technology</h2>
        <ul>
            <li>Sources of Water</li>
            <li>Hardness of Water</li>
            <li>Temporary and Permanent Hardness</li>
            <li>Water Softening</li>
            <li>Ion Exchange Process</li>
            <li>Reverse Osmosis</li>
        </ul>

        <h2>📘 Unit 2: Fuels and Combustion</h2>
        <ul>
            <li>Classification of Fuels</li>
            <li>Solid Fuels</li>
            <li>Liquid Fuels</li>
            <li>Gaseous Fuels</li>
            <li>Calorific Value</li>
            <li>Combustion</li>
        </ul>

        <div class="important">
            <b>Important:</b><br>
            Calorific value is the amount of heat released by
            complete combustion of a unit quantity of fuel.
        </div>

        <h2>📘 Unit 3: Electrochemistry</h2>
        <ul>
            <li>Electrolytes</li>
            <li>Electrochemical Cells</li>
            <li>Galvanic Cell</li>
            <li>Electrolysis</li>
            <li>Nernst Equation</li>
            <li>Applications of Electrochemistry</li>
        </ul>

        <h2>📘 Unit 4: Polymers</h2>
        <ul>
            <li>Introduction to Polymers</li>
            <li>Classification of Polymers</li>
            <li>Addition Polymerization</li>
            <li>Condensation Polymerization</li>
            <li>Thermoplastics</li>
            <li>Thermosetting Polymers</li>
        </ul>

        <h2>📘 Unit 5: Corrosion and Nanochemistry</h2>
        <ul>
            <li>Types of Corrosion</li>
            <li>Electrochemical Corrosion</li>
            <li>Methods of Corrosion Prevention</li>
            <li>Nanomaterials</li>
            <li>Properties of Nanomaterials</li>
            <li>Applications of Nanotechnology</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is hardness of water?</li>
            <li>Explain water softening methods.</li>
            <li>What is reverse osmosis?</li>
            <li>Explain calorific value of a fuel.</li>
            <li>What is electrochemistry?</li>
            <li>Explain the Nernst equation.</li>
            <li>What are polymers?</li>
            <li>Differentiate thermoplastics and thermosetting polymers.</li>
            <li>What is corrosion?</li>
            <li>Explain methods of corrosion prevention.</li>
            <li>What are nanomaterials?</li>
        </ol>
    `;
}
    // ===============================
    // Basic Electrical Engineering
    // ===============================

   else if (noteName === "Basic Electrical Engineering") {

    title = "Basic Electrical Engineering";

    content = `
        <h2>⚡ Basic Electrical Engineering</h2>

        <h2>📘 Unit 1: DC Circuits</h2>
        <ul>
            <li>Electric Current</li>
            <li>Voltage</li>
            <li>Resistance</li>
            <li>Ohm's Law</li>
            <li>Kirchhoff's Laws</li>
            <li>Series and Parallel Circuits</li>
        </ul>

        <div class="important">
            <b>Ohm's Law:</b><br>
            V = IR
        </div>

        <h2>📘 Unit 2: AC Circuits</h2>
        <ul>
            <li>Alternating Current</li>
            <li>AC Voltage</li>
            <li>RMS Value</li>
            <li>Average Value</li>
            <li>Power Factor</li>
            <li>Single Phase AC Circuits</li>
        </ul>

        <div class="important">
            <b>Important:</b><br>
            Power Factor = cos φ
        </div>

        <h2>📘 Unit 3: Magnetic Circuits and Transformers</h2>
        <ul>
            <li>Magnetic Field</li>
            <li>Magnetic Flux</li>
            <li>MMF</li>
            <li>Reluctance</li>
            <li>Transformer Principle</li>
            <li>Transformer Losses</li>
        </ul>

        <div class="important">
            <b>Transformer:</b><br>
            A transformer transfers electrical energy from one
            circuit to another through electromagnetic induction.
        </div>

        <h2>📘 Unit 4: Electrical Machines</h2>
        <ul>
            <li>DC Generator</li>
            <li>DC Motor</li>
            <li>Induction Motor</li>
            <li>Synchronous Motor</li>
            <li>Working Principles</li>
            <li>Applications of Electrical Machines</li>
        </ul>

        <h2>📘 Unit 5: Electrical Measurements and Safety</h2>
        <ul>
            <li>Electrical Measuring Instruments</li>
            <li>Ammeter</li>
            <li>Voltmeter</li>
            <li>Wattmeter</li>
            <li>Energy Meter</li>
            <li>Electrical Safety</li>
            <li>Earthing</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>State and explain Ohm's Law.</li>
            <li>Explain Kirchhoff's Current and Voltage Laws.</li>
            <li>What is alternating current?</li>
            <li>Explain RMS and average values.</li>
            <li>What is power factor?</li>
            <li>Explain the working principle of a transformer.</li>
            <li>What are transformer losses?</li>
            <li>Explain the working of a DC motor.</li>
            <li>What is an induction motor?</li>
            <li>Explain electrical earthing and safety.</li>
        </ol>
    `;
}
    // ===============================
// Engineering Mathematics-II
// ===============================

else if (noteName === "Engineering Mathematics-II") {

    title = "Engineering Mathematics-II";

    content = `
        <h2>🧮 Engineering Mathematics-II</h2>

        <h2>1. Differential Equations</h2>

        <p>
            Differential equations are equations involving
            derivatives of an unknown function.
        </p>

        <div class="important">
            <b>Important:</b><br>
            dy/dx = f(x,y)
        </div>

        <h2>2. Laplace Transform</h2>

        <p>
            Laplace Transform is an important mathematical
            technique used to solve differential equations.
        </p>

        <div class="important">
            <b>Formula:</b><br>
            L{1} = 1/s
        </div>

        <h2>3. Fourier Series</h2>

        <p>
            Fourier Series represents a periodic function
            as a sum of sine and cosine functions.
        </p>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is a differential equation?</li>
            <li>Explain first order differential equations.</li>
            <li>What is Laplace Transform?</li>
            <li>Write basic Laplace Transform formulas.</li>
            <li>What is Fourier Series?</li>
        </ol>
    `;
}else if (noteName === "Data Structures") {

    title = "Data Structures";

    content = `
        <h2>🌳 Data Structures</h2>

        <h2>1. Introduction</h2>
        <p>
            Data structure is a way of organizing and storing data
            so that it can be used efficiently.
        </p>

        <h2>2. Types of Data Structures</h2>
        <ul>
            <li>Array</li>
            <li>Linked List</li>
            <li>Stack</li>
            <li>Queue</li>
            <li>Tree</li>
            <li>Graph</li>
        </ul>

        <h2>3. Stack</h2>
        <p>
            Stack follows the LIFO (Last In First Out) principle.
        </p>

        <div class="important">
            <b>Example:</b><br>
            Push → Add an element<br>
            Pop → Remove an element
        </div>

        <h2>4. Queue</h2>
        <p>
            Queue follows the FIFO (First In First Out) principle.
        </p>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is a data structure?</li>
            <li>Explain different types of data structures.</li>
            <li>What is a stack?</li>
            <li>Explain LIFO principle.</li>
            <li>What is a queue?</li>
            <li>Explain FIFO principle.</li>
        </ol>
    `;
}else if (noteName === "Data Structures") {

    title = "Data Structures";

    content = `
        <h2>🌳 Data Structures</h2>

        <h2>1. Introduction</h2>
        <p>
            Data structure is a way of organizing and storing data
            so that it can be used efficiently.
        </p>

        <h2>2. Types of Data Structures</h2>
        <ul>
            <li>Array</li>
            <li>Linked List</li>
            <li>Stack</li>
            <li>Queue</li>
            <li>Tree</li>
            <li>Graph</li>
        </ul>

        <h2>3. Stack</h2>
        <p>
            Stack follows the LIFO (Last In First Out) principle.
        </p>

        <div class="important">
            <b>Example:</b><br>
            Push → Add an element<br>
            Pop → Remove an element
        </div>

        <h2>4. Queue</h2>
        <p>
            Queue follows the FIFO (First In First Out) principle.
        </p>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is a data structure?</li>
            <li>Explain different types of data structures.</li>
            <li>What is a stack?</li>
            <li>Explain LIFO principle.</li>
            <li>What is a queue?</li>
            <li>Explain FIFO principle.</li>
        </ol>
    `;
}else if (noteName === "Digital Logic Design") {

    title = "Digital Logic Design";

    content = `
        <h2>🔌 Digital Logic Design</h2>

        <h2>1. Digital System</h2>
        <p>
            A digital system represents information using discrete
            values, generally 0 and 1.
        </p>

        <h2>2. Logic Gates</h2>
        <ul>
            <li>AND Gate</li>
            <li>OR Gate</li>
            <li>NOT Gate</li>
            <li>NAND Gate</li>
            <li>NOR Gate</li>
            <li>XOR Gate</li>
            <li>XNOR Gate</li>
        </ul>

        <h2>3. Boolean Algebra</h2>
        <p>
            Boolean algebra is used to analyze and simplify
            digital logic circuits.
        </p>

        <div class="important">
            <b>Basic Laws:</b><br>
            A + 0 = A<br>
            A · 1 = A<br>
            A + A = A<br>
            A · A = A
        </div>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is a digital system?</li>
            <li>Explain AND, OR and NOT gates.</li>
            <li>What is Boolean algebra?</li>
            <li>Explain NAND and NOR gates.</li>
            <li>What are universal gates?</li>
        </ol>
    `;
}else if (noteName === "Object Oriented Programming") {

    title = "Object Oriented Programming";

    content = `
        <h2>💻 Object Oriented Programming</h2>

        <h2>1. Introduction</h2>
        <p>
            Object Oriented Programming (OOP) is a programming
            approach based on objects and classes.
        </p>

        <h2>2. Main Concepts of OOP</h2>
        <ul>
            <li>Class</li>
            <li>Object</li>
            <li>Encapsulation</li>
            <li>Inheritance</li>
            <li>Polymorphism</li>
            <li>Abstraction</li>
        </ul>

        <h2>3. Class</h2>
        <p>
            A class is a blueprint or template used to create objects.
        </p>

        <h2>4. Object</h2>
        <p>
            An object is an instance of a class.
        </p>

        <div class="important">
            <b>Example:</b><br>
            Class = Car<br>
            Object = BMW, Audi, Toyota
        </div>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is OOP?</li>
            <li>What is a class?</li>
            <li>What is an object?</li>
            <li>Explain inheritance.</li>
            <li>Explain polymorphism.</li>
            <li>What is encapsulation?</li>
        </ol>
    `;
}else if (noteName === "Computer Organization") {

    title = "Computer Organization";

    content = `
        <h2>🖥️ Computer Organization</h2>

        <h2>1. Introduction</h2>
        <p>
            Computer organization deals with the way different
            hardware components of a computer system are arranged
            and work together.
        </p>

        <h2>2. Main Components</h2>
        <ul>
            <li>CPU</li>
            <li>Memory</li>
            <li>Input Unit</li>
            <li>Output Unit</li>
            <li>Storage</li>
        </ul>

        <h2>3. CPU</h2>
        <p>
            CPU is the central processing unit of a computer.
            It performs calculations and controls operations.
        </p>

        <div class="important">
            <b>CPU Components:</b><br>
            ALU – Arithmetic Logic Unit<br>
            CU – Control Unit<br>
            Registers
        </div>

        <h2>4. Memory</h2>
        <ul>
            <li>RAM</li>
            <li>ROM</li>
            <li>Cache Memory</li>
            <li>Secondary Memory</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is computer organization?</li>
            <li>What is CPU?</li>
            <li>Explain ALU and Control Unit.</li>
            <li>What are registers?</li>
            <li>Explain RAM and ROM.</li>
            <li>What is cache memory?</li>
        </ol>
    `;
}else if (noteName === "Computer Organization") {

    title = "Computer Organization";

    content = `
        <h2>🖥️ Computer Organization</h2>

        <h2>1. Introduction</h2>
        <p>
            Computer organization deals with the way different
            hardware components of a computer system are arranged
            and work together.
        </p>

        <h2>2. Main Components</h2>
        <ul>
            <li>CPU</li>
            <li>Memory</li>
            <li>Input Unit</li>
            <li>Output Unit</li>
            <li>Storage</li>
        </ul>

        <h2>3. CPU</h2>
        <p>
            CPU is the central processing unit of a computer.
            It performs calculations and controls operations.
        </p>

        <div class="important">
            <b>CPU Components:</b><br>
            ALU – Arithmetic Logic Unit<br>
            CU – Control Unit<br>
            Registers
        </div>

        <h2>4. Memory</h2>
        <ul>
            <li>RAM</li>
            <li>ROM</li>
            <li>Cache Memory</li>
            <li>Secondary Memory</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is computer organization?</li>
            <li>What is CPU?</li>
            <li>Explain ALU and Control Unit.</li>
            <li>What are registers?</li>
            <li>Explain RAM and ROM.</li>
            <li>What is cache memory?</li>
        </ol>
    `;
}// ===============================
// Semester 3 - Discrete Mathematics
// ===============================

// ===============================
// Discrete Mathematics
// ===============================

else if (noteName === "Discrete Mathematics") {

    title = "Discrete Mathematics";

    content = `
        <h2>📘 Discrete Mathematics</h2>

        <h2>📘 Unit 1: Set Theory and Relations</h2>
        <ul>
            <li>Sets and Subsets</li>
            <li>Set Operations</li>
            <li>Venn Diagrams</li>
            <li>Relations and Properties of Relations</li>
            <li>Equivalence Relations</li>
            <li>Partial Order Relations</li>
        </ul>

        <div class="important">
            <b>Important:</b><br>
            A relation R on a set A is an equivalence relation if it is
            reflexive, symmetric and transitive.
        </div>

        <h2>📘 Unit 2: Functions and Mathematical Logic</h2>
        <ul>
            <li>Functions and Types of Functions</li>
            <li>One-to-One and Onto Functions</li>
            <li>Composition of Functions</li>
            <li>Propositions</li>
            <li>Logical Connectives</li>
            <li>Truth Tables</li>
            <li>Predicate Logic</li>
        </ul>

        <h2>📘 Unit 3: Combinatorics</h2>
        <ul>
            <li>Permutations</li>
            <li>Combinations</li>
            <li>Binomial Theorem</li>
            <li>Pigeonhole Principle</li>
            <li>Inclusion-Exclusion Principle</li>
            <li>Recurrence Relations</li>
        </ul>

        <div class="important">
            <b>Important Formula:</b><br>
            nPr = n! / (n-r)!<br>
            nCr = n! / [r!(n-r)!]
        </div>

        <h2>📘 Unit 4: Graph Theory</h2>
        <ul>
            <li>Graphs and Graph Terminology</li>
            <li>Types of Graphs</li>
            <li>Degree of a Vertex</li>
            <li>Paths and Cycles</li>
            <li>Euler and Hamiltonian Graphs</li>
            <li>Graph Connectivity</li>
            <li>Graph Coloring</li>
        </ul>

        <h2>📘 Unit 5: Trees and Boolean Algebra</h2>
        <ul>
            <li>Trees and Properties of Trees</li>
            <li>Rooted Trees</li>
            <li>Binary Trees</li>
            <li>Spanning Trees</li>
            <li>Boolean Algebra</li>
            <li>Boolean Functions</li>
            <li>Logic Gates</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>Explain different types of sets with examples.</li>
            <li>What is an equivalence relation?</li>
            <li>Explain one-to-one and onto functions.</li>
            <li>Construct a truth table for a given proposition.</li>
            <li>Explain the pigeonhole principle.</li>
            <li>Differentiate between permutation and combination.</li>
            <li>Explain Euler and Hamiltonian graphs.</li>
            <li>What is graph coloring?</li>
            <li>Explain spanning trees.</li>
            <li>What is Boolean algebra?</li>
        </ol>
    `;
}



// ===============================
// Semester 3 - Database Management System
// ===============================

// ===============================
// Database Management System
// ===============================

else if (noteName === "Database Management System") {

    title = "Database Management System";

    content = `
        <h2>🗄️ Database Management System</h2>

        <h2>📘 Unit 1: Introduction to DBMS</h2>
        <ul>
            <li>Database and DBMS</li>
            <li>Characteristics of DBMS</li>
            <li>Advantages of DBMS</li>
            <li>Database Architecture</li>
            <li>Data Models</li>
            <li>Schema and Instance</li>
            <li>Database Administrators</li>
        </ul>

        <div class="important">
            <b>Important:</b><br>
            DBMS is software used to create, store, manage and retrieve
            data from databases efficiently.
        </div>

        <h2>📘 Unit 2: Relational Model and SQL</h2>
        <ul>
            <li>Relational Model</li>
            <li>Relations, Tuples and Attributes</li>
            <li>Keys and Constraints</li>
            <li>Primary Key and Foreign Key</li>
            <li>SQL Basics</li>
            <li>DDL, DML and DCL Commands</li>
            <li>Joins and Subqueries</li>
        </ul>

        <h2>📘 Unit 3: ER Model and Database Design</h2>
        <ul>
            <li>Entity Relationship Model</li>
            <li>Entities and Attributes</li>
            <li>Relationships</li>
            <li>ER Diagrams</li>
            <li>Generalization and Specialization</li>
            <li>Database Design</li>
        </ul>

        <h2>📘 Unit 4: Normalization and Transactions</h2>
        <ul>
            <li>Functional Dependencies</li>
            <li>Normalization</li>
            <li>First Normal Form</li>
            <li>Second Normal Form</li>
            <li>Third Normal Form</li>
            <li>BCNF</li>
            <li>Database Transactions</li>
        </ul>

        <div class="important">
            <b>Important:</b><br>
            Normalization is used to reduce data redundancy and
            improve database consistency.
        </div>

        <h2>📘 Unit 5: Concurrency Control and Recovery</h2>
        <ul>
            <li>Transaction Properties</li>
            <li>ACID Properties</li>
            <li>Concurrency Control</li>
            <li>Lock-Based Protocols</li>
            <li>Deadlock in Databases</li>
            <li>Database Recovery</li>
            <li>Backup and Recovery Techniques</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is DBMS? Explain its advantages.</li>
            <li>Explain different database models.</li>
            <li>What are primary key and foreign key?</li>
            <li>Explain SQL and its different commands.</li>
            <li>What is an ER diagram?</li>
            <li>Explain normalization.</li>
            <li>Differentiate 1NF, 2NF and 3NF.</li>
            <li>What are ACID properties?</li>
            <li>Explain concurrency control.</li>
            <li>What is database recovery?</li>
        </ol>
    `;
}

// ===============================
// Semester 3 - Operating System
// ===============================

// ===============================
// Operating System
// ===============================

else if (noteName === "Operating System") {

    title = "Operating System";

    content = `
        <h2>💻 Operating System</h2>

        <h2>📘 Unit 1: Introduction to Operating System</h2>
        <ul>
            <li>Operating System Concepts</li>
            <li>Functions of Operating System</li>
            <li>Types of Operating Systems</li>
            <li>Operating System Services</li>
            <li>System Calls</li>
            <li>System Programs</li>
        </ul>

        <div class="important">
            <b>Important:</b><br>
            An operating system acts as an interface between the
            user and computer hardware.
        </div>

        <h2>📘 Unit 2: Process Management</h2>
        <ul>
            <li>Process Concepts</li>
            <li>Process States</li>
            <li>Process Control Block</li>
            <li>Process Scheduling</li>
            <li>CPU Scheduling Algorithms</li>
            <li>Context Switching</li>
            <li>Threads</li>
        </ul>

        <div class="important">
            <b>Important:</b><br>
            Common CPU scheduling algorithms include FCFS, SJF,
            Priority Scheduling and Round Robin.
        </div>

        <h2>📘 Unit 3: Process Synchronization and Deadlocks</h2>
        <ul>
            <li>Process Synchronization</li>
            <li>Critical Section Problem</li>
            <li>Semaphores</li>
            <li>Mutex</li>
            <li>Classical Synchronization Problems</li>
            <li>Deadlock</li>
            <li>Deadlock Prevention and Avoidance</li>
            <li>Banker's Algorithm</li>
        </ul>

        <h2>📘 Unit 4: Memory Management</h2>
        <ul>
            <li>Memory Management Concepts</li>
            <li>Contiguous Memory Allocation</li>
            <li>Paging</li>
            <li>Segmentation</li>
            <li>Virtual Memory</li>
            <li>Page Replacement Algorithms</li>
            <li>Demand Paging</li>
        </ul>

        <div class="important">
            <b>Important:</b><br>
            Common page replacement algorithms are FIFO, LRU and
            Optimal Page Replacement.
        </div>

        <h2>📘 Unit 5: File Systems and Disk Management</h2>
        <ul>
            <li>File System Concepts</li>
            <li>File Attributes and Operations</li>
            <li>File Allocation Methods</li>
            <li>Directory Structure</li>
            <li>Disk Scheduling</li>
            <li>Disk Management</li>
            <li>File Protection</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is an operating system? Explain its functions.</li>
            <li>Explain different types of operating systems.</li>
            <li>What is a process? Explain process states.</li>
            <li>Explain FCFS, SJF and Round Robin scheduling.</li>
            <li>What is process synchronization?</li>
            <li>Explain the critical section problem.</li>
            <li>What is deadlock? Explain its necessary conditions.</li>
            <li>Explain Banker's algorithm.</li>
            <li>What is paging and segmentation?</li>
            <li>Explain FIFO and LRU page replacement algorithms.</li>
            <li>What are disk scheduling algorithms?</li>
        </ol>
    `;
}


// ===============================
// Semester 3 - Computer Networks
// ===============================

// ===============================
// Computer Networks
// ===============================

else if (noteName === "Computer Networks") {

    title = "Computer Networks";

    content = `
        <h2>🌐 Computer Networks</h2>

        <h2>📘 Unit 1: Introduction to Computer Networks</h2>
        <ul>
            <li>Computer Network Concepts</li>
            <li>Types of Networks</li>
            <li>Network Topologies</li>
            <li>Network Devices</li>
            <li>OSI Reference Model</li>
            <li>TCP/IP Model</li>
        </ul>

        <div class="important">
            <b>Important:</b><br>
            The OSI model consists of seven layers:
            Physical, Data Link, Network, Transport, Session,
            Presentation and Application.
        </div>

        <h2>📘 Unit 2: Data Link Layer</h2>
        <ul>
            <li>Data Link Layer Functions</li>
            <li>Framing</li>
            <li>Error Detection</li>
            <li>Error Correction</li>
            <li>Flow Control</li>
            <li>MAC Protocols</li>
            <li>Ethernet</li>
        </ul>

        <h2>📘 Unit 3: Network Layer</h2>
        <ul>
            <li>Network Layer Functions</li>
            <li>IP Addressing</li>
            <li>IPv4 and IPv6</li>
            <li>Subnetting</li>
            <li>Routing</li>
            <li>Routing Algorithms</li>
            <li>ARP and ICMP</li>
        </ul>

        <div class="important">
            <b>Important:</b><br>
            IPv4 uses 32-bit addresses, while IPv6 uses 128-bit addresses.
        </div>

        <h2>📘 Unit 4: Transport Layer</h2>
        <ul>
            <li>Transport Layer Services</li>
            <li>TCP</li>
            <li>UDP</li>
            <li>Port Numbers</li>
            <li>Flow Control</li>
            <li>Congestion Control</li>
            <li>TCP Connection Management</li>
        </ul>

        <h2>📘 Unit 5: Application Layer and Network Security</h2>
        <ul>
            <li>Application Layer Protocols</li>
            <li>HTTP and HTTPS</li>
            <li>FTP</li>
            <li>SMTP and Email</li>
            <li>DNS</li>
            <li>Network Security Basics</li>
            <li>Encryption and Authentication</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is a computer network?</li>
            <li>Explain different types of network topologies.</li>
            <li>Explain all seven layers of the OSI model.</li>
            <li>Differentiate OSI and TCP/IP models.</li>
            <li>What is error detection and correction?</li>
            <li>Explain IPv4 and IPv6.</li>
            <li>What is subnetting?</li>
            <li>Differentiate TCP and UDP.</li>
            <li>Explain TCP congestion control.</li>
            <li>What is DNS and how does it work?</li>
            <li>Explain basic network security techniques.</li>
        </ol>
    `;
}


// ===============================
// Semester 3 - Software Engineering
// ===============================

// ===============================
// Software Engineering
// ===============================

else if (noteName === "Software Engineering") {

    title = "Software Engineering";

    content = `
        <h2>⚙️ Software Engineering</h2>

        <h2>📘 Unit 1: Introduction to Software Engineering</h2>
        <ul>
            <li>Software and Software Engineering</li>
            <li>Characteristics of Software</li>
            <li>Software Crisis</li>
            <li>Software Engineering Principles</li>
            <li>Software Process</li>
            <li>Software Development Life Cycle</li>
        </ul>

        <div class="important">
            <b>Important:</b><br>
            Software Engineering is a systematic approach to the
            development, operation and maintenance of software.
        </div>

        <h2>📘 Unit 2: Software Process Models</h2>
        <ul>
            <li>Waterfall Model</li>
            <li>Prototype Model</li>
            <li>Spiral Model</li>
            <li>Incremental Model</li>
            <li>Agile Model</li>
            <li>Scrum</li>
        </ul>

        <h2>📘 Unit 3: Requirements Engineering</h2>
        <ul>
            <li>Software Requirements</li>
            <li>Functional Requirements</li>
            <li>Non-Functional Requirements</li>
            <li>Requirements Engineering Process</li>
            <li>Requirements Elicitation</li>
            <li>Requirements Analysis</li>
            <li>Software Requirements Specification</li>
        </ul>

        <div class="important">
            <b>Important:</b><br>
            SRS stands for Software Requirements Specification.
            It describes the functional and non-functional requirements
            of a software system.
        </div>

        <h2>📘 Unit 4: Software Design and Testing</h2>
        <ul>
            <li>Software Design Concepts</li>
            <li>Modularity</li>
            <li>Cohesion and Coupling</li>
            <li>Architectural Design</li>
            <li>Software Testing</li>
            <li>Black Box Testing</li>
            <li>White Box Testing</li>
        </ul>

        <h2>📘 Unit 5: Software Quality and Project Management</h2>
        <ul>
            <li>Software Quality</li>
            <li>Software Quality Assurance</li>
            <li>Software Metrics</li>
            <li>Software Maintenance</li>
            <li>Project Planning</li>
            <li>Risk Management</li>
            <li>Cost Estimation</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is Software Engineering?</li>
            <li>Explain the Software Development Life Cycle.</li>
            <li>Explain the Waterfall model with advantages and disadvantages.</li>
            <li>What is the Spiral model?</li>
            <li>Explain Agile software development.</li>
            <li>What is requirements engineering?</li>
            <li>What is SRS? Explain its characteristics.</li>
            <li>Differentiate cohesion and coupling.</li>
            <li>Explain black box and white box testing.</li>
            <li>What is software quality assurance?</li>
            <li>Explain software risk management.</li>
        </ol>
    `;
}

// ============================================================
// SEMESTER 4
// ============================================================

// ===============================
// Design and Analysis of Algorithms
// ===============================

else if (noteName === "Design and Analysis of Algorithms") {

    title = "Design and Analysis of Algorithms";

    content = `
        <h2>📘 Design and Analysis of Algorithms</h2>

        <h2>📘 Unit 1: Introduction and Algorithm Analysis</h2>
        <ul>
            <li>Algorithms and Characteristics</li>
            <li>Algorithm Design Techniques</li>
            <li>Time Complexity</li>
            <li>Space Complexity</li>
            <li>Asymptotic Notations</li>
            <li>Big O, Omega and Theta Notations</li>
        </ul>

        <div class="important">
            <b>Important:</b><br>
            Big O describes the upper bound of an algorithm's growth rate.
        </div>

        <h2>📘 Unit 2: Divide and Conquer</h2>
        <ul>
            <li>Divide and Conquer Technique</li>
            <li>Binary Search</li>
            <li>Merge Sort</li>
            <li>Quick Sort</li>
            <li>Maximum and Minimum Problem</li>
            <li>Recurrence Relations</li>
        </ul>

        <h2>📘 Unit 3: Greedy Algorithms</h2>
        <ul>
            <li>Greedy Method</li>
            <li>Activity Selection Problem</li>
            <li>Fractional Knapsack</li>
            <li>Job Sequencing</li>
            <li>Minimum Spanning Tree</li>
            <li>Prim's Algorithm</li>
            <li>Kruskal's Algorithm</li>
        </ul>

        <h2>📘 Unit 4: Dynamic Programming</h2>
        <ul>
            <li>Dynamic Programming Concept</li>
            <li>Optimal Substructure</li>
            <li>0/1 Knapsack Problem</li>
            <li>Matrix Chain Multiplication</li>
            <li>Longest Common Subsequence</li>
            <li>Floyd-Warshall Algorithm</li>
        </ul>

        <h2>📘 Unit 5: Graph Algorithms and Backtracking</h2>
        <ul>
            <li>Graph Traversal</li>
            <li>Breadth First Search</li>
            <li>Depth First Search</li>
            <li>Shortest Path Algorithms</li>
            <li>Dijkstra's Algorithm</li>
            <li>Backtracking</li>
            <li>N-Queens Problem</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is an algorithm? Explain its characteristics.</li>
            <li>Explain Big O, Omega and Theta notations.</li>
            <li>Explain merge sort with complexity.</li>
            <li>Explain quick sort.</li>
            <li>What is the greedy method?</li>
            <li>Explain Prim's and Kruskal's algorithms.</li>
            <li>Explain dynamic programming.</li>
            <li>Solve the 0/1 knapsack problem.</li>
            <li>Explain BFS and DFS.</li>
            <li>Explain Dijkstra's algorithm.</li>
        </ol>
    `;
}


// ===============================
// Web Technology
// ===============================

else if (noteName === "Web Technology") {

    title = "Web Technology";

    content = `
        <h2>🌐 Web Technology</h2>

        <h2>📘 Unit 1: Internet and HTML</h2>
        <ul>
            <li>Internet and World Wide Web</li>
            <li>Web Browsers and Web Servers</li>
            <li>HTML Basics</li>
            <li>HTML Tags and Elements</li>
            <li>Forms and Tables</li>
            <li>HTML5</li>
        </ul>

        <h2>📘 Unit 2: CSS</h2>
        <ul>
            <li>Introduction to CSS</li>
            <li>Selectors</li>
            <li>Colors and Fonts</li>
            <li>Box Model</li>
            <li>Positioning</li>
            <li>Flexbox</li>
            <li>Responsive Web Design</li>
        </ul>

        <h2>📘 Unit 3: JavaScript</h2>
        <ul>
            <li>JavaScript Basics</li>
            <li>Variables and Data Types</li>
            <li>Operators</li>
            <li>Functions</li>
            <li>Arrays and Objects</li>
            <li>Events</li>
            <li>DOM Manipulation</li>
        </ul>

        <h2>📘 Unit 4: Server-Side Programming</h2>
        <ul>
            <li>Client-Server Architecture</li>
            <li>Server-Side Scripting</li>
            <li>PHP Basics</li>
            <li>Forms and Form Processing</li>
            <li>Sessions and Cookies</li>
            <li>Database Connectivity</li>
        </ul>

        <h2>📘 Unit 5: Web Services and Security</h2>
        <ul>
            <li>Web Services</li>
            <li>REST API</li>
            <li>JSON and XML</li>
            <li>Authentication</li>
            <li>Web Security</li>
            <li>HTTPS</li>
            <li>Common Web Attacks</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is HTML? Explain HTML5 features.</li>
            <li>Explain different HTML form elements.</li>
            <li>What is CSS? Explain the CSS box model.</li>
            <li>Explain Flexbox.</li>
            <li>What is JavaScript?</li>
            <li>Explain DOM manipulation.</li>
            <li>What is client-server architecture?</li>
            <li>Explain sessions and cookies.</li>
            <li>What is REST API?</li>
            <li>Explain common web security attacks.</li>
        </ol>
    `;
}


// ===============================
// Theory of Computation
// ===============================

else if (noteName === "Theory of Computation") {

    title = "Theory of Computation";

    content = `
        <h2>📘 Theory of Computation</h2>

        <h2>📘 Unit 1: Formal Languages and Finite Automata</h2>
        <ul>
            <li>Alphabet and Strings</li>
            <li>Formal Languages</li>
            <li>Finite Automata</li>
            <li>DFA</li>
            <li>NFA</li>
            <li>Regular Languages</li>
        </ul>

        <h2>📘 Unit 2: Regular Expressions</h2>
        <ul>
            <li>Regular Expressions</li>
            <li>Regular Grammars</li>
            <li>Conversion Between FA and RE</li>
            <li>Pumping Lemma</li>
            <li>Closure Properties</li>
            <li>Minimization of Finite Automata</li>
        </ul>

        <h2>📘 Unit 3: Context Free Grammar</h2>
        <ul>
            <li>Context Free Grammar</li>
            <li>Derivations</li>
            <li>Parse Trees</li>
            <li>Ambiguous Grammar</li>
            <li>Chomsky Normal Form</li>
            <li>Greibach Normal Form</li>
        </ul>

        <h2>📘 Unit 4: Pushdown Automata</h2>
        <ul>
            <li>Pushdown Automata</li>
            <li>PDA and CFG</li>
            <li>Acceptance by Final State</li>
            <li>Acceptance by Empty Stack</li>
            <li>Deterministic PDA</li>
        </ul>

        <h2>📘 Unit 5: Turing Machine</h2>
        <ul>
            <li>Turing Machine</li>
            <li>TM Construction</li>
            <li>Variants of Turing Machine</li>
            <li>Recursive Languages</li>
            <li>Recursively Enumerable Languages</li>
            <li>Decidability</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>Define DFA and NFA.</li>
            <li>Differentiate DFA and NFA.</li>
            <li>Explain regular expressions.</li>
            <li>What is the pumping lemma?</li>
            <li>Explain context free grammar.</li>
            <li>What is an ambiguous grammar?</li>
            <li>Explain pushdown automata.</li>
            <li>Explain Turing machine.</li>
            <li>What is decidability?</li>
            <li>Explain recursive and recursively enumerable languages.</li>
        </ol>
    `;
}


// ===============================
// Microprocessor
// ===============================

else if (noteName === "Microprocessor") {

    title = "Microprocessor";

    content = `
        <h2>🔧 Microprocessor</h2>

        <h2>📘 Unit 1: Introduction to Microprocessors</h2>
        <ul>
            <li>Microprocessor Architecture</li>
            <li>8085 Microprocessor</li>
            <li>Registers</li>
            <li>ALU</li>
            <li>Control Unit</li>
            <li>8085 Pin Diagram</li>
        </ul>

        <h2>📘 Unit 2: 8085 Instruction Set</h2>
        <ul>
            <li>Instruction Format</li>
            <li>Data Transfer Instructions</li>
            <li>Arithmetic Instructions</li>
            <li>Logical Instructions</li>
            <li>Branching Instructions</li>
            <li>Stack Instructions</li>
        </ul>

        <h2>📘 Unit 3: 8086 Architecture</h2>
        <ul>
            <li>8086 Architecture</li>
            <li>Register Organization</li>
            <li>Memory Segmentation</li>
            <li>Addressing Modes</li>
            <li>Instruction Queue</li>
            <li>Minimum and Maximum Mode</li>
        </ul>

        <h2>📘 Unit 4: Interfacing</h2>
        <ul>
            <li>Memory Interfacing</li>
            <li>I/O Interfacing</li>
            <li>8255 Programmable Peripheral Interface</li>
            <li>8253 Timer</li>
            <li>8259 Interrupt Controller</li>
            <li>ADC and DAC Interfacing</li>
        </ul>

        <h2>📘 Unit 5: Interrupts and Applications</h2>
        <ul>
            <li>Interrupts</li>
            <li>Hardware and Software Interrupts</li>
            <li>Interrupt Handling</li>
            <li>Serial Communication</li>
            <li>Microprocessor Applications</li>
            <li>Embedded Applications</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>Explain the architecture of 8085.</li>
            <li>Explain 8085 registers.</li>
            <li>Explain different addressing modes.</li>
            <li>Explain the instruction set of 8085.</li>
            <li>Explain 8086 architecture.</li>
            <li>What is memory segmentation?</li>
            <li>Explain 8255 PPI.</li>
            <li>What are interrupts?</li>
            <li>Explain hardware and software interrupts.</li>
            <li>Explain microprocessor applications.</li>
        </ol>
    `;
}


// ===============================
// Artificial Intelligence
// ===============================

else if (noteName === "Artificial Intelligence") {

    title = "Artificial Intelligence";

    content = `
        <h2>🤖 Artificial Intelligence</h2>

        <h2>📘 Unit 1: Introduction to AI</h2>
        <ul>
            <li>Artificial Intelligence</li>
            <li>History of AI</li>
            <li>Applications of AI</li>
            <li>Intelligent Agents</li>
            <li>Types of Agents</li>
            <li>Problem Formulation</li>
        </ul>

        <h2>📘 Unit 2: Search Techniques</h2>
        <ul>
            <li>Uninformed Search</li>
            <li>Breadth First Search</li>
            <li>Depth First Search</li>
            <li>Uniform Cost Search</li>
            <li>Heuristic Search</li>
            <li>A* Algorithm</li>
        </ul>

        <h2>📘 Unit 3: Knowledge Representation</h2>
        <ul>
            <li>Knowledge Representation</li>
            <li>Propositional Logic</li>
            <li>Predicate Logic</li>
            <li>Semantic Networks</li>
            <li>Frames</li>
            <li>Inference</li>
        </ul>

        <h2>📘 Unit 4: Machine Learning and Reasoning</h2>
        <ul>
            <li>Introduction to Machine Learning</li>
            <li>Supervised Learning</li>
            <li>Unsupervised Learning</li>
            <li>Decision Trees</li>
            <li>Classification</li>
            <li>Reasoning Under Uncertainty</li>
        </ul>

        <h2>📘 Unit 5: Expert Systems and Applications</h2>
        <ul>
            <li>Expert Systems</li>
            <li>Knowledge Base</li>
            <li>Inference Engine</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
            <li>Robotics</li>
            <li>AI Applications</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is Artificial Intelligence?</li>
            <li>Explain intelligent agents.</li>
            <li>Explain BFS and DFS.</li>
            <li>What is heuristic search?</li>
            <li>Explain A* algorithm.</li>
            <li>What is knowledge representation?</li>
            <li>Explain propositional and predicate logic.</li>
            <li>What is machine learning?</li>
            <li>Explain expert systems.</li>
            <li>Explain applications of AI.</li>
        </ol>
    `;
}


// ============================================================
// SEMESTER 5
// ============================================================

// ===============================
// Compiler Design
// ===============================

else if (noteName === "Compiler Design") {

    title = "Compiler Design";

    content = `
        <h2>🖥️ Compiler Design</h2>

        <h2>📘 Unit 1: Introduction to Compiler</h2>
        <ul>
            <li>Compiler and Interpreter</li>
            <li>Phases of Compiler</li>
            <li>Lexical Analysis</li>
            <li>Syntax Analysis</li>
            <li>Semantic Analysis</li>
            <li>Symbol Table</li>
        </ul>

        <h2>📘 Unit 2: Lexical Analysis</h2>
        <ul>
            <li>Tokens and Lexemes</li>
            <li>Regular Expressions</li>
            <li>Finite Automata</li>
            <li>Lexical Analyzer</li>
            <li>Lexical Errors</li>
            <li>LEX</li>
        </ul>

        <h2>📘 Unit 3: Syntax Analysis</h2>
        <ul>
            <li>Context Free Grammar</li>
            <li>Top Down Parsing</li>
            <li>Bottom Up Parsing</li>
            <li>LL Parser</li>
            <li>LR Parser</li>
            <li>Shift Reduce Parsing</li>
        </ul>

        <h2>📘 Unit 4: Semantic Analysis and Intermediate Code</h2>
        <ul>
            <li>Semantic Analysis</li>
            <li>Type Checking</li>
            <li>Syntax Directed Translation</li>
            <li>Intermediate Code</li>
            <li>Three Address Code</li>
            <li>Quadruples and Triples</li>
        </ul>

        <h2>📘 Unit 5: Code Optimization and Generation</h2>
        <ul>
            <li>Code Optimization</li>
            <li>Local and Global Optimization</li>
            <li>Basic Blocks</li>
            <li>Control Flow Graph</li>
            <li>Code Generation</li>
            <li>Register Allocation</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>Explain different phases of a compiler.</li>
            <li>What is lexical analysis?</li>
            <li>Explain tokens and lexemes.</li>
            <li>Explain top-down and bottom-up parsing.</li>
            <li>What is an LR parser?</li>
            <li>Explain semantic analysis.</li>
            <li>What is three address code?</li>
            <li>Explain code optimization.</li>
            <li>What are basic blocks?</li>
            <li>Explain code generation.</li>
        </ol>
    `;
}


// ===============================
// Machine Learning
// ===============================

else if (noteName === "Machine Learning") {

    title = "Machine Learning";

    content = `
        <h2>🤖 Machine Learning</h2>

        <h2>📘 Unit 1: Introduction to Machine Learning</h2>
        <ul>
            <li>Machine Learning Concepts</li>
            <li>Types of Machine Learning</li>
            <li>Supervised Learning</li>
            <li>Unsupervised Learning</li>
            <li>Reinforcement Learning</li>
            <li>Training and Testing Data</li>
        </ul>

        <h2>📘 Unit 2: Regression and Classification</h2>
        <ul>
            <li>Linear Regression</li>
            <li>Multiple Regression</li>
            <li>Logistic Regression</li>
            <li>Classification</li>
            <li>K-Nearest Neighbors</li>
            <li>Naive Bayes</li>
        </ul>

        <h2>📘 Unit 3: Decision Trees and Ensemble Learning</h2>
        <ul>
            <li>Decision Trees</li>
            <li>Entropy</li>
            <li>Information Gain</li>
            <li>Random Forest</li>
            <li>Bagging</li>
            <li>Boosting</li>
        </ul>

        <h2>📘 Unit 4: Clustering and Dimensionality Reduction</h2>
        <ul>
            <li>Clustering</li>
            <li>K-Means Clustering</li>
            <li>Hierarchical Clustering</li>
            <li>Principal Component Analysis</li>
            <li>Dimensionality Reduction</li>
            <li>Feature Selection</li>
        </ul>

        <h2>📘 Unit 5: Model Evaluation and Applications</h2>
        <ul>
            <li>Model Evaluation</li>
            <li>Confusion Matrix</li>
            <li>Accuracy, Precision and Recall</li>
            <li>Cross Validation</li>
            <li>Overfitting and Underfitting</li>
            <li>ML Applications</li>
        </ul>

        <div class="important">
            <b>Important:</b><br>
            Accuracy = Correct Predictions / Total Predictions
        </div>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is Machine Learning?</li>
            <li>Explain supervised and unsupervised learning.</li>
            <li>Explain linear regression.</li>
            <li>What is logistic regression?</li>
            <li>Explain KNN algorithm.</li>
            <li>Explain decision trees and information gain.</li>
            <li>What is K-Means clustering?</li>
            <li>Explain PCA.</li>
            <li>What is overfitting?</li>
            <li>Explain confusion matrix and evaluation metrics.</li>
        </ol>
    `;
}


// ===============================
// Computer Graphics
// ===============================

else if (noteName === "Computer Graphics") {

    title = "Computer Graphics";

    content = `
        <h2>🎨 Computer Graphics</h2>

        <h2>📘 Unit 1: Introduction to Computer Graphics</h2>
        <ul>
            <li>Computer Graphics Concepts</li>
            <li>Applications of Computer Graphics</li>
            <li>Display Devices</li>
            <li>Raster Scan Display</li>
            <li>Random Scan Display</li>
            <li>Graphics Software</li>
        </ul>

        <h2>📘 Unit 2: 2D Transformations</h2>
        <ul>
            <li>Translation</li>
            <li>Rotation</li>
            <li>Scaling</li>
            <li>Reflection</li>
            <li>Shearing</li>
            <li>Homogeneous Coordinates</li>
        </ul>

        <h2>📘 Unit 3: Clipping and Viewing</h2>
        <ul>
            <li>Window and Viewport</li>
            <li>Line Clipping</li>
            <li>Cohen-Sutherland Algorithm</li>
            <li>Polygon Clipping</li>
            <li>Viewing Transformation</li>
        </ul>

        <h2>📘 Unit 4: 3D Graphics</h2>
        <ul>
            <li>3D Coordinates</li>
            <li>3D Transformations</li>
            <li>Translation and Rotation</li>
            <li>Scaling</li>
            <li>Projection</li>
            <li>Parallel and Perspective Projection</li>
        </ul>

        <h2>📘 Unit 5: Curves, Surfaces and Animation</h2>
        <ul>
            <li>Bezier Curves</li>
            <li>B-Spline Curves</li>
            <li>Surface Representation</li>
            <li>Rendering</li>
            <li>Animation</li>
            <li>Computer Graphics Applications</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>Explain raster scan and random scan displays.</li>
            <li>Explain 2D transformations.</li>
            <li>What are homogeneous coordinates?</li>
            <li>Explain Cohen-Sutherland line clipping.</li>
            <li>Explain polygon clipping.</li>
            <li>Explain 3D transformations.</li>
            <li>Differentiate parallel and perspective projection.</li>
            <li>Explain Bezier curves.</li>
            <li>What is B-Spline?</li>
            <li>Explain computer graphics applications.</li>
        </ol>
    `;
}


// ===============================
// Cloud Computing
// ===============================

else if (noteName === "Cloud Computing") {

    title = "Cloud Computing";

    content = `
        <h2>☁️ Cloud Computing</h2>

        <h2>📘 Unit 1: Introduction to Cloud Computing</h2>
        <ul>
            <li>Cloud Computing Concepts</li>
            <li>Characteristics of Cloud</li>
            <li>Cloud Architecture</li>
            <li>Benefits of Cloud Computing</li>
            <li>Cloud Deployment Models</li>
            <li>Public, Private and Hybrid Cloud</li>
        </ul>

        <h2>📘 Unit 2: Cloud Service Models</h2>
        <ul>
            <li>Infrastructure as a Service</li>
            <li>Platform as a Service</li>
            <li>Software as a Service</li>
            <li>Everything as a Service</li>
            <li>Cloud Service Providers</li>
        </ul>

        <h2>📘 Unit 3: Virtualization</h2>
        <ul>
            <li>Virtualization Concepts</li>
            <li>Virtual Machines</li>
            <li>Hypervisors</li>
            <li>Server Virtualization</li>
            <li>Storage Virtualization</li>
            <li>Network Virtualization</li>
        </ul>

        <h2>📘 Unit 4: Cloud Storage and Security</h2>
        <ul>
            <li>Cloud Storage</li>
            <li>Distributed Storage</li>
            <li>Data Management</li>
            <li>Cloud Security</li>
            <li>Authentication</li>
            <li>Data Privacy</li>
        </ul>

        <h2>📘 Unit 5: Cloud Applications</h2>
        <ul>
            <li>Cloud Applications</li>
            <li>Cloud Databases</li>
            <li>Big Data and Cloud</li>
            <li>Serverless Computing</li>
            <li>Containerization</li>
            <li>Cloud Migration</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is cloud computing?</li>
            <li>Explain cloud deployment models.</li>
            <li>Differentiate IaaS, PaaS and SaaS.</li>
            <li>What is virtualization?</li>
            <li>Explain hypervisors.</li>
            <li>Explain cloud storage.</li>
            <li>What are major cloud security issues?</li>
            <li>What is serverless computing?</li>
            <li>Explain containerization.</li>
            <li>What is cloud migration?</li>
        </ol>
    `;
}


// ===============================
// Information Security
// ===============================

else if (noteName === "Information Security") {

    title = "Information Security";

    content = `
        <h2>🔐 Information Security</h2>

        <h2>📘 Unit 1: Introduction to Information Security</h2>
        <ul>
            <li>Information Security</li>
            <li>Security Goals</li>
            <li>Confidentiality</li>
            <li>Integrity</li>
            <li>Availability</li>
            <li>Security Threats</li>
        </ul>

        <h2>📘 Unit 2: Cryptography</h2>
        <ul>
            <li>Cryptography Concepts</li>
            <li>Symmetric Encryption</li>
            <li>Asymmetric Encryption</li>
            <li>DES</li>
            <li>AES</li>
            <li>RSA</li>
        </ul>

        <h2>📘 Unit 3: Authentication and Digital Signatures</h2>
        <ul>
            <li>Authentication</li>
            <li>Password Authentication</li>
            <li>Hash Functions</li>
            <li>Digital Signatures</li>
            <li>Digital Certificates</li>
            <li>Public Key Infrastructure</li>
        </ul>

        <h2>📘 Unit 4: Network Security</h2>
        <ul>
            <li>Network Attacks</li>
            <li>Firewalls</li>
            <li>Intrusion Detection</li>
            <li>VPN</li>
            <li>Secure Communication</li>
            <li>SSL and TLS</li>
        </ul>

        <h2>📘 Unit 5: Cyber Security and Security Management</h2>
        <ul>
            <li>Cyber Attacks</li>
            <li>Malware</li>
            <li>Phishing</li>
            <li>Security Policies</li>
            <li>Risk Management</li>
            <li>Security Auditing</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is information security?</li>
            <li>Explain CIA triad.</li>
            <li>Differentiate symmetric and asymmetric encryption.</li>
            <li>Explain AES and RSA.</li>
            <li>What is a hash function?</li>
            <li>Explain digital signatures.</li>
            <li>What is a firewall?</li>
            <li>Explain SSL and TLS.</li>
            <li>What is phishing?</li>
            <li>Explain information security risk management.</li>
        </ol>
    `;
}


// ============================================================
// SEMESTER 6
// ============================================================

// ===============================
// Artificial Intelligence
// ===============================

else if (noteName === "Artificial Intelligence") {

    title = "Artificial Intelligence";

    content = `
        <h2>🤖 Artificial Intelligence</h2>

        <h2>📘 Unit 1: AI Fundamentals</h2>
        <ul>
            <li>Introduction to AI</li>
            <li>History of AI</li>
            <li>AI Problems</li>
            <li>Intelligent Agents</li>
            <li>Rational Agents</li>
        </ul>

        <h2>📘 Unit 2: Search and Problem Solving</h2>
        <ul>
            <li>Problem Formulation</li>
            <li>BFS</li>
            <li>DFS</li>
            <li>Uniform Cost Search</li>
            <li>Greedy Search</li>
            <li>A* Search</li>
        </ul>

        <h2>📘 Unit 3: Knowledge Representation</h2>
        <ul>
            <li>Knowledge Representation</li>
            <li>Propositional Logic</li>
            <li>Predicate Logic</li>
            <li>Inference</li>
            <li>Semantic Networks</li>
            <li>Frames</li>
        </ul>

        <h2>📘 Unit 4: Reasoning and Learning</h2>
        <ul>
            <li>Reasoning Under Uncertainty</li>
            <li>Bayesian Reasoning</li>
            <li>Machine Learning</li>
            <li>Decision Trees</li>
            <li>Classification</li>
        </ul>

        <h2>📘 Unit 5: AI Applications</h2>
        <ul>
            <li>Expert Systems</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
            <li>Robotics</li>
            <li>Speech Recognition</li>
            <li>AI Applications</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is Artificial Intelligence?</li>
            <li>Explain intelligent agents.</li>
            <li>Explain BFS, DFS and A* search.</li>
            <li>What is knowledge representation?</li>
            <li>Explain predicate logic.</li>
            <li>What is Bayesian reasoning?</li>
            <li>Explain decision tree learning.</li>
            <li>What are expert systems?</li>
            <li>Explain NLP.</li>
            <li>Explain AI applications.</li>
        </ol>
    `;
}


// ===============================
// Internet of Things
// ===============================

else if (noteName === "Internet of Things") {

    title = "Internet of Things";

    content = `
        <h2>📡 Internet of Things</h2>

        <h2>📘 Unit 1: Introduction to IoT</h2>
        <ul>
            <li>Internet of Things</li>
            <li>Characteristics of IoT</li>
            <li>IoT Architecture</li>
            <li>IoT Components</li>
            <li>IoT Applications</li>
        </ul>

        <h2>📘 Unit 2: Sensors and Actuators</h2>
        <ul>
            <li>Sensors</li>
            <li>Types of Sensors</li>
            <li>Actuators</li>
            <li>Temperature Sensors</li>
            <li>Motion Sensors</li>
            <li>Data Acquisition</li>
        </ul>

        <h2>📘 Unit 3: IoT Communication</h2>
        <ul>
            <li>IoT Communication Models</li>
            <li>Wi-Fi</li>
            <li>Bluetooth</li>
            <li>ZigBee</li>
            <li>RFID</li>
            <li>MQTT</li>
            <li>CoAP</li>
        </ul>

        <h2>📘 Unit 4: IoT Data and Cloud</h2>
        <ul>
            <li>IoT Data Processing</li>
            <li>Cloud Computing</li>
            <li>Edge Computing</li>
            <li>IoT Databases</li>
            <li>Data Analytics</li>
        </ul>

        <h2>📘 Unit 5: IoT Security and Applications</h2>
        <ul>
            <li>IoT Security</li>
            <li>Authentication</li>
            <li>Encryption</li>
            <li>Smart Home</li>
            <li>Smart City</li>
            <li>Healthcare IoT</li>
            <li>Industrial IoT</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is IoT?</li>
            <li>Explain IoT architecture.</li>
            <li>What are sensors and actuators?</li>
            <li>Explain IoT communication protocols.</li>
            <li>What is MQTT?</li>
            <li>Explain edge computing.</li>
            <li>What are IoT security challenges?</li>
            <li>Explain smart home applications.</li>
            <li>What is Industrial IoT?</li>
            <li>Explain IoT applications in healthcare.</li>
        </ol>
    `;
}


// ===============================
// Big Data
// ===============================

else if (noteName === "Big Data") {

    title = "Big Data";

    content = `
        <h2>📊 Big Data</h2>

        <h2>📘 Unit 1: Introduction to Big Data</h2>
        <ul>
            <li>Big Data Concepts</li>
            <li>Characteristics of Big Data</li>
            <li>5 Vs of Big Data</li>
            <li>Big Data Sources</li>
            <li>Big Data Applications</li>
        </ul>

        <h2>📘 Unit 2: Hadoop</h2>
        <ul>
            <li>Hadoop Introduction</li>
            <li>Hadoop Architecture</li>
            <li>HDFS</li>
            <li>NameNode and DataNode</li>
            <li>MapReduce</li>
        </ul>

        <h2>📘 Unit 3: MapReduce and Hadoop Ecosystem</h2>
        <ul>
            <li>MapReduce Programming</li>
            <li>Mapper</li>
            <li>Reducer</li>
            <li>YARN</li>
            <li>Hive</li>
            <li>Pig</li>
        </ul>

        <h2>📘 Unit 4: NoSQL and Data Processing</h2>
        <ul>
            <li>NoSQL Databases</li>
            <li>MongoDB</li>
            <li>Key-Value Databases</li>
            <li>Document Databases</li>
            <li>Data Processing</li>
            <li>Data Analytics</li>
        </ul>

        <h2>📘 Unit 5: Big Data Analytics</h2>
        <ul>
            <li>Big Data Analytics</li>
            <li>Data Mining</li>
            <li>Predictive Analytics</li>
            <li>Real-Time Analytics</li>
            <li>Big Data Security</li>
            <li>Industry Applications</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is Big Data?</li>
            <li>Explain the 5 Vs of Big Data.</li>
            <li>Explain Hadoop architecture.</li>
            <li>What is HDFS?</li>
            <li>Explain MapReduce.</li>
            <li>What are Mapper and Reducer?</li>
            <li>Explain Hive and Pig.</li>
            <li>What are NoSQL databases?</li>
            <li>Explain MongoDB.</li>
            <li>Explain Big Data Analytics.</li>
        </ol>
    `;
}


// ===============================
// Mobile Application Development
// ===============================

else if (noteName === "Mobile Application Development") {

    title = "Mobile Application Development";

    content = `
        <h2>📱 Mobile Application Development</h2>

        <h2>📘 Unit 1: Mobile Computing</h2>
        <ul>
            <li>Mobile Computing</li>
            <li>Mobile Application Architecture</li>
            <li>Mobile Operating Systems</li>
            <li>Android Overview</li>
            <li>iOS Overview</li>
        </ul>

        <h2>📘 Unit 2: Android Fundamentals</h2>
        <ul>
            <li>Android Architecture</li>
            <li>Android Studio</li>
            <li>Activities</li>
            <li>Services</li>
            <li>Broadcast Receivers</li>
            <li>Content Providers</li>
        </ul>

        <h2>📘 Unit 3: Android UI and Events</h2>
        <ul>
            <li>Layouts</li>
            <li>Views and Widgets</li>
            <li>Buttons and Text Views</li>
            <li>Menus</li>
            <li>Event Handling</li>
            <li>Fragments</li>
        </ul>

        <h2>📘 Unit 4: Data Storage and Networking</h2>
        <ul>
            <li>SQLite Database</li>
            <li>Shared Preferences</li>
            <li>File Storage</li>
            <li>Networking</li>
            <li>REST APIs</li>
            <li>JSON</li>
        </ul>

        <h2>📘 Unit 5: Advanced Mobile Development</h2>
        <ul>
            <li>Notifications</li>
            <li>Location Services</li>
            <li>Maps</li>
            <li>Camera and Sensors</li>
            <li>Mobile Security</li>
            <li>App Deployment</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is mobile computing?</li>
            <li>Explain Android architecture.</li>
            <li>What is an Activity?</li>
            <li>Explain Android components.</li>
            <li>What are layouts and widgets?</li>
            <li>Explain SQLite database.</li>
            <li>How are REST APIs used in mobile apps?</li>
            <li>Explain location services.</li>
            <li>What are mobile security issues?</li>
            <li>Explain mobile application deployment.</li>
        </ol>
    `;
}


// ===============================
// Distributed Systems
// ===============================

else if (noteName === "Distributed Systems") {

    title = "Distributed Systems";

    content = `
        <h2>🖧 Distributed Systems</h2>

        <h2>📘 Unit 1: Introduction to Distributed Systems</h2>
        <ul>
            <li>Distributed System Concepts</li>
            <li>Characteristics</li>
            <li>Advantages and Disadvantages</li>
            <li>Distributed System Architecture</li>
            <li>Client-Server Systems</li>
        </ul>

        <h2>📘 Unit 2: Communication</h2>
        <ul>
            <li>Inter-Process Communication</li>
            <li>Message Passing</li>
            <li>Remote Procedure Call</li>
            <li>Remote Method Invocation</li>
            <li>Distributed Objects</li>
        </ul>

        <h2>📘 Unit 3: Synchronization</h2>
        <ul>
            <li>Clock Synchronization</li>
            <li>Logical Clocks</li>
            <li>Lamport Clock</li>
            <li>Mutual Exclusion</li>
            <li>Distributed Deadlock</li>
        </ul>

        <h2>📘 Unit 4: Distributed Transactions</h2>
        <ul>
            <li>Distributed Transactions</li>
            <li>Concurrency Control</li>
            <li>Two Phase Commit</li>
            <li>Distributed Recovery</li>
            <li>Replication</li>
        </ul>

        <h2>📘 Unit 5: Distributed File Systems and Security</h2>
        <ul>
            <li>Distributed File Systems</li>
            <li>Distributed Databases</li>
            <li>Fault Tolerance</li>
            <li>Distributed Security</li>
            <li>Authentication</li>
            <li>Distributed Applications</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is a distributed system?</li>
            <li>Explain distributed system architecture.</li>
            <li>What is RPC?</li>
            <li>Explain message passing.</li>
            <li>What is Lamport logical clock?</li>
            <li>Explain distributed mutual exclusion.</li>
            <li>What is distributed deadlock?</li>
            <li>Explain two-phase commit.</li>
            <li>What is fault tolerance?</li>
            <li>Explain distributed file systems.</li>
        </ol>
    `;
}


// ============================================================
// SEMESTER 7
// ============================================================

// ===============================
// Deep Learning
// ===============================

else if (noteName === "Deep Learning") {

    title = "Deep Learning";

    content = `
        <h2>🧠 Deep Learning</h2>

        <h2>📘 Unit 1: Introduction to Deep Learning</h2>
        <ul>
            <li>Deep Learning Concepts</li>
            <li>Artificial Neural Networks</li>
            <li>Biological Neurons</li>
            <li>Perceptron</li>
            <li>Activation Functions</li>
        </ul>

        <h2>📘 Unit 2: Neural Networks</h2>
        <ul>
            <li>Feed Forward Neural Networks</li>
            <li>Backpropagation</li>
            <li>Gradient Descent</li>
            <li>Loss Functions</li>
            <li>Optimization</li>
        </ul>

        <h2>📘 Unit 3: Convolutional Neural Networks</h2>
        <ul>
            <li>CNN Architecture</li>
            <li>Convolution Operation</li>
            <li>Pooling</li>
            <li>Padding</li>
            <li>Image Classification</li>
        </ul>

        <h2>📘 Unit 4: Recurrent Neural Networks</h2>
        <ul>
            <li>RNN Architecture</li>
            <li>Sequence Data</li>
            <li>LSTM</li>
            <li>GRU</li>
            <li>Time Series Applications</li>
        </ul>

        <h2>📘 Unit 5: Advanced Deep Learning</h2>
        <ul>
            <li>Autoencoders</li>
            <li>Generative Models</li>
            <li>Transfer Learning</li>
            <li>Deep Reinforcement Learning</li>
            <li>Deep Learning Applications</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is Deep Learning?</li>
            <li>Explain artificial neural networks.</li>
            <li>What is backpropagation?</li>
            <li>Explain gradient descent.</li>
            <li>Explain CNN architecture.</li>
            <li>What is pooling?</li>
            <li>Explain RNN.</li>
            <li>Differentiate LSTM and GRU.</li>
            <li>What are autoencoders?</li>
            <li>Explain applications of deep learning.</li>
        </ol>
    `;
}


// ===============================
// Cyber Security
// ===============================

else if (noteName === "Cyber Security") {

    title = "Cyber Security";

    content = `
        <h2>🛡️ Cyber Security</h2>

        <h2>📘 Unit 1: Introduction to Cyber Security</h2>
        <ul>
            <li>Cyber Security Concepts</li>
            <li>Cyber Threats</li>
            <li>Cyber Attacks</li>
            <li>Security Principles</li>
            <li>Cyber Security Challenges</li>
        </ul>

        <h2>📘 Unit 2: Cryptography</h2>
        <ul>
            <li>Cryptography</li>
            <li>Symmetric Encryption</li>
            <li>Asymmetric Encryption</li>
            <li>Hashing</li>
            <li>Digital Signatures</li>
            <li>Certificates</li>
        </ul>

        <h2>📘 Unit 3: Network Security</h2>
        <ul>
            <li>Network Attacks</li>
            <li>Firewalls</li>
            <li>Intrusion Detection</li>
            <li>VPN</li>
            <li>SSL and TLS</li>
            <li>Secure Networks</li>
        </ul>

        <h2>📘 Unit 4: Cyber Attacks and Malware</h2>
        <ul>
            <li>Malware</li>
            <li>Viruses</li>
            <li>Worms</li>
            <li>Trojans</li>
            <li>Ransomware</li>
            <li>Phishing</li>
            <li>Denial of Service Attacks</li>
        </ul>

        <h2>📘 Unit 5: Cyber Security Management</h2>
        <ul>
            <li>Security Policies</li>
            <li>Risk Assessment</li>
            <li>Incident Response</li>
            <li>Digital Forensics</li>
            <li>Security Auditing</li>
            <li>Cyber Laws</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is cyber security?</li>
            <li>Explain different cyber threats.</li>
            <li>Explain symmetric and asymmetric encryption.</li>
            <li>What is a digital signature?</li>
            <li>Explain firewall and IDS.</li>
            <li>What is malware?</li>
            <li>Explain ransomware and phishing.</li>
            <li>What is a DoS attack?</li>
            <li>Explain digital forensics.</li>
            <li>What are cyber laws?</li>
        </ol>
    `;
}


// ===============================
// Data Mining
// ===============================

else if (noteName === "Data Mining") {

    title = "Data Mining";

    content = `
        <h2>⛏️ Data Mining</h2>

        <h2>📘 Unit 1: Introduction to Data Mining</h2>
        <ul>
            <li>Data Mining Concepts</li>
            <li>Data Mining Tasks</li>
            <li>Knowledge Discovery Process</li>
            <li>Data Mining Applications</li>
            <li>Data Preprocessing</li>
        </ul>

        <h2>📘 Unit 2: Data Warehousing</h2>
        <ul>
            <li>Data Warehouse</li>
            <li>Data Warehouse Architecture</li>
            <li>OLAP</li>
            <li>OLTP</li>
            <li>Data Cubes</li>
            <li>ETL Process</li>
        </ul>

        <h2>📘 Unit 3: Association Rule Mining</h2>
        <ul>
            <li>Association Rules</li>
            <li>Support</li>
            <li>Confidence</li>
            <li>Lift</li>
            <li>Apriori Algorithm</li>
            <li>Frequent Itemsets</li>
        </ul>

        <div class="important">
            <b>Important:</b><br>
            Support and confidence are important measures used
            in association rule mining.
        </div>

        <h2>📘 Unit 4: Classification and Prediction</h2>
        <ul>
            <li>Classification</li>
            <li>Decision Trees</li>
            <li>Naive Bayes</li>
            <li>K-Nearest Neighbors</li>
            <li>Prediction</li>
            <li>Model Evaluation</li>
        </ul>

        <h2>📘 Unit 5: Clustering and Applications</h2>
        <ul>
            <li>Clustering</li>
            <li>K-Means</li>
            <li>Hierarchical Clustering</li>
            <li>Density Based Clustering</li>
            <li>Outlier Detection</li>
            <li>Data Mining Applications</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is data mining?</li>
            <li>Explain the KDD process.</li>
            <li>What is a data warehouse?</li>
            <li>Differentiate OLAP and OLTP.</li>
            <li>Explain association rule mining.</li>
            <li>What are support and confidence?</li>
            <li>Explain Apriori algorithm.</li>
            <li>Explain classification techniques.</li>
            <li>What is K-Means clustering?</li>
            <li>Explain applications of data mining.</li>
        </ol>
    `;
}


// ===============================
// Blockchain Technology
// ===============================

else if (noteName === "Blockchain Technology") {

    title = "Blockchain Technology";

    content = `
        <h2>⛓️ Blockchain Technology</h2>

        <h2>📘 Unit 1: Introduction to Blockchain</h2>
        <ul>
            <li>Blockchain Concepts</li>
            <li>History of Blockchain</li>
            <li>Distributed Ledger</li>
            <li>Blocks and Transactions</li>
            <li>Blockchain Architecture</li>
        </ul>

        <h2>📘 Unit 2: Cryptography and Consensus</h2>
        <ul>
            <li>Hash Functions</li>
            <li>Public Key Cryptography</li>
            <li>Digital Signatures</li>
            <li>Proof of Work</li>
            <li>Proof of Stake</li>
            <li>Consensus Mechanisms</li>
        </ul>

        <h2>📘 Unit 3: Bitcoin and Cryptocurrency</h2>
        <ul>
            <li>Bitcoin</li>
            <li>Bitcoin Architecture</li>
            <li>Bitcoin Transactions</li>
            <li>Mining</li>
            <li>Wallets</li>
            <li>Cryptocurrency</li>
        </ul>

        <h2>📘 Unit 4: Ethereum and Smart Contracts</h2>
        <ul>
            <li>Ethereum</li>
            <li>Smart Contracts</li>
            <li>Ethereum Virtual Machine</li>
            <li>Solidity</li>
            <li>Decentralized Applications</li>
            <li>DApps</li>
        </ul>

        <h2>📘 Unit 5: Blockchain Applications and Security</h2>
        <ul>
            <li>Blockchain Security</li>
            <li>Blockchain in Banking</li>
            <li>Supply Chain Management</li>
            <li>Healthcare</li>
            <li>Digital Identity</li>
            <li>Future of Blockchain</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is blockchain?</li>
            <li>Explain distributed ledger technology.</li>
            <li>What is a hash function?</li>
            <li>Explain Proof of Work and Proof of Stake.</li>
            <li>What is Bitcoin?</li>
            <li>Explain Bitcoin mining.</li>
            <li>What are smart contracts?</li>
            <li>Explain Ethereum.</li>
            <li>What are DApps?</li>
            <li>Explain blockchain applications.</li>
        </ol>
    `;
}


// ===============================
// Project Work
// ===============================

else if (noteName === "Project Work") {

    title = "Project Work";

    content = `
        <h2>💻 Project Work</h2>

        <h2>📘 Unit 1: Project Planning</h2>
        <ul>
            <li>Project Selection</li>
            <li>Problem Identification</li>
            <li>Project Objectives</li>
            <li>Feasibility Study</li>
            <li>Project Scope</li>
        </ul>

        <h2>📘 Unit 2: Requirements and Analysis</h2>
        <ul>
            <li>Requirement Gathering</li>
            <li>Functional Requirements</li>
            <li>Non-Functional Requirements</li>
            <li>System Analysis</li>
            <li>Use Case Diagrams</li>
            <li>System Specification</li>
        </ul>

        <h2>📘 Unit 3: System Design</h2>
        <ul>
            <li>System Architecture</li>
            <li>Database Design</li>
            <li>UI/UX Design</li>
            <li>Data Flow Diagrams</li>
            <li>UML Diagrams</li>
            <li>Technology Selection</li>
        </ul>

        <h2>📘 Unit 4: Implementation and Testing</h2>
        <ul>
            <li>Project Implementation</li>
            <li>Coding Standards</li>
            <li>Version Control</li>
            <li>Unit Testing</li>
            <li>Integration Testing</li>
            <li>System Testing</li>
        </ul>

        <h2>📘 Unit 5: Documentation and Presentation</h2>
        <ul>
            <li>Project Documentation</li>
            <li>Project Report</li>
            <li>Results and Discussion</li>
            <li>Future Scope</li>
            <li>Project Presentation</li>
            <li>Viva Preparation</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>How do you select a project topic?</li>
            <li>What is feasibility study?</li>
            <li>Explain functional and non-functional requirements.</li>
            <li>What is a use case diagram?</li>
            <li>Explain system architecture.</li>
            <li>What is database design?</li>
            <li>Explain different types of software testing.</li>
            <li>What should be included in a project report?</li>
            <li>How should a project presentation be prepared?</li>
            <li>How can you prepare for project viva?</li>
        </ol>
    `;
}

// ============================================================
// SEMESTER 8
// ============================================================

// ===============================
// Major Project
// ===============================

else if (noteName === "Major Project") {

    title = "Major Project";

    content = `
        <h2>🎓 Major Project</h2>

        <h2>📘 Unit 1: Project Planning and Problem Identification</h2>
        <ul>
            <li>Project Selection</li>
            <li>Problem Identification</li>
            <li>Problem Statement</li>
            <li>Project Objectives</li>
            <li>Project Scope</li>
            <li>Feasibility Study</li>
        </ul>

        <h2>📘 Unit 2: Requirement Analysis</h2>
        <ul>
            <li>Requirement Gathering</li>
            <li>Functional Requirements</li>
            <li>Non-Functional Requirements</li>
            <li>Hardware Requirements</li>
            <li>Software Requirements</li>
            <li>System Analysis</li>
        </ul>

        <h2>📘 Unit 3: System Design and Development</h2>
        <ul>
            <li>System Architecture</li>
            <li>Database Design</li>
            <li>UML Diagrams</li>
            <li>Data Flow Diagrams</li>
            <li>User Interface Design</li>
            <li>System Development</li>
        </ul>

        <h2>📘 Unit 4: Implementation and Testing</h2>
        <ul>
            <li>Project Implementation</li>
            <li>Coding Standards</li>
            <li>Version Control</li>
            <li>Unit Testing</li>
            <li>Integration Testing</li>
            <li>System Testing</li>
        </ul>

        <h2>📘 Unit 5: Documentation and Presentation</h2>
        <ul>
            <li>Project Documentation</li>
            <li>Project Report</li>
            <li>Results and Discussion</li>
            <li>Future Scope</li>
            <li>Project Presentation</li>
            <li>Viva Preparation</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>How do you select a major project?</li>
            <li>What is a problem statement?</li>
            <li>Explain feasibility study.</li>
            <li>Explain functional and non-functional requirements.</li>
            <li>What is system architecture?</li>
            <li>Explain database design.</li>
            <li>What are UML diagrams?</li>
            <li>Explain different types of software testing.</li>
            <li>What should be included in a project report?</li>
            <li>How should a project viva be prepared?</li>
        </ol>
    `;
}

// ===============================
// Semester 8 - Project Seminar
// ===============================

else if (noteName === "Project Seminar") {

    title = "Project Seminar";

    content = `
        <h2>🎤 Project Seminar</h2>

        <h2>📘 Unit 1: Seminar Fundamentals</h2>
        <ul>
            <li>Introduction to Seminar</li>
            <li>Selection of Seminar Topic</li>
            <li>Problem Identification</li>
            <li>Objectives of Seminar</li>
            <li>Literature Survey</li>
        </ul>

        <h2>📘 Unit 2: Research and Content Preparation</h2>
        <ul>
            <li>Literature Review</li>
            <li>Research Papers</li>
            <li>Data Collection</li>
            <li>Technical Analysis</li>
            <li>Reference Collection</li>
        </ul>

        <h2>📘 Unit 3: Seminar Report</h2>
        <ul>
            <li>Report Structure</li>
            <li>Abstract</li>
            <li>Introduction</li>
            <li>Methodology</li>
            <li>Results and Discussion</li>
            <li>Conclusion</li>
        </ul>

        <h2>📘 Unit 4: Presentation Preparation</h2>
        <ul>
            <li>Presentation Structure</li>
            <li>PowerPoint Presentation</li>
            <li>Slide Design</li>
            <li>Charts and Diagrams</li>
            <li>Technical Demonstration</li>
        </ul>

        <h2>📘 Unit 5: Seminar Delivery and Viva</h2>
        <ul>
            <li>Presentation Skills</li>
            <li>Communication Skills</li>
            <li>Question Answer Session</li>
            <li>Technical Viva</li>
            <li>Common Presentation Mistakes</li>
            <li>Seminar Evaluation</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>How should a seminar topic be selected?</li>
            <li>What is a literature survey?</li>
            <li>How is a seminar report prepared?</li>
            <li>What should be included in the abstract?</li>
            <li>How should a technical presentation be designed?</li>
            <li>What are the important presentation skills?</li>
            <li>How should technical questions be answered?</li>
            <li>What are common seminar mistakes?</li>
        </ol>
    `;
}

// ===============================
// Semester 8 - Technical Training
// ===============================

else if (noteName === "Technical Training") {

    title = "Technical Training";

    content = `
        <h2>💻 Technical Training</h2>

        <h2>📘 Unit 1: Training Fundamentals</h2>
        <ul>
            <li>Introduction to Technical Training</li>
            <li>Training Objectives</li>
            <li>Training Planning</li>
            <li>Industry Orientation</li>
            <li>Professional Skills</li>
        </ul>

        <h2>📘 Unit 2: Technical Skill Development</h2>
        <ul>
            <li>Programming Skills</li>
            <li>Database Skills</li>
            <li>Web Technologies</li>
            <li>Software Development</li>
            <li>Problem Solving</li>
        </ul>

        <h2>📘 Unit 3: Practical Training</h2>
        <ul>
            <li>Practical Assignments</li>
            <li>Project Development</li>
            <li>Tools and Technologies</li>
            <li>Debugging</li>
            <li>Testing</li>
        </ul>

        <h2>📘 Unit 4: Industry Practices</h2>
        <ul>
            <li>Software Development Life Cycle</li>
            <li>Version Control</li>
            <li>Team Collaboration</li>
            <li>Documentation</li>
            <li>Professional Ethics</li>
        </ul>

        <h2>📘 Unit 5: Training Report and Evaluation</h2>
        <ul>
            <li>Training Report</li>
            <li>Daily Work Report</li>
            <li>Learning Outcomes</li>
            <li>Project Documentation</li>
            <li>Presentation</li>
            <li>Viva</li>
        </ul>

        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is technical training?</li>
            <li>What are the objectives of technical training?</li>
            <li>Explain practical skill development.</li>
            <li>What is SDLC?</li>
            <li>Why is version control important?</li>
            <li>Explain team collaboration.</li>
            <li>How is a training report prepared?</li>
            <li>What are the learning outcomes of technical training?</li>
        </ol>
    `;
}

// ===============================
// Semester 8 - Professional Elective
// ===============================

else if (noteName === "Professional Elective") {

    title = "Professional Elective";

    content = `
        <h2>📚 Professional Elective</h2>

        <h2>1. Introduction</h2>

        <p>
            A Professional Elective is a subject selected by students
            according to their interests and career goals. It allows
            students to study a specialized area of Computer Science
            in greater depth.
        </p>

        <h2>2. Purpose of Professional Electives</h2>

        <ul>
            <li>Develop specialized technical knowledge</li>
            <li>Explore a specific career area</li>
            <li>Improve practical skills</li>
            <li>Prepare for industry requirements</li>
            <li>Support higher studies and research</li>
        </ul>

        <h2>3. Common Professional Elective Areas</h2>

        <ul>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Cloud Computing</li>
            <li>Cyber Security</li>
            <li>Data Science</li>
            <li>Internet of Things</li>
            <li>Blockchain</li>
            <li>Computer Vision</li>
        </ul>

        <h2>4. Elective Selection</h2>

        <p>
            Students should select an elective based on their interests,
            existing skills, career plans and future opportunities.
        </p>

        <h2>5. Learning Process</h2>

        <ol>
            <li>Understand the subject fundamentals</li>
            <li>Study theoretical concepts</li>
            <li>Practice technical problems</li>
            <li>Work on practical assignments</li>
            <li>Develop a small project</li>
            <li>Prepare for examinations</li>
        </ol>

        <h2>6. Career Benefits</h2>

        <ul>
            <li>Helps build specialization</li>
            <li>Improves technical profile</li>
            <li>Supports internship preparation</li>
            <li>Helps in placement preparation</li>
            <li>Provides a foundation for advanced learning</li>
        </ul>

        <h2>7. Important Points</h2>

        <div class="important">
            <b>Choose an elective according to:</b><br><br>
            Interest + Career Goal + Skills + Future Scope
        </div>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is a Professional Elective?</li>
            <li>What is the purpose of professional electives?</li>
            <li>Explain different areas of professional electives.</li>
            <li>How should a student select an elective?</li>
            <li>What is the learning process for an elective subject?</li>
            <li>What are the career benefits of professional electives?</li>
            <li>How do electives help in placement preparation?</li>
        </ol>
    `;
}
// ===============================
// Open Elective
// ===============================

else if (noteName === "Open Elective") {

    title = "Open Elective";

    content = `
        <h2>📚 Open Elective</h2>

        <h2>📘 Unit 1: Introduction to Open Electives</h2>
        <ul>
            <li>Meaning of Open Elective</li>
            <li>Importance of Open Electives</li>
            <li>Interdisciplinary Learning</li>
            <li>Subjects Outside Core Specialization</li>
            <li>Role of Open Electives in Education</li>
        </ul>

        <div class="important">
            <b>Important:</b><br>
            An Open Elective allows students to study a subject
            outside their core specialization.
        </div>


        <h2>📘 Unit 2: Purpose and Areas of Open Electives</h2>
        <ul>
            <li>Interdisciplinary Knowledge</li>
            <li>Exploring Subjects Outside Core Branch</li>
            <li>Development of Additional Skills</li>
            <li>Career Opportunities</li>
            <li>Understanding Technology and Management</li>
            <li>Entrepreneurship</li>
            <li>Business Management</li>
            <li>Digital Marketing</li>
            <li>Data Science</li>
            <li>Artificial Intelligence</li>
            <li>Environmental Studies</li>
            <li>Finance and Economics</li>
            <li>Communication Skills</li>
        </ul>


        <h2>📘 Unit 3: Selection of Open Elective</h2>
        <ul>
            <li>Selection According to Interest</li>
            <li>Career Goals</li>
            <li>Skill Development</li>
            <li>Future Scope</li>
            <li>Availability of Subjects</li>
            <li>Institutional Guidelines</li>
        </ul>

        <div class="important">
            <b>Important Formula:</b><br>
            Interest + Career Goal + Skill Development + Future Scope
        </div>


        <h2>📘 Unit 4: Learning Process and Benefits</h2>
        <ul>
            <li>Understanding Basic Concepts</li>
            <li>Studying Theoretical Topics</li>
            <li>Practicing Important Questions</li>
            <li>Completing Assignments</li>
            <li>Practical Work</li>
            <li>Preparing Examination Notes</li>
            <li>Applying Knowledge in Real-World Situations</li>
            <li>Broadening Knowledge</li>
            <li>Developing Additional Skills</li>
            <li>Improving Problem-Solving Ability</li>
        </ul>


        <h2>📘 Unit 5: Career Benefits and Interdisciplinary Learning</h2>
        <ul>
            <li>Career Development</li>
            <li>Internship Opportunities</li>
            <li>Placement Opportunities</li>
            <li>Entrepreneurship Opportunities</li>
            <li>Higher Studies</li>
            <li>Interdisciplinary Knowledge</li>
            <li>Additional Technical Skills</li>
            <li>Future Career Opportunities</li>
        </ul>

        <div class="important">
            <b>Career Benefit:</b><br>
            Open Electives provide knowledge beyond the core subject
            and can support internships, placements, entrepreneurship
            and higher studies.
        </div>


        <h2>📌 Important Questions</h2>
        <ol>
            <li>What is an Open Elective?</li>
            <li>What is the purpose of an Open Elective?</li>
            <li>Explain the benefits of Open Electives.</li>
            <li>What are some common areas of Open Electives?</li>
            <li>How should a student select an Open Elective?</li>
            <li>What factors should be considered while selecting an Open Elective?</li>
            <li>Explain the learning process of an Open Elective.</li>
            <li>How do Open Electives help in skill development?</li>
            <li>How do Open Electives help in career development?</li>
            <li>Explain the importance of interdisciplinary learning.</li>
            <li>How can Open Electives help in internships and placements?</li>
            <li>Explain the role of Open Electives in higher studies.</li>
        </ol>
    `;
}

    // ===============================
    // Page Design
    // ===============================

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

    if (!questionsWindow) {
        alert("Please allow popup for this website.");
        return;
    }

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

.course {
    background: white;
    padding: 25px;
    margin-bottom: 25px;
    border-radius: 12px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.subject {
    background: #eef3ff;
    padding: 18px;
    margin: 15px 0;
    border-radius: 10px;
}

.level {
    background: white;
    padding: 15px;
    margin: 12px 0;
    border-radius: 8px;
}

.qa-item {
    background: #fafafa;
    padding: 14px;
    margin: 10px 0;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
}

.answer {
    background: #f5f7fb;
    padding: 10px;
    margin-top: 8px;
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
    margin-bottom: 20px;
}

</style>

</head>

<body>

<header>

<h1>📝 CollegeBuddy</h1>
<p>Important Questions</p>
<p>Course • Semester • Subject</p>

</header>

<div class="container">

<button onclick="window.print()" class="pdf-button">
📥 Download / Print Questions
</button>

<div class="filters">

<select id="courseSelect" onchange="filterQuestions()">

<option value="all">All Courses</option>
<option value="btech-cse">B.Tech CSE</option>
<option value="bca">BCA</option>
<option value="bba">BBA</option>

</select>

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

<div id="questionsContainer"></div>

</div>

<script>

const subjects = {

    "btech-cse": {

        1: [
            "Engineering Mathematics-I",
            "Programming for Problem Solving",
            "Engineering Physics",
            "Engineering Chemistry",
            "Basic Electrical Engineering"
        ],

        2: [
            "Engineering Mathematics-II",
            "Data Structures",
            "Digital Logic Design",
            "Object Oriented Programming",
            "Computer Organization"
        ],

        3: [
            "Discrete Mathematics",
            "Database Management System",
            "Operating System",
            "Computer Networks",
            "Software Engineering"
        ],

        4: [
            "Design and Analysis of Algorithms",
            "Web Technology",
            "Theory of Computation",
            "Microprocessor",
            "Artificial Intelligence"
        ],

        5: [
            "Compiler Design",
            "Machine Learning",
            "Computer Graphics",
            "Cloud Computing",
            "Information Security"
        ],

        6: [
            "Artificial Intelligence",
            "Internet of Things",
            "Big Data",
            "Mobile Application Development",
            "Distributed Systems"
        ],

        7: [
            "Deep Learning",
            "Cyber Security",
            "Data Mining",
            "Blockchain Technology",
            "Project Work"
        ],

        8: [
            "Major Project",
            "Project Seminar",
            "Technical Training",
            "Professional Elective",
            "Open Elective"
        ]

    },

    "bca": {

        1: [
            "Computer Fundamentals",
            "Programming in C",
            "Mathematics",
            "Digital Electronics",
            "Communication Skills"
        ],

        2: [
            "Data Structures",
            "Database Management System",
            "Object Oriented Programming",
            "Computer Organization",
            "Mathematics-II"
        ],

        3: [
            "Operating System",
            "Computer Networks",
            "Web Development",
            "Python Programming",
            "Software Engineering"
        ],

        4: [
            "Java Programming",
            "Advanced Database Management",
            "Computer Graphics",
            "Data Communication",
            "System Analysis and Design"
        ],

        5: [
            "Artificial Intelligence",
            "Machine Learning",
            "Cloud Computing",
            "Cyber Security",
            "Data Analytics"
        ],

        6: [
            "Big Data",
            "Mobile Application Development",
            "Internet of Things",
            "Project Work",
            "Professional Elective"
        ]

    },

    "bba": {

        1: [
            "Principles of Management",
            "Business Economics",
            "Financial Accounting",
            "Business Communication",
            "Business Mathematics"
        ],

        2: [
            "Marketing Management",
            "Human Resource Management",
            "Business Statistics",
            "Organizational Behaviour",
            "Business Environment"
        ],

        3: [
            "Financial Management",
            "Production Management",
            "Business Law",
            "Research Methodology",
            "Management Information System"
        ],

        4: [
            "Consumer Behaviour",
            "Operations Management",
            "Entrepreneurship",
            "Cost Accounting",
            "Business Research"
        ],

        5: [
            "Strategic Management",
            "International Business",
            "Project Management",
            "Investment Management",
            "Business Analytics"
        ],

        6: [
            "Business Ethics",
            "Digital Marketing",
            "Corporate Governance",
            "Entrepreneurship Development",
            "Final Project"
        ]

    }

};


function getQuestions(subject) {

    return {

        basic: [
            "What is " + subject + "?",
            "Define " + subject + ".",
            "What are the basic concepts of " + subject + "?"
        ],

        intermediate: [
            "Explain the important concepts of " + subject + ".",
            "Explain the applications of " + subject + ".",
            "What are the advantages and limitations of " + subject + "?"
        ],

        advanced: [
            "Explain " + subject + " in detail with suitable examples.",
            "Discuss the important problems and solutions related to " + subject + ".",
            "Explain the practical applications of " + subject + "."
        ]

    };

}


function showQuestions() {

    const container =
        document.getElementById("questionsContainer");

    container.innerHTML = "";

    Object.keys(subjects).forEach(function(course) {

        Object.keys(subjects[course]).forEach(function(semester) {

            subjects[course][semester].forEach(function(subject) {

                const questions = getQuestions(subject);

                const html = document.createElement("div");

                html.className = "course";

                html.dataset.course = course;

                html.dataset.semester = semester;

                html.innerHTML =
                    "<h2>" +
                        course.toUpperCase() +
                        " — Semester " +
                        semester +
                    "</h2>" +

                    '<div class="subject">' +

                        "<h2>📚 " + subject + "</h2>" +

                        '<div class="level" data-level="basic">' +

                            "<h3>🟢 Basic</h3>" +

                            '<div class="qa-item">' +
                                "<strong>Q1. " +
                                questions.basic[0] +
                                "</strong>" +

                                '<div class="answer">' +
                                    "<strong>Answer:</strong><br>" +
                                    "Write the basic definition, meaning and " +
                                    "fundamental concepts related to this topic." +
                                "</div>" +
                            "</div>" +

                            '<div class="qa-item">' +
                                "<strong>Q2. " +
                                questions.basic[1] +
                                "</strong>" +

                                '<div class="answer">' +
                                    "<strong>Answer:</strong><br>" +
                                    "Explain the topic using simple definitions " +
                                    "and suitable examples." +
                                "</div>" +
                            "</div>" +

                            '<div class="qa-item">' +
                                "<strong>Q3. " +
                                questions.basic[2] +
                                "</strong>" +

                                '<div class="answer">' +
                                    "<strong>Answer:</strong><br>" +
                                    "Describe the important basic concepts and terminology." +
                                "</div>" +
                            "</div>" +

                        "</div>" +

                        '<div class="level" data-level="intermediate">' +

                            "<h3>🟡 Intermediate</h3>" +

                            '<div class="qa-item">' +
                                "<strong>Q1. " +
                                questions.intermediate[0] +
                                "</strong>" +

                                '<div class="answer">' +
                                    "<strong>Answer:</strong><br>" +
                                    "Explain the major concepts with suitable examples and details." +
                                "</div>" +
                            "</div>" +

                            '<div class="qa-item">' +
                                "<strong>Q2. " +
                                questions.intermediate[1] +
                                "</strong>" +

                                '<div class="answer">' +
                                    "<strong>Answer:</strong><br>" +
                                    "Discuss practical uses and important applications of the subject." +
                                "</div>" +
                            "</div>" +

                            '<div class="qa-item">' +
                                "<strong>Q3. " +
                                questions.intermediate[2] +
                                "</strong>" +

                                '<div class="answer">' +
                                    "<strong>Answer:</strong><br>" +
                                    "Explain the advantages, limitations and important points." +
                                "</div>" +
                            "</div>" +

                        "</div>" +

                        '<div class="level" data-level="advanced">' +

                            "<h3>🔴 Advanced</h3>" +

                            '<div class="qa-item">' +
                                "<strong>Q1. " +
                                questions.advanced[0] +
                                "</strong>" +

                                '<div class="answer">' +
                                    "<strong>Answer:</strong><br>" +
                                    "Give a detailed explanation with examples, diagrams " +
                                    "or applications wherever appropriate." +
                                "</div>" +
                            "</div>" +

                            '<div class="qa-item">' +
                                "<strong>Q2. " +
                                questions.advanced[1] +
                                "</strong>" +

                                '<div class="answer">' +
                                    "<strong>Answer:</strong><br>" +
                                    "Discuss the topic critically and explain suitable solutions." +
                                "</div>" +
                            "</div>" +

                            '<div class="qa-item">' +
                                "<strong>Q3. " +
                                questions.advanced[2] +
                                "</strong>" +

                                '<div class="answer">' +
                                    "<strong>Answer:</strong><br>" +
                                    "Explain real-world and practical applications in detail." +
                                "</div>" +
                            "</div>" +

                        "</div>" +

                    "</div>";

                container.appendChild(html);

            });

        });

    });

}


function filterQuestions() {

    const course =
        document.getElementById("courseSelect").value;

    const semester =
        document.getElementById("semesterSelect").value;

    const level =
        document.getElementById("levelSelect").value;

    const cards =
        document.querySelectorAll(".course");

    cards.forEach(function(card) {

        const courseMatch =
            course === "all" ||
            card.dataset.course === course;

        const semesterMatch =
            semester === "all" ||
            card.dataset.semester === semester;

        const levels =
            card.querySelectorAll(".level");

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

        if (
            courseMatch &&
            semesterMatch &&
            visibleLevel
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


showQuestions();

</script>

</body>
</html>
    `);

    questionsWindow.document.close();
}


 


  



// ===============================
// Course Semester System
// ===============================

function showSemesters(course) {

    const semesterArea = document.getElementById("semesterArea");
    const subjectArea = document.getElementById("subjectArea");

    // Purane subjects clear karo
    subjectArea.innerHTML = "";

    // Course Names
    const courseNames = {
        "btech-cse": "💻 B.Tech CSE",
       
        "bca": "🖥️ BCA",
        "bba": "📊 BBA"
    };

    // Agar course valid nahi hai
    if (!courseNames[course]) {
        semesterArea.innerHTML = `
            <div class="resource-card">
                <h3>Course Not Found</h3>
            </div>
        `;
        return;
    }

    let html = `
        <h2>${courseNames[course]} — Select Semester</h2>

        <div class="resource-grid">
    `;

    // 8 Semesters
    // Semester count
let totalSemesters = 8;

// BCA aur BBA 3-year courses hain
if (course === "bca" || course === "bba") {
    totalSemesters = 6;
}

for (let i = 1; i <= totalSemesters; i++) {

    html += `
        <div class="resource-card">

            <h3>Semester ${i}</h3>

            <p>
                ${courseNames[course]} • Semester ${i}
            </p>

            <button onclick="showSubjects('${course}', ${i})">
                View Subjects
            </button>

        </div>
    `;
}

    html += `
        </div>
    `;

    semesterArea.innerHTML = html;

    semesterArea.scrollIntoView({
        behavior: "smooth"
    });
}


// ===============================
// Show Subjects
// ===============================

function downloadSubjectPDF(subject, course, semester) {

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF();

    const courseName = course.toUpperCase();

    pdf.setFontSize(20);
    pdf.setTextColor(65, 105, 225);

    pdf.text("CollegeBuddy", 20, 20);

    pdf.setFontSize(16);
    pdf.setTextColor(0, 0, 0);

    pdf.text("Study Notes", 20, 35);

    pdf.setFontSize(13);

    pdf.text("Course: " + courseName, 20, 50);
    pdf.text("Semester: " + semester, 20, 60);

    pdf.setFontSize(17);
    pdf.setTextColor(65, 105, 225);

    pdf.text(subject, 20, 80);

    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);

    const notes = [
        "Important Topics",
        "",
        "1. Introduction and basic concepts",
        "2. Important definitions",
        "3. Fundamental concepts",
        "4. Applications",
        "5. Advantages and limitations",
        "6. Important exam questions",
        "",
        "Important Questions",
        "",
        "Q1. What is " + subject + "?",
        "",
        "Q2. Explain the important concepts of " + subject + ".",
        "",
        "Q3. Explain the applications of " + subject + ".",
        "",
        "Q4. Discuss the advantages and limitations of " + subject + ".",
        "",
        "Q5. Explain " + subject + " with suitable examples."
    ];

    let y = 100;

    notes.forEach(function(line) {

        if (y > 270) {
            pdf.addPage();
            y = 20;
        }

        pdf.text(line, 20, y);
        y += 8;

    });

    const fileName =
        subject
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

    pdf.save(fileName + ".pdf");
}


function showSubjects(course, semester) {

    const subjectArea =
        document.getElementById("subjectArea");

    const subjects = {

        "btech-cse": {

            1: [
                "Engineering Mathematics-I",
                "Programming for Problem Solving",
                "Engineering Physics",
                "Engineering Chemistry",
                "Basic Electrical Engineering"
            ],

            2: [
                "Engineering Mathematics-II",
                "Data Structures",
                "Digital Logic Design",
                "Object Oriented Programming",
                "Computer Organization"
            ],

            3: [
                "Discrete Mathematics",
                "Database Management System",
                "Operating System",
                "Computer Networks",
                "Software Engineering"
            ],

            4: [
                "Design and Analysis of Algorithms",
                "Web Technology",
                "Theory of Computation",
                "Microprocessor",
                "Artificial Intelligence"
            ],

            5: [
                "Compiler Design",
                "Machine Learning",
                "Computer Graphics",
                "Cloud Computing",
                "Information Security"
            ],

            6: [
                "Artificial Intelligence",
                "Internet of Things",
                "Big Data",
                "Mobile Application Development",
                "Distributed Systems"
            ],

            7: [
                "Deep Learning",
                "Cyber Security",
                "Data Mining",
                "Blockchain Technology",
                "Project Work"
            ],

            8: [
                "Major Project",
                "Project Seminar",
                "Technical Training",
                "Professional Elective",
                "Open Elective"
            ]
        },

        "bca": {

            1: [
                "Computer Fundamentals",
                "Programming in C",
                "Mathematics",
                "Digital Electronics",
                "Communication Skills"
            ],

            2: [
                "Data Structures",
                "Database Management System",
                "Object Oriented Programming",
                "Computer Organization",
                "Mathematics-II"
            ],

            3: [
                "Operating System",
                "Computer Networks",
                "Web Development",
                "Python Programming",
                "Software Engineering"
            ],

            4: [
                "Java Programming",
                "Advanced Database Management",
                "Computer Graphics",
                "Data Communication",
                "System Analysis and Design"
            ],

            5: [
                "Artificial Intelligence",
                "Machine Learning",
                "Cloud Computing",
                "Cyber Security",
                "Data Analytics"
            ],

            6: [
                "Big Data",
                "Mobile Application Development",
                "Internet of Things",
                "Project Work",
                "Professional Elective"
            ]
        },

        "bba": {

            1: [
                "Principles of Management",
                "Business Economics",
                "Financial Accounting",
                "Business Communication",
                "Business Mathematics"
            ],

            2: [
                "Marketing Management",
                "Human Resource Management",
                "Business Statistics",
                "Organizational Behaviour",
                "Business Environment"
            ],

            3: [
                "Financial Management",
                "Production Management",
                "Business Law",
                "Research Methodology",
                "Management Information System"
            ],

            4: [
                "Consumer Behaviour",
                "Operations Management",
                "Entrepreneurship",
                "Cost Accounting",
                "Business Research"
            ],

            5: [
                "Strategic Management",
                "International Business",
                "Project Management",
                "Investment Management",
                "Business Analytics"
            ],

            6: [
                "Business Ethics",
                "Digital Marketing",
                "Corporate Governance",
                "Entrepreneurship Development",
                "Final Project"
            ]
        }
    };

    const courseSubjects = subjects[course];

    if (!courseSubjects || !courseSubjects[semester]) {

        subjectArea.innerHTML = `
            <div class="resource-card">
                <h3>📚 Subjects Coming Soon</h3>
                <p>Is semester ke subjects abhi add nahi kiye gaye hain.</p>
            </div>
        `;

        return;
    }

    let html = `
        <h2>📚 Semester ${semester} — Subjects</h2>

        <div class="resource-grid">
    `;

courseSubjects[semester].forEach(function(subject) {

    html += `
        <div class="resource-card">

            <h3>📖 ${subject}</h3>

            <p>
                ${course.toUpperCase()} • Semester ${semester}
            </p>

            <button
                onclick="openNote(
                    '${subject.replace(/'/g, "\\'")}',
                    '${course}',
                    ${semester}
                )">

                📖 View Notes

            </button>

            <button
                onclick="downloadSubjectPDF(
                    '${subject.replace(/'/g, "\\'")}',
                    '${course}',
                    ${semester}
                )"
                class="pdf-download-btn">

                📥 Download PDF

            </button>

        </div>
        `;

});

subjectArea.innerHTML = html;

subjectArea.scrollIntoView({
    behavior: "smooth"
});
}

function openNote(subject, course, semester) {

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF();

    const courseName = course.toUpperCase();

    // PDF heading
    pdf.setFontSize(20);
    pdf.setTextColor(65, 105, 225);
    pdf.text("CollegeBuddy", 20, 20);

    pdf.setFontSize(16);
    pdf.setTextColor(0, 0, 0);
    pdf.text("Study Notes", 20, 35);

    pdf.setFontSize(13);
    pdf.text("Course: " + courseName, 20, 50);
    pdf.text("Semester: " + semester, 20, 60);

    pdf.setFontSize(17);
    pdf.setTextColor(65, 105, 225);
    pdf.text(subject, 20, 80);

    // Unit-wise content
    const units = [

        "UNIT 1",
        "Introduction and basic concepts of " + subject,
        "Important definitions and fundamentals.",

        "UNIT 2",
        "Important concepts of " + subject,
        "Detailed explanation of major topics.",

        "UNIT 3",
        "Advanced concepts of " + subject,
        "Important methods, techniques and examples.",

        "UNIT 4",
        "Applications of " + subject,
        "Practical applications and real-world examples.",

        "UNIT 5",
        "Important exam questions",
        "Advantages, limitations and important questions."

    ];

    let y = 100;

    units.forEach(function(line) {

        if (y > 270) {
            pdf.addPage();
            y = 20;
        }

        if (line.startsWith("UNIT")) {
            pdf.setFontSize(16);
            pdf.setTextColor(65, 105, 225);
        } else {
            pdf.setFontSize(12);
            pdf.setTextColor(0, 0, 0);
        }

        pdf.text(line, 20, y);

        y += 10;
    });

    // PDF ko browser me open karo
    const pdfBlob = pdf.output("blob");

    const pdfUrl = URL.createObjectURL(pdfBlob);

    window.open(pdfUrl, "_blank");
}
