import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PATCH_MANAGER = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#E7157B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.patch_manager;',
  _width: 60,
  _height: 60,
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
