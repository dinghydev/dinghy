import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DISTRIBUTION_POINT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#515151;shape=mxgraph.mscae.system_center.distribution_point',
  },
  _original_width: 44,
  _original_height: 50,
}

export function DistributionPoint(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISTRIBUTION_POINT}
      {...props}
      _style={extendStyle(DISTRIBUTION_POINT, props)}
    />
  )
}
