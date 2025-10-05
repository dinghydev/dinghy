import {
    SequenceDiagram,
} from "@dinghy/standard-components-diagrams/sequenceDiagram";

import {
    Client,
    // Servers,
    User,
} from "@dinghy/standard-components-diagrams/awsGeneralResources";

const sequenceDiagram = {
    title: "Sequence Diagram from data",
    participants: {
        User: {
            icon: User,
        },
        Client: {
            icon: Client,
        },
        // Servers: {
        //     icon: Servers,
        // },
    },
    messages: [
        {
            from: "User",
            to: "Servers",
            message: "M1",
        },
        {
            from: "Servers",
            to: "Client",
            message: "M2",
        },
        {
            from: "Client",
            to: "Servers",
            message: "M3",
            return: true,
        },
        {
            from: "Servers",
            to: "User",
            message: "M4",
            return: true,
        },
        {
            from: "User",
            to: "User",
            message: "self",
        },
        {
            from: "User",
            to: "Client",
            message: "M1",
        },
        {
            from: "Client",
            to: "Servers",
            message: "M2",
        },
        {
            from: "Servers",
            to: "Client",
            return: true,
        },
        {
            from: "Client",
            to: "User",
            return: true,
        },
        {
            from: "User",
            to: "Client",
            message: "M1",
        },
        {
            from: "Client",
            to: "Servers",
            message: "M2",
        },
        {
            from: "Servers",
            to: "Client",
            return: true,
        },
        {
            from: "Client",
            to: "User",
            return: true,
        },
        {
            from: "User",
            to: "User",
            message: "self",
        },
        {
            from: "User",
            to: "Client",
            message: "M1",
        },
        {
            from: "Client",
            to: "Servers",
            message: "M2",
        },
        {
            from: "Servers",
            to: "Client",
            return: true,
        },
        {
            from: "Client",
            to: "Client",
            message: "self",
        },
        {
            from: "Client",
            to: "Servers",
            message: "M3",
        },
        {
            from: "Servers",
            to: "Client",
            return: true,
        },
        {
            from: "Client",
            to: "User",
            return: true,
        },
        {
            from: "User",
            to: "User",
            message: "self3",
        },
    ],
    interactions: [
        {
            title: "Interaction 1",
            messages: [
                {
                    from: "User",
                    to: "Client",
                    message: "M1",
                },
                {
                    from: "Client",
                    to: "Servers",
                    message: "M2",
                },
            ],
        },
        {
            title: "Interaction 2",
            messages: [
                {
                    from: "User",
                    to: "Client",
                    message: "M1",
                },
                {
                    from: "Client",
                    to: "Servers",
                    message: "M2",
                },
            ],
        },
        {
            messages: [
                {
                    from: "User",
                    to: "Client",
                    message: "M1",
                },
                {
                    from: "Client",
                    to: "Servers",
                    message: "M2",
                },
                {
                    from: "Servers",
                    to: "Client",
                    message: "M3",
                    return: true,
                },
                {
                    from: "Client",
                    to: "User",
                    message: "M4",
                    return: true,
                },
            ],
        },
        {
            messages: [
                {
                    from: "User",
                    to: "Client",
                    message: "M1",
                },
                {
                    from: "Client",
                    to: "Servers",
                    message: "M2",
                },
                {
                    from: "Servers",
                    to: "Client",
                    message: "M3",
                    return: true,
                },
                {
                    from: "Client",
                    to: "User",
                    message: "M4",
                    return: true,
                },
            ],
        },
    ],
};

export default function App() {
    return <SequenceDiagram {...sequenceDiagram} />;
}
