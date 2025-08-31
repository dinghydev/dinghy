import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABLE = {
  _style: {
    entity:
      'childLayout=tableLayout;recursiveResize=0;strokeColor=#98bf21;fillColor=#A7C942;shadow=1;',
  },
  _width: 280,
  _height: 160,
}

export function Table(props: DiagramNodeProps) {
  return <Shape {...TABLE} {...props} _style={extendStyle(TABLE, props)} />
}
