import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLASS_4_5_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.class_4_5_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 69,
  _original_height: 90,
}

export function Class45Switch(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLASS_4_5_SWITCH}
      {...props}
      _style={extendStyle(CLASS_4_5_SWITCH, props)}
    />
  )
}
