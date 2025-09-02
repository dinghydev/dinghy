import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PATCH_MANAGER = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.patch_manager;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 85.5,
  _original_height: 90,
}

export function PatchManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...PATCH_MANAGER}
      {...props}
      _style={extendStyle(PATCH_MANAGER, props)}
    />
  )
}
