import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUDWATCH_SYNTHETICS = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#E7157B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.cloudwatch_synthetics;',
  _width: 78,
  _height: 77,
}

export function CloudwatchSynthetics(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUDWATCH_SYNTHETICS}
      {...props}
      _style={extendStyle(CLOUDWATCH_SYNTHETICS, props)}
    />
  )
}
