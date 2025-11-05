import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIGHTWEIGHT_AP = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.lightweight_ap;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 101,
  _height: 56,
}

export function LightweightAp(props: NodeProps) {
  return (
    <Shape
      {...LIGHTWEIGHT_AP}
      {...props}
      _style={extendStyle(LIGHTWEIGHT_AP, props)}
    />
  )
}
