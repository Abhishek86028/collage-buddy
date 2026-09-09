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
}// ===============================
// Semester 6 - Artificial Intelligence
// ===============================

else if (noteName === "Artificial Intelligence - Semester 6") {

    title = "Artificial Intelligence - Semester 6";

    content = `
        <h2>🤖 Artificial Intelligence</h2>

        <h2>1. Introduction to Artificial Intelligence</h2>

        <p>
            Artificial Intelligence (AI) is a branch of computer science
            that develops systems capable of performing tasks that normally
            require human intelligence.
        </p>

        <h2>2. Intelligent Agents</h2>

        <p>
            An intelligent agent is a system that perceives its environment
            through sensors and takes actions using actuators to achieve
            a particular goal.
        </p>

        <ul>
            <li>Simple Reflex Agent</li>
            <li>Model-Based Agent</li>
            <li>Goal-Based Agent</li>
            <li>Utility-Based Agent</li>
            <li>Learning Agent</li>
        </ul>

        <h2>3. Problem Solving in AI</h2>

        <p>
            AI uses search techniques to find solutions to problems.
            The problem is represented using states, actions and goals.
        </p>

        <h2>4. Search Algorithms</h2>

        <ul>
            <li>Breadth First Search (BFS)</li>
            <li>Depth First Search (DFS)</li>
            <li>Uniform Cost Search</li>
            <li>Greedy Best First Search</li>
            <li>A* Search</li>
        </ul>

        <div class="important">
            <b>A* Search:</b><br>
            f(n) = g(n) + h(n)<br><br>
            g(n) = Cost from starting node<br>
            h(n) = Estimated cost to goal
        </div>

        <h2>5. Knowledge Representation</h2>

        <p>
            Knowledge representation is the process of representing
            information in a form that an AI system can understand
            and use for reasoning.
        </p>

        <ul>
            <li>Logic</li>
            <li>Semantic Networks</li>
            <li>Frames</li>
            <li>Production Rules</li>
        </ul>

        <h2>6. Machine Learning</h2>

        <p>
            Machine Learning is a subfield of AI in which computers
            learn patterns from data and use those patterns to make
            predictions or decisions.
        </p>

        <ul>
            <li>Supervised Learning</li>
            <li>Unsupervised Learning</li>
            <li>Reinforcement Learning</li>
        </ul>

        <h2>7. Applications of AI</h2>

        <ul>
            <li>Chatbots</li>
            <li>Voice Assistants</li>
            <li>Recommendation Systems</li>
            <li>Computer Vision</li>
            <li>Natural Language Processing</li>
            <li>Robotics</li>
            <li>Medical Diagnosis</li>
        </ul>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is Artificial Intelligence?</li>
            <li>What is an intelligent agent?</li>
            <li>Explain different types of intelligent agents.</li>
            <li>What is problem solving in AI?</li>
            <li>Explain BFS and DFS.</li>
            <li>What is A* search algorithm?</li>
            <li>Explain knowledge representation.</li>
            <li>What is Machine Learning?</li>
            <li>Explain supervised and unsupervised learning.</li>
            <li>Explain applications of Artificial Intelligence.</li>
        </ol>
    `;
}// ===============================
// Semester 6 - Internet of Things
// ===============================

else if (noteName === "Internet of Things") {

    title = "Internet of Things";

    content = `
        <h2>🌐 Internet of Things (IoT)</h2>

        <h2>1. Introduction to IoT</h2>

        <p>
            Internet of Things (IoT) is a technology in which
            physical devices are connected to the internet
            so that they can collect, exchange and process data.
        </p>

        <h2>2. Components of IoT</h2>

        <ul>
            <li>Sensors</li>
            <li>Actuators</li>
            <li>Processing Unit</li>
            <li>Communication Network</li>
            <li>Cloud Platform</li>
            <li>User Application</li>
        </ul>

        <h2>3. Sensors</h2>

        <p>
            Sensors collect information from the physical environment.
            Examples include temperature, humidity, motion and light sensors.
        </p>

        <h2>4. Actuators</h2>

        <p>
            Actuators perform actions based on commands received
            from the IoT system.
        </p>

        <h2>5. IoT Architecture</h2>

        <ol>
            <li>Perception Layer</li>
            <li>Network Layer</li>
            <li>Processing Layer</li>
            <li>Application Layer</li>
        </ol>

        <h2>6. IoT Communication Technologies</h2>

        <ul>
            <li>Wi-Fi</li>
            <li>Bluetooth</li>
            <li>Zigbee</li>
            <li>RFID</li>
            <li>LoRaWAN</li>
            <li>Cellular Networks</li>
        </ul>

        <h2>7. Applications of IoT</h2>

        <ul>
            <li>Smart Home</li>
            <li>Smart Agriculture</li>
            <li>Smart City</li>
            <li>Healthcare</li>
            <li>Industrial IoT</li>
            <li>Smart Transportation</li>
        </ul>

        <h2>8. IoT Security</h2>

        <p>
            IoT security protects connected devices, networks and
            data from unauthorized access and cyber attacks.
        </p>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is Internet of Things?</li>
            <li>Explain the components of IoT.</li>
            <li>What is a sensor?</li>
            <li>What is an actuator?</li>
            <li>Explain IoT architecture.</li>
            <li>Explain different IoT communication technologies.</li>
            <li>What are the applications of IoT?</li>
            <li>Explain IoT security.</li>
        </ol>
    `;
}// ===============================
// Semester 6 - Big Data
// ===============================

