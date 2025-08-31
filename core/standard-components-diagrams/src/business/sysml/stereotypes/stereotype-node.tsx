import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEREOTYPE_NODE = {
  _style: 'shape=rect;html=1;whiteSpace=wrap;align=center;',
  _width: 160,
  _height: 80,
}

export function StereotypeNode(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEREOTYPE_NODE}
      {...props}
      _style={extendStyle(STEREOTYPE_NODE, props)}
    />
  )
}
