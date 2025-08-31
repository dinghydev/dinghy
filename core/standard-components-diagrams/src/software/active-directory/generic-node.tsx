import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GENERIC_NODE = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/generic_node.svg;strokeColor=none;',
  _width: 50,
  _height: 49,
}

export function GenericNode(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERIC_NODE}
      {...props}
      _style={extendStyle(GENERIC_NODE, props)}
    />
  )
}
