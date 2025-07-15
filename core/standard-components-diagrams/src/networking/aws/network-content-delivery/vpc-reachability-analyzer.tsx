import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VPC_REACHABILITY_ANALYZER = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.vpc_reachability_analyzer;',
  _width: 78,
  _height: 78,
}

export function VpcReachabilityAnalyzer(props: DiagramNodeProps) {
  return <Shape {...VPC_REACHABILITY_ANALYZER} {...props} />
}
