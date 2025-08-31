import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOTS_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.bots2;',
  },
  _width: 60,
  _height: 60,
}

export function Bots2(props: DiagramNodeProps) {
  return <Shape {...BOTS_2} {...props} _style={extendStyle(BOTS_2, props)} />
}
