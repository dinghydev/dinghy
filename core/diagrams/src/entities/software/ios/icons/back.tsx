import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BACK = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.back;',
  },
  _width: 30,
  _height: 25.5,
}

export function Back(props: DiagramNodeProps) {
  return <Shape {...BACK} {...props} _style={extendStyle(BACK, props)} />
}
