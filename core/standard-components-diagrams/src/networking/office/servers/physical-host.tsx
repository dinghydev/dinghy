import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PHYSICAL_HOST = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.physical_host;fillColor=#2072B8;',
  },
  _original_width: 27,
  _original_height: 52,
}

export function PhysicalHost(props: DiagramNodeProps) {
  return (
    <Shape
      {...PHYSICAL_HOST}
      {...props}
      _style={extendStyle(PHYSICAL_HOST, props)}
    />
  )
}
