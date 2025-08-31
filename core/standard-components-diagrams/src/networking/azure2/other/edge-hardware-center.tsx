import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EDGE_HARDWARE_CENTER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Edge_Hardware_Center.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function EdgeHardwareCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...EDGE_HARDWARE_CENTER}
      {...props}
      _style={extendStyle(EDGE_HARDWARE_CENTER, props)}
    />
  )
}
