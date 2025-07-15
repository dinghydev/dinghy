import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HEALTH = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.health;',
  _width: 60,
  _height: 50.4,
}

export function Health(props: DiagramNodeProps) {
  return <Shape {...HEALTH} {...props} />
}
