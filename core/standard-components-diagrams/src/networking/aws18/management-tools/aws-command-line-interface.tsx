import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AWS_COMMAND_LINE_INTERFACE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#ffffff;fillColor=#232F3E;dashed=0;verticalLabelPosition=middle;verticalAlign=bottom;align=center;html=1;whiteSpace=wrap;fontSize=10;fontStyle=1;spacing=3;shape=mxgraph.aws4.productIcon;prIcon=mxgraph.aws4.command_line_interface;',
  _width: 80,
  _height: 120,
}

export function AwsCommandLineInterface(props: DiagramNodeProps) {
  return (
    <Shape
      {...AWS_COMMAND_LINE_INTERFACE}
      {...props}
      _style={extendStyle(AWS_COMMAND_LINE_INTERFACE, props)}
    />
  )
}
