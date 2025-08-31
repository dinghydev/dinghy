import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLANT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.plant;',
  },
  _width: 47,
  _height: 51,
}

export function Plant(props: DiagramNodeProps) {
  return <Shape {...PLANT} {...props} _style={extendStyle(PLANT, props)} />
}
