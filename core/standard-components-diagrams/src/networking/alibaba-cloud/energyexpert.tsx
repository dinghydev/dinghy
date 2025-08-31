import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENERGYEXPERT = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.energyexpert;',
  _width: 43.199999999999996,
  _height: 41.699999999999996,
}

export function Energyexpert(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENERGYEXPERT}
      {...props}
      _style={extendStyle(ENERGYEXPERT, props)}
    />
  )
}
