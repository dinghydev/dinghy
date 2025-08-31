import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LEFT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.left;strokeColor=#0080f0;',
  },
  _width: 6,
  _height: 12,
}

export function Left(props: DiagramNodeProps) {
  return <Shape {...LEFT} {...props} _style={extendStyle(LEFT, props)} />
}
