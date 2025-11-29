import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STAKEHOLDER = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffccff;shape=mxgraph.archimate.motiv;motivType=stake',
  },
  _width: 100,
  _height: 75,
}

export function Stakeholder(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STAKEHOLDER)} />
}
