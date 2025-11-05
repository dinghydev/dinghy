import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_ENCRYPTION_KEY = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.data_encryption_key;fillColor=#7D7C7C;gradientColor=none;',
  },
  _original_width: 46.5,
  _original_height: 60,
}

export function DataEncryptionKey(props: NodeProps) {
  return (
    <Shape
      {...DATA_ENCRYPTION_KEY}
      {...props}
      _style={extendStyle(DATA_ENCRYPTION_KEY, props)}
    />
  )
}
