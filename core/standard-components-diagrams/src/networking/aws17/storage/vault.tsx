import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VAULT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.vault;fillColor=#E05243;gradientColor=none;',
  },
  _original_width: 54,
  _original_height: 75,
}

export function Vault(props: DiagramNodeProps) {
  return <Shape {...VAULT} {...props} _style={extendStyle(VAULT, props)} />
}
