import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON = {
  _style: {
    entity:
      'labelPosition=center;verticalLabelPosition=middle;align=center;html=1;shape=mxgraph.basic.button;dx=10;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function Button(props: DiagramNodeProps) {
  return <Shape {...BUTTON} {...props} _style={extendStyle(BUTTON, props)} />
}
