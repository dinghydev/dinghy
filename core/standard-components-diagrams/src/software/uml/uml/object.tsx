import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OBJECT = {
  _style: {
    entity: 'html=1;whiteSpace=wrap;',
  },
  _width: 110,
  _height: 50,
}

export function Object(props: DiagramNodeProps) {
  return <Shape {...OBJECT} {...props} _style={extendStyle(OBJECT, props)} />
}
