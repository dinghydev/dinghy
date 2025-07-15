import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SD_WAN = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.sd_wan;',
  _width: 50,
  _height: 49.96,
}

export function SdWan(props: DiagramNodeProps) {
  return <Shape {...SD_WAN} {...props} />
}
