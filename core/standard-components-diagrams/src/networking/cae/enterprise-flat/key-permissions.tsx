import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KEY_PERMISSIONS = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.key_permissions',
  _width: 26,
  _height: 50,
}

export function KeyPermissions(props: DiagramNodeProps) {
  return <Shape {...KEY_PERMISSIONS} {...props} />
}
