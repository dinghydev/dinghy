import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const END_TO_END_ENCRYPTION = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.end_to_end_encryption;',
  _width: 44.8,
  _height: 44.8,
}

export function EndToEndEncryption(props: DiagramNodeProps) {
  return (
    <Shape
      {...END_TO_END_ENCRYPTION}
      {...props}
      _style={extendStyle(END_TO_END_ENCRYPTION, props)}
    />
  )
}
