import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PLANT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.plant;',
  },
  _original_width: 47,
  _original_height: 51,
}

export function Plant(props: NodeProps) {
  return <Shape {...PLANT} {...props} _style={extendStyle(PLANT, props)} />
}
