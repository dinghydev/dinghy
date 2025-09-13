import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FAX = {
  _style: {
    entity:
      'shape=mxgraph.cisco.modems_and_phones.fax;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 126,
  _height: 59,
}

export function Fax(props: DiagramNodeProps) {
  return <Shape {...FAX} {...props} _style={extendStyle(FAX, props)} />
}
