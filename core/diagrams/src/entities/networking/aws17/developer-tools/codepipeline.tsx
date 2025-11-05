import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CODEPIPELINE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.codepipeline;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 67.5,
  _original_height: 81,
}

export function Codepipeline(props: NodeProps) {
  return (
    <Shape
      {...CODEPIPELINE}
      {...props}
      _style={extendStyle(CODEPIPELINE, props)}
    />
  )
}
