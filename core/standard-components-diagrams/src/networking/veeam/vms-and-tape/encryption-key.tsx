import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENCRYPTION_KEY = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.encryption_key;',
  },
  _original_width: 36.8,
  _original_height: 50.8,
}

export function EncryptionKey(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENCRYPTION_KEY}
      {...props}
      _style={extendStyle(ENCRYPTION_KEY, props)}
    />
  )
}
