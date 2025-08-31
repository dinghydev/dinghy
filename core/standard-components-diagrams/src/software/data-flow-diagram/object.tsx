import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OBJECT = {
  _style: {
    entity: 'shape=cloud;whiteSpace=wrap;html=1;',
  },
  _width: 120,
  _height: 120,
}

export function Object(props: DiagramNodeProps) {
  return <Shape {...OBJECT} {...props} _style={extendStyle(OBJECT, props)} />
}
