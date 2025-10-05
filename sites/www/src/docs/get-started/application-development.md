---
sidebar_position: 80
---

# Application Development

Most example you having see in the Get Started section is small single file. It
will be case for many use case perticular for diagrams. Feel free to use your
favourte editor editors or IDE to edit the tsx or yaml files.

## VS Code

We recommend [VS Code](https://code.visualstudio.com/) with
[Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers)
extension. Once you have those installed, you may use following command to open
your project.

### dinghy dc

You may run `dinghy dc` or `dinghy devcontainer` in the project folder to open
your project in devcontainer. The devcontainer is a full-featured development
environment which has deno language server running which give you nice
autocomplete developer experience.

The devcontainer is where [Dinghy Engine](./architecture#engine) lives, so you
can run engine command directly.

## Other IDEs

### Cursor

Cursor had been used to develop the Dinghy app without problem. However it has
been [broken](https://github.com/cursor/cursor/issues/3331) since cursor's own
devcontainer implementation. The known broken function is the host's docker
authentication won't be avaiable inside devcontainer. You might get away with
this limitation by pull the image manually if it failed to pull the requested
image.

### Jetbrains IDEs

Jetbrains IDEs has basic
[devcontainer](https://www.jetbrains.com/help/idea/connect-to-devcontainer.html)
support, however it requires
[java](https://www.jetbrains.com/help/idea/prerequisites-for-dev-containers.html#remote_container)
on the remote container which prevent we support the IDE as add java related
support will increase the base docker image size significantly.

But feel free to develop with Jetbrains IDEs as it offer superior edit and git
developer experience. Just run Dinghy Cli when needed to interact with Engine.
