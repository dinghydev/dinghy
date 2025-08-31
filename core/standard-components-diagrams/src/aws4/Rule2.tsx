import { Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RULE2 = {
  _color: { color: '#E7157B', fill: true },
  _border: 1,
  _shape: 'mxgraph.aws4.rule_2',
}

export function Rule2(props: DiagramNodeProps) {
  return <Shape {...RULE2} {...props} />
}
