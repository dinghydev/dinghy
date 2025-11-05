import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CODEDEPLOY = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.codedeploy;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 67.5,
  _original_height: 81,
}

export function Codedeploy(props: NodeProps) {
  return (
    <Shape {...CODEDEPLOY} {...props} _style={extendStyle(CODEDEPLOY, props)} />
  )
}
