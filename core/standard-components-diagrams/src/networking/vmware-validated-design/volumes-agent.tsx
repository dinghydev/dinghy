import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VOLUMES_AGENT = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.volumes_agent;',
  _width: 49,
  _height: 50,
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
