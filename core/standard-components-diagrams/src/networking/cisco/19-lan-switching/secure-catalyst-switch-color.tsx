import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECURE_CATALYST_SWITCH_COLOR = {
  _style: {
    entity:
      'sketch=0;points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=secure_catalyst_switch_color;fillColor=#FAFAFA;strokeColor=#005073;',
  },
  _width: 60,
  _height: 60,
}

export function SecureCatalystSwitchColor(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURE_CATALYST_SWITCH_COLOR}
      {...props}
      _style={extendStyle(SECURE_CATALYST_SWITCH_COLOR, props)}
    />
  )
}