else if (noteName === "Big Data") {

    title = "Big Data";

    content = `
        <h2>📊 Big Data</h2>

        <h2>1. Introduction to Big Data</h2>

        <p>
            Big Data refers to extremely large and complex datasets
            that cannot be efficiently processed using traditional
            data processing techniques.
        </p>

        <h2>2. Characteristics of Big Data</h2>

        <div class="important">
            <b>5 V's of Big Data:</b><br><br>
            Volume – Amount of data<br>
            Velocity – Speed of data generation<br>
            Variety – Different types of data<br>
            Veracity – Accuracy and reliability of data<br>
            Value – Useful information obtained from data
        </div>

        <h2>3. Types of Big Data</h2>

        <ul>
            <li>Structured Data</li>
            <li>Semi-Structured Data</li>
            <li>Unstructured Data</li>
        </ul>

        <h2>4. Hadoop</h2>

        <p>
            Apache Hadoop is a framework used for distributed storage
            and processing of large datasets across clusters of computers.
        </p>

        <h2>5. HDFS</h2>

        <p>
            Hadoop Distributed File System (HDFS) is used to store
            large amounts of data across multiple machines.
        </p>

        <h2>6. MapReduce</h2>

        <p>
            MapReduce is a programming model used to process large
            datasets in parallel across distributed systems.
        </p>

        <div class="important">
            <b>Map Phase:</b><br>
            Processes input data and produces intermediate key-value pairs.
            <br><br>

            <b>Reduce Phase:</b><br>
            Combines and processes the intermediate results.
        </div>

        <h2>7. Applications of Big Data</h2>

        <ul>
            <li>Banking</li>
            <li>Healthcare</li>
            <li>E-Commerce</li>
            <li>Social Media</li>
            <li>Education</li>
            <li>Business Analytics</li>
        </ul>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is Big Data?</li>
            <li>Explain the 5 V's of Big Data.</li>
            <li>Explain structured and unstructured data.</li>
            <li>What is Hadoop?</li>
            <li>What is HDFS?</li>
            <li>What is MapReduce?</li>
            <li>Explain Map and Reduce phases.</li>
            <li>Explain applications of Big Data.</li>
        </ol>
    `;
}// ===============================
// Semester 6 - Mobile Application Development
// ===============================

else if (noteName === "Mobile Application Development") {

    title = "Mobile Application Development";

    content = `
        <h2>📱 Mobile Application Development</h2>

        <h2>1. Introduction</h2>

        <p>
            Mobile Application Development is the process of
            designing, developing, testing and deploying applications
            for mobile devices such as smartphones and tablets.
        </p>

        <h2>2. Mobile Operating Systems</h2>

        <ul>
            <li>Android</li>
            <li>iOS</li>
        </ul>

        <h2>3. Types of Mobile Applications</h2>

        <ul>
            <li>Native Applications</li>
            <li>Web Applications</li>
            <li>Hybrid Applications</li>
        </ul>

        <h2>4. Android Application Components</h2>

        <ul>
            <li>Activity</li>
            <li>Service</li>
            <li>Broadcast Receiver</li>
            <li>Content Provider</li>
        </ul>

        <h2>5. User Interface</h2>

        <p>
            User Interface (UI) contains the visual elements through
            which users interact with a mobile application.
        </p>

        <ul>
            <li>Buttons</li>
            <li>Text Fields</li>
            <li>Images</li>
            <li>Menus</li>
            <li>Lists</li>
        </ul>

        <h2>6. Mobile App Development Process</h2>

        <ol>
            <li>Requirement Analysis</li>
            <li>UI/UX Design</li>
            <li>Development</li>
            <li>Testing</li>
            <li>Deployment</li>
            <li>Maintenance</li>
        </ol>

        <h2>7. Mobile Application Testing</h2>

        <p>
            Testing ensures that a mobile application works correctly
            on different devices, screen sizes and operating systems.
        </p>

        <h2>8. Mobile App Security</h2>

        <p>
            Mobile application security protects user data,
            authentication information and application resources.
        </p>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is Mobile Application Development?</li>
            <li>Explain different types of mobile applications.</li>
            <li>What are Android application components?</li>
            <li>What is an Activity?</li>
            <li>What is a Service?</li>
            <li>Explain the mobile app development process.</li>
            <li>What is mobile application testing?</li>
            <li>Explain mobile application security.</li>
        </ol>
    `;
}// ===============================
// Semester 6 - Distributed Systems
// ===============================

else if (noteName === "Distributed Systems") {

    title = "Distributed Systems";

    content = `
        <h2>🖥️ Distributed Systems</h2>

        <h2>1. Introduction</h2>

        <p>
            A distributed system is a collection of independent
            computers that work together and appear to users
            as a single system.
        </p>

        <h2>2. Characteristics of Distributed Systems</h2>

        <ul>
            <li>Resource Sharing</li>
            <li>Concurrency</li>
            <li>Scalability</li>
            <li>Fault Tolerance</li>
            <li>Transparency</li>
        </ul>

        <h2>3. Advantages of Distributed Systems</h2>

        <ul>
            <li>Better resource utilization</li>
            <li>Improved reliability</li>
            <li>Easy scalability</li>
            <li>High performance</li>
        </ul>

        <h2>4. Communication</h2>

        <p>
            Distributed systems use communication networks to
            exchange messages between different computers.
        </p>

        <h2>5. Client-Server Model</h2>

        <p>
            In the client-server model, clients request services
            and servers provide those services.
        </p>

        <h2>6. Distributed Database</h2>

        <p>
            A distributed database stores data across multiple
            locations connected through a network.
        </p>

        <h2>7. Fault Tolerance</h2>

        <p>
            Fault tolerance is the ability of a system to continue
            operating even when some components fail.
        </p>

        <h2>8. Applications of Distributed Systems</h2>

        <ul>
            <li>Cloud Computing</li>
            <li>Online Banking</li>
            <li>E-Commerce</li>
            <li>Distributed Databases</li>
            <li>Content Delivery Networks</li>
            <li>Large-scale Web Applications</li>
        </ul>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is a distributed system?</li>
            <li>Explain the characteristics of distributed systems.</li>
            <li>What are the advantages of distributed systems?</li>
            <li>Explain communication in distributed systems.</li>
            <li>What is the client-server model?</li>
            <li>What is a distributed database?</li>
            <li>What is fault tolerance?</li>
            <li>Explain applications of distributed systems.</li>
        </ol>
    `;
}// ===============================
// Semester 7 - Deep Learning
// ===============================

