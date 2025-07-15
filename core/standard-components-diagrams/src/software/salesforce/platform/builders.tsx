import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUILDERS = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.builders;',
  _width: 55.2,
  _height: 60,
}

export function Builders(props: DiagramNodeProps) {
  return <Shape {...BUILDERS} {...props} />
}
