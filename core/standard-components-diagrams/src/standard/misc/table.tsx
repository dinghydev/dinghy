import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABLE = {
  _style:
    'childLayout=tableLayout;recursiveResize=0;strokeColor=#98bf21;fillColor=#A7C942;shadow=1;',
  _width: 280,
  _height: 160,
}

export function Table(props: DiagramNodeProps) {
  return <Shape {...TABLE} {...props} />
}
