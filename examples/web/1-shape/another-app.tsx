import { Shape } from '@reactiac/base-components'

export function App() {
  return (
    <Shape>
      Web App
      <Shape _dependsOn='Load Balancer'>Client</Shape>
      <Shape>
        Cloud
        <Shape _direction='vertical'>
          Public Subnet
          <Shape _dependsOn='Application'>Load Balancer</Shape>
          <Shape _dependsBy='Load Balancer'>Firewall</Shape>
        </Shape>
        <Shape _direction='vertical'>
          Private Subnet
          <Shape _dependsOn='Postgres'>Application</Shape>
          <Shape>Postgres</Shape>
        </Shape>
      </Shape>
    </Shape>
  )
}
