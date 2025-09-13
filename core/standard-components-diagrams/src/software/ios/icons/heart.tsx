import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HEART = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.heart;',
  },
  _width: 30.599999999999998,
  _height: 27.3,
}

export function Heart(props: DiagramNodeProps) {
  return <Shape {...HEART} {...props} _style={extendStyle(HEART, props)} />
}
