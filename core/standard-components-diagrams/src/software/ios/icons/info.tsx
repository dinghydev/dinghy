import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INFO = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.info;',
  },
  _width: 30,
  _height: 30,
}

export function Info(props: DiagramNodeProps) {
  return <Shape {...INFO} {...props} _style={extendStyle(INFO, props)} />
}
