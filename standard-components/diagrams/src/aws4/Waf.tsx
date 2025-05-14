import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WAF = {
  _color: { color: '#8C4FFF', fill: true },
  _shape: 'mxgraph.aws4.waf',
}

export function Waf(props: DiagramNodeProps) {
  return <Shape {...WAF} {...props} />
}
