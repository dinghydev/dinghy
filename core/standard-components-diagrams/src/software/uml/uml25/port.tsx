import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PORT = {
  _style:
    'fontStyle=0;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;spacingLeft=2;',
  _width: 30,
  _height: 30,
}

export function Port(props: DiagramNodeProps) {
  return <Shape {...PORT} {...props} _style={extendStyle(PORT, props)} />
}
