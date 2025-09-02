import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENCRYPTED_DATA = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.encrypted_data;fillColor=#7D7C7C;gradientColor=none;',
  },
  _original_width: 43.5,
  _original_height: 55.5,
}

export function EncryptedData(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENCRYPTED_DATA}
      {...props}
      _style={extendStyle(ENCRYPTED_DATA, props)}
    />
  )
}
