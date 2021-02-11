# Usage

## Command-Line Interface

You can run conda-store from the command line using the command `conda_store`.

# Building with conda-store

The command line can send build instructions to conda store to initalize new builds.

`conda_store build` with a set of parameters and an included `environment.yaml` file.

# Environment Managment

You can create, list, and [todo: edit] environments. 

`conda_store env list` lists all of the environments avialable in the store. 
`conda_store env package list -n <env_name>` lists all the packages of the given environment.

# Server 

Serve your own conda-store server using the serve command: 

`conda_store serve`

and you should be able to navigate to localhost:5000 for the webui.
