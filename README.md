# Disk and CPU Scheduling Algorithms

## Functionalities
- 6 Disk Scheduling Algorithms are implemented.
- 9 CPU Scheduling Algorithms are implemented.
- Each prequest queue can have different track size and head position.
- Each process can have different number of CPU Burst Time and I/O Burst Time.
- Graphical analyisis of Disk Scheudling algorithms for given request queue.
- Gantt Chart and Timeline Chart for the given Schedule.
- Animation of the Time Log.
- Graphical comparitive analysis available for various disk scheduling algorithms.
- Comparison for Round Robin Algorithm for all time quantum.
- Comparison between all the algorithms wrt Average Completion Time, Turn Around Time, Waiting Time and Response Time.

### Different Disk Scheduling Algorithms
- Requests are addressed in the order they arrive in the disk queue.
  - **First Come First Serve (FCFS)**
- Requests having shortest seek time are executed first.
  - **Shortest Seek Time First (STTF)**
- Requests at the midrange are serviced more and those arriving behind the disk arm will have to wait.
  - **SACN**
- Disk arm instead of reversing its direction goes to the other end of the disk and starts servicing the requests from there.
  - **Circular SCAN (C-SCAN)**
- Disk arm in spite of going to the end of the disk goes only to the last request to be serviced in front of the head and then reverses its direction from there only.
  - **LOOK**
- Disk arm in spite of going to the end goes only to the last request to be serviced in front of the head and then from there goes to the other end’s last request.
  - **Circular LOOK (C-LOOK)**
 

### Different Criteria of CPU Scheduling Algorithms
- The first process arrived in the ready queue is processed first.
  - **First Come First Serve (FCFS)**
    >Non-Preemptive
- The shortest job in the ready queue is processed first.
  - **Shortest Job First (SJF)**
    >Non-Preemptive
  - **Shortest Remaining Job First (SRJF)**
    >Preemptive
- The longest job in the ready queue is processed first.
  - **Longest Job First (LJF)**
    >Non-Preemptive
  - **Longest Remaining Job First (LRJF)**
    >Preemptive
- The highest priority job in the ready queue is processed first.
  - **Priority Non-Preemptive (PNP)**
    >Non-Preemptive
  - **Priority Preemptive(PP)**
    >Preemptive
- The jobs in the ready queue are given a fixed time quantum.
  - **Round Robin (RR)**
    >Preemptive
- The job with the highest response ratio in the ready queue is processed first.
  - **Highest Response Ratio Next (HRRN)**
    >Non-Preemptive

#### Different States in CPU Scheduler
- Remain
  >The processes which are yet to arrive.
- Ready
  >The processes which are ready to be executed.
- Running
  >Current Process Running in the CPU.
- Block
  >The processes which are blocked for I/O Time.
- Terminate
  >The processes which have completed all the CPU and I/O.
  
### Technologies Used
- HTML
- CSS
- Google Charts
- Chart.js

#### Electron JS
Electron JS is an open-source framework that allows developers to build cross-platform desktop apps with JavaScript, HTML, and CSS. It renders the HTML page to make the application.

### Website Link
After coding this [ website - Link](https://sachin0201.github.io/disk-and-cpu-scheduling-algorithms/main.html) using Js, HTML and CSS was later converted into a GUI with the help of Electron JS.

