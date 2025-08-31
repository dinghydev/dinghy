import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LAYER_3_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.layer_3_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 60,
  _height: 60,
}

export function Layer3Switch(props: DiagramNodeProps) {
  return (
    <Shape
      {...LAYER_3_SWITCH}
      {...props}
      _style={extendStyle(LAYER_3_SWITCH, props)}
    />
  )
}
