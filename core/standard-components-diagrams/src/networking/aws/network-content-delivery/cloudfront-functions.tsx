import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUDFRONT_FUNCTIONS = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.cloudfront_functions;',
  _width: 78,
  _height: 78,
}

export function CloudfrontFunctions(props: DiagramNodeProps) {
  return <Shape {...CLOUDFRONT_FUNCTIONS} {...props} />
}
