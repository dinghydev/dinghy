import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FORWARD = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.forward;',
  },
  _original_width: 30,
  _original_height: 16.8,
}

export function Forward(props: DiagramNodeProps) {
  return <Shape {...FORWARD} {...props} _style={extendStyle(FORWARD, props)} />
}
