import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEFENDER_ENGINEERING_STATION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Engineering_Station.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62.839999999999996,
}

export function DefenderEngineeringStation(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, DEFENDER_ENGINEERING_STATION)}
    />
  )
}
