import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PORT = {
  _style: {
    entity:
      'fontStyle=0;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;spacingLeft=2;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function Port(props: DiagramNodeProps) {
  return <Shape {...PORT} {...props} _style={extendStyle(PORT, props)} />
}
