import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AWS_COST_EXPLORER = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#ffffff;fillColor=#232F3E;dashed=0;verticalLabelPosition=middle;verticalAlign=bottom;align=center;html=1;whiteSpace=wrap;fontSize=10;fontStyle=1;spacing=3;shape=mxgraph.aws4.productIcon;prIcon=mxgraph.aws4.cost_explorer;',
  _width: 80,
  _height: 110,
}

export function AwsCostExplorer(props: DiagramNodeProps) {
  return (
    <Shape
      {...AWS_COST_EXPLORER}
      {...props}
      _style={extendStyle(AWS_COST_EXPLORER, props)}
    />
  )
}
