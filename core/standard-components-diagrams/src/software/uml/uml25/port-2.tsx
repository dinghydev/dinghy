import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PORT_2 = {
  _style: {
    entity:
      'fontStyle=0;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;spacingLeft=2;html=1;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function Port2(props: DiagramNodeProps) {
  return <Shape {...PORT_2} {...props} _style={extendStyle(PORT_2, props)} />
}
