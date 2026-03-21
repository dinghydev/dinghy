```tsx [5,8]
const Client = (props: any) => 
  <Shape _dependsOn='Load Balancer' {...props} />

import * as awsGeneralResources from 
    '@dinghy/diagrams/entitiesAwsGeneralResources'

const Client = (props: any) => (
  <awsGeneralResources.Client
    _dependsOn='Load Balancer'
    {...props}
  />
)
```