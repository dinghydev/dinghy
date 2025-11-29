import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHAPEL = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.chapel;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 72,
  _height: 98,
}

export function Chapel(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHAPEL)} />
}
