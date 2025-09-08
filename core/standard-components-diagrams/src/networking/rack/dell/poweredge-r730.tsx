import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POWEREDGE_R730 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.poweredge_r730;',
  },
  _original_width: 162,
  _original_height: 30,
}

export function PoweredgeR730(props: DiagramNodeProps) {
  return (
    <Shape
      {...POWEREDGE_R730}
      {...props}
      _style={extendStyle(POWEREDGE_R730, props)}
    />
  )
}
