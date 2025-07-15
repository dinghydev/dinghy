import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EDGE_HARDWARE_CENTER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Edge_Hardware_Center.svg;',
  _width: 68,
  _height: 68,
}

export function EdgeHardwareCenter(props: DiagramNodeProps) {
  return <Shape {...EDGE_HARDWARE_CENTER} {...props} />
}
