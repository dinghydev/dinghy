import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXECUTION_REGION = {
  _style: {
    entity:
      'html=1;dashed=0;rounded=1;absoluteArcSize=1;arcSize=20;verticalAlign=middle;align=center;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 50,
}

export function ExecutionRegion(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EXECUTION_REGION)} />
}
