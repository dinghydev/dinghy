import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COGNITO = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.cognito;fillColor=#AD688B;gradientColor=none;',
  },
  _width: 76.5,
  _height: 93,
}

export function Cognito(props: DiagramNodeProps) {
  return <Shape {...COGNITO} {...props} _style={extendStyle(COGNITO, props)} />
}
