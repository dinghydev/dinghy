import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BELL = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.bell;',
  },
  _original_width: 24,
  _original_height: 23.099999999999998,
}

export function Bell(props: DiagramNodeProps) {
  return <Shape {...BELL} {...props} _style={extendStyle(BELL, props)} />
}
