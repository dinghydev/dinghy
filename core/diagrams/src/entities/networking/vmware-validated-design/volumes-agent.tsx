import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VOLUMES_AGENT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.volumes_agent;',
  },
  _original_width: 49,
  _original_height: 50,
}

export function VolumesAgent(props: DiagramNodeProps) {
  return (
    <Shape
      {...VOLUMES_AGENT}
      {...props}
      _style={extendStyle(VOLUMES_AGENT, props)}
    />
  )
}
