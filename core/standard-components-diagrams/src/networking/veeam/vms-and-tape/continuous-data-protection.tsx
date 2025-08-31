import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTINUOUS_DATA_PROTECTION = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.continuous_data_protection;',
  _width: 44.8,
  _height: 44.8,
}

export function ContinuousDataProtection(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTINUOUS_DATA_PROTECTION}
      {...props}
      _style={extendStyle(CONTINUOUS_DATA_PROTECTION, props)}
    />
  )
}
