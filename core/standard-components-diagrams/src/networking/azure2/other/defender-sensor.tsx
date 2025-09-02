import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFENDER_SENSOR = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Sensor.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 50.28,
}

export function DefenderSensor(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFENDER_SENSOR}
      {...props}
      _style={extendStyle(DEFENDER_SENSOR, props)}
    />
  )
}
