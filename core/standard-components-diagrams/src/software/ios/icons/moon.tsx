import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MOON = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.moon;',
  },
  _original_width: 29.4,
  _original_height: 29.4,
}

export function Moon(props: DiagramNodeProps) {
  return <Shape {...MOON} {...props} _style={extendStyle(MOON, props)} />
}
