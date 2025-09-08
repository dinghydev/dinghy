import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONNECTORS = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.connectors',
  },
  _original_width: 50,
  _original_height: 34,
}

export function Connectors(props: DiagramNodeProps) {
  return (
    <Shape {...CONNECTORS} {...props} _style={extendStyle(CONNECTORS, props)} />
  )
}
