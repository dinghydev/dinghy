import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COVER_PLATE = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rackGeneral.plate;fillColor=#e8e8e8;',
  },
  _width: 160,
  _height: 15,
}

export function CoverPlate(props: DiagramNodeProps) {
  return (
    <Shape
      {...COVER_PLATE}
      {...props}
      _style={extendStyle(COVER_PLATE, props)}
    />
  )
}
