import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ATTRIBUTE = {
  _style: 'ellipse;whiteSpace=wrap;html=1;align=center;',
  _width: 100,
  _height: 40,
}

export function Attribute(props: DiagramNodeProps) {
  return (
    <Shape {...ATTRIBUTE} {...props} _style={extendStyle(ATTRIBUTE, props)} />
  )
}
