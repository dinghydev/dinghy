import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REQUIRED_INTERFACE_3 = {
  _style: {
    entity:
      'ellipse;whiteSpace=wrap;html=1;align=center;aspect=fixed;fillColor=none;strokeColor=none;resizable=0;perimeter=centerPerimeter;rotatable=0;allowArrows=0;points=[];outlineConnect=1;',
  },
  _width: 1,
  _height: 20,
}

export function RequiredInterface3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, REQUIRED_INTERFACE_3)} />
}
