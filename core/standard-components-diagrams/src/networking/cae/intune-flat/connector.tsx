import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONNECTOR = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.connector',
  },
  _original_width: 50,
  _original_height: 17,
}

export function Connector(props: DiagramNodeProps) {
  return (
    <Shape {...CONNECTOR} {...props} _style={extendStyle(CONNECTOR, props)} />
  )
}
