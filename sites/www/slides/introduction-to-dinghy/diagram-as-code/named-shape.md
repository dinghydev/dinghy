```tsx [3-4,8]
    <Shape _dependsOn='Load Balancer'>Client</Shape>

const Client = (props: any) => 
  <Shape _dependsOn='Load Balancer' {...props} />

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
```