import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BOTS = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.bots;',
  _width: 60,
  _height: 57,
}

export function Bots(props: DiagramNodeProps) {
  return <Shape {...BOTS} {...props} />
}
