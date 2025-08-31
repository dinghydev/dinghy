import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OR = {
  _style: 'shape=xor;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 80,
}

export function Or(props: DiagramNodeProps) {
  return <Shape {...OR} {...props} _style={extendStyle(OR, props)} />
}
