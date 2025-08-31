import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOTS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.bots;',
  },
  _width: 60,
  _height: 57,
}

export function Bots(props: DiagramNodeProps) {
  return <Shape {...BOTS} {...props} _style={extendStyle(BOTS, props)} />
}
