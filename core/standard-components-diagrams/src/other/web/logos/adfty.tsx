import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ADFTY = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.adfty;fillColor=#66E8F3;gradientColor=#1C7CBA',
  },
  _original_width: 91.2,
  _original_height: 91.60000000000001,
}

export function Adfty(props: DiagramNodeProps) {
  return <Shape {...ADFTY} {...props} _style={extendStyle(ADFTY, props)} />
}
