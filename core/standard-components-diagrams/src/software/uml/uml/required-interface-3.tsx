import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REQUIRED_INTERFACE_3 = {
  _style: {
    entity:
      'ellipse;whiteSpace=wrap;html=1;align=center;aspect=fixed;fillColor=none;strokeColor=none;resizable=0;perimeter=centerPerimeter;rotatable=0;allowArrows=0;points=[];outlineConnect=1;',
  },
  _width: 1,
  _height: 20,
}

export function RequiredInterface3(props: DiagramNodeProps) {
  return (
    <Shape
      {...REQUIRED_INTERFACE_3}
      {...props}
      _style={extendStyle(REQUIRED_INTERFACE_3, props)}
    />
  )
}
