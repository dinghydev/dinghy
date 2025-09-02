import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BACK = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.back;',
  },
  _original_width: 30,
  _original_height: 25.5,
}

export function Back(props: DiagramNodeProps) {
  return <Shape {...BACK} {...props} _style={extendStyle(BACK, props)} />
}
