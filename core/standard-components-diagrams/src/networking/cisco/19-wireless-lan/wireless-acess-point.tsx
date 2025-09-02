import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WIRELESS_ACESS_POINT = {
  _style: {
    entity:
      'points=[[0.03,0.36,0],[0.18,0,0],[0.5,0.34,0],[0.82,0,0],[0.97,0.36,0],[1,0.67,0],[0.975,0.975,0],[0.5,1,0],[0.025,0.975,0],[0,0.67,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.wireless_access_point;fillColor=#005073;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function WirelessAcessPoint(props: DiagramNodeProps) {
  return (
    <Shape
      {...WIRELESS_ACESS_POINT}
      {...props}
      _style={extendStyle(WIRELESS_ACESS_POINT, props)}
    />
  )
}