else if (noteName === "Deep Learning") {

    title = "Deep Learning";

    content = `
        <h2>🧠 Deep Learning</h2>

        <h2>1. Introduction to Deep Learning</h2>

        <p>
            Deep Learning is a branch of Machine Learning that uses
            artificial neural networks with multiple layers to learn
            complex patterns from large amounts of data.
        </p>

        <h2>2. Artificial Neural Network</h2>

        <p>
            An Artificial Neural Network (ANN) is a computational model
            inspired by the structure of the human brain.
        </p>

        <ul>
            <li>Input Layer</li>
            <li>Hidden Layer</li>
            <li>Output Layer</li>
        </ul>

        <h2>3. Neurons</h2>

        <p>
            A neuron receives input values, applies weights and bias,
            and produces an output using an activation function.
        </p>

        <div class="important">
            <b>Basic Neuron:</b><br><br>
            Output = Activation Function (Σ(weight × input) + bias)
        </div>

        <h2>4. Activation Functions</h2>

        <ul>
            <li>Sigmoid</li>
            <li>ReLU</li>
            <li>Tanh</li>
            <li>Softmax</li>
        </ul>

        <h2>5. Deep Neural Networks</h2>

        <p>
            A Deep Neural Network (DNN) contains multiple hidden layers
            between the input and output layers.
        </p>

        <h2>6. Convolutional Neural Network</h2>

        <p>
            Convolutional Neural Networks (CNNs) are mainly used for
            image processing and computer vision tasks.
        </p>

        <ul>
            <li>Convolution Layer</li>
            <li>Pooling Layer</li>
            <li>Fully Connected Layer</li>
        </ul>

        <h2>7. Recurrent Neural Network</h2>

        <p>
            Recurrent Neural Networks (RNNs) are designed to process
            sequential data such as text, speech and time-series data.
        </p>

        <h2>8. Applications of Deep Learning</h2>

        <ul>
            <li>Image Recognition</li>
            <li>Speech Recognition</li>
            <li>Natural Language Processing</li>
            <li>Self-Driving Vehicles</li>
            <li>Medical Image Analysis</li>
            <li>Recommendation Systems</li>
        </ul>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is Deep Learning?</li>
            <li>Explain Artificial Neural Networks.</li>
            <li>What is a neuron?</li>
            <li>Explain different activation functions.</li>
            <li>What is a Deep Neural Network?</li>
            <li>Explain Convolutional Neural Networks.</li>
            <li>What is an RNN?</li>
            <li>Explain applications of Deep Learning.</li>
        </ol>
    `;
}// ===============================
// Semester 7 - Cyber Security
// ===============================

else if (noteName === "Cyber Security") {

    title = "Cyber Security";

    content = `
        <h2>🔐 Cyber Security</h2>

        <h2>1. Introduction to Cyber Security</h2>

        <p>
            Cyber Security is the practice of protecting computers,
            networks, applications and data from unauthorized access,
            attacks and damage.
        </p>

        <h2>2. Goals of Cyber Security</h2>

        <div class="important">
            <b>CIA Triad:</b><br><br>
            Confidentiality – Protecting information from unauthorized access.<br>
            Integrity – Maintaining accuracy and correctness of data.<br>
            Availability – Ensuring systems and data are available when required.
        </div>

        <h2>3. Types of Cyber Attacks</h2>

        <ul>
            <li>Phishing</li>
            <li>Malware</li>
            <li>Ransomware</li>
            <li>Denial of Service (DoS)</li>
            <li>Man-in-the-Middle Attack</li>
            <li>Password Attacks</li>
            <li>SQL Injection</li>
        </ul>

        <h2>4. Malware</h2>

        <p>
            Malware is malicious software designed to damage systems,
            steal information or gain unauthorized access.
        </p>

        <ul>
            <li>Virus</li>
            <li>Worm</li>
            <li>Trojan Horse</li>
            <li>Spyware</li>
            <li>Ransomware</li>
        </ul>

        <h2>5. Cryptography</h2>

        <p>
            Cryptography is the technique of securing information by
            converting readable data into a protected form.
        </p>

        <ul>
            <li>Symmetric Key Cryptography</li>
            <li>Asymmetric Key Cryptography</li>
            <li>Hashing</li>
        </ul>

        <h2>6. Authentication</h2>

        <p>
            Authentication is the process of verifying the identity
            of a user or system.
        </p>

        <ul>
            <li>Password Authentication</li>
            <li>Biometric Authentication</li>
            <li>Two-Factor Authentication</li>
            <li>Multi-Factor Authentication</li>
        </ul>

        <h2>7. Network Security</h2>

        <p>
            Network security protects computer networks from
            unauthorized access, misuse and cyber attacks.
        </p>

        <ul>
            <li>Firewall</li>
            <li>VPN</li>
            <li>Intrusion Detection System</li>
            <li>Intrusion Prevention System</li>
        </ul>

        <h2>8. Cyber Security Best Practices</h2>

        <ul>
            <li>Use strong passwords</li>
            <li>Enable two-factor authentication</li>
            <li>Keep software updated</li>
            <li>Use trusted networks</li>
            <li>Take regular backups</li>
            <li>Avoid suspicious links and attachments</li>
        </ul>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is Cyber Security?</li>
            <li>Explain the CIA Triad.</li>
            <li>What are different types of cyber attacks?</li>
            <li>What is malware?</li>
            <li>Explain different types of malware.</li>
            <li>What is cryptography?</li>
            <li>Explain symmetric and asymmetric cryptography.</li>
            <li>What is authentication?</li>
            <li>What is a firewall?</li>
            <li>Explain Cyber Security best practices.</li>
        </ol>
    `;
}// ===============================
// Semester 7 - Data Mining
// ===============================

