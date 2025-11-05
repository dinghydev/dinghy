import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENERIC_DATABASE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.generic_database;',
  },
  _original_width: 60,
  _original_height: 60,
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
