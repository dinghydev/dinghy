import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIPRION_4800 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.viprion_4800;',
  },
  _width: 168,
  _height: 320,
}

export function Viprion4800(props: NodeProps) {
  return (
    <Shape
      {...VIPRION_4800}
      {...props}
      _style={extendStyle(VIPRION_4800, props)}
    />
  )
}
