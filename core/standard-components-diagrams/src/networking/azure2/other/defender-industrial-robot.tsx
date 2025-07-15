import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEFENDER_INDUSTRIAL_ROBOT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Industrial_Robot.svg;',
  _width: 51.080000000000005,
  _height: 68,
}

export function DefenderIndustrialRobot(props: DiagramNodeProps) {
  return <Shape {...DEFENDER_INDUSTRIAL_ROBOT} {...props} />
}
