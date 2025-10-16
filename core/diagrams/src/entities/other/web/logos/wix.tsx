import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WIX = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.wix;strokeColor=#dddddd',
  },
  _original_width: 74,
  _original_height: 61.6,
}

export function Wix(props: DiagramNodeProps) {
  return <Shape {...WIX} {...props} _style={extendStyle(WIX, props)} />
}
