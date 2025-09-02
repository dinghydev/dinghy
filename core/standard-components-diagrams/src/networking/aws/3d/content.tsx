import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.file;aspect=fixed;strokeColor=#2d6195;fillColor=#ffffff;',
  },
  _original_width: 30.8,
  _original_height: 70.6,
}

export function Content(props: DiagramNodeProps) {
  return <Shape {...CONTENT} {...props} _style={extendStyle(CONTENT, props)} />
}
