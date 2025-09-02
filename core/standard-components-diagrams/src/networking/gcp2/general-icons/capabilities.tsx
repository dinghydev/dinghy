import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CAPABILITIES = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.capabilities',
  },
  _original_width: 100,
  _original_height: 76,
}

export function Capabilities(props: DiagramNodeProps) {
  return (
    <Shape
      {...CAPABILITIES}
      {...props}
      _style={extendStyle(CAPABILITIES, props)}
    />
  )
}
