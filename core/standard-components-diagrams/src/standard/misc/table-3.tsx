import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABLE_3 = {
  _style: {
    entity:
      'childLayout=tableLayout;recursiveResize=0;shadow=0;fillColor=none;strokeColor=#C0C0C0;',
  },
  _original_width: 180,
  _original_height: 140,
}

export function Table3(props: DiagramNodeProps) {
  return <Shape {...TABLE_3} {...props} _style={extendStyle(TABLE_3, props)} />
}
