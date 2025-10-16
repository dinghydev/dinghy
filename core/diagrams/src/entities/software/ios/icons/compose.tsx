import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPOSE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.compose;',
  },
  _original_width: 29.099999999999998,
  _original_height: 29.099999999999998,
}

export function Compose(props: DiagramNodeProps) {
  return <Shape {...COMPOSE} {...props} _style={extendStyle(COMPOSE, props)} />
}
