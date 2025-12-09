📌 1. Project Title

Distributed Sensor Network Simulator

A full-stack simulation of a distributed sensor network, complete with sensor nodes, ingestion API, message queue, processing worker, database, and real-time dashboard.

📌 2. Project Overview

“This project simulates hundreds of virtual sensors sending real-time data to a backend system.”

“The backend ingests, validates, queues, processes, and stores sensor readings.”

“A dashboard visualizes live sensor status, readings, and anomalies.”

“This system mimics real-world IoT, distributed telemetry, monitoring, and reliability engineering.”


📌 3. Features

1. Sensor Nodes

- Generate simulated readings
- Randomized delays, failures, dropouts
- Adjustable frequency
- Multiple sensor types possible

2. Ingestion API

- Validates incoming data
- Buffers readings into a queue

3. Message Queue

- Smooths bursts

- Helps simulate real-world ingestion pressure

4. Processing Worker

- Dequeues messages

- Normalizes data

- Detects anomalies

- Stores readings + alerts

5. Dashboard

- View all sensors

- Real-time status (online/offline/degraded)

- Visualize trends

- View anomalies



📌 4. System Architecture

Sensor nodes → ingestion API → queue → processing worker → database → dashboard

The system follows a distributed event-driven architecture. Sensors act as producers, sending data to the ingestion API. The API pushes messages into a queue. A background worker consumes messages, processes them, detects anomalies, and stores results in a PostgreSQL database. The dashboard fetches from the database and displays real-time system state.  

[Sensors] → [Ingestion API] → [Queue] → [Worker] → [Database] → [Dashboard]

📌 5. Folder Structure

distributed-sensor-sim/
│
├── backend/
│   ├── ingestion/
│   ├── worker/
│   ├── queue/
│   ├── prisma/
│   └── utils/
│
├── sensors/
│   ├── base-sensor.ts
│   ├── run-sensor.ts
│   └── types.ts
│
└── dashboard/
    └── app/

