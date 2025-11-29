import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLASS_4_5_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.class_4_5_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 69,
  _height: 90,
}

export function Class45Switch(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CLASS_4_5_SWITCH)} />
}
