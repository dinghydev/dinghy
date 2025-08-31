import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISTRIBUTION_POINT = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#515151;shape=mxgraph.mscae.system_center.distribution_point',
  _width: 44,
  _height: 50,
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
