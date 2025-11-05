import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ORDER_COMMAND = {
  _style: {
    entity: 'shape=manualInput;whiteSpace=wrap;html=1;dashed=0;size=15;',
  },
  _width: 100,
  _height: 50,
}

export function OrderCommand(props: NodeProps) {
  return (
    <Shape
      {...ORDER_COMMAND}
      {...props}
      _style={extendStyle(ORDER_COMMAND, props)}
    />
  )
}
