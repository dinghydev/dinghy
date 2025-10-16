import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LAYER_3_NEXUS_5K_SWITCH = {
  _style: {
    entity:
      'sketch=0;points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=layer3_nexus_5k_switch;fillColor=#FAFAFA;strokeColor=#005073;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Layer3Nexus5kSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...LAYER_3_NEXUS_5K_SWITCH}
      {...props}
      _style={extendStyle(LAYER_3_NEXUS_5K_SWITCH, props)}
    />
  )
}
