import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEVICE_TRAJECTORY = {
  _style:
    'fillColor=#28A8E0;verticalLabelPosition=bottom;sketch=0;html=1;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0.145,0.145,0],[0.5,0,0],[0.855,0.145,0],[1,0.5,0],[0.855,0.855,0],[0.5,1,0],[0.145,0.855,0],[0,0.5,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=ellipse;resIcon=mxgraph.cisco_safe.capability.device_trajectory;',
  _width: 43,
  _height: 43,
}

export function DeviceTrajectory(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEVICE_TRAJECTORY}
      {...props}
      _style={extendStyle(DEVICE_TRAJECTORY, props)}
    />
  )
}
