# Sample Fullstack Application
This is a sample fullstack application using a Next.js frontend, a NestJS backend, PostgreSQL for the database, and Redis for caching.
## My Approach
I contaierised the front end and backend wrting Dockerfiles for them. THen used Github Actiosn to push the images to a registry , then used docker compose for spinning up the wole application with REDIS and POSTGRES.
I used a `wait-for-it.sh` script to ensure that the backend service waits for the PostgreSQL and Redis services to be fully up and running before starting. This is necessary to avoid connection errors that might occur if the backend tries to connect to the database or cache before they are ready.
## How to Run
```
git clone https://github.com/satyazzz123/sample-fullstack-application.git 
cd sample-fullstack-application
docker compose up
```
## Results
Backend service working

![image](https://github.com/satyazzz123/sample-fullstack-application/assets/105061492/f8ade871-1777-4f15-91a8-77fd4fcadd32)

Frontend service working

![image](https://github.com/satyazzz123/sample-fullstack-application/assets/105061492/84d7bae9-4dbc-4a8a-9e70-d9215e353b91GETD)

Data inserted into Frontend 
![image](https://github.com/satyazzz123/sample-fullstack-application/assets/105061492/223b9a94-1974-4d21-8851-bb850900d394)

GET API 

![image](https://github.com/satyazzz123/sample-fullstack-application/assets/105061492/e5baf144-edc8-449b-9d7f-2df0a8c8c4d2)

Getting data through API

![image](https://github.com/satyazzz123/sample-fullstack-application/assets/105061492/b989fb80-9635-4ee0-8b71-1d2e2b682ed5)



