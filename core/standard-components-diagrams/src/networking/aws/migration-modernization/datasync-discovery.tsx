import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATASYNC_DISCOVERY = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#01A88D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.datasync_discovery;',
  _width: 78,
  _height: 77,
}

export function DatasyncDiscovery(props: DiagramNodeProps) {
  return <Shape {...DATASYNC_DISCOVERY} {...props} />
}
