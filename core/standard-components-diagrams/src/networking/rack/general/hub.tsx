import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HUB = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.general.hub;',
  },
  _original_width: 160,
  _original_height: 30,
}

export function Hub(props: DiagramNodeProps) {
  return <Shape {...HUB} {...props} _style={extendStyle(HUB, props)} />
}
