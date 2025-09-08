import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPUTE_ENGINE = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.compute_engine_2',
  },
  _original_width: 54,
  _original_height: 100,
}

export function ComputeEngine(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPUTE_ENGINE}
      {...props}
      _style={extendStyle(COMPUTE_ENGINE, props)}
    />
  )
}
