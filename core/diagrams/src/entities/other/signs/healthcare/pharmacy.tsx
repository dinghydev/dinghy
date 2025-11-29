import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PHARMACY = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.pharmacy;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 53,
  _height: 98,
}

export function Pharmacy(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PHARMACY)} />
}
