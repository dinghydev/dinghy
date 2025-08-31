import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABLE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Table.svg;strokeColor=none;',
  },
  _width: 64,
  _height: 52,
}

export function Table(props: DiagramNodeProps) {
  return <Shape {...TABLE} {...props} _style={extendStyle(TABLE, props)} />
}
