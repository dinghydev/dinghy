import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CORPORATE_DATA_CENTER = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.corporate_data_center;',
  _width: 53,
  _height: 78,
}

export function CorporateDataCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...CORPORATE_DATA_CENTER}
      {...props}
      _style={extendStyle(CORPORATE_DATA_CENTER, props)}
    />
  )
}
