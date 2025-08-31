import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_BOX_EDGE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/migrate/Data_Box_Edge.svg;strokeColor=none;',
  },
  _width: 67,
  _height: 48,
}

export function DataBoxEdge(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_BOX_EDGE}
      {...props}
      _style={extendStyle(DATA_BOX_EDGE, props)}
    />
  )
}
