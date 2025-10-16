import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const UNIT = {
  _style: {
    entity: 'shape=rect;html=1;overflow=fill;whiteSpace=wrap;',
  },
  _width: 200,
  _height: 60,
}

export function Unit(props: DiagramNodeProps) {
  return <Shape {...UNIT} {...props} _style={extendStyle(UNIT, props)} />
}
