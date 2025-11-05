import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TENANT_KEY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.tenant_key;',
  },
  _width: 25.5,
  _height: 50,
}

export function TenantKey(props: NodeProps) {
  return (
    <Shape {...TENANT_KEY} {...props} _style={extendStyle(TENANT_KEY, props)} />
  )
}
