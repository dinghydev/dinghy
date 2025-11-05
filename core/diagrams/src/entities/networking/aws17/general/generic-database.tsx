import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENERIC_DATABASE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.generic_database;fillColor=#7D7C7C;gradientColor=none;',
  },
  _original_width: 49.5,
  _original_height: 64.5,
}

export function GenericDatabase(props: NodeProps) {
  return (
    <Shape
      {...GENERIC_DATABASE}
      {...props}
      _style={extendStyle(GENERIC_DATABASE, props)}
    />
  )
}
