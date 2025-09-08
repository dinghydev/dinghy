import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIPRION_2400 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.viprion_2400;',
  },
  _original_width: 168,
  _original_height: 60,
}

export function Viprion2400(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIPRION_2400}
      {...props}
      _style={extendStyle(VIPRION_2400, props)}
    />
  )
}
