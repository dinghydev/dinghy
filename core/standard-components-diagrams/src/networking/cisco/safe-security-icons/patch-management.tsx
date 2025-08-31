import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PATCH_MANAGEMENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.patch_management;',
  },
  _width: 50,
  _height: 39,
}

export function PatchManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...PATCH_MANAGEMENT}
      {...props}
      _style={extendStyle(PATCH_MANAGEMENT, props)}
    />
  )
}
