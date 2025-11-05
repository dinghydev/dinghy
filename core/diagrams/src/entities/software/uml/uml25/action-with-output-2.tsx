import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACTION_WITH_OUTPUT_2 = {
  _style: {
    entity: 'text;verticalAlign=middle;align=left;html=1;',
  },
  _width: 1,
  _height: 60,
}

export function ActionWithOutput2(props: NodeProps) {
  return (
    <Shape
      {...ACTION_WITH_OUTPUT_2}
      {...props}
      _style={extendStyle(ACTION_WITH_OUTPUT_2, props)}
    />
  )
}
