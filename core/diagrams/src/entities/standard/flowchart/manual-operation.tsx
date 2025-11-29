import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MANUAL_OPERATION = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=trapezoid;perimeter=trapezoidPerimeter;whiteSpace=wrap;size=0.23;arcSize=10;flipV=1;labelPosition=center;align=center;',
  },
  _width: 100,
  _height: 60,
}

export function ManualOperation(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MANUAL_OPERATION)} />
}
