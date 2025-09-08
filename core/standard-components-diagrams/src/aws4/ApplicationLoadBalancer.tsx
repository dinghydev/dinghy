import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APPLICATION_LOAD_BALANCER = {
  _color: { color: '#8C4FFF', fill: true },
  _border: 0,
  _shape: 'mxgraph.aws4.application_load_balancer',
}

export function ApplicationLoadBalancer(props: DiagramNodeProps) {
  return <Shape {...APPLICATION_LOAD_BALANCER} {...props} />
}