else if (noteName === "Data Mining") {

    title = "Data Mining";

    content = `
        <h2>⛏️ Data Mining</h2>

        <h2>1. Introduction to Data Mining</h2>

        <p>
            Data Mining is the process of discovering useful patterns,
            relationships and knowledge from large amounts of data.
        </p>

        <h2>2. Data Mining Process</h2>

        <ol>
            <li>Data Collection</li>
            <li>Data Cleaning</li>
            <li>Data Integration</li>
            <li>Data Selection</li>
            <li>Data Transformation</li>
            <li>Data Mining</li>
            <li>Pattern Evaluation</li>
            <li>Knowledge Presentation</li>
        </ol>

        <h2>3. Data Preprocessing</h2>

        <p>
            Data preprocessing prepares raw data for analysis by
            removing errors, handling missing values and transforming
            data into a suitable format.
        </p>

        <ul>
            <li>Data Cleaning</li>
            <li>Data Integration</li>
            <li>Data Transformation</li>
            <li>Data Reduction</li>
        </ul>

        <h2>4. Classification</h2>

        <p>
            Classification is a supervised learning technique used
            to assign data into predefined classes or categories.
        </p>

        <ul>
            <li>Decision Tree</li>
            <li>Naive Bayes</li>
            <li>K-Nearest Neighbors</li>
        </ul>

        <h2>5. Clustering</h2>

        <p>
            Clustering is an unsupervised learning technique that
            groups similar data objects together.
        </p>

        <div class="important">
            <b>K-Means Clustering:</b><br><br>
            K-Means divides data into K groups based on similarity
            and distance from cluster centers.
        </div>

        <h2>6. Association Rule Mining</h2>

        <p>
            Association rule mining discovers relationships between
            items in large datasets.
        </p>

        <div class="important">
            <b>Support:</b> Measures how frequently an itemset occurs.<br><br>
            <b>Confidence:</b> Measures how often a rule is correct.
        </div>

        <h2>7. Applications of Data Mining</h2>

        <ul>
            <li>Market Analysis</li>
            <li>Fraud Detection</li>
            <li>Customer Analysis</li>
            <li>Healthcare</li>
            <li>Banking</li>
            <li>E-Commerce</li>
            <li>Recommendation Systems</li>
        </ul>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is Data Mining?</li>
            <li>Explain the Data Mining process.</li>
            <li>What is Data Preprocessing?</li>
            <li>Explain Data Cleaning and Data Transformation.</li>
            <li>What is Classification?</li>
            <li>Explain Decision Tree classification.</li>
            <li>What is Clustering?</li>
            <li>Explain K-Means Clustering.</li>
            <li>What is Association Rule Mining?</li>
            <li>Explain Support and Confidence.</li>
            <li>Explain applications of Data Mining.</li>
        </ol>
    `;
}// ===============================
// Semester 7 - Blockchain Technology
// ===============================

else if (noteName === "Blockchain Technology") {

    title = "Blockchain Technology";

    content = `
        <h2>⛓️ Blockchain Technology</h2>

        <h2>1. Introduction to Blockchain</h2>

        <p>
            Blockchain is a distributed digital ledger technology
            that records transactions in a secure, transparent and
            tamper-resistant manner.
        </p>

        <h2>2. Features of Blockchain</h2>

        <ul>
            <li>Decentralization</li>
            <li>Transparency</li>
            <li>Security</li>
            <li>Immutability</li>
            <li>Distributed Ledger</li>
        </ul>

        <h2>3. Blockchain Structure</h2>

        <p>
            A blockchain consists of a sequence of blocks.
            Each block contains transaction data, a timestamp,
            its own hash and the hash of the previous block.
        </p>

        <div class="important">
            <b>Block contains:</b><br><br>
            Transaction Data<br>
            Timestamp<br>
            Previous Block Hash<br>
            Current Block Hash
        </div>

        <h2>4. Hashing</h2>

        <p>
            Hashing converts input data into a fixed-length value.
            A small change in the input produces a different hash.
        </p>

        <h2>5. Consensus Mechanisms</h2>

        <p>
            Consensus mechanisms allow participants in a distributed
            network to agree on the valid state of the blockchain.
        </p>

        <ul>
            <li>Proof of Work (PoW)</li>
            <li>Proof of Stake (PoS)</li>
            <li>Delegated Proof of Stake (DPoS)</li>
        </ul>

        <h2>6. Smart Contracts</h2>

        <p>
            Smart contracts are programs stored on a blockchain
            that automatically execute predefined rules when
            specified conditions are satisfied.
        </p>

        <h2>7. Cryptocurrency</h2>

        <p>
            Blockchain technology can be used to support digital
            currencies and record transactions without relying
            on a single central authority.
        </p>

        <h2>8. Applications of Blockchain</h2>

        <ul>
            <li>Digital Payments</li>
            <li>Banking</li>
            <li>Supply Chain Management</li>
            <li>Healthcare</li>
            <li>Digital Identity</li>
            <li>Smart Contracts</li>
            <li>Voting Systems</li>
        </ul>

        <h2>9. Advantages of Blockchain</h2>

        <ul>
            <li>Improved transparency</li>
            <li>Data security</li>
            <li>Reduced dependence on intermediaries</li>
            <li>Better traceability</li>
            <li>Tamper-resistant records</li>
        </ul>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is Blockchain Technology?</li>
            <li>Explain the features of blockchain.</li>
            <li>Explain the structure of a blockchain block.</li>
            <li>What is hashing?</li>
            <li>What is a consensus mechanism?</li>
            <li>Explain Proof of Work and Proof of Stake.</li>
            <li>What are smart contracts?</li>
            <li>Explain the applications of blockchain.</li>
            <li>What are the advantages of blockchain technology?</li>
        </ol>
    `;
}// ===============================
// Semester 7 - Project Work
// ===============================

