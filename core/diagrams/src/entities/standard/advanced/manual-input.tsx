import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MANUAL_INPUT = {
  _style: {
    entity: 'shape=manualInput;whiteSpace=wrap;html=1;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function ManualInput(props: NodeProps) {
  return (
    <Shape
      {...MANUAL_INPUT}
      {...props}
      _style={extendStyle(MANUAL_INPUT, props)}
    />
  )
}
