import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIEW_NAME = {
  _style: {
    entity:
      'shape=folder;tabWidth=80;tabHeight=20;tabPosition=left;html=1;whiteSpace=wrap;align=center;',
  },
  _width: 160,
  _height: 80,
}

export function ViewName(props: DiagramNodeProps) {
  return (
    <Shape {...VIEW_NAME} {...props} _style={extendStyle(VIEW_NAME, props)} />
  )
}
