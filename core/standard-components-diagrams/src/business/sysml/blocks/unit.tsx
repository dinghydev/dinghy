import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UNIT = {
  _style: {
    entity: 'shape=rect;html=1;overflow=fill;whiteSpace=wrap;',
  },
  _original_width: 200,
  _original_height: 60,
}

export function Unit(props: DiagramNodeProps) {
  return <Shape {...UNIT} {...props} _style={extendStyle(UNIT, props)} />
}
