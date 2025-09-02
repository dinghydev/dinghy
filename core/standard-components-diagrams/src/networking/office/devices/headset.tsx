import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEADSET = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.headset;',
  },
  _original_width: 36,
  _original_height: 48,
}

export function Headset(props: DiagramNodeProps) {
  return <Shape {...HEADSET} {...props} _style={extendStyle(HEADSET, props)} />
}
