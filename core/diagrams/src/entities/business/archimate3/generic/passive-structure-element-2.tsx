import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PASSIVE_STRUCTURE_ELEMENT_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.passive;',
  },
  _width: 60,
  _height: 35,
}

export function PassiveStructureElement2(props: NodeProps) {
  return (
    <Shape
      {...PASSIVE_STRUCTURE_ELEMENT_2}
      {...props}
      _style={extendStyle(PASSIVE_STRUCTURE_ELEMENT_2, props)}
    />
  )
}
