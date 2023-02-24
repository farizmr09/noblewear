# Noblewear

Noblewear is a web application created using ReactJS, NodeJS, ExpressJS, and MySQL under Docker virtual environtment.

## Docker Setup

First thing first, make sure you have Docker installed. If you're using anything but Linux distro OS (in my case I am using Ubuntu), I am not sure if the steps are the same. But, here it goes:

Make sure you are in the directory where the Dockerfile is located.

```bash
docker build -t noblewear:('version number') .
```

This will create the image needed for the development environment.

## Node modules setup

Just like any other node package, we will have to run

```bash
npm install
```

inside all the package having some npm dependencies (frontend and backend dir). This is of course could be done automatically once I am able to integrate it with Docker.

## Running the Development Environment

To run the development environment, we will use the docker-compose command. Once again, make sure you are in the directory where the docker-compose.yaml file is located before running this command.

```bash
docker-compose up -d
```

Note that the 'd' is an option that is used to run the containers and network inside the docker-compose.yaml file in detached mode. To stop the running containers, we can use

```bash
docker-compose down
```

## Contributing

If there are any additional dependencies, please list it out so I can add it to the Docker image.

Love, Fariz <3
