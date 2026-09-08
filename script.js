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

            <h2>1. Differential Calculus</h2>

            <p>
                Differential calculus deals with the rate of change
                of a function.
            </p>

            <div class="important">
                <b>Important Formula:</b><br>
                d/dx (xⁿ) = n xⁿ⁻¹
            </div>

            <h2>2. Basic Differentiation</h2>

            <ul>
                <li>d/dx (x) = 1</li>
                <li>d/dx (x²) = 2x</li>
                <li>d/dx (x³) = 3x²</li>
                <li>d/dx (sin x) = cos x</li>
                <li>d/dx (cos x) = -sin x</li>
            </ul>

            <h2>3. Integration</h2>

            <p>
                Integration is the reverse process of differentiation.
            </p>

            <div class="important">
                <b>Formula:</b><br>
                ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C
            </div>

            <h2>📌 Important Questions</h2>

            <ol>
                <li>What is differentiation?</li>
                <li>Explain basic differentiation formulas.</li>
                <li>What is integration?</li>
                <li>Explain the fundamental rules of differentiation.</li>
                <li>Solve basic integration problems.</li>
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

            <h2>1. What is Programming?</h2>

            <p>
                Programming is the process of writing instructions
                that tell a computer how to perform a task.
            </p>

            <h2>2. Algorithm</h2>

            <p>
                An algorithm is a step-by-step procedure used to
                solve a particular problem.
            </p>

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
                <li>int</li>
                <li>float</li>
                <li>char</li>
                <li>double</li>
            </ul>

            <h2>5. If-Else</h2>

            <pre>
if(age >= 18) {
    printf("Eligible");
} else {
    printf("Not Eligible");
}
            </pre>

            <h2>6. Loops</h2>

            <p>
                Loops are used to execute a block of code repeatedly.
            </p>

            <ul>
                <li>for loop</li>
                <li>while loop</li>
                <li>do-while loop</li>
            </ul>

            <h2>7. Functions</h2>

            <p>
                A function is a reusable block of code designed
                to perform a specific task.
            </p>

            <h2>📌 Important Questions</h2>

            <ol>
                <li>What is programming?</li>
                <li>What is an algorithm?</li>
                <li>What are variables?</li>
                <li>Explain data types.</li>
                <li>Explain if-else statements.</li>
                <li>What are loops?</li>
                <li>What is a function?</li>
            </ol>
        `;
    }

    // ===============================
    // Engineering Physics
    // ===============================

    else if (noteName === "Engineering Physics") {

        title = "Engineering Physics";

        content = `
            <h2>🔬 Engineering Physics</h2>

            <h2>1. Introduction</h2>

            <p>
                Engineering physics applies the principles of physics
                to engineering problems and technologies.
            </p>

            <h2>2. Waves</h2>

            <p>
                A wave is a disturbance that transfers energy from
                one place to another.
            </p>

            <h2>3. Properties of Waves</h2>

            <ul>
                <li>Wavelength</li>
                <li>Frequency</li>
                <li>Amplitude</li>
                <li>Velocity</li>
            </ul>

            <div class="important">
                <b>Formula:</b><br>
                v = fλ
            </div>

            <h2>4. Optics</h2>

            <p>
                Optics is the branch of physics that deals with
                the behaviour of light.
            </p>

            <h2>📌 Important Questions</h2>

            <ol>
                <li>What is a wave?</li>
                <li>Define wavelength and frequency.</li>
                <li>Explain amplitude.</li>
                <li>What is optics?</li>
                <li>Explain the wave velocity formula.</li>
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

            <h2>1. Introduction</h2>

            <p>
                Engineering chemistry deals with chemical principles
                and their applications in engineering.
            </p>

            <h2>2. Water Chemistry</h2>

            <p>
                Water chemistry studies the composition, properties
                and treatment of water.
            </p>

            <h2>3. Hardness of Water</h2>

            <p>
                Hardness of water is mainly caused by calcium and
                magnesium salts.
            </p>

            <h2>4. Types of Hardness</h2>

            <ul>
                <li>Temporary hardness</li>
                <li>Permanent hardness</li>
            </ul>

            <h2>📌 Important Questions</h2>

            <ol>
                <li>What is engineering chemistry?</li>
                <li>What is hardness of water?</li>
                <li>Explain temporary hardness.</li>
                <li>Explain permanent hardness.</li>
                <li>How can hard water be treated?</li>
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

            <h2>1. Electric Current</h2>

            <p>
                Electric current is the flow of electric charge
                through a conductor.
            </p>

            <div class="important">
                <b>Formula:</b><br>
                I = Q/t
            </div>

            <h2>2. Voltage</h2>

            <p>
                Voltage is the potential difference between two points.
            </p>

            <h2>3. Resistance</h2>

            <p>
                Resistance opposes the flow of electric current.
            </p>

            <div class="important">
                <b>Ohm's Law:</b><br>
                V = IR
            </div>

            <h2>4. Electrical Power</h2>

            <div class="important">
                <b>Formula:</b><br>
                P = VI
            </div>

            <h2>📌 Important Questions</h2>

            <ol>
                <li>What is electric current?</li>
                <li>What is voltage?</li>
                <li>What is resistance?</li>
                <li>State Ohm's Law.</li>
                <li>What is electrical power?</li>
            </ol>
        `;
    }// ===============================
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

else if (noteName === "Discrete Mathematics") {

    title = "Discrete Mathematics";

    content = `
        <h2>🧮 Discrete Mathematics</h2>

        <h2>1. Sets</h2>

        <p>
            A set is a well-defined collection of distinct objects.
        </p>

        <div class="important">
            <b>Example:</b><br>
            A = {1, 2, 3, 4}
        </div>

        <h2>2. Relations</h2>

        <p>
            A relation describes a connection between elements
            of two sets.
        </p>

        <h2>3. Functions</h2>

        <p>
            A function maps each element of one set to exactly
            one element of another set.
        </p>

        <h2>4. Graph Theory</h2>

        <p>
            A graph consists of vertices and edges and is used
            to represent relationships between objects.
        </p>

        <ul>
            <li>Vertex</li>
            <li>Edge</li>
            <li>Path</li>
            <li>Cycle</li>
        </ul>

        <h2>5. Logic</h2>

        <p>
            Mathematical logic deals with propositions and
            logical reasoning.
        </p>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is a set?</li>
            <li>Explain different types of sets.</li>
            <li>What is a relation?</li>
            <li>What is a function?</li>
            <li>What is graph theory?</li>
            <li>Explain vertices and edges.</li>
            <li>What is mathematical logic?</li>
        </ol>
    `;
}


// ===============================
// Semester 3 - Database Management System
// ===============================

else if (noteName === "Database Management System") {

    title = "Database Management System";

    content = `
        <h2>🗄️ Database Management System</h2>

        <h2>1. Introduction</h2>

        <p>
            A Database Management System (DBMS) is software used
            to create, store, manage and retrieve data efficiently.
        </p>

        <h2>2. Database</h2>

        <p>
            A database is an organized collection of related data.
        </p>

        <h2>3. Types of DBMS</h2>

        <ul>
            <li>Hierarchical DBMS</li>
            <li>Network DBMS</li>
            <li>Relational DBMS</li>
            <li>Object-Oriented DBMS</li>
        </ul>

        <h2>4. SQL</h2>

        <p>
            SQL stands for Structured Query Language.
            It is used to interact with relational databases.
        </p>

        <pre>