else if (noteName === "Project Work") {

    title = "Project Work";

    content = `
        <h2>🎓 Project Work</h2>

        <h2>1. Introduction</h2>

        <p>
            Project Work is an important part of B.Tech CSE in which
            students apply their theoretical and practical knowledge
            to develop a software, hardware or research-based project.
        </p>

        <h2>2. Project Selection</h2>

        <p>
            A good project should solve a real-world problem and
            should be achievable within the available time and resources.
        </p>

        <ul>
            <li>Identify a real-world problem</li>
            <li>Study existing solutions</li>
            <li>Define project objectives</li>
            <li>Select suitable technologies</li>
            <li>Prepare a project plan</li>
        </ul>

        <h2>3. Project Development Life Cycle</h2>

        <ol>
            <li>Problem Identification</li>
            <li>Requirement Analysis</li>
            <li>System Design</li>
            <li>Implementation</li>
            <li>Testing</li>
            <li>Deployment</li>
            <li>Maintenance</li>
        </ol>

        <h2>4. Requirement Analysis</h2>

        <p>
            Requirement analysis identifies what the system should do
            and what resources are required to develop it.
        </p>

        <ul>
            <li>Functional Requirements</li>
            <li>Non-Functional Requirements</li>
            <li>Hardware Requirements</li>
            <li>Software Requirements</li>
        </ul>

        <h2>5. System Design</h2>

        <p>
            System design describes the architecture, modules,
            database, user interface and overall working of the project.
        </p>

        <h2>6. Implementation</h2>

        <p>
            Implementation is the stage where the planned system
            is converted into a working application using suitable
            programming languages and technologies.
        </p>

        <h2>7. Testing</h2>

        <p>
            Testing is performed to identify errors and verify that
            the project works according to its requirements.
        </p>

        <ul>
            <li>Unit Testing</li>
            <li>Integration Testing</li>
            <li>System Testing</li>
            <li>User Acceptance Testing</li>
        </ul>

        <h2>8. Project Documentation</h2>

        <p>
            Project documentation explains the complete project,
            including its objectives, methodology, design,
            implementation, testing and results.
        </p>

        <ul>
            <li>Introduction</li>
            <li>Problem Statement</li>
            <li>Objectives</li>
            <li>Literature Survey</li>
            <li>Methodology</li>
            <li>System Design</li>
            <li>Implementation</li>
            <li>Testing</li>
            <li>Results</li>
            <li>Conclusion</li>
            <li>Future Scope</li>
            <li>References</li>
        </ul>

        <h2>9. Project Presentation</h2>

        <p>
            Students should be able to explain the problem,
            objectives, technologies, implementation, results
            and future scope of their project during the presentation.
        </p>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is Project Work?</li>
            <li>How do you select a good project topic?</li>
            <li>Explain the project development life cycle.</li>
            <li>What is requirement analysis?</li>
            <li>What are functional and non-functional requirements?</li>
            <li>Explain system design.</li>
            <li>What is project implementation?</li>
            <li>Explain different types of software testing.</li>
            <li>What is project documentation?</li>
            <li>What points should be covered in a project presentation?</li>
        </ol>
    `;
}// ===============================
// Semester 8 - Major Project
// ===============================

else if (noteName === "Major Project") {

    title = "Major Project";

    content = `
        <h2>🎓 Major Project</h2>

        <h2>1. Introduction</h2>

        <p>
            A Major Project is a comprehensive project in which
            students apply their programming, database, software
            engineering and problem-solving skills to develop
            a practical solution for a real-world problem.
        </p>

        <h2>2. Project Objectives</h2>

        <ul>
            <li>Solve a real-world problem</li>
            <li>Apply theoretical knowledge</li>
            <li>Develop practical programming skills</li>
            <li>Learn software development practices</li>
            <li>Improve problem-solving skills</li>
        </ul>

        <h2>3. Project Selection</h2>

        <p>
            A good project should have a clear problem statement,
            defined objectives and a practical implementation plan.
        </p>

        <h2>4. Requirement Analysis</h2>

        <ul>
            <li>Functional Requirements</li>
            <li>Non-Functional Requirements</li>
            <li>Hardware Requirements</li>
            <li>Software Requirements</li>
        </ul>

        <h2>5. System Design</h2>

        <p>
            System design describes the architecture, modules,
            database structure, user interface and workflow
            of the proposed system.
        </p>

        <h2>6. Development</h2>

        <p>
            During development, the project is implemented using
            suitable programming languages, frameworks, databases
            and development tools.
        </p>

        <h2>7. Testing</h2>

        <ul>
            <li>Unit Testing</li>
            <li>Integration Testing</li>
            <li>System Testing</li>
            <li>Acceptance Testing</li>
        </ul>

        <h2>8. Project Documentation</h2>

        <ol>
            <li>Introduction</li>
            <li>Problem Statement</li>
            <li>Objectives</li>
            <li>Literature Survey</li>
            <li>Requirements</li>
            <li>System Design</li>
            <li>Implementation</li>
            <li>Testing</li>
            <li>Results</li>
            <li>Conclusion</li>
            <li>Future Scope</li>
            <li>References</li>
        </ol>

        <h2>9. Project Presentation</h2>

        <p>
            The final presentation should explain the problem,
            objectives, technologies used, system design,
            implementation, results and future scope.
        </p>

        <h2>10. Future Scope</h2>

        <p>
            Future scope describes the improvements and additional
            features that can be added to the project later.
        </p>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is a Major Project?</li>
            <li>How do you select a project topic?</li>
            <li>What is a problem statement?</li>
            <li>Explain project objectives.</li>
            <li>What is requirement analysis?</li>
            <li>Explain system design.</li>
            <li>Explain different types of software testing.</li>
            <li>What should be included in project documentation?</li>
            <li>How should a project presentation be prepared?</li>
            <li>What is the future scope of a project?</li>
        </ol>
    `;
}// ===============================
// Semester 8 - Project Seminar
// ===============================

