import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEFENDER_SENSOR = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Sensor.svg;strokeColor=none;',
  _width: 68,
  _height: 50.28,
}

export function DefenderSensor(props: DiagramNodeProps) {
  return <Shape {...DEFENDER_SENSOR} {...props} />
}
