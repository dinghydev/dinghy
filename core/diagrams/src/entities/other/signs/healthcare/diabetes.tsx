import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIABETES = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.diabetes;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 55,
}

export function Diabetes(props: NodeProps) {
  return (
    <Shape {...DIABETES} {...props} _style={extendStyle(DIABETES, props)} />
  )
}
