import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WAF = {
  _color: { color: '#8C4FFF', fill: true },
  _shape: { entity: 'mxgraph.aws4.waf' },
}

export function Waf(props: DiagramNodeProps) {
  return <Shape {...WAF} {...props} />
}