else if (noteName === "Project Seminar") {

    title = "Project Seminar";

    content = `
        <h2>🎤 Project Seminar</h2>

        <h2>1. Introduction</h2>

        <p>
            A Project Seminar is a formal presentation in which
            students explain their project idea, objectives,
            methodology, implementation, results and future scope
            to teachers, evaluators or other students.
        </p>

        <h2>2. Objectives of a Project Seminar</h2>

        <ul>
            <li>Present the project clearly</li>
            <li>Explain the problem being solved</li>
            <li>Describe the proposed solution</li>
            <li>Explain technologies used</li>
            <li>Present project results</li>
            <li>Answer questions from evaluators</li>
        </ul>

        <h2>3. Seminar Preparation</h2>

        <ol>
            <li>Understand the project completely</li>
            <li>Prepare the presentation</li>
            <li>Organize important points</li>
            <li>Practice the presentation</li>
            <li>Prepare for questions</li>
        </ol>

        <h2>4. Presentation Structure</h2>

        <ol>
            <li>Title</li>
            <li>Introduction</li>
            <li>Problem Statement</li>
            <li>Objectives</li>
            <li>Literature Survey</li>
            <li>Proposed Methodology</li>
            <li>System Design</li>
            <li>Technologies Used</li>
            <li>Implementation</li>
            <li>Results</li>
            <li>Conclusion</li>
            <li>Future Scope</li>
            <li>References</li>
        </ol>

        <h2>5. Presentation Skills</h2>

        <ul>
            <li>Speak clearly and confidently</li>
            <li>Maintain eye contact</li>
            <li>Use simple language</li>
            <li>Explain diagrams properly</li>
            <li>Manage presentation time</li>
            <li>Answer questions politely</li>
        </ul>

        <h2>6. Visual Aids</h2>

        <p>
            Visual aids such as diagrams, flowcharts, tables,
            screenshots and graphs can make a technical seminar
            easier to understand.
        </p>

        <h2>7. Question and Answer Session</h2>

        <p>
            After the presentation, evaluators may ask questions
            about the project. Students should understand the
            project's requirements, design, implementation and results.
        </p>

        <div class="important">
            <b>Tip:</b><br>
            Presentation ko sirf read mat karo. Project ko samajhkar
            explain karo aur important questions ki practice karo.
        </div>

        <h2>8. Common Mistakes</h2>

        <ul>
            <li>Reading every slide word-for-word</li>
            <li>Using too much text</li>
            <li>Not explaining diagrams</li>
            <li>Poor time management</li>
            <li>Not preparing for questions</li>
        </ul>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is a Project Seminar?</li>
            <li>What are the objectives of a Project Seminar?</li>
            <li>How should a project seminar be prepared?</li>
            <li>Explain the structure of a project presentation.</li>
            <li>What presentation skills are important?</li>
            <li>What are visual aids?</li>
            <li>How should a student handle the question-answer session?</li>
            <li>What are common mistakes during a seminar?</li>
            <li>How can a technical presentation be made effective?</li>
        </ol>
    `;
}// ===============================
// Semester 8 - Technical Training
// ===============================

else if (noteName === "Technical Training") {

    title = "Technical Training";

    content = `
        <h2>💻 Technical Training</h2>

        <h2>1. Introduction</h2>

        <p>
            Technical Training helps students develop practical
            technical skills required for software development,
            IT industries and professional work environments.
        </p>

        <h2>2. Objectives of Technical Training</h2>

        <ul>
            <li>Develop practical technical skills</li>
            <li>Understand industry requirements</li>
            <li>Improve programming skills</li>
            <li>Learn development tools</li>
            <li>Gain practical project experience</li>
            <li>Improve problem-solving ability</li>
        </ul>

        <h2>3. Programming Skills</h2>

        <ul>
            <li>C Programming</li>
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript</li>
        </ul>

        <h2>4. Web Development</h2>

        <p>
            Web development involves creating websites and web
            applications using frontend, backend and database technologies.
        </p>

        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Backend Development</li>
            <li>Database Management</li>
        </ul>

        <h2>5. Database Skills</h2>

        <ul>
            <li>SQL</li>
            <li>Database Design</li>
            <li>Tables and Relationships</li>
            <li>Queries</li>
            <li>Database Security</li>
        </ul>

        <h2>6. Software Development Tools</h2>

        <ul>
            <li>Visual Studio Code</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Command Line</li>
            <li>Debugging Tools</li>
        </ul>

        <h2>7. Version Control</h2>

        <p>
            Version control systems help developers track changes
            in source code and collaborate with other developers.
        </p>

        <div class="important">
            <b>Git:</b> A distributed version control system used
            to manage source code and track project changes.
        </div>

        <h2>8. Industry Skills</h2>

        <ul>
            <li>Problem Solving</li>
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Time Management</li>
            <li>Technical Documentation</li>
            <li>Presentation Skills</li>
        </ul>

        <h2>9. Training Report</h2>

        <p>
            A technical training report should describe the training
            organization, objectives, technologies learned, practical
            work performed, projects completed and overall learning.
        </p>

        <h2>10. Benefits of Technical Training</h2>

        <ul>
            <li>Improves employability</li>
            <li>Provides practical experience</li>
            <li>Builds confidence</li>
            <li>Develops industry-ready skills</li>
            <li>Helps in career preparation</li>
        </ul>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is Technical Training?</li>
            <li>What are the objectives of technical training?</li>
            <li>Why are programming skills important?</li>
            <li>Explain the basics of web development.</li>
            <li>What database skills should a CSE student learn?</li>
            <li>What is Git?</li>
            <li>What is version control?</li>
            <li>Explain important industry skills.</li>
            <li>How should a technical training report be prepared?</li>
            <li>What are the benefits of technical training?</li>
        </ol>
    `;
}// ===============================
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
}// ===============================
// Semester 8 - Open Elective
// ===============================

