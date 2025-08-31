import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EDGE_MANAGEMENT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Edge_Management.svg;strokeColor=none;',
  },
  _width: 66,
  _height: 68,
}

export function EdgeManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...EDGE_MANAGEMENT}
      {...props}
      _style={extendStyle(EDGE_MANAGEMENT, props)}
    />
  )
}
