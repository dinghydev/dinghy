import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STUDIO_WEB_STUDIO = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.studio_web_studio;',
  },
  _original_width: 50,
  _original_height: 42.985,
}

export function StudioWebStudio(props: NodeProps) {
  return (
    <Shape
      {...STUDIO_WEB_STUDIO}
      {...props}
      _style={extendStyle(STUDIO_WEB_STUDIO, props)}
    />
  )
}
