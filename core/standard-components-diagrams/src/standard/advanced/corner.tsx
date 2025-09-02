import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CORNER = {
  _style: {
    entity: 'shape=corner;whiteSpace=wrap;html=1;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Corner(props: DiagramNodeProps) {
  return <Shape {...CORNER} {...props} _style={extendStyle(CORNER, props)} />
}
