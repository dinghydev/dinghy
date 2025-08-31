import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERNET_GATEWAY = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.internetGateway;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  _width: 116.7,
  _height: 102.8,
}

export function InternetGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERNET_GATEWAY}
      {...props}
      _style={extendStyle(INTERNET_GATEWAY, props)}
    />
  )
}
