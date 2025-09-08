import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CD_DVD = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.cd_dvd;',
  },
  _original_width: 49,
  _original_height: 49,
}

export function CdDvd(props: DiagramNodeProps) {
  return <Shape {...CD_DVD} {...props} _style={extendStyle(CD_DVD, props)} />
}
