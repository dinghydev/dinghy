import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SD_WAN = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.sd_wan;',
  },
  _original_width: 50,
  _original_height: 49.96,
}

export function SdWan(props: DiagramNodeProps) {
  return <Shape {...SD_WAN} {...props} _style={extendStyle(SD_WAN, props)} />
}
