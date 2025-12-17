import { MoveToHere, Shape } from "@dinghy/base-components";
import {
    AwsCloud,
    AwsGlobalLogBucket,
    AwsRegionalLogBucket,
    AwsS3Backend,
} from "@dinghy/tf-aws/foundation";
import { CloudfrontSites } from "@dinghy/tf-aws/cloudfrontSites";

export const renderOptions = {
    cloudfrontSites: {
        "example.com": {
            origins: {
                root: {
                    target: "s3://example-com-website/www",
                },
                old_redirect: {
                    target: "https://new.example.com/{PATH}#from-old",
                    pathPattern: "/old/*",
                },
                subsite: {
                    target: "s3://example-com-subsite",
                    pathPattern: "/subsite/*",
                },
            },
            redirectFromNames: ["*.example.com"],
        },
    },
};

export default function App() {
    return (
        <ExampleCom>
            <AwsCloud region="eu-west-1">
                <CloudfrontSites />
                <Infrastructure />
            </AwsCloud>
        </ExampleCom>
    );
}

const ExampleCom = (props: any) => (
    <Shape _title="example.com website" {...props} />
);

const Infrastructure = (props: any) => {
    return (
        <Shape _distributed {...props}>
            <AwsS3Backend logEnabled />
            <AwsRegionalLogBucket />
            <AwsGlobalLogBucket />
            <MoveToHere includes="AwsRoute53Zone" />
        </Shape>
    );
};
