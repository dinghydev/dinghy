import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABLE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Table.svg;',
  _width: 64,
  _height: 52,
}

export function Table(props: DiagramNodeProps) {
  return <Shape {...TABLE} {...props} />
}
