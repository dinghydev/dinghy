import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ORDER_COMMAND = {
  _style: {
    entity: 'shape=manualInput;whiteSpace=wrap;html=1;dashed=0;size=15;',
  },
  _original_width: 100,
  _original_height: 50,
}

export function OrderCommand(props: DiagramNodeProps) {
  return (
    <Shape
      {...ORDER_COMMAND}
      {...props}
      _style={extendStyle(ORDER_COMMAND, props)}
    />
  )
}
