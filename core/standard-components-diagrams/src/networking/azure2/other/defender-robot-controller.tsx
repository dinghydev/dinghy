import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFENDER_ROBOT_CONTROLLER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Robot_Controller.svg;strokeColor=none;',
  _width: 66.16,
  _height: 68,
}

export function DefenderRobotController(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFENDER_ROBOT_CONTROLLER}
      {...props}
      _style={extendStyle(DEFENDER_ROBOT_CONTROLLER, props)}
    />
  )
}
