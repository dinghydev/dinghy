import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFENDER_ENGINEERING_STATION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Engineering_Station.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62.839999999999996,
}

export function DefenderEngineeringStation(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFENDER_ENGINEERING_STATION}
      {...props}
      _style={extendStyle(DEFENDER_ENGINEERING_STATION, props)}
    />
  )
}
