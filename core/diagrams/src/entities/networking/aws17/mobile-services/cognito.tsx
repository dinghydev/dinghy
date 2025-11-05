import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COGNITO = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.cognito;fillColor=#AD688B;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function Cognito(props: NodeProps) {
  return <Shape {...COGNITO} {...props} _style={extendStyle(COGNITO, props)} />
}
