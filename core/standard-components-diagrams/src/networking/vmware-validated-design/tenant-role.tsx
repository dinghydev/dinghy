import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TENANT_ROLE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.administrator;fillColor=#65B245;',
  _width: 21.5,
  _height: 50,
}

export function TenantRole(props: DiagramNodeProps) {
  return (
    <Shape
      {...TENANT_ROLE}
      {...props}
      _style={extendStyle(TENANT_ROLE, props)}
    />
  )
}
