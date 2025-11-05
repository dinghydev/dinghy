import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEST_MESSAGE = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.test_message;fillColor=#c0f5a9',
  },
  _width: 150,
  _height: 90,
}

export function TestMessage(props: NodeProps) {
  return (
    <Shape
      {...TEST_MESSAGE}
      {...props}
      _style={extendStyle(TEST_MESSAGE, props)}
    />
  )
}
