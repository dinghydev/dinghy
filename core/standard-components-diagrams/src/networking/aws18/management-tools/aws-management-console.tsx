import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AWS_MANAGEMENT_CONSOLE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#ffffff;fillColor=#232F3E;dashed=0;verticalLabelPosition=middle;verticalAlign=bottom;align=center;html=1;whiteSpace=wrap;fontSize=10;fontStyle=1;spacing=3;shape=mxgraph.aws4.productIcon;prIcon=mxgraph.aws4.management_console;',
  _width: 80,
  _height: 120,
}

export function AwsManagementConsole(props: DiagramNodeProps) {
  return <Shape {...AWS_MANAGEMENT_CONSOLE} {...props} />
}