else if (noteName === "Open Elective") {

    title = "Open Elective";

    content = `
        <h2>📚 Open Elective</h2>

        <h2>1. Introduction</h2>

        <p>
            An Open Elective is a subject that allows students to study
            a topic outside their core specialization. It provides an
            opportunity to gain knowledge in different technical,
            management or interdisciplinary areas.
        </p>

        <h2>2. Purpose of Open Electives</h2>

        <ul>
            <li>Provide interdisciplinary knowledge</li>
            <li>Explore subjects outside the core branch</li>
            <li>Develop additional skills</li>
            <li>Improve career opportunities</li>
            <li>Understand different areas of technology and management</li>
        </ul>

        <h2>3. Common Open Elective Areas</h2>

        <ul>
            <li>Entrepreneurship</li>
            <li>Business Management</li>
            <li>Digital Marketing</li>
            <li>Data Science</li>
            <li>Artificial Intelligence</li>
            <li>Environmental Studies</li>
            <li>Finance and Economics</li>
            <li>Communication Skills</li>
        </ul>

        <h2>4. Selection of Open Elective</h2>

        <p>
            Students can select an open elective according to their
            interests, career goals and availability of subjects
            offered by the institution.
        </p>

        <h2>5. Learning Process</h2>

        <ol>
            <li>Understand the basic concepts</li>
            <li>Study the theoretical topics</li>
            <li>Practice important questions</li>
            <li>Complete assignments and practical work</li>
            <li>Prepare notes for examination</li>
            <li>Apply the knowledge in real-world situations</li>
        </ol>

        <h2>6. Benefits of Open Electives</h2>

        <ul>
            <li>Broadens knowledge</li>
            <li>Develops additional skills</li>
            <li>Improves problem-solving ability</li>
            <li>Supports career development</li>
            <li>Helps understand interdisciplinary concepts</li>
        </ul>

        <h2>7. Career Benefits</h2>

        <p>
            Open electives can help students develop knowledge beyond
            their core subject and may provide additional opportunities
            for internships, placements, entrepreneurship and higher
            studies.
        </p>

        <h2>8. Important Points</h2>

        <div class="important">
            <b>Choose an Open Elective according to:</b><br><br>
            Interest + Career Goal + Skill Development + Future Scope
        </div>

        <h2>📌 Important Questions</h2>

        <ol>
            <li>What is an Open Elective?</li>
            <li>What is the purpose of an Open Elective?</li>
            <li>Explain the benefits of Open Electives.</li>
            <li>What are some common areas of Open Electives?</li>
            <li>How should a student select an Open Elective?</li>
            <li>How do Open Electives help in career development?</li>
            <li>Explain the importance of interdisciplinary learning.</li>
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

    <h3>📐 Engineering Mathematics-I</h3>


    <!-- ========================= -->
    <!-- BASIC -->
    <!-- ========================= -->

    <div class="level"
         data-level="basic">

        <h3>🟢 Basic</h3>


        <div class="qa-item">

            <strong>Q1. What is a matrix?</strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                A matrix is a rectangular arrangement of numbers,
                symbols or expressions in rows and columns.
                Matrices are commonly represented by capital letters
                such as A, B or C.

            </div>

        </div>


        <div class="qa-item">

            <strong>Q2. What is a determinant?</strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                A determinant is a scalar value associated with a
                square matrix. It is useful for solving systems of
                linear equations and finding whether a matrix is
                singular or non-singular.

            </div>

        </div>


        <div class="qa-item">

            <strong>Q3. What is a differential equation?</strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                A differential equation is an equation that contains
                one or more derivatives of an unknown function.
                It is used to describe relationships involving
                changing quantities.

            </div>

        </div>


        <div class="qa-item">

            <strong>Q4. What is differentiation?</strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                Differentiation is the process of finding the rate
                of change of a function with respect to its variable.
                The derivative of f(x) is commonly written as f'(x).

            </div>

        </div>


        <div class="qa-item">

            <strong>Q5. What is integration?</strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                Integration is the process of finding the integral
                of a function. It is commonly used to find areas,
                accumulated quantities and antiderivatives.

            </div>

        </div>


        <div class="qa-item">

            <strong>Q6. What is a limit?</strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                A limit describes the value that a function approaches
                as its independent variable approaches a particular value.

            </div>

        </div>


        <div class="qa-item">

            <strong>Q7. What is a vector?</strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                A vector is a quantity that has both magnitude and
                direction. Vectors are represented using components
                such as i, j and k.

            </div>

        </div>


        <div class="qa-item">

            <strong>Q8. What is a partial derivative?</strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                A partial derivative is the derivative of a function
                of several variables with respect to one variable,
                while keeping the other variables constant.

            </div>

        </div>

    </div>


    <!-- ========================= -->
    <!-- INTERMEDIATE -->
    <!-- ========================= -->

    <div class="level"
         data-level="intermediate">

        <h3>🟡 Intermediate</h3>


        <div class="qa-item">

            <strong>Q1. Explain the types of matrices.</strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                Common types of matrices include row matrix,
                column matrix, square matrix, diagonal matrix,
                identity matrix, zero matrix and symmetric matrix.
                Each type is classified according to the arrangement
                of its elements.

            </div>

        </div>


        <div class="qa-item">

            <strong>Q2. Explain the properties of determinants.</strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                Important properties of determinants include:

                <ul>
                    <li>Interchanging two rows changes the sign of the determinant.</li>
                    <li>If two rows are identical, the determinant is zero.</li>
                    <li>Multiplying a row by a constant multiplies the determinant by that constant.</li>
                    <li>The determinant of an identity matrix is 1.</li>
                </ul>

            </div>

        </div>


        <div class="qa-item">

            <strong>Q3. Explain the chain rule of differentiation.</strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                The chain rule is used to differentiate a composite
                function. If y = f(g(x)), then:

                <br><br>

                <strong>dy/dx = f'(g(x)) × g'(x)</strong>

                <br><br>

                It is useful when one function is dependent on another
                function.

            </div>

        </div>


        <div class="qa-item">

            <strong>Q4. Explain the product rule of differentiation.</strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                If y is the product of two functions u and v, then:

                <br><br>

                <strong>d(uv)/dx = u(dv/dx) + v(du/dx)</strong>

                <br><br>

                This rule is used when two differentiable functions
                are multiplied together.

            </div>

        </div>


        <div class="qa-item">

            <strong>Q5. Explain the fundamental theorem of calculus.</strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                The fundamental theorem of calculus establishes the
                relationship between differentiation and integration.
                It states that integration and differentiation are
                inverse processes under suitable continuity conditions.

            </div>

        </div>


        <div class="qa-item">

            <strong>Q6. What are eigenvalues and eigenvectors?</strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                For a square matrix A, a non-zero vector X is an
                eigenvector if:

                <br><br>

                <strong>AX = λX</strong>

                <br><br>

                where λ is called the eigenvalue corresponding to X.
                Eigenvalues and eigenvectors are important in linear
                algebra and many engineering applications.

            </div>

        </div>


        <div class="qa-item">

            <strong>Q7. Explain the gradient of a scalar function.</strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                The gradient of a scalar function gives the direction
                of maximum rate of increase of the function.

                <br><br>

                For a function φ(x,y,z):

                <br><br>

                <strong>∇φ =
                (∂φ/∂x)i +
                (∂φ/∂y)j +
                (∂φ/∂z)k</strong>

            </div>

        </div>


        <div class="qa-item">

            <strong>Q8. Explain the order and degree of a differential equation.</strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                The order of a differential equation is the order
                of the highest derivative present in the equation.

                <br><br>

                The degree is the power of the highest order derivative
                when the equation is expressed as a polynomial in
                derivatives.

            </div>

        </div>

    </div>


    <!-- ========================= -->
    <!-- ADVANCED -->
    <!-- ========================= -->

    <div class="level"
         data-level="advanced">

        <h3>🔴 Advanced</h3>


        <div class="qa-item">

            <strong>
                Q1. Explain how a system of linear equations can be
                solved using the Gauss elimination method.
            </strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                Gauss elimination converts a system of linear equations
                into an upper triangular form using elementary row
                operations.

                <br><br>

                The general steps are:

                <ol>
                    <li>Write the equations in augmented matrix form.</li>
                    <li>Use elementary row operations to eliminate variables.</li>
                    <li>Convert the matrix into upper triangular form.</li>
                    <li>Use back substitution to find the unknown variables.</li>
                </ol>

                This method is widely used for solving simultaneous
                linear equations.

            </div>

        </div>


        <div class="qa-item">

            <strong>
                Q2. Explain the method of finding eigenvalues of a matrix.
            </strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                Eigenvalues of a square matrix A are obtained from the
                characteristic equation:

                <br><br>

                <strong>|A - λI| = 0</strong>

                <br><br>

                where I is the identity matrix and λ represents the
                eigenvalue.

                <br><br>

                Solving the characteristic equation gives the eigenvalues
                of the matrix.

            </div>

        </div>


        <div class="qa-item">

            <strong>
                Q3. Explain Taylor's theorem and its importance.
            </strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                Taylor's theorem represents a sufficiently differentiable
                function as a polynomial expansion around a point.

                <br><br>

                The expansion is:

                <br><br>

                <strong>
                f(x) = f(a) + (x-a)f'(a)
                + ((x-a)²/2!)f''(a) + ...
                </strong>

                <br><br>

                It is useful for approximation, numerical calculations
                and analysis of functions.

            </div>

        </div>


        <div class="qa-item">

            <strong>
                Q4. Explain partial differential equations and their applications.
            </strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                A partial differential equation contains partial
                derivatives of an unknown function with respect to
                multiple independent variables.

                <br><br>

                PDEs are used in engineering and science to model
                heat transfer, fluid flow, wave propagation,
                electromagnetic fields and other physical systems.

            </div>

        </div>


        <div class="qa-item">

            <strong>
                Q5. Explain the divergence and curl of a vector field.
            </strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                The divergence of a vector field measures the net
                outward flow from a point.

                <br><br>

                For vector field F:

                <br><br>

                <strong>div F = ∇ · F</strong>

                <br><br>

                Curl measures the rotational tendency of a vector field:

                <br><br>

                <strong>curl F = ∇ × F</strong>

                <br><br>

                Both concepts are important in vector calculus and
                engineering applications.

            </div>

        </div>


        <div class="qa-item">

            <strong>
                Q6. Explain the solution of a first-order differential equation.
            </strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                A first-order differential equation contains the first
                derivative of the unknown function.

                <br><br>

                Depending on its form, it may be solved using methods
                such as separation of variables, integrating factor,
                homogeneous equations or exact differential equations.

                <br><br>

                The final solution generally contains an arbitrary
                constant.

            </div>

        </div>


        <div class="qa-item">

            <strong>
                Q7. Explain multiple integration and its applications.
            </strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                Multiple integration involves integrating a function
                with respect to two or more variables.

                <br><br>

                Double and triple integrals are used to calculate
                quantities such as area, volume, mass and other
                physical quantities over a region.

            </div>

        </div>


        <div class="qa-item">

            <strong>
                Q8. Explain the importance of Engineering Mathematics
                in Computer Science.
            </strong>

            <div class="answer">

                <strong>Answer:</strong><br>

                Engineering Mathematics provides the mathematical
                foundation required in Computer Science.

                <br><br>

                Concepts such as matrices, calculus, differential
                equations, probability and vectors are useful in:

                <ul>
                    <li>Machine Learning</li>
                    <li>Artificial Intelligence</li>
                    <li>Computer Graphics</li>
                    <li>Data Science</li>
                    <li>Computer Vision</li>
                    <li>Algorithm analysis</li>
                </ul>

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

function showSubjects(course, semester) {

    const subjectArea = document.getElementById("subjectArea");

    // ===============================
    // SUBJECT LIST
    // ===============================

    const subjects = {

        // ===========================
        // B.TECH CSE
        // ===========================

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


        // ===========================
        // BCA
        // ===========================

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


        // ===========================
        // BBA
        // ===========================

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

        },


        

    };


    // ===============================
    // CHECK COURSE + SEMESTER
    // ===============================

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

        subjectArea.scrollIntoView({
            behavior: "smooth"
        });

        return;
    }


    // ===============================
    // SUBJECT HTML
    // ===============================

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

                <button onclick="openNote('${subject.replace(/'/g, "\\'")}')">
                    Open Notes
                </button>

            </div>
        `;

    });


    html += `
        </div>
    
 `;

    // ===============================
    // SHOW SUBJECTS
    // ===============================

    subjectArea.innerHTML = html;

    subjectArea.scrollIntoView({
        behavior: "smooth"
    });

}