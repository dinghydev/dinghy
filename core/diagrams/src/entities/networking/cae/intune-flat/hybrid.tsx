import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HYBRID = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.hybrid',
  },
  _width: 50,
  _height: 39,
}

export function Hybrid(props: NodeProps) {
  return <Shape {...HYBRID} {...props} _style={extendStyle(HYBRID, props)} />
}
