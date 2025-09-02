import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_STORAGE_COST = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.data_storage_cost',
  },
  _original_width: 78,
  _original_height: 100,
}

export function DataStorageCost(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_STORAGE_COST}
      {...props}
      _style={extendStyle(DATA_STORAGE_COST, props)}
    />
  )
}
