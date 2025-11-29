import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KIDNEY = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.kidney;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 71,
  _height: 98,
}

export function Kidney(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, KIDNEY)} />
}
