import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GROUND_TERMINAL = {
  _style: {
    entity:
      'shape=mxgraph.cisco.wireless.ground_terminal;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 99,
  _height: 122,
}

export function GroundTerminal(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GROUND_TERMINAL)} />
}
