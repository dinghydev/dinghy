import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLADE_SERVER_2 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#A153A0;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0,0.5,0],[0.125,0.25,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[0.875,0.25,0],[1,0.5,0],[0.875,0.75,0],[0.75,1,0],[0.5,1,0],[0.125,0.75,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=mxgraph.cisco_safe.design.blank_device;resIcon=mxgraph.cisco_safe.design.blade_server_2;',
  _width: 50,
  _height: 45,
}

export function BladeServer2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BLADE_SERVER_2}
      {...props}
      _style={extendStyle(BLADE_SERVER_2, props)}
    />
  )
}
