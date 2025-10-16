export default function App() {
    return (
        <WebApp>
            <Client />
            <Cloud>
                <PublicSubnet>
                    <LoadBalancer />
                    <Firewall />
                </PublicSubnet>
                <PrivateSubnet>
                    <Application />
                    <Postgres />
                </PrivateSubnet>
            </Cloud>
        </WebApp>
    );
}
