import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SELECT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.select;fillColor=#0080f0;strokeColor=#ffffff;sketch=0;',
  },
  _original_width: 12,
  _original_height: 12,
}

export function Select(props: DiagramNodeProps) {
  return <Shape {...SELECT} {...props} _style={extendStyle(SELECT, props)} />
}