SELECT * FROM students;

SELECT name, marks
FROM students
WHERE marks > 60;
        </pre>

        <h2>5. Primary Key</h2>

        <p>
            A primary key uniquely identifies each record
            in a database table.
        </p>

        <h2>6. Normalization</h2>

        <p>
            Normalization is the process of organizing data
            to reduce redundancy and improve data integrity.
        </p>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is DBMS?</li>
            <li>What is a database?</li>
            <li>Explain different types of DBMS.</li>
            <li>What is SQL?</li>
            <li>What is a primary key?</li>
            <li>What is normalization?</li>
            <li>Explain different normal forms.</li>
        </ol>
    `;
}


// ===============================
// Semester 3 - Operating System
// ===============================

else if (noteName === "Operating System") {

    title = "Operating System";

    content = `
        <h2>🖥️ Operating System</h2>

        <h2>1. Introduction</h2>

        <p>
            An Operating System (OS) is system software that
            manages computer hardware and software resources.
        </p>

        <h2>2. Functions of Operating System</h2>

        <ul>
            <li>Process Management</li>
            <li>Memory Management</li>
            <li>File Management</li>
            <li>Device Management</li>
            <li>Security</li>
        </ul>

        <h2>3. Process</h2>

        <p>
            A process is a program that is currently in execution.
        </p>

        <h2>4. Memory Management</h2>

        <p>
            Memory management controls the allocation and
            deallocation of memory to processes.
        </p>

        <h2>5. Deadlock</h2>

        <p>
            Deadlock occurs when processes wait indefinitely
            for resources held by each other.
        </p>

        <div class="important">
            <b>Common Deadlock Conditions:</b><br>
            Mutual Exclusion<br>
            Hold and Wait<br>
            No Preemption<br>
            Circular Wait
        </div>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is an Operating System?</li>
            <li>Explain functions of an OS.</li>
            <li>What is a process?</li>
            <li>Explain process management.</li>
            <li>What is memory management?</li>
            <li>What is deadlock?</li>
            <li>Explain the four conditions of deadlock.</li>
        </ol>
    `;
}


// ===============================
// Semester 3 - Computer Networks
// ===============================

else if (noteName === "Computer Networks") {

    title = "Computer Networks";

    content = `
        <h2>🌐 Computer Networks</h2>

        <h2>1. Introduction</h2>

        <p>
            A computer network is a group of interconnected
            computers that communicate and share resources.
        </p>

        <h2>2. Types of Networks</h2>

        <ul>
            <li>LAN – Local Area Network</li>
            <li>MAN – Metropolitan Area Network</li>
            <li>WAN – Wide Area Network</li>
        </ul>

        <h2>3. Network Topologies</h2>

        <ul>
            <li>Bus</li>
            <li>Star</li>
            <li>Ring</li>
            <li>Mesh</li>
            <li>Tree</li>
        </ul>

        <h2>4. OSI Model</h2>

        <p>
            The OSI model has seven layers used to understand
            network communication.
        </p>

        <ol>
            <li>Physical Layer</li>
            <li>Data Link Layer</li>
            <li>Network Layer</li>
            <li>Transport Layer</li>
            <li>Session Layer</li>
            <li>Presentation Layer</li>
            <li>Application Layer</li>
        </ol>

        <h2>5. IP Address</h2>

        <p>
            An IP address identifies a device on a network.
        </p>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is a computer network?</li>
            <li>Explain LAN, MAN and WAN.</li>
            <li>What is network topology?</li>
            <li>Explain different network topologies.</li>
            <li>What is the OSI model?</li>
            <li>Explain the seven layers of OSI model.</li>
            <li>What is an IP address?</li>
        </ol>
    `;
}


// ===============================
// Semester 3 - Software Engineering
// ===============================

else if (noteName === "Software Engineering") {

    title = "Software Engineering";

    content = `
        <h2>⚙️ Software Engineering</h2>

        <h2>1. Introduction</h2>

        <p>
            Software Engineering is the systematic approach
            to designing, developing, testing and maintaining
            software.
        </p>

        <h2>2. Software Development Life Cycle</h2>

        <p>
            SDLC is a structured process used for developing
            software systems.
        </p>

        <ol>
            <li>Requirement Analysis</li>
            <li>System Design</li>
            <li>Implementation</li>
            <li>Testing</li>
            <li>Deployment</li>
            <li>Maintenance</li>
        </ol>

        <h2>3. Software Models</h2>

        <ul>
            <li>Waterfall Model</li>
            <li>Spiral Model</li>
            <li>Agile Model</li>
            <li>Prototype Model</li>
        </ul>

        <h2>4. Software Testing</h2>

        <p>
            Software testing is the process of finding errors
            and verifying that software works as expected.
        </p>

        <ul>
            <li>Unit Testing</li>
            <li>Integration Testing</li>
            <li>System Testing</li>
            <li>Acceptance Testing</li>
        </ul>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is Software Engineering?</li>
            <li>What is SDLC?</li>
            <li>Explain different phases of SDLC.</li>
            <li>Explain Waterfall Model.</li>
            <li>What is Agile Model?</li>
            <li>What is software testing?</li>
            <li>Explain different types of testing.</li>
        </ol>
    `;
}// ===============================
// Semester 4 - Design and Analysis of Algorithms
// ===============================

else if (noteName === "Design and Analysis of Algorithms") {

    title = "Design and Analysis of Algorithms";

    content = `
        <h2>🧠 Design and Analysis of Algorithms</h2>

        <h2>1. Introduction</h2>

        <p>
            An algorithm is a step-by-step procedure used to solve
            a particular problem efficiently.
        </p>

        <h2>2. Characteristics of an Algorithm</h2>

        <ul>
            <li>Input</li>
            <li>Output</li>
            <li>Definiteness</li>
            <li>Finiteness</li>
            <li>Effectiveness</li>
        </ul>

        <h2>3. Time Complexity</h2>

        <p>
            Time complexity describes the amount of time an algorithm
            takes as the input size increases.
        </p>

        <div class="important">
            <b>Common Complexities:</b><br>
            O(1) — Constant<br>
            O(log n) — Logarithmic<br>
            O(n) — Linear<br>
            O(n²) — Quadratic
        </div>

        <h2>4. Searching Algorithms</h2>

        <ul>
            <li>Linear Search</li>
            <li>Binary Search</li>
        </ul>

        <h2>5. Sorting Algorithms</h2>

        <ul>
            <li>Bubble Sort</li>
            <li>Selection Sort</li>
            <li>Insertion Sort</li>
            <li>Merge Sort</li>
            <li>Quick Sort</li>
        </ul>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is an algorithm?</li>
            <li>Explain characteristics of an algorithm.</li>
            <li>What is time complexity?</li>
            <li>Explain Big-O notation.</li>
            <li>Explain linear and binary search.</li>
            <li>Explain different sorting algorithms.</li>
        </ol>
    `;
}


// ===============================
// Semester 4 - Web Technology
// ===============================

else if (noteName === "Web Technology") {

    title = "Web Technology";

    content = `
        <h2>🌐 Web Technology</h2>

        <h2>1. Introduction</h2>

        <p>
            Web technology includes the tools and technologies used
            to create and develop websites and web applications.
        </p>

        <h2>2. HTML</h2>

        <p>
            HTML stands for HyperText Markup Language.
            It is used to structure web pages.
        </p>

        <pre>
