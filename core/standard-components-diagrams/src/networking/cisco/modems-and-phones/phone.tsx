import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PHONE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.modems_and_phones.phone;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 64,
  _height: 46,
}

export function Phone(props: DiagramNodeProps) {
  return <Shape {...PHONE} {...props} _style={extendStyle(PHONE, props)} />
}
