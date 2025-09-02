import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADD = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.add;fillColor=#00dd00;strokeColor=#ffffff;sketch=0;',
  },
  _original_width: 12,
  _original_height: 12,
}

export function Add(props: DiagramNodeProps) {
  return <Shape {...ADD} {...props} _style={extendStyle(ADD, props)} />
}
