import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EDGE_MANAGEMENT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Edge_Management.svg;',
  _width: 66,
  _height: 68,
}

export function EdgeManagement(props: DiagramNodeProps) {
  return <Shape {...EDGE_MANAGEMENT} {...props} />
}
