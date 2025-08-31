import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENERGY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.energy;',
  },
  _width: 45,
  _height: 60,
}

export function Energy(props: DiagramNodeProps) {
  return <Shape {...ENERGY} {...props} _style={extendStyle(ENERGY, props)} />
}
