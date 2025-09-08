import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TABLE_4 = {
  _style: {
    entity:
      'childLayout=tableLayout;recursiveResize=0;shadow=0;fillColor=none;',
  },
  _original_width: 180,
  _original_height: 140,
}

export function Table4(props: DiagramNodeProps) {
  return <Shape {...TABLE_4} {...props} _style={extendStyle(TABLE_4, props)} />
}
