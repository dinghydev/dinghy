import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CODEBUILD = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.codebuild;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function Codebuild(props: NodeProps) {
  return (
    <Shape {...CODEBUILD} {...props} _style={extendStyle(CODEBUILD, props)} />
  )
}
