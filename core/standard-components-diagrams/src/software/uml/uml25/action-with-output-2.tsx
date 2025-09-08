import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTION_WITH_OUTPUT_2 = {
  _style: {
    entity: 'text;verticalAlign=middle;align=left;html=1;',
  },
  _original_width: 1,
  _original_height: 60,
}

export function ActionWithOutput2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTION_WITH_OUTPUT_2}
      {...props}
      _style={extendStyle(ACTION_WITH_OUTPUT_2, props)}
    />
  )
}
