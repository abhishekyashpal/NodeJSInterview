/* What is Operating System and how it works?*/

/* 
Operating System functions as that translator in your PC.
It converts those 1s and 0s, yes/no, and on/off values into a readable language that you will understand.
When you write a program and it runs too slowly, but you see nothing wrong with your code, where else will you look for a solution? How will you be able to debug the problem if you don’t know how the operating system works? Are you accessing too many files? Running out of memory and swap is in high usage? But you don’t even know what swap is! Or is I/O blocking?
An Operating System (OS) is a collection of software that manages computer hardware and provides services for programs.
There are three key elements of an operating system, which are: (1) Abstractions (process, thread, file, socket, memory), (2) Mechanisms (create, schedule, open, write, allocate), and (3) Policies (LRU, EDF).
There are three types of Operating Systems commonly used nowadays. The first is Monolithic OS, where the entire OS is working in kernel space and is alone in supervisor mode. The second is Modular OS, in which some part of the system core will be located in independent files called modules that can be added to the system at run time. And the third is Micro OS, where the kernel is broken down into separate processes, known as servers. Some of the servers run in kernel space and some run in user-space.
1. Process and process Management:
  A process is basically a program in execution. The execution of a process must progress in a sequential fashion. To put it in simple terms, we write our computer programs in a text file, and when we execute this program, it becomes a process which performs all the tasks mentioned in the program.
  When a program is loaded into the memory and it becomes a process, it can be divided into four sections ─ stack, heap, text, and data.
    Stack: The process Stack contains the temporary data, such as method/function parameters, return address, and local variables.
    Heap: This is dynamically allocated memory to a process during its run time.
    Text: This includes the current activity represented by the value of Program Counter and the contents of the processor’s registers.
    Data: This section contains the global and static variables.
  A process can have one of the following five states at a time:
    Start: The initial state when a process is first started/created.
    Ready: The process is waiting to be assigned to a processor. Ready processes are waiting to have the processor allocated to them by the operating system so that they can run. A process may come into this state after the Start state, or while running it by but getting interrupted by the scheduler to assign CPU to some other process.
    Running: Once the process has been assigned to a processor by the OS scheduler, the process state is set to running and the processor executes its instructions.
    Waiting: the process moves into the waiting state if it needs to wait for a resource, such as waiting for user input, or waiting for a file to become available.
    Terminated or Exit: Once the process finishes its execution, or it is terminated by the operating system, it is moved to the terminated state where it waits to be removed from main memory.
  A Process Control Block is a data structure maintained by the Operating System for every process. The PCB is identified by an integer process ID (PID).
    Process State: The current state of the process — whether it is ready, running, waiting, or whatever.
    Process Privileges: This is required to allow/disallow access to system resources.
    Process ID: Unique identification for each of the processes in the operating system.
    Pointer: A pointer to the parent process.
    Program Counter: Program Counter is a pointer to the address of the next instruction to be executed for this process.
    CPU Registers: Various CPU registers where processes need to be stored for execution for running state.
    CPU Scheduling Information: Process priority and other scheduling information which is required to schedule the process.
    Memory Management Information: This includes the information of page table, memory limits, and segment table, depending on the memory used by the operating system.
    Accounting Information: This includes the amount of CPU used for process execution, time limits, execution ID, and so on.
    IO Status Information: This includes a list of I/O devices allocated to the process. 

2.  Threads and Concurrency:
  A thread is a flow of execution through the process code. It has its own program counter that keeps track of which instruction to execute next. It also has system registers which hold its current working variables, and a stack which contains the execution history.
  Each thread belongs to exactly one process, and no thread can exist outside a process. Each thread represents a separate flow of control. Threads have been successfully used in implementing network servers and web servers. They also provide a suitable foundation for parallel execution of applications on shared memory multiprocessors.
  
  Threads are implemented in the following two ways:
    User Level Threads: User-managed threads.
    Kernel Level Threads: Operating System-managed threads acting on a kernel, an operating system core.

3. Scheduling:
  The process of scheduling is the responsibility of the process manager that handles the removal of the running process from the CPU and the selection of another process on the basis of a particular strategy.
  Process scheduling is an essential part of a Multiprogramming operating system. These operating systems allow more than one process to be loaded into the executable memory at a time, and the loaded process shares the CPU using time multiplexing.
  The OS maintains all Process Control Blocks (PCBs) in Process Scheduling Queues. The OS maintains a separate queue for each of the process states, and PCBs of all processes in the same execution state are placed in the same queue. When the state of a process is changed, its PCB is unlinked from its current queue and moved to its new state queue.
    Job queue: This queue keeps all the processes in the system.
    Ready queue: This queue keeps a set of all processes residing in the main memory, ready and waiting to execute. A new process is always put in this queue.
    Device queues: The processes which are blocked due to unavailability of an I/O device constitute this queue.
  The OS can use different policies to manage each queue (FIFO, Round Robin, Priority, etc.). The OS scheduler determines how to move processes between the ready and run queues which can only have one entry per processor core on the system.
  Two-state process models refer to running and non-running states:
    Running: When a new process is created, it enters into the system in the running state.
    Not Running: Processes that are not running are kept in queue, waiting for their turn to execute.
  A context switch is the mechanism that stores and restores the state or context of a CPU in the Process Control block. It allows a process execution to be resumed from the same point at a later time. Using this technique, a context switcher enables multiple processes to share a single CPU. Context switching is an essential feature of a multitasking operating system.
  When the scheduler switches the CPU from executing one process to another, the state from the current running process is stored into the process control block. After this, the state for the next process is loaded from its own PCB and used to set the PC, registers, etc. At that point, the second process can start executing. 
4. Memory Management:   
  Memory management is the functionality of an operating system which handles or manages primary memory. It moves processes back and forth between the main memory and the disk during execution.
  Memory management keeps track of each and every memory location, regardless of whether it is allocated to some process or free. It checks how much memory is to be allocated to processes. It decides which process will get memory at what time. And it tracks whenever memory gets freed up or unallocated, and correspondingly updates the status.
  The process address space is the set of logical addresses that a process references in its code.
  The operating system takes care of mapping the logical addresses to physical addresses at the time of memory allocation to the program. There are three types of addresses used in a program before and after memory is allocated:
    Symbolic addresses: The addresses used in a source code. The variable names, constants, and instruction labels are the basic elements of the symbolic address space.
    Relative addresses: At the time of compilation, a compiler converts symbolic addresses into relative addresses.
    Physical addresses: The loader generates these addresses at the time when a program is loaded into main memory.
  The set of all logical addresses generated by a program is referred to as a logical address space. The set of all physical addresses corresponding to these logical addresses is referred to as a physical address space. 
5. Inter-Process Communication:
  There are two types of processes: Independent and Cooperating. An independent process is not affected by the execution of other processes, while a cooperating process can be affected by other executing processes.
  Inter-process communication (IPC) is a mechanism which allows processes to communicate with each other and synchronize their actions.
  Processes can communicate with each other in two ways: Shared Memory and Message Parsing.
  Shared Memory Method:
    Let’s say there are two processes: the Producer and the Consumer. The producer produces some item and the Consumer consumes that item. The two processes shares a common space or memory location known as the “buffer,” where the item produced by the Producer is stored and from where the Consumer consumes the item if needed.  
    In the bounded buffer problem, the Producer and the Consumer will share some common memory. Then the Producer will start producing items. If the total number of produced items is equal to the size of buffer, the Producer will wait until they’re consumed by the Consumer.
    Similarly, the Consumer first checks for the availability of the item, and if no item is available, the Consumer will wait for the Producer to produce it. If there are items available, the Consumer will consume them. 
  Message Parsing Method:
  In this method, processes communicate with each other without using any kind of of shared memory. If two processes p1 and p2 want to communicate with each other, they proceed as follows:
    Establish a communication link (if a link already exists, no need to establish it again.)
    Start exchanging messages using basic primitives. We need at least two primitives: send(message, destination) or send(message) and receive(message, host) or receive(message)  

6. Input/Output Management:
  An I/O system is required to take an application I/O request and send it to the physical device, then take whatever response comes back from the device and send it to the application. I/O devices can be divided into two categories:
  Block devices: A block device is one with which the driver communicates by sending entire blocks of data.
  Character Devices: A character device is one with which the driver communicates by sending and receiving single characters (bytes, octets). 
 
7. Virtualization:
  Virtualization is technology that allows you to create multiple simulated environments or dedicated resources from a single, physical hardware system.
  Data Virtualization
  Desktop Virtualization
  Server Virtualization
  Operating System Virtualization
  Network Functions Virtualization
  
8. Distributed File Systems:
  A distributed file system is a client/server-based application that allows clients to access and process data stored on the server as if it were on their own computer. When a user accesses a file on the server, the server sends the user a copy of the file, which is cached on the user’s computer while the data is being processed and is then returned to the server.

9. Distributed Shared Memory:
  Distributed Shared Memory (DSM) is a resource management component of a distributed operating system that implements the shared memory model in distributed systems, which have no physically shared memory. The shared memory provides a virtual address space that is shared among all computers in a distributed system.
  
10. Cloud Computing:

*/

/* Synchronous to Asynchronous */
/* It allows us to write code that looks synchronous at a first sight 
but is asynchronous under the hood 
errors are “silently” swallowed (!!) within an Async function unless we add a try/catch
Ensure that your async functions are entirely surrounded by try/catch, at least at the top level*/
async function myAsyncFunction() {
  try {
    const result = await somethingThatReturnsAPromise();  
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}


