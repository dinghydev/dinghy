import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IPTV_CONTENT_MANAGER = {
  _style:
    'shape=mxgraph.cisco.misc.iptv_content_manager;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 78,
  _height: 51,
}

export function IptvContentManager(props: DiagramNodeProps) {
  return <Shape {...IPTV_CONTENT_MANAGER} {...props} />
}
