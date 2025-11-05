import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AUTHENTICATION_MS_ENTRA_ID = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.authentication_ms_entra_id;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AuthenticationMsEntraId(props: NodeProps) {
  return (
    <Shape
      {...AUTHENTICATION_MS_ENTRA_ID}
      {...props}
      _style={extendStyle(AUTHENTICATION_MS_ENTRA_ID, props)}
    />
  )
}
