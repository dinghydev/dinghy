import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATASYNC_DISCOVERY = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#01A88D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.datasync_discovery;',
  },
  _original_width: 78,
  _original_height: 77,
}

export function DatasyncDiscovery(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATASYNC_DISCOVERY}
      {...props}
      _style={extendStyle(DATASYNC_DISCOVERY, props)}
    />
  )
}
