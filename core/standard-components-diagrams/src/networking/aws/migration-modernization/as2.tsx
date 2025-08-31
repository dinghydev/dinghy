import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AS2 = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#01A88D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.transfer_family_aws_as2;',
  _width: 76,
  _height: 78,
}

export function As2(props: DiagramNodeProps) {
  return <Shape {...AS2} {...props} _style={extendStyle(AS2, props)} />
}
