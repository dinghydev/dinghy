import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BIOHAZARD = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.biohazard;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 106,
  _height: 97,
}

export function Biohazard(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BIOHAZARD)} />
}
