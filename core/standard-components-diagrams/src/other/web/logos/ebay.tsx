import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EBAY = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.ebay',
  },
  _original_width: 81.2,
  _original_height: 34.4,
}

export function Ebay(props: DiagramNodeProps) {
  return <Shape {...EBAY} {...props} _style={extendStyle(EBAY, props)} />
}
