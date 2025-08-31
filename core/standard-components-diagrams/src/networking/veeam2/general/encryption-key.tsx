import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENCRYPTION_KEY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.encryption_key;',
  },
  _width: 36,
  _height: 36,
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
