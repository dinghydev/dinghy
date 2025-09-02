import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIEW = {
  _style: {
    entity:
      'shape=folder;html=1;tabWidth=80;tabHeight=40;tabPosition=left;align=left;verticalAlign=top;spacingLeft=10;whiteSpace=wrap;',
  },
  _original_width: 160,
  _original_height: 120,
}

export function View(props: DiagramNodeProps) {
  return <Shape {...VIEW} {...props} _style={extendStyle(VIEW, props)} />
}
