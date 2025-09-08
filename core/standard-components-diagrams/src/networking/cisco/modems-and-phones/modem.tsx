import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MODEM = {
  _style: {
    entity:
      'shape=mxgraph.cisco.modems_and_phones.modem;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 77,
  _original_height: 27,
}

export function Modem(props: DiagramNodeProps) {
  return <Shape {...MODEM} {...props} _style={extendStyle(MODEM, props)} />
}
