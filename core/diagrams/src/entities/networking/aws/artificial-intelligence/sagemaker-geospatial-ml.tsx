import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAGEMAKER_GEOSPATIAL_ML = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#01A88D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.sagemaker_geospatial_ml;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function SagemakerGeospatialMl(props: NodeProps) {
  return (
    <Shape
      {...SAGEMAKER_GEOSPATIAL_ML}
      {...props}
      _style={extendStyle(SAGEMAKER_GEOSPATIAL_ML, props)}
    />
  )
}
