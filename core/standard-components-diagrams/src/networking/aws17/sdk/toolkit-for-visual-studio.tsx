import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TOOLKIT_FOR_VISUAL_STUDIO = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.toolkit_for_visual_studio;fillColor=#53B1CB;gradientColor=none;',
  },
  _original_width: 70.5,
  _original_height: 78,
}

export function ToolkitForVisualStudio(props: DiagramNodeProps) {
  return (
    <Shape
      {...TOOLKIT_FOR_VISUAL_STUDIO}
      {...props}
      _style={extendStyle(TOOLKIT_FOR_VISUAL_STUDIO, props)}
    />
  )
}
