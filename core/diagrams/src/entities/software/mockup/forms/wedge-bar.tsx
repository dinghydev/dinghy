import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEDGE_BAR = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.forms.uRect;fontSize=17;fontColor=#666666;align=left;spacingLeft=5;strokeColor=#666666;',
  },
  _width: 0,
  _height: 30,
}

export function WedgeBar(props: NodeProps) {
  return (
    <Shape {...WEDGE_BAR} {...props} _style={extendStyle(WEDGE_BAR, props)} />
  )
}
