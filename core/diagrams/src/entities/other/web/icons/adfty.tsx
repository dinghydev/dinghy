import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ADFTY = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.adfty;fillColor=#66E8F3;gradientColor=#1C7CBA',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Adfty(props: DiagramNodeProps) {
  return <Shape {...ADFTY} {...props} _style={extendStyle(ADFTY, props)} />
}
