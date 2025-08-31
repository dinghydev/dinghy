import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_ENCRYPTION_KEY = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.data_encryption_key;fillColor=#7D7C7C;gradientColor=none;',
  },
  _width: 46.5,
  _height: 60,
}

export function DataEncryptionKey(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_ENCRYPTION_KEY}
      {...props}
      _style={extendStyle(DATA_ENCRYPTION_KEY, props)}
    />
  )
}
