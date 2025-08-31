import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEALTH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.health;',
  },
  _width: 60,
  _height: 50.4,
}

export function Health(props: DiagramNodeProps) {
  return <Shape {...HEALTH} {...props} _style={extendStyle(HEALTH, props)} />
}
