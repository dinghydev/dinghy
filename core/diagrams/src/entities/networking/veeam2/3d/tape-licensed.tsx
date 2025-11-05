import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TAPE_LICENSED = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.tape_licensed;',
  },
  _original_width: 70,
  _original_height: 58,
}

export function TapeLicensed(props: NodeProps) {
  return (
    <Shape
      {...TAPE_LICENSED}
      {...props}
      _style={extendStyle(TAPE_LICENSED, props)}
    />
  )
}
