import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TROPHY = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.trophy;',
  },
  _original_width: 28.5,
  _original_height: 30,
}

export function Trophy(props: DiagramNodeProps) {
  return <Shape {...TROPHY} {...props} _style={extendStyle(TROPHY, props)} />
}