<h1>Hello World</h1>
<p>Welcome to CollegeBuddy</p>
        </pre>

        <h2>3. CSS</h2>

        <p>
            CSS stands for Cascading Style Sheets.
            It is used to design and style web pages.
        </p>

        <h2>4. JavaScript</h2>

        <p>
            JavaScript is a programming language used to add
            interactivity and dynamic behaviour to websites.
        </p>

        <pre>
function hello() {
    alert("Hello CollegeBuddy");
}
        </pre>

        <h2>5. Web Browser</h2>

        <p>
            A web browser is software used to access and display
            websites on the internet.
        </p>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is Web Technology?</li>
            <li>What is HTML?</li>
            <li>What is CSS?</li>
            <li>What is JavaScript?</li>
            <li>Explain the difference between HTML and CSS.</li>
            <li>What is a web browser?</li>
        </ol>
    `;
}


// ===============================
// Semester 4 - Theory of Computation
// ===============================

else if (noteName === "Theory of Computation") {

    title = "Theory of Computation";

    content = `
        <h2>🤖 Theory of Computation</h2>

        <h2>1. Introduction</h2>

        <p>
            Theory of Computation studies mathematical models
            of computation and the problems that can be solved
            by computers.
        </p>

        <h2>2. Automata</h2>

        <p>
            Automata are abstract mathematical machines used
            to recognize patterns and languages.
        </p>

        <h2>3. Finite Automata</h2>

        <ul>
            <li>DFA — Deterministic Finite Automaton</li>
            <li>NFA — Non-Deterministic Finite Automaton</li>
        </ul>

        <h2>4. Regular Languages</h2>

        <p>
            Regular languages can be recognized by finite automata
            and described using regular expressions.
        </p>

        <h2>5. Context Free Grammar</h2>

        <p>
            A context-free grammar is used to describe
            context-free languages.
        </p>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is Theory of Computation?</li>
            <li>What is an automaton?</li>
            <li>What is DFA?</li>
            <li>What is NFA?</li>
            <li>Explain regular languages.</li>
            <li>What is a regular expression?</li>
            <li>What is context-free grammar?</li>
        </ol>
    `;
}


// ===============================
// Semester 4 - Microprocessor
// ===============================

else if (noteName === "Microprocessor") {

    title = "Microprocessor";

    content = `
        <h2>⚙️ Microprocessor</h2>

        <h2>1. Introduction</h2>

        <p>
            A microprocessor is a programmable electronic device
            that performs arithmetic, logical and control operations.
        </p>

        <h2>2. Basic Components</h2>

        <ul>
            <li>ALU</li>
            <li>Control Unit</li>
            <li>Registers</li>
            <li>Bus System</li>
        </ul>

        <h2>3. Registers</h2>

        <p>
            Registers are small, high-speed storage locations
            inside the processor.
        </p>

        <ul>
            <li>Accumulator</li>
            <li>Program Counter</li>
            <li>Stack Pointer</li>
            <li>Instruction Register</li>
        </ul>

        <h2>4. Instruction</h2>

        <p>
            An instruction is a command that tells the processor
            to perform a particular operation.
        </p>

        <h2>5. Microprocessor Applications</h2>

        <ul>
            <li>Computers</li>
            <li>Embedded Systems</li>
            <li>Industrial Control</li>
            <li>Consumer Electronics</li>
        </ul>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is a microprocessor?</li>
            <li>Explain the basic components of a processor.</li>
            <li>What are registers?</li>
            <li>Explain accumulator and program counter.</li>
            <li>What is an instruction?</li>
            <li>Explain applications of microprocessors.</li>
        </ol>
    `;
}


// ===============================
// Semester 4 - Artificial Intelligence
// ===============================

else if (noteName === "Artificial Intelligence") {

    title = "Artificial Intelligence";

    content = `
        <h2>🤖 Artificial Intelligence</h2>

        <h2>1. Introduction</h2>

        <p>
            Artificial Intelligence (AI) is a branch of computer
            science that focuses on creating systems capable of
            performing tasks that normally require human intelligence.
        </p>

        <h2>2. Applications of AI</h2>

        <ul>
            <li>Chatbots</li>
            <li>Voice Assistants</li>
            <li>Recommendation Systems</li>
            <li>Self-driving Technology</li>
            <li>Medical Diagnosis Systems</li>
        </ul>

        <h2>3. Machine Learning</h2>

        <p>
            Machine Learning is a branch of AI in which computers
            learn patterns from data and improve their performance.
        </p>

        <h2>4. Types of Machine Learning</h2>

        <ul>
            <li>Supervised Learning</li>
            <li>Unsupervised Learning</li>
            <li>Reinforcement Learning</li>
        </ul>

        <h2>5. Knowledge Representation</h2>

        <p>
            Knowledge representation is the process of storing
            information in a form that an AI system can use
            for reasoning and decision making.
        </p>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is Artificial Intelligence?</li>
            <li>Explain applications of AI.</li>
            <li>What is Machine Learning?</li>
            <li>Explain supervised learning.</li>
            <li>Explain unsupervised learning.</li>
            <li>What is reinforcement learning?</li>
            <li>What is knowledge representation?</li>
        </ol>
    `;
}// ===============================
// Semester 5 - Compiler Design
// ===============================

else if (noteName === "Compiler Design") {

    title = "Compiler Design";

    content = `
        <h2>🖥️ Compiler Design</h2>

        <h2>1. Introduction</h2>

        <p>
            A compiler is a system software that translates
            source code written in a programming language into
            machine code or another target language.
        </p>

        <h2>2. Phases of Compiler</h2>

        <ol>
            <li>Lexical Analysis</li>
            <li>Syntax Analysis</li>
            <li>Semantic Analysis</li>
            <li>Intermediate Code Generation</li>
            <li>Code Optimization</li>
            <li>Code Generation</li>
        </ol>

        <h2>3. Lexical Analysis</h2>

        <p>
            Lexical analysis converts the source program into
            tokens such as keywords, identifiers and operators.
        </p>

        <h2>4. Syntax Analysis</h2>

        <p>
            Syntax analysis checks whether the tokens follow
            the grammar rules of the programming language.
        </p>

        <h2>5. Code Optimization</h2>

        <p>
            Code optimization improves the efficiency of generated
            code by reducing execution time or memory usage.
        </p>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is a compiler?</li>
            <li>Explain the phases of a compiler.</li>
            <li>What is lexical analysis?</li>
            <li>What is syntax analysis?</li>
            <li>What is semantic analysis?</li>
            <li>What is code optimization?</li>
        </ol>
    `;
}


// ===============================
// Semester 5 - Machine Learning
// ===============================

else if (noteName === "Machine Learning") {

    title = "Machine Learning";

    content = `
        <h2>🤖 Machine Learning</h2>

        <h2>1. Introduction</h2>

        <p>
            Machine Learning is a branch of Artificial Intelligence
            that allows computers to learn patterns from data and
            make predictions or decisions.
        </p>

        <h2>2. Types of Machine Learning</h2>

        <ul>
            <li>Supervised Learning</li>
            <li>Unsupervised Learning</li>
            <li>Reinforcement Learning</li>
        </ul>

        <h2>3. Supervised Learning</h2>

        <p>
            In supervised learning, the model learns from labelled
            training data.
        </p>

        <div class="important">
            <b>Examples:</b><br>
            Classification<br>
            Regression
        </div>

        <h2>4. Unsupervised Learning</h2>

        <p>
            Unsupervised learning finds patterns or structures
            in data without labelled output.
        </p>

        <div class="important">
            <b>Example:</b><br>
            Clustering
        </div>

        <h2>5. Training and Testing</h2>

        <p>
            Training data is used to learn the model, while
            testing data is used to evaluate its performance.
        </p>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is Machine Learning?</li>
            <li>Explain different types of Machine Learning.</li>
            <li>What is supervised learning?</li>
            <li>What is unsupervised learning?</li>
            <li>What is reinforcement learning?</li>
            <li>What is training data?</li>
            <li>What is testing data?</li>
        </ol>
    `;
}


// ===============================
// Semester 5 - Computer Graphics
// ===============================

else if (noteName === "Computer Graphics") {

    title = "Computer Graphics";

    content = `
        <h2>🎨 Computer Graphics</h2>

        <h2>1. Introduction</h2>

        <p>
            Computer Graphics is the field of computer science
            concerned with creating, manipulating and displaying
            images using computers.
        </p>

        <h2>2. Applications</h2>

        <ul>
            <li>Games</li>
            <li>Animation</li>
            <li>CAD</li>
            <li>Movies</li>
            <li>Virtual Reality</li>
            <li>Data Visualization</li>
        </ul>

        <h2>3. Computer Graphics Primitives</h2>

        <ul>
            <li>Point</li>
            <li>Line</li>
            <li>Circle</li>
            <li>Polygon</li>
        </ul>

        <h2>4. Transformations</h2>

        <p>
            Geometric transformations are used to change the
            position, size or orientation of objects.
        </p>

        <ul>
            <li>Translation</li>
            <li>Rotation</li>
            <li>Scaling</li>
            <li>Reflection</li>
        </ul>

        <h2>5. Clipping</h2>

        <p>
            Clipping is the process of removing portions of
            objects that lie outside the viewing area.
        </p>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is Computer Graphics?</li>
            <li>Explain applications of computer graphics.</li>
            <li>What are graphics primitives?</li>
            <li>What is translation?</li>
            <li>What is rotation?</li>
            <li>What is scaling?</li>
            <li>What is clipping?</li>
        </ol>
    `;
}


// ===============================
// Semester 5 - Cloud Computing
// ===============================

else if (noteName === "Cloud Computing") {

    title = "Cloud Computing";

    content = `
        <h2>☁️ Cloud Computing</h2>

        <h2>1. Introduction</h2>

        <p>
            Cloud Computing provides computing resources such as
            servers, storage and applications over the internet.
        </p>

        <h2>2. Cloud Service Models</h2>

        <ul>
            <li>IaaS – Infrastructure as a Service</li>
            <li>PaaS – Platform as a Service</li>
            <li>SaaS – Software as a Service</li>
        </ul>

        <h2>3. IaaS</h2>

        <p>
            Infrastructure as a Service provides virtualized
            computing infrastructure such as servers and storage.
        </p>

        <h2>4. PaaS</h2>

        <p>
            Platform as a Service provides a platform and tools
            for developing and deploying applications.
        </p>

        <h2>5. SaaS</h2>

        <p>
            Software as a Service provides software applications
            to users through the internet.
        </p>

        <h2>6. Cloud Deployment Models</h2>

        <ul>
            <li>Public Cloud</li>
            <li>Private Cloud</li>
            <li>Hybrid Cloud</li>
            <li>Community Cloud</li>
        </ul>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is Cloud Computing?</li>
            <li>Explain IaaS, PaaS and SaaS.</li>
            <li>What is a public cloud?</li>
            <li>What is a private cloud?</li>
            <li>What is a hybrid cloud?</li>
            <li>Explain cloud deployment models.</li>
        </ol>
    `;
}


// ===============================
// Semester 5 - Information Security
// ===============================

else if (noteName === "Information Security") {

    title = "Information Security";

    content = `
        <h2>🔐 Information Security</h2>

        <h2>1. Introduction</h2>

        <p>
            Information Security protects information and computer
            systems from unauthorized access, modification,
            disclosure and destruction.
        </p>

        <h2>2. CIA Triad</h2>

        <div class="important">
            <b>CIA Triad:</b><br>
            Confidentiality<br>
            Integrity<br>
            Availability
        </div>

        <h2>3. Confidentiality</h2>

        <p>
            Confidentiality ensures that information is accessible
            only to authorized users.
        </p>

        <h2>4. Integrity</h2>

        <p>
            Integrity ensures that information remains accurate
            and is not modified without authorization.
        </p>

        <h2>5. Availability</h2>

        <p>
            Availability ensures that authorized users can access
            information and services when required.
        </p>

        <h2>6. Common Security Threats</h2>

        <ul>
            <li>Malware</li>
            <li>Phishing</li>
            <li>Password Attacks</li>
            <li>Unauthorized Access</li>
            <li>Social Engineering</li>
        </ul>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is Information Security?</li>
            <li>What is the CIA Triad?</li>
            <li>Explain confidentiality.</li>
            <li>Explain integrity.</li>
            <li>Explain availability.</li>
            <li>What is phishing?</li>
            <li>What is malware?</li>
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

                .qa-item {
                    background: white;
                    padding: 14px;
                    margin: 12px 0;
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

                <button onclick="downloadPDF()" class="pdf-button">
                    📥 Download PDF
                </button>


                <div class="filters">

                    <select id="courseSelect" onchange="filterQuestions()">

                        <option value="all">
                            All Courses
                        </option>

                        <option value="btech-cse">
                            B.Tech CSE
                        </option>

                        <option value="btech-maths">
                            B.Tech Mathematics
                        </option>

                        <option value="bca">
                            BCA
                        </option>

                        <option value="bba">
                            BBA
                        </option>

                    </select>


                    <select id="semesterSelect" onchange="filterQuestions()">

                        <option value="all">
                            All Semesters
                        </option>

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

                        <option value="all">
                            All Levels
                        </option>

                        <option value="basic">
                            🟢 Basic
                        </option>

                        <option value="intermediate">
                            🟡 Intermediate
                        </option>

                        <option value="advanced">
                            🔴 Advanced
                        </option>

                    </select>

                </div>


                <!-- B.TECH CSE -->

                <div class="semester"
                     data-course="btech-cse"
                     data-semester="1">

                    <h2>💻 B.Tech CSE — Semester 1</h2>

                    <h3>Programming Fundamentals</h3>


                    <div class="level"
                         data-level="basic">

                        <h3>🟢 Basic</h3>

                        <div class="qa-item">

                            <strong>Q. What is programming?</strong>

                            <div class="answer">

                                <strong>Answer:</strong>
                                Programming is the process of writing instructions
                                that tell a computer what to do.

                            </div>

                        </div>


                        <div class="qa-item">

                            <strong>Q. What is an algorithm?</strong>

                            <div class="answer">

                                <strong>Answer:</strong>
                                An algorithm is a step-by-step procedure
                                used to solve a problem.

                            </div>

                        </div>

                    </div>


                    <div class="level"
                         data-level="intermediate">

                        <h3>🟡 Intermediate</h3>

                        <div class="qa-item">

                            <strong>
                                Q. Explain if-else statements.
                            </strong>

                            <div class="answer">

                                <strong>Answer:</strong>
                                An if-else statement executes different
                                blocks of code depending on a condition.

                            </div>

                        </div>

                    </div>


                    <div class="level"
                         data-level="advanced">

                        <h3>🔴 Advanced</h3>

                        <div class="qa-item">

                            <strong>
                                Q. Explain pointers in C.
                            </strong>

                            <div class="answer">

                                <strong>Answer:</strong>
                                A pointer is a variable that stores
                                the memory address of another variable.

                            </div>

                        </div>

                    </div>

                </div>


                <!-- B.TECH MATHEMATICS -->

                <div class="semester"
                     data-course="btech-maths"
                     data-semester="1">

                    <h2>🧮 B.Tech Mathematics — Semester 1</h2>

                    <h3>Engineering Mathematics I</h3>


                    <div class="level"
                         data-level="basic">

                        <h3>🟢 Basic</h3>

                        <div class="qa-item">

                            <strong>
                                Q. What is a matrix?
                            </strong>

                            <div class="answer">

                                <strong>Answer:</strong>
                                A matrix is a rectangular arrangement
                                of numbers in rows and columns.

                            </div>

                        </div>

                    </div>


                    <div class="level"
                         data-level="intermediate">

                        <h3>🟡 Intermediate</h3>

                        <div class="qa-item">

                            <strong>
                                Q. Explain determinants.
                            </strong>

                            <div class="answer">

                                <strong>Answer:</strong>
                                A determinant is a scalar value calculated
                                from a square matrix.

                            </div>

                        </div>

                    </div>


                    <div class="level"
                         data-level="advanced">

                        <h3>🔴 Advanced</h3>

                        <div class="qa-item">

                            <strong>
                                Q. Explain eigenvalues and eigenvectors.
                            </strong>

                            <div class="answer">

                                <strong>Answer:</strong>
                                Eigenvalues and eigenvectors are important
                                concepts used in matrix transformations
                                and linear algebra.

                            </div>

                        </div>

                    </div>

                </div>


                <!-- BCA -->

                <div class="semester"
                     data-course="bca"
                     data-semester="1">

                    <h2>💻 BCA — Semester 1</h2>

                    <h3>Computer Fundamentals</h3>


                    <div class="level"
                         data-level="basic">

                        <h3>🟢 Basic</h3>

                        <div class="qa-item">

                            <strong>
                                Q. What is a computer?
                            </strong>

                            <div class="answer">

                                <strong>Answer:</strong>
                                A computer is an electronic device
                                that processes data and produces information.

                            </div>

                        </div>

                    </div>


                    <div class="level"
                         data-level="intermediate">

                        <h3>🟡 Intermediate</h3>

                        <div class="qa-item">

                            <strong>
                                Q. Explain hardware and software.
                            </strong>

                            <div class="answer">

                                <strong>Answer:</strong>
                                Hardware refers to physical computer parts,
                                while software consists of programs and instructions.

                            </div>

                        </div>

                    </div>


                    <div class="level"
                         data-level="advanced">

                        <h3>🔴 Advanced</h3>

                        <div class="qa-item">

                            <strong>
                                Q. Explain the functions of an operating system.
                            </strong>

                            <div class="answer">

                                <strong>Answer:</strong>
                                An operating system manages memory,
                                processes, files, devices and system resources.

                            </div>

                        </div>

                    </div>

                </div>


                <!-- BBA -->

                <div class="semester"
                     data-course="bba"
                     data-semester="1">

                    <h2>📊 BBA — Semester 1</h2>

                    <h3>Principles of Management</h3>


                    <div class="level"
                         data-level="basic">

                        <h3>🟢 Basic</h3>

                        <div class="qa-item">

                            <strong>
                                Q. What is management?
                            </strong>

                            <div class="answer">

                                <strong>Answer:</strong>
                                Management is the process of planning,
                                organizing, directing and controlling resources
                                to achieve organizational goals.

                            </div>

                        </div>

                    </div>


                    <div class="level"
                         data-level="intermediate">

                        <h3>🟡 Intermediate</h3>

                        <div class="qa-item">

                            <strong>
                                Q. Explain the functions of management.
                            </strong>

                            <div class="answer">

                                <strong>Answer:</strong>
                                The main functions are planning,
                                organizing, staffing, directing and controlling.

                            </div>

                        </div>

                    </div>


                    <div class="level"
                         data-level="advanced">

                        <h3>🔴 Advanced</h3>

                        <div class="qa-item">

                            <strong>
                                Q. Explain different leadership styles.
                            </strong>

                            <div class="answer">

                                <strong>Answer:</strong>
                                Common leadership styles include
                                autocratic, democratic and laissez-faire leadership.

                            </div>

                        </div>

                    </div>

                </div>


            </div>


            <script>

                function filterQuestions() {

                    const course =
                        document.getElementById("courseSelect").value;

                    const semester =
                        document.getElementById("semesterSelect").value;

                    const level =
                        document.getElementById("levelSelect").value;


                    const cards =
                        document.querySelectorAll(".semester");


                    cards.forEach(function(card) {

                        const cardCourse =
                            card.dataset.course;

                        const cardSemester =
                            card.dataset.semester;


                        const courseMatch =
                            course === "all" ||
                            cardCourse === course;

                        const semesterMatch =
                            semester === "all" ||
                            cardSemester === semester;


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


                        if (courseMatch &&
                            semesterMatch &&
                            visibleLevel) {

                            card.style.display = "block";

                        } else {

                            card.style.display = "none";

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

}// ===============================
// Course Semester System
// ===============================

function showSemesters(course) {

    const semesterArea = document.getElementById("semesterArea");
    const subjectArea = document.getElementById("subjectArea");

    subjectArea.innerHTML = "";

    const courseNames = {
        "btech-cse": "💻 B.Tech CSE",
        "bca": "🖥️ BCA",
        "bba": "📊 BBA"
    };

    let html = `
        <h2>${courseNames[course]} — Select Semester</h2>

        <div class="resource-grid">
    `;

    for (let i = 1; i <= 8; i++) {

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

    html += `</div>`;

    semesterArea.innerHTML = html;

    semesterArea.scrollIntoView({
        behavior: "smooth"
    });
}// ===============================
// Show Subjects
// ===============================

function showSubjects(course, semester) {

    const subjectArea = document.getElementById("subjectArea");

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
            ]

        }

    };

    const courseSubjects = subjects[course];

    if (!courseSubjects || !courseSubjects[semester]) {

        subjectArea.innerHTML = `
            <div class="resource-card">
                <h3>📚 Subjects Coming Soon</h3>
                <p>
                    Is semester ke subjects abhi add nahi kiye gaye hain.
                </p>
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

                <button onclick="openNote('${subject}')">
                    Open Notes
                </button>

            </div>
        `;

    });

    html += `
        </div>
    `;

    subjectArea.innerHTML = html;

    subjectArea.scrollIntoView({
        behavior: "smooth"
    });
}