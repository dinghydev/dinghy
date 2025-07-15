import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AWS_TOOLS_AND_SDKS = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#ffffff;fillColor=#232F3E;dashed=0;verticalLabelPosition=middle;verticalAlign=bottom;align=center;html=1;whiteSpace=wrap;fontSize=10;fontStyle=1;spacing=3;shape=mxgraph.aws4.productIcon;prIcon=mxgraph.aws4.tools_and_sdks;',
  _width: 80,
  _height: 110,
}

export function AwsToolsAndSdks(props: DiagramNodeProps) {
  return <Shape {...AWS_TOOLS_AND_SDKS} {...props} />
}
