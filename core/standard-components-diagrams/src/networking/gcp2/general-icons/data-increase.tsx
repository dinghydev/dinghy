import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_INCREASE = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.data_increase',
  },
  _original_width: 78,
  _original_height: 100,
}

export function DataIncrease(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_INCREASE}
      {...props}
      _style={extendStyle(DATA_INCREASE, props)}
    />
  )
}
