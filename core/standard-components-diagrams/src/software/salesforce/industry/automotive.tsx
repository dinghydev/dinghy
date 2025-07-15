import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AUTOMOTIVE = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.automotive;',
  _width: 60,
  _height: 60,
}

export function Automotive(props: DiagramNodeProps) {
  return <Shape {...AUTOMOTIVE} {...props} />
}
