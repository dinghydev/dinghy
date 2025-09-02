import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFENDER_INDUSTRIAL_ROBOT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Industrial_Robot.svg;strokeColor=none;',
  },
  _original_width: 51.080000000000005,
  _original_height: 68,
}

export function DefenderIndustrialRobot(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFENDER_INDUSTRIAL_ROBOT}
      {...props}
      _style={extendStyle(DEFENDER_INDUSTRIAL_ROBOT, props)}
    />
  )
}
