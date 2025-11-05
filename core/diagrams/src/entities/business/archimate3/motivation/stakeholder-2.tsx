import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STAKEHOLDER_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.role;',
  },
  _width: 60,
  _height: 35,
}

export function Stakeholder2(props: NodeProps) {
  return (
    <Shape
      {...STAKEHOLDER_2}
      {...props}
      _style={extendStyle(STAKEHOLDER_2, props)}
    />
  )
}
