import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_BOX_EDGE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/migrate/Data_Box_Edge.svg;',
  _width: 67,
  _height: 48,
}

export function DataBoxEdge(props: DiagramNodeProps) {
  return <Shape {...DATA_BOX_EDGE} {...props} />
}
