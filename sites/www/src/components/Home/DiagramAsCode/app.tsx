export default () => (
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
)
