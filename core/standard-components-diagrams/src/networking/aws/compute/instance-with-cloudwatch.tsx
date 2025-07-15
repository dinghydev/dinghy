import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INSTANCE_WITH_CLOUDWATCH = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.instance_with_cloudwatch2;',
  _width: 48,
  _height: 48,
}

export function InstanceWithCloudwatch(props: DiagramNodeProps) {
  return <Shape {...INSTANCE_WITH_CLOUDWATCH} {...props} />
}
