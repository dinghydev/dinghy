import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

const COLOR = '#DD344C'

export const NETWORK_FIREWALL_ENDPOINTS: DiagramNodeProps = {
  _shape: {
    entity: 'mxgraph.aws4.network_firewall_endpoints',
  },
  _style: {
    element: {
      strokeColor: COLOR,
      fontColor: COLOR,
    },
    entity: {
      fillColor: COLOR,
    },
  },
}

export function NetworkFirewallEndpoints(props: DiagramNodeProps) {
  return <Shape {...NETWORK_FIREWALL_ENDPOINTS} {...props} />
}
